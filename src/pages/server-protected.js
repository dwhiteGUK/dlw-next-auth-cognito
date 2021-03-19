function ServerProtected({ authenticated, username }) {
  if (!authenticated) {
    return <h1>Not authenticated</h1>
  }

  return <h1>{username}, SSR route</h1>
}

export async function getServerSideProps(context) {

  try {
    return {
      props: {
        authenticated: false,
      }
    }
  } catch (error) {
    return {
      props: {
        authenticated: false
      }
    }
  }
}

export default ServerProtected
