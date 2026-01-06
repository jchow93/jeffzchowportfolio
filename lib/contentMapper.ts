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
  budget?: string; // e.g., "$2M budget across 6-month initiative"
  stakeholders?: string[]; // e.g., ["VP Product", "Engineering Director", "C-suite"]
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
    title: "The Dynamic Portfolio: A Study in Conversion UX",
    company: "Personal Portfolio",
    year: "2025",
    description: "Designed and engineered a portfolio that adapts to each visitor's role—founders see revenue impact, engineers see technical depth, recruiters see qualifications. Built it myself to prove personalization beats static portfolios.",
    problem: "Static portfolios try to speak to everyone and resonate with no one. Recruiters need qualifications, founders need revenue impact, engineers need technical depth. A single page can't serve all three.",
    approach: "Mapped 6 personas (Founder, Engineer, Recruiter, Designer, Investor, Product Leader) and what each cares about. Built content schemas that swap by role, then shipped it in Next.js using Cursor in 5 days.",
    impact: "• Eliminated 'generalist dilution' by showing relevant content to each persona. \n• Created 6 distinct narrative paths from a single codebase. \n• Proved that personal branding benefits from product thinking.",
    fullStory: "Traditional portfolios try to speak to everyone and resonate with no one. Recruiters need qualifications, founders need revenue impact, engineers need technical depth. A static page can't serve all three.\n\nI built a system that captures your role on first visit, then swaps content in real-time. Founders see revenue metrics and 0→1 launches. Engineers see technical implementation. Recruiters see cross-industry experience.\n\nThis portfolio is a meta-project: proving that even personal branding benefits from product thinking.",
    metrics: ["6 Dynamic Personas", "Zero Static Content", "Next.js + Tailwind"],
    industry: ["ux"],
    category: "featured-project",
    image: "/assets/20943517.jpg",
    imageCredit: '<a href="http://www.freepik.com" target="_blank" rel="noopener noreferrer">Designed by vectorjuice / Freepik</a>',
  },
  // Featured Work - Professional projects
  {
    id: "shorttok-sports",
    title: "ShortTok Sports: Capturing Live Highlights in Real-Time",
    company: "ShortTok",
    year: "2025",
    image: "https://images.sidearmdev.com/resize?url=https%3A%2F%2Fdxbhsrqyrr690.cloudfront.net%2Fsidearm.nextgen.sites%2Fredstormsports.com%2Fimages%2F2025%2F10%2F30%2FShortTok_WEB.jpg&height=1100&type=webp",
    description: "Shipped an AI-powered sports clipping platform in 8 weeks that reduced highlight creation time by 90%.",
    problem: "College sports programs were missing their viral window. Manually clipping highlights during live games took 45+ minutes, meaning the moment was old content before it was posted. The friction wasn't just speed. It was the cognitive load of SIDs trying to manage a live game while wrestling with editing software.",
    approach: "Conducted in person research by shadowing SIDs during live games. I identified that the solution wasn't just AI, it was workflow harmony. I designed a platform that automatically extracts clips from live streams but keeps the human in the loop for tagging and publishing. We prioritized Time-to-Social as our primary KPI, shipping a V1 in just 8 weeks.",
    impact: "• Reduced highlight turnaround time by 90% (45 minutes to <5 minutes) by deploying AI-powered moment detection on live streams.\n• Increased content volume by 10x by automating clip extraction while keeping human-in-the-loop for tagging and publishing.",
    fullStory: "By shadowing SIDs during live games, I realized they needed a moment catcher, not another complex editor. Led the 8-week sprint to ship a platform that fit the chaos of a live press box.",
    metrics: ["90% Time Reduction", "8-Week GTM"],
    industry: ["media", "ai-ml", "startups"],
    category: "featured-work",
    teamSize: "3 (2 engineers, 1 PM)",
    budget: "$100K+ revenue generated in 8-week initiative",
    stakeholders: ["CEO", "CTO"],
    personaContent: {
      founder: {
        title: "ShortTok Sports: 0→1 Revenue in 8 Weeks",
        description: "Shipped revenue-generating product in 8 weeks. Generated $100K+ in immediate revenue.",
        metrics: ["$100K Revenue", "8-Week Delivery"],
      },
      designer: {
        title: "ShortTok Sports: Solving the viral window Problem",
        description: "Reduced highlight creation from 45 minutes to <5 minutes by observing SIDs during live games to identify the real friction: cognitive load during chaos, not just speed.",
        metrics: ["90% Time Reduction", "10x Content Volume", "Zero Cognitive Load"],
      },
      engineer: {
        title: "ShortTok Sports: AI-Powered Moment Detection at Scale",
        description: "Built AI-powered moment detection on live streams with 85% accuracy. Integrated with sports venue APIs to auto-extract clips while keeping human-in-the-loop for tagging.",
        metrics: ["85% AI Accuracy", "Real-Time Processing", "99.2% Uptime"],
      },
      investor: {
        title: "ShortTok Sports: First-Mover Advantage in AI Sports Clipping",
        description: "Created 6-month competitive lead in college sports market. First-mover advantage in AI sports clipping positioned us as category leader.",
        metrics: ["6-Month Competitive Lead", "Category Leadership"],
      },
    },
  },
  {
    id: "globality-insights",
    title: "Glo Insights: Automating Fortune 500 Strategic Sourcing",
    company: "Globality",
    year: "2022",
    image: "https://www.globality.com/hubfs/Globality_FI_B_1600x900.jpg",
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
    title: "Identity Verification System for Fraud Prevention",
    company: "Visa",
    year: "2021",
    image: "https://s.wsj.net/public/resources/images/BN-XG830_3og3V_OR_20180201113258.jpg",
    description: "Designed a fraud prevention prototype that leveraged Visa's massive transaction dataset to flag risky accounts at creation time, giving merchants early warning before fraud occurred. The system was tested on 200K historical transactions and achieved 75% fraud detection accuracy, validating a novel approach to a $15B+ annual merchant fraud problem.",
    problem: "Merchants were losing billions to two types of fraud that Visa had limited tools to prevent: Card-Not-Present fraud (online transactions where the card isn't physically present—$10+ billion annual losses in the US alone, 70%+ of all card fraud) and Account Takeover fraud (fraudsters taking over legitimate customer accounts—28% growth in 2024). The gap: Visa had tools to detect fraud during transactions, but no tools to prevent fraud at account creation—fraudsters could create accounts, establish fake history, then commit large-scale fraud. Merchants couldn't see the pattern until it was too late—they only saw their own data, not the cross-merchant behavior.",
    approach: "Partnered with merchants to share account creation data, cross-referenced against Visa's transaction history, and identified high-risk patterns invisible to individual merchants. The system worked in 5 steps: (1) Merchant shares new account creation events via API, (2) Visa cross-references against transaction history, device fingerprinting, and behavioral patterns, (3) System generates risk profile (High/Medium/Low), (4) Merchant receives real-time risk flag via API, (5) Chargeback protection if merchant follows recommendations. Led team of 4 PMs, collaborated with 6 engineers and 2 data scientists, worked with legal for 3+ months to establish GDPR/CCPA-compliant data sharing framework.",
    impact: "• Achieved 75% fraud detection accuracy in controlled testing (200K transaction dataset), compared to 0% baseline—proved concept was technically viable with real data.\n• Validated product-market fit: 10 merchants (e-commerce platforms, delivery services, online retailers) expressed strong interest in beta participation, with feedback 'This would be game-changing for our fraud prevention.'\n• Filed work patent for novel identity verification methodology—first system to detect fraud at account creation using cross-merchant transaction patterns.\n• Established legal framework for data sharing that balanced fraud prevention with privacy protection, creating template for future Visa products.\n• Addressed $15B+ annual merchant fraud problem (projected impact if deployed at scale).",
    fullStory: "At Visa, I realized we were sitting on the world's most valuable fraud-fighting asset: cross-merchant visibility. While merchants were struggling to identify 'good' vs 'bad' users based on limited local history, I saw an opportunity to use our global network data as a defensive moat.\n\nI led the design of an identity verification system that analyzed velocity and pattern anomalies across the entire Visa network. For the first time, we could tell a merchant, 'This user looks new to you, but they've exhibited high-risk behavior across 5 other platforms today.'\n\nThe innovation was catching fraud at account creation instead of at transaction time. That's prevention, not just detection. And only Visa could do it because we're the only ones who see transaction patterns across all merchants.\n\nValidating this against 200K transactions proved that predictive fraud prevention isn't just possible, it's highly accurate. We achieved 75% fraud detection accuracy, secured interest from 10 merchants, and filed a patent. The project was handed off to the fraud prevention team with complete technical design, legal framework, and merchant pipeline—ready for engineering build and pilot deployment.",
    metrics: ["75% Fraud Detection Accuracy", "$15B+ Potential Annual Impact", "200K Transaction Dataset", "10 Merchant Beta Pipeline", "Patent Filed"],
    industry: ["fintech", "security", "enterprise"],
    category: "featured-work",
    teamSize: "13 (4 PMs, 6 engineers, 2 data scientists, plus legal/compliance/risk teams)",
    budget: "$15B+ potential annual impact for global merchant ecosystem",
    stakeholders: ["VP Product", "Director of Product", "Head of Security", "Engineering Director", "Legal/Compliance", "Risk/Fraud Teams", "Merchant Partnerships", "C-suite"],
    personaContent: {
      investor: {
        description: "Validated $15B+ TAM through 10 merchant pilots and 75% accuracy proof-of-concept. Filed patent for cross-merchant fraud detection—unique to Visa's network visibility. Established legal framework that enabled future fraud prevention products to move faster.",
        metrics: ["$15B+ TAM Validated", "Patent Filed", "10 Merchant Pilots", "Legal Framework Established"],
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
    id: "shorttok-productivity",
    title: "The Meeting Killer: Automating Developer Velocity",
    company: "ShortTok",
    year: "2025",
    image: "/assets/9837494.jpg",
    description: "Reclaimed 6 hours per engineer/week by automating workflows. Built a pipeline with Cursor into $246K of recovered engineering value (1,400x ROI).",
    problem: "The engineering team was suffering from process debt. Engineers were losing 8+ hours per week to redundant status updates across JIRA, Confluence, meetings and Slack. This fragmentation created a constant context-switching tax that killed deep work and left leadership with stale information.",
    approach: "Audited the SDLC (Software Development Life Cycle) to identify redundant touchpoints. I discovered that 75% of status reporting was simply manual data mirroring, copying GitHub PR status into JIRA and Slack. I used Cursor to build custom middleware and AI automations that synced GitHub commits directly to JIRA tickets and auto-generated Slack summaries for leadership. This created a 'Single Source of Truth' that updated in real-time without human intervention.",
    impact: "• Reclaimed 6 hours per engineer per week by automating status updates across GitHub, JIRA, and Slack with AI-powered middleware.\n• Eliminated 75% of status meetings by creating a real-time sync engine that auto-updates tickets from commit activity.\n• Generated $246K in annual recovered engineering value from simple integrations across the tools we use.",
    fullStory: "When I arrived at ShortTok, I saw a high-performance team being slowed down by low-value administration. Engineers aren't paid to update JIRA; they're paid to ship code. I realized that the best way to improve velocity wasn't to 'manage' better, it was to automate the management away. \n\nI used Cursor to build an automation layer that connected our stack. By making automating JIRA tickets to self-update based on GitHub activity, I removed the burden of reporting from the engineers. Leadership now sees progress in real-time, and engineers get back nearly an entire day of focus time every week.",
    metrics: ["1,400x ROI", "$246K Recovered Value", "6hrs Reclaimed/Week"],
    industry: ["enterprise", "startups", "ai-ml", "productivity"],
    category: "featured-work",
    teamSize: "9 (8 engineers, 1 PM)",
    budget: "$246K annual recovered value from $480 investment",
    stakeholders: ["CEO", "CTO", "Engineering Director", "Engineering Leads"],
    personaContent: {
      founder: {
        description: "Extended runway 2-3 months by creating $700K+ value from $480/year investment. Enabled 3x operational scale without headcount increase.",
        metrics: ["$700K+ Annual Value", "2-3 Month Runway Extension", "3x Scale Without Headcount"],
      },
      engineer: {
        description: "Built custom middleware connecting GitHub → JIRA → Slack using Cursor. Automated test suite covered 85% of critical paths using frame comparison for video QA.",
        metrics: ["Custom Middleware", "85% Test Coverage", "Real-Time Sync"],
      },
      "product-leader": {
        description: "Reclaimed 6 hours/engineer/week across 12-person team. Freed leadership from status gathering, enabling CEO to conduct 25+ investor meetings.",
        metrics: ["6hrs/Engineer/Week", "12-Person Team Impact", "25+ Investor Meetings Enabled"],
      },
      designer: {
        description: "Eliminated 75% of status meetings by removing the 'manual data mirroring' tax. Engineers got back nearly an entire day of focus time weekly.",
        metrics: ["75% Meeting Reduction", "1 Day Focus Time/Week", "Zero Manual Data Entry"],
      },
    },
  },
  {
    id: "shorttok-qa",
    title: "Automated QA System: Preventing $300K+ in Production Bugs",
    company: "ShortTok",
    year: "2025",
    image: "/assets/q&a.jpg",
    description: "Built an automated QA pipeline that reduced manual testing by 80% and caught 90% of bugs pre-production. Generated $308K-408K in annual value by reducing manual QA work by 80% across the organization.",
    problem: "Manual QA for video features was consuming 15-20 hours per week across the team. Engineers manually tested video encoding, format compatibility, export quality, and platform integrations after every release, slowing deployment velocity and introducing human error.",
    approach: "Mapped the complete manual QA process and identified 85% of test cases that could be automated. Partnered with engineering to build an automated test suite using Cursor and GitHub Actions that ran smoke tests on every pull request, validated video output quality using frame comparison, and tested export workflows end-to-end.",
    impact: "• Reduced manual QA by 80% (15-20 hrs/week to 3-5 hrs/week) by automating video processing, format compatibility, and export workflow validation.\n • Caught 90% of regressions before production deployment (vs. 60% with manual testing), preventing an estimated $200K-300K annually in production bug costs.\n • Increased automated test coverage from 0% to 85% of critical user paths, enabling team to support 3 simultaneous partner deployments without adding QA headcount.",
    fullStory: "At ShortTok, I realized that manual QA was becoming a bottleneck as we scaled. With live sports and other partners depending on our platform for real-time story generation, we couldn't afford production bugs. I designed an automated QA pipeline that validated video processing, codec support, and export workflows across multiple platforms.\n\nBy building this with Cursor as part of the same $40/month investment that powered our productivity tools, we created a comprehensive quality system without adding headcount. The result wasn't just faster testing, it was revenue protection and establishing trust with our customers that they will get a quality product. Preventing bugs in a live environment where partners were generating stories during games protected our $340K+ in revenue and pipeline.",
    metrics: ["80% QA Automation", "$308K-408K Annual Value", "90% Pre-Production Bug Detection"],
    industry: ["enterprise", "startups", "ai-ml", "media"],
    category: "featured-work",
    teamSize: "9 (8 engineers, 1 PM)",
    budget: "$308K-408K annual value from $40/month investment",
    stakeholders: ["CEO", "CTO", "Engineering Director", "Engineering Leads"],
    personaContent: {
      founder: {
        description: "Extended runway 2-3 months by creating $700K+ value from $480/year investment. Enabled 3x operational scale without headcount increase.",
        metrics: ["$700K+ Annual Value", "2-3 Month Runway Extension", "3x Scale Without Headcount"],
      },
      engineer: {
        description: "Built automated test suite using Cursor and GitHub Actions. Automated test suite covered 85% of critical paths using frame comparison for video QA.",
        metrics: ["85% Test Coverage", "CI/CD Integration", "Frame Comparison QA"],
      },
      "product-leader": {
        description: "Reclaimed 15-20 hours/week across team. Freed leadership from status gathering, enabling CEO to conduct 25+ investor meetings.",
        metrics: ["15-20hrs/Week Reclaimed", "90% Bug Prevention", "3x Deployment Capacity"],
      },
      designer: {
        description: "Eliminated 80% of manual QA work by removing the 'repetitive testing' tax. Engineers got back focus time while maintaining quality.",
        metrics: ["80% QA Automation", "Zero Manual Testing", "Quality Maintained"],
      },
    },
  },
  {
    id: "visa-developer",
    title: "Visa Dev Portal: Accelerating the API Onboarding Funnel",
    company: "Visa",
    year: "2020",
    image: "/assets/20945230.jpg",
    description: "Automated the API access workflow, reducing manual processing time by 70%. Saved $130K annually and enabled 2X faster developer onboarding by integrating the sales pipeline with the developer portal.",
    problem: "Slow onboarding created friction at the top of the sales funnel. PMs spent 10-20 hours manually verifying each of the 1,000+ monthly API requests, forcing developers to wait weeks for access. The core bottleneck: treating a low-risk, known customer with the same rigor as an edge case.",
    approach: "Shadowed PMs to identify the 80/20 rule: 80% of requests were simple, 20% were edge cases. I built a tiered verification system that integrated Salesforce (our sales system) and account management tools. The logic auto-approved known contacts for immediate access while routing high-risk requests for manual review. We sped up the 80% without compromising security on the 20%.",
    impact: "• Reduced PM processing time by 70% (10 hours to 3 hours) by building tiered verification that auto-approved 80% of low-risk requests.\n• Reclaimed 1,000+ hours monthly by integrating Salesforce with internal systems to create a real-time single source of truth.\n• Accelerated developer onboarding by 2x and saved $130K annually by eliminating manual verification for known customers.",
    fullStory: "At Visa, I saw a critical business problem masquerading as a process issue. The friction in developer onboarding was costing us time, money, and developer goodwill. By shadowing PMs, I realized we had the data to be fast and secure simultaneously, we just weren't using it.\n\nI championed an automated workflow that essentially made low-risk requests disappear from a PM's inbox. This freed up my colleagues to focus on strategic work and complex edge cases, while high-value customers got instant access. The result wasn't just $130K in savings; it was a fundamental shift in how Visa approached the developer experience. Faster, smarter, and more human-centered.",
    metrics: ["70% Time Reduction", "$130K Saved Annually", "2X Faster Dev Onboarding"],
    industry: ["fintech", "enterprise", "developer-experience"],
    category: "featured-work",
    teamSize: "5 (3 engineers, 1 PMs)",
    budget: "$130K annual savings",
    stakeholders: ["VP Product", "Engineering Director", "Director of Product"],
  },
  {
    id: "artifactlabs-museum",
    title: "Artifact Labs: The Blockchain Licensing Engine",
    company: "Artifact Labs",
    year: "2023",
    image: "/assets/36748616061539.jpg",
    description: "Generated $680K in new contracts in 3 months by building a Web3 licensing platform. Reduced the museum licensing cycle from 4 weeks to 48 hours, increasing customers' licensing revenue by 35%.",
    problem: "Museums managed high-value digital asset licensing through fragmented 4-6 week email chains. This workflow drag meant museums were leaving money and cultural exposure on the table, unable to monetize their archives efficiently.",
    approach: "Designed a two-sided marketplace (Museum Admin Portal + Publisher Marketplace) that created a single, frictionless flow for discovery, rights negotiation, payment, and file delivery. Strategically chose Polygon over expensive Layer 1 solutions, cutting transaction costs by 95% ($20-$50 to $0.50-$2.00 per license) to ensure commercial viability.",
    impact: "• Reduced licensing turnaround time by 90% (4-6 weeks to 48 hours) by building a two-sided marketplace with automated rights negotiation.\n• Processed 150+ licenses in a 3-month beta by cutting blockchain transaction costs by 95% using Polygon instead of Layer 1 solutions.\n• Generated $680K in contracts from 4 major museums by delivering enterprise-level cost efficiency with provable blockchain authenticity. \n• Increased museum licensing revenue by 35% on average through improved efficiency (M+ projected $150K additional annual revenue, Titanic Exhibition projected $80K)",
    fullStory: "I led this project from zero to one, tackling the inefficiency of old-world cultural institutions with new-world technology. By interviewing curators and publishers, I realized blockchain wasn't just a gimmick here; it was necessary for provable authenticity and automated payments. The challenge was making it cost-effective for enterprise use cases.\n\nWe shipped the MVP in 6 weeks. The result wasn't just a platform; it was a new revenue stream for museums. Seeing a 90% reduction in turnaround time was proof that human-centered design applied to complex tech can create immediate, quantifiable financial success, which generated $680K in contracts in just three months.",
    metrics: ["$680K Contracts", "90% Time Reduction", "35% Licensing Revenue Increase for customers"],
    industry: ["enterprise", "web3", "blockchain", "media"],
    category: "featured-work",
    teamSize: "5 (3 engineers, 1 designer, 1 PM)",
    budget: "$680K in contracts generated across 3-month initiative",
    stakeholders: ["CEO", "CTO", "Head of Partnerships"],
  },
  {
    id: "meed-receipt-scanning",
    title: "Meed: Solving Adoption via Digital Loyalty",
    company: "Meed Loyalty",
    year: "2024",
    image: "https://static.wixstatic.com/media/62e80a_22e5f68e11e54c9a9f06e730df4bc939~mv2.png/v1/fill/w_934,h_1172,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Scan%20Reciept%20-%20Scan%20by%20meed%20(1).png",
    link: "https://www.meedloyalty.com/features-scan",
    description: "Achieved 78% user adoption, nearly 4X the original target, by automating receipt capture. Transformed a high-friction manual process into a 15-second digital experience, driving a 15X increase in active users.",
    problem: "The loyalty program was failing because it ignored the kitchen rush. The original system required 2-3 minutes of manual input and staff verification. On-site observation revealed that during peak service, staff were too overwhelmed to manage loyalty, resulting in only 20 active users per restaurant.",
    approach: "Conducted in person research by shadowing restaurant staff during peak lunch hours in Hong Kong. I identified that the true friction was staff cognitive load, especially during dining rush hours. I pivoted the product strategy to a customer-led model using OCR (Optical Character Recognition) technology. This allowed customers to scan receipts and earn points in 10 seconds with zero staff intervention, removing the bottleneck entirely.",
    impact: "• Reduced customer transaction time by 92% (3 minutes to 15 seconds) by building an OCR receipt scanning system that eliminated staff verification.\n• Achieved 78.4% adoption (4x the 20% target) by removing staff cognitive load during peak service hours.\n• Grew active users by 15x (20 to 300+ per location) by enabling online loyalty point redemption, unlocking $25.8K in new ARR.",
    fullStory: "At Meed, I learned that a product is only as good as its worst user environment. By spending time in busy HK and Singapore restaurants, I saw that the best technology in the world wouldn't work if it required an overwhelmed waiter to press a button. \n\nI led the pivot to an OCR-based system that empowered the customer while protecting the staff's workflow. We shipped the feature in 30 days. The result was a 15X jump in active users and a product that became our primary sales differentiator.",
    metrics: ["78.4% Adoption Rate", "15X Active User Growth", "$25.8K New ARR"],
    industry: ["startups", "fintech", "loyalty"],
    category: "featured-work",
    teamSize: "3 (2 engineers, 1 PM)",
    budget: "$25.8K new ARR generated",
    stakeholders: ["CEO", "Head of Product", "Engineering Lead"],
  },
  {
    id: "starterspath-tenant-passport",
    title: "Tenant Passport: Solving the Rental 'Portability' Problem",
    company: "Starter's Path",
    year: "2018",
    image: "/assets/21729.jpg",
    description: "Accelerated the rental approval cycle by 40% (10 days to 2 days) by engineering a portable digital identity. Validated a $432K pipeline from 5 major property management firms through a high-trust verification network.",
    problem: "The rental market suffered from verification paralysis. Every new application forced tenants to re-collect sensitive documents and property managers to manually re-verify the same data from scratch. This redundant, 14-day cycle created massive friction and increased vacancy risks for landlords.",
    approach: "I interviewed 30+ stakeholders to identify that the root cause was the lack of a single source of truth. I designed a digital Tenant Passport where documents are uploaded once and verified by previous landlords. By adding a landlord-rating system, I created a virtuous cycle: every completed lease increased the tenant's trust score, making the next approval nearly instantaneous.",
    impact: "• Reduced rental application time by 40% (10-14 days to 2-4 days) by engineering a portable digital identity with landlord verification.\n• Eliminated repetitive document collection by creating a network effect where tenant trust scores improve with each completed lease.\n• Generated $432K in pipeline interest from 5 property management companies by proving portable tenant profiles solve real pain points.",
    fullStory: "At Starter's Path, we built the product for an organization called BuildingChat. I saw an industry where the lack of data portability was hurting everyone. Tenants were frustrated by repetitive paperwork, and landlords were losing money to long vacancy windows. I realized the solution wasn't just a better form, it was a better network.\n\nI led the design of the Tenant Passport to act as a 'Digital Resume' for renters. By moving the verification burden from the landlord to the system, we eliminated the most time-consuming part of the process.",
    metrics: ["40% Faster Approvals", "$432K Pipeline Interest", "1-Click Applications"],
    industry: ["startups", "proptech", "marketplace"],
    category: "featured-work",
    teamSize: "3 (2 engineers, 1 PM)",
    budget: "$432K pipeline validated across 5 property management firms",
    stakeholders: ["CEO", "Engineering Lead"],
  },
  {
    id: "starterspath-rfid-inventory",
    title: "Liquid Assets: Real-Time RFID Inventory Tracking",
    company: "Starter's Path",
    year: "2018",
    image: "/assets/NA_SEP._29.jpg",
    description: "Engineered a first-of-its-kind RFID liquid-tracking system that gave restaurant owners real-time visibility into $40K/month in shrinkage. Reduced manual labor by 24% and identified a $240K/year savings opportunity.",
    problem: "A multi-unit restaurant group was bleeding ~$40K/month across 4 locations due to 'invisible' inventory loss. Manual counts took 3 hours per day, were frequently falsified or skipped, and couldn't distinguish between heavy-handed pouring, accidental waste, or intentional theft.",
    approach: "Shifted the strategy from 'Reporting' to 'Prevention.' After observing bar operations, I identified that the 24-hour lag in manual counts made accountability impossible. I adapted medical-grade RFID technology (originally for liquid sensing in diapers) to liquor bottles. I architected a system that synced bottle-weight changes with POS transactions in real-time, moving the source of truth from a clipboard to a live dashboard that flagged discrepancies the moment a drink was poured.",
    impact: "• Automated 80+ hours of monthly manual labor by replacing 3-hour daily counts with instant, real-time RFID tracking.\n• Recovered $480K in annual leakage by engineering a real-time sync between physical inventory and POS sales data.\n• Eliminated 100% of 'Shadow Waste' through a hardware-software correlation engine that flagged discrepancies the moment they occurred.",
    fullStory: "At Starter's Path, I tackled a classic leaky bucket problem in the hospitality industry. The owner knew they were losing money but lacked the data to act. By bringing in liquid-sensing RFID technology, I turned every bottle into a smart device. \n\nI integrated this hardware with the restaurant's POS system so that if a bartender poured 2oz of Scotch but only rang up 1oz, the owner was alerted instantly. This transformed inventory from a dreaded end-of-day chore into a background process.",
    metrics: ["$40K/Mo Visibility", "24% Labor Reduction", "Real-Time Loss Detection"],
    industry: ["startups", "iot", "hospitality"],
    category: "featured-work",
    teamSize: "9 (6 engineers, 1 project manager, 1 hardware specialist, 1 PM)",
    budget: "$240K annual savings opportunity identified",
    stakeholders: ["Restaurant Owner", "Engineering Lead"],
  },
  {
    id: "productbot-okrs",
    title: "Scaling Leadership: Operationalizing a $260K ARR Beta",
    company: "Productbot AI",
    year: "2025",
    image: "/assets/20943804.jpg",
    description: "Designed a decision-making framework that reduced CEO product-dependency by 90%, accelerating beta delivery by 6 weeks and enabling the leadership team to focus on a $130K–$260K ARR pipeline and seed fundraising.",
    problem: "Productbot was trapped in 'Founder Bottleneck.' With only one engineer and no prioritization framework, the CEO was spending 5 hours/day on micro-level product decisions. This lack of autonomy delayed the beta launch and prevented the CEO from focusing on the high-leverage activities needed for seed funding: investor relations and customer development.",
    approach: "Diagnosed the root cause as a lack of decision guardrails. I introduced a high-velocity OKR framework paired with RICE prioritization to decentralize decision-making. We evaluated the backlog against three high-stakes pillars: beta-customer revenue ($65K+ per segment), technical feasibility for a solo engineer, and fundraising narrative. By establishing these no-go zones, we successfully pruned 40% of the backlog, empowering the engineering team to execute without constant CEO intervention.",
    impact: "• Reclaimed 90% of CEO time (4-5 hours/day to 2-3 hours/week) by implementing OKRs and RICE prioritization frameworks.\n• Shipped beta in 10 weeks (vs 16-week estimate) by implementing OKRs and enabling the engineering team to make autonomous decisions without CEO intervention.\n• Enabled 25+ investor meetings and created a $130K-260K ARR pipeline by freeing CEO bandwidth for fundraising activities.",
    fullStory: "At Productbot AI, I realized that for an early-stage startup, speed isn't just about coding, it's about the speed of decision-making. The CEO was the single point of failure for every feature. I implemented a system that replaced gut feel with a data-driven RICE score, aligning the product roadmap directly with seed-round milestones.\n\nBy defining what we weren't building, I gave the engineer the clarity to ship 6 weeks ahead of schedule. This transformed the company from a chaotic feature factory into a focused venture-ready startup.",
    metrics: ["90% CEO Time Reclaimed", "6-Week Beta Acceleration", "$260K ARR Pipeline"],
    industry: ["startups", "ai-ml", "productivity"],
    category: "featured-work",
    teamSize: "2 (1 engineer, 1 PM)",
    budget: "$130K-260K ARR pipeline",
    stakeholders: ["CEO", "CTO", "Head of Product"],
  },
  {
    id: "productbot-dashboard",
    title: "AI Feedback Engine: From Manual Analysis to $260K ARR",
    company: "Productbot AI",
    year: "2025",
    image: "https://productbot.ai/wp-content/uploads/2024/12/Problem-Discovery-Productbot-V2.svg",
    description: "Shipped an AI-powered insights dashboard that converted 100% of beta users and validated a $260K ARR pipeline. Reduced manual analysis time by 65% and engineered a human-in-the-loop system that boosted AI accuracy to a market-leading 85%.",
    problem: "B2B Product Managers were drowning in feedback-debt, spending 8–12 hours/week manually triaging data across Intercom, Zendesk, and Slack. Existing tools lacked the accuracy (hovering at ~70%) to be trusted for roadmap decisions, leading to analysis paralysis and fragmented product strategies.",
    approach: "Identified that tool fragmentation was the root cause of friction, not just the volume of data. I prioritized a workflow-first strategy, building deep integrations to reduce tab-switching by 90%. To solve the trust gap, I designed a human-in-the-loop tagging system that turned manual user corrections into training data. This strategic move raised AI accuracy from 70% to 85%, creating a defensible data moat against established competitors like Dovetail and Productboard.",
    impact: "• Reduced feedback analysis time by 65% (8 hours to 3 hours per week) by building integrations that eliminated tab-switching across Intercom, Zendesk, and Slack.\n• Improved AI accuracy from 70% to 85% by designing a human-in-the-loop tagging system that turned user corrections into training data.\n• Achieved 100% daily active usage and 8.5 Net Promoter Score (NPS) by validating $450/mo/seat pricing with 3.6x ROI and 3.5-month payback period.",
    fullStory: "At Productbot AI, I led the product discovery and execution for our core feedback engine. After interviewing 8 PMs, I realized they didn't need more charts; they needed confidence in their data. By building a dashboard that ranked feature requests by an 'AI-calculated Impact Score,' we gave teams a way to justify their roadmap to stakeholders with hard evidence. \n\nWe moved from PoC to a revenue-ready beta in just 16 weeks. The results were immediate: one customer reported that our tool replaced their entire manual Friday reporting cycle. By the end of the beta, we hadn't just built a feature; we had validated a business model that transformed customer feedback from a cost center into a $260K revenue pipeline.",
    metrics: ["65% Less Analysis Time", "85% AI Accuracy", "3.6x Customer ROI"],
    industry: ["startups", "ai-ml", "enterprise"],
    category: "featured-work",
    teamSize: "2 (1 engineer, 1 PM)",
    budget: "$260K ARR pipeline validated",
    stakeholders: ["CEO", "CTO", "Head of Product"],
    personaContent: {
      engineer: {
        description: "Improved AI accuracy from 70% to 85% through human-in-the-loop tagging system. Collected 2,000+ labeled data points from beta customers to create training data moat.",
        metrics: ["70% → 85% AI Accuracy", "2,000+ Labeled Data Points", "Training Data Moat"],
      },
      founder: {
        description: "Validated $450/mo/seat pricing with 3.6x ROI and 3.5-month payback period. Created $19.5K annual value per user by reducing manual work 65%.",
        metrics: ["$450/mo/seat Pricing", "3.6x ROI", "3.5-Month Payback"],
      },
    },
  },
  {
    id: "joystick-growth",
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
    title: "Phygital Scale: Immersive UX for MGM Macau",
    company: "Obscura Digital",
    year: "2017",
    image: "https://matthewragan.com/wp-content/uploads/2024/12/mgm-cotai-.jpg",
    link: "https://vimeo.com/268686672",
    description: "Orchestrated the product direction for a massive-scale interactive lobby installation at MGM Macau. Pioneered early WeChat mini-program integration to engage hundreds of thousands of users, bridging the gap between physical space and digital interaction.",
    problem: "MGM Macau needed to transform their physical lobby into a high-engagement 'Phygital' (physical + digital) destination. The technical challenge was to build a system that was creatively avant-garde yet robust enough to handle hundreds of thousands of concurrent users with zero latency, all within the constraints of an emerging WeChat ecosystem.",
    approach: "Evolved from Software Engineer to a hybrid product lead to bridge the communication gap between technical limitations and creative vision. I identified that the friction point wasn't the hardware, but the onboarding; I championed the use of WeChat mini-apps, to eliminate app-download friction. I led the cross-functional roadmap between engineering and visual design, ensuring that the multi-layered interactive elements remained intuitive for users of all ages and tech-literacy levels.",
    impact: "• Engaged hundreds of thousands of users by pioneering WeChat mini-app integration in a physical lobby installation.\n• Eliminated app-download friction by using WeChat's native ecosystem to create zero-friction onboarding for all guests.\n• Created a centerpiece installation for MGM Macau by successfully deploying large-scale physical-digital integration in a high-traffic environment.",
    fullStory: "At Obscura Digital, I learned that the most honest feedback comes from a user standing in front of a 10-foot screen. I moved from pure coding into a product-focused role because I realized that the success of the MGM project depended on the 'Why,' not just the 'How.' \n\nBy watching people interact with our work in real-time, I developed a 'no-hiding' approach to product development. If a user didn't understand the interface in 3 seconds, it was a failure, no matter how clean the code was. This experience in 'Emotional Engineering', designing for wonder while managing extreme technical constraints, remains the foundation of how I build software today: start with the human experience and work backward to the tech stack.",
    metrics: ["100K+ User Engagement", "WeChat Integrations", "Physical-Digital UX"],
    industry: ["media", "hospitality", "creative-tech"],
    category: "featured-work",
    teamSize: "15+ (8 engineers, 2 designers, 2 creative directors, 1 PM, 2 project managers)",
    budget: "Large-scale enterprise installation for MGM Macau",
    stakeholders: ["VP Creative", "Engineering Director", "MGM Macau Leadership", "C-suite"],
  },
];


// Map of which project IDs should be shown for each persona
// If a persona is not listed, it will show all projects (default behavior)
// Based on portfolio-structure.md persona priorities
const PERSONA_PROJECT_MAP: Record<string, string[]> = {
  default: [
    "shorttok-sports",
    "globality-insights",
    "productbot-dashboard",
    "visa-fraud",
    "meed-receipt-scanning",
  ],
  designer: [
    "globality-insights",
    "shorttok-sports",
    "visa-fraud",
  ],
  founder: [
    "shorttok-sports",
    "shorttok-productivity",
    "shorttok-qa",
    "productbot-okrs",
    "productbot-dashboard",
  ],
  investor: [
    "shorttok-sports",
    "shorttok-productivity",
    "globality-insights",
  ],
  recruiter: [
    "shorttok-sports",
    "globality-insights",
    "visa-fraud",
    "shorttok-productivity",
    "shorttok-qa",
    "productbot-dashboard",
  ],
  "product-leader": [
    "globality-insights",
    "shorttok-sports",
    "shorttok-productivity",
    "shorttok-qa",
    "visa-fraud",
    "productbot-dashboard",
  ],
  engineer: [
    "shorttok-productivity",
    "visa-developer",
    "shorttok-qa",
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
  const totalRevenue = "$1.3M+ in attributed revenue across 4 companies (2023-2025)";
  const totalValue = "$2M+ Revenue & Value Generated";
  const timeSavings = "85K+ Hours Saved Annually";
  const highestROI = "1,400x ROI Achieved";
  const userAdoption = "80% Enterprise Adoption Rate";
  const avgTimeReduction = "85% Average Time Reduction";
  const zeroToOneLaunches = "Multiple 0→1 Product Launches";
  const automationROI = "1,400x Automation ROI";
  const enterpriseImpact = "Fortune 500 Teams Impacted";
  const fraudAccuracy = "75% Fraud Detection Accuracy";
  const potentialImpact = "$15B+ Potential Impact";
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
        automationROI,
        zeroToOneLaunches,
        "8-Week Product Launches",
      ];

    case "investor":
      return [
        automationROI,
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
        automationROI,
        avgTimeReduction,
        "AI/ML Product Development",
        timeSavings,
      ];

    default:
      return [
        totalValue,
        timeSavings,
        highestROI,
      ];
  }
}

// Persona-based handshake system
export const personaHandshakes: PersonaMap = {
  designer: {
    headline: "PM. Builder. User Advocate.",
    greeting: "Hey there! I'm Jeff.",
    intro: "I build products in the field, not in Figma.",
    body: "I've shadowed users in restaurant kitchens, sports press boxes, and procurement offices—that's how I **reduced decision time by 97%** and **improved Net Promoter Score (NPS) by 800%**.",
    cta: "Want to build something users will love? Let's talk.",
    focus: "Empathy & Craft",
  },
  founder: {
    headline: "PM. Revenue-Driver. Creator.",
    greeting: "Hey there! I'm Jeff.",
    intro: "I build products that make money—fast.",
    body: "**$1.3M+ in attributed revenue across 4 companies (2023-2025)**, **$700K in annual value generated from a $40/month tool**, AI systems that became primary sales differentiators. I ship outcomes, not features.",
    cta: "Let's talk about what we could build together.",
    focus: "Speed, Revenue, & Capital Efficiency",
  },
  investor: {
    headline: "PM. Strategist. Builder.",
    greeting: "Hey there! I'm Jeff.",
    intro: "I build products that create defensible moats.",
    body: "In the last two years: I built automation processes with **1,400x ROI** that extended runway by 2-3 months, and shipped products that created 6-month competitive leads. I think in terms of unit economics, capital efficiency, and long-term defensibility—not just feature lists. Product strategy should directly map to business strategy.",
    cta: "Let's talk about what's possible.",
    focus: "Scalability & Strategic Lifecycle",
  },
  recruiter: {
    headline: "PM. Builder. Results-Driven.",
    greeting: "Hi there! I'm Jeff.",
    intro: "I've spent 7+ years building AI products at startups and enterprises.",
    body: "Most recently: **$1.3M+ in attributed revenue across 4 companies (2023-2025)**, **97% friction reduction at Globality (80% adoption)**, and **validated $15B TAM through merchant pilot program**. I'm looking for a company where product leadership shapes strategy—not just executes it.",
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
    body: "I've built AI products, **automated workflows with 1,400x ROI**, and shipped features you'll be proud of. I document edge cases, respect constraints, and never hand-wave feasibility.",
    cta: "Let's ship something great together.",
    focus: "Technical Partnership & Mutual Respect",
  },
  default: {
    headline: "PM. Builder. Creator.",
    greeting: "Hey there! I'm Jeff.",
    intro: "I build AI products that generate revenue, reduce friction, and scale.",
    body: "In the last two years: I shipped products **generating $1.3M+ in revenue** across 4 startups, built automation with **1,400x ROI**, and reduced user friction by **97%**. I've worked at startups serving Fortune 500 enterprises, turning complex problems into simple solutions.",
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

