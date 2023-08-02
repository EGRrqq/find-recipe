import { panda, type HTMLPandaProps } from "@/panda/jsx";
import { input, type InputVariantProps } from "@/panda/recipes";

export type InputProps = Omit<HTMLPandaProps<"input">, "size"> &
  InputVariantProps;

const Input = (props: InputProps) => {
  const { variant, size, ...rest } = props;
  return (
    <panda.input
      data-scope="input"
      data-part="root"
      className={input({ variant, size })}
      {...rest}
    />
  );
};

export default Input;
