import { useState } from 'react'

import { Layout, Grid } from 'antd'

import TheSider from 'components/_App/TheSider'
import TheHeader from 'components/_App/TheHeader'
import TheContent from 'components/_App/TheContent'
import TheFooter from 'components/_App/TheFooter'
import TheDrawer from './TheDrawer'

import s from 'styles/components/_App/TheLayout.module.css'

const { useBreakpoint } = Grid

export default function TheLayout({ children }) {
  const [isSiderCllps, setSiderCllps] = useState(false)
  const [isDrawerVsbl, setDrawerVsbl] = useState(false)

  const screens = useBreakpoint()
  const isScreenBig = screens.lg || screens.xl || screens.xxl

  return (
    <Layout>
      {isScreenBig ? (
        <TheSider isSiderCllps={isSiderCllps} />
      ) : (
        <TheDrawer isDrawerVsbl={isDrawerVsbl} setDrawerVsbl={setDrawerVsbl} />
      )}

      <Layout
        className={isScreenBig && !isSiderCllps ? s.layout : s.layoutColapsed}
      >
        <TheHeader
          isScreenBig={isScreenBig}
          isSiderCllps={isSiderCllps}
          setSiderCllps={setSiderCllps}
          setDrawerVsbl={setDrawerVsbl}
        />
        <TheContent>{children}</TheContent>
        <TheFooter />
      </Layout>
    </Layout>
  )
}
