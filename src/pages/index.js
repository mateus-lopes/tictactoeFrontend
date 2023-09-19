import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div>
        <h2>
          PAGINA INICIAL
        </h2>
        <p>
          Ambiente com nextjs
        </p>
      </div>
    </Layout>
  )
}
