import React from 'react'
import { RouteComponentProps } from '@reach/router'
import Layout from 'components/Layout'
import { matrix } from 'matrix'

type IProps = RouteComponentProps

const Matrix: React.FC<IProps> = () => {
  console.log(matrix(6, 4))

  return (
    <Layout>
      <div>Matrix Page</div>
    </Layout>
  )
}

export default Matrix
