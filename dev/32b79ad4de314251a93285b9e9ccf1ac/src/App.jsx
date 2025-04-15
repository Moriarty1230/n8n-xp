import React from 'react'
import { Layout } from 'antd'
import { useRoutes } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import routes from './routes'

const { Content } = Layout

const App = () => {
  const element = useRoutes(routes)

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header />
      <Layout>
        <Sidebar />
        <Layout style={{ padding: '24px' }}>
          <Content>{element}</Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App