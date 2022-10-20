import Script from "next/script";

export function Analytics() {
  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
      strategy="afterInteractive"
    />
  );
}
