const principles = [
  {
    title: "Start with the workflow, not the feature.",
    description: "Understand what someone is trying to get done and where it breaks down.",
  },
  {
    title: "Be customer-led, not request-led.",
    description: "A request is evidence. The job is finding the problem underneath it.",
  },
  {
    title: "Prototype before debating.",
    description: "Put something real in front of people early, and build it with the team.",
  },
];

export default function AboutSection() {
  return (
    <div className="bg-mist px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1.4fr_1fr] md:gap-20">
        <div>
          <div className="field-label mb-4">About</div>
          <h2 className="mb-8 text-3xl font-bold leading-tight text-pine md:text-4xl">
            If someone doesn’t understand it in three seconds, it has failed.
          </h2>
          <div className="max-w-xl space-y-5 text-lg leading-relaxed text-gray-700">
            <p>
              I started as a designer and engineer at Obscura Digital, building large interactive installations. The
              feedback there was immediate. Someone walked up to a ten-foot screen, and either they understood it or
              they walked away. I’ve built products that way ever since.
            </p>
            <p>
              I care about how a workflow feels end to end: where people hesitate, what they need to know to make a
              decision, and whether a complex task ends up feeling simple. I don’t treat design as polish after the
              product decision. The experience is the product strategy.
            </p>
            <p>
              That’s also why I build. A rough working version in a customer’s hands teaches a team more than another
              week of debate, so I prototype, write front-end code and ship alongside design and engineering. Across
              Visa, Globality and early-stage AI startups, the pattern is the same: find the manual, frustrating part of
              someone’s job and turn it into something that works without them thinking about it.
            </p>
          </div>
        </div>

        <div className="md:pt-12">
          <div className="field-label mb-4">How I work</div>
          <ul className="divide-y divide-black/10 border-y border-black/10">
            {principles.map((principle) => (
              <li key={principle.title} className="py-5">
                <h3 className="text-lg font-bold leading-snug text-pine">{principle.title}</h3>
                <p className="mt-1 text-base leading-relaxed text-gray-600">{principle.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
