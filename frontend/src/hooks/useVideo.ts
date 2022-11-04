type TDialIn = ((userMediaPromise: Promise<MediaStream>) => void) | undefined;
type TLeaveCall = (() => void) | undefined;

const useVideo = (dialIn: TDialIn, leaveCall: TLeaveCall) => {
  const addVideoStream = (video: HTMLVideoElement, remoteStream: MediaStream) => {
    video.srcObject = remoteStream;
    video.load();
    video
      .play()
      .then((_) => {
        // Video playback started ;)
      })
      .catch((e) => {
        // Video playback failed ;(
      });
  };

  const removeVideoStream = (video: HTMLVideoElement) => {
    const mediaStream = video.srcObject as MediaStream;
    // TBH here still like no solved lol
    // mediaStream?.getTracks().forEach((track) => {
    //   track.stop();
    //   mediaStream.removeTrack(track);
    // });
    mediaStream?.getVideoTracks().forEach((track) => {
      track.stop();
    });
    mediaStream?.getAudioTracks().forEach((track) => {
      track.stop();
    });

    video.srcObject = null;
    video.load();
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

  return { handleCall, handleLeave, removeVideoStream, addVideoStream };
};

export default useVideo;
