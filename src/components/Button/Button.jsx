import styles from './button.module.scss'
export const Button = ({ children, variant = 'default', clickFn }) => {
  return (
    <button onClick={clickFn} className={styles[variant]}>
      {children}
    </button>
  )
}
