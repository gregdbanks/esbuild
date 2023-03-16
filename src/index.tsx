import { useEffect, useState, useRef } from "react";
import ReactDOM from "react-dom";
import * as esbuild from "esbuild-wasm";

const App = () => {
  const ref = useRef<any>();
  const [input, setInput] = useState("");
  const [code, setCode] = useState("");

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: "/esbuild.wasm",
    });
  };

  const handleSubmit = async (e: any) => {
    if (!ref.current) {
      return;
    }

    const transpiledCode = await ref.current.transform(input, {
      loader: "jsx",
      target: "es2015",
    });
    setCode(transpiledCode.code);
  };
  const handleInput = (e: any) => setInput(e.target.value);

  useEffect(() => {
    startService();
  }, []);

  return (
    <div>
      <textarea value={input} onChange={handleInput}></textarea>
      <div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
