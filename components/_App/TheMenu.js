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
        Home
      </Menu.Item>
      <Menu.ItemGroup key="order" title="Order">
        <Menu.Item key="2" icon={<FormOutlined />}>
          Make an order
        </Menu.Item>
        <Menu.Item key="3" icon={<DiffOutlined />}>
          Manage orders
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup key="asset" title="Asset">
        <Menu.Item key="4" icon={<CarOutlined />}>
          Vehicles
        </Menu.Item>
      </Menu.ItemGroup>
      <Menu.ItemGroup key="office" title="Office">
        <Menu.Item key="5" icon={<IdcardOutlined />}>
          Employees
        </Menu.Item>
        <Menu.Item key="6" icon={<DollarCircleOutlined />}>
          Bills
        </Menu.Item>
      </Menu.ItemGroup>
    </Menu>
  )
}
