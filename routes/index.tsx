import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import MainPage from "../components/MainPage.tsx";
import Header from "../components/Header.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <div>
      <Header/>
      <MainPage/>
    </div>
  );
}
