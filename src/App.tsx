import Counter from "./Counter";
import { CounterProvider } from "./CounterContext";

function App() {
  return (
    <>
      <CounterProvider>
        <Counter>{(num: number) => <>Current Count: {num}</>}</Counter>
      </CounterProvider>
    </>
  );
}

export default App;
