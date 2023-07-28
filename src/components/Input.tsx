import { InputVariantProps, input } from "../../styled-system/recipes";

const Input = ({ visual, size }: InputVariantProps) => {
  return (
    <input
      type="search"
      placeholder="find recipe"
      autoFocus
      className={input({ visual, size })}
    />
  );
};

export default Input;
