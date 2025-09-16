import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Cuisines`.
 */
export type CuisinesProps = SliceComponentProps<Content.CuisinesSlice>;

/**
 * Component for "Cuisines" Slices.
 */
const Cuisines: FC<CuisinesProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-row justify-between items-center">
        <div>
          <div className="flex  flex-col">
            <div>
              <PrismicRichText
                field={slice.primary.heading}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-5xl  font-black-slanted">{children}</p>
                  ),
                }}
              />
            </div>
            <div className="my-5">
              <PrismicRichText
                field={slice.primary.description}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-sm  font-black-slanted">{children}</p>
                  ),
                }}
              />
            </div>
            <div className="mb-5">
              <PrismicNextLink
                field={slice.primary.dininglink}
                className="text-sm underline"
              >
                {slice.primary.linktext}
              </PrismicNextLink>
            </div>
          </div>
          <div className="flex flex-row items-end gap-4 mt-4 ">
            <div className="w-[9.94rem] h-[11.75rem] ">
              <PrismicNextImage
                field={slice.primary.headshot}
                className="w-[9.94rem] h-[11.75rem]"
              />
            </div>
            <div className="flex flex-col justify-center mb-[-6px] ">
              <PrismicRichText field={slice.primary.chefname} />
              <PrismicRichText field={slice.primary.chef_expertise}  />
            </div>
          </div>
        </div>
        <div className="w-[47.06rem] h-[40.06rem]">
          <PrismicNextImage
            field={slice.primary.rightimg}
            className="w-[47.06rem] h-[40.06rem]"
          />
        </div>
      </div>
    </Bounded>
  );
};

export default Cuisines;
