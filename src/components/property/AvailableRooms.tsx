import { availableRooms } from "@/data/property";
import { getStoredCurrency } from "@/utils/getStoredCurrency";
import { useTranslation } from "react-i18next";

const parsedCurrency = getStoredCurrency();
function AvailableRooms() {
  const { t } = useTranslation();
  return (
    <div className="pt-6" data-aos="fade-right">
      <h3 className="text-xl font-bold mb-3">Available Rooms</h3>

      <div className="flex flex-col gap-4">
        {availableRooms.map((room, index) => (
          <div
            key={index}
            className="border rounded-md p-4 flex justify-between items-center"
          >
            <div>
              <h4 className="font-semibold text-lg">{room.name}</h4>
              <p className="text-dark">
                Beds: {room.beds} · Max Guests: {room.maxGuests}
              </p>
            </div>

            <div className="font-bold text-primary">
              {room.price} {t(parsedCurrency?.currency)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AvailableRooms;
