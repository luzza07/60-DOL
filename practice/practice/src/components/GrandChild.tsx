import { useContext } from "react"
import { UserContext } from "../Contexts/UserContext"

const GrandChild = () => {
  const user=useContext(UserContext)

  return (
    <div>
      <h1>Grandchild</h1>
      <p>
        Name{user.name}
      </p>
    </div>
  )
}

export default GrandChild