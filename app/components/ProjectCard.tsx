import { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Image src={project.image} alt={project.title} width={500} height={300} className="w-full" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <Link href={project.link} className="text-blue-500 hover:underline">
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
