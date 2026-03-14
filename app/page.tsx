import Head from 'next/head';
import {
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiNodedotjs,
  SiReact,
} from 'react-icons/si';

const Home = () => {
  return (
    <>
      <Head>
        <title>Home | My Portfolio</title>
        <meta name="description" content="Welcome to my portfolio website." />
      </Head>
      <main className="page-shell">
        <section className="hero">
          <p className="eyebrow fade-up">AgileRam</p>
          <h1 className="hero-title fade-up delay-1">
            Apps that cut the <span>cost</span>
          </h1>
          <p className="hero-copy fade-up delay-2">
            My name is Rishi Ram and I make applications for business to help
            them run more efficiently.
          </p>
          <div className="mt-8 flex justify-center fade-up delay-2">
            <a
              className="inline-flex items-center justify-center rounded-full border border-[color:var(--line)] bg-white px-6 py-3 text-sm font-semibold tracking-wide text-[color:var(--ink)] shadow-[0_15px_40px_-30px_rgba(0,0,0,0.6)] transition hover:-translate-y-0.5 hover:shadow-[0_20px_45px_-30px_rgba(0,0,0,0.7)]"
              href="/Rishi_Ram_CV.pdf"
              download
            >
              Download CV
            </a>
          </div>
        </section>
        <section className="my-20">
          <h2 className="section-title">Tech Stack</h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="text-center">
              <h3 className="text-lg font-medium mb-5">Web</h3>
              <div className="flex flex-wrap justify-center gap-10">
                {[
                  { label: 'Firebase', icon: SiFirebase },
                  { label: 'Express', icon: SiExpress },
                  { label: 'React', icon: SiReact },
                  { label: 'Node.js', icon: SiNodedotjs },
                ].map(({ label, icon: Icon }) => (
                  <div key={label} className="stack-tile">
                    <Icon className="stack-icon" aria-hidden />
                    <span className="stack-label">{label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-medium mb-5">Mobile</h3>
              <div className="flex flex-wrap justify-center items-center gap-10">
                <div className="stack-tile">
                  <SiFlutter className="stack-icon" aria-hidden />
                  <span className="stack-label">Flutter</span>
                </div>
                <span className="text-base font-bold uppercase tracking-[0.3em] text-[color:var(--muted)]">
                  x
                </span>
                <div className="stack-tile">
                  <SiFirebase className="stack-icon" aria-hidden />
                  <span className="stack-label">Firebase</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="my-20">
          <h2 className="section-title">About Me</h2>
          <div className="mx-auto max-w-3xl space-y-6 text-[color:var(--muted)]">
            <p>
              I started building apps at 14, driven by curiosity and a love for
              solving real problems. Since then I’ve focused on crafting
              practical, user-friendly experiences that make everyday tasks
              simpler.
            </p>
            <p>
              My specialties sit at the intersection of product thinking,
              design, and engineering. I build full-stack web and mobile apps,
              often with React, Node, Firebase, and Flutter, and I’m happiest
              when a product feels effortless to use.
            </p>
            <p>
              Recent work includes Clima (a real-time, location-based weather
              app), a Home Automation app that unifies smart devices into one
              place, Mixologist (AI-driven cocktail suggestions), and PayDay for
              DoorstepPromotions, which streamlined employee shift scheduling.
            </p>
            <p>
              Right now I’m focused on helping teams reduce friction and cost
              through smart automation and clean UX. If you want to turn an idea
              into something people actually enjoy using, I’d love to help.
            </p>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
