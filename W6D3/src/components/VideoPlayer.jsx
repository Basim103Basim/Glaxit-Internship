import { useRef } from "react";

function VideoPlayer() {
    const videoRef = useRef(null);

    function playVideo() {
        videoRef.current.play();
    }

    function pauseVideo() {
        videoRef.current.pause();
    }

    function muteVideo() {
        videoRef.current.muted = true;
    }

    function unmuteVideo() {
        videoRef.current.muted = false;
    }

    return (
        <div className="video-player">
            <video
                ref={videoRef}
                height="500"
                width="600"
                src="/video.mp4"
            >
                Your browser does not support videos.
            </video>

            <div className="controls">
                <button onClick={playVideo}>Play</button>
                <button onClick={pauseVideo}>Pause</button>
                <button onClick={muteVideo}>Mute</button>
                <button onClick={unmuteVideo}>Unmute</button>
            </div>
        </div>
    );
}

export default VideoPlayer;