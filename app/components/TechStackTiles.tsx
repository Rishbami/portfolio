import {
  SiExpress,
  SiFirebase,
  SiFlutter,
  SiNodedotjs,
  SiReact,
} from 'react-icons/si';

const webStack = [
  { label: 'Firebase', icon: SiFirebase },
  { label: 'Express', icon: SiExpress },
  { label: 'React', icon: SiReact },
  { label: 'Node.js', icon: SiNodedotjs },
];

const TechStackTiles = () => {
  return (
    <section className="my-20">
      <h2 className="section-title">Tech Stack</h2>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="text-center">
          <h3 className="mb-5 text-lg font-medium">Web</h3>
          <div className="flex flex-wrap justify-center gap-10">
            {webStack.map(({ label, icon: Icon }) => (
              <div key={label} className="stack-tile">
                <Icon className="stack-icon" aria-hidden />
                <span className="stack-label">{label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          <h3 className="mb-5 text-lg font-medium">Mobile</h3>
          <div className="flex flex-wrap items-center justify-center gap-10">
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
  );
};

export default TechStackTiles;
