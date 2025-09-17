import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `Halls`.
 */
export type HallsProps = SliceComponentProps<Content.HallsSlice>;

/**
 * Component for "Halls" Slices.
 */
const Halls: FC<HallsProps> = ({ slice }) => {
  return (
    <Bounded
      className="px-[30px]"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-cols-[2fr_auto_1.5fr] gap-8">
        <div className="relative flex flex-col justify-between h-auto ">
          {slice.primary.heading && (
            <h1 className="text-5xl font-medium leading-snug">
              <PrismicRichText field={slice.primary.heading} />
            </h1>
          )}

          {slice.primary.image && (
            <PrismicNextImage
              field={slice.primary.image}
              className="absolute bottom-0 right-0 w-[15.5rem] h-[11.8125rem] object-cover "
            />
          )}
        </div>

        <div className="mr-4">
          {slice.primary.secondcol_img && (
            <PrismicNextImage
              field={slice.primary.secondcol_img}
              className="w-[32.38rem] h-[24.69rem] object-cover "
            />
          )}
        </div>

        <div className="flex flex-col gap-6 relative">
          {slice.primary.thirdcol_img && (
            <PrismicNextImage
              field={slice.primary.thirdcol_img}
              className="w-[15.5rem] h-[11.81rem] object-cover "
            />
          )}
          {slice.primary.thirddescription && (
            <div className="font-medium text-sm leading-relaxed absolute bottom-0">
              <PrismicRichText field={slice.primary.thirddescription} />
            </div>
          )}
        </div>
      </div>
    </Bounded>
  );
};

export default Halls;
