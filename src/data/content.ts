// Static content data - replacing Prismic CMS

export type SliceType =
  | "hero"
  | "big_text"
  | "carousel"
  | "alternating_text"
  | "sky_dive";

export type Flavor =
  | "lemonLime"
  | "grape"
  | "blackCherry"
  | "strawberryLemonade"
  | "watermelon";

// Hero Slice Data
export interface HeroData {
  slice_type: "hero";
  variation: "default";
  heading: string;
  subheading: string;
  body: string;
  button_text: string;
  button_link: string;
  cans_image: {
    url: string;
    alt: string;
  };
  second_heading: string;
  second_body: string;
}

// Carousel Slice Data
export interface CarouselData {
  slice_type: "carousel";
  variation: "default";
  heading: string;
  price_copy: string;
}

// AlternatingText Slice Data
export interface TextGroupItem {
  heading: string;
  body: string;
}

export interface AlternatingTextData {
  slice_type: "alternating_text";
  variation: "default";
  text_group: TextGroupItem[];
}

// SkyDive Slice Data
export interface SkyDiveData {
  slice_type: "sky_dive";
  variation: "default";
  sentence: string;
  flavor: Flavor;
}

// BigText Slice Data
export interface BigTextData {
  slice_type: "big_text";
  variation: "default";
}

export type SliceData =
  | HeroData
  | CarouselData
  | AlternatingTextData
  | SkyDiveData
  | BigTextData;

// Page Data
export interface PageData {
  title: string;
  meta_description: string;
  meta_title: string;
  meta_image: string;
  slices: SliceData[];
}

// =============================================
// HOME PAGE CONTENT
// =============================================
export const homePageData: PageData = {
  title: "Fizzi | Soda that makes you smile",
  meta_description:
    "Experience the refreshing taste of Fizzi sodas. Available in 5 delicious flavors.",
  meta_title: "Fizzi | Soda that makes you smile",
  meta_image: "/images/og-image.png",
  slices: [
    {
      slice_type: "hero",
      variation: "default",
      heading: "Live Gutsy",
      subheading: "Sip bold. Sip fresh.",
      body: "3-5g sugar. 9g fiber. 5 delicious flavors.",
      button_text: "Shop Now",
      button_link: "#",
      cans_image: {
        url: "/images/cans.png",
        alt: "Fizzi soda cans",
      },
      second_heading: "Try all five flavors",
      second_body:
        "Our soda is made with real fruit juice and contains no artificial sweeteners or colors. Try all five flavors and find your favorite!",
    },
    {
      slice_type: "big_text",
      variation: "default",
    },
    {
      slice_type: "carousel",
      variation: "default",
      heading: "What's Your Flavor?",
      price_copy: "Each can is $2.99",
    },
    {
      slice_type: "alternating_text",
      variation: "default",
      text_group: [
        {
          heading: "Gut-Friendly Goodness",
          body: "Our soda is packed with prebiotics and probiotics to keep your gut happy and healthy. Say goodbye to bloating and hello to a happy tummy!",
        },
        {
          heading: "Light & Refreshing",
          body: "With only 3-5g of sugar per can, you can enjoy a guilt-free treat that's light and refreshing. Perfect for any time of day!",
        },
        {
          heading: "Naturally Delicious",
          body: "Made with real fruit juice and natural flavors, our soda tastes as good as it makes you feel. No artificial sweeteners or colors here!",
        },
      ],
    },
    {
      slice_type: "sky_dive",
      variation: "default",
      sentence: "Dive into better satisfying taste",
      flavor: "lemonLime",
    },
  ],
};

// Helper function to get page data by slug
export function getPageData(slug: string): PageData | null {
  if (slug === "home") {
    return homePageData;
  }
  return null;
}

// Get all available page slugs (for static generation)
export function getAllPageSlugs(): string[] {
  return ["home"];
}
