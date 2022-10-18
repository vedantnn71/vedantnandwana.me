import { Progress } from "@/components";
import { Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useEffect, useState } from "react";
import { useIsMounted } from "@/hooks";
import { useRouter } from "next/router";

export function Loading() {
  const router = useRouter();
  const isMounted = useIsMounted();
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function handleStart(url: string) {
      url !== router.asPath && setLoading(true);

      setTimeout(() => {
        setProgress(30);
      }, 1000);
    }

    function handleComplete(url: string) {
      setProgress(100);

      setTimeout(() => {
        url !== router.asPath && setLoading(false);
      }, 1000);
    }

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);

      setLoading(false);

      if (!isMounted) {
        setProgress(0);
      }
    };
  }, []);

  if (loading === false) {
    return <></>;
  }

  return (
    <Transition
      as={Fragment}
      enter="ease-in-out duration-500"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in-out duration-500"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      show={loading}
    >
      <div className="fixed top-0 left-0 z-50 grid h-screen w-screen place-items-center bg-neutral-900">
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-semibold text-neutral-300">
            <span className="mr-2 text-neutral-500 line-through">good</span>
            great things take time...
          </h1>

          <div className="w-full">
            <Progress progress={progress} />
          </div>
        </div>
      </div>
    </Transition>
  );
}
