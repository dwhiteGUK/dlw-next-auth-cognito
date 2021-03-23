import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    // Providers.Cognito({
    //   clientId: process.env.COGNITO_CLIENT_ID,
    //   clientSecret: process.env.COGNITO_CLIENT_SECRET,
    //   domain: process.env.COGNITO_DOMAIN,
    // }),
    Providers.Credentials({
      id: 'domain-login',
      name: "Domain Account",
      async authorize(credentials) {
        console.log('🚀 ~ file: [...nextauth].js ~ line 15 ~ authorize ~ credentials', credentials)
        const user = { /* add function to get user */ }
        return user
      },
    }),
  ],
  debug: process.env.NODE_ENV === 'development' ? true : false
})