import { useRouter } from 'next/router'

import { Card } from 'antd'

export default function Slug() {
  const router = useRouter()

  return (
    <Card
      title={`Title: ${router.query.slug}`}
    >{`Content: ${router.query.slug}`}</Card>
  )
}
