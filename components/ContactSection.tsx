export default function ContactSection() {
  return (
    <section id="contact" className="bg-mist px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-5xl border-t border-black/10 pt-12">
        <div className="field-label mb-4">Contact</div>
        <h2 className="mb-5 text-3xl font-bold leading-tight text-pine md:text-5xl">Let’s talk.</h2>
        <p className="mb-8 max-w-xl text-lg leading-relaxed text-gray-600">
          If you’re building something where the experience is the product, I’d like to hear about it.
        </p>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-lg">
          <a
            href="mailto:jeff.chow93@gmail.com"
            className="font-medium text-pine underline underline-offset-4 transition-colors hover:text-[#5F7A5A]"
          >
            jeff.chow93@gmail.com
          </a>
          <a
            href="https://linkedin.com/in/jeffzchow"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-pine underline underline-offset-4 transition-colors hover:text-[#5F7A5A]"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}
