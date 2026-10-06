import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  agentRules: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      { source: "/programs/championship-camp", destination: "/programs/basketball-experience", permanent: false },
      { source: "/programs/youth-mentorship", destination: "/programs/education-mentorship", permanent: false },
      { source: "/programs/community-impact", destination: "/programs/mike-james-day", permanent: false },
      { source: "/news", destination: "/", permanent: false },
      { source: "/news/:slug", destination: "/", permanent: false },
      { source: "/partnership", destination: "/mental-health", permanent: false },
    ];
  },
};

export default nextConfig;
