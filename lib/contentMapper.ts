export interface PersonaProjectContent {
  title?: string;
  description?: string;
  metrics?: string[];
  problem?: string;
  approach?: string;
  impact?: string;
  fullStory?: string;
}

export interface Project {
  id: string;
  title: string; // Story/problem-focused title
  company: string;
  year: string;
  description: string; // Short, narrative description
  fullStory?: string; // Expanded story for detail view
  problem?: string; // The problem we were solving
  approach?: string; // How we approached it
  impact?: string; // The impact it had
  metrics: string[];
  industry: string[];
  image?: string;
  imageCredit?: string; // Credit/attribution for the image (HTML allowed)
  link?: string; // External link to view project/demo
  category?: "featured-project" | "featured-work"; // Distinguish between Featured Projects and Featured Work
  personaContent?: Record<string, PersonaProjectContent>; // Persona-specific content overrides
  // Team size and scope information
  teamSize?: string; // e.g., "8 (3 engineers, 2 designers, 1 data scientist, 2 PMs)"
  budget?: string; // e.g., "Six-figure initiative"
  stakeholders?: string[]; // e.g., ["VP Product", "Engineering Director", "C-suite"]
  headline?: string; // One-line title for the home page card
  summary?: string; // Three sentences: the problem, what I did, the result
  roleTitle?: string; // Job title on this work
  scope?: string; // Short list of what I covered
  lenses?: Record<string, string>; // One extra line per reading lens (see lib/lenses.ts)
  before?: string; // Old workflow in one line (shown under the tangled thread)
  after?: string; // New workflow in one line (shown under the straight thread)
  role?: string; // Clear ownership boundary for the case study
  metricNote?: string; // Methodology/context for sensitive or ambiguous metrics
}

export interface PersonaHandshake {
  headline: string;
  greeting: string; // "Hey there—" or "Hi there—"
  intro: string; // One punchy sentence
  body: string; // 3-4 sentences max
  cta: string; // Collaborative invitation
  focus: string;
  // Legacy field for backward compatibility
  subheadline?: string;
}

export interface PersonaMap {
  [key: string]: PersonaHandshake;
}

export const projects: Project[] = [
  // Featured Projects - Personal projects
  // Hoolie project in stealth mode - commented out
  // {
  //   id: "hoolie",
  //   title: "Hoolie: Eliminating 'Coordination Friction' in Social Discovery",
  //   company: "Hoolie",
  //   year: "2025-2026 (In Progress / PoC Phase)",
  //   description: "Leading product for a social events app that eliminates coordination friction. Shipped a functional frontend in 5 days using Cursor to unblock the team and maintain velocity.",
  //   problem: "Event discovery is fragmented and 'leaky.' Users screenshot events on social media, but coordination dies in the group chat. There's no single source of truth for event intent, leading to a 70% drop-off between 'that looks cool' and 'I'm going.",
  //   approach: "Leading a team of 4 (backend engineer, designer, PM, and me). I own product strategy, wrote the Product Requirement Documents, and defined 'Time-to-Coordination' as our primary success metric. I built the frontend experience myself in React/Next.js using Cursor and shipped it in 5 days to keep the team moving.",
  //   impact: "• Built functional frontend in 5 days using Cursor to eliminate bottleneck and maintain team velocity. \n• Led cross-functional team of 4 to align on core loop (Save → Interest → Status). \n• Launching with real customers in January 2026 to validate product-market fit hypothesis",
  //   fullStory: "Hoolie is a living lab for my product and technical skills. I'm solving a personal pain point: the frustration of losing event details in a sea of screenshots and dead-end group chats. \n\nI own the full lifecycle: from writing the PRD and designing the user experience, to building the frontend with React, Next.js, and Tailwind. By leveraging AI-assisted development (Cursor), I bypassed the 'validation paralysis' that kills most startups, shipping a complete UI quickly after starting the build on December 26, 2025. \n\nSuccess isn't launching. It's learning. This project shows I can move from problem to working solution at a speed most PMs can't match.",
  //   metrics: ["Started: Dec 26, 2025", "Frontend shipped: 5 days", "Launch: Jan 2026"],
  //   industry: ["consumer", "startups", "social media"],
  //   category: "featured-project",
  //   image: "/assets/hoolie.png",
  // },
  {
    id: "portfolio-website",
    title: "This portfolio",
    headline: "A portfolio you can read through different glasses",
    summary: "I can’t control who visits this site, and a recruiter, a designer and a founder each want something different from it. The first version asked visitors to pick a role up front and changed the whole page, which blurred the story. Now the page tells one story, and you can put on a pair of glasses to read the same work from your point of view.",
    roleTitle: "Designer and builder",
    scope: "UX, Front end",
    company: "Personal project",
    year: "2025–2026",
    description: "One story for every visitor, with glasses you can put on to read the same work from your point of view.",
    problem: "People arrive here with different questions. A recruiter wants scope and results, a designer wants to see the thinking, an engineer wants to know how I work with a team. A single static page answers one of them well.",
    approach: "The first version had seven views and asked visitors to choose one before they had read anything. Each view changed the headline, the numbers and the project list, so there was no single version of me to remember. I cut it back to one story that never changes. The glasses are optional, sit beside the work, and change only the order of the case studies and one line on each.",
    impact: "• One hero, one About and one set of facts for every visitor.\n• Five reading lenses that change emphasis only.\n• Works by drag, click or keyboard.",
    fullStory: "Removing the first version taught me more than building it. Tailoring a story is useful, but the reader should still meet the same person each time.",
    metrics: ["One story", "Five lenses", "Next.js + Tailwind"],
    industry: ["ux"],
    category: "featured-project",
    image: "/assets/20943517.jpg",
    imageCredit: '<a href="http://www.freepik.com" target="_blank" rel="noopener noreferrer">Designed by vectorjuice / Freepik</a>',
  },
  // Featured Work - Professional projects
  {
    id: "salient-enterprise-ai",
    lenses: {
      "recruiter": "Product & Growth Lead at a Series A AI startup. Live enterprise customers grew from 2 to 7 in seven months.",
      "product-leader": "I separated what was truly customer-specific from what should become product, and cut features that did not fit the new positioning.",
      "designer": "I sat with the compliance team and rebuilt the review workflow around how they already worked. Weekly usage rose 23% and CSAT doubled.",
      "engineer": "I shipped 20+ merged PRs and took on 60%+ of inbound bugs, so two AI/ML engineers could stay on the core build.",
      "founder": "Accuracy went from 60% to 95%+, which halved pilot time and supported two renewals and a new multi-million-dollar customer.",
    },
    headline: "Onboarding in hours instead of weeks",
    summary: "Every new enterprise customer needed 4–6 weeks of engineering setup before a pilot could start. I sat with compliance teams, redesigned onboarding around self-serve configuration, and built parts of the front end myself. Setup now takes a few hours, and live customers grew from 2 to 7 in seven months.",
    roleTitle: "Product & Growth Lead",
    scope: "Strategy, UX, Front end",
    before: "Weeks of engineering setup per customer",
    after: "Hours, through self-serve configuration",
    title: "Scaling Salient’s Compliance Product Line",
    company: "Salient",
    year: "2026",
    image: "/assets/case-study-salient.png",
    description: "Grew Salient’s compliance and audit product line from 2 to 7 live enterprise customers. I built a repeatable onboarding process, improved accuracy, and reduced the engineering work required to get a pilot started.",
    problem: "We did not have a proper onboarding system for the compliance product. Every pilot depended on a small team manually translating the customer’s policies, examples, and review process into a working set of alerts. Because we were resource constrained, that work could take weeks or months before the pilot even began. The AI also started at roughly 60% accuracy on a new customer’s use cases, so the same engineers were handling setup, tuning, and ongoing product work at the same time.",
    approach: "I mapped every step between signing a customer and starting their pilot, then worked with two AI/ML engineers to remove the repeated manual work. We standardized how we collected policies and customer-reviewed examples, created a repeatable test set, and used automated prompt optimization to get each alert closer to the customer’s expectations. Common requirements became settings and reusable workflows, while lender-specific rules stayed configurable. This gave us a consistent way to onboard customers without adding people to the team.",
    impact: "• Grew the live enterprise customer base from 2 to 7 in seven months.\n• Cut the engineering setup required before a pilot from weeks or months to hours.\n• Improved AI performance from roughly 60% to 95%+, supporting two renewals and a new multimillion-dollar ARR customer.\n• Increased weekly product usage 23% and doubled CSAT by redesigning core review and workflow experiences.",
    fullStory: "In my second week, we built the wrong onboarding solution because the requirements had passed through too many people before reaching the product team. I went back to the customer, sat with their compliance team, and remapped the way they reviewed calls. From there, I worked with two AI/ML engineers to build roughly a dozen compliance alerts that reached about 95% agreement with examples the customer had already reviewed. The customer ultimately signed a year-long contract.\n\nAfter that launch, I changed how we worked. I joined customer discovery directly, tested requirements earlier, and required a reviewed set of examples before we called an alert ready. We also tracked which requests kept appearing across customers. Those became settings and reusable workflows; truly lender-specific policies stayed configurable.\n\nThat let us launch customers faster without forcing everyone into the same compliance program. It also gave the product a clearer direction beyond flagging individual calls: help compliance teams spot patterns, review the right cases, and follow findings through remediation.",
    metrics: ["2 → 7 Enterprise Customers", "60% → 95%+ AI Performance", "Weeks or Months → Hours"],
    industry: ["enterprise", "ai-ml", "compliance"],
    category: "featured-work",
    teamSize: "Lean product team: 1 PM working directly with 2 AI/ML engineers",
    budget: "Resource-constrained team responsible for onboarding, AI quality, review UX, and new product work",
    stakeholders: ["Product & Growth Lead — me", "2 AI/ML engineers", "Enterprise customers"],
    role: "I owned this product line, including customer discovery, roadmap decisions, workflow design, launches, and commercial conversations. I worked day to day with two AI/ML engineers, and directly with the enterprise compliance teams using the product.",
    metricNote: "The 95% figure is the model’s agreement with a set of compliance examples the customer reviewed and approved.",
  },
  {
    id: "globality-insights",
    lenses: {
      "recruiter": "Enterprise B2B SaaS. 60%+ adoption within three months, and every beta user converted.",
      "product-leader": "When core engineering was reassigned, I kept the project moving by building reusable components with the internal tools team.",
      "designer": "The dashboard showed where each number came from and how the AI reached its conclusion, so people could trust it.",
      "engineer": "I worked with data science to define the outputs and added a feedback loop so results improved with use.",
      "founder": "Every beta user converted, contributing to a six-figure pipeline.",
    },
    headline: "Ten hours of spreadsheets, now twenty minutes",
    summary: "Procurement teams spent 10+ hours in spreadsheets and documents to understand their own data. I researched how they made vendor decisions and worked with data science, design and engineering on an insights dashboard that shows where each answer comes from. The work now takes about 20 minutes, and NPS rose from 5 to 40.",
    roleTitle: "Product Manager",
    scope: "Discovery, AI UX, Strategy",
    before: "10+ hours in spreadsheets per decision",
    after: "About 20 minutes with automated insights",
    title: "Glo Insights: Automating Fortune 500 Strategic Sourcing",
    company: "Globality",
    year: "2022",
    image: "/assets/case-study-globality.png",
    description: "Reduced procurement decision time by 97% for global enterprises. Transformed a 10-hour manual document grind into a 20-minute automated insight dashboard.",
    problem: "Fortune 500 procurement teams were drowning in countless pages of documents. Analysts spent 10+ hours per decision manually copying data from 100-page vendor proposals into spreadsheets. This manual friction delayed million-dollar contracts by weeks and reduced strategic sourcing to a game of data entry.",
    approach: "Shadowed analysts to pinpoint the points of failure. I discovered that 80% of their time was spent on repetitive extraction rather than negotiation or strategy. I designed an AI-powered dashboard that didn't just summarize text, but visualized cost breakdowns and compliance risks in the exact table formats they already used, ensuring the product felt like an extension of their existing expertise.",
    impact: "• Reduced procurement decision time by 97% (10+ hours to <30 minutes) by automating document extraction from 100-page vendor proposals.\n• Achieved 80% user adoption by designing an AI dashboard that visualized data in the exact table formats analysts already used.\n• Increased vendor processing capacity by 4x per cycle by eliminating manual data entry and enabling faster strategic analysis.",
    fullStory: "At Globality, I tackled a classic enterprise bottleneck: the gap between big data and actionable decisions. By observing procurement analysts in their natural environment, I realized they didn't need a new tool to learn, they needed their old spreadsheets to be automated. I led the development of 'Glo Insights' to bridge this gap. This dashboard didn't just save time; it changed the culture of the procurement department from 'gut-feel' data entry to high-speed strategic analysis.",
    metrics: ["97% Time Reduction", "80% Adoption Rate", "Fortune 500 Clients"],
    industry: ["enterprise", "ai-ml", "procurement"],
    category: "featured-work",
    teamSize: "7 (3 engineers, 1 designer, 1 user researcher, 1 data scientist, 1 PM)",
    budget: "Managed enterprise product initiative across 6-month timeline",
    stakeholders: ["VP Product", "Engineering Director", "Head of Procurement", "C-suite"],
    personaContent: {
      designer: {
        description: "Conducted 20+ user interviews and shadowed procurement analysts during actual work. Discovered 80% of time was spent on presentation-building, not analysis.",
        metrics: ["20+ User Interviews", "80% Time Saved", "Human-Centered Design"],
      },
      investor: {
        description: "Created 6-12 month competitive lead through proprietary AI models. Feature drove 23% account expansion and became primary sales differentiator in 90%+ of deals.",
        metrics: ["6-12 Month Competitive Lead", "23% Account Expansion", "90%+ Sales Differentiator"],
      },
    },
  },
  {
    id: "visa-fraud",
    headline: "Catching fraud when the account is created",
    summary: "Merchants could only see fraud in their own data, after it had already happened. I designed a prototype that used Visa’s cross-merchant transaction data to flag risky accounts at the moment they were created. It reached 75% detection accuracy in controlled testing on 200K transactions, and Visa filed a patent.",
    roleTitle: "Product Manager",
    scope: "Strategy, Data, Privacy",
    title: "Identity Verification System for Fraud Prevention",
    company: "Visa",
    year: "2021",
    image: "https://s.wsj.net/public/resources/images/BN-XG830_3og3V_OR_20180201113258.jpg",
    description: "Designed a fraud prevention prototype that leveraged Visa's transaction dataset to flag risky accounts at creation time. The system achieved 75% fraud detection accuracy in controlled testing, validating an approach to a multi-billion-dollar merchant problem.",
    problem: "Merchants were losing billions to card-not-present and account-takeover fraud. The gap: existing tools focused on transaction-time detection rather than prevention at account creation. Individual merchants could not see risky behavior across the broader network.",
    approach: "Partnered with merchants to share account creation data, cross-referenced against Visa's transaction history, and identified high-risk patterns invisible to individual merchants. The system worked in 5 steps: (1) Merchant shares new account creation events via API, (2) Visa cross-references against transaction history, device fingerprinting, and behavioral patterns, (3) System generates risk profile (High/Medium/Low), (4) Merchant receives real-time risk flag via API, (5) Chargeback protection if merchant follows recommendations. Led team of 4 PMs, collaborated with 6 engineers and 2 data scientists, worked with legal for 3+ months to establish GDPR/CCPA-compliant data sharing framework.",
    impact: "• Achieved 75% fraud detection accuracy in controlled testing—proving the concept was technically viable with real data.\n• Validated merchant interest across e-commerce, delivery, and online retail.\n• Filed a work patent for the identity-verification methodology.\n• Established a privacy-conscious legal framework for data sharing.\n• Addressed a multi-billion-dollar annual merchant fraud problem.",
    fullStory: "At Visa, I realized we were sitting on the world's most valuable fraud-fighting asset: cross-merchant visibility. While merchants were struggling to identify 'good' vs 'bad' users based on limited local history, I saw an opportunity to use our global network data as a defensive moat.\n\nI led the design of an identity verification system that analyzed velocity and pattern anomalies across the entire Visa network. For the first time, we could tell a merchant, 'This user looks new to you, but they've exhibited high-risk behavior across 5 other platforms today.'\n\nThe innovation was catching fraud at account creation instead of at transaction time. That's prevention, not just detection. And only Visa could do it because we're the only ones who see transaction patterns across all merchants.\n\nValidating this against 200K transactions proved that predictive fraud prevention isn't just possible, it's highly accurate. We achieved 75% fraud detection accuracy, secured interest from 10 merchants, and filed a patent. The project was handed off to the fraud prevention team with complete technical design, legal framework, and merchant pipeline—ready for engineering build and pilot deployment.",
    metrics: ["75% Fraud Detection Accuracy", "Multi-Billion-Dollar Problem", "Patent Filed"],
    industry: ["fintech", "security", "enterprise"],
    category: "featured-work",
    teamSize: "13 (4 PMs, 6 engineers, 2 data scientists, plus legal/compliance/risk teams)",
    budget: "Multi-billion-dollar global merchant problem",
    stakeholders: ["VP Product", "Director of Product", "Head of Security", "Engineering Director", "Legal/Compliance", "Risk/Fraud Teams", "Merchant Partnerships", "C-suite"],
    personaContent: {
      investor: {
        description: "Validated a multi-billion-dollar market opportunity through merchant research and a 75% accuracy proof-of-concept. Filed a patent and established a legal framework for future fraud-prevention products.",
        metrics: ["Multi-Billion-Dollar Market", "Patent Filed", "75% Accuracy"],
      },
      engineer: {
        description: "Achieved 75% fraud detection accuracy by analyzing velocity patterns across 200K historical transactions. Built cross-merchant identity verification system using Visa's proprietary network data. Designed risk scoring algorithm with 2 data scientists and specified API requirements for merchant integration.",
        metrics: ["75% Detection Accuracy", "200K Transaction Analysis", "Cross-Merchant Identity Graph", "API Design"],
      },
      designer: {
        description: "Interviewed 10+ merchants (e-commerce platforms, delivery services, online retailers) to map fraud workflows and pain points. Shifted detection from reactive (post-transaction) to proactive (account creation), addressing core merchant need for early warning system. Created merchant dashboard mockups for risk profile visualization.",
        metrics: ["10+ Merchant Interviews", "Proactive Detection", "Workflow Mapping", "Dashboard Mockups"],
      },
    },
  },
  {
    id: "engineering-velocity-automation",
    headline: "Status updates that write themselves",
    summary: "The team tracked the same work three times, in GitHub, Jira and Slack. I mapped where information was being copied by hand and built a small sync layer that updates tickets and summaries from the work itself. Recurring status meetings dropped by roughly 75%.",
    roleTitle: "Product Manager",
    scope: "Workflow design, Automation",
    before: "Same status tracked three times by hand",
    after: "Synced automatically from the work",
    title: "Automating Delivery Reporting Across GitHub, Jira, and Slack",
    company: "Confidential AI Startup",
    year: "Recent",
    image: "/assets/9837494.jpg",
    description: "Cut recurring status meetings by roughly 75% by connecting GitHub delivery activity to Jira and Slack—giving engineers back focus time while keeping leadership current without manual reporting.",
    problem: "The team tracked the same work three times: engineers shipped through GitHub, recreated progress in Jira, and repeated it again in Slack updates and status meetings. The information was stale almost immediately, leadership still had to interrupt engineers for context, and the team lost a meaningful part of each week to reporting instead of product work.",
    approach: "I audited the delivery workflow to identify where information was being copied rather than transformed. I defined how commit and pull-request activity should map to Jira status, what context leadership actually needed, and which changes warranted a Slack update. I then built a lightweight middleware layer that synchronized those signals and generated concise progress summaries. The design principle was simple: capture status from work already happening instead of asking engineers to report it again.",
    impact: "• Reduced recurring status meetings by roughly 75%.\n• Removed duplicate GitHub → Jira → Slack reporting from the engineering workflow.\n• Gave leadership a more current view of delivery without interrupting the team.\n• Returned meaningful engineering focus time to customer-facing features and performance work.",
    fullStory: "This started as an observation about team behavior: the source of truth already existed in the work, but our process required people to manually recreate it for different audiences. A pull request could show that implementation was underway, merged code could move a ticket forward, and selected changes could be summarized for leadership.\n\nI mapped those relationships, defined the rules and exceptions, and built the automation connecting GitHub, Jira, and Slack. I also kept the output deliberately concise; automating noisy updates would have created a different coordination problem.\n\nThe result was not merely fewer administrative steps. It changed how the team operated: progress became visible by default, status meetings became the exception, and engineers recovered time for deeper product work.",
    metrics: ["~75% Fewer Status Meetings", "Duplicate Reporting Removed", "Engineering Focus Recovered"],
    industry: ["enterprise", "startups", "ai-ml", "productivity"],
    category: "featured-work",
    teamSize: "Lean cross-functional startup team",
    budget: "Built with existing tools and no added headcount",
    stakeholders: ["Executive leadership", "Engineering", "Product"],
    personaContent: {
      founder: {
        description: "Cut status meetings by roughly 75% and increased operating leverage without adding another project-management platform or headcount.",
        metrics: ["~75% Fewer Status Meetings", "No Added Headcount", "More Product Capacity"],
      },
      engineer: {
        description: "Built middleware that translated GitHub commit and pull-request activity into Jira status changes and concise Slack summaries.",
        metrics: ["GitHub → Jira → Slack", "Automated Status Sync", "Less Manual Reporting"],
      },
      "product-leader": {
        description: "Redesigned delivery reporting so leadership received current progress signals without interrupting engineers for status.",
        metrics: ["~75% Fewer Status Meetings", "Current Delivery Visibility", "Engineering Leverage"],
      },
      designer: {
        description: "Mapped the reporting journey across three tools and removed the repeated handoffs that created context switching and stale information.",
        metrics: ["Workflow Mapping", "Fewer Handoffs", "Less Context Switching"],
      },
    },
  },
  {
    id: "automated-qa-pipeline",
    headline: "Release checks that run on their own",
    summary: "Every release meant repeating the same checks across video formats by hand. I mapped the critical user journeys, defined what a valid output looked like, and worked with engineering to automate the checks. Manual QA effort fell by 60–70%.",
    roleTitle: "Product Manager",
    scope: "Workflow design, QA",
    title: "Automating QA for a Multi-Format AI Video Product",
    company: "Confidential AI Startup",
    year: "Recent",
    image: "/assets/q&a.jpg",
    description: "Reduced manual QA effort by 60–70% by turning repeated video-format checks into an automated validation pipeline—speeding releases while freeing engineers to focus on new creation features and performance.",
    problem: "Every release required engineers and testers to repeat the same checks across video formats. Different codecs, resolutions, output states, and feature-flag combinations created a growing validation matrix. Testing was slow, inconsistent, and increasingly pulled engineers away from building the product.",
    approach: "I mapped the QA workflow from a product perspective: which user journeys were critical, which failures would break trust, and which checks were repeated often enough to automate. I defined acceptance criteria, edge cases, and validation rules across codecs, resolutions, and feature flags, then partnered with engineering to translate those rules into an automated test pipeline. We prioritized the highest-risk, highest-frequency checks first so the system delivered value before attempting exhaustive coverage.",
    impact: "• Reduced manual QA effort by 60–70% across recurring video checks.\n• Expanded coverage across formats and configurations that were difficult to test consistently by hand.\n• Caught regressions earlier and shortened the release feedback loop.\n• Returned engineering capacity to new video-creation features and performance improvements.",
    fullStory: "The bottleneck was not a lack of effort; it was that the same validation work restarted after every change. Video made the problem especially expensive because a feature could behave differently across codecs, resolutions, output formats, and flags.\n\nI treated QA as a product workflow rather than a final engineering step. I documented the repeated jobs, defined what a valid output looked like, captured failure modes and edge cases, and helped sequence what should be automated first. Engineering then had clear product rules to build against instead of an open-ended mandate to ‘automate QA.’\n\nThe result was a repeatable quality system that removed most of the recurring manual work, increased release confidence, and let engineers spend more time improving the customer-facing video product.",
    metrics: ["60–70% Less Manual QA", "Broader Format Coverage", "Faster Release Feedback"],
    industry: ["enterprise", "startups", "ai-ml"],
    category: "featured-work",
    teamSize: "Lean cross-functional startup team",
    budget: "Built with the existing team and delivery stack",
    stakeholders: ["Executive leadership", "Engineering", "Product"],
    personaContent: {
      founder: {
        description: "Reduced manual QA effort by 60–70% without adding dedicated QA headcount, protecting product reliability while preserving runway for customer-facing work.",
        metrics: ["60–70% Less Manual QA", "No Added QA Headcount", "More Product Capacity"],
      },
      engineer: {
        description: "Defined acceptance criteria and edge cases for automated validation across codecs, resolutions, and feature-flag combinations.",
        metrics: ["Multi-Format Validation", "Edge-Case Coverage", "Automated Release Checks"],
      },
      "product-leader": {
        description: "Converted a repeated operational bottleneck into a scalable quality system, returning engineering capacity to roadmap work.",
        metrics: ["60–70% Less Manual QA", "Earlier Bug Detection", "Engineering Leverage"],
      },
      designer: {
        description: "Mapped the end-to-end release workflow and designed clear output states and acceptance rules around the highest-risk user experiences.",
        metrics: ["Workflow Mapping", "Clear Acceptance Rules", "Reliable Outputs"],
      },
    },
  },
  {
    id: "visa-developer",
    headline: "API access without the wait",
    summary: "Every request for API access was verified by hand, so developers waited weeks. I shadowed the team doing the checks and designed tiered verification that approves known customers automatically and sends the rest to review. Processing time fell 70%, and developer onboarding got twice as fast.",
    roleTitle: "Senior Associate Product Manager",
    scope: "Discovery, Workflow design",
    before: "Every API access request verified by hand",
    after: "Known customers approved automatically",
    title: "Visa Dev Portal: Accelerating the API Onboarding Funnel",
    company: "Visa",
    year: "2020",
    image: "/assets/20945230.jpg",
    description: "Automated the API access workflow, reducing manual processing time by 70%. Delivered six-figure annual savings and enabled 2X faster developer onboarding by integrating the sales pipeline with the developer portal.",
    problem: "Slow onboarding created friction at the top of the sales funnel. PMs spent 10-20 hours manually verifying each of the 1,000+ monthly API requests, forcing developers to wait weeks for access. The core bottleneck: treating a low-risk, known customer with the same rigor as an edge case.",
    approach: "Shadowed PMs to identify the 80/20 rule: 80% of requests were simple, 20% were edge cases. I built a tiered verification system that integrated Salesforce (our sales system) and account management tools. The logic auto-approved known contacts for immediate access while routing high-risk requests for manual review. We sped up the 80% without compromising security on the 20%.",
    impact: "• Reduced PM processing time by 70% (10 hours to 3 hours) by building tiered verification that auto-approved 80% of low-risk requests.\n• Reclaimed 1,000+ hours monthly by integrating Salesforce with internal systems to create a real-time single source of truth.\n• Accelerated developer onboarding by 2x and delivered six-figure annual savings by eliminating manual verification for known customers.",
    fullStory: "At Visa, I saw a critical business problem masquerading as a process issue. The friction in developer onboarding was costing us time, money, and developer goodwill. By shadowing PMs, I realized we had the data to be fast and secure simultaneously.\n\nI championed an automated workflow that made low-risk requests disappear from a PM's inbox. This freed colleagues to focus on strategic work and complex edge cases while high-value customers received faster access. The result was six-figure annual savings and a more human-centered developer experience.",
    metrics: ["70% Time Reduction", "Six-Figure Annual Savings", "2X Faster Dev Onboarding"],
    industry: ["fintech", "enterprise", "developer-experience"],
    category: "featured-work",
    teamSize: "5 (3 engineers, 1 PMs)",
    budget: "Six-figure annual savings",
    stakeholders: ["VP Product", "Engineering Director", "Director of Product"],
  },
  {
    id: "artifactlabs-museum",
    headline: "Museum licensing in 48 hours",
    summary: "Museums licensed their digital archives through weeks of email chains. I led product strategy for a marketplace that put discovery, rights, payment and delivery in one flow. Licensing now closes in 48 hours, and every beta customer stayed.",
    roleTitle: "Product Manager / Advisor",
    scope: "Strategy, Marketplace UX",
    before: "Weeks of email chains per license",
    after: "48 hours in one flow",
    title: "Artifact Labs: The Blockchain Licensing Engine",
    company: "Artifact Labs",
    year: "2023",
    image: "/assets/36748616061539.jpg",
    description: "Generated substantial new contract value in one quarter by building a Web3 licensing platform. Reduced the museum licensing cycle from 4 weeks to 48 hours, increasing customers' licensing revenue by 35%.",
    problem: "Museums managed high-value digital asset licensing through fragmented 4-6 week email chains. This workflow drag meant museums were leaving money and cultural exposure on the table, unable to monetize their archives efficiently.",
    approach: "Designed a two-sided marketplace that created a single flow for discovery, rights negotiation, payment, and file delivery. Chose a lower-cost blockchain architecture that cut transaction costs by 95% and made the model commercially viable.",
    impact: "• Reduced licensing turnaround time by 90% by building a two-sided marketplace with automated rights negotiation.\n• Processed 150+ licenses in one quarter while cutting blockchain transaction costs by 95%.\n• Generated six-figure contract value with major museums.\n• Increased customer licensing revenue by 35% on average through improved efficiency.",
    fullStory: "I led this project from zero to one, tackling inefficiency in cultural-asset licensing. Interviews with curators and publishers showed that blockchain could support provable authenticity and automated payments if the economics worked.\n\nWe shipped the MVP in 6 weeks. The result was a new revenue stream for museums, a 90% reduction in turnaround time, and six-figure contract value within one quarter.",
    metrics: ["Six-Figure Contract Value", "90% Time Reduction", "35% Customer Revenue Increase"],
    industry: ["enterprise", "web3", "blockchain", "media"],
    category: "featured-work",
    teamSize: "5 (3 engineers, 1 designer, 1 PM)",
    budget: "Six-figure contract value generated in one quarter",
    stakeholders: ["CEO", "CTO", "Head of Partnerships"],
  },
  {
    id: "meed-receipt-scanning",
    lenses: {
      "recruiter": "Advising early-stage startups in Hong Kong. The customer base grew 400%.",
      "product-leader": "I treated digital loyalty as the way in, and argued for a connected network of merchants as the long-term advantage.",
      "designer": "I watched the lunch rush in person. The fix was taking staff out of the flow, not making their screen faster.",
      "engineer": "Receipt scanning replaced manual entry and staff verification, taking each visit from minutes to seconds.",
      "founder": "From 3 to 15 restaurants and $81K ARR, with 80%+ monthly retention.",
    },
    headline: "A loyalty program that survives the lunch rush",
    summary: "Restaurant staff were too busy during service to run the loyalty program, so few customers used it. I watched how restaurants worked during the rush and redesigned loyalty around customers scanning their own receipts. Receipt scanning reached 78% adoption, and the customer base grew from 3 to 15 restaurants.",
    roleTitle: "Product Manager / Advisor",
    scope: "Field research, UX, Strategy",
    before: "3 minutes, staff verifies each visit",
    after: "15 seconds, customer scans the receipt",
    title: "Meed: Solving Adoption via Digital Loyalty",
    company: "Meed Loyalty",
    year: "2024",
    image: "/assets/case-study-meed.png",
    link: "https://www.meedloyalty.com/features-scan",
    description: "Achieved 78% user adoption, nearly 4X the original target, by automating receipt capture. Transformed a high-friction manual process into a 15-second digital experience, driving a 15X increase in active users.",
    problem: "The loyalty program was failing because it ignored the kitchen rush. The original system required 2-3 minutes of manual input and staff verification. On-site observation revealed that during peak service, staff were too overwhelmed to manage loyalty, resulting in only 20 active users per restaurant.",
    approach: "Conducted in person research by shadowing restaurant staff during peak lunch hours in Hong Kong. I identified that the true friction was staff cognitive load, especially during dining rush hours. I pivoted the product strategy to a customer-led model using OCR (Optical Character Recognition) technology. This allowed customers to scan receipts and earn points in 10 seconds with zero staff intervention, removing the bottleneck entirely.",
    impact: "• Reduced customer transaction time by 92% (3 minutes to 15 seconds) by building an OCR receipt scanning system that eliminated staff verification.\n• Achieved 78.4% adoption (4x the 20% target) by removing staff cognitive load during peak service hours.\n• Grew active users by 15x by enabling online loyalty point redemption and unlocking new recurring revenue.",
    fullStory: "At Meed, I learned that a product is only as good as its worst user environment. By spending time in busy HK and Singapore restaurants, I saw that the best technology in the world wouldn't work if it required an overwhelmed waiter to press a button. \n\nI led the pivot to an OCR-based system that empowered the customer while protecting the staff's workflow. We shipped the feature in 30 days. The result was a 15X jump in active users and a product that became our primary sales differentiator.",
    metrics: ["78.4% Adoption Rate", "15X Active User Growth", "New Recurring Revenue"],
    industry: ["startups", "fintech", "loyalty"],
    category: "featured-work",
    teamSize: "3 (2 engineers, 1 PM)",
    budget: "New recurring revenue generated",
    stakeholders: ["CEO", "Head of Product", "Engineering Lead"],
  },
  {
    id: "starterspath-tenant-passport",
    headline: "A rental application you fill in once",
    summary: "Every rental application made tenants collect the same documents again and property managers verify them from scratch. I interviewed people on both sides and designed a reusable tenant profile verified by previous landlords. Approvals got 40% faster.",
    roleTitle: "Founder, Head of Product",
    scope: "Research, Product design",
    before: "14 days re-verifying every application",
    after: "40% faster with a reusable tenant profile",
    title: "Tenant Passport: Solving the Rental 'Portability' Problem",
    company: "Starter's Path",
    year: "2018",
    image: "/assets/21729.jpg",
    description: "Accelerated the rental approval cycle by 40% by engineering a portable digital identity. Validated a six-figure pipeline across major property management firms through a high-trust verification network.",
    problem: "The rental market suffered from verification paralysis. Every new application forced tenants to re-collect sensitive documents and property managers to manually re-verify the same data from scratch. This redundant, 14-day cycle created massive friction and increased vacancy risks for landlords.",
    approach: "I interviewed 30+ stakeholders to identify that the root cause was the lack of a single source of truth. I designed a digital Tenant Passport where documents are uploaded once and verified by previous landlords. By adding a landlord-rating system, I created a virtuous cycle: every completed lease increased the tenant's trust score, making the next approval nearly instantaneous.",
    impact: "• Reduced rental application time by 40% by engineering a portable digital identity with landlord verification.\n• Eliminated repetitive document collection through reusable tenant profiles.\n• Generated a six-figure pipeline across major property management companies.",
    fullStory: "At Starter's Path, we built the product for an organization called BuildingChat. I saw an industry where the lack of data portability was hurting everyone. Tenants were frustrated by repetitive paperwork, and landlords were losing money to long vacancy windows. I realized the solution wasn't just a better form, it was a better network.\n\nI led the design of the Tenant Passport to act as a 'Digital Resume' for renters. By moving the verification burden from the landlord to the system, we eliminated the most time-consuming part of the process.",
    metrics: ["40% Faster Approvals", "Six-Figure Pipeline", "1-Click Applications"],
    industry: ["startups", "proptech", "marketplace"],
    category: "featured-work",
    teamSize: "3 (2 engineers, 1 PM)",
    budget: "Six-figure pipeline validated across major property managers",
    stakeholders: ["CEO", "Engineering Lead"],
  },
  {
    id: "starterspath-rfid-inventory",
    headline: "Inventory that counts itself",
    summary: "A restaurant group was losing inventory and relying on three-hour manual counts that were often skipped. I adapted RFID liquid sensing to bottles and synced it with point-of-sale data, so discrepancies showed up as they happened. The business recovered 40% of the annual revenue it was losing to leakage.",
    roleTitle: "Founder, Head of Product",
    scope: "Hardware, Workflow design",
    before: "3-hour manual counts every day",
    after: "Real-time tracking, no counting",
    title: "Liquid Assets: Real-Time RFID Inventory Tracking",
    company: "Starter's Path",
    year: "2018",
    image: "/assets/NA_SEP._29.jpg",
    description: "Engineered a first-of-its-kind RFID liquid-tracking system that gave restaurant owners real-time visibility into substantial monthly shrinkage. Reduced manual labor by 24% and identified a six-figure annual savings opportunity.",
    problem: "A multi-unit restaurant group was experiencing substantial monthly inventory loss. Manual counts took hours each day, were frequently skipped, and could not distinguish between over-pouring, waste, and theft.",
    approach: "Shifted the strategy from 'Reporting' to 'Prevention.' After observing bar operations, I identified that the 24-hour lag in manual counts made accountability impossible. I adapted medical-grade RFID technology (originally for liquid sensing in diapers) to liquor bottles. I architected a system that synced bottle-weight changes with POS transactions in real-time, moving the source of truth from a clipboard to a live dashboard that flagged discrepancies the moment a drink was poured.",
    impact: "• Automated 80+ hours of monthly manual labor by replacing 3-hour daily counts with instant, real-time RFID tracking.\n• Helped the business recover 40% of the annual revenue it was losing to leakage, through a real-time sync between physical inventory and POS sales data.\n• Eliminated 100% of 'Shadow Waste' through a hardware-software correlation engine that flagged discrepancies the moment they occurred.",
    fullStory: "At Starter's Path, I tackled a classic leaky bucket problem in the hospitality industry. The owner knew they were losing money but lacked the data to act. By bringing in liquid-sensing RFID technology, I turned every bottle into a smart device. \n\nI integrated this hardware with the restaurant's POS system so that if a bartender poured 2oz of Scotch but only rang up 1oz, the owner was alerted instantly. This transformed inventory from a dreaded end-of-day chore into a background process.",
    metrics: ["Material Loss Visibility", "24% Labor Reduction", "Real-Time Detection"],
    industry: ["startups", "iot", "hospitality"],
    category: "featured-work",
    teamSize: "9 (6 engineers, 1 project manager, 1 hardware specialist, 1 PM)",
    budget: "Six-figure annual savings opportunity identified",
    stakeholders: ["Restaurant Owner", "Engineering Lead"],
  },
  {
    id: "productbot-okrs",
    headline: "Getting the CEO out of every product decision",
    summary: "With no shared way to prioritize, the CEO was spending 4–5 hours a day on product decisions. I ran OKR workshops with the CEO and Head of Product and set clear rules for what the team could decide alone. That dropped to 2–3 hours a week, and the beta shipped six weeks early.",
    roleTitle: "Product Manager",
    scope: "Prioritization, Team process",
    before: "CEO spends 4–5 hours a day on product decisions",
    after: "2–3 hours a week",
    title: "Scaling Leadership: Operationalizing a Revenue-Ready Beta",
    company: "Productbot AI",
    year: "2025",
    image: "/assets/20943804.jpg",
    description: "Designed a decision-making framework that reduced CEO product-dependency by 90%, accelerated beta delivery by 6 weeks, and enabled leadership to focus on a six-figure pipeline and seed fundraising.",
    problem: "Productbot was trapped in 'Founder Bottleneck.' With only one engineer and no prioritization framework, the CEO was spending 5 hours/day on micro-level product decisions. This lack of autonomy delayed the beta launch and prevented the CEO from focusing on the high-leverage activities needed for seed funding: investor relations and customer development.",
    approach: "Diagnosed the root cause as a lack of decision guardrails. I introduced an OKR framework paired with RICE prioritization and evaluated the backlog against customer value, feasibility for a lean team, and the fundraising narrative. Clear no-go zones helped prune 40% of the backlog and decentralized execution.",
    impact: "• Reclaimed 90% of CEO product-decision time with clearer prioritization guardrails.\n• Shipped beta 6 weeks earlier than estimated by enabling more autonomous execution.\n• Freed leadership bandwidth for fundraising and helped create a six-figure recurring-revenue pipeline.",
    fullStory: "At Productbot AI, I realized that for an early-stage startup, speed isn't just about coding, it's about the speed of decision-making. The CEO was the single point of failure for every feature. I implemented a system that replaced gut feel with a data-driven RICE score, aligning the product roadmap directly with seed-round milestones.\n\nBy defining what we weren't building, I gave the engineer the clarity to ship 6 weeks ahead of schedule. This transformed the company from a chaotic feature factory into a focused venture-ready startup.",
    metrics: ["90% CEO Time Reclaimed", "6-Week Beta Acceleration", "Six-Figure Pipeline"],
    industry: ["startups", "ai-ml", "productivity"],
    category: "featured-work",
    teamSize: "2 (1 engineer, 1 PM)",
    budget: "Six-figure recurring-revenue pipeline",
    stakeholders: ["CEO", "CTO", "Head of Product"],
  },
  {
    id: "productbot-dashboard",
    lenses: {
      "recruiter": "0 to 1 at an early-stage AI startup. The beta shipped six weeks early.",
      "product-leader": "I cut scope to ship six weeks early and ran OKR workshops with the CEO and Head of Product to agree priorities.",
      "designer": "Corrections were part of the normal flow, so fixing a tag took no extra effort and made the product better.",
      "engineer": "Human-in-the-loop tagging turned each correction into training data and cut false positives by 40%.",
      "founder": "Three design partners recruited at zero acquisition cost, and a six-figure recurring-revenue pipeline.",
    },
    headline: "AI feedback sorting that people could trust",
    summary: "Product teams were sorting customer feedback by hand and did not trust AI tools to do it for them. I interviewed 20+ customers, recruited three design partners, and designed a tagging flow where each correction improved the model. Accuracy rose from 70% to 85%, and every beta customer committed to buy.",
    roleTitle: "Product Manager",
    scope: "Discovery, AI quality, 0 to 1",
    before: "8 hours a week triaging feedback by hand",
    after: "3 hours a week, with AI doing the sorting",
    title: "AI Feedback Engine: From Manual Analysis to Revenue-Ready Beta",
    company: "Productbot AI",
    year: "2025",
    image: "/assets/case-study-productbot.png",
    description: "Shipped an AI-powered insights dashboard that converted 100% of beta users and validated a six-figure recurring-revenue pipeline. Reduced manual analysis time by 65% and used a human-in-the-loop system to lift AI accuracy to 85%.",
    problem: "B2B Product Managers were drowning in feedback-debt, spending 8–12 hours/week manually triaging data across Intercom, Zendesk, and Slack. Existing tools lacked the accuracy (hovering at ~70%) to be trusted for roadmap decisions, leading to analysis paralysis and fragmented product strategies.",
    approach: "Identified that tool fragmentation was the root cause of friction, not just the volume of data. I prioritized a workflow-first strategy, building deep integrations to reduce tab-switching by 90%. To solve the trust gap, I designed a human-in-the-loop tagging system that turned manual user corrections into training data. This strategic move raised AI accuracy from 70% to 85%, creating a defensible data moat against established competitors like Dovetail and Productboard.",
    impact: "• Reduced feedback analysis time by 65% by eliminating tab-switching across customer-feedback tools.\n• Improved AI accuracy from 70% to 85% with a human-in-the-loop tagging system.\n• Achieved 100% daily active usage and validated pricing with 3.6x ROI and a 3.5-month payback period.",
    fullStory: "At Productbot AI, I led discovery and execution for the core feedback engine. After interviewing PMs, I realized they did not need more charts; they needed confidence in their data. A dashboard that ranked requests by an AI-assisted impact score helped teams justify roadmap decisions with evidence.\n\nWe moved from proof of concept to a revenue-ready beta in one development cycle. By the end, we had validated a business model and a six-figure recurring-revenue pipeline.",
    metrics: ["65% Less Analysis Time", "85% AI Accuracy", "3.6x Customer ROI"],
    industry: ["startups", "ai-ml", "enterprise"],
    category: "featured-work",
    teamSize: "2 (1 engineer, 1 PM)",
    budget: "Six-figure recurring-revenue pipeline validated",
    stakeholders: ["CEO", "CTO", "Head of Product"],
    personaContent: {
      engineer: {
        description: "Improved AI accuracy from 70% to 85% through human-in-the-loop tagging system. Collected 2,000+ labeled data points from beta customers to create training data moat.",
        metrics: ["70% → 85% AI Accuracy", "2,000+ Labeled Data Points", "Training Data Moat"],
      },
      founder: {
        description: "Validated pricing with 3.6x ROI and a 3.5-month payback period by reducing manual work 65%.",
        metrics: ["Pricing Validated", "3.6x ROI", "3.5-Month Payback"],
      },
    },
  },
  {
    id: "joystick-growth",
    headline: "The first 476 players",
    summary: "After a pivot to consumer gaming, the team had no way to find players on Telegram. I studied how successful Telegram games spread and ran acquisition experiments built on referrals and community. The game went from 0 to 476 players.",
    roleTitle: "Product Manager / Advisor",
    scope: "Growth, Experiments",
    title: "Telegram Gaming: Scaling from 0 to 500 Players",
    company: "Joystick",
    year: "2023",
    image: "/assets/10339984.jpg",
    description: "Designed a full-funnel growth strategy for an emerging Telegram gaming platform, scaling the player base from 0 to 476 users in 8 weeks by reverse-engineering viral mechanics from top-tier titles like Notcoin and Hamster Kombat.",
    problem: "Following a pivot from B2B tools to consumer gaming, Joystick lacked a user acquisition playbook for the nascent Telegram ecosystem. The core challenge was identifying whether Telegram's unique social infrastructure could sustain a viable cost-per-acquisition (CPA) and high-retention player base.",
    approach: "I audited 15+ high-growth Telegram games to map out the social behaviors, specifically how referral incentives and bot-based group notifications drive organic virality. I engineered a two-phase pipeline: first, building a high-trust organic community of 200 players to validate gameplay; second, deploying targeted growth sprints via Telegram ads and group bot integrations to test scalability and unit economics.",
    impact: "• Grew player base from 0 to 476 users in 6-8 weeks by reverse-engineering viral mechanics from 15+ successful Telegram games.\n• Validated product-market fit with 0 CAC by reaching the first 200 players through community-led referral loops.\n• Grew from 0 to 476 users in 8 weeks by building a reusable Telegram growth playbook combining organic community growth with paid experiments.",
    fullStory: "At Joystick, I operated as a growth generalist during a high-stakes pivot. The Telegram gaming market was the wild-west in 2023, and traditional Facebook/Google ad playbooks didn't apply. I realized that on Telegram, the community *is* the marketing engine.\n\nBy embedding referral mechanics directly into the game's core loop. Similar to the tap-to-earn models that would later dominate the platform, we turned our first 100 players into an active sales force. I also stepped into production roles, handling sound design and asset management to ensure the product quality matched our growth ambitions.",
    metrics: ["138% Player Growth", "0 to 476 Users", "Zero-CAC Validation"],
    industry: ["startups", "gaming", "web3"],
    category: "featured-work",
    teamSize: "9 (6 engineers, 2 designers, 1 PM)",
    budget: "Zero-CAC growth strategy across 8-week initiative",
    stakeholders: ["CEO"],
  },
  {
    id: "obscura-mgm",
    headline: "An installation anyone could walk up to and use",
    summary: "MGM Cotai in Macau wanted a large interactive installation that guests of any age could use without instructions. I worked across design and engineering and built a mobile game that connected visitors’ phones to the installation. It engaged 25,000+ people in its first week.",
    roleTitle: "Visual Designer & Software Engineer",
    scope: "Interaction design, Engineering",
    title: "Phygital Scale: Immersive UX for MGM Cotai",
    company: "Obscura Digital",
    year: "2017",
    image: "https://matthewragan.com/wp-content/uploads/2024/12/mgm-cotai-.jpg",
    link: "https://vimeo.com/268686672",
    description: "Orchestrated the product direction for a massive-scale interactive lobby installation at MGM Cotai in Macau. Pioneered early WeChat mini-program integration that engaged 25,000+ people in its first week, bridging the gap between physical space and digital interaction.",
    problem: "MGM Cotai needed to transform their physical lobby into a high-engagement 'Phygital' (physical + digital) destination. The technical challenge was to build a system that was creatively avant-garde yet robust enough for a busy public lobby, all within the constraints of an emerging WeChat ecosystem.",
    approach: "Evolved from Software Engineer to a hybrid product lead to bridge the communication gap between technical limitations and creative vision. I identified that the friction point wasn't the hardware, but the onboarding; I championed the use of WeChat mini-apps, to eliminate app-download friction. I led the cross-functional roadmap between engineering and visual design, ensuring that the multi-layered interactive elements remained intuitive for users of all ages and tech-literacy levels.",
    impact: "• Engaged 25,000+ people in the first week by pioneering WeChat mini-app integration in a physical lobby installation.\n• Eliminated app-download friction by using WeChat's native ecosystem to create zero-friction onboarding for all guests.\n• Created a centerpiece installation for MGM Cotai by successfully deploying large-scale physical-digital integration in a high-traffic environment.",
    fullStory: "At Obscura Digital, I learned that the most honest feedback comes from a user standing in front of a 10-foot screen. I moved from pure coding into a product-focused role because I realized that the success of the MGM project depended on the 'Why,' not just the 'How.' \n\nBy watching people interact with our work in real-time, I developed a 'no-hiding' approach to product development. If a user didn't understand the interface in 3 seconds, it was a failure, no matter how clean the code was. This experience in 'Emotional Engineering', designing for wonder while managing extreme technical constraints, remains the foundation of how I build software today: start with the human experience and work backward to the tech stack.",
    metrics: ["25K+ Users in Week One", "WeChat Integrations", "Physical-Digital UX"],
    industry: ["media", "hospitality", "creative-tech"],
    category: "featured-work",
    teamSize: "15+ (8 engineers, 2 designers, 2 creative directors, 1 PM, 2 project managers)",
    budget: "Large-scale enterprise installation for MGM Cotai",
    stakeholders: ["VP Creative", "Engineering Director", "MGM Cotai Leadership", "C-suite"],
  },
];


// Map of which project IDs should be shown for each persona
// If a persona is not listed, it will show all projects (default behavior)
// Based on portfolio-structure.md persona priorities
const PERSONA_PROJECT_MAP: Record<string, string[]> = {
  default: [
    "salient-enterprise-ai",
    "globality-insights",
    "productbot-dashboard",
    "meed-receipt-scanning",
  ],
  designer: [
    "salient-enterprise-ai",
    "meed-receipt-scanning",
  ],
  founder: [
    "salient-enterprise-ai",
    "productbot-dashboard",
    "meed-receipt-scanning",
  ],
  investor: [
    "salient-enterprise-ai",
    "productbot-dashboard",
  ],
  recruiter: [
    "salient-enterprise-ai",
    "productbot-dashboard",
    "meed-receipt-scanning",
  ],
  "product-leader": [
    "salient-enterprise-ai",
    "productbot-dashboard",
    "meed-receipt-scanning",
  ],
  engineer: [
    "salient-enterprise-ai",
    "productbot-dashboard",
  ],
};

/**
 * Check if a project should be shown for a given persona
 */
function shouldShowProjectForPersona(projectId: string, persona: string): boolean {
  // If persona has a specific mapping, only show those projects
  const personaProjects = PERSONA_PROJECT_MAP[persona];
  if (personaProjects) {
    return personaProjects.includes(projectId);
  }

  // If persona not in map, show all (fallback)
  return true;
}

/**
 * Get all featured work projects (for "View All" functionality)
 */
export function getAllFeaturedWork(persona: string = "default"): Project[] {
  const featuredWorkProjects = projects.filter((project) => project.category === "featured-work" || !project.category);
  return featuredWorkProjects.map((project) => getProjectForPersona(project, persona));
}

export function getFeaturedProjects(persona: string = "default"): Project[] {
  const featuredProjects = projects.filter((project) => project.category === "featured-project");
  return featuredProjects.map((project) => getProjectForPersona(project, persona));
}

export function getFeaturedWork(persona: string = "default"): Project[] {
  const featuredWorkProjects = projects.filter((project) => {
    // First filter by category
    const isFeaturedWork = project.category === "featured-work" || !project.category;
    if (!isFeaturedWork) return false;
    
    // Then filter by persona
    return shouldShowProjectForPersona(project.id, persona);
  });
  
  return featuredWorkProjects.map((project) => getProjectForPersona(project, persona));
}

// Calculate persona-specific aggregate stats from all accomplishments
export function getAggregateStats(persona: string = "default"): string[] {
  const featuredWorkProjects = projects.filter(
    (project) => project.category === "featured-work"
  );

  // Base aggregate calculations (all are sums of accomplishments)
  const totalRevenue = "Multi-Company Commercial Impact";
  const totalValue = "Multi-Million-Dollar Commercial Impact";
  const timeSavings = "85K+ Hours Saved Annually";
  const userAdoption = "80% Enterprise Adoption Rate";
  const avgTimeReduction = "85% Average Time Reduction";
  const zeroToOneLaunches = "Multiple 0→1 Product Launches";
  const engineeringLeverage = "End-to-End Engineering Automation";
  const enterpriseImpact = "Fortune 500 Teams Impacted";
  const fraudAccuracy = "75% Fraud Detection Accuracy";
  const potentialImpact = "Multi-Billion-Dollar Market";
  const crossFunctionalTeams = "Cross-Functional Team Leadership";

  // Persona-specific stat combinations
  switch (persona) {
    case "designer":
      return [
        avgTimeReduction,
        userAdoption,
        "100+ User Research Sessions",
        "Human-Centered Product Design",
      ];

    case "founder":
      return [
        totalRevenue,
        engineeringLeverage,
        zeroToOneLaunches,
        "8-Week Product Launches",
      ];

    case "investor":
      return [
        engineeringLeverage,
        totalValue,
        potentialImpact,
        "Strategic Lifecycle Ownership",
      ];

    case "recruiter":
      return [
        totalValue,
        avgTimeReduction,
        userAdoption,
        `${featuredWorkProjects.length} Products Across 4+ Industries`,
      ];

    case "product-leader":
      return [
        totalRevenue,
        crossFunctionalTeams,
        avgTimeReduction,
        "Strategic Lifecycle Ownership",
      ];

    case "engineer":
      return [
        engineeringLeverage,
        avgTimeReduction,
        "AI/ML Product Development",
        timeSavings,
      ];

    default:
      return [
        totalValue,
        timeSavings,
        userAdoption,
      ];
  }
}

// Persona-based handshake system
export const personaHandshakes: PersonaMap = {
  designer: {
    headline: "PM. Builder. User Advocate.",
    greeting: "Hey there! I'm Jeff.",
    intro: "I build products in the field, not in Figma.",
    body: "I've shadowed users in restaurant kitchens, live operations rooms, and procurement offices—that's how I **reduced decision time by 97%** and **improved Net Promoter Score (NPS) by 800%**.",
    cta: "Want to build something users will love? Let's talk.",
    focus: "Empathy & Craft",
  },
  founder: {
    headline: "PM. Revenue-Driver. Creator.",
    greeting: "Hey there! I'm Jeff.",
    intro: "I build products that make money—fast.",
    body: "I've built **0→1 products on startup timelines**, created meaningful commercial impact across multiple companies, and helped AI systems become trusted parts of customer workflows. I ship outcomes, not feature lists.",
    cta: "Let's talk about what we could build together.",
    focus: "Speed, Revenue, & Capital Efficiency",
  },
  investor: {
    headline: "PM. Strategist. Builder.",
    greeting: "Hey there! I'm Jeff.",
    intro: "I build products that create defensible moats.",
    body: "In the last two years: I built end-to-end engineering automation that delivered outsized leverage from off-the-shelf tooling, and shipped products that created 6-month competitive leads. I think in terms of unit economics, capital efficiency, and long-term defensibility—not just feature lists. Product strategy should directly map to business strategy.",
    cta: "Let's talk about what's possible.",
    focus: "Scalability & Strategic Lifecycle",
  },
  recruiter: {
    headline: "PM. Builder. Results-Driven.",
    greeting: "Hi there! I'm Jeff.",
    intro: "I've spent 7+ years building AI products at startups and enterprises.",
    body: "Most recently, I've scaled enterprise AI adoption, improved product reliability and engagement, and turned repeated customer needs into reusable capabilities. Earlier work includes **97% friction reduction at Globality** and enterprise product development at Visa.",
    cta: "Let's talk about what I can bring to your team.",
    focus: "Qualifications & Cultural Fit",
  },
  "product-leader": {
    headline: "PM. Builder. Strategic Leader.",
    greeting: "Hey there! I'm Jeff. ",
    intro: "I own strategic initiatives from ideation to revenue.",
    body: "I've led products that **drove 40% account expansion**, coordinated cross-functional teams of 10+ across engineering and data science, and shipped enterprise AI tools that became primary sales differentiators. I clear bottlenecks, I don't create them.",
    cta: "Let's talk about scaling impact together.",
    focus: "Strategic Ownership & Leadership",
  },
  engineer: {
    headline: "PM. Builder. Technical Partner.",
    greeting: "Hey there! I'm Jeff. ",
    intro: "I write PRDs you'll actually want to read.",
    body: "I've built AI products, **automated engineering workflows end-to-end**, and shipped features you'll be proud of. I document edge cases, respect constraints, and never hand-wave feasibility.",
    cta: "Let's ship something great together.",
    focus: "Technical Partnership & Mutual Respect",
  },
  default: {
    headline: "Complex problems. Scalable AI products.",
    greeting: "Hey there! I'm Jeff.",
    intro: "I’m a builder PM who turns messy customer workflows into products people trust—and businesses can scale.",
    body: "I work across **0→1 discovery and 1→10 productization**: finding the real problem, prototyping the first answer, making the AI reliable, and turning repeated customer needs into reusable capabilities. Technical enough to build, strategic enough to know what not to.",
    cta: "Let's talk about what we could build together.",
    focus: "Broad Appeal & Proven Impact",
  },
};

export function getPersonaFromJobTitle(jobTitle: string): string {
  if (!jobTitle) return "default";

  const title = jobTitle.toLowerCase();

  // Handle new onboarding flow job titles
  if (title === "recruiter") {
    return "recruiter";
  }
  if (title === "engineer") {
    return "engineer";
  }
  if (title === "product leader") {
    return "product-leader";
  }
  if (title === "designer") {
    return "designer";
  }
  if (title === "founder") {
    return "founder";
  }
  if (title === "investor") {
    return "investor";
  }
  if (title === "generalist" || title === "other") {
    return "default";
  }

  // Legacy mappings for other job titles
  if (title.includes("designer") || title.includes("ux") || title.includes("design")) {
    return "designer";
  }
  if (title.includes("founder") || title.includes("ceo") || title.includes("co-founder")) {
    return "founder";
  }
  if (title.includes("investor") || title.includes("advisor") || title.includes("board")) {
    return "investor";
  }
  if (title.includes("recruiter") || title.includes("talent") || title.includes("hr")) {
    return "recruiter";
  }
  if (
    title.includes("vp product") ||
    title.includes("director of product") ||
    title.includes("head of product") ||
    title.includes("product lead")
  ) {
    return "product-leader";
  }
  if (
    title.includes("engineer") ||
    title.includes("developer") ||
    title.includes("tech lead") ||
    title.includes("cto")
  ) {
    return "engineer";
  }

  return "default";
}


export function getPersonaHandshake(
  persona: string,
  jobTitle: string = ""
): PersonaHandshake {
  const handshake = personaHandshakes[persona] || personaHandshakes.default;

  // Return handshake directly - no name personalization needed
  return handshake;
}

/**
 * Get persona-specific content for a project
 * Returns the persona-specific version if available, otherwise returns the default content
 */
export function getProjectForPersona(project: Project, persona: string = "default"): Project {
  // If no persona content or persona is default, return project as-is
  if (!project.personaContent || persona === "default") {
    return project;
  }

  const personaContent = project.personaContent[persona];
  if (!personaContent) {
    return project;
  }

  // Merge persona-specific content with default content
  return {
    ...project,
    title: personaContent.title || project.title,
    description: personaContent.description || project.description,
    metrics: personaContent.metrics || project.metrics,
    problem: personaContent.problem || project.problem,
    approach: personaContent.approach || project.approach,
    impact: personaContent.impact || project.impact,
    fullStory: personaContent.fullStory || project.fullStory,
  };
}
