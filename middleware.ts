import { withAuth } from "next-auth/middleware"

export default withAuth(
  // `withAuth` augments your `Request` with the user's token.
  function middleware(req) {
    console.log(req.nextauth.token)
  },
  {
    callbacks: {
      authorized: ({ token }) => { 
        console.log("role: ", token?.role);
        // return token?.role === "admin"
        return true;
    },
    },
  }
)

export const config = { matcher: ["/admin/:path*"] }