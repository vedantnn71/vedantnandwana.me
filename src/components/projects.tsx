import { LinkIcon } from "@/components/icons";

type ProjectProps = {
  name: string;
  link: string;
};

const Project = ({ name, link }: ProjectProps) => (
  <a target="_blank" rel="noreferrer" href={link}>
    <div className="flex w-full items-center justify-between rounded-3xl bg-neutral-700/70 px-6 py-4 backdrop-blur-sm md:py-6">
      <h3>{name}</h3>
      <LinkIcon className="w-6 text-neutral-400" />
    </div>
  </a>
);

export const Projects = () => (
  <div
    className="mt-10 flex h-full w-full flex-col gap-6 text-xl font-semibold text-neutral-400 md:text-3xl"
    id="projects"
  >
    <h1 className="text-lg md:text-2xl">projects</h1>

    <Project name="focushype" link="https://focushype.software" />
    <Project name="spark (wip)" link="https://github.com/vedantnn71/spark" />
    <Project name="dive (wip)" link="" />
  </div>
);
