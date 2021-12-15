import s from 'styles/components/_App/TheContent.module.css'

export default function TheContent({ children }) {
  return <div className={s.content}>{children}</div>
}
