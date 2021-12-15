import { Layout } from 'antd'

import s from 'styles/components/_App/TheFooter.module.css'

const { Footer } = Layout

export default function TheFooter() {
  return (
    <Footer className={s.footer}>
      Rentalann ©{new Date().getFullYear()} by PT. Bale Teknologi Bali
    </Footer>
  )
}
