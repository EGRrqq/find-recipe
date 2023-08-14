import { panda, type HTMLPandaProps } from "@/panda/jsx";
import { input, type InputVariantProps } from "@/panda/recipes";
import {
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
} from "react";

type InputContentProps = {
  children?: ReactNode | undefined;
  leftIcon?: ReactElement;
  rightIcon?: ReactElement;
};

export type InputProps = InputVariantProps &
  InputContentProps &
  HTMLPandaProps<"input">;

export const Input = (props: InputProps) => {
  const { variant, size, leftIcon, rightIcon, children, ...rest } = props;

  return (
    <panda.div
      data-scope="input"
      data-part="root"
      className={input({ variant, size })}
    >
      {leftIcon && <InputIcon mr="var(--icon-spacing)">{leftIcon}</InputIcon>}

      <panda.input {...rest} data-scope="input" data-part="content" />

      {rightIcon && <InputIcon ml="var(--icon-spacing)">{rightIcon}</InputIcon>}
    </panda.div>
  );
};

const InputIcon = (props: HTMLPandaProps<"span">) => {
  const { children, ...rest } = props;

  const _children = isValidElement(children)
    ? cloneElement(children, {
        // @ts-expect-error typings are wrong
        "aria-hidden": true,
        focusable: false,
      })
    : children;

  return (
    <panda.span data-scope="input" data-part="icon" {...rest}>
      {_children}
    </panda.span>
  );
};
