import { Button, Input, Select } from '../../../components/Index'
import style from './calendar.module.scss'
import { STATUS_ARRAY, TYPE_ARRAY } from './constants'

export const EventsForm = ({ setEvents, events }) => {
  return (
    <div className={style['calendar--page_form']}>
      <div className={style['calendar--page_line']}>
        <div className={style['calendar--page_label']}>
          <p>Время начала</p>
          <Select
            setEvents={setEvents}
            events={events}
            placeholder={'Выберите время'}
            nameSelect={'timeStart'}
            array={[
              { id: 1, value: '10:30' },
              { id: 2, value: '12:30' },
              { id: 3, value: '14:30' },
              { id: 4, value: '15:30' },
            ]}
          />
        </div>
        <div className={style['calendar--page_label']}>
          <p>Время окончания</p>
          <Select
            setEvents={setEvents}
            events={events}
            nameSelect={'timeEnd'}
            placeholder={'Выберите время'}
            array={[
              { id: 1, value: '10:30' },
              { id: 2, value: '12:30' },
              { id: 3, value: '14:30' },
            ]}
          />
        </div>
        <div className={style['calendar--page_label']}>
          <p>Название</p>
          <Input
            name={'titleEvent'}
            type={'text'}
            placeholder={'Название'}
            setEvents={setEvents}
            events={events}
          />
        </div>
      </div>
      <div className={style['calendar--page_line']}>
        <div className={style['calendar--page_label']}>
          <p>Тип</p>
          <Select
            setEvents={setEvents}
            events={events}
            nameSelect={'type'}
            placeholder={'Выбреите тип'}
            array={TYPE_ARRAY}
          />
        </div>
        <div className={style['calendar--page_label']}>
          <p>Важность</p>
          <Select
            nameSelect={'status'}
            setEvents={setEvents}
            events={events}
            placeholder={'Важность'}
            array={STATUS_ARRAY}
          />
        </div>
        <div className={style['calendar--page_label']}>
          <p>Целевая группа</p>
          <Button variant="default" width="400">
            Не выбрано
          </Button>
        </div>
      </div>
      <div className={style['calendar--page_line']}>
        <div className={style['calendar--page_label'] + ` ` + style['end']}>
          <p>Описание</p>
          <Input
            name={'description'}
            setEvents={setEvents}
            events={events}
            type={'text'}
            placeholder={'Описание'}
            element="textarea"
          />
        </div>
      </div>
    </div>
  )
}
