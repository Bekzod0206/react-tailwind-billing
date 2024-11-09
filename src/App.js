import { Billing, Business, Clients, Contract, CTA, Home, Navbar, Statistics, Testimonials } from "./components"
import { styles } from "./utils/style"

function App() {
  return (
    <div className="bg-black w-full overflow-hidden">
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Navbar />
        </div>
      </div>
      {/* Home section */}
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.container}`}>
          <Home />
        </div>
      </div>

      {/* new section */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.container}`}>
          <Statistics />
          <Contract />
          <Billing />
          <Business />
          <Testimonials />
          <Clients />
          <CTA />
          {/* Footer */}
        </div>
      </div>
      
    </div>
  )
}

export default App