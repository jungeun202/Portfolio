const Research = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 gap-8">
          {/* Text Section */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-6">
              Research Interest
            </h1>
            <p className="max-w-[500px] mb-6 text-gray-700">
              My research interests lie at the intersection of natural language processing and human-centric AI design, with a focus on mitigating biases and enhancing interpretability.
            </p>
            <p className="max-w-[500px] mb-6 text-gray-700">
              I am also interested in addressing long-tail behavior in AI systems, ensuring robust performance across diverse and low-frequency scenarios.
            </p>
          </div>

          {/* Image Section */}
          <div className="order-1 xl:order-none">
            <img
              src="/AI.PNG"
              alt="AI"
              className="w-full max-w-[700px] h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
