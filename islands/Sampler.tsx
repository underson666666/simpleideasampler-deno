import type { Signal } from "@preact/signals";
import { useEffect, useState } from "preact/hooks";
import { Button } from "../components/Button.tsx";
import { TextField } from "../components/TextField.tsx";
import { sample } from "https://deno.land/std@0.107.0/collections/mod.ts";

interface SamplerProps {
  count: Signal<number>;
}

/**
 * 配列からランダムに指定した個数の要素を取り出して返す
 *
 * @param {string[]} ideas
 * @param {number} sampleCount - 取得する要素数
 * @return {(string|undefined)[]}
 */
function sampling(
  ideas: readonly string[],
  sampleCount: number,
): (string | undefined)[] {
  if (ideas.length < sampleCount) {
    sampleCount = ideas.length;
  }
  const sampledIdeas: (string | undefined)[] = [];

  while (true) {
    const sampledIdea: string | undefined = sample(ideas);

    // 同じ要素は追加しない
    if (sampledIdeas.length) {
      const aaa = sampledIdeas.filter((n) => n === sampledIdea);
      if (aaa.length) {
        continue;
      }
    }

    sampledIdeas.push(sampledIdea);
    if (sampledIdeas.length >= sampleCount) {
      break;
    }
  }

  return sampledIdeas;
}

export default function Sampler(props: SamplerProps) {
  const [sampled, setSampled] = useState([]);
  const [ideas, setIdeas] = useState([]);

  useEffect(() => {
    console.log("in useEffect");
    window.setTimeout(() => {
    }, 1000);
  }, []);

  const items = sampled.map((item, index) => {
    return <li key={index} class="mb-1">{item}</li>;
  });

  return (
    <div class="w-4/5">
      <div class="border-solid border-indigo-600 flex justify-center">
        <button
          onClick={() => {
            console.log(props.count.value);
            const sampled = sampling(ideas, props.count.value);
            setSampled(sampled);
          }}
          class="my-2 mx-1 px-4 py-1 border-solid border-2 border-sky-950 rounded"
        >
          ランダムに取得する
        </button>
      </div>
      <div class="">
        <div class="my-2 mx-2 w-full min-h-24">
          <fieldset class="py-2 px-2 border-solid border-2 min-h-24">
            <legend class="px-1">取得結果</legend>
            <ul class="list-decimal list-inside">{items}</ul>
          </fieldset>
        </div>
        <div class="mx-2 w-full">
          <TextField
            onChange={(e) => {
              const textIdeas = e.target.value.split("\n");
              const trimedIdeas = textIdeas.filter((idea) => {
                if (idea !== "") {
                  return idea;
                }
              });
              console.log(trimedIdeas);
              localStorage.removeItem("ideas");
              setIdeas(trimedIdeas);
            }}
            class="py-2 px-2 my-2 w-full h-64 border-solid border-2 resize"
          >
          </TextField>
        </div>
      </div>
    </div>
  );
}
