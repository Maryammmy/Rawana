import { Link } from "react-router-dom";
// import Image from "../ui/Image";

const NavbarLogo = () => {
  return (
    <Link to="/" className="flex flex-col items-center space-y-1">
      <div className="w-20 sm:w-36 text-white text-3xl font-bold">
        {/* <Image
          imageUrl="/images/Rawana-logo.png"
          className="w-full h-full object-cover"
          alt="Trent Logo"
        /> */}
        RAWANA
      </div>
      <span className="text-xs text-white font-medium">Travel.hotel.easy</span>
    </Link>
  );
};

export default NavbarLogo;
