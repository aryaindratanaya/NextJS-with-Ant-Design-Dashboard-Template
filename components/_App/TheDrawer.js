import Image from 'next/image'

import { Drawer } from 'antd'

import TheMenu from './TheMenu'

import s from 'styles/components/_App/TheSider.module.css'

export default function TheDrawer({ isDrawerVsbl, setDrawerVsbl }) {
  return (
    <Drawer
      placement="left"
      closable={false}
      onClose={() => setDrawerVsbl(false)}
      visible={isDrawerVsbl}
      width={200}
      bodyStyle={{ backgroundColor: '#001529', padding: 0 }}
    >
      <div className={s.logo}>
        <Image
          src="/images/white-logo.png"
          alt="Rentalann Logo"
          width={135}
          height={40}
        />
      </div>

      <TheMenu />
    </Drawer>
  )
}
