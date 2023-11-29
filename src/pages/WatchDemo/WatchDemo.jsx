import YouTube from "react-youtube";
const WatchDemo = () => {
  const videoId = "qQGT74k-g1E";

  // Options for the YouTube player
  const opts = {
    height: "500",
    width: "800",
    playerVars: {
      autoplay: 1,
    },
  };

  // Callback function to handle events from the YouTube player
  const onReady = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };
  return (
    <div className="px-5  p-7 mb-10 rounded-md max-w-screen-xl mx-auto min-h-screen mt-6">
      <div className="border bg-[#FAFBFE] p-7">
        <YouTube videoId={videoId} opts={opts} onReady={onReady} />
      </div>
    </div>
  );
};

export default WatchDemo;
