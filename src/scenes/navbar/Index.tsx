import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";

type Props = {
  isTopOfPage : boolean;
  selectedPage : SelectedPage;
  setSelectedPage : (value : SelectedPage) => void;
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
    const flexBetween = "flex items-center justify-between";
    const navbarBackground = isTopOfPage ? " " : "bg-primary-100 drop-shadow";
  return <nav>
    <div
    className={` ${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
    <div className={`${flexBetween} mx-auto w-5/6`}>
    <div className={`${flexBetween} w-full gap-16`}>
      {/* Left side */}
      <img alt="logo" src={Logo} />

      {/* RIght side */}
      <div className={`${flexBetween} w-full`}>
        <div className={`${flexBetween} gap-8 text-sm`}>
          <Link 
            page="Home"
            selectedPage = {selectedPage}
            setSelectedPage = {setSelectedPage}
          />
          <Link 
            page="Benefits"
            selectedPage = {selectedPage}
            setSelectedPage = {setSelectedPage}
          />
          <Link 
            page="Our Classes"
            selectedPage = {selectedPage}
            setSelectedPage = {setSelectedPage}
          />
          <Link 
            page="Contact us"
            selectedPage = {selectedPage}
            setSelectedPage = {setSelectedPage}
          />
        </div>
        <div>
          <p>Sign In</p>
          <ActionButton setSelectedPage = {setSelectedPage}>Become a Member</ActionButton>
        </div>
        </div>
        </div>
        </div>
        </div>
  </nav>;
};

export default Navbar