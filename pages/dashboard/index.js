import { Row, Col, Card } from 'antd'

export default function Dashboard() {
  return (
    <Row gutter={[10, 10]}>
      <Col span={12}>
        <Card title="title">Content</Card>
      </Col>
      <Col span={12}>
        <Card title="title">Content</Card>
      </Col>
    </Row>
  )
}
