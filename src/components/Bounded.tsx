import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
  full?: boolean;
  noPadding?: boolean;
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
        noPadding ? "" : "px-4 py-10 md:py-14 md:px-6 lg:py-16",
        className
      )}
      {...restProps}
    >
      <div
        className={clsx(
          "w-full",
          full ? "mx-0 max-w-none" : "mx-auto max-w-6xl"
        )}
      >
        {children}
      </div>
    </Comp>
  );
}
