import Head from 'next/head';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects | My Portfolio</title>
        <meta name="description" content="A list of my projects." />
      </Head>
      <main className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center my-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </>
  );
};

export default Projects;
