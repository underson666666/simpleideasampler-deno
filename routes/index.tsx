import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import Sampler from "../islands/Sampler.tsx";
import Header from "../components/Header.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <div class="px-4 py-2 mx-auto bg-[#007e66] text-gray-200">
        <Header />
      </div>
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <Counter count={count} />
        <Sampler count={count} />
      </div>
    </>
  );
}
