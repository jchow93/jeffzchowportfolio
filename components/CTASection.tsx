"use client";

export default function CTASection() {
  return (
    <section className="px-6 py-16 md:px-10 md:py-24 bg-[#8BA888]">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
          Let's Build Something Together
        </h2>
        <p className="mb-8 text-lg text-white/90 md:text-xl">
          Whether you're looking for a PM who can ship, a product advisor, or just want to chat about building products—I'd love to hear from you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-white text-[#8BA888] font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200 text-center"
          >
            Get In Touch
          </a>
          <a
            href="#featured-work"
            className="px-8 py-3 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-200 text-center"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}

