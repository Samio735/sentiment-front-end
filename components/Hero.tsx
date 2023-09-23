import { AiOutlineGithub } from "react-icons/ai";

export default function Hero() {
  return (
    <div
      className="flex items-center justify-center py-6 h-[90vh] gap-0 flex-col text-white relative"
      id="hero"
    >
      <div className="rounded-full absolute top-20 -left-40 w-80 h-80 bg-[#42057F] blur-3xl -z-10"></div>
      <div className="rounded-full absolute bottom-20 -right-40 w-80 h-80 bg-[#42057F] blur-3xl -z-10"></div>
      <div className="flex flex-col gap-3">
        <h1 className="flex flex-col text-[53px] font-semibold">
          Welcome to
          <span className="unique-Link text-[69px] font-normal translate-y-[-20px]">
            SentimentAnalyzer.ai
          </span>
        </h1>
        <p className="text-2xl font-normal max-w-[900px] text-justify">
          Unlock the power of sentiment analysis with our cutting-edge AI
          technology. Simply enter your text, and we'll provide you with an
          insightful sentiment analysis in seconds. Whether it's customer
          reviews, social media comments, or your own content, gain valuable
          insights into the emotions behind the words.
        </p>
        <div className="flex items-center gap-10 py-5">
          <button className="button-background text-[17px] gap-2 font-normal py-3 min-h-[61px] max-h-[61px] px-6 min-w-[400px] rounded-[14px] flex items-center justify-center">
            <AiOutlineGithub className="w-[26px] h-[26px]" /> Check model
          </button>
          <button className="bg-[#833AC8] text-[22px] font-bold py-3 px-6 min-w-[400px] rounded-[14px] min-h-[61px] max-h-[61px]">
            Analyze
          </button>
        </div>
      </div>
    </div>
  );
}
