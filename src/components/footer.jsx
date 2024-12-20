import { billing } from "../assets"
import { footerLinks, socialMedia } from "../utils/constants"
import { styles } from "../utils/style"
import FooterLinkCard from "./footer-link-card"

function Footer() {
  return (
    <div className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className={`flex-1 flex flex-col justify-start mr-10`}>
          <img src={billing} alt="billing" className={`w-[250px] h-[72px] object-contain`} />
          <p className={`${styles.paragraph} mt-4 max-w-[350px]`}>
            The new way of simplifying and truthify payments
          </p>
        </div>
        <div className={`flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10`}>
          {footerLinks.map((link, idx) => (
            <FooterLinkCard key={idx} {...link} />
          ))}
        </div>
      </div>

      <div className={`w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]`}>
        <p className={`font-montserrat font-normal text-center text-[18px] leading-[27px] text-white`}>
          Copyright © 2024 DragonPay. All rights reserved
        </p>

        <div className={`flex flex-row md:mt-0 mt-6`}>
          {socialMedia.map((item, idx) => (
            <img
              key={item.id}
              src={item.icon}
              alt={item.id}
              className={`w-[30px] h-[30px] object-contain cursor-pointer ${idx !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'}`}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

export default Footer