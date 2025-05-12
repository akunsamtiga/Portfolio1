import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 md:px-10 xl:px-24 pt-20 pb-8 max-w-5xl xl:max-w-7xl mx-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Description */}
        <div>
          <h3 className="font-bold text-lg mb-2">Sanzy</h3>
          <p className="text-sm text-gray-400">
            Sanzy is a Product Designer who builds impactful visual experiences with a strategic perspective and a hint of artificial intelligence (AI).
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-4 text-gray-400">
            <Facebook size={18} className="hover:text-white cursor-pointer" />
            <Twitter size={18} className="hover:text-white cursor-pointer" />
            <Instagram size={18} className="hover:text-white cursor-pointer" />
            <Linkedin size={18} className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Address */}
        <div>
          <h4 className="font-semibold text-sm mb-2">Address</h4>
          <p className="text-sm text-gray-400">
            Techspace Park 75-91 Company, Indonesia Service across worldwide remote
          </p>
        </div>

        {/* Email */}
        <div>
          <h4 className="font-semibold text-sm mb-2">Email Address</h4>
          <p className="text-sm text-gray-400">hello@Sanzy.io</p>
          <p className="text-sm text-gray-400">marketing@Sanzy.io</p>
        </div>

        {/* Phone */}
        <div>
          <h4 className="font-semibold text-sm mb-2">Phone Number</h4>
          <p className="text-sm text-gray-400">0877 8787 4545</p>
          <p className="text-sm text-gray-400">021 8989 6767</p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="max-w-6xl mx-auto border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-500">© All rights reserved Sanzy</div>
        <div className="flex gap-6 text-sm text-gray-400">
          <a href="#" className="hover:text-white">Templates</a>
          <a href="#" className="hover:text-white">Tools</a>
          <a href="#" className="hover:text-white">Features</a>
          <a href="#" className="hover:text-white">About Us</a>
        </div>
      </div>
    </footer>
  );
}
