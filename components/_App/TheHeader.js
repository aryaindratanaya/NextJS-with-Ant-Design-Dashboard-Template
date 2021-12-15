import { Layout } from 'antd'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MenuOutlined,
} from '@ant-design/icons'

import s from 'styles/components/_App/TheHeader.module.css'

const { Header } = Layout

export default function TheHeader({
  isScreenBig,
  isSiderCllps,
  setSiderCllps,
  setDrawerVsbl,
}) {
  return (
    <Header className={`${s.header} ${isScreenBig && s.headerSticky}`}>
      {isScreenBig ? (
        isSiderCllps ? (
          <MenuUnfoldOutlined onClick={() => setSiderCllps((v) => !v)} />
        ) : (
          <MenuFoldOutlined onClick={() => setSiderCllps((v) => !v)} />
        )
      ) : (
        <MenuOutlined onClick={() => setDrawerVsbl(true)} />
      )}
    </Header>
  )
}
