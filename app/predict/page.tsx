export default function page() {
  return (
    <main className=" h-screen  p-24">
      <div className="rounded-full absolute top-20 -left-40 w-80 h-80 bg-[#42057F] blur-3xl"></div>
      <div className="rounded-full absolute bottom-20 -right-40 w-80 h-80 bg-[#42057F] blur-3xl"></div>
      <h1 className="text-2xl">Sentiment Analyzer.ai</h1>
      <textarea
        className="w-full max-w-3xl text-white p-4 bg-[#42057F] border rounded-xl h-full max-h-[500px] "
        placeholder="Place your text here ..."
      ></textarea>
    </main>
  );
}
