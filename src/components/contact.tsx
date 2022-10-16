import { GithubIcon, TwitterIcon, EmailIcon, HeartIcon } from "@/components/icons";

type SocialProps = {
  name: string;
  link: string;
  iconId: "twitter" | "github" | "email" | "heart";
};

const icons = {
  twitter: <TwitterIcon className="w-6" />,
  github: <GithubIcon className="w-6" />,
  email: <EmailIcon className="w-6" />,
  heart: <HeartIcon className="w-6" />
}

const Social = ({ name, link, iconId: id }: SocialProps) => (
  <a target="_blank" rel="noreferrer" href={link}>
    <div className="w-full px-6 py-4 gap-4 flex items-center bg-neutral-700/70 backdrop-blur-sm rounded-3xl md:py-6">
      {icons[id]}
      <h3>{name}</h3>
    </div>
  </a>
);

export const Contact = () => (
  <div
    className="flex flex-col w-full h-full text-neutral-300 font-semibold text-xl md:text-3xl gap-6 mt-10"
    id="projects"
  >
    <h1 className="text-lg md:text-2xl">get in touch</h1>

    <Social name="follow me on twitter" link="https://twitter.com/vedantnn7" iconId="twitter" />
    <Social name="visit my github" link="https://github.com/vedantnn71" iconId="github" />
    <Social name="drop me an email" link="mailto:hello@vedantnandwana.me" iconId="email" />
    <Social name="buy me a coffee" link="" iconId="heart" />
  </div>
);

