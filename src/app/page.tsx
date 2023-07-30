import { Button } from "@/components/shared/Button";
import { css } from "@/panda/css";
import { HStack } from "@/panda/jsx";
import { center } from "@/panda/patterns";

export default function Home() {
  return (
    <div className={center({ minH: "screen", bg: "fuchsia.50" })}>
      <HStack className={center({ gap: "4" })}>
        <button
          className={css({ bg: "tomato", p: "4", rounded: "8" })}
          type="button"
        >
          default
        </button>
        <Button />
      </HStack>
    </div>
  );
}
