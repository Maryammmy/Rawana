import { useRef, useState } from "react";
import { DateValueType } from "react-tailwindcss-datepicker";
import DatePicker from "../../ui/DatePicker";
import { validateEndDate, validateStartDate } from "@/utils/handleChangeDate";
import DestinationDropdown from "./DestinationDropdown";
import useClickOutside from "@/hooks/useClickOutside";
import Button from "../../ui/Button";
import GuestsDropdown from "./GuestDropdown";

export default function SearchBar() {
  const [showDestinations, setShowDestinations] = useState(false);
  const [showGuests, setShowGuests] = useState(false);
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const destinationRef = useRef<HTMLDivElement>(null);
  const destinationBtnRef = useRef<HTMLButtonElement>(null);

  const guestsRef = useRef<HTMLDivElement>(null);
  const guestsBtnRef = useRef<HTMLButtonElement>(null);

  const [startDate, setStartDate] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });
  const [endDate, setEndDate] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });
  const countersMap = {
    rooms: {
      value: rooms,
      setValue: setRooms,
    },
    adults: {
      value: adults,
      setValue: setAdults,
    },
    children: {
      value: children,
      setValue: setChildren,
    },
  };

  useClickOutside(
    destinationRef,
    () => {
      setShowDestinations(false);
    },
    destinationBtnRef
  );

  useClickOutside(
    guestsRef,
    () => {
      setShowGuests(false);
    },
    guestsBtnRef
  );

  return (
    <div className="w-full lg:max-w-4xl xl:max-w-6xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-3 bg-white rounded-2xl shadow-lg p-4 relative w-full">
        {/* Destination */}
        <div className="relative md:col-span-2">
          <Button
            ref={destinationBtnRef}
            type="button"
            onClick={() => setShowDestinations((prev) => !prev)}
            className="w-full border rounded-xl p-4 text-left flex justify-between items-center"
          >
            Where are you going?
          </Button>

          {showDestinations && <DestinationDropdown ref={destinationRef} />}
        </div>

        {/* Check-in */}
        <DatePicker
          dateValue={startDate}
          handleValueChange={(val) => {
            const validated = validateStartDate(val, endDate);
            if (validated) setStartDate(val);
          }}
          useRange={false}
          className="bg-white p-4 text-dark placeholder:text-dark border rounded-xl"
        />
        {/* Check-out */}
        <DatePicker
          dateValue={endDate}
          handleValueChange={(val) => {
            const validated = validateEndDate(val, startDate);
            if (validated) setEndDate(validated);
          }}
          useRange={false}
          className="bg-white p-4 text-dark placeholder:text-dark border rounded-xl"
        />
        {/* Guests */}
        <div className="relative">
          <Button
            ref={guestsBtnRef}
            onClick={() => setShowGuests((p) => !p)}
            className="w-full border rounded-xl p-4 text-left"
          >
            Add guests
          </Button>
          {showGuests && (
            <GuestsDropdown ref={guestsRef} countersMap={countersMap} />
          )}
        </div>

        {/* Search Button */}
        <Button className="md:col-span-5 bg-teal-800 text-white rounded-xl py-4 font-semibold">
          Search
        </Button>
      </div>
    </div>
  );
}
