export default function SampleResult({ items }) {
  return (
    <div class="my-2 mx-2 w-full min-h-24">
      <fieldset class="py-2 px-2 border-solid border-2 min-h-24 break-all">
        <legend class="px-1">取得結果</legend>
        <ul class="list-decimal list-inside">{items}</ul>
      </fieldset>
    </div>
  );
}
