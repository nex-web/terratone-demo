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
      <div className="flex flex-row">
        <div>
          <div>
            <PrismicRichText field={slice.primary.heading} />
            <PrismicRichText field={slice.primary.description} />
            <PrismicNextLink field={slice.primary.dininglink}>
              {slice.primary.linktext}
            </PrismicNextLink>
          </div>
          <div>
            <div>
              <PrismicNextImage field={slice.primary.headshot} />
            </div>
            <div>
              <PrismicRichText field={slice.primary.chefname} />
              <PrismicRichText field={slice.primary.chef_expertise} />
            </div>
          </div>
        </div>
        <div>
          <PrismicNextImage field={slice.primary.rightimg} />
        </div>
      </div>
    </Bounded>
  );
};

export default Cuisines;
