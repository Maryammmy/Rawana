import { Clock, Ban, Volume2, Calendar } from "lucide-react";

const policies = [
  { icon: Ban, text: "No smoking inside the property", type: "rule" },
  { icon: Ban, text: "Pets are not allowed", type: "rule" },
  { icon: Volume2, text: "Quiet hours after 10:00 PM", type: "rule" },
  { icon: Calendar, text: "Check-in from 2:00 PM", type: "time" },
  { icon: Clock, text: "Check-out before 12:00 PM", type: "time" },
];

export default function PoliciesTab() {
  return (
    <div data-aos="fade-in">
      <h3 className="text-2xl font-serif font-semibold mb-6">
        Property Policies
      </h3>
      <div className="space-y-3">
        {policies.map((policy, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-4 rounded-lg bg-card border border-border"
          >
            <div
              className={`p-2 rounded-full ${
                policy.type === "time" ? "bg-accent" : "bg-destructive/10"
              }`}
            >
              <policy.icon
                className={`size-5 shrink-0 ${
                  policy.type === "time"
                    ? "text-accent-foreground"
                    : "text-destructive"
                }`}
              />
            </div>
            <span className="text-foreground">{policy.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
