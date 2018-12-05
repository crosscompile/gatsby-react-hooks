import React, { useState } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'

const IndexPage = () => {
  const [count, setCount] = useState(0)

  return (
    <Layout>
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div>
        <p>
          <b>Count: {count}</b>
        </p>
        <button onClick={() => setCount(count + 1)}> +1</button>
        <button onClick={() => setCount(count - 1)}> -1</button>
      </div>
      <div style={{ maxWidth: '300px', marginBottom: '1.45rem' }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
