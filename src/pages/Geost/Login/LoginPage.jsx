import { CenterContent } from '../../../components/Index'

import { LoginPageForm } from './LoginPageForm'
import { LoginPagePreview } from './LoginPagePreview'

import styles from './login.module.scss'
export const LoginPage = () => {
  return (
    <div className={styles['login--page']}>
      <CenterContent>
        <LoginPagePreview />
        <LoginPageForm />
      </CenterContent>
    </div>
  )
}
