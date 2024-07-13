import React from 'react'
import { Footer } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import iconImg from '../assets/Icon.png'

export default function Myfooter() {
  return (
    <div>
      <Footer container className=''>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div className='space-y-4'>
              <Footer.Brand
                href="https://flowbite.com"
                src={iconImg}
                alt="Flowbite Logo"
                name="NEXCENT"
              />
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Nexcent</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link href="https://github.com/">
                    Github
                  </Footer.Link>
                  <Footer.Link href="https://discord.com/">
                    Discord
                  </Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <div className="w-full sm:flex sm:items-center sm:justify-between mt-4">
            <Footer.Copyright
              href="#"
              by="Flowbite™"
              year={2022}
            />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon
                href="https://www.facebook.com/Flowbite-104136930885546"
                icon={BsFacebook}
              />
              <Footer.Icon
                href="https://www.instagram.com/flowbite/"
                icon={BsInstagram}
              />
              <Footer.Icon
                href="https://twitter.com/flowbite"
                icon={BsTwitter}
              />
              <Footer.Icon
                href="https://github.com/themesberg/flowbite"
                icon={BsGithub}
              />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  )
}
