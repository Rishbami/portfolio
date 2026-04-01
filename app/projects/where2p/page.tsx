'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const mvpScreens = [
  {
    src: '/where2p/IMG_5126.png',
    alt: 'Where2P MVP app screen 1',
  },
  {
    src: '/where2p/IMG_5127.png.webp',
    alt: 'Where2P MVP app screen 2',
  },
  {
    src: '/where2p/IMG_5128.png.webp',
    alt: 'Where2P MVP app screen 3',
  },
  {
    src: '/where2p/IMG_5129.png.webp',
    alt: 'Where2P MVP app screen 4',
  },
  {
    src: '/where2p/IMG_5130.png.webp',
    alt: 'Where2P MVP app screen 5',
  },
  {
    src: '/where2p/IMG_5132.png.webp',
    alt: 'Where2P MVP app screen 6',
  },
  {
    src: '/where2p/IMG_5133.png.webp',
    alt: 'Where2P MVP app screen 7',
  },
  {
    src: '/where2p/IMG_5134.png.webp',
    alt: 'Where2P MVP app screen 8',
  },
  {
    src: '/where2p/IMG_5135.png.webp',
    alt: 'Where2P MVP app screen 9',
  },
  {
    src: '/where2p/IMG_5136.png.webp',
    alt: 'Where2P MVP app screen 10',
  },
  {
    src: '/where2p/IMG_5137.png.webp',
    alt: 'Where2P MVP app screen 11',
  },
  {
    src: '/where2p/IMG_5138.png.webp',
    alt: 'Where2P MVP app screen 12',
  },
  {
    src: '/where2p/IMG_5139.png.webp',
    alt: 'Where2P MVP app screen 13',
  },
];

const Where2P = () => {
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
          <Link href="/projects" className="nav-link">
            Back to Projects
          </Link>
          <h1 className="section-title" style={{ marginTop: '1.5rem' }}>
            Where2P
          </h1>
          <div className="mx-auto max-w-4xl space-y-10 text-[color:var(--muted)]">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[color:var(--ink)]">
                MVP App Screenshots
              </h2>
              <div className="mvp-grid">
                {mvpScreens.map((screen) => (
                  <figure className="mvp-card" key={screen.src}>
                    <button
                      type="button"
                      className="image-button"
                      onClick={() => openImage(screen.src, screen.alt)}
                    >
                      <img
                        src={screen.src}
                        alt={screen.alt}
                        className="mvp-image"
                      />
                    </button>
                  </figure>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[color:var(--ink)]">
                Overview
              </h2>
              <p>
                Where2P helps people find clean, reliable public toilets fast.
                It uses real photos, hygiene ratings, and accessibility filters
                to make quick decisions easier when people are out.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[color:var(--ink)]">
                Snapshot
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium text-[color:var(--ink)]">
                    Problem
                  </h3>
                  <ul className="mt-2 list-disc pl-5">
                    <li>
                      Public toilet info is often incomplete or outdated.
                    </li>
                    <li>Cleanliness is hard to judge before arriving.</li>
                    <li>Accessibility details are usually unclear.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[color:var(--ink)]">
                    Solution
                  </h3>
                  <ul className="mt-2 list-disc pl-5">
                    <li>Nearby toilets shown on a map.</li>
                    <li>Real photos and community hygiene ratings.</li>
                    <li>Filters for accessibility and baby-changing.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[color:var(--ink)]">
                    Why It Matters
                  </h3>
                  <ul className="mt-2 list-disc pl-5">
                    <li>Builds trust with photos and user reviews.</li>
                    <li>Puts accessibility on the main path, not as an afterthought.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[color:var(--ink)]">
                    Main Users
                  </h3>
                  <ul className="mt-2 list-disc pl-5">
                    <li>Tourists and commuters.</li>
                    <li>People with accessibility needs.</li>
                    <li>Parents with young children.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[color:var(--ink)]">
                MVP Requirements
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>GPS search for nearby toilets.</li>
                <li>Filters for cleanliness, accessibility, and baby-changing.</li>
                <li>Listings with photos, ratings, and key facility info.</li>
                <li>User reviews and photo uploads.</li>
                <li>Directions via external maps.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[color:var(--ink)]">
                Wireframes
              </h2>
              <div className="wireframe-grid">
                <figure className="wireframe-card">
                  <button
                    type="button"
                    className="image-button"
                    onClick={() =>
                      openImage(
                        '/where2p/wireframes-1.png',
                        'Where2P wireframes: home map, search and filter, toilet details, login'
                      )
                    }
                  >
                    <img
                      src="/where2p/wireframes-1.png"
                      alt="Where2P wireframes: home map, search and filter, toilet details, login"
                      className="wireframe-image"
                    />
                  </button>
                  <figcaption className="wireframe-caption">
                    Core discovery, filtering, and authentication flows.
                  </figcaption>
                </figure>
                <figure className="wireframe-card">
                  <button
                    type="button"
                    className="image-button"
                    onClick={() =>
                      openImage(
                        '/where2p/wireframes-2.png',
                        'Where2P wireframes: add review, add new toilet, user profile'
                      )
                    }
                  >
                    <img
                      src="/where2p/wireframes-2.png"
                      alt="Where2P wireframes: add review, add new toilet, user profile"
                      className="wireframe-image"
                    />
                  </button>
                  <figcaption className="wireframe-caption">
                    Reviews, listings, and profile activity.
                  </figcaption>
                </figure>
              </div>
            </div>

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

export default Where2P;
