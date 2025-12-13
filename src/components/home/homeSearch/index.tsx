// import { Search } from "lucide-react";
// import { useTranslation } from "react-i18next";
// import { useState } from "react";
// import Button from "../ui/Button";
// import FilterModal from "../landing/filter/FilterModal";

import { Search } from "lucide-react";
import Button from "../../ui/Button";
import { setIsSearchOpen } from "@/store/features/homeSearch/homeSearchSlice";
import SearchComponent from "./SearchComponent";
import SearchModal from "./SearchModal";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "@/store/hooks";
import { useMediaQuery } from "react-responsive";

// function HomeSearch() {
//   const { t } = useTranslation();
//   const [isFilterOpen, setIsFilterOpen] = useState(false);

//   return (
//     <>
//       <Button
//         type="button"
//         onClick={() => setIsFilterOpen(!isFilterOpen)}
//         className="flex items-center justify-between gap-2 w-[300px] sm:w-[500px] rounded-full p-2 sm:p-3 border bg-white shadow transition-shadow hover:shadow-lg"
//       >
//         <span className="text-gray-500">{t("where_are_you_going")}</span>
//         <Search className="text-primary shrink-0" />
//       </Button>
//       <FilterModal
//         isFilterOpen={isFilterOpen}
//         close={() => setIsFilterOpen(false)}
//       />
//     </>
//   );
// }
// export default HomeSearch;
// export default HomeSearch;
// import { setIsSearchOpen } from "../../store/features/homeSearch/homeSearchSlice";
// import SearchModal from "./SearchModal";
// import { Search } from "lucide-react";
// import SearchComponent from "./SearchComponent";
// import { useMediaQuery } from "react-responsive";

function HomeSearch() {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLargeScreen = useMediaQuery({ minWidth: 1024 });

  return (
    <>
      <Button
        onClick={() => dispatch(setIsSearchOpen(true))}
        className="flex lg:hidden bg-white items-center gap-2 w-[250px] md:w-[500px] rounded-full py-2 px-5 border shadow hover:shadow-lg"
      >
        <Search className="text-primary" />
        <p className="text-primary font-medium">{t("placeholder_search")}</p>
      </Button>
      {isLargeScreen && <SearchComponent />}
      <SearchModal />
    </>
  );
}
export default HomeSearch;
