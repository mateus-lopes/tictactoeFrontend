import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={utilStyles.textCenter}>
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
