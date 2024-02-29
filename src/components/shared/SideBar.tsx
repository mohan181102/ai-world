"use client"

import { navLinks } from '@/constant'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const SideBar = () => {
    const pathname =usePathname()
    
  return (
    <aside className="sidebar hidden h-screen w-72 bg-white p-5 shadow-md  shadow-purple-200/50 lg:flex">
        <div className="flex w-full flex-col gap-4 items-center justify-center p-2">
            <Link href={"/"} className="sidebar-logo flex items-center gap-2 md:py-2">
                <text width={180} height={28} className=' w-full bg-blue-400 text-white h-10 px-8 flex items-center justify-center rounded-md'>ai world</text>
            </Link>
            <nav className="sidebar-nav  h-full flex-col  justify-between md:flex md:gap-4">
                <SignedIn>
                    <ul className="sidebar-nav_elements hidden w-full flex-col items-start gap-2 md:flex">
                        {navLinks.map((item)=>{
                            const isActive = item.route===pathname
                            return(
                                <li key={item.route} className={`sidebar-nav_element flex-center p-16-semibold w-full whitespace-nowrap rounded-full bg-cover  transition-all hover:bg-purple-100 hover:shadow-inner ${isActive? ' bg-blue-400 text-white ':'text-gray-700'}`}>
                                    <Link href={item.route} className="sidebar-link p-16-semibold flex size-full gap-4 p-4" >
                                        <p className={`${isActive && 'brightness-200'}`}>{item.label}</p>
                                    </Link>
                                </li>
                            )
                        })}
                        <li className={`sidebar-nav_element flex-center p-16-semibold cursor-pointer w-full whitespace-nowrap rounded-full bg-cover  transition-all hover:bg-purple-100 hover:shadow-inner `}>
                            <UserButton afterSignOutUrl={'/'} showName/>
                        </li>
                    </ul>

                
                         
                        
                    
                </SignedIn>
                <SignedOut>
                    <Link href={"/sign-in"}>
                        <button>Sign In</button>
                    </Link>
                </SignedOut>
            </nav>
        </div>
    </aside>
  )
}

export default SideBar

// transformations/add/restore