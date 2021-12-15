import Head from 'next/head'
import Image from 'rc-image'
import { useRouter } from 'next/router'

import { Form, Input, Button, Checkbox, Typography, Layout } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import s from 'styles/Login.module.css'

const { Text } = Typography
const { Footer } = Layout

export default function Login() {
  const router = useRouter()

  const onFinish = (values) => {
    console.log(values)
    router.push('/dashboard')
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={s.mainContent}>
        <div className={s.mainBanner}>
          <div className={s.logo}>
            <Image src="/images/logo.png" width={135} height={40} />
          </div>
          <div className={s.tagline}>
            <Text type="secondary">
              A full description or a short tag line of the app or the company
              goes here.
            </Text>
          </div>
        </div>

        <Form
          name="normal_login"
          className={s.loginForm}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className={s.loginFormForgot} href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              block
            >
              Log in
            </Button>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      </main>

      <Footer>© 2021 by Company Name</Footer>
    </div>
  )
}
