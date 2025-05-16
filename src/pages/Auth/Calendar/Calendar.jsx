import { Calendar, CreativeCommons, PlusCircle } from 'lucide-react'
import { CalendarComponent } from '../../../components/Calendar/Calendar'
import style from './calendar.module.scss'
import { PageTitle } from '../../../components/PageTitle/PageTitle'
import { Button } from '../../../components/Index'

export const CalendarPage = () => {
  return (
    <div className={style['calendar--page']}>
      <PageTitle icon={Calendar} text={'Календарь событий'} />
      <CalendarComponent />
      <div className={style['calendar--page_buttons']}>
        {' '}
        <Button width="200" variant="primary">
          <PlusCircle /> Создать событие
        </Button>
      </div>
    </div>
  )
}
