import style from './title.module.scss'

export const PageTitle = (props) => {
  return (
    <div
      className={style['title--page']}
      style={props.border ? { borderBottom: '2px solid var(--gray--border-color)' } : {}}
    >
      <props.icon />

      <h1>{props.text}</h1>
    </div>
  )
}
