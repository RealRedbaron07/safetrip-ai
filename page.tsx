import { motion } from "framer-motion";
import FeatureCard from "../components/FeatureCard";
import MapSection from "../components/MapSection";

export default function Home() {
  const features = [
    { emoji: "🎯", title: "Smart Filters",        desc: "Find halal restaurants, prayer rooms…" },
    { emoji: "🛡️", title: "SafeZone Map Layer",  desc: "Visualize low‑risk areas…" },
    { emoji: "📍", title: "Area Summaries",       desc: "AI‑generated neighborhood overviews…" },
    { emoji: "💬", title: "AI Chatbot Assistant", desc: "Ask “Is Kensington safe at night?”…" },
    { emoji: "💰", title: "Budget Filter",        desc: "Discover affordable experiences…" },
    { emoji: "👥", title: "Community Insights",   desc: "Real reviews from travelers…" }
  ];

  return (
    <main className="min-h-screen px-6 py-12">
      {/* Hero */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-xl mx-auto mb-16"
      >
        <h1 className="text-5xl font-extrabold text-blue-400">SafeTrip.AI</h1>
        <p className="mt-4 text-lg text-gray-300">
          Your personalized travel assistant that helps first‑time and values‑based travelers explore unfamiliar cities safely and comfortably.
        </p>
        <button className="mt-8 px-8 py-3 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full font-medium hover:from-blue-600 hover:to-cyan-500">
          Start Your Safe Journey
        </button>
      </motion.section>

      {/* Features */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {features.map((f) => (
          <FeatureCard key={f.title} emoji={f.emoji} title={f.title} desc={f.desc} />
        ))}
      </section>

      {/* Map Demo */}
      <section>
        <h2 className="text-3xl font-bold text-center text-blue-300 mb-6">
          See SafeTrip.AI in Action
        </h2>
        <MapSection />
      </section>
    </main>
  );
}
