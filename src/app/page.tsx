import { Metadata } from "next";
import { homePageData } from "@/data/content";
import SliceRenderer from "@/components/SliceRenderer";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: homePageData.title,
    description: homePageData.meta_description,
    openGraph: {
      title: homePageData.meta_title,
      images: [{ url: homePageData.meta_image }],
    },
  };
}

export default function Index() {
  return <SliceRenderer slices={homePageData.slices} />;
}
