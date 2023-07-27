import { css, cx } from "../../styled-system/css";
import { center, circle } from "../../styled-system/patterns";

import { input, type InputVariantProps } from "../../styled-system/recipes";

const Input = ({ visual, size }: InputVariantProps) => {
  return (
    <input
      type="search"
      placeholder="find recipe"
      className={input({ visual, size })}
    />
  );
};

export default function Home() {
  return (
    <>
      <article className={cx(css({ h: "xs", bg: "green.400" }), center())}>
        <Input />
      </article>

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
              animation: 'bounce'
            })}
          />
        </section>
      </article>
    </>
  );
}
