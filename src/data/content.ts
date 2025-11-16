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
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80"
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
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Warehousing",
    description:
      "Secure, flexible, and strategic. We offer safe storage solutions, from short-term holding to long-term inventory management, keeping your goods secure and ready.",
    image:
      "https://images.unsplash.com/photo-1471623320832-752e8bbf8413?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Transportation",
    description:
      "Reliable \"last mile\" delivery. We seamlessly connect the port to your doorstep, ensuring your cleared cargo arrives safely and on time.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Licensing & Compliance",
    description:
      "End-to-end management of statutory licensing and regulatory compliance for imports and exports. We assist with DGFT, FSSAI, BIS, WPC, Plant/Animal Quarantine, and other approvals. Ensuring smooth market entry and error-free regulatory adherence for your business.",
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=800&q=80"
  }
];

export const companyInfo = {
  title: "About Shravi Logistics",
  description:
    "Shravi Logistics is your expert Custom House Agent and strategic logistics partner, built to simplify and accelerate your global trade. Our team provides a complete, end-to-end solution, specializing in Custom Clearance, Freight Forwarding, Bulk Cargo Handling, Warehousing, Transportation, and expert Trade Advisory. We manage the full complexity of your supply chain with transparency and precision, ensuring your cargo moves seamlessly from origin to final destination."
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
    title: "30+ Years Experience",
    description:
      "Three decades of delivering complex logistics infrastructure projects across the UK."
  },
  {
    title: "Modern Fleet",
    description:
      "Over 30 highly modernized delivery vehicles equipped with the latest technology."
  },
  {
    title: "100% Safe Delivery",
    description:
      "Zero incidents record with comprehensive safety protocols and training programs."
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock customer service and operational support for all our clients."
  }
];

export const stats = [
  { label: "Projects Completed", value: "500+" },
  { label: "Happy Clients", value: "1000+" },
  { label: "Vehicles in Fleet", value: "30+" },
  { label: "Years of Experience", value: "30+" }
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

