import { useMediaQuery } from "react-responsive";
import { setIsSearchOpen } from "../../../store/features/homeSearch/homeSearchSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import Modal from "../../ui/Modal";
import SearchMobile from "./SearchMobile";
function SearchModal() {
  const { isSearchOpen } = useAppSelector((state) => state.homeSearch);
  const dispatch = useAppDispatch();
  const isSmallScreen = useMediaQuery({ maxWidth: 1023 });
  return (
    <>
      {isSmallScreen && (
        <Modal
          isOpen={isSearchOpen}
          close={() => dispatch(setIsSearchOpen(false))}
        >
          <SearchMobile />
        </Modal>
      )}
    </>
  );
}
export default SearchModal;
