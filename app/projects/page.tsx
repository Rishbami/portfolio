import Head from 'next/head';
import Link from 'next/link';

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | My Portfolio</title>
        <meta name="description" content="A selection of projects by Rishi Ram." />
      </Head>
      <main className="page-shell">
        <section className="my-20">
          <h1 className="section-title">Projects</h1>
          <div className="project-grid">
            <Link href="/projects/where2p" className="project-tile">
              <span className="project-title">Where2P</span>
              <span className="project-tag">View case</span>
            </Link>
            <div className="project-tile">
              <span className="project-title">PayDay</span>
              <span className="project-tag">Live build</span>
            </div>
            <div className="project-tile">
              <span className="project-title">Mixologist</span>
              <span className="project-tag">Live build</span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Projects;
