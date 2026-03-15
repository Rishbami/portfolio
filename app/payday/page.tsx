'use client';

import Head from 'next/head';
import { useState } from 'react';

const PAYDAY_WIREFRAMES = [
  { src: '/payday/IMG_5140.jpg.webp', alt: 'PayDay wireframe 1' },
  { src: '/payday/IMG_5142.jpg.webp', alt: 'PayDay wireframe 2' },
  { src: '/payday/IMG_5143.jpg.webp', alt: 'PayDay wireframe 3' },
];

const PAYDAY_FINALS = [
  { src: '/payday/0x0ss.png', alt: 'PayDay final screen 1' },
  { src: '/payday/0x0ss (1).png', alt: 'PayDay final screen 2' },
  { src: '/payday/0x0ss (2).png', alt: 'PayDay final screen 3' },
  { src: '/payday/0x0ss (3).png', alt: 'PayDay final screen 4' },
  { src: '/payday/0x0ss (4).png', alt: 'PayDay final screen 5' },
];

const PayDay = () => {
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
        <title>PayDay | My Portfolio</title>
        <meta
          name="description"
          content="PayDay case study for DoorstepPromotions."
        />
      </Head>
      <main className="page-shell">
        <section className="my-20">
          <div className="mvp-grid">
            {PAYDAY_WIREFRAMES.map((image) => (
              <figure className="mvp-card" key={image.src}>
                <button
                  type="button"
                  className="image-button"
                  onClick={() => openImage(image.src, image.alt)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="mvp-image"
                  />
                </button>
              </figure>
            ))}
          </div>
        </section>
        <section className="my-20">
          <div className="mx-auto max-w-3xl text-[color:var(--muted)]">
            <p>
              This was my first client project, which made it an exciting and
              valuable learning experience. We started by creating wireframes to
              establish a clear foundation and direction for the design. From
              there, I held regular meetings with the client to present updates,
              review progress, and gather feedback. This iterative process
              allowed me to refine the project based on the client’s input while
              building confidence in managing client communication and
              delivering work that aligned with their vision.
            </p>
          </div>
        </section>
        <section className="my-20">
          <div className="mvp-grid">
            {PAYDAY_FINALS.map((image) => (
              <figure className="mvp-card" key={image.src}>
                <button
                  type="button"
                  className="image-button"
                  onClick={() => openImage(image.src, image.alt)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="mvp-image"
                  />
                </button>
              </figure>
            ))}
          </div>
        </section>
        <section className="my-20">
          <div className="mx-auto max-w-3xl text-[color:var(--muted)]">
            <p>
              After many iterations and rounds of feedback, I was able to
              deliver a product that fully met the needs of his business. The
              collaborative process ensured that every adjustment and refinement
              contributed to a solution that was both functional and aligned
              with the client’s vision. Seeing the project come together after
              careful planning and constant communication was incredibly
              rewarding and reinforced the importance of iteration in creating
              successful designs.
            </p>
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

export default PayDay;
