import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function AboutPage() {
  return (
    <Layout>
    <Head>
      <title>bout Paaaage</title>
    </Head>
    <h1>About Paaaage</h1>
    <h2>
      <Link href="/">
        <a>Back to home</a>
      </Link>
    </h2>
    </Layout>
  )
}