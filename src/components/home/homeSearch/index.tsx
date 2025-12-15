import { Search } from "lucide-react";
import Button from "../../ui/Button";
import { setIsSearchOpen } from "@/store/features/homeSearch/homeSearchSlice";
import SearchComponent from "./SearchComponent";
import SearchModal from "./SearchModal";
import { useTranslation } from "react-i18next";
import { useAppDispatch } from "@/store/hooks";
import { useMediaQuery } from "react-responsive";

interface IProps {
  maxWidth?: boolean;
}
function HomeSearch({ maxWidth }: IProps) {
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
      {isLargeScreen && <SearchComponent maxWidth={maxWidth} />}
      <SearchModal />
    </>
  );
}
export default HomeSearch;
