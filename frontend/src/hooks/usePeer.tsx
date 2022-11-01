import Peer, { DataConnection, MediaConnection } from 'peerjs';
import { useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';
import { CommsServerToClientEvents, CommsClientToServerEvents } from 'src/types';
import videoObserver from 'src/observer/VideoObserver';
import { PREFIX_COMMUNICATION_SVC, URI_COMMUNICATION_SVC } from 'src/configs';

type TCommsSocket = Socket<CommsServerToClientEvents, CommsClientToServerEvents>;

const usePeer = (roomId: string) => {
  // Only one data/media connection as each room has at most 2 people
  const [dataConnection, setDataConnection] = useState<DataConnection>();
  const [mediaConnection, setMediaConnection] = useState<MediaConnection>();
  const [dialIn, setDialIn] = useState<(userMediaPromise: Promise<MediaStream>) => void>();
  const [leaveCall, setLeaveCall] = useState<() => void>();

  useEffect(() => {
    console.log('Connecting to communication service');
    const socket: TCommsSocket = io(URI_COMMUNICATION_SVC, {
      closeOnBeforeunload: false,
      path: PREFIX_COMMUNICATION_SVC + '/socket.io',
    });
    const myPeer = new Peer({ debug: 2 });

    // i think if we dont wait for on connect we might run in race condition
    socket.on('connect', () => {
      myPeer.on('open', (id) => {
        console.log('Connected to PeerServer with id', id);
        socket.emit('joinRoomEvent', roomId, id);
      });
      myPeer.on('connection', (conn) => {
        // Client that received the connection will have this connection object
        setDataConnection(conn);
      });
      myPeer.on('disconnected', () => {
        console.log('Connection lost. Reconnecting...');
        myPeer.reconnect();
      });
      myPeer.on('close', () => {
        console.log('Connection closed');
      });
      myPeer.on('error', (err) => {
        console.log(err);
        alert('' + err);
      });

      socket.on('peerConnected', (remotePeerId: string) => {
        console.log(remotePeerId, 'connected to room');
        const conn = myPeer.connect(remotePeerId);
        // Client that initiated connection will have this connection object
        setDataConnection(conn);
      });
      socket.on('peerDisconnected', (remotePeerId: string) => {
        console.log(remotePeerId, 'disconnected from room');
        dataConnection?.close();
        mediaConnection?.close();
      });
      socket.on('peerCallDisconnected', (remotePeerId: string) => {
        console.log(remotePeerId, 'disconnected from call');
        videoObserver.publish('partnerCloseCall');
        // mediaConnection?.close();
      });
    });

    setDialIn((_: any) => (userMediaPromise: Promise<MediaStream>) => {
      myPeer.on('call', (call) => {
        userMediaPromise.then((mediaStream) => {
          // Answer the call, providing our mediaStream
          if (call.peerConnection) {
            call.peerConnection.getSenders()[0].replaceTrack(mediaStream.getTracks()[0]);
            call.peerConnection.getSenders()[1].replaceTrack(mediaStream.getTracks()[1]);
          }
          call.answer(mediaStream);
        });
        setMediaConnection(call);
        call.on('stream', (remoteStream) => videoObserver.publish('partnerOpenVideo', remoteStream));
      });
      socket.on('peerCallConnected', (peerId: string) => {
        userMediaPromise.then((mediaStream) => {
          // Call a peer, providing our mediaStream
          const call = myPeer.call(peerId, mediaStream);
          // Client that initiated connection will have this connection object
          setMediaConnection(call);
          call.on('stream', (remoteStream) => videoObserver.publish('partnerOpenVideo', remoteStream));
        });
      });
      socket.emit('joinCallRoomEvent', roomId, myPeer.id);
    });

    setLeaveCall(() => () => {
      setMediaConnection((prev) => {
        prev?.close();
        return prev;
      });
      socket.emit('leaveCallRoomEvent', roomId, myPeer.id);
    });

    const closeConnection = () => {
      socket.close();
      myPeer.destroy();
      setDataConnection(undefined);
      setMediaConnection(undefined);
    };

    // triggered on refresh
    window.addEventListener('beforeunload', closeConnection);

    return () => {
      window.removeEventListener('beforeunload', closeConnection);
      // triggered when leaving page
      closeConnection();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { dataConnection, mediaConnection, leaveCall, dialIn };
};

export default usePeer;
