import { feedBack } from "../utils/constants"
import { styles } from "../utils/style"
import FeedbackCard from "./feedback-card"

function Testimonials() {
  return (
    <div className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
      <div className={`absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40`}></div>

      <div className={`w-full flex justify-between items-center md:flex-row flex-col md:mb-16 mb-5 relative z-[1]`}>
        <h2 className={styles.heading2}>
          What people think about us
        </h2>
        <div className={`w-full md:mt-0 mt-6`}>
          <p className={`${styles.paragraph} text-left max-w-[550px]`}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, recusandae molestiae error aspernatur atque a consectetur?
          </p>
        </div>
      </div>

      <div className={`flex flex-wrap sm:justify-start justify-center w-full relative z-[1]`}>
        {feedBack.map((item, idx) => (
          <FeedbackCard key={item.id} {...item}/>
        ))}
      </div>

    </div>
  )
}

export default Testimonials