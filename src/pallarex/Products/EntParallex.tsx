import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { BannerLayer } from "react-scroll-parallax/dist/components/ParallaxBanner/types";
import mountainParallex from "./../../Images/mountainParallex.png";
import skyParallexx from "./../../Images/skyParallexx.jpg";

export const EntParallex = () => {
  const background: BannerLayer = {
    image:
      skyParallexx,
    translateY: [0, 50],
    opacity: [1, 0.3],
    scale: [1.05, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const headline: BannerLayer = {
    translateY: [0, 30],
    scale: [1, 1.05, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: (
      <div className="insetParallex  centerParallex ">
        <h1 className="headlineParallex  whiteParallex ">ENT</h1>
      </div>
    ),
  };

  const foreground: BannerLayer = {
    image:
      mountainParallex,
    translateY: [0, 15],
    scale: [1, 1.1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
  };

  const gradientOverlay: BannerLayer = {
    opacity: [0, 1, "easeOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradientParallex  insetParallex " />,
  };

  return (
    <ParallaxBanner
      layers={[background, headline, foreground, gradientOverlay]}
      className="fullParallex "
    />
  );
};

export default EntParallex;