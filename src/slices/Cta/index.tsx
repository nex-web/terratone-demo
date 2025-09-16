import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Cta`.
 */
export type CtaProps = SliceComponentProps<Content.CtaSlice>;

/**
 * Component for "Cta" Slices.
 */
const Cta: FC<CtaProps> = ({ slice }) => {
  return (
    <Bounded
      className="flex "
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="w-[auto] h-[34.06rem] relative">
        <PrismicNextImage
          field={slice.primary.ctaimg}
          className="w- full h-[34.06rem] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <PrismicRichText
            field={slice.primary.ctaheading}
            components={{
              heading2: ({ children }) => (
                <h2 className="font-black-slanted tracking-[.2em] text-[1.25rem] text-[#919191]">
                  {children}
                </h2>
              ),
            }}
          />
          <PrismicRichText
            field={slice.primary.ctadescription}
            components={{
              paragraph: ({ children }) => (
                <p className="font-black-slanted  text-4xl ">{children}</p>
              ),
            }}
          />
          <PrismicNextLink field={slice.primary.ctalink} className="underline text-sm mt-2">
            {slice.primary.ctalinktext}
          </PrismicNextLink>
        </div>
      </div>
    </Bounded>
  );
};

export default Cta;
