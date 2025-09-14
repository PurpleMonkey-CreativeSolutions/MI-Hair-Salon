import React, { useEffect, useRef } from "react";
import "./Hero.css";

/*
  HERO (no bounding box, corner logo restored)
  - Full-bleed background via <picture> with art-direction (portrait/ultrawide/default)
  - Sticky header above; hero height = 100svh - --header-h
  - Corner logo inside the hero (per comp)
  - Entrance animation replays whenever hero re-enters view
*/

export default function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const replay = () => {
      el.classList.remove("animate-in");
      // force reflow
      // eslint-disable-next-line no-unused-expressions
      el.offsetHeight;
      el.classList.add("animate-in");
    };

    replay();

    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && replay()),
      { threshold: 0.5 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section id="home" className="hero animate-in" ref={heroRef}>
      <div className="hero-viewport">
        {/* Background image with art-direction */}
        <picture className="hero-picture">
          {/* Portrait / tall screens */}
          <source srcSet="/images/hero-portrait.png" media="(max-aspect-ratio: 3/4)" />
          {/* Ultra-wide */}
          <source srcSet="/images/hero-ultrawide.png" media="(min-aspect-ratio: 21/9)" />
          {/* Default landscape */}
          <img
            src="/images/hero-landscape.png"
            alt=""
            className="hero-img"
            aria-hidden="true"
            loading="eager"
            fetchpriority="high"
          />
        </picture>

        <div className="hero-overlay" />

        {/* Corner logo (restored, matches the comp) */}
        <div className="hero-logo">
          <img src="/images/MI_Logo.png" alt="Modern Integrity" className="logo-img" />
        </div>

        {/* Content */}
        <div className="hero-inner">
          <div className="hero-content">
            <h1 className="hero-title">
              HELLO<br />BEAUTIFUL<span className="title-dot"></span>
            </h1>

            <p className="hero-tagline">Gorgeous | Chic | Effortlessly you</p>
            <p className="hero-subline">Mastering the art of modern elegance.</p>

            <div className="hero-separator" aria-hidden="true" />

            <button className="hero-cta">BOOK NOW</button>
          </div>
        </div>
      </div>
    </section>
  );
}