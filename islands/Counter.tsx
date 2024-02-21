import { Button } from "../components/Button.tsx";
import { CounterProps } from "./types.tsx";

export default function Counter(props: CounterProps) {
  return (
    <div class="flex gap-8 py-6">
      <Button
        onClick={() => {
          // min is 1
          if (props.count.value <= 1) return;
          props.count.value -= 1;
        }}
      >
        -1
      </Button>
      <p class="text-3xl tabular-nums">{props.count}</p>
      <Button
        onClick={() => {
          // Firefoxが固まったので最大を10に制限する
          if (props.count.value >= 10) return;
          props.count.value += 1;
        }}
      >
        +1
      </Button>
    </div>
  );
}
