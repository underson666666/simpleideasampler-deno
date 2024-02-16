import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export default function Header(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <div class="text-2xl font-bold flex justify-center">
      Simple Random Sampling
    </div>
  );
}
