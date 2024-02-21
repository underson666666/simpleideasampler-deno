import { sample } from "https://deno.land/std@0.107.0/collections/mod.ts";

/**
 * 配列からランダムに指定した個数の要素を取り出して返す
 *
 * @param {string[]} ideas
 * @param {number} samplingCount - 取得する要素数
 * @return {(string|undefined)[]}
 */
export function sampling(
  ideas: readonly string[],
  samplingCount: number,
): (string | undefined)[] {
  if (ideas.length < samplingCount) {
    samplingCount = ideas.length;
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
    if (sampledIdeas.length >= samplingCount) {
      break;
    }
  }

  return sampledIdeas;
}
