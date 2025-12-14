"use client";

import { SliceData } from "@/data/content";
import Hero from "@/slices/Hero";
import BigText from "@/slices/BigText";
import Carousel from "@/slices/Carousel";
import AlternatingText from "@/slices/AlternatingText";
import SkyDive from "@/slices/SkyDive";

type SliceRendererProps = {
  slices: SliceData[];
};

export default function SliceRenderer({ slices }: SliceRendererProps) {
  return (
    <>
      {slices.map((slice, index) => {
        switch (slice.slice_type) {
          case "hero":
            return <Hero key={`${slice.slice_type}-${index}`} slice={slice} />;
          case "big_text":
            return (
              <BigText key={`${slice.slice_type}-${index}`} slice={slice} />
            );
          case "carousel":
            return (
              <Carousel key={`${slice.slice_type}-${index}`} slice={slice} />
            );
          case "alternating_text":
            return (
              <AlternatingText
                key={`${slice.slice_type}-${index}`}
                slice={slice}
              />
            );
          case "sky_dive":
            return (
              <SkyDive key={`${slice.slice_type}-${index}`} slice={slice} />
            );
          default:
            return null;
        }
      })}
    </>
  );
}
