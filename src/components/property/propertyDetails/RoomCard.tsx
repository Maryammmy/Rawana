import { Bed, Users, Wifi, Tv, Wind, Check } from "lucide-react";
import Button from "../../ui/Button";
import Image from "@/components/ui/Image";

interface RoomCardProps {
  room: {
    id: number;
    name: string;
    beds: number;
    maxGuests: number;
    price: number;
    image: string;
    amenities: string[];
    available: boolean;
  };
  onBook: (roomId: number) => void;
}

const amenityIcons: Record<string, React.ReactNode> = {
  wifi: <Wifi className="size-4" />,
  tv: <Tv className="size-4" />,
  ac: <Wind className="size-4" />,
};

export default function RoomCard({ room, onBook }: RoomCardProps) {
  return (
    <div
      className="bg-card rounded-xl border border-border p-5 transition-all duration-300 hover:shadow-lg hover:border-primary/30"
      data-aos="fade-right"
    >
      <div className="flex flex-col lg:flex-row gap-5">
        {/* Room Image */}
        <div className="lg:w-64 h-48 lg:h-40 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            imageUrl={room.image}
            alt={room.name}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Room Details */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {room.name}
            </h3>
            <div className="flex flex-wrap gap-4 text-muted-foreground font-medium text-sm mb-3">
              <span className="flex items-center gap-1.5">
                <Bed className="size-5" />
                {room.beds} {room.beds === 1 ? "Bed" : "Beds"}
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="size-5" />
                Max {room.maxGuests} Guests
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {room.amenities.map((amenity) => (
                <span
                  key={amenity}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm bg-green-500/10 text-primary font-semibold"
                >
                  {amenityIcons[amenity.toLowerCase()] || (
                    <Check className="size-4" />
                  )}
                  {amenity}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Price & Booking */}
        <div className="flex flex-col items-end justify-between lg:min-w-[140px]">
          <div className="text-right">
            <p className="text-2xl font-bold text-primary">{room.price} EGP</p>
            <p className="text-sm font-medium text-muted-foreground">
              per night
            </p>
          </div>
          <Button
            onClick={() => onBook(room.id)}
            disabled={!room.available}
            className="w-full lg:w-auto mt-3 bg-primary py-3 px-6 rounded-md text-white disabled:bg-primary/30"
          >
            {room.available ? "Book Now" : "Not Available"}
          </Button>
        </div>
      </div>
    </div>
  );
}
