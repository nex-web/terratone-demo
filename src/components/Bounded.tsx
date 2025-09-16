import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  full?: boolean;       // full-width content
  noPadding?: boolean;  // remove vertical padding
};

export default function Bounded({
  as: Comp = "section",
  className,
  children,
  full = false,
  noPadding = false,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={clsx(
        // vertical padding
        noPadding ? "" : "py-10 md:py-14 lg:py-16",
        // horizontal padding only if not full
        full ? "" : "px-[1.875rem]",
        className
      )}
      {...restProps}
    >
      <div
        className={clsx(
          "w-full mx-auto",
          full ? "mx-0 max-w-none" : "max-w-6xl xl:max-w-[1440px]"
        )}
      >
        {children}
      </div>
    </Comp>
  );
}
