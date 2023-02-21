import Script from "next/script";

export function Analytics() {
  return (
    <Script
      src="https://withbeacon.vercel.app/track.js"
      strategy="afterInteractive"
    />
  );
}
