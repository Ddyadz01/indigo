import { CenterContent } from '../Index'
import style from './header.module.scss'

export const Header = () => {
  return (
    <header>
      <CenterContent>
        <div className={style['header--content']}>
          <div className={style['header--element']}>
            <div className={style['header--notification_el']}>22</div>
            <img src="/icons/notification.png" />
          </div>
          <div className={style['header--element']}>
            <div className={style['header--settings_el']}>
              <p>Настройки</p>
            </div>
            <img src="/icons/setting.png" />
          </div>
          <div className={style['header--element']}>
            <div className={style['header--logout_el']}>
              <p>Выйти</p>
            </div>
            <img src="/icons/logout.png" />
          </div>

          <div className={style['header--element_account']}>
            <img src="/icons/avatar.png" />
            <h3>Грохова А.Н.</h3>
          </div>
        </div>
      </CenterContent>
    </header>
  )
}
