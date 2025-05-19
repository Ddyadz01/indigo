import { useEffect, useState } from 'react'

import { Button, CalendarComponent, Modal, PageTitle } from '../../../components/Index'

import { Calendar, PlusCircle } from 'lucide-react'

import { EventsTable } from './EventsTable'
import { EventsForm } from './EventsForm'

import style from './calendar.module.scss'

export const Events = () => {
  const [date, setDate] = useState(new Date())
  const [data, setData] = useState([])

  const [events, setEvents] = useState({
    timeStart: '',
    timeEnd: '',
    titleEvent: '',
    description: '',
    type: '',
    status: '',
    indicator: '',
  })
  const [isShowModal, setShowModal] = useState(false)

  useEffect(() => {
    setEvents((prev) => ({
      ...prev,
      date: date,
    }))
  }, [date])

  return (
    <>
      <div className={style['calendar--page']}>
        <PageTitle border={true} icon={Calendar} text={'Календарь событий'} />
        <div className={style['calendar--page_wrapper']}>
          <CalendarComponent date={date} setDate={setDate} />
          <div className={style['calendar--page_points']}>
            <EventsTable data={data} setShowModal={setShowModal} />
            <EventsForm events={events} setEvents={setEvents} />
          </div>
        </div>

        <div className={style['calendar--page_buttons']}>
          <Button
            width="200"
            variant="primary"
            clickFn={() => setData((prev) => [...prev, events])}
          >
            <PlusCircle /> Создать событие
          </Button>
        </div>
      </div>
      {isShowModal && (
        <Modal title={'Событие'} setShowModal={setShowModal}>
          Какой-то контнет
        </Modal>
      )}
    </>
  )
}
