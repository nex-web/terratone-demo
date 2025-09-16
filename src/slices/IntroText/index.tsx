import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";

/**
 * Props for `IntroText`.
 */
export type IntroTextProps = SliceComponentProps<Content.IntroTextSlice>;

/**
 * Component for "IntroText" Slices.
 */
const IntroText: FC<IntroTextProps> = ({ slice }) => {
  return (
    <Bounded className="my-28"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div>

      </div>
      <PrismicRichText
        field={slice.primary.revealingtext}
        components={{
          paragraph: ({ children }) => (
            <p className="text-[#515151] text-[1.8rem] text-center leading-tight font-black-slanted ">{children}</p>
          ),
        }}
      />
    </Bounded>
  );
};

export default IntroText;
