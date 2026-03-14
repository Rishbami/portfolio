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
                Project Summary
              </h2>
              <p>
                Where2P helps people find clean, reliable public toilets fast.
                It combines real photos, hygiene ratings, and accessibility
                filters so users don’t have to guess when they’re out and about.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[color:var(--ink)]">
                Lean Canvas Snapshot
              </h2>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium text-[color:var(--ink)]">
                    Problem
                  </h3>
                  <ul className="mt-2 list-disc pl-5">
                    <li>
                      Hard to find clean, reliable toilets quickly in busy
                      areas.
                    </li>
                    <li>
                      Online info is outdated and doesn’t show cleanliness.
                    </li>
                    <li>Accessibility needs aren’t easy to filter by.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[color:var(--ink)]">
                    Solution
                  </h3>
                  <ul className="mt-2 list-disc pl-5">
                    <li>Map of nearby toilets with real user photos.</li>
                    <li>Ratings that roll into a hygiene score.</li>
                    <li>Filters for accessibility and baby-changing.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[color:var(--ink)]">
                    Unique Value
                  </h3>
                  <ul className="mt-2 list-disc pl-5">
                    <li>
                      Community-powered accuracy with photos and honest reviews.
                    </li>
                    <li>
                      Accessibility-first filtering instead of vague labels.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-[color:var(--ink)]">
                    Early Adopters
                  </h3>
                  <ul className="mt-2 list-disc pl-5">
                    <li>Tourists and commuters in city centers.</li>
                    <li>Parents with young children.</li>
                    <li>People with accessibility needs.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[color:var(--ink)]">
                Stakeholders & Persona
              </h2>
              <p>
                Stakeholders include city dwellers, accessibility users,
                parents/caregivers, commuters, and venue owners. The core persona
                is Tom, a 26-year-old tourist who needs a clean toilet quickly
                before a concert. He relies on reviews and photos to avoid
                wasting time.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[color:var(--ink)]">
                MVP Requirements
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>GPS search for nearby toilets.</li>
                <li>Filters for cleanliness, accessibility, and baby-changing.</li>
                <li>Listings with photos, ratings, and key facility info.</li>
                <li>User reviews, ratings, and photo uploads.</li>
                <li>Navigation to the toilet via external maps.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[color:var(--ink)]">
                Non-Functional Goals
              </h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>Find a nearby toilet in under 2 seconds.</li>
                <li>Accessible UI (contrast, labels, simple flow).</li>
                <li>Secure, reliable, and scalable architecture.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-[color:var(--ink)]">
                What I’m Focusing On
              </h2>
              <p>
                The focus is building trust: clean data, verified photos, and
                frictionless discovery. The product lives or dies on speed,
                accuracy, and user confidence.
              </p>
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
