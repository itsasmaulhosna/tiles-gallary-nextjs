import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10 rounded-md">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold mb-3">Tiles Gallery</h2>
          <p className="text-gray-400 text-sm">
            Discover premium tile designs and modern aesthetics for your space.
          </p>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/all-photos">All Tiles</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li><Link href="/login">Login</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <p className="text-gray-400 text-sm">
            Email: support@tilesgallery.com
          </p>
          <p className="text-gray-400 text-sm">
            Phone: +880 1234 567 890
          </p>

          
          <div className="flex gap-4 mt-4 text-xl">
            <Link href="#"><FaFacebook className="hover:text-blue-500" /></Link>
            <Link href="#"><FaInstagram className="hover:text-pink-500" /></Link>
            <Link href="#"><FaTwitter className="hover:text-sky-400" /></Link>
            <Link href="#"><FaGithub className="hover:text-gray-300" /></Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 text-center py-4 text-gray-500 text-sm">
        © {new Date().getFullYear()} Tiles Gallery. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;