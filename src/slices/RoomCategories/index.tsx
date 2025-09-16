import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `RoomCategories`.
 */
export type RoomCategoriesProps =
  SliceComponentProps<Content.RoomCategoriesSlice>;

/**
 * Component for "RoomCategories" Slices.
 */
const RoomCategories: FC<RoomCategoriesProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText
        field={slice.primary.roomsheading}
        components={{
          paragraph: ({ children }) => (
            <p className="text-5xl text-center leading-tight font-black-slanted ">
              {children}
            </p>
          ),
        }}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-9 px-14">
        {slice.primary.categories.map((item, index) => (
          <div
            key={index}
            className="relative flex justify-center items-center"
          >
            <PrismicNextImage
              field={item.roomimage}
              className="w-[371px] h-[479px] object-cover"
            />
            <div className="absolute flex flex-col items-center">
              <PrismicRichText
                field={item.title}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-[1.53125rem] uppercase font-black-slanted ">
                      {children}
                    </p>
                  ),
                }}
              />
              {/* <PrismicNextLink
                field={item.bookinglink}
                className="text-xs  font-black-slanted underline bg-amber-600"
              >
                {item.linktext}
              </PrismicNextLink> */}
            </div>
          </div>
        ))}
      </div>
    </Bounded>
  );
};

export default RoomCategories;
