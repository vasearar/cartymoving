import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default async function Section2(){
  return(
    <div className='w-screen h-[891px] md:h-[460px] relative overflow-hidden'>
      <div className='h-full w-full skew-y-12 md:skew-y-3 translate-y-[86px] footer absolute top-0'>
        <div className='-skew-y-12 md:-skew-y-3 px-[10vw] xl:pl-[13.9vw] pt-16  xl:pr-[19.2vw] flex max-w-[1920px] mx-auto justify-center md:items-start md:justify-between flex-col md:flex-row'>
          <p className='text-xs md:text-base font-Montserrat font-medium text-mywhite absolute -bottom-20 left-[10vw] md:left-[13.9vw]'>Copyright © 2024 Cross Country Moving. All rights reserved </p>
          <Image alt='CartyMoving logo' src="/logo.png" width="153" height="54" className='footerLogo w-[153px] h-[54px] mb-16 md:mb-0'/>
          <div className='flex flex-col text-mywhite font-Barlow text-lg font-medium'>
            <p className='text-lg font-Russo_One mb-6'>OUR CONTACTS</p>
            <p>Mon - Sun: 9AM - 6PM</p>
            <p className='mt-4'>(800) - 000 - 0000</p>
            <p className='mt-4 mb-8 md:mb-0'>info@cartymoving.com</p>
          </div>
          <div className='flex flex-col text-mywhite font-Barlow text-lg font-medium'>
            <p className='text-lg font-Russo_One mb-6'>EXPLORE MORE</p>
            <Link href="#">Home</Link>
            <Link href="#" className='mt-4'>About Us</Link>
            <Link href="#" className='mt-4'>Contacts</Link>
            <Link href="#" className='mt-4 mb-8 md:mb-0'>Long Distance Move</Link>
          </div>
          <div className='hidden md:block'></div>
          <div className='text-mywhite'>
            <p className='text-lg font-Russo_One mb-6'>OUR SOCIALS</p>
            <div className='flex gap-2'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0281 2C14.1531 2.003 14.7241 2.009 15.2171 2.023L15.4111 2.03C15.6351 2.038 15.8561 2.048 16.1231 2.06C17.1871 2.11 17.9131 2.278 18.5501 2.525C19.2101 2.779 19.7661 3.123 20.3221 3.678C20.8308 4.17773 21.2243 4.78247 21.4751 5.45C21.7221 6.087 21.8901 6.813 21.9401 7.878C21.9521 8.144 21.9621 8.365 21.9701 8.59L21.9761 8.784C21.9911 9.276 21.9971 9.847 21.9991 10.972L22.0001 11.718V13.028C22.0025 13.7574 21.9948 14.4868 21.9771 15.216L21.9711 15.41C21.9631 15.635 21.9531 15.856 21.9411 16.122C21.8911 17.187 21.7211 17.912 21.4751 18.55C21.2243 19.2175 20.8308 19.8223 20.3221 20.322C19.8223 20.8307 19.2176 21.2242 18.5501 21.475C17.9131 21.722 17.1871 21.89 16.1231 21.94L15.4111 21.97L15.2171 21.976C14.7241 21.99 14.1531 21.997 13.0281 21.999L12.2821 22H10.9731C10.2433 22.0026 9.5136 21.9949 8.78408 21.977L8.59008 21.971C8.35269 21.962 8.11535 21.9517 7.87808 21.94C6.81408 21.89 6.08808 21.722 5.45008 21.475C4.78291 21.2241 4.17852 20.8306 3.67908 20.322C3.17003 19.8224 2.77619 19.2176 2.52508 18.55C2.27808 17.913 2.11008 17.187 2.06008 16.122L2.03008 15.41L2.02508 15.216C2.00665 14.4868 1.99831 13.7574 2.00008 13.028V10.972C1.99731 10.2426 2.00465 9.5132 2.02208 8.784L2.02908 8.59C2.03708 8.365 2.04708 8.144 2.05908 7.878C2.10908 6.813 2.27708 6.088 2.52408 5.45C2.77577 4.7822 3.1703 4.17744 3.68008 3.678C4.17923 3.16955 4.78327 2.77607 5.45008 2.525C6.08808 2.278 6.81308 2.11 7.87808 2.06C8.14408 2.048 8.36608 2.038 8.59008 2.03L8.78408 2.024C9.51327 2.00623 10.2427 1.99857 10.9721 2.001L13.0281 2ZM12.0001 7C10.674 7 9.40223 7.52678 8.46455 8.46447C7.52687 9.40215 7.00008 10.6739 7.00008 12C7.00008 13.3261 7.52687 14.5979 8.46455 15.5355C9.40223 16.4732 10.674 17 12.0001 17C13.3262 17 14.5979 16.4732 15.5356 15.5355C16.4733 14.5979 17.0001 13.3261 17.0001 12C17.0001 10.6739 16.4733 9.40215 15.5356 8.46447C14.5979 7.52678 13.3262 7 12.0001 7ZM12.0001 9C12.394 8.99993 12.7842 9.07747 13.1482 9.22817C13.5122 9.37887 13.8429 9.5998 14.1215 9.87833C14.4002 10.1569 14.6212 10.4875 14.772 10.8515C14.9229 11.2154 15.0005 11.6055 15.0006 11.9995C15.0006 12.3935 14.9231 12.7836 14.7724 13.1476C14.6217 13.5116 14.4008 13.8423 14.1223 14.121C13.8437 14.3996 13.513 14.6206 13.1491 14.7714C12.7851 14.9223 12.395 14.9999 12.0011 15C11.2054 15 10.4424 14.6839 9.87976 14.1213C9.31715 13.5587 9.00108 12.7956 9.00108 12C9.00108 11.2044 9.31715 10.4413 9.87976 9.87868C10.4424 9.31607 11.2054 9 12.0011 9M17.2511 5.5C16.9196 5.5 16.6016 5.6317 16.3672 5.86612C16.1328 6.10054 16.0011 6.41848 16.0011 6.75C16.0011 7.08152 16.1328 7.39946 16.3672 7.63388C16.6016 7.8683 16.9196 8 17.2511 8C17.5826 8 17.9005 7.8683 18.135 7.63388C18.3694 7.39946 18.5011 7.08152 18.5011 6.75C18.5011 6.41848 18.3694 6.10054 18.135 5.86612C17.9005 5.6317 17.5826 5.5 17.2511 5.5Z" fill="#F1F1F1"/>
              </svg>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.7778 2H4.22222C3 2 2 3 2 4.22222V19.7778C2 21.0011 3 22 4.22222 22H12V14.2222H9.77778V11.4722H12V9.19444C12 6.79 13.3467 5.10111 16.1844 5.10111L18.1878 5.10333V7.99778H16.8578C15.7533 7.99778 15.3333 8.82667 15.3333 9.59556V11.4733H18.1867L17.5556 14.2222H15.3333V22H19.7778C21 22 22 21.0011 22 19.7778V4.22222C22 3 21 2 19.7778 2Z" fill="#F1F1F1"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}