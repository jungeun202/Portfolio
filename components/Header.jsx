import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-2 xl:py-8 text-#5b5b5b">
        <div className="container ml-2 flex justify-between items-center">
            {/* logo */}
            <Link href={"/"}>
                <img src="./logo.png" className="flex object-cover w-20 " alt="Jung's Profile" />
            </Link>
            {/* desktop nav */}
            <div className="hidden xl:flex items-center gap-8">
                <Nav/>
            </div>

            {/* mobile nav */}
            <div className="xl:hidden">
                <MobileNav/>
            </div>
            
        </div>
    </header>
    
  );
};
export default Header;
