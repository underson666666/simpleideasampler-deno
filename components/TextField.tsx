import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";

export function TextField({ onChange }) {
  return (
    <div class="my-2 mx-2 w-full">
      <textarea
        onChange={onChange}
        // disabled={!IS_BROWSER || props.disabled}
        placeholder="1行1アイテムで入力してください"
        class="py-2 px-2 my-2 w-full h-64 border-solid border-2 resize"
      />
    </div>
  );
}
