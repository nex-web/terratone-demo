import { FC } from "react"; 
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import Bounded from "@/components/Bounded";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
    <Bounded
      full
      noPadding
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="relative w-full h-[100vh]">
        {/* Full-screen hero image */}
        <PrismicNextImage
          field={slice.primary.hero_img}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Hero content */}
        <div className="absolute bottom-[2rem] w-full flex flex-col items-center text-center px-[1.875rem]">
          <PrismicRichText
            field={slice.primary.sub_heading}
            components={{
              paragraph: ({ children }) => (
                <p className="text-[0.625rem] tracking-[0.16em] font-black-slanted">
                  {children}
                </p>
              ),
            }}
          />
          <PrismicRichText
            field={slice.primary.paragraph}
            components={{
              paragraph: ({ children }) => (
                <p className="text-[1.664375rem]/8 tracking-tight font-black-slanted uppercase">
                  {children}
                </p>
              ),
            }}
          />

          <div className="flex flex-row justify-center gap-2 mt-4">
            <div className="w-[1.4375rem] h-[1.5625rem] bg-gray-600"></div>
            <PrismicNextLink
              field={slice.primary.button_link}
              className="text-center underline"
            >
              {slice.primary.button_lable}
            </PrismicNextLink>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
