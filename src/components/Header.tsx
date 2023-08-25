import watiLogo from "../assets/wati-logo.svg";
import burgerMenu from "../assets/burger-menu.svg";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 mb-3 bg-white py-4">
      <div className="container flex w-full items-center justify-between lg:px-0">
        <img src={watiLogo} alt="Wati Logo" className="w-[6.5rem] lg:w-36" />
        <ul className="relative -right-10 hidden justify-end text-lg font-bold lg:flex [&>li]:mx-[10px]">
          <li>Pricing</li>
          <li>Solutions</li>
          <li>Integrations</li>
          <li>Affiliate/Partners</li>
          <li>Blog</li>
        </ul>
        <div className="hidden gap-4 font-medium lg:flex">
          <a className="rounded-10 border-3 border-gray px-[10px] pb-1 pt-[8px] text-[15px]">
            Book Demo
          </a>
          <a className="button-effect relative -bottom-1 rounded-10 bg-green px-5 pb-[10px] pt-2 text-base">
            Free Trail
          </a>
        </div>
        <img src={burgerMenu} className="h-7 w-7 lg:hidden" alt="burger menu"></img>
      </div>
    </header>
  );
};

export default Header;
