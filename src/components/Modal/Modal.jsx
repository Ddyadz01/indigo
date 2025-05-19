import { CalendarClock, X } from 'lucide-react'
import { Button, CenterContent, PageTitle } from '../Index'
import style from './modal.module.scss'

export const Modal = ({ children, setShowModal, title }) => {
  return (
    <div className={style['modal--ovarlay']}>
      <CenterContent>
        <div className={style['modal--content']}>
          <div className={style['modal--header']}>
            <div className={style['modal--header_left']}>
              <PageTitle border={false} text={title} icon={CalendarClock} />
            </div>
            <div className={style['modal--header_right']}>
              <Button clickFn={() => setShowModal((prev) => !prev)}>
                <X />
              </Button>
            </div>
          </div>
          <div className={style['modal--body']}>{children}</div>
        </div>
      </CenterContent>
    </div>
  )
}
