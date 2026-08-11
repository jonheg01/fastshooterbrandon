import { site, heroVideo } from "@/lib/site";

export function Hero() {
  return (
    <header className="hero">
      {heroVideo.src ? (
        <video
          className="hero__media"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={heroVideo.poster ?? undefined}
          aria-label={`${site.person} shooting`}
        >
          <source src={heroVideo.src} type="video/mp4" />
        </video>
      ) : heroVideo.poster ? (
        <img
          className="hero__poster"
          src={heroVideo.poster}
          alt={`${site.person} shooting`}
        />
      ) : null}

      <div className="hero__scrim" />
      <div className="hero__cut" />

      <div className="hero__inner">
        <div className="wrap">
          <h1 className="wordmark">
            <span className="l1">{site.wordmark.line1}</span>
            <span className="l2">{site.wordmark.line2}</span>
          </h1>
          <p className="credential">{site.credential}</p>
        </div>
      </div>
    </header>
  );
}
