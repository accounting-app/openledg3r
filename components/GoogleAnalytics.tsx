"use client";

import { GoogleAnalytics } from "@next/third-parties/google";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-42SS00TVHR";

export const GoogleAnalyticsTag = () => {
  return <GoogleAnalytics gaId={GA_ID} />
}
