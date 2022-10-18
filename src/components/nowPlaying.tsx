import useSWR from "swr";
import { useEffect } from "react";
import { animate } from "motion";
import { SpotifyIcon } from "@/components";
import { NowPlayingSong, fetcher } from "@/lib";

function AnimatedBars() {
  useEffect(() => {
    animate(
      "#bar1",
      {
        transform: [
          "scaleY(1.0) translateY(0rem)",
          "scaleY(1.5) translateY(-0.082rem)",
          "scaleY(1.0) translateY(0rem)",
        ],
      },
      {
        duration: 1.0,
        repeat: Infinity,
        easing: ["ease-in-out"],
      }
    );
    animate(
      "#bar2",
      {
        transform: [
          "scaleY(1.0) translateY(0rem)",
          "scaleY(3) translateY(-0.083rem)",
          "scaleY(1.0) translateY(0rem)",
        ],
      },
      {
        delay: 0.2,
        duration: 1.5,
        repeat: Infinity,
        easing: ["ease-in-out"],
      }
    );
    animate(
      "#bar3",
      {
        transform: [
          "scaleY(1.0)  translateY(0rem)",
          "scaleY(0.5) translateY(0.37rem)",
          "scaleY(1.0)  translateY(0rem)",
        ],
      },
      {
        delay: 0.3,
        duration: 1.5,
        repeat: Infinity,
        easing: ["ease-in-out"],
      }
    );
  }, []);

  return (
    <div className="flex w-auto items-end overflow-hidden">
      <span
        id="bar1"
        className="mr-[3px] h-2 w-1 bg-neutral-300 opacity-75 dark:bg-neutral-500"
      />
      <span
        id="bar2"
        className="mr-[3px] h-1 w-1 bg-neutral-300 dark:bg-neutral-500"
      />
      <span
        id="bar3"
        className="h-3 w-1 bg-neutral-300 opacity-80 dark:bg-neutral-500"
      />
    </div>
  );
}

export function NowPlaying() {
  const { data } = useSWR<NowPlayingSong>("/api/now-playing", fetcher);

  return (
    <div className="mb-8 flex w-full flex-row-reverse items-center space-x-0 sm:flex-row sm:space-x-2">
      {data?.songUrl ? (
        <AnimatedBars />
      ) : (
        <SpotifyIcon className="ml-auto mt-[-2px] h-6 w-6" />
      )}
      <div className="inline-flex w-full max-w-full flex-col truncate sm:flex-row">
        {data?.songUrl ? (
          <a
            className="max-w-max truncate  font-medium text-neutral-200"
            href={data.songUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {data.title}
          </a>
        ) : (
          <p className="font-medium text-neutral-200">not playing</p>
        )}
        <span className="mx-2 hidden text-neutral-300 sm:block">{" – "}</span>
        <p className="max-w-max truncate text-neutral-300">
          {data?.artist ?? "spotify"}
        </p>
      </div>
    </div>
  );
}
