import { forwardRef } from "react";
import { School } from "lucide-react";
import { destinations } from "../../../data/landing";

const DestinationCard = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <div
      ref={ref}
      className={`absolute z-20 w-full lg:w-72 max-w-md mt-2 shadow-lg pe-1 py-4 bg-white rounded-lg ${
        document.documentElement.dir === "rtl" ? "right-0" : "left-0"
      }`}
    >
      <div className="p-2 overflow-y-auto max-h-[270px] lg:max-h-[350px] destination-scroller">
        {destinations.map((item, index) => (
          <div
            key={index}
            className="p-2 hover:bg-gray-100 rounded-md flex gap-4 items-center"
          >
            <div className="bg-blue-50 p-2 rounded-lg">
              <School className="text-dark" size={20} />
            </div>
            <div>
              <h3 className="font-medium text-start text-sm">{item.city}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

DestinationCard.displayName = "DestinationCard";

export default DestinationCard;
