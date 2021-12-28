import { useAuth } from 'libs/contexts/auth'

import { Layout, Menu, Dropdown, Avatar, Typography } from 'antd'
import {
  UserOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  MenuOutlined,
  SettingOutlined,
  LogoutOutlined,
} from '@ant-design/icons'

import s from 'styles/components/_App/TheHeader.module.css'

const { Header } = Layout

export default function TheHeader({
  isScreenBig,
  isSiderCllps,
  setSiderCllps,
  setDrawerVsbl,
}) {
  const { logout } = useAuth()

  return (
    <Header className={`${s.header} ${isScreenBig && s.headerSticky}`}>
      <div className={s.leftItems}>
        {isScreenBig ? (
          isSiderCllps ? (
            <MenuUnfoldOutlined onClick={() => setSiderCllps((v) => !v)} />
          ) : (
            <MenuFoldOutlined onClick={() => setSiderCllps((v) => !v)} />
          )
        ) : (
          <MenuOutlined onClick={() => setDrawerVsbl(true)} />
        )}
      </div>

      <div className={s.rightItems}>
        <Dropdown
          trigger={['click']}
          overlay={
            <Menu>
              <Menu.Item key="profile" icon={<UserOutlined />}>
                Profile
              </Menu.Item>
              <Menu.Item key="settings" icon={<SettingOutlined />}>
                Settings
              </Menu.Item>
              <Menu.Item
                key="logout"
                onClick={logout}
                icon={<LogoutOutlined />}
                danger
              >
                Logout
              </Menu.Item>
            </Menu>
          }
        >
          <Typography.Link>
            <Avatar src="https://joeschmoe.io/api/v1/random" />
          </Typography.Link>
        </Dropdown>
      </div>
    </Header>
  )
}
