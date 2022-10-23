import { LinkIcon } from "@/components/icons";

type ProjectProps = {
  name: string;
  link: string;
};

function Project({ name, link }: ProjectProps) {
  return (
    <a target="_blank" rel="noreferrer" href={link}>
      <div className="flex w-full items-center justify-between rounded-3xl bg-neutral-700/70 px-6 py-4 backdrop-blur-sm md:py-6">
        <h3>{name}</h3>
        <LinkIcon className="w-6 text-neutral-400" />
      </div>
    </a>
  );
}

export function Projects() {
  return (
    <div
      className="mt-10 flex h-full w-full flex-col gap-6 text-xl font-semibold text-neutral-300 md:text-3xl"
      id="projects"
    >
      <h1 className="text-lg md:text-2xl">top projects</h1>

      <Project name="better hacker news" link="https://hn.vedantnandwana.me/" />
      <Project name="focushype" link="https://focushype.software" />
    </div>
  );
}
