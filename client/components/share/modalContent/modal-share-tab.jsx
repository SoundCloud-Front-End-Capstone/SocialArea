import React from 'react';

class ModalShareTab extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const imgStyle = {
      position: 'absolute',
      width: 420,
      height: 165,
    };
    return (
      <div>
        <button type="button">Share</button>
        <button type="button">Embed</button>
        <button type="button">Message</button>
        <div id="modalShare-top">
          <img src="https://s3-us-west-1.amazonaws.com/fec-project-social-area/musicPlayer.PNG" alt="music_player" style={imgStyle} />
        </div>
        <div id="modalShare-bottom">
          Share
        </div>
      </div>
    );
  }
}

export default ModalShareTab;
