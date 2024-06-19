import {cn} from "lib/utils";
import {VariantProps, cva} from "class-variance-authority";
import {ButtonHTMLAttributes, FC} from "react";
import {Loader2} from "assets/icons/forms";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center justify-center font-medium rounded-lg text-sm transition-color focus:outline-none disabled:pointer-events-none disabled:opacity-30",
  {
    variants: {
      variant: {
        default: "bg-primary text-white",
        light: "bg-tertiary text-primary",
        outlined: "bg-transparent border border-primary text-primary",
      },
      size: {
        default: "py-[10px] px-6",
        sm: "p-[10px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button: FC<ButtonProps> = ({
  className,
  children,
  variant,
  isLoading,
  size,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({variant, size, className}))}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="mr-2 animate-spin">
          <Loader2 />
        </span>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
