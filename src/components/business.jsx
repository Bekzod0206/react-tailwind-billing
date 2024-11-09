import { features } from "../utils/constants"
import { layout, styles } from "../utils/style"
import Button from "./button"
import FeatureCard from "./feature-card"

function Business() {
  return (
    <section className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Improve business, <br className="sm:block hidden" /> let money to us
        </h2>
        <p className={`${styles.paragraph} mx-w-[550px] mt-5`}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem maxime reprehenderit, odit voluptatibus rerum nisi eos consequuntur veritatis alias mollitia?
        </p>
        <Button styles={'mt-10'} />
      </div>
      <div className={`${layout.sectionImage} flex-col`}>
        {features.map((feature, idx) => (
          <FeatureCard key={feature.id} {...feature} idx={idx} />
        ))}
      </div>
    </section>
  )
}

export default Business