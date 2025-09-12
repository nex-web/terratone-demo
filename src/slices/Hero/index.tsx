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
      <div className="flex flex-col w-full relative">
        <PrismicNextImage
          field={slice.primary.hero_img}
          className="w-screen h-[100vh] object-cover"
        />
        {/* <div className="w-screen h-[80vh] object-cover"></div> */}

        <div className=" absolute flex flex-col w-full bottom-[2rem] ">
          <PrismicRichText
            field={slice.primary.sub_heading}
            components={{
              paragraph: ({ children }) => (
                <p className="text-[0.625rem] tracking-[0.16em] font-black-slanted text-center">
                  {children}
                </p>
              ),
            }}
          />
          <PrismicRichText
            field={slice.primary.paragraph}
            components={{
              paragraph: ({ children }) => (
                <p className="text-[1.664375rem]/8 text-center tracking-tight font-black-slanted uppercase">
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
              {slice.primary.button_lable}{" "}
            </PrismicNextLink>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
