import * as React from 'react'
import { css } from '@emotion/core'
import Link from 'next/link'

const HeaderStyle = css({
  a: {
    marginRight: 15
  }
})

const Header: React.FC = () => (
  <div css={HeaderStyle}>
    <Link href="/">
      <a>Home</a>
    </Link>
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
)

export default Header
