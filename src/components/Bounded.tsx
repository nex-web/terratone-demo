import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  full?: boolean; // full-width content
  noPadding?: boolean; // remove vertical padding
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
        // horizontal padding only if not full
        full ? "w-full max-w-none" : "px-[1.875rem]",
        // responsive bottom margin
        "mb-[6rem] md:mb-[12rem] lg:mb-[18.75rem]",
        className
      )}
      {...restProps}
    >
      <div
        className={clsx(
          "w-full",
          full ? "max-w-none" : "mx-auto max-w-[72rem] xl:max-w-[1440px]"
        )}
      >
        {children}
      </div>
    </Comp>
  );
}
