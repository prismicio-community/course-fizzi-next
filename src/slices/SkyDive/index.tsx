"use client";

import { Bounded } from "@/components/Bounded";
import Scene from "./Scene";
import { View } from "@react-three/drei";
import { SkyDiveData } from "@/data/content";

export type SkyDiveProps = {
  slice: SkyDiveData;
};

const SkyDive = ({ slice }: SkyDiveProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="skydive h-screen"
    >
      <h2 className="sr-only">{slice.sentence}</h2>
      <View className="h-screen w-screen">
        <Scene flavor={slice.flavor} sentence={slice.sentence} />
      </View>
    </Bounded>
  );
};

export default SkyDive;
