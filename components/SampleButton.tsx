export default function SampleButton({ onClick }) {
  return (
    <div class="border-solid border-indigo-600 flex justify-center">
      <button
        onClick={onClick}
        class="my-2 mx-1 px-4 py-1 border-solid border-2 border-sky-950 rounded"
      >
        ランダムに取得する
      </button>
    </div>
  );
}
