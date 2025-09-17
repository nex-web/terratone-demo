import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Rooms`.
 */
export type RoomsProps = SliceComponentProps<Content.RoomsSlice>;

/**
 * Component for "Rooms" Slices.
 */
const Rooms: FC<RoomsProps> = ({ slice }) => {
  return (
    <Bounded
      className="px-[1.875rem] pt-0  "
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            paragraph: ({ children }) => (
              <p className="text-[4.125rem] leading-17 font-black-slanted ">
                {children}
              </p>
            ),
          }}
        />
      </div>
      <div className="grid grid-cols-2">
        <div className="flex flex-col relative mr-4">
          <PrismicRichText
            field={slice.primary.subtext}
            components={{
              paragraph: ({ children }) => (
                <p className="text-sm font-black-slanted mt-4 w-[55%] ">
                  {children}
                </p>
              ),
            }}
          />
          <PrismicNextLink
            field={slice.primary.button}
            className="mt-10 underline text-sm"
          >
            {slice.primary.view_rooms}
          </PrismicNextLink>
          <PrismicNextImage
            field={slice.primary.roomimage}
            className="w-[10.5rem] h-[12.6875rem] absolute bottom-0 right-0"
          />
        </div>
        <div className="relative w-auto ">
          <PrismicNextImage
            field={slice.primary.roomviewtwo}
            className=" h-[29.9375rem] w-auto  abolute bottom-0 right-0"
          />
        </div>
      </div>
    </Bounded>
  );
};

export default Rooms;
