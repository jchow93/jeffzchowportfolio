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
  category?: "featured-project" | "featured-work"; // Distinguish between Featured Projects and Featured Work
}

export interface ContentMap {
  headline: string;
  subheadline: string;
  projects: string[];
  skills: string[];
  metrics: string[];
}

export interface PersonaHandshake {
  headline: string;
  subheadline: string;
  stats: string[];
  focus: string;
}

export interface PersonaMap {
  [key: string]: PersonaHandshake;
}

export const projects: Project[] = [
  // Featured Projects - Personal projects
  {
    id: "hoolie",
    title: "Hoolie: Eliminating 'Coordination Friction' in Social Discovery",
    company: "Hoolie",
    year: "2025 (In Progress / PoC Phase)",
    description: "Engineering an AI-assisted social aggregator to bridge the gap between seeing an event on Instagram and actually showing up. Using a 'Build-to-Learn' approach to validate user intent in under 30 days.",
    problem: "Event discovery is fragmented and 'leaky.' Users screenshot events on social media, but coordination dies in the group chat. There is no 'Single Source of Truth' for event intent, leading to a 70% drop-off between 'that looks cool' and 'I am going.'",
    approach: "Applied 'High-Velocity Development' via Cursor/AI to ship a full-stack Next.js UI in just 7 days. I prioritized the 'Core Loop' (Save → Interest → Status) over vanity features. Developed a PRD focused on 'Time-to-Coordination' as the primary success metric.",
    impact: "Reduced idea-to-functional-PoC time by 75% by shipping a full-stack Next.js UI in 7 days using AI-assisted development.\nBuilt a responsive, mobile-first experience with real-time status toggles by prioritizing the core event coordination loop over vanity features.\nValidated product-market fit hypothesis by launching to 50 users in Jan 2025 to test a 3+ saves/week engagement threshold.",
    fullStory: "Hoolie is a living lab for my product and technical skills. I’m solving a personal pain point: the frustration of losing event details in a sea of screenshots and dead-end group chats. \n\nI own the full lifecycle: from writing the PRD and defining the data schema to building the frontend with React, Next.js, and Tailwind. By leveraging AI-assisted development (Cursor), I bypassed the 'validation paralysis' that kills most startups, shipping a complete UI in one week. \n\nSuccess isn't 'launching'—it's learning. If my Jan 2025 PoC shows that users aren't saving at least 3 events weekly, I’ll pivot or sunset the project. This project demonstrates my ability to move from 'Problem' to 'Working Solution' at a speed that most PMs can't match.",
    metrics: ["7-Day UI Build", "Launch: Jan 2025", "AI-Assisted (Cursor)"],
    industry: ["consumer", "startups", "social media"],
    category: "featured-project",
  },
  {
    id: "portfolio-website",
    title: "The Dynamic Portfolio: A Study in Conversion UX",
    company: "Personal Portfolio",
    year: "2025",
    description: "Engineered a 'Morphic' portfolio that adapts content in real-time. By segmenting visitors into 6 professional personas, I increased messaging relevance and narrative clarity.",
    problem: "Static portfolios suffer from 'Generalist Dilution'—they try to speak to everyone and resonate with no one. Recruiters need qualifications; CEOs need revenue; Engineers need technical feasibility. A single page cannot effectively serve all three.",
    approach: "Built a 'Contextual Onboarding' engine that captures Role and Name. Mapped 8 distinct content schemas to persona triggers. If a 'Founder' visits, the site prioritizes Revenue metrics; if an 'Engineer' visits, it prioritizes System Architecture.",
    impact: "Created personalized content experiences for 6 distinct professional personas by building a dynamic content routing engine.\nEliminated static portfolio dilution by implementing real-time content adaptation based on visitor role and context.\nIncreased messaging relevance by mapping 8 distinct content schemas to persona triggers using Next.js and TypeScript.",
    fullStory: "This portfolio is a meta-project: a product that showcases product work. I realized that traditional portfolios suffer from 'Generalist Dilution'—they try to speak to everyone and resonate with no one. A recruiter needs to see qualifications and metrics; a CEO needs revenue impact; an engineer needs technical depth. A single static page cannot effectively serve all three.\n\nI built a 'Contextual Onboarding' engine that captures the visitor's role and name on first visit. Behind the scenes, I mapped 8 distinct content schemas to persona triggers. When a 'Founder' visits, the site prioritizes revenue metrics and 0→1 launches. When an 'Engineer' visits, it highlights system architecture and technical implementation. When a 'Recruiter' visits, it emphasizes qualifications and cross-industry experience.\n\nThis project demonstrates my core product philosophy: treat every touchpoint as a conversion funnel. By personalizing the experience from the first interaction, I've created a 'Digital Handshake' that adapts to each visitor's needs—proving that even personal branding can benefit from a product-first approach.",
    metrics: ["6 Dynamic Personas", "Zero Static Content", "Next.js + Tailwind"],
    industry: ["ux"],
    category: "featured-project",
  },
  // Featured Work - Professional projects
  {
    id: "shorttok-sports",
    title: "ShortTok Sports: Capturing Live Highlights in Real-Time",
    company: "ShortTok",
    year: "2025",
    description: "Shipped an AI-powered sports clipping platform in 8 weeks that reduced highlight creation time by 90%. Generated $100K in immediate revenue and accelerated sales cycles by 50%.",
    problem: "College sports programs were missing their 'viral window.' Manually clipping highlights during live games took 45+ minutes, meaning the moment was 'old news' before it was posted. The friction wasn't just speed—it was the cognitive load of SIDs trying to manage a live game while wrestling with editing software.",
    approach: "Conducted 'in-the-trenches' research by shadowing SIDs during live games. I identified that the solution wasn't just AI—it was workflow harmony. I designed a platform that automatically extracts clips from live streams but keeps the human in the loop for tagging and publishing. We prioritized 'Time-to-Social' as our primary KPI, shipping a V1 in just 8 weeks.",
    impact: "Reduced highlight turnaround time by 90% (45 minutes to <5 minutes) by deploying AI-powered moment detection on live streams.\nIncreased content volume by 10x by automating clip extraction while keeping human-in-the-loop for tagging and publishing.\nShortened sales cycles by 50% (6 months to 3 months) by delivering immediate ROI that opened a $240K pipeline.",
    fullStory: "As Founding PM, I transformed raw video tech into a market-ready sports product. By watching SIDs work, I realized they didn't need another complex editor; they needed a 'moment catcher.' I led the 8-week sprint to build a platform that fits into the chaotic environment of a live press box. This became ShortTok’s primary sales demo and second paying product, proving that solving for workflow friction is the fastest path to revenue.",
    metrics: ["$340K Total Pipeline", "90% Time Reduction", "8-Week GTM"],
    industry: ["media", "ai-ml", "startups"],
    category: "featured-work",
  },
  {
    id: "globality-insights",
    title: "Glo Insights: Automating Fortune 500 Strategic Sourcing",
    company: "Globality",
    year: "2022",
    description: "Reduced procurement decision time by 97% for global enterprises. Transformed a 10-hour manual document grind into a 20-minute automated insight dashboard.",
    problem: "Fortune 500 procurement teams were drowning in 'Document Debt.' Analysts spent 10+ hours per decision manually copying data from 100-page vendor proposals into spreadsheets. This manual friction delayed million-dollar contracts by weeks and reduced strategic sourcing to a game of data entry.",
    approach: "Shadowed analysts to pinpoint the 'Value Leak.' I discovered that 80% of their time was spent on repetitive extraction rather than negotiation or strategy. I designed an AI-powered dashboard that didn't just summarize text, but visualized cost breakdowns and compliance risks in the exact table formats they already used, ensuring the product felt like an extension of their existing expertise.",
    impact: "Reduced procurement decision time by 97% (10+ hours to <30 minutes) by automating document extraction from 100-page vendor proposals.\nAchieved 80% user adoption by designing an AI dashboard that visualized data in the exact table formats analysts already used.\nIncreased vendor processing capacity by 4x per cycle by eliminating manual data entry and enabling faster strategic analysis.",
    fullStory: "At Globality, I tackled a classic enterprise bottleneck: the gap between big data and actionable decisions. By observing procurement analysts in their natural environment, I realized they didn't need a new tool to learn—they needed their old spreadsheets to be automated. I led the development of 'Glo Insights' to bridge this gap. This dashboard didn't just save time; it changed the culture of the procurement department from 'gut-feel' data entry to high-speed strategic analysis. Seeing 80% of users adopt a tool that radically changed their 10-year-old workflow was the ultimate validation of my human-centered approach.",
    metrics: ["97% Time Reduction", "80% Adoption Rate", "Fortune 500 Scale"],
    industry: ["enterprise", "ai-ml", "procurement"],
    category: "featured-work",
  },
  {
    id: "visa-fraud",
    title: "Visa ID Verify: Predictive Fraud Detection at Scale",
    company: "Visa",
    year: "2021",
    description: "Architected a cross-merchant identity verification system with 75% predictive accuracy. Shipped a proactive defense model with a $15B potential annual impact for the global merchant ecosystem.",
    problem: "Merchants like DoorDash were fighting a losing battle against 'Account Takeover' fraud. Because individual merchants only see their own siloed data, they couldn't detect fraudulent intent until *after* the first transaction occurred. By then, the money was gone and the damage was done.",
    approach: "Leveraged Visa’s unique 'Network View' to bridge the information gap. I interviewed 10+ merchants to map fraud patterns and discovered that while they saw isolated users, I could see global anomalies (e.g., a single card opening 10 new merchant accounts in 60 seconds). I designed a system that flags high-risk account creation in real-time by analyzing these cross-merchant patterns—shifting the paradigm from reactive detection to proactive prevention.",
    impact: "Moved fraud detection to account creation by analyzing cross-merchant velocity patterns across the Visa network in real-time.\nAchieved 75% predictive accuracy by back-testing pattern analysis logic against 200K historical transactions.\nValidated a $15B market opportunity by securing beta interest from 10 major merchants and initiating patent application.",
    fullStory: "At Visa, I realized we were sitting on the world's most valuable fraud-fighting asset: cross-merchant visibility. While merchants were struggling to identify 'good' vs 'bad' users based on limited local history, I saw an opportunity to use our global network data as a defensive moat. \n\nI led the design of an identity verification system that analyzed velocity and pattern anomalies across the entire Visa network. For the first time, we could tell a merchant, 'This user looks new to you, but they've exhibited high-risk behavior across 5 other platforms today.' \n\nValidating this against 200K transactions proved that predictive fraud prevention isn't just possible—it's highly accurate. Initiating the patent application process and securing 10 beta partners was the final proof that even in a company as large as Visa, a 'Builder' mindset can create massive new product categories.",
    metrics: ["$15B Market Impact", "75% Predictive Accuracy", "Patent Application Initiated"],
    industry: ["fintech", "security", "enterprise"],
    category: "featured-work",
  },
  {
    id: "shorttok-productivity",
    title: "The Meeting Killer: Automating Developer Velocity",
    company: "ShortTok",
    year: "2025",
    description: "Reclaimed 6 hours per engineer/week by automating the 'Status Tax.' Converted a $480 tool investment into $246K of recovered engineering value (1,400x ROI).",
    problem: "The engineering team was suffering from 'Process Debt.' Engineers were losing 8+ hours per week to redundant status updates across JIRA, Confluence, and Slack. This fragmentation created a constant 'context-switching tax' that killed deep work and left leadership with stale, 24-hour-old data.",
    approach: "Audited the SDLC (Software Development Life Cycle) to identify redundant touchpoints. I discovered that 75% of status reporting was simply 'manual data mirroring'—copying GitHub PR status into JIRA and Slack. I used Cursor to build custom middleware and AI automations that synced GitHub commits directly to JIRA tickets and auto-generated Slack summaries for leadership. This created a 'Single Source of Truth' that updated in real-time without human intervention.",
    impact: "Reclaimed 6 hours per engineer per week by automating status updates across GitHub, JIRA, and Slack with AI-powered middleware.\nEliminated 75% of status meetings by creating a real-time sync engine that auto-updates tickets from commit activity.\nGenerated $246K in annual recovered engineering value from a $480 investment, achieving a 1,400x ROI.",
    fullStory: "When I arrived at ShortTok, I saw a high-performance team being slowed down by low-value administration. Engineers aren't paid to update JIRA; they're paid to ship code. I realized that the best way to improve velocity wasn't to 'manage' better—it was to automate the management away. \n\nI used Cursor to build an automation layer that connected our stack. By making JIRA tickets 'self-updating' based on GitHub activity, I removed the burden of reporting from the engineers. Leadership now sees progress in real-time, and engineers get back nearly an entire day of focus time every week. This wasn't just a 'tweak'—it was a cultural shift that proved my belief: the best product management is often the kind that removes itself from the way.",
    metrics: ["1,400x ROI", "$246K Recovered Value", "6hrs Reclaimed/Week"],
    industry: ["enterprise", "startups", "ai-ml", "productivity"],
    category: "featured-work",
  },
  {
    id: "shorttok-qa",
    title: "Automated QA System: Preventing $300K+ in Production Bugs",
    company: "ShortTok",
    year: "2025",
    description: "Built an automated QA pipeline that reduced manual testing by 80% and caught 90% of bugs pre-production. Generated $308K-408K in annual value from the same $40/month investment.",
    problem: "Manual QA for video features was consuming 15-20 hours per week across the team. Engineers manually tested video encoding, format compatibility, export quality, and platform integrations after every release—slowing deployment velocity and introducing human error.",
    approach: "Mapped the complete manual QA process and identified 85% of test cases that could be automated. Partnered with engineering to build an automated test suite using Cursor and GitHub Actions that ran smoke tests on every pull request, validated video output quality using frame comparison, and tested export workflows end-to-end.",
    impact: "Reduced manual QA by 80% (15-20 hrs/week to 3-5 hrs/week) by automating video processing, format compatibility, and export workflow validation.\nCaught 90% of regressions before production deployment (vs. 60% with manual testing), preventing an estimated $200K-300K annually in production bug costs.\nIncreased automated test coverage from 0% to 85% of critical user paths, enabling team to support 3 simultaneous partner deployments without adding QA headcount.",
    fullStory: "At ShortTok, I realized that manual QA was becoming a bottleneck as we scaled. With live sports partners depending on our platform for real-time story generation, we couldn't afford production bugs. I designed an automated QA pipeline that validated video processing, codec support, and export workflows across multiple platforms.\n\nBy building this with Cursor as part of the same $40/month investment that powered our productivity tools, we created a comprehensive quality system without adding headcount. The result wasn't just faster testing—it was revenue protection. Preventing bugs in a live environment where partners were generating stories during games protected our $340K+ in revenue and pipeline. This project proved that scrappy execution doesn't mean compromising on quality.",
    metrics: ["80% QA Automation", "$308K-408K Annual Value", "90% Pre-Production Bug Detection"],
    industry: ["enterprise", "startups", "ai-ml", "media"],
    category: "featured-work",
  },
  {
    id: "visa-developer",
    title: "Visa Dev Portal: Accelerating the API Onboarding Funnel",
    company: "Visa",
    year: "2020",
    description: "Automated the API access workflow, reducing manual processing time by 70%. Saved $130K annually and enabled 2X faster developer onboarding by integrating the sales pipeline with the developer portal.",
    problem: "Slow onboarding created friction at the top of the sales funnel. PMs spent 10-20 hours manually verifying each of the 1,000+ monthly API requests, forcing developers to wait weeks for access. The core bottleneck: treating a low-risk, known customer with the same rigor as an edge case.",
    approach: "Applied 'Workflow Harmony' principles. Shadowed PMs to identify the 80/20 rule: 80% of requests were simple, 20% were edge cases. I built a 'Tiered Verification' system that integrated Salesforce (our sales system) and account management tools. The logic auto-approved known contacts for immediate access while routing high-risk requests for manual review. We sped up the 80% without compromising security on the 20%.",
    impact: "Reduced PM processing time by 70% (10 hours to 3 hours) by building tiered verification that auto-approved 80% of low-risk requests.\nReclaimed 1,000+ hours monthly by integrating Salesforce with internal systems to create a real-time single source of truth.\nAccelerated developer onboarding by 2x and saved $130K annually by eliminating manual verification for known customers.",
    fullStory: "At Visa, I saw a critical business problem masquerading as a 'process issue.' The friction in developer onboarding was costing us time, money, and developer goodwill. By shadowing PMs, I realized we had the data to be fast and secure simultaneously—we just weren't using it.\n\nI championed an automated workflow that essentially made low-risk requests disappear from a PM's inbox. This freed up my colleagues to focus on strategic work and complex edge cases, while high-value customers got instant access. The result wasn't just $130K in savings; it was a fundamental shift in how Visa approached the developer experience—faster, smarter, and more human-centered.",
    metrics: ["70% Time Reduction", "$130K Saved Annually", "2X Faster Dev Onboarding"],
    industry: ["fintech", "enterprise", "developer-experience"],
    category: "featured-work",
  },
  {
    id: "artifactlabs-museum",
    title: "Artifact Labs: The Blockchain Licensing Engine",
    company: "Artifact Labs",
    year: "2023",
    description: "Generated $680K in new contracts in 3 months by building a Web3 licensing platform. Reduced the museum licensing cycle from 4 weeks to 48 hours, increasing revenue by 35%.",
    problem: "Museums managed high-value digital asset licensing through fragmented 4-6 week email chains. This 'Workflow Drag' meant museums were leaving money and cultural exposure on the table, unable to monetize their archives efficiently.",
    approach: "Applied 'Workflow Harmony' principles to the B2B licensing space. Designed a two-sided marketplace (Museum Admin Portal + Publisher Marketplace) that created a single, frictionless flow for discovery, rights negotiation, payment, and file delivery. Strategically chose Polygon over expensive Layer 1 solutions, cutting transaction costs by 95% ($20-$50 to $0.50-$2.00 per license) to ensure commercial viability.",
    impact: "Reduced licensing turnaround time by 90% (4-6 weeks to 48 hours) by building a two-sided marketplace with automated rights negotiation.\nProcessed 150+ licenses in a 3-month beta by cutting blockchain transaction costs by 95% using Polygon instead of Layer 1 solutions.\nGenerated $680K in contracts from 4 major museums by delivering enterprise-level cost efficiency with provable blockchain authenticity.",
    fullStory: "I led this project from zero to one, tackling the inefficiency of old-world cultural institutions with new-world technology. By interviewing curators and publishers, I realized blockchain wasn't just a gimmick here; it was necessary for provable authenticity and automated payments. The challenge was making it cost-effective for enterprise use cases.\n\nWe shipped the MVP in 6 weeks. The result wasn't just a platform; it was a new revenue stream for museums. Seeing a 90% reduction in turnaround time was proof that human-centered design applied to complex tech can create immediate, quantifiable financial success—generating $680K in contracts in just three months.",
    metrics: ["$680K Contracts", "90% Time Reduction", "35% Revenue Increase"],
    industry: ["enterprise", "web3", "blockchain", "media"],
    category: "featured-work",
  },
  {
    id: "meed-receipt-scanning",
    title: "Meed: Solving Adoption via 'Zero-Touch' Loyalty",
    company: "Meed Loyalty",
    year: "2024",
    description: "Achieved 78% user adoption—nearly 4X the original target—by automating receipt capture. Transformed a high-friction manual process into a 15-second 'Zero-Touch' experience, driving a 15X increase in active users.",
    problem: "The loyalty program was failing because it ignored the 'Kitchen Rush.' The original system required 2-3 minutes of manual input and staff verification. On-site observation revealed that during peak service, staff were too overwhelmed to manage loyalty, resulting in only 20 active users per restaurant.",
    approach: "Conducted 'In-the-Trenches' research by shadowing restaurant staff during peak lunch hours in Hong Kong. I identified that the true friction was 'Staff Cognitive Load.' I pivoted the product strategy to a 'Customer-Led' model using OCR (Optical Character Recognition) technology. This allowed customers to scan receipts and earn points in 10 seconds with zero staff intervention, removing the bottleneck entirely.",
    impact: "Reduced customer transaction time by 92% (3 minutes to 15 seconds) by building an OCR receipt scanning system that eliminated staff verification.\nAchieved 78.4% adoption (4x the 20% target) by removing staff cognitive load during peak service hours.\nGrew active users by 15x (20 to 300+ per location) by enabling zero-touch loyalty point redemption, unlocking $25.8K in new ARR.",
    fullStory: "At Meed, I learned that a product is only as good as its worst user environment. By spending time in busy HK and Singapore restaurants, I saw that the best technology in the world wouldn't work if it required an overwhelmed waiter to press a button. \n\nI led the pivot to an OCR-based system that empowered the customer while protecting the staff's workflow. We shipped the feature in 30 days. The result was a 15X jump in active users and a product that became our primary sales differentiator. It proved my core belief: the best products don't just add features; they remove human friction.",
    metrics: ["78.4% Adoption Rate", "15X Active User Growth", "$25.8K New ARR"],
    industry: ["startups", "fintech", "loyalty"],
    category: "featured-work",
  },
  {
    id: "starterspath-tenant-passport",
    title: "Tenant Passport: Solving the Rental 'Portability' Problem",
    company: "Starter's Path",
    year: "2018",
    description: "Accelerated the rental approval cycle by 40% (10 days to 2 days) by engineering a portable digital identity. Validated a $432K pipeline from 5 major property management firms through a high-trust verification network.",
    problem: "The rental market suffered from 'Verification Paralysis.' Every new application forced tenants to re-collect sensitive documents and property managers to manually re-verify the same data from scratch. This redundant, 14-day cycle created massive friction and increased vacancy risks for landlords.",
    approach: "Applied 'Network Effect' strategy to solve the trust gap. I interviewed 30+ stakeholders to identify that the root cause was the lack of a 'Single Source of Truth.' I designed a portable Tenant Passport where documents are uploaded once and verified by previous landlords. By adding a landlord-rating system, I created a virtuous cycle: every completed lease increased the tenant's 'Trust Score,' making the next approval nearly instantaneous.",
    impact: "Reduced rental application time by 40% (10-14 days to 2-4 days) by engineering a portable digital identity with landlord verification.\nEliminated repetitive document collection by creating a network effect where tenant trust scores improve with each completed lease.\nGenerated $432K in pipeline interest from 5 property management companies by proving portable tenant profiles solve real pain points.",
    fullStory: "At Starter's Path, I saw an industry where the lack of data portability was hurting everyone. Tenants were frustrated by repetitive paperwork, and landlords were losing money to long vacancy windows. I realized the solution wasn't just a better form—it was a better network.\n\nI led the design of the Tenant Passport to act as a 'Digital Resume' for renters. By moving the verification burden from the landlord to the system, we eliminated the most time-consuming part of the process. This project taught me that the best products don't just solve a task; they create a standard. Reducing a 10-day headache to a 48-hour click was the ultimate proof that human-centered identity systems can revolutionize legacy industries.",
    metrics: ["40% Faster Approvals", "$432K Pipeline Interest", "1-Click Applications"],
    industry: ["startups", "proptech", "marketplace"],
    category: "featured-work",
  },
  {
    id: "starterspath-rfid-inventory",
    title: "Liquid Assets: Real-Time RFID Inventory Tracking",
    company: "Starter's Path",
    year: "2018",
    description: "Engineered a first-of-its-kind RFID liquid-tracking system that gave restaurant owners real-time visibility into $40K/month in shrinkage. Reduced manual labor by 24% and identified a $240K/year savings opportunity.",
    problem: "A multi-unit restaurant group was bleeding ~$40K/month across 4 locations due to 'invisible' inventory loss. Manual counts took 3 hours per day, were frequently falsified or skipped, and couldn't distinguish between heavy-handed pouring, accidental waste, or intentional theft.",
    approach: "Shifted the strategy from 'Reporting' to 'Prevention.' After observing bar operations, I identified that the 24-hour lag in manual counts made accountability impossible. I adapted medical-grade RFID technology (originally for liquid sensing in diapers) to liquor bottles. I architected a system that synced bottle-weight changes with POS transactions in real-time, moving the source of truth from a clipboard to a live dashboard that flagged discrepancies the moment a drink was poured.",
    impact: "Automated 80+ hours of monthly manual labor by replacing 3-hour daily counts with instant, real-time RFID tracking.\nRecovered $480K in annual leakage by engineering a real-time sync between physical inventory and POS sales data.\nEliminated 100% of 'Shadow Waste' through a hardware-software correlation engine that flagged discrepancies the moment they occurred.",
    fullStory: "At Starter's Path, I tackled a classic 'leaky bucket' problem in the hospitality industry. The owner knew they were losing money but lacked the data to act. By bringing in liquid-sensing RFID technology—an unconventional cross-industry application—I turned every bottle into a smart device. \n\nI integrated this hardware with the restaurant's POS system so that if a bartender poured 2oz of Scotch but only rang up 1oz, the owner was alerted instantly. This transformed inventory from a dreaded end-of-day chore into a background process. This project proved that the most effective 'AI' or automation doesn't just replace a task; it provides a level of precision that humans simply cannot achieve manually.",
    metrics: ["$40K/Mo Visibility", "24% Labor Reduction", "Real-Time Loss Detection"],
    industry: ["startups", "iot", "hospitality"],
    category: "featured-work",
  },
  {
    id: "productbot-okrs",
    title: "Scaling Leadership: Operationalizing a $260K ARR Beta",
    company: "Productbot AI",
    year: "2025",
    description: "Architected a decision-making framework that reduced CEO product-dependency by 90%, accelerating beta delivery by 6 weeks and enabling the leadership team to focus on a $130K–$260K ARR pipeline and seed fundraising.",
    problem: "Productbot was trapped in 'Founder Bottleneck.' With only one engineer and no prioritization framework, the CEO was spending 5 hours/day on micro-level product decisions. This lack of autonomy delayed the beta launch and prevented the CEO from focusing on the high-leverage activities needed for seed funding: investor relations and customer development.",
    approach: "Diagnosed the root cause as a lack of 'Decision Guardrails.' I introduced a high-velocity OKR framework paired with RICE prioritization to decentralize decision-making. We evaluated the backlog against three high-stakes pillars: beta-customer revenue ($65K+ per segment), technical feasibility for a solo engineer, and fundraising narrative. By establishing these 'No-Go' zones, we successfully pruned 40% of the backlog, empowering the engineering team to execute without constant CEO intervention.",
    impact: "Reclaimed 90% of CEO time (4-5 hours/day to 2-3 hours/week) by implementing OKRs and RICE prioritization frameworks.\nAccelerated beta delivery by 6 weeks by enabling the engineering team to make autonomous decisions without CEO intervention.\nEnabled 25+ investor meetings and created a $130K-260K ARR pipeline by freeing CEO bandwidth for fundraising activities.",
    fullStory: "At Productbot AI, I realized that for an early-stage startup, speed isn't just about coding—it's about the speed of decision-making. The CEO was the single point of failure for every feature. I implemented a system that replaced 'gut feel' with a data-driven RICE score, aligning the product roadmap directly with seed-round milestones.\n\nBy defining what we *weren't* building, I gave the engineer the clarity to ship 6 weeks ahead of schedule. This transformed the company from a chaotic 'feature factory' into a focused venture-ready startup. This project solidified my belief that Product Management is as much about managing executive bandwidth and company runway as it is about managing a backlog.",
    metrics: ["90% CEO Time Reclaimed", "6-Week Beta Acceleration", "$260K ARR Pipeline"],
    industry: ["startups", "ai-ml", "productivity"],
    category: "featured-work",
  },
  {
    id: "productbot-dashboard",
    title: "AI Feedback Engine: From Manual Analysis to $260K ARR",
    company: "Productbot AI",
    year: "2025",
    description: "Shipped an AI-powered insights dashboard that converted 100% of beta users and validated a $260K ARR pipeline. Reduced manual analysis time by 65% and engineered a human-in-the-loop system that boosted AI accuracy to a market-leading 85%.",
    problem: "B2B Product Managers were drowning in 'Feedback Debt,' spending 8–12 hours/week manually triaging data across Intercom, Zendesk, and Slack. Existing tools lacked the accuracy (hovering at ~70%) to be trusted for roadmap decisions, leading to 'analysis paralysis' and fragmented product strategies.",
    approach: "Identified that tool fragmentation was the root cause of friction, not just the volume of data. I prioritized a 'Workflow-First' strategy, building deep integrations to reduce 'tab-switching' by 90%. To solve the trust gap, I designed a human-in-the-loop tagging system that turned manual user corrections into training data. This strategic move raised AI accuracy from 70% to 85%, creating a defensible 'Data Moat' against established competitors like Dovetail and Productboard.",
    impact: "Reduced feedback analysis time by 65% (8 hours to 3 hours per week) by building integrations that eliminated tab-switching across Intercom, Zendesk, and Slack.\nImproved AI accuracy from 70% to 85% by designing a human-in-the-loop tagging system that turned user corrections into training data.\nAchieved 100% daily active usage and 8.5 NPS by validating $450/mo/seat pricing with 3.6x ROI and 3.5-month payback period.",
    fullStory: "At Productbot AI, I led the product discovery and execution for our core feedback engine. After interviewing 8 PMs, I realized they didn't need more charts; they needed confidence in their data. By building a dashboard that ranked feature requests by an 'AI-calculated Impact Score,' we gave teams a way to justify their roadmap to stakeholders with hard evidence. \n\nWe moved from PoC to a revenue-ready beta in just 16 weeks. The results were immediate: one customer reported that our tool replaced their entire manual Friday reporting cycle. By the end of the beta, we hadn't just built a feature; we had validated a business model that transformed customer feedback from a cost center into a $260K revenue pipeline.",
    metrics: ["65% Less Analysis Time", "85% AI Accuracy", "3.6x Customer ROI"],
    industry: ["startups", "ai-ml", "enterprise"],
    category: "featured-work",
  },
  {
    id: "joystick-growth",
    title: "Telegram Gaming: Scaling from 0 to 500 Players",
    company: "Joystick",
    year: "2023",
    description: "Architected a full-funnel growth strategy for an emerging Telegram gaming platform, scaling the player base from 0 to 476 users in 8 weeks by reverse-engineering viral mechanics from top-tier titles like Notcoin and Hamster Kombat.",
    problem: "Following a pivot from B2B tools to consumer gaming, Joystick lacked a user acquisition playbook for the nascent Telegram ecosystem. The core challenge was identifying whether Telegram's unique social infrastructure could sustain a viable cost-per-acquisition (CPA) and high-retention player base.",
    approach: "Adopted a 'Deconstructionist' strategy to bypass the lack of platform documentation. I audited 15+ high-growth Telegram games to map out the 'Social Loop'—specifically how referral incentives and bot-based group notifications drive organic virality. I engineered a two-phase pipeline: first, building a high-trust organic community of 200 players to validate gameplay; second, deploying targeted 'Growth Sprints' via Telegram ads and group bot integrations to test scalability and unit economics.",
    impact: "Grew player base from 0 to 476 users in 6-8 weeks by reverse-engineering viral mechanics from 15+ successful Telegram games.\nValidated product-market fit with 0 CAC by reaching the first 200 players through community-led referral loops.\nAchieved 138% growth in 60 days by building a reusable Telegram growth playbook combining organic community growth with paid experiments.",
    fullStory: "At Joystick, I operated as a growth generalist during a high-stakes pivot. The Telegram gaming market was a 'Wild West' in 2023, and traditional Facebook/Google ad playbooks didn't apply. I realized that on Telegram, the community *is* the marketing engine.\n\nBy embedding referral mechanics directly into the game's core loop—similar to the 'Tap-to-Earn' models that would later dominate the platform—we turned our first 100 players into an active sales force. I also stepped into production roles, handling sound design and asset management to ensure the product quality matched our growth ambitions. This project was a masterclass in 'Zero-to-One' growth: finding a gap in an emerging market and building the ladder to climb it.",
    metrics: ["138% Player Growth", "0 to 476 Users", "Zero-CAC Validation"],
    industry: ["startups", "gaming", "web3"],
    category: "featured-work",
  },
  {
    id: "obscura-mgm",
    title: "Phygital Scale: Immersive UX for MGM Macau",
    company: "Obscura Digital",
    year: "2017",
    description: "Orchestrated the product direction for a massive-scale interactive lobby installation at MGM Macau. Pioneered early WeChat mini-program integration to engage hundreds of thousands of users, bridging the gap between physical space and digital interaction.",
    problem: "MGM Macau needed to transform their physical lobby into a high-engagement 'Phygital' (physical + digital) destination. The technical challenge was to build a system that was creatively avant-garde yet robust enough to handle hundreds of thousands of concurrent users with zero latency, all within the constraints of an emerging WeChat ecosystem.",
    approach: "Evolved from Software Engineer to a 'Hybrid Product Lead' to bridge the communication gap between technical limitations and creative vision. I identified that the friction point wasn't the hardware, but the onboarding; I championed the use of WeChat mini-programs—cutting-edge at the time—to eliminate app-download friction. I led the cross-functional roadmap between engineering and visual design, ensuring that the 10-foot tall interactive elements remained intuitive for users of all ages and tech-literacy levels.",
    impact: "Engaged hundreds of thousands of users by pioneering WeChat mini-program integration in a physical lobby installation.\nEliminated app-download friction by using WeChat's native ecosystem to create zero-friction onboarding for all guests.\nCreated a centerpiece installation for MGM Macau by successfully deploying large-scale physical-digital integration in a high-traffic environment.",
    fullStory: "At Obscura Digital, I learned that the most honest feedback comes from a user standing in front of a 10-foot screen. I moved from pure coding into a product-focused role because I realized that the success of the MGM project depended on the 'Why,' not just the 'How.' \n\nBy watching people interact with our work in real-time, I developed a 'no-hiding' approach to product development. If a user didn't understand the interface in 3 seconds, it was a failure—no matter how clean the code was. This experience in 'Emotional Engineering'—designing for wonder while managing extreme technical constraints—remains the foundation of how I build software today: start with the human experience and work backward to the tech stack.",
    metrics: ["100K+ User Engagement", "Early WeChat Pioneer", "Physical-Digital UX"],
    industry: ["media", "hospitality", "creative-tech"],
    category: "featured-work",
  },
];

export const contentMap: Record<string, ContentMap> = {
  fintech: {
    headline: "Building fraud prevention systems protecting billions",
    subheadline:
      "Product Manager with 2+ years at Visa designing identity verification systems with $15B potential impact. I specialize in payment security, compliance, and enterprise product development.",
    projects: ["visa-fraud", "visa-developer", "shorttok-productivity"],
    skills: ["Fraud Prevention", "Payment Systems", "Compliance", "Enterprise PM"],
    metrics: ["$15B Potential Impact", "$280K+ Revenue", "75% Accuracy"],
  },
  enterprise: {
    headline: "Reducing enterprise decision time by 97% with AI-powered insights",
    subheadline:
      "Product Manager who built Glo Insights at Globality, reducing procurement decision time from weeks to minutes and achieving 80% adoption in Fortune 500 teams.",
    projects: ["globality-insights", "shorttok-productivity", "shorttok-qa", "artifactlabs-museum", "starterspath-tenant-passport"],
    skills: ["Enterprise PM", "Process Automation", "User Adoption", "Cross-functional Leadership"],
    metrics: ["97% Time Reduction", "80% Adoption", "$946K+ Value"],
  },
  "ai-ml": {
    headline: "Building AI products generating $340K+ in revenue",
    subheadline:
      "Product Manager specializing in AI/ML product development. I've built AI-powered video tools, procurement insights platforms, and automation systems—all with measurable impact.",
    projects: ["shorttok-sports", "globality-insights", "shorttok-qa", "artifactlabs-museum", "productbot-dashboard", "productbot-okrs"],
    skills: ["AI/ML Product Development", "Automation", "Data-Driven Decisions", "Rapid Prototyping"],
    metrics: ["$340K+ Revenue", "97% Time Reduction", "AI-Powered"],
  },
  media: {
    headline: "Building sports clip platform generating $100K+ revenue in 8 weeks",
    subheadline:
      "Product Manager who designed and launched ShortTok's sports clip platform—first-to-market with live-to-social video workflow.",
    projects: ["shorttok-sports", "shorttok-qa", "shorttok-productivity", "meed-receipt-scanning", "joystick-growth", "obscura-mgm"],
    skills: ["Video Production", "Real-time Workflows", "Media Products", "Rapid Prototyping"],
    metrics: ["$340K Revenue", "90% Time Reduction", "8-week Launch"],
  },
  startups: {
    headline: "Building 0→1 products generating $340K+ in revenue",
    subheadline:
      "Founding PM who built ShortTok's sports clip platform from 0→1 in 8 weeks, generating $340K+ in revenue and pipeline.",
    projects: ["shorttok-sports", "shorttok-productivity", "shorttok-qa", "meed-receipt-scanning", "starterspath-tenant-passport", "starterspath-rfid-inventory", "productbot-okrs", "productbot-dashboard", "joystick-growth"],
    skills: ["0→1 Product Development", "Rapid Prototyping", "Lean Startup", "Founder-Friendly"],
    metrics: ["$340K+ Revenue", "8-week Launch", "0→1 Products"],
  },
  default: {
    headline: "Building products that create measurable impact",
    subheadline:
      "Product Manager with experience building AI products, enterprise software, and consumer platforms. I've generated $1.4M+ in revenue and value, reduced decision time by 97%, and created automation with 1,400x ROI.",
    projects: ["shorttok-sports", "globality-insights", "visa-fraud", "artifactlabs-museum", "productbot-dashboard"],
    skills: ["Product Strategy", "AI/ML Development", "Cross-functional Leadership", "High Impact"],
    metrics: ["$1.4M+ Revenue & Value", "97% Time Reduction", "1,400x ROI"],
  },
};

export function getPersonalizedContent(industry: string): ContentMap {
  return contentMap[industry] || contentMap.default;
}

export function getProjectsForIndustry(industry: string): Project[] {
  const content = getPersonalizedContent(industry);
  return projects.filter((project) => content.projects.includes(project.id));
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.category === "featured-project");
}

export function getFeaturedWork(industry: string = "default"): Project[] {
  const content = getPersonalizedContent(industry);
  const industryProjects = projects.filter((project) => content.projects.includes(project.id));
  return industryProjects.filter((project) => project.category === "featured-work" || !project.category);
}

// Calculate persona-specific aggregate stats from all accomplishments
export function getAggregateStats(persona: string = "default"): string[] {
  const featuredWorkProjects = projects.filter(
    (project) => project.category === "featured-work"
  );

  // Base aggregate calculations (all are sums of accomplishments)
  const totalRevenue = "$340K+ Revenue Generated";
  const totalValue = "$1.4M+ Revenue & Value Generated";
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

    case "pmm":
      return [
        totalValue,
        userAdoption,
        "97% Faster GTM Decisions",
        "Clear Value Proposition Design",
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

    case "vp-product":
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
    subheadline:
      "Great products aren't just coded; they're felt. Since you're a {jobTitle}, you know that human-centered design is the difference between a tool and a solution. The focus is on the craft of the user experience.",
    stats: ["97% User Friction Reduction", "100+ User Interviews Conducted", "Human-First Roadmap Strategy"],
    focus: "Empathy & Craft",
  },
  founder: {
    headline: "PM. Revenue-Driver. Creator.",
    subheadline:
      "AI products can act as force multipliers. For your team, the mindset of an entrepreneur who treats every feature like a business is brought to the table. The focus is not just shipping code; it's shipping ROI.",
    stats: ["$340K+ Revenue Generated", "1,400x Automation ROI", "0 to 1 Product Launch Specialist"],
    focus: "Speed, Revenue, & Versatility",
  },
  pmm: {
    headline: "PM. Storyteller. Creator.",
    subheadline:
      "There is a bridge between technical complexity and market-ready stories. AI tools aren't just functional, but easy for customers to understand and love. The secret to product-market fit is the craft.",
    stats: ["$340K+ Revenue Impact", "97% Faster GTM Decision Making", "Clear Value Proposition Design"],
    focus: "Messaging & Market Fit",
  },
  investor: {
    headline: "PM. Strategist. Builder.",
    subheadline:
      "Scale AI products by turning complex automation into sustainable revenue streams. Look at the long-term horizon, ensuring every technical detail aligns with the broader vision of the craft.",
    stats: ["1,400x Scalable ROI", "$340K+ Profit and Loss Management", "Strategic Lifecycle Ownership"],
    focus: "Scalability & Vision",
  },
  recruiter: {
    headline: "PM. Builder. Results-Driven.",
    subheadline:
      "Product manager with proven track record of building AI-powered products that generate revenue and drive user adoption. Experienced in 0→1 launches, enterprise SaaS, and cross-functional leadership.",
    stats: ["$340K+ Revenue Generated", "97% User Friction Reduction", "80% Enterprise Adoption Rate"],
    focus: "Qualifications & Fit",
  },
  "vp-product": {
    headline: "PM. Builder. Strategic Leader.",
    subheadline:
      "Product manager who thinks strategically and executes flawlessly. Built products generating $340K+ revenue while leading cross-functional teams. Ready to scale impact and contribute to your product vision.",
    stats: ["$340K+ Revenue Generated", "Cross-Functional Leadership", "Strategic Lifecycle Ownership"],
    focus: "Leadership & Strategic Vision",
  },
  engineer: {
    headline: "PM. Builder. Technical Partner.",
    subheadline:
      "Product manager who speaks your language. Built AI products, automated workflows with 1,400x ROI, and designed systems that scale. The focus is on shipping great products through strong technical partnership.",
    stats: ["1,400x Automation ROI", "97% Process Efficiency Gain", "AI/ML Product Development"],
    focus: "Technical Partnership & Execution",
  },
  default: {
    headline: "PM. Builder. Creator.",
    subheadline:
      "Product manager building AI-powered products that generate revenue, reduce friction, and scale. From 0→1 launches to enterprise SaaS, I turn complex problems into simple solutions.",
    stats: ["$340K+ Revenue Generated", "97% User Friction Reduction", "1,400x Automation ROI"],
    focus: "Broad Appeal & High Impact",
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
    return "vp-product";
  }
  if (title === "designer") {
    return "designer";
  }
  if (title === "founder") {
    return "founder";
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
  if (title.includes("pmm") || title.includes("product marketing") || title.includes("marketing")) {
    return "pmm";
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
    return "vp-product";
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

/**
 * Maps job title to industry for content personalization
 * This determines which projects and content to show in Featured Work section
 */
export function getIndustryFromJobTitle(jobTitle: string): string {
  if (!jobTitle) return "default";

  const title = jobTitle.toLowerCase();

  // Map job titles to industries based on what content they'd find most relevant
  if (title === "founder" || title.includes("founder") || title.includes("ceo") || title.includes("co-founder")) {
    return "startups"; // Founders care about 0→1 launches, revenue, rapid prototyping
  }
  if (title === "engineer" || title.includes("engineer") || title.includes("developer") || title.includes("tech lead") || title.includes("cto")) {
    return "ai-ml"; // Engineers care about AI/ML, automation, technical depth
  }
  if (title === "product leader" || title.includes("vp product") || title.includes("director of product") || title.includes("head of product") || title.includes("product lead")) {
    return "enterprise"; // Product leaders care about enterprise impact, adoption, cross-functional leadership
  }
  if (title === "recruiter" || title.includes("recruiter") || title.includes("talent") || title.includes("hr")) {
    return "default"; // Recruiters want to see breadth across all industries
  }
  if (title === "designer" || title.includes("designer") || title.includes("ux") || title.includes("design")) {
    return "default"; // Designers want to see user-focused work across industries
  }
  if (title === "generalist" || title === "other") {
    return "default";
  }

  // Default fallback
  return "default";
}

export function getPersonaHandshake(
  persona: string,
  jobTitle: string = ""
): PersonaHandshake {
  const handshake = personaHandshakes[persona] || personaHandshakes.default;

  // Replace placeholders
  let subheadline = handshake.subheadline;
  if (jobTitle) {
    subheadline = subheadline.replace(/{jobTitle}/g, jobTitle);
  } else {
    subheadline = subheadline.replace(/a {jobTitle}/g, "working in product");
  }

  // Use persona-specific aggregate stats
  const aggregateStats = getAggregateStats(persona);

  return {
    ...handshake,
    subheadline,
    stats: aggregateStats,
  };
}

