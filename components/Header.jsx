import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Image from "next/image";

const Header = () => {
  return (
    <header className="py-2 xl:py-8 text-#5b5b5b">
        <div className="container ml-2 flex justify-between items-center">
            {/* logo */}
            <Link href={"/"}>
                <Image src="/assets/logo.png" width={80} height={80} className="flex object-cover" alt="Jung's Profile" />
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
