export type Service = {
  title: string;
  description: string;
  image: string;
};

export type Project = {
  title: string;
  description: string;
  highlights: string[];
  image: string;
  category: "Logistics" | "Infrastructure" | "Community";
};

export type Stat = {
  label: string;
  value: string;
};

export type NewsItem = {
  title: string;
  date: string;
  image: string;
};

export const services: Service[] = [
  {
    title: "Custom Clearance",
    description:
      "Swift, accurate, and compliant. We cut through the red tape to get your cargo cleared fast, minimizing delays and penalties.",
    image:
      "/images/custom-clearance.png"
  },
  {
    title: "Freight Forwarding",
    description:
      "Your global link by air and ocean. We find the most efficient routes and provide real-time tracking for reliable, transparent freight management.",
    image:
      "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Bulk Cargo Handling",
    description:
      "Expert handling for your non-containerized goods. We safely manage high-volume commodities like minerals and grains from loading to storage.",
    image:
      "/images/bulk-cargo.png"
  },
  {
    title: "Warehousing",
    description:
      "Secure, flexible, and strategic. We offer safe storage solutions, from short-term holding to long-term inventory management, keeping your goods secure and ready.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Transportation",
    description:
      "Reliable \"last mile\" delivery. We seamlessly connect the port to your doorstep, ensuring your cleared cargo arrives safely and on time.",
    image:
      "/images/transportation.png"
  },
  {
    title: "Licensing & Compliance",
    description:
      "End-to-end management of statutory licensing and regulatory compliance for imports and exports. We assist with DGFT, FSSAI, BIS, WPC, Plant/Animal Quarantine, and other approvals. Ensuring smooth market entry and error-free regulatory adherence for your business.",
    image:
      "https://images.unsplash.com/photo-1562564055-71e051d33c19?auto=format&fit=crop&w=800&q=80"
  }
];

export const companyInfo = {
  title: "About SHRAVI LOGISTICS",
  description:
    "SHRAVI LOGISTICS is your expert Custom House Agent and strategic logistics partner, built to simplify and accelerate your global trade. Our team provides a complete, end-to-end solution, specializing in Custom Clearance, Freight Forwarding, Bulk Cargo Handling, Warehousing, Transportation, and expert Trade Advisory. We manage the full complexity of your supply chain with transparency and precision, ensuring your cargo moves seamlessly from origin to final destination."
};

export const mission = {
  title: "Our Mission",
  description:
    "To be the most reliable and transparent logistics partner for our clients, accelerating their business by delivering seamless customs and freight solutions with proactive expertise."
};

export const values = [
  {
    title: "Transparency",
    description:
      "We operate with total clarity. No hidden fees, no last-minute surprises—just honest, upfront communication."
  },
  {
    title: "Reliability",
    description:
      "We do what we say we will do. Our clients trust us to manage their cargo as if it were our own, delivering on time, every time."
  },
  {
    title: "Partnership",
    description:
      "Your success is our success. We invest in understanding your business to act as a true extension of your team."
  },
  {
    title: "Expertise",
    description:
      "We are masters of our craft. We navigate complex regulations and anticipate challenges to keep your cargo moving forward."
  }
];

export const whyChooseUs = [
  {
    title: "End-to-End Integration",
    description:
      "From clearance and freight to warehousing and delivery, we provide a single, seamless solution that simplifies your operations."
  },
  {
    title: "Operational Transparency",
    description:
      "We prioritize clarity with real-time updates, upfront pricing, and open communication at every stage of the supply chain."
  },
  {
    title: "Strategic Efficiency",
    description:
      "We don't just move goods; we optimize routes and costs to improve your bottom line."
  }
];

export const stats = [
  { label: "Happy Clients", value: "200+" },
  { label: "Vehicles in Fleet", value: "20+" },
  { label: "Years of Experience", value: "20+" }
];

export const projects: Project[] = [
  {
    title: "Shravi Park Superhub Redevelopment",
    description:
      "A £250m evolution of a disused airfield into a low-carbon logistics superhub powered by data-driven automation and community-first placemaking.",
    highlights: [
      "2M sq ft of advanced automated warehouse capacity",
      "35% reduction in operational carbon emissions",
      "10,000 new high-skill jobs for the local community"
    ],
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1600&q=80",
    category: "Logistics"
  },
  {
    title: "East-West Freight Spine Modernisation",
    description:
      "Connecting the UK’s largest freight hubs with an electrified intermodal corridor, boosting capacity and resilience overnight.",
    highlights: [
      "420km of multimodal smart infrastructure",
      "16 new digital control centres",
      "Projected £1.8bn uplift to the regional economy"
    ],
    image:
      "https://images.unsplash.com/photo-1459346261661-71d6d3f882b8?auto=format&fit=crop&w=1600&q=80",
    category: "Infrastructure"
  },
  {
    title: "Northern Communities Resilience Programme",
    description:
      "Delivering carbon-positive community logistics hubs with flexible workspace, training academies and public realm improvements.",
    highlights: [
      "1.2M sq ft community logistics space",
      "Net-positive biodiversity impact across 6 towns",
      "Award-winning community co-design process"
    ],
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1600&q=80",
    category: "Community"
  }
];

export const sustainabilityStats: Stat[] = [
  { label: "Waste to landfill", value: "0%" },
  { label: "Fines for safety incidents", value: "£0" },
  { label: "Unplanned downtime", value: "0%" }
];

export const news: NewsItem[] = [
  {
    title: "Shravi launches hydrogen-ready logistics park",
    date: "11 November 2025",
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Graduate intake hits record diversity milestones",
    date: "29 October 2025",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "New smart warehouse delivers 40% efficiency gain",
    date: "15 October 2025",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Shravi wins national infrastructure award",
    date: "02 October 2025",
    image:
      "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=1200&q=80"
  }
];

