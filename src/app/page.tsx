import { ReactNode } from "react";

import { css, cx } from "../../styled-system/css";
import { center, circle } from "../../styled-system/patterns";

import { input, type InputVariantProps } from "../../styled-system/recipes";
import { button, ButtonVariantProps } from "../../styled-system/recipes/button";
import { VStack } from "../../styled-system/jsx";

const Input = ({ visual, size }: InputVariantProps) => {
  return (
    <input
      type="search"
      placeholder="find recipe"
      className={input({ visual, size })}
    />
  );
};

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

export default function Home() {
  return (
    <>
      <VStack className={cx(css({ h: "md", bg: "green.400" }), center())}>
        <Input size="sm" visual="outline" />
        <Button size="sm" >save</Button>
      </VStack>

      <article
        className={cx(
          css({ fontSize: "2xl", fontWeight: "bold", h: "xs" }),
          center()
        )}
      >
        <section>
          <span
            className={circle({
              boxShadow: "inset -24px -28px 64px #718096",
              size: "96",
              bg: "red.300",
              animation: "bounce",
            })}
          />
        </section>
      </article>
    </>
  );
}
