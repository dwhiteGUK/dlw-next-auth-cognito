import { useState } from 'react'
import Head from 'next/head'
import { useSession } from 'next-auth/client'

import Register from '../components/register'
import SignIn from '../components/sign-in'
import Confirm from '../components/confirm'

export default function Home() {
  const [session, loading] = useSession()
  const [status, setStatus] = useState('sign-in')
  const [user, setUser] = useState(null)

  return (
    <div>
      <Head>
        <title>Authentication with NextAuth.js, React Hook form and Tailwind CSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {!session && <>
          Not signed in <button onClick={() => signIn()} type="button">Sign in</button>
        </>}

        {session && <>
          Signed in as {session.user.email} <button onClick={() => signOut()} type="button">Sign out</button>
        </>}

        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Example NextAuth Sign In
              </h2>
            </div>

            {status === 'sign-in' ? <SignIn setStatus={setStatus} /> : null}
            {status === 'register' ? <Register setStatus={setStatus} setUser={setUser} /> : null}
            {status === 'confirm' ? <Confirm setUser={setUser} user={user} /> : null}
          </div>
        </div>
      </main>
    </div>
  )
}
