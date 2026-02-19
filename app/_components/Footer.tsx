import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#101828] py-16 text-white w-[1101px] mx-auto px-8">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="mb-6 text-lg font-bold">INFNOVA Academy</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Empowering learners worldwide with cutting-edge technology
              courses. Start your journey to success with expert-led training.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-gray-300">
              Quick Links
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/courses"
                  className="hover:text-white transition-colors"
                >
                  Courses
                </Link>
              </li>
              <li>
                <Link
                  href="/instructors"
                  className="hover:text-white transition-colors"
                >
                  Instructors
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-gray-300">
              Support
            </h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <Link
                  href="/help"
                  className="hover:text-white transition-colors"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact - Placeholder for logo or socials */}
          <div className="flex flex-col items-start md:items-end">
            {/* Logo placeholder as seen in your screenshot footer */}
            <div className="mt-auto pt-8">
              <span className="text-xs text-gray-500">
                © 2025 INFNOVA Technologies. All rights reserved.
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center text-xs text-gray-500">
          <p>© 2025 INFNOVA Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
