import { creditCard } from "../assets"
import { layout, styles } from "../utils/style"
import Button from "./button"

function Contract() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find the most valueable contract <br className="sm:block hidden"/> in a few steps
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam quod non eum itaque natus magni nobis dignissimos accusamus ducimus? Saepe.
        </p>
        <Button styles={'mt-10'}/>
      </div>
      <div className={layout.sectionImage}>
        <img src={creditCard} alt="card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  )
}

export default Contract