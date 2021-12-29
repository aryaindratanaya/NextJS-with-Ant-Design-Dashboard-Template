import Link from 'next/link'

import { Menu } from 'antd'
import {
  HomeOutlined,
  IdcardOutlined,
  DollarCircleOutlined,
  FormOutlined,
  DiffOutlined,
  CarOutlined,
} from '@ant-design/icons'

export default function TheMenu() {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" icon={<HomeOutlined />}>
        <Link href="/">Home</Link>
      </Menu.Item>
      <Menu.ItemGroup key="order" title="Order">
        <Menu.Item key="2" icon={<FormOutlined />}>
          <Link href="/dashboard/make-an-order">Make an order</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<DiffOutlined />}>
          <Link href="/dashboard/manage-orders">Manage orders</Link>
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup key="asset" title="Asset">
        <Menu.Item key="4" icon={<CarOutlined />}>
          <Link href="/dashboard/vehicles">Vehicles</Link>
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup key="office" title="Office">
        <Menu.Item key="5" icon={<IdcardOutlined />}>
          <Link href="/dashboard/employees">Employees</Link>
        </Menu.Item>
        <Menu.Item key="6" icon={<DollarCircleOutlined />}>
          <Link href="/dashboard/bills">Bills</Link>
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  )
}
