'use client';

import Head from 'next/head';
import Link from 'next/link';

const MixologistPage = () => {
  return (
    <>
      <Head>
        <title>Mixologist | Projects</title>
        <meta
          name="description"
          content="Mixologist project case study by Rishi Ram."
        />
      </Head>
      <main className="page-shell">
        <section className="my-20">
          <Link href="/" className="nav-link">
            Back to Projects
          </Link>

          <div className="case-hero fade-up">
            <div className="case-copy">
              <span className="eyebrow">Personal Project</span>
              <h1 className="case-title">Mixologist</h1>
              <p className="case-lead">
                My first application built away from tutorials, made to see how
                much I could actually create on my own.
              </p>
            </div>
          </div>
        </section>

        <section className="case-surface fade-up delay-1">
          <div className="case-intro-grid">
            <div className="case-panel">
              <p className="case-panel-kicker">Overview</p>
              <h2 className="case-panel-title">A project that built real confidence</h2>
              <p className="case-panel-copy">
                Mixologist started as a mobile idea and was later adapted into a
                web version so it could be presented more easily. More than
                anything, it was a project that proved to me that building
                without relying on tutorials was genuinely possible.
              </p>
              <p className="case-panel-copy">
                Both the mobile and web versions can be found on my GitHub.
              </p>
              <div className="case-actions">
                <a
                  href="https://mixologistweb-my9y86wrb-rishbamis-projects.vercel.app/"
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
                <span className="case-showcase-label">What It Meant</span>
                <p className="case-showcase-copy">
                  A turning point project that helped shift my mindset from
                  following lessons to building ideas independently.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="my-20 fade-up delay-1">
          <div className="case-detail-grid">
            <article className="case-panel">
              <p className="case-panel-kicker">Why I Built It</p>
              <p className="case-panel-copy">
                To test what I could do without step-by-step guidance.
              </p>
            </article>

            <article className="case-panel">
              <p className="case-panel-kicker">What Changed</p>
              <p className="case-panel-copy">
                It began as a mobile concept, then became a web version for
                easier demonstration.
              </p>
            </article>

            <article className="case-panel">
              <p className="case-panel-kicker">Why It Matters</p>
              <p className="case-panel-copy">
                It gave me confidence that bigger ideas were actually within
                reach.
              </p>
            </article>
          </div>
        </section>

        <section className="my-20 fade-up delay-2">
          <div className="case-section-head">
            <span className="eyebrow">Project Note</span>
            <h2 className="section-title case-section-title">Less about perfection, more about proof</h2>
            <p className="case-section-copy">
              Mixologist was important because it marked the point where I
              stopped depending on tutorials and started trusting my own ability
              to build.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default MixologistPage;
