import { discount, robot } from "../assets"
import { styles } from "../utils/style"
import Button from "./button"

function Home() {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>

      {/* Animation */}
      <div className={`flex-1 ${styles.flexStart} md:my-0 my-10 mr-10`}>
        <img src={robot} alt="robot" className="w-[100%] h-[100%] relative z-10 rounded-lg" />
      </div>

      {/* Information */}
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 relative`}>
        {/* Discount information */}
        <div className="flex flex-row items-center gap-2 py-[6px] px-4 rounded-[10px] mb-2 bg-slate-500 bg-discount-gradient">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]"/>
          <p className={`${styles.paragraph}`}>
            <span className="text-white">20% </span> Discount for <span className="text-white">1 Month</span> subscription
          </p>
        </div>

        {/* Title */}
        <div className="w-full">
          <h1 className={`${styles.heading1}`}>
            New generation <br />  <span className="text-gradient">Payment method</span>
          </h1>
        </div>

        {/* Description */}
        <p className={`${styles.paragraph} mt-5 max-w-[550px]`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora ducimus doloribus veniam omnis voluptatum veritatis ea consequatur tenetur itaque possimus.
        </p>

        {/* Start */}
        <Button styles={'mt-2'} />

        {/* Gradient background */}
        <div className="absolute z-0 w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-1 w-[80%] h-[80%] rounded-full bottom-40 white__gradient"/>
        <div className="absolute z-0 w-[50%] h-[55%] right-20 bottom-40 blue__gradient"/>
      </div>

    </section>
  )
}

export default Home