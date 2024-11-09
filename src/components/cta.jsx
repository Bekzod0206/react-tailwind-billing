import { styles } from "../utils/style"
import Button from "./button"

function CTA() {
  return (
    <div className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-dark-gradient rounded-[20px] box-shadow`}>
      <div className="flex flex-1 flex-col">
        <h2 className={`${styles.heading2}`}>Try services!</h2>
        <p className={`${styles.paragraph} max-w-[550px]`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam a natus nulla velit voluptatibus.
        </p>
      </div>

      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </div>
  )
}

export default CTA