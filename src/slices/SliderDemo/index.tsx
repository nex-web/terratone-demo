import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `SliderDemo`.
 */
export type SliderDemoProps = SliceComponentProps<Content.SliderDemoSlice>;

/**
 * Component for "SliderDemo" Slices.
 */
const SliderDemo: FC<SliderDemoProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-col lg:flex-row gap-6 ">
        {/* Left section with image */}
        <div className="relative w-full lg:w-1/2 ">
          <PrismicNextImage
            field={slice.primary.sliderimg}
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute bottom-3 left-3">
            <PrismicRichText
              field={slice.primary.heading}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-[1.503125rem] font-black-slanted uppercase">
                    {children}
                  </p>
                ),
              }}
            />
            <PrismicRichText
              field={slice.primary.description}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-[1.2525rem] font-black-slanted ">
                    {children}
                  </p>
                ),
              }}
            />
          </div>

          {/* Indicator boxes at top center */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 flex gap-1">
            <div className="w-[0.7125rem] h-[0.7125rem] bg-black"></div>
            <div className="w-[0.7125rem] h-[0.7125rem] bg-gray-600"></div>
            <div className="w-[0.7125rem] h-[0.7125rem] bg-gray-600"></div>
          </div>
        </div>

        {/* Right section */}
        <div className="flex flex-col w-full lg:w-[45%] gap-4">
          <div className="w-[43.75rem] h-[18.9rem] bg-gray-600">
            <PrismicNextImage
              field={slice.primary.rightimg}
              className="w-[43.75rem] h-[18.9rem] object-cover"
            />
          </div>
          <div>
            <PrismicRichText
              field={slice.primary.rightheading}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-[1.503125rem] font-black-slanted uppercase">
                    {children}
                  </p>
                ),
              }}
            />
            <PrismicRichText
              field={slice.primary.rightdescription}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-[1.2525rem] font-black-slanted ">
                    {children}
                  </p>
                ),
              }}
            />
          </div>
          <div className="w-[43.75rem]  h-[10.875rem] bg-gray-600">
            <PrismicNextImage
              field={slice.primary.rightimgtwo}
              className="w-[43.75rem]  h-[10.875rem] object-cover"
            />
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default SliderDemo;
