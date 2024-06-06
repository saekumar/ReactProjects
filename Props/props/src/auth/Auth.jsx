import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react'
import { useUser } from '@clerk/clerk-react'
export default function Auth() {
  const user = useUser()
  console.log(user.user)
  return (
    <header>
      <SignedOut>
        <SignIn />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  )
}
