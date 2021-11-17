import React from "react";
import PropTypes from "prop-types";

import '../css/YoutubeEmbed.css'

const YoutubeEmbed = ({ embedId, display, setDisplayProp }) => (
    <div className="video-container" style={{display: display == false ? 'none' : 'block'}} onClick={() => setDisplayProp(false)}>

  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
    <span className='video-close' onClick={() => setDisplayProp(false)}>X</span>
  </div>
    </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;