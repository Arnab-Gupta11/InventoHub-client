import { div } from "framer-motion/client";
import { Helmet } from "react-helmet-async";
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
    <div className="bg-light-bg-200 dark:bg-dark-bg-200 ">
      <div className="px-5  p-7 mb-10 rounded-md min-h-screen mt-6">
        <Helmet>
          <title>Inventohub | Watch Demo</title>
        </Helmet>
        <div className="p-7 grid place-items-center">
          <YouTube
            videoId={videoId}
            opts={opts}
            onReady={onReady}
            className="bg-light-bg-100 dark:bg-dark-bg-300 p-5 shadow-light-container-shadow dark:shadow-dark-container-shadow rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default WatchDemo;
