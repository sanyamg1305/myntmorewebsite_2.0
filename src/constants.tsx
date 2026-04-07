
import { Service, CaseStudy, BlogPost, Tool, Playbook } from './types';

export const COLORS = {
  black: '#000000',
  white: '#FFFFFF',
  accent: '#FFC947',
};

export const CALENDLY_URL = 'https://calendly.com/founder-myntmore/30min';

export const SERVICES: Service[] = [
  {
    id: 'lead-gen',
    title: 'B2B Lead Generation',
    description: 'Structured outreach systems to fill your pipeline consistently.',
    details: ['Multi-channel outreach', 'Prospecting automation', 'List building', 'Performance reporting'],
    ctaUrl: 'https://myntmoreservices.notion.site/AI-Agent-Led-LinkedIn-Lead-Generation-Personal-Branding-19d522641d3881fd9382e5f587feb450'
  },
  {
    id: 'demand-gen',
    title: 'Demand Generation',
    description: 'Build awareness, relevance, and buying intent inside your market.',
    details: ['Content strategy', 'Market positioning', 'Paid social', 'Brand awareness']
  },
  {
    id: 'sdr-services',
    title: 'SDR Services',
    description: 'Your outsourced SDR engine: trained, monitored, performance-driven.',
    details: ['Meeting setting', 'Script optimization', 'CRM management', 'A/B testing']
  },
  {
    id: 'fractional-cmo',
    title: 'Fractional CMO',
    description: 'Strategic leadership without full-time overhead.',
    details: ['Growth strategy', 'Budget optimization', 'Team management', 'Quarterly planning']
  },
  {
    id: 'personal-branding',
    title: 'Personal Branding',
    description: 'Authority-building content systems for founders and executives.',
    details: ['Executive profiling', 'Content calendar', 'Engagement strategy', 'Video content']
  },
  {
    id: 'newsletters',
    title: 'Email & LinkedIn Newsletters',
    description: 'High-quality newsletters that nurture and convert audiences.',
    details: ['Copywriting', 'Design', 'Audience growth', 'Conversion tracking']
  },
  {
    id: 'cold-email',
    title: 'Cold Emailing',
    description: 'High-performing cold outreach systems and execution.',
    details: ['Inbox warmup', 'Deliverability focus', 'Personalized sequencing', 'Response handling'],
    ctaUrl: 'https://myntmoreservices.notion.site/Cold-Emailing-1c3522641d38808c9130f439c833dfc9'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'Scaled outbound for a Logistics Tech Unicorn in Delhi',
    metric: '240%',
    category: 'Logistics Tech'
  },
  {
    id: 'cs2',
    title: 'LinkedIn Authority for a Fintech Founder in Bangalore',
    metric: '180k',
    category: 'Fintech'
  },
  {
    id: 'cs3',
    title: 'Cold Email System for a SaaS CRM in Chennai',
    metric: '45%',
    category: 'SaaS'
  },
  {
    id: 'cs4',
    title: 'Pipeline Acceleration for an EdTech Enterprise in Mumbai',
    metric: '3.5x',
    category: 'EdTech'
  },
  {
    id: 'cs5',
    title: 'Revenue Growth for a D2C Enabler in Gurgaon',
    metric: '$1.2M',
    category: 'D2C Tech'
  },
  {
    id: 'cs6',
    title: 'Deal Velocity for a HR Tech Platform in Hyderabad',
    metric: '42%',
    category: 'HR Tech'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'beyond-pray-and-spray',
    title: 'Beyond the "Pray and Spray": Building a Predictable B2B Lead Gen Engine',
    category: 'GROWTH',
    date: 'Feb 09, 2025',
    author: 'Tejas Jhaveri',
    readTime: '5 MIN',
    content: (
      <>
        <p className="mb-6">
          Many founders approach lead generation by "praying in the dark," reaching out to broad categories like "founders" or "CXOs" without a clear Ideal Customer Profile (ICP). After 15 years in the trenches, it’s clear that the most common reason B2B outreach fails is that it sounds like a script rather than a trigger.
        </p>
        <p className="mb-8">
          To build a lead gen system that consistently books 35-60 qualified meetings a month, you must move from manual repetition to ambient intelligence. Here is how we build the "Myntmore Effect" for our clients:
        </p>

        <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">Lead with Insights, Not Pitches</h3>
        <p className="mb-8 font-light leading-relaxed">
          Instead of explaining what you do, interrupt the prospect's pattern with a sharp point of view. For example, instead of saying you "streamline ops," try: <em className="text-[#FFC947]">"Your ops dashboard has 17 tabs. Most founders only check 2".</em>
        </p>

        <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">Infrastructure Over Copy</h3>
        <p className="mb-8 font-light leading-relaxed">
          Cold email success is 80% setup and 20% copy. This includes using warmed domains, multi-inbox sending, and removing open/link trackers, which can often hurt deliverability.
        </p>

        <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">The Power of AI Agents</h3>
        <p className="mb-8 font-light leading-relaxed">
          We use AI-assisted research to identify accounts with high buying intent and AI agents to handle follow-ups without sounding robotic. This allows teams to deliver in 90 minutes what traditional teams take 3–4 weeks to execute.
        </p>

        <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">Optimize Your Profile</h3>
        <p className="mb-8 font-light leading-relaxed">
          Your LinkedIn profile is your landing page. If it doesn’t speak to your ICP’s core problem or offer social proof, your outreach will underperform.
        </p>

        <div className="bg-[#FFC947]/10 border-l-4 border-[#FFC947] p-8 my-12 rounded-r-3xl">
          <p className="font-black text-[#FFC947] mb-4 uppercase tracking-[0.3em] text-[10px]">The Takeaway</p>
          <p className="text-2xl font-bold text-white leading-tight tracking-tight">
            In the B2B world, relevance beats reach every single time. Stop trying to do it all manually and start building a system that acts as your "invisible team member".
          </p>
        </div>
      </>
    )
  },
  {
    id: 'ecommerce-conversion-playbook',
    title: 'The E-commerce Conversion Playbook: Turning Browsers into Buyers in 2025',
    category: 'E-COMMERCE',
    date: 'Feb 09, 2025',
    author: 'Tejas Jhaveri',
    readTime: '6 MIN',
    content: (
      <>
        <p className="mb-6">
          Running an online store in India is uniquely challenging, especially with the dominance of Cash on Delivery (COD), which accounts for 65-70% of sales and often leads to high return rates. To thrive, brands must shift their focus from simple visibility to Conversion Rate Optimization (CRO).
        </p>
        <p className="mb-8">
          At Myntmore, we’ve helped clients boost conversion rates by an average of 40% by focusing on these core levers:
        </p>

        <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">Leverage Shoppable Content</h3>
        <p className="mb-8 font-light leading-relaxed">
          Apps like ReelUp can boost product conversions by 40% by turning social media content directly into shoppable videos on your site.
        </p>

        <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">Instil Trust and Urgency</h3>
        <p className="mb-8 font-light leading-relaxed">
          Tools like Number Counter and Qikify build credibility by showcasing live sales data and creating a sense of "FOMO" (fear of missing out).
        </p>

        <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">Solve for "Agent Commerce"</h3>
        <p className="mb-8 font-light leading-relaxed">
          We are entering an age where customers expect to shop within a conversation. Integrating with platforms like ChatGPT’s Instant Checkout allows users to browse and buy without ever leaving the chat.
        </p>

        <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">The Sustainability Premium</h3>
        <p className="mb-8 font-light leading-relaxed">
          Sustainability is no longer a niche; it’s a revenue driver. Consumers are willing to pay nearly 10% more for brands that align with their values and offer transparent "receipts" for their eco-friendly claims.
        </p>

        <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">Reduce Friction in the Hero Section</h3>
        <p className="mb-8 font-light leading-relaxed">
          Most websites have a clarity problem. Your hero section has 3–5 seconds to tell a stranger exactly who you help and what outcome you deliver.
        </p>

        <div className="bg-[#FFC947]/10 border-l-4 border-[#FFC947] p-8 my-12 rounded-r-3xl">
          <p className="font-black text-[#FFC947] mb-4 uppercase tracking-[0.3em] text-[10px]">The Takeaway</p>
          <p className="text-2xl font-bold text-white leading-tight tracking-tight">
            E-commerce in 2025 isn't just about selling a product; it’s about selling an experience. Whether it's through virtual try-ons or hyper-personalized recommendations, your brand must make shopping feel like entertainment.
          </p>
        </div>
      </>
    )
  },
  {
    id: 'founders-edge',
    title: 'The Founder’s Edge: Why You Are Your Company’s Best Marketing Asset',
    category: 'LEADERSHIP',
    date: 'Feb 09, 2025',
    author: 'Tejas Jhaveri',
    readTime: '7 MIN',
    content: (
      <>
        <p className="mb-6">
          Many founders believe their product should sell itself, but in the early stages, founder-led sales are non-negotiable. Your passion, your story, and your firsthand knowledge of the "why" behind the business are things no hired salesperson can replicate.
        </p>
        <p className="mb-8">
          However, scaling a business requires a transition from "hustle" to strategic positioning. Here are the lessons learned from scaling Flintstop to 8,000 orders a day and its subsequent acquisition:
        </p>

        <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">Hire Mentors on Day 1</h3>
        <p className="mb-8 font-light leading-relaxed">
          Don't wait for profitability to hire experts. Consultants who have walked the path can help you build processes over chaos and data over guesswork.
        </p>

        <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">Your Personal Brand is a Business Fuel</h3>
        <p className="mb-8 font-light leading-relaxed">
          Personal branding isn't just about posting content; it's about strategically shaping perception to fuel your business goals. A strong online presence can attract investors, top-tier talent, and even multi-crore orders organically.
        </p>

        <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">Choose Between TAM and TCM</h3>
        <p className="mb-8 font-light leading-relaxed">
          Stop chasing the "Total Addressable Market" (TAM) for your pitch deck and focus on your "Total Conversional Market" (TCM)—the people who feel the problem today and are ready to act.
        </p>

        <h3 className="text-2xl font-black text-white mb-6 uppercase tracking-tighter">The "Default Mode" Advantage</h3>
        <p className="mb-8 font-light leading-relaxed">
          A founder's best ideas often don't come from staring at a screen. Engaging in "low-stakes rehearsals" like table tennis or DJing allows the Default Mode Network of your brain to untangle complex problems quietly.
        </p>

        <div className="bg-[#FFC947]/10 border-l-4 border-[#FFC947] p-8 my-12 rounded-r-3xl">
          <p className="font-black text-[#FFC947] mb-4 uppercase tracking-[0.3em] text-[10px]">The Takeaway</p>
          <p className="text-2xl font-bold text-white leading-tight tracking-tight">
            A company will never outgrow its founder’s self-awareness or inner capacity. By delegating repeatable tasks through automation, you reclaim the energy needed for strategic leadership and human connection.
          </p>
        </div>
      </>
    )
  }
];

export const TOOLS: Tool[] = [
  {
    id: 'linkedin-optimizer',
    title: 'LinkedIn Profile Optimizer',
    description: 'Analyze your LinkedIn presence in seconds. Get a performance score along with a sharper headline and a high-converting About section tailored to what you do.',
    url: 'https://myntmore-linkedin-profile-optimizer.lovable.app/'
  },
  {
    id: 'dm-generator',
    title: 'DM Angle Generator',
    description: 'Never send boring outreach again. Based on your tone and offering, generate 5 unique DM angles that actually spark replies and conversations.',
    url: 'https://mynt-more-angles.lovable.app/'
  },
  {
    id: 'rhythm-builder',
    title: 'Posting Rhythm Builder',
    description: 'Build a content system that fits your life. Get a personalized posting schedule plus pre- and post-posting actions to maximize reach and consistency.',
    url: 'https://posting-rhythm-builder.vercel.app/'
  }
];

export const PLAYBOOKS: Playbook[] = [
  { id: 'p1', title: 'B2B Growth Playbook', description: 'Our complete framework for scaling revenue.' },
  { id: 'p2', title: 'Cold Email Starter Kit', description: 'Everything you need to launch your first campaign.' },
  { id: 'p3', title: 'Demand Gen Framework', description: 'How to turn strangers into high-intent buyers.' }
];
