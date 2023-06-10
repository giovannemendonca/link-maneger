import { ReactNode, createContext, useEffect, useState } from 'react'

export interface UserInteface {
  id: string
  createdAt: string
  email: string
  gravatarUrl: string
  name: string
}

export interface UserContextType {
  user: UserInteface | null
  handleSetUser: (user: UserInteface | null) => void
}
interface UserContextPrivideProps {
  children: ReactNode
}

export const UserContext = createContext({} as UserContextType)

export const UserContextPrivide = ({ children }: UserContextPrivideProps) => {

  const [user, setUser] = useState<UserInteface | null>(null)


  const handleSetUser = (user: UserInteface | null) => {
    setUser(user)
  }

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setUser(JSON.parse(user))
    }
  }, [])

  return (
    <UserContext.Provider
      value={{
        user,
        handleSetUser
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
