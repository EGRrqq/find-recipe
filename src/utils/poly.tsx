import { polymorphicFactory } from "@polymorphic-factory/react";
import { BoxProps, styled } from "../../styled-system/jsx";

export const poly = polymorphicFactory<BoxProps>({
  styled: (component) => (props) => {
    const Component = styled(props.as || component);
    return <Component {...props} />;
  },
});
