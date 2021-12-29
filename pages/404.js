import { useRouter } from 'next/router'
import Link from 'next/link'

import { Result, Button, BackTop } from 'antd'

import TheLayout from 'components/_App/TheLayout'

export default function Custom404() {
  const router = useRouter()

  return !router.asPath.startsWith('/dashboard') ? (
    // not inside the dashboard directory
    // return the basic 404 page
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={
        <Button type="primary">
          <Link href="/">Back Home</Link>
        </Button>
      }
    />
  ) : (
    // inside the dashboard directory
    // return the 404 page with a dashboard layout
    <TheLayout>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button type="primary">
            <Link href="/dashboard">Back Home</Link>
          </Button>
        }
      />
      <BackTop />
    </TheLayout>
  )
}
