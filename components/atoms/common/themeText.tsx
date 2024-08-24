import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef } from "react";

const textVariants = cva("font-sans", {
  variants: {
    variant: {
      default: /* tw */ "text-black dark:text-white",
      textGrey: /* tw */ "text-slate-200 dark:text-patchwork-grey-400",
      title: /* tw */ "font-bold text-2xl",
    },
    size: {
      default: /* tw */ "",
      fs_13: /* tw */ "text-[13px]",
      xs_12: /* tw */ "text-xs",
      md_16: /* tw */ "text-base",
      lg_18: /* tw */ "text-lg",
      xl_20: /* tw */ "text-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export type TextProps = React.HTMLProps<HTMLParagraphElement> &
  VariantProps<typeof textVariants>;

const ThemeText = forwardRef<HTMLParagraphElement, TextProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <p
        className={cn(textVariants({ variant, size, className }))}
        {...props}
        ref={ref}
        {...props}
      />
    );
  }
);

ThemeText.displayName = "ThemeText";

export default ThemeText;
