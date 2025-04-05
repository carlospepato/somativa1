import { useState } from "react"

const userAccess = {
  email: "carlos.pepato@pucpr.br",
  password: "123456"
}

export function App() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const handleAction = (event: React.FormEvent) => {
    event.preventDefault()
    console.log("Email:", email)
    console.log("Password:", password)

    if (email !== userAccess.email || password !== userAccess.password) {
      setMessage("Usuário ou senha incorretos!")
    }else{
      setMessage("Acessado com sucesso!")
    }
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl py-2">Login</h1>
      <div className="w-28">
        <form onSubmit={handleAction}>
          <div className="grid gap-2">
            <input 
              type="text" 
              className="border border-gray-300 rounded-md px-2 py-1"
              placeholder="Email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input 
              type="password"
              className="border border-gray-300 rounded-md px-2 py-1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="bg-emerald-400 px-4 py-2 rounded-md cursor-pointer">
              Login
            </button>
          </div>
        </form>
      </div>
      {<p>{message}</p>}
    </div>
  )
}
