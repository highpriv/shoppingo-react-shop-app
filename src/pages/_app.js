import "../styles/styles.css";
import { Source_Sans_3 } from 'next/font/google'

const SourceSans3 = Source_Sans_3({subsets: ['latin']});

export default function App({ Component, pageProps }) {
  return  ( <main className={SourceSans3.className}>
  <Component {...pageProps} />
  </main>);
}
