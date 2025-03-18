"use client"; // Required for Next.js (since hooks like useState run on client)

import ThemeProviderWrapper from "./ThemeProviderWrapper";
import MyApp from "./components";

export default function Home() {
  return (
    <ThemeProviderWrapper>
      <MyApp />
    </ThemeProviderWrapper>
  );
}
