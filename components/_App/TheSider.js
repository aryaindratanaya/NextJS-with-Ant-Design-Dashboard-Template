import Image from 'next/image'

import { Layout } from 'antd'

import TheMenu from './TheMenu'

import s from 'styles/components/_App/TheSider.module.css'

const { Sider } = Layout

export default function TheSider({ isSiderCllps }) {
  return (
    <Sider className={s.sider} collapsed={isSiderCllps} collapsedWidth={0}>
      <div className={s.logo}>
        <Image
          src="/images/white-logo.png"
          alt="Rentalann Logo"
          width={135}
          height={40}
        />
      </div>

      <TheMenu />
    </Sider>
  )
}
