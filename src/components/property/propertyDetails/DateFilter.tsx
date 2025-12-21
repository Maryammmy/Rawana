import { Search } from "lucide-react";
import Button from "../../ui/Button";
import DatePicker from "@/components/ui/DatePicker";
import { validateEndDate, validateStartDate } from "@/utils/handleChangeDate";
import { DateValueType } from "react-tailwindcss-datepicker";
import { useTranslation } from "react-i18next";

interface DateFilterProps {
  startDate: DateValueType;
  endDate: DateValueType;
  onStartDateChange: (date: DateValueType) => void;
  onEndDateChange: (date: DateValueType) => void;
  onSearch: () => void;
}

export default function DateFilter({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onSearch,
}: DateFilterProps) {
  const { t } = useTranslation();
  return (
    <div className="bg-card rounded-2xl shadow-lg border border-border p-4 mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Check-in */}
        <div className="flex-1 flex flex-col gap-2">
          <label className="text-dark font-bold">{t("check_in")}</label>
          <DatePicker
            dateValue={startDate}
            handleValueChange={(val) => {
              const validated = validateStartDate(val, endDate);
              if (validated) onStartDateChange(val);
            }}
            useRange={false}
            className="bg-white p-4 text-dark placeholder:text-dark border rounded-xl"
          />
        </div>
        {/* Check-out */}
        <div className="flex-1 flex flex-col gap-2">
          <label className="text-dark font-bold">{t("check_out")}</label>
          <DatePicker
            dateValue={endDate}
            handleValueChange={(val) => {
              const validated = validateEndDate(val, startDate);
              if (validated) onEndDateChange(validated);
            }}
            useRange={false}
            className="bg-white p-4 text-dark placeholder:text-dark border rounded-xl"
          />
        </div>
        <div className="flex items-end">
          <Button
            onClick={onSearch}
            className="bg-primary font-medium w-full p-4 text-white flex gap-2 items-center rounded-xl"
          >
            <Search className="size-5" />
            Check Availability
          </Button>
        </div>
      </div>
    </div>
  );
}
