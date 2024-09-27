export function Video() {
  return (
    <video
      className="absolute top-0 opacity-80 z-10"
      width="100%"
      height="240"
      loop
      autoPlay
      muted
      preload="none"
    >
      <source src="/assets/video/banner.mp4" type="video/mp4" />
      <track
        src="/assets/video/banner.mp4"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
    </video>
  );
}