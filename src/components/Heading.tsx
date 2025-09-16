import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm";
  children: React.ReactNode;
  className?: string;
};

export default function Heading({
  as: Comp = "h1",
  className,
  children,
  size = "lg",
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        " tracking-[0.16em] text-center",
        size === "sm" && "text-[0.625rem] font-black-slanted ",
        size === "md" && "text-[0.625rem] font-black-slanted ",
        size === "lg" && "text-[0.625rem] font-black-slanted ",
        size === "xl" && "text-[0.625rem] font-black-slanted ",
        className
      )}
    >
      {children}
    </Comp>
  );
}
