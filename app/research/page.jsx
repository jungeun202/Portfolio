import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const Research = () => {
  const timelineItems = [
    {
      title: "Undergraduate Researcher",
      association: "Digital Agriculture Discovery Lab",
      link: "https://ag-dost.streamlit.app/",
      link2: "https://dad.saraswat.rcac.purdue.edu/?_ga=2.180665639.1654399781.1734484538-1126171868.1731528420",
      description:
        "Engineered a customized NLP chatbot for a control system that provides farmers with precise and effective treatment instructions.",
      timeline: "May 2023 - Present",
      location: "West Lafayette, IN",
      image: "/assets/surf_poster.png",
    },
    {
      title: "Undergraduate Researcher",
      association: "LRNING Lab",
      link: "https://github.com/jungeun202/Transformer/tree/main",
      link2: "https://sites.google.com/view/sungyoon-lee/home?authuser=0",
      description:
        "Conducted experiments with transformer models, analyzing attention mechanisms to enhance linear time and memory efficiency.",
      timeline: "May 2024 - Aug 2024",
      location: "Seoul, South Korea",
      image: "/download.png",
    },
  ];

  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        {/* Title Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-6">Research Interest</h1>
        </div>

        {/* Description and Image Section */}
        <div className="flex flex-col xl:flex-row items-center justify-between gap-8 mb-12">
          <div className="text-center xl:text-left max-w-[600px]">
            <p className="mb-6">
              My research interests lie at the intersection of natural language
              processing and human-centric AI design, with a focus on mitigating
              biases and enhancing interpretability.
            </p>
            <p>
              I am also interested in addressing long-tail behavior in AI
              systems, ensuring robust performance across diverse and
              low-frequency scenarios.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/assets/AI_image.png"
              alt="AI"
              className="w-full max-w-[500px] h-auto rounded-2xl shadow-lg"
            />
          </div>
        </div>

        {/* Timeline Section */}
        <div className="relative flex flex-col items-center">
          {/* Timeline Cards */}
          {timelineItems.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mb-14 gap-8"
            >
              {/* Text Section */}
              <div
                className={`flex-1 p-10 bg-gray-100 rounded-lg shadow-lg ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <h4 className="text-3xl font-semibold text-highlight mb-4">
                  <Link href={item.link2}>
                    <span className="relative group">
                      {item.association}
                      <span className="absolute left-1/2 -translate-x-1/2 top-full mt-1 px-3 py-1 bg-gray-800 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        Visit {item.association} website
                      </span>
                    </span>
                  </Link>
                </h4>
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  {item.title}
                </h3>
                <p className="text-lg text-gray-700 mb-6">{item.description}</p>
                <p className="text-md text-gray-500 mb-3">{item.timeline}</p>
                <p className="text-md text-gray-500 mb-6">{item.location}</p>
                <Link href={item.link} className="w-[50px] h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="tect-primary text-2xl"/>
                </Link>
              </div>

              {/* Image Section */}
              {item.image && (
                <div className="flex-1 flex justify-center items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full max-w-lg h-auto md:h-[300px] object-cover rounded-lg shadow-lg"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Research;
