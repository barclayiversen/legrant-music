// pages/index.ts
import React, { useState, useEffect } from "react";
import LoadingSpinner from "@/components/home/loading";
import Header from "@/components/home/header";
import Footer from "@/components/home/footer";
import BackgroundVideoSection from "@/components/home/backgroundVideoSection";
import AboutSection from "@/components/home/about";
import Releases from "@/components/home/releases";
import PhotoCarousel from "@/components/home/photoCarousel";
import UpcomingRelease from "@/components/home/upcomingRelease";
import FeaturedRelease from "@/components/home/featuredRelease";
import { useLoadStatus } from "@/context/loadStatusContext";

export default function Home() {
  const { loadStatus } = useLoadStatus();
  const allComponentsLoaded = Object.values(loadStatus).every(
    (status) => status
  );
  const [isBackgroundLoaded, setIsBackgroundLoaded] = useState(false);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (allComponentsLoaded) {
      setStartAnimation(true);
      setTimeout(() => {
        setIsBackgroundLoaded(true);
      }, 500); // Match this duration with your CSS transition
    }
  }, [allComponentsLoaded]);

  const Divider = () => (
    <hr className="border-t border-gray-700 mx-auto w-3/4 my-8" />
  );

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex justify-center items-center transition-opacity duration-500 bg-black ${
          startAnimation ? "opacity-0" : "opacity-100"
        }`}
        style={{ display: isBackgroundLoaded ? "none" : "flex" }}
      >
        <LoadingSpinner />
      </div>
      <main
        className={`bg-black transition-opacity duration-500 ${
          isBackgroundLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Header />
        <BackgroundVideoSection />

        <AboutSection />
        <Divider />
        <FeaturedRelease />
        <Divider />
        <UpcomingRelease />

        <Releases />

        <PhotoCarousel />
        <Footer />
      </main>
    </>
  );
}
