import { useState, useEffect } from 'react'
import Head from 'next/head'

import SignOut from '../components/sign-out'

function ClientProtected() {
  const [user, setUser] = useState(null)

  return (
    <div>
      <Head>
        <title>Authentication with Amplify, React Hook form and Tailwind CSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img className="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="Workflow" />
              {user && (
                <>
                  <h1 className="my-6 text-center text-3xl font-extrabold text-gray-900">
                    Welcome, {user.username}
                  </h1>
                  <SignOut />
                </>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ClientProtected
