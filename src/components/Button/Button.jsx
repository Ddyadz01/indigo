import styles from './button.module.scss'
export const Button = ({ children, variant = 'default', clickFn, width = '200' }) => {
  return (
    <button style={{ width: width + 'px' }} onClick={clickFn} className={styles[variant]}>
      {children}
    </button>
  )
}
