import "../styles/styles.css";
import { Source_Sans_3 } from 'next/font/google'
import { SessionProvider } from "next-auth/react"

const SourceSans3 = Source_Sans_3({subsets: ['latin']});

export default function App({ Component, session, pageProps }) {
  return  ( 
    <SessionProvider session={session}>
  <main className={SourceSans3.className}>
  <Component {...pageProps} />
  </main>
  </SessionProvider>
  );
}
