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
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText
        field={slice.primary.revealingtext}
        components={{
          paragraph: ({ children }) => (
            <p className="text-black text-lg leading-relaxed">{children}</p>
          ),
        }}
      />
    </Bounded>
  );
};

export default IntroText;
