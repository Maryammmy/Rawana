import { useState, useRef } from "react";
import { DateValueType } from "react-tailwindcss-datepicker";
import DatePicker from "../../ui/DatePicker";
import { validateEndDate, validateStartDate } from "@/utils/handleChangeDate";
import { useTranslation } from "react-i18next";
import DestinationDropdown from "./DestinationDropdown";
import useClickOutside from "@/hooks/useClickOutside";
import { guestCounters } from "@/data";
import Counter from "../../ui/Counter";
import Button from "../../ui/Button";

export default function SearchMobile() {
  const { t } = useTranslation();
  const [showDestinations, setShowDestinations] = useState(false);

  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const [startDate, setStartDate] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });

  const [endDate, setEndDate] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });

  // refs for click outside
  const destinationRef = useRef<HTMLDivElement>(null);
  const destinationBtnRef = useRef<HTMLButtonElement>(null);
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
    () => setShowDestinations(false),
    destinationBtnRef
  );

  return (
    <div className="w-full bg-white rounded-2xl shadow-md p-4 space-y-4">
      {/* Destination */}
      <div className="relative">
        <label className="text-sm font-medium">Destination</label>

        <Button
          ref={destinationBtnRef}
          type="button"
          onClick={() => setShowDestinations((p) => !p)}
          className="w-full border rounded-xl p-4 mt-1 text-left"
        >
          Where are you going?
        </Button>

        {showDestinations && <DestinationDropdown ref={destinationRef} />}
      </div>

      {/* Dates */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-10">
        <div className="flex flex-col gap-1">
          <label className="font-medium">{t("start_date")}</label>
          <DatePicker
            dateValue={startDate}
            handleValueChange={(val) => {
              const validated = validateStartDate(val, endDate);
              if (validated) setStartDate(val);
            }}
            useRange={false}
            className="bg-white rounded-xl p-4 border text-dark placeholder:text-dark"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="font-medium">{t("end_date")}</label>
          <DatePicker
            dateValue={endDate}
            handleValueChange={(val) => {
              const validated = validateEndDate(val, startDate);
              if (validated) setEndDate(validated);
            }}
            useRange={false}
            className="bg-white rounded-xl p-4 border text-dark placeholder:text-dark"
          />
        </div>
      </div>

      {/* Guests */}
      <div className="border rounded-xl p-4 space-y-4">
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

      {/* Submit */}
      <Button className="w-full bg-teal-800 text-white rounded-xl py-4 font-semibold">
        Search
      </Button>
    </div>
  );
}
