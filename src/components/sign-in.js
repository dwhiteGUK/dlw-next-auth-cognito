import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";
import { signIn } from 'next-auth/client'
export default function SignIn({ setStatus }) {
  const { register, handleSubmit } = useForm();
  const router = useRouter()

  async function login({ username, password }) {
    try {
      const res = signIn('domain-login', {
        username: username,
        password: password,
      })

      console.log(res)

      router.push('/client-protected')
    } catch (error) {
      console.log('error signing in', error);
    }
  }

  return (

    <form className="mt-8 space-y-6" onSubmit={handleSubmit(login)}>
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="username" className="sr-only">Username</label>
          <input ref={register} id="username" name="username" type="username" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Username" />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input ref={register} id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
        </div>
      </div>

      <div className="flex items-center justify-end">
        <div className="text-sm">
          <button
            className="font-medium text-indigo-600 hover:text-indigo-500"
            onClick={() => setStatus('register')}
          >
            Sign up for an account
          </button>
        </div>
      </div>

      <div>
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </span>
          Sign in
        </button>
      </div>
    </form>
  )
}
