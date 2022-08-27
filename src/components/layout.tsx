import { Fragment } from 'react'
import Head from 'next/head'

interface LayoutProps {
  title: string
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => (
  <Fragment>
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <title>{title}</title>
    </Head>
    {children}
  </Fragment>
)

export default Layout
