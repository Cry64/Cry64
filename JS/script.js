.about-page {
    border: 1px solid black;
    margin: 20px;
    height: 48.65vw;
  }
  
  .about-container {
    overflow: scroll;
    height: 48.5vw;
  }
  
  .video-background {
  position: relative;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
}

.video-background iframe {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  transform: translate(-50%, -50%);
}

@media (min-aspect-ratio: 16/9) {
  .video-background iframe {
    /* height = 100 * (9 / 16) = 56.25 */
    height: 56.25vw;
  }
}
@media (max-aspect-ratio: 16/9) {
  .video-background iframe {
    /* width = 100 / (9 / 16) = 177.777777 */
    width: 177.78vh;
  }
}