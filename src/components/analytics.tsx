import Script from "next/script";

export function Analytics() {
  return (
    <Script
      src="https://spark-analytics.vercel.app/track.js"
      data-id="clameuzd80000mb081x2ge2l9"
      strategy="afterInteractive"
    />
  );
}
