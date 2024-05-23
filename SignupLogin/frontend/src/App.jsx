import SignupCard from './signup/Signup'
import LoginCard from './login/Login'
function App() {
  const user = true
  return (
    <div className="h-full bg-black flex items-center justify-center">
      {user ? <LoginCard /> : <SignupCard />}
    </div>
  )
}

export default App
