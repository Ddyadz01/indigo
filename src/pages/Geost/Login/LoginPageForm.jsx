import { Lock, Phone } from 'lucide-react'
import { Button } from '../../../components/Index'
import styles from './login.module.scss'

export const LoginPageForm = () => {
  return (
    <div className={styles['login--page_form']}>
      <LoginForm />
    </div>
  )
}

const LoginForm = () => {
  return (
    <form>
      <div className={styles['login--page_form-title']}>
        <h4>Вход</h4>
      </div>
      <FormInputs />
      <div className={styles['login--page_form-reset']}>
        <p>Я забыл пароль</p>
      </div>
      <Button variant={'primary'}>Войти</Button>
    </form>
  )
}

const FormInputs = () => {
  return (
    <div>
      <div className={styles['login--page_form-inputs']}>
        <div className={styles['input']}>
          <Phone />
          <input type="text" placeholder="Номер телефона" />
        </div>
        <div className={styles['input']}>
          <Lock />
          <input type="password" placeholder="Номер телефона" />
        </div>
      </div>
    </div>
  )
}
