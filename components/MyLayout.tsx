import * as React from 'react'
import { css } from '@emotion/core'
import Header from './Header'

const layoutStyle = css({
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
})


const Layout: React.FC = ({ children }) => (
  <div css={layoutStyle}>
    <Header />
    {children}
  </div>
)

export default Layout
