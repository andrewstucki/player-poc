import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import "./App.css";

class VideoPlayer extends React.Component {
  componentDidMount() {
    // instantiate Video.js
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log("onPlayerReady", this);
    });
  }

  // destroy player on unmount
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose();
    }
  }

  // wrap the player in a div with a `data-vjs-player` attribute
  // so videojs won't create additional wrapper in the DOM
  // see https://github.com/videojs/video.js/pull/3856
  render() {
    return (
      <div>
        <div data-vjs-player>
          <video
            ref={(node) => (this.videoNode = node)}
            className="video-js vjs-theme-city vjs-16-9"
          ></video>
        </div>
      </div>
    );
  }
}

const videoJsOptions = {
  autoplay: true,
  controls: true,
  sources: [
    {
      src:
        "https://videodelivery.net/3d383ed53b65254ea3783cc7743702a2/manifest/video.m3u8",
    },
  ],
};

function App() {
  return <VideoPlayer {...videoJsOptions} />;
}

export default App;
