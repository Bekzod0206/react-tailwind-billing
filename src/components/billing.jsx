import { appStore, billing, googleStore } from "../assets"
import { layout, styles } from "../utils/style"

function Billing() {
  return (
    <section id="product" className={layout.sectionReverse}>
      <div className={layout.sectionImageReverse}>
        <img src={billing} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        
        <div className="absolute z-[3] w-[50%] h-[50%] -left-1/2 rounded-full bottom-0 white__gradient"/>
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 rounded-full bottom-0 pink__gradient"/>
      </div>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Manage easily <br className="sm:block hidden"/> billing and factorial
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias maiores repudiandae dolorem. Neque aliquid quaerat provident beatae cupiditate necessitatibus veritatis?
        </p>

        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={appStore} alt="appStore" className="w-[129px] h-[150px] object-contain mr-5 cursor-pointer"/>
          <img src={googleStore} alt="googleStore" className="w-[129px] h-[150px] object-contain mr-5 cursor-pointer"/>
        </div>

      </div>
    </section>
  )
}

export default Billing