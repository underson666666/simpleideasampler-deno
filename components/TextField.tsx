import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function TextField(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  return (
    <textarea
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      placeholder="1行1アイテムで入力してください"
    />
  );
}
