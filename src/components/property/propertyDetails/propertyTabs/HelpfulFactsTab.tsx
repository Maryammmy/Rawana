import { MapPin, Plane, Waves, Wifi } from "lucide-react";

const facts = [
  { icon: MapPin, text: "Nearest supermarket: 3 minutes walk", emoji: "📍" },
  { icon: Plane, text: "Airport is 20 minutes by car", emoji: "🚕" },
  { icon: Waves, text: "Beach is 5 minutes away", emoji: "🏖️" },
  { icon: Wifi, text: "Free Wi-Fi available in all rooms", emoji: "📱" },
];

export default function HelpfulFactsTab() {
  return (
    <div data-aos="fade-in">
      <h3 className="text-2xl font-serif font-semibold mb-6">
        Some Helpful Facts
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-5 rounded-xl bg-accent/50 border border-accent"
          >
            <span className="text-2xl shrink-0">{fact.emoji}</span>
            <span className="text-foreground font-medium">{fact.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
