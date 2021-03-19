import { useState } from 'react'
import { useRouter } from 'next/router'
export default function SignIn() {
  const router = useRouter()

  async function signOut() {
  }

  return (
    <button
      type="submit"
      className="group relative w-full flex justify-center py-2 px-4 border 
        border-transparent text-sm font-medium rounded-md 
        focus:outline-none focus:ring-2 
        focus:ring-offset-2 focus:ring-indigo-500
        text-white  bg-indigo-600 hover:bg-indigo-700"
      onClick={() => signOut()}
    >
      <span className="absolute left-0 inset-y-0 flex items-center pl-3">
        <svg
          className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
          fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
      </span>
      Sign Out
    </button>
  )
}
