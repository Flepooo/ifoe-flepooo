"use client";

import Link from "next/link";

import { useTranslate } from "@/hooks/use-translate";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { PHONE_NUMBER } from "@/lib/constants";
import { LinkBtn } from "../ui/link-btn";

export const Footer = () => {
  const translate = useTranslate();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {translate("aboutCompany")}
            </h3>
            <p className="text-sm text-gray-400">
              {translate("aboutCompanyDescription")}{" "}
            </p>
            <LinkBtn
              href={"/exibition-form"}
              size="lg"
              className="mt-4 w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 rounded-md px-4 py-4 transition-all duration-300 group"
            >
              {translate("loginToF")}
            </LinkBtn>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">
              {translate("quickLinks")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  {translate("home")}
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  {translate("aboutUs")}
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gray-300">
                  {translate("specificService")}
                </Link>
              </li>

              <li>
                <Link href="/partners" className="hover:text-gray-300">
                  {translate("partners")}
                </Link>
              </li>

              <li>
                <Link href="/terms" className="hover:text-gray-300">
                  {translate("termsOfService")}
                </Link>
              </li>

              <li>
                <Link href="/privacy" className="hover:text-gray-300">
                  {translate("privacyPolicy")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              {translate("contactUs")}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>info@ifoe-sa.com</li>
              <li>
                <bdi>{PHONE_NUMBER}</bdi>
              </li>
              <li>{translate("mainAddress")}</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
