import { useEffect, useState } from "react"
import { getUser } from "../api/api"

const UserProfile = () => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const gettingUser = async () => {
      try {
        const user = await getUser()
        console.log(user)
        setUser(user)
      } catch (error) {
        console.error("Foydalanuvchini olishda xatolik:", error)
      }
    }

    gettingUser()
  }, [])  // dependency array bo'sh - faqat bir marta chaqiriladi

  return (
    <div>
      <h1>{user.firstName}</h1>
    </div>
  )
}

export default UserProfile

