import { useState } from "react";
import { Share2 } from "lucide-react";
import toast from "react-hot-toast";
import RoomCard from "./RoomCard";
import DateFilter from "./DateFilter";
import PropertyTabs from "./propertyTabs";
import Button from "@/components/ui/Button";
import Image from "@/components/ui/Image";
import PhotoViewer from "@/components/ui/PhotoViewer";
import ShareModal from "./ShareModal";
import { currentLanguage, websiteUrl } from "@/constants";
import { useParams } from "react-router-dom";
import { usePropertyAPI } from "@/services/propertyService";
import { IDetailsProperty } from "@/interfaces/property";
import { DateValueType } from "react-tailwindcss-datepicker";

const mockRooms = [
  {
    id: 1,
    name: "Deluxe Room",
    beds: 2,
    maxGuests: 3,
    price: 1200,
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=400&h=300&fit=crop",
    amenities: ["WiFi", "TV", "AC"],
    available: true,
  },
  {
    id: 2,
    name: "Family Room",
    beds: 3,
    maxGuests: 5,
    price: 1800,
    image:
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=300&fit=crop",
    amenities: ["WiFi", "TV", "AC", "Kitchen"],
    available: true,
  },
  {
    id: 3,
    name: "Suite",
    beds: 1,
    maxGuests: 2,
    price: 2500,
    image:
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop",
    amenities: ["WiFi", "TV", "AC", "Minibar"],
    available: false,
  },
];

const propertyImages = [
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop",
];

export default function PropertyDetails() {
  const { id } = useParams();
  const [startDate, setStartDate] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });
  const [endDate, setEndDate] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });
  const [rooms, setRooms] = useState(mockRooms);
  const [showShareModal, setShowShareModal] = useState(false);
  const { data } = usePropertyAPI(id);
  const propertyDetails: IDetailsProperty = data?.data?.data?.property_details;
  // const facilities: IFacilityProperty[] = data?.data?.data?.facility_list;
  const url = `${websiteUrl}/properties/${id}`;
  const handleSearch = () => {
    if (!startDate || !endDate) {
      toast.error("Please select  check-in and check-out dates");
      return;
    }

    // Simulate availability check
    const updatedRooms = mockRooms.map((room) => ({
      ...room,
      available: Math.random() > 0.3, // Random availability for demo
    }));
    setRooms(updatedRooms);

    toast.success(
      `Showing available rooms from ${startDate.startDate?.toLocaleDateString(
        "en-GB"
      )} to ${endDate.startDate?.toLocaleDateString("en-GB")}`
    );
  };

  const handleBook = (roomId: number) => {
    const room = rooms.find((r) => r.id === roomId);
    toast.success(`You selected ${room?.name} for ${room?.price} EGP/night`);
  };

  return (
    <>
      {" "}
      <div className="container mx-auto px-5 py-8">
        {/* Property Title */}
        <div
          className="flex justify-between items-start mb-6"
          data-aos="fade-in"
        >
          <div>
            <h2 className="text-3xl font-serif font-bold text-foreground mb-2">
              {propertyDetails?.title[currentLanguage]}
            </h2>
            <p className="text-muted-foreground">Mohandessin, Giza, Egypt</p>
          </div>
          <Button
            onClick={() => setShowShareModal(true)}
            className="text-primary"
          >
            <Share2 />
          </Button>
        </div>

        {/* Property Images */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 h-64 overflow-y-auto"
          data-oas="fade-left"
        >
          {propertyImages.map((image, index) => (
            <PhotoViewer key={index} src={image}>
              <div
                key={index}
                className="relative h-64 rounded-xl overflow-hidden cursor-pointer group"
              >
                <Image
                  imageUrl={image}
                  alt={`Property view ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-foreground/10 group-hover:bg-foreground/0 transition-colors" />
              </div>
            </PhotoViewer>
          ))}
        </div>

        {/* Date Filter */}
        <DateFilter
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={(date) => setStartDate(date)}
          onEndDateChange={(date) => setEndDate(date)}
          onSearch={handleSearch}
        />

        {/* Available Rooms */}
        <section className="mb-10">
          <h3
            className="text-2xl font-serif font-semibold mb-5"
            data-aos="fade-in"
          >
            Available Rooms
          </h3>
          <div className="space-y-4">
            {rooms.map((room) => (
              <RoomCard key={room.id} room={room} onBook={handleBook} />
            ))}
          </div>
        </section>

        {/* Property Details Tabs */}
        <section className="py-8 border-t border-border">
          <PropertyTabs />
        </section>
      </div>
      <ShareModal
        url={url}
        open={showShareModal}
        onClose={() => setShowShareModal(false)}
      />
    </>
  );
}
