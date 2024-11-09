import { clients } from "../utils/constants"
import { styles } from "../utils/style"
import ClientCard from "./client-card"

function Clients() {
  return (
    <div id="clients" className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} w-full flex-wrap`}>
        {clients.map(client => (
          <ClientCard key={client.id} logo={client.logo} />
        ))}
      </div>
    </div>
  )
}

export default Clients