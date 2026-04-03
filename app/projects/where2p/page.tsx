'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const mvpScreens = [
  { src: '/where2p/IMG_5126.png', alt: 'Where2P app screen 1' },
  { src: '/where2p/IMG_5127.png.webp', alt: 'Where2P app screen 2' },
  { src: '/where2p/IMG_5128.png.webp', alt: 'Where2P app screen 3' },
  { src: '/where2p/IMG_5129.png.webp', alt: 'Where2P app screen 4' },
  { src: '/where2p/IMG_5130.png.webp', alt: 'Where2P app screen 5' },
  { src: '/where2p/IMG_5132.png.webp', alt: 'Where2P app screen 6' },
  { src: '/where2p/IMG_5133.png.webp', alt: 'Where2P app screen 7' },
  { src: '/where2p/IMG_5134.png.webp', alt: 'Where2P app screen 8' },
  { src: '/where2p/IMG_5135.png.webp', alt: 'Where2P app screen 9' },
  { src: '/where2p/IMG_5136.png.webp', alt: 'Where2P app screen 10' },
  { src: '/where2p/IMG_5137.png.webp', alt: 'Where2P app screen 11' },
  { src: '/where2p/IMG_5138.png.webp', alt: 'Where2P app screen 12' },
  { src: '/where2p/IMG_5139.png.webp', alt: 'Where2P app screen 13' },
];

const wireframes = [
  {
    src: '/where2p/wireframes-1.png',
    alt: 'Where2P wireframes showing search, filters, and toilet details',
  },
  {
    src: '/where2p/wireframes-2.png',
    alt: 'Where2P wireframes showing reviews, new listings, and profile flows',
  },
];

const Where2PPage = () => {
  const [activeImage, setActiveImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  const openImage = (src: string, alt: string) => {
    setActiveImage({ src, alt });
  };

  const closeImage = () => {
    setActiveImage(null);
  };

  return (
    <>
      <Head>
        <title>Where2P | Projects</title>
        <meta
          name="description"
          content="Where2P project showcase by Rishi Ram."
        />
      </Head>
      <main className="page-shell">
        <section className="my-20">
          <Link href="/" className="nav-link">
            Back to Projects
          </Link>

          <div className="case-hero fade-up">
            <div className="case-copy">
              <span className="eyebrow">Product Concept</span>
              <h1 className="case-title">Where2P</h1>
              <p className="case-lead">
                A concept designed to help people find clean, reliable public
                toilets faster with clearer information and better trust signals.
              </p>
            </div>
          </div>
        </section>

        <section className="case-surface fade-up delay-1">
          <div className="case-intro-grid">
            <div className="case-panel">
              <p className="case-panel-kicker">Overview</p>
              <h2 className="case-panel-title">A utility-first product focused on confidence</h2>
              <p className="case-panel-copy">
                Where2P was built around a simple problem: public toilet
                information is often unclear, outdated, or missing entirely.
                The concept uses location, photos, ratings, and accessibility
                details to make quick decisions easier.
              </p>
              <div className="case-actions">
                <a
                  href="https://where2pweb-8bpjqvlr6-rishbamis-projects.vercel.app/search"
                  target="_blank"
                  rel="noreferrer"
                  className="case-link-button"
                >
                  Visit Live Site
                </a>
              </div>
            </div>

            <div className="case-showcase-card">
              <div className="case-showcase-frame">
                <span className="case-showcase-label">Core Idea</span>
                <p className="case-showcase-copy">
                  Make a stressful, uncertain search feel faster, clearer, and
                  more trustworthy.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="my-20 fade-up delay-1">
          <div className="case-detail-grid">
            <article className="case-panel">
              <p className="case-panel-kicker">Problem</p>
              <p className="case-panel-copy">
                Toilet information is often incomplete, outdated, and hard to
                trust before arriving.
              </p>
            </article>

            <article className="case-panel">
              <p className="case-panel-kicker">Solution</p>
              <p className="case-panel-copy">
                A map-led experience supported by photos, hygiene ratings, and
                accessibility filters.
              </p>
            </article>

            <article className="case-panel">
              <p className="case-panel-kicker">Users</p>
              <p className="case-panel-copy">
                Useful for commuters, tourists, parents, and people with
                accessibility needs.
              </p>
            </article>
          </div>
        </section>

        <section className="my-20 fade-up delay-2">
          <div className="case-section-head">
            <span className="eyebrow">Screens</span>
            <h2 className="section-title case-section-title">MVP interface</h2>
            <p className="case-section-copy">
              The product focused on nearby discovery, practical filtering, and
              clearer detail screens.
            </p>
          </div>

          <div className="case-gallery case-gallery-finals">
            {mvpScreens.map((screen, index) => (
              <figure
                className={`case-gallery-card ${index === 0 ? 'case-gallery-card-featured' : ''}`}
                key={screen.src}
              >
                <button
                  type="button"
                  className="image-button"
                  onClick={() => openImage(screen.src, screen.alt)}
                >
                  <img
                    src={screen.src}
                    alt={screen.alt}
                    className="case-gallery-image"
                  />
                </button>
              </figure>
            ))}
          </div>
        </section>

        <section className="my-20 fade-up delay-2">
          <div className="case-section-head">
            <span className="eyebrow">Process</span>
            <h2 className="section-title case-section-title">Wireframes and planning</h2>
            <p className="case-section-copy">
              Early wireframes were used to structure the main flows before
              moving into the final screens.
            </p>
          </div>

          <div className="case-gallery case-gallery-wireframes">
            {wireframes.map((image) => (
              <figure className="case-gallery-card" key={image.src}>
                <button
                  type="button"
                  className="image-button"
                  onClick={() => openImage(image.src, image.alt)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="case-gallery-image case-gallery-image-wide"
                  />
                </button>
              </figure>
            ))}
          </div>
        </section>

        {activeImage && (
          <div className="lightbox" onClick={closeImage}>
            <div
              className="lightbox-card"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={activeImage.src}
                alt={activeImage.alt}
                className="lightbox-image"
              />
              <button
                type="button"
                className="lightbox-close"
                onClick={closeImage}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Where2PPage;
