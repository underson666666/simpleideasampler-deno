import { useState } from "preact/hooks";
import { TextField } from "../components/TextField.tsx";
import { sampling } from "../utils/util.ts";
import SampleButton from "../components/SampleButton.tsx";
import SampleResult from "../components/SampleResult.tsx";
import { CounterProps } from "./types.tsx";

export default function Sampler(props: CounterProps) {
  const [sampled, setSampled] = useState<(string | undefined)[]>([]);
  const [ideas, setIdeas] = useState<string[]>([]);

  /**
   * ランダムに抽出した結果からHTMLを作成する
   */
  const sampledItems = sampled.map((item, index) => {
    return <li key={index} class="mb-1">{item}</li>;
  });

  /**
   * SamplingButtonコンポーネントのクリックイベント
   */
  function onClick(ideas: string[], samplingCount: number): void {
    const sampled = sampling(ideas, samplingCount);
    setSampled(sampled);
  }

  /**
   * テキストボックスのチェンジイベント
   */
  function onChange(e: Event): void {
    // 1つ下の行のvalueで型チェックエラーが出ないようにするための対策
    const element = e.target as HTMLInputElement;

    const textIdeas = element.value.split("\n");
    // 空行はサンプリングで取得する結果に含めない
    const trimedIdeas = textIdeas.filter((idea: string) => {
      if (idea !== "") {
        return idea;
      }
    });
    setIdeas(trimedIdeas);
  }

  return (
    <div class="w-4/5">
      <SampleButton
        onClick={() => {
          onClick(ideas, props.count.value);
        }}
      />
      <div class="">
        <SampleResult items={sampledItems} />
        <TextField
          onChange={(e: Event) => {
            onChange(e);
          }}
        >
        </TextField>
      </div>
    </div>
  );
}
