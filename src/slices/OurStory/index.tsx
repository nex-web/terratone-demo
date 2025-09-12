import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `OurStory`.
 */
export type OurStoryProps = SliceComponentProps<Content.OurStorySlice>;

/**
 * Component for "OurStory" Slices.
 */
const OurStory: FC<OurStoryProps> = ({ slice }) => {
  return (
    <Bounded
      className="pt-[18.75rem]"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col pt-[14.75rem] items-center">
        <PrismicRichText
          field={slice.primary.storyheading}
          components={{
            paragraph: ({ children }) => (
              <p className="text-[4.111875rem] leading-tight font-black-slanted text-center">
                {children}
              </p>
            ),
          }}
        />

        {/* <div className="flex flex-row justify-between text-[4.111875rem] font-black-slanted">
          <PrismicRichText field={slice.primary.headingtwo} />
          <PrismicNextImage
            field={slice.primary.outstoryimg}
            className="w-[20.25rem] h-[20.063rem]"
          />
          <PrismicRichText field={slice.primary.headingthree} />
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-start gap-2.5 w-full max-w-[90%] mt-2">
          {/* Left Text */}
          <PrismicRichText
            field={slice.primary.headingtwo}
            components={{
              paragraph: ({ children }) => (
                <p className="text-[4.111875rem] font-black-slanted text-right md:text-right ">
                  {children}
                </p>
              ),
            }}
          />

          {/* Center Image */}
          <PrismicNextImage
            field={slice.primary.outstoryimg}
            className="w-[20.25rem] h-[20.063rem] object-fill mx-auto"
          />

          {/* Right Text */}
          <PrismicRichText
            field={slice.primary.headingthree}
            components={{
              paragraph: ({ children }) => (
                <p className="text-[4.111875rem] font-black-slanted text-left md:text-left ">
                  {children}
                </p>
              ),
            }}
          />
        </div>
        <div className=" flex flex-col mt-[2.25rem] items-center ">
          <PrismicRichText
            field={slice.primary.storydiscription}
            components={{
              paragraph: ({ children }) => (
                <p className="text-sm font-black-slanted text-left md:text-left">
                  {children}
                </p>
              ),
            }}
          />
          <PrismicRichText
            field={slice.primary.storytitle}
            components={{
              paragraph: ({ children }) => (
                <p className="text-sm font-black-slanted text-left md:text-left pt-6 underline">
                  {children}
                </p>
              ),
            }}
          />
        </div>
      </div>
    </Bounded>
  );
};

export default OurStory;
