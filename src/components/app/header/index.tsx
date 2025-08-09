"use client"

import Link from "next/link"

import { usePathname } from "next/navigation"
import { useUser } from "@/hooks/use-user"

import { HeaderUserItems } from "./user-items"
import { HeaderGuestItems } from "./guest-items"
import { UserSidebar } from "./sheet"
import { AppLogo } from "../logo"
import { useTranslate } from "@/hooks/use-translate"
import { LanguageSwitcher } from "../language-switcher"
import { LinkBtn } from "@/components/ui/link-btn"
import { ArrowRight } from "lucide-react"

export const Header = () => {
  const translate = useTranslate()
  const user = useUser()
  const pathname = usePathname()
  const isActive = (path: string) => pathname === path

  return (
    <header className='bg-white shadow-sm border-b'>
      <div className='mx-auto px-10 py-6 flex items-center justify-between'>
        <AppLogo />

        <nav className='hidden lg:flex space-x-6'>
          <ul className='flex space-x-10 text-gray-600'>
            <li>
              <Link href='/' className={`${isActive("/") ? "text-blue-500" : "hover:text-gray-400"} ml-10`}>
                {translate("home")}
              </Link>
            </li>
            <li>
              <Link href='/about' className={`${isActive("/about") ? "text-blue-500" : "hover:text-gray-400"}`}>
                {translate("aboutUs")}
              </Link>
            </li>
            <li>
              <Link href='/blogs' className={`${isActive("/blogs") ? "text-blue-500" : "hover:text-gray-400"}`}>
                {translate("blogs")}
              </Link>
            </li>
            <li>
              <Link href='/services' className={`${isActive("/services") ? "text-blue-500" : "hover:text-gray-400"}`}>
                {translate("specificService")}
              </Link>
            </li>
            {/* <li>
              <Link
                href='/franchises'
                className={`${isActive("/franchises") ? "text-blue-500" : "hover:text-gray-400"}`}
              >
                {translate("franchises")}
              </Link>
            </li> */}
            <li>
              <Link href='/partners' className={`${isActive("/partners") ? "text-blue-500" : "hover:text-gray-400"}`}>
                {translate("partners")}
              </Link>
            </li>
            <li>
              <Link href='/contact' className={`${isActive("/contact") ? "text-blue-500" : "hover:text-gray-400"}`}>
                {translate("contactUs")}
              </Link>
            </li>
          </ul>
        </nav>

        <div className='flex items-center gap-2'>
          {/* <div className='hidden xl:block'>{user ? <HeaderUserItems /> : <HeaderGuestItems />}</div> */}
          <LinkBtn href={"/exibition-form"} size='lg' className='bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white border-0 rounded-md px-4 py-4 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all duration-300 group'>
            {translate("loginToF")}
          </LinkBtn>
          <LanguageSwitcher size='lg' className='px-2' />
          <UserSidebar />
        </div>
      </div>
    </header>
  )
}
