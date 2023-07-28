import { ReactNode } from "react";
import { ButtonVariantProps, button } from "../../styled-system/recipes";

type ButtonProps = ButtonVariantProps & {
  children: ReactNode;
};

const Button = (props: ButtonProps) => {
  const { children, size } = props;

  return (
    <button {...props} className={button({ size })}>
      {children}
    </button>
  );
};

export default Button