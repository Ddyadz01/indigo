import style from './title.module.scss'

export const PageTitle = (props) => {
  return (
    <div className={style['title--page']}>
      <props.icon />
      <h1>{props.text}</h1>
    </div>
  )
}
