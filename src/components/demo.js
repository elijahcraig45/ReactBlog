import React from 'react';

const VideoDemo = () => {
  return (
    <div>
      <h1>Video Showcase</h1>
      <video controls>
        <source src="/images/daisyatKittens.mov" type="video/quicktime" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoDemo;
