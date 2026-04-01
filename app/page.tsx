import Head from 'next/head';
import Link from 'next/link';

const Home = () => {
  return (
    <>
      <Head>
        <title>Projects | Rishi Ram</title>
        <meta
          name="description"
          content="Selected projects and case studies by Rishi Ram."
        />
      </Head>
      <main className="page-shell">
        <section className="my-20">
          <h1 className="section-title">Projects</h1>
          <div className="project-grid">
            <Link href="/projects/where2p" className="project-tile">
              <span className="project-title">Where2P</span>
              <span className="project-tag">View case</span>
            </Link>
            <Link href="/payday" className="project-tile">
              <span className="project-title">PayDay</span>
              <span className="project-tag">Case study</span>
            </Link>
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

export default Home;
