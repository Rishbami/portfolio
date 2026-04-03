'use client';

import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const wireframes = [
  {
    src: '/payday/IMG_5140.jpg.webp',
    alt: 'Client #1 early planning wireframe 1',
    caption: 'Early structure for the onboarding and key conversion screens.',
  },
  {
    src: '/payday/IMG_5142.jpg.webp',
    alt: 'Client #1 early planning wireframe 2',
    caption: 'Layout exploration focused on hierarchy, spacing, and flow.',
  },
  {
    src: '/payday/IMG_5143.jpg.webp',
    alt: 'Client #1 early planning wireframe 3',
    caption: 'Refined concepts used to align direction before visual design.',
  },
];

const finalScreens = [
  {
    src: '/payday/0x0ss.png',
    alt: 'Client #1 final mobile screen 1',
    caption: 'Landing and primary call-to-action.',
  },
  {
    src: '/payday/0x0ss (1).png',
    alt: 'Client #1 final mobile screen 2',
    caption: 'Clearer structure for content and user guidance.',
  },
  {
    src: '/payday/0x0ss (2).png',
    alt: 'Client #1 final mobile screen 3',
    caption: 'Improved readability and visual consistency.',
  },
  {
    src: '/payday/0x0ss (3).png',
    alt: 'Client #1 final mobile screen 4',
    caption: 'Supporting screens designed to feel cohesive and trustworthy.',
  },
  {
    src: '/payday/0x0ss (4).png',
    alt: 'Client #1 final mobile screen 5',
    caption: 'A polished outcome shaped through ongoing review and iteration.',
  },
];

const ClientOnePage = () => {
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
        <title>Client #1 | Projects</title>
        <meta
          name="description"
          content="Client #1 case study showcasing a professional client design process from wireframes to final screens."
        />
      </Head>
      <main className="page-shell">
        <section className="my-20">
          <Link href="/" className="nav-link">
            Back to Projects
          </Link>

          <div className="case-hero fade-up">
            <div className="case-copy">
              <span className="eyebrow">Client Work</span>
              <h1 className="case-title">Client #1</h1>
              <p className="case-lead">
                A mobile design project developed from early wireframes to a
                polished final direction through close client feedback.
              </p>
            </div>
          </div>
        </section>

        <section className="case-surface fade-up delay-1">
          <div className="case-intro-grid">
            <div className="case-panel">
              <p className="case-panel-kicker">Overview</p>
              <h2 className="case-panel-title">A first client project with a clear design process</h2>
              <p className="case-panel-copy">
                The project started with wireframes, moved through review
                rounds, and finished as a cleaner, more professional mobile
                concept.
              </p>
            </div>

            <figure className="case-feature-card">
              <button
                type="button"
                className="image-button"
                onClick={() => openImage(finalScreens[0].src, finalScreens[0].alt)}
              >
                <img
                  src={finalScreens[0].src}
                  alt={finalScreens[0].alt}
                  className="case-feature-image"
                />
              </button>
            </figure>
          </div>
        </section>

        <section className="my-20 fade-up delay-1">
          <div className="case-detail-grid">
            <article className="case-panel">
              <p className="case-panel-kicker">Challenge</p>
              <h2 className="case-panel-title">Build a direction the client could trust</h2>
              <p className="case-panel-copy">
                Turn early ideas into something clear, credible, and aligned
                with the client&apos;s goals.
              </p>
            </article>

            <article className="case-panel">
              <p className="case-panel-kicker">Approach</p>
              <h2 className="case-panel-title">Iterate with regular feedback</h2>
              <p className="case-panel-copy">
                I worked in stages: wireframe, review, refine, and repeat until
                the screens felt cohesive.
              </p>
            </article>

            <article className="case-panel">
              <p className="case-panel-kicker">Result</p>
              <h2 className="case-panel-title">A cleaner final product</h2>
              <p className="case-panel-copy">
                The final outcome was more polished, more consistent, and
                better matched to the business.
              </p>
            </article>
          </div>
        </section>

        <section className="my-20 fade-up delay-2">
          <div className="case-section-head">
            <span className="eyebrow">Process</span>
            <h2 className="section-title case-section-title">Wireframes and early exploration</h2>
            <p className="case-section-copy">
              Early wireframes were used to lock in structure and flow before
              moving into final design.
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

        <section className="my-20 fade-up delay-2">
          <div className="case-section-head">
            <span className="eyebrow">Final Design</span>
            <h2 className="section-title case-section-title">Refined screens with stronger hierarchy and polish</h2>
            <p className="case-section-copy">
              The final screens focused on clearer hierarchy, cleaner spacing,
              and a more professional presentation.
            </p>
          </div>

          <div className="case-gallery case-gallery-finals">
            {finalScreens.map((image, index) => (
              <figure
                className={`case-gallery-card ${index === 0 ? 'case-gallery-card-featured' : ''}`}
                key={image.src}
              >
                <button
                  type="button"
                  className="image-button"
                  onClick={() => openImage(image.src, image.alt)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="case-gallery-image"
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

export default ClientOnePage;
