import Head from 'next/head'
import { signOut, useSession } from 'next-auth/client'

import Link from 'next/link'

function ClientProtected() {
  const [session, loading] = useSession()

  return (
    <div>
      <Head>
        <title>Authentication with Amplify, React Hook form and Tailwind CSS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8  flex items-center flex-col">
            <a>
              <div className="flex-shrink-0 flex items-center bg-orange-500 h-20 w-20 border-radius p-2 font-bold text-4xl">
                dlw
              </div>
            </a>
            <h1 className="my-6 text-center text-3xl font-extrabold text-gray-900">Client Protected</h1>
            <nav>
              <Link href="/">
                <a className="text-orange-500 hover:bg-black hover:text-white">Home</a>
              </Link>
            </nav>
            <div className="prose">
              <p>Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed <strong>eget risus enim</strong>. Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default ClientProtected
