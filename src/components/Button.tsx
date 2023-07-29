import { ReactNode } from "react";
import { ButtonVariantProps, button } from "../../styled-system/recipes";

interface ButtonProps extends ButtonVariantProps {
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