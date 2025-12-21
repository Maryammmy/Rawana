import {
  Wifi,
  Car,
  Wind,
  Tv,
  UtensilsCrossed,
  WashingMachine,
  Flame,
  ArrowUp,
} from "lucide-react";

const facilities = [
  { name: "WiFi", icon: Wifi, available: true },
  { name: "Parking", icon: Car, available: true },
  { name: "Air Conditioning", icon: Wind, available: true },
  { name: "TV", icon: Tv, available: true },
  { name: "Kitchen", icon: UtensilsCrossed, available: true },
  { name: "Washing Machine", icon: WashingMachine, available: true },
  { name: "Fireplace", icon: Flame, available: false },
  { name: "Elevator", icon: ArrowUp, available: true },
];

export default function FacilitiesTab() {
  return (
    <div data-aos="fade-in">
      <h3 className="text-2xl font-serif font-semibold mb-6">
        What this place offers
      </h3>
      <div className="flex flex-wrap gap-4">
        {facilities.map((facility) => (
          <div
            key={facility.name}
            className={`flex items-center gap-3 p-4 rounded-lg border transition-colors ${
              facility.available
                ? "border-border bg-card hover:border-primary/30"
                : "border-border/50 bg-muted/50 opacity-60"
            }`}
          >
            <facility.icon
              className={`size-5 shrink-0 ${
                facility.available ? "text-primary" : "text-muted-foreground"
              }`}
            />
            <span
              className={
                facility.available
                  ? "text-foreground"
                  : "text-muted-foreground line-through"
              }
            >
              {facility.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
