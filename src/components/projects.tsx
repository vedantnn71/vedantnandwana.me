import { LinkIcon } from "@/components/icons";

type ProjectProps = {
  name: string;
  link: string;
};

const Project = ({ name, link }: ProjectProps) => (
  <a target="_blank" rel="noreferrer" href={link}>
    <div className="w-full px-6 py-4 flex justify-between items-center bg-neutral-700/70 backdrop-blur-sm rounded-3xl md:py-6">
      <h3>{name}</h3>
      <LinkIcon className="w-6 text-neutral-400" />
    </div>
  </a>
);

export const Projects = () => (
  <div
    className="flex flex-col w-full h-full text-neutral-400 font-semibold text-xl md:text-3xl gap-6 mt-10"
    id="projects"
  >
    <h1 className="text-lg md:text-2xl">projects</h1>

    <Project name="focushype" link="https://focushype.software" />
    <Project name="spark (wip)" link="https://github.com/vedantnn71/spark" />
    <Project name="dive (wip)" link="" />
  </div>
);
