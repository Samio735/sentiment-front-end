import { useState } from "react";

export default function Predict() {
  const [text, setText] = useState("");
  return (
    <main className=" h-screen w-screen overflow-hidden px-20 flex flex-col items-center">
      <div className="rounded-full absolute top-20 -left-40 w-80 h-80 bg-[#42057F] blur-3xl -z-10"></div>
      <div className="rounded-full absolute bottom-20 -right-40 w-80 h-80 bg-[#42057F] blur-3xl -z-10"></div>
      <h1 className="text-5xl mt-10 text-center">Sentiment Analyzer.ai</h1>

      <div className="bg-[#833AC8]  shadow-lg shadow-[#833AC8]  w-28 py-4 my-8  mx-auto rounded-lg text-center">
        Neutral
      </div>

      <textarea
        className="w-full max-w-xl z-10 text-white p-4 bg-[#42057f82] border rounded-xl h-full max-h-[400px] "
        placeholder="Place your text here ..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
    </main>
  );
}
