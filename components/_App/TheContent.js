import s from 'styles/components/_App/TheContent.module.css'

export default function TheContent({ children, isScreenBig }) {
  return (
    <div
      className={`${s.content} ${
        isScreenBig ? s.contentBigScr : s.contentSmallScr
      }`}
    >
      {children}
    </div>
  )
}
