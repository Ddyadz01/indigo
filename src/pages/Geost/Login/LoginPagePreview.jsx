import styles from './login.module.scss'

export const LoginPagePreview = () => {
  return (
    <div className={styles['login--page_text']}>
      <h1>INDIGO</h1>
      <p>
        Программа для дошкольных <br /> образовательных организаций
      </p>
    </div>
  )
}
