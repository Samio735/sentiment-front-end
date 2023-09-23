export default function About() {
  return (
    <div
      className="flex items-center justify-center flex-col gap-7 py-5 text-white"
      id="about"
    >
      <h1 className="font-bold text-[41px] capitalize">About</h1>
      <p className="font-normal text-[22px] max-w-[900px] text-justify">
        We are a team of passionate AI enthusiasts dedicated to making text
        sentiment analysis accessible and insightful. Our mission is to help you
        uncover the emotions and sentiments hidden within your text data. With a
        combined experience in natural language processing and machine learning,
        we've developed a powerful tool to assist individuals and businesses in
        understanding sentiment like never before.
      </p>
    </div>
  );
}
