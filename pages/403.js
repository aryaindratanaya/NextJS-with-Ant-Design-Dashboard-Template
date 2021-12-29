import Link from 'next/link'

import { Result, Button } from 'antd'

export default function Custom403() {
  return (
    <Result
      status="403"
      title="403"
      subTitle="Sorry, you are not authorized to access this page."
      extra={
        <Button type="primary">
          <Link href="/">Login</Link>
        </Button>
      }
    />
  )
}
