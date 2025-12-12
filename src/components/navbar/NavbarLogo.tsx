import { Link } from "react-router-dom";
import Image from "../ui/Image";

const NavbarLogo = () => {
  return (
    <Link to="/" className="flex flex-col items-center space-y-1">
      <div className="w-20 sm:w-36">
        <Image
          imageUrl="/images/Rawana-white.svg"
          className="w-full h-full object-cover"
          alt="Trent Logo"
        />
      </div>
      <span className="text-xs text-white font-medium">Travel.hotel.easy</span>
    </Link>
  );
};

export default NavbarLogo;
