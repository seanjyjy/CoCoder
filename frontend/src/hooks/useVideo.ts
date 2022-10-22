import { MediaConnection } from 'peerjs';

type TDialIn = ((userMediaPromise: Promise<MediaStream>) => void) | undefined;
type TLeaveCall = (() => void) | undefined;

const useVideo = (dialIn: TDialIn, leaveCall: TLeaveCall) => {
  const attachMediaConnectionListeners = (call: MediaConnection, remoteVideo: HTMLVideoElement): MediaConnection => {
    call.on('stream', (remoteStream) => {
      remoteVideo.srcObject = remoteStream; // Note: Requires video components to be mounted already (in DOM)
    });
    return call;
  };

  const removeVideoStream = (video: HTMLVideoElement) => {
    const mediaStream = video.srcObject as MediaStream;
    mediaStream?.getTracks().forEach((track) => {
      track.stop();
    });

    video.srcObject = null;
  };

  const handleCall = (myVideo: HTMLVideoElement) => {
    const mediaPromise = navigator.mediaDevices
      .getUserMedia({
        video: true,
        audio: true,
      })
      .then((mediaStream) => {
        myVideo.srcObject = mediaStream;
        myVideo.play();
        return mediaStream;
      });
    dialIn?.(mediaPromise);
  };

  const handleLeave = (myVideo: HTMLVideoElement) => {
    removeVideoStream(myVideo);
    leaveCall?.();
  };

  return { attachMediaConnectionListeners, handleCall, handleLeave, removeVideoStream };
};

export default useVideo;
