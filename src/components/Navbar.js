import Image from "next/image";
import Link from "next/link";
import { NAVLINKS } from "../../constants";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className=" h-12 font-semibold z-30 flex items-center">
      <Link href="/">
        <Image src="/namastelogo.png" alt="Namaste Logo" width={40} height={40} />
      </Link>
      <ul className="flex space-x-4 ml-4">
        {NAVLINKS.map((link) => (
          <li key={link.key}>
            <Link href={link.href} 
            className="font-bold"
            label={link.label}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Contact"
          variant="primary"
        />
      </div>
        <Image src="/hamburger.jpg"
        alt="Hamburger Menu"
        width={40}
        height={40} 
        className="inline-block cursor-pointer lg:hidden " />
    </nav>
  );
}

export default Navbar;
