import { forwardRef } from "react";
import Counter from "../../ui/Counter";
import { guestCounters } from "@/data";

interface Props {
  countersMap: Record<
    "rooms" | "adults" | "children",
    {
      value: number;
      setValue: React.Dispatch<React.SetStateAction<number>>;
    }
  >;
}

const GuestsDropdown = forwardRef<HTMLDivElement, Props>(
  ({ countersMap }, ref) => {
    return (
      <div
        ref={ref}
        className={`absolute z-20 w-72 right-0 bg-white rounded-xl shadow-lg p-4 space-y-4 ${
          document.documentElement.dir === "rtl" ? "left-0" : "right-0"
        }`}
      >
        {guestCounters.map((item) => {
          const counter = countersMap[item.key];

          return (
            <div key={item.key} className="flex items-center justify-between">
              <span className="font-medium">{item.label}</span>

              <Counter
                counter={counter.value}
                increaseCounter={() => counter.setValue((p) => p + 1)}
                decreaseCounter={() =>
                  counter.setValue((p) => Math.max(item.min, p - 1))
                }
              />
            </div>
          );
        })}
      </div>
    );
  }
);

GuestsDropdown.displayName = "GuestsDropdown";

export default GuestsDropdown;
