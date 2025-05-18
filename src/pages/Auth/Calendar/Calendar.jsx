import { Button, CalendarComponent, Input, PageTitle, Select } from '../../../components/Index'

import { Calendar, PlusCircle } from 'lucide-react'

import style from './calendar.module.scss'
import { useEffect, useState } from 'react'

export const CalendarPage = () => {
  const [value, setValue] = useState({
    timeStart: '',
    timeEnd: '',
    titleEvent: '',
    description: '',
    type: '',
    status: '',
  })

  useEffect(() => {
    console.log(value)
  }, [value])
  return (
    <div className={style['calendar--page']}>
      <PageTitle icon={Calendar} text={'Календарь событий'} />
      <div className={style['calendar--page_wrapper']}>
        <CalendarComponent />
        <div className={style['calendar--page_points']}>
          <div className={style['calendar--page_events']}>
            <table>
              <thead>
                <tr>
                  <th scope="col">Время начала</th>
                  <th scope="col">Длительность (мин.)</th>
                  <th scope="col">Тип</th>
                  <th scope="col">Важность</th>
                  <th scope="col">Название</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10:30</td>
                  <td>40</td>
                  <td></td>
                  <td className={style['circle--column']}>
                    <span></span>
                    Средний
                  </td>
                  <td>Прививка. Привести детей для...</td>
                </tr>
                <tr>
                  <td>10:30</td>
                  <td>40</td>
                  <td></td>
                  <td className={style['circle--column']}>
                    <span></span>Средний
                  </td>
                  <td>Прививка. Привести детей для...</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={style['calendar--page_form']}>
            <div className={style['calendar--page_line']}>
              <div className={style['calendar--page_label']}>
                <p>Время начала</p>
                <Select
                  setValue={setValue}
                  value={value}
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
                  setValue={setValue}
                  nameSelect={'timeEnd'}
                  value={value}
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
                  setValue={setValue}
                  value={value}
                />
              </div>
            </div>
            <div className={style['calendar--page_line']}>
              <div className={style['calendar--page_label']}>
                <p>Тип</p>
                <Select
                  setValue={setValue}
                  nameSelect={'type'}
                  placeholder={'Выбреите тип'}
                  value={value}
                  array={[
                    { id: 1, value: 'Прививка' },
                    { id: 2, value: 'Собрание' },
                    { id: 3, value: 'Кружок' },
                  ]}
                />
              </div>
              <div className={style['calendar--page_label']}>
                <p>Важность</p>
                <Select
                  nameSelect={'status'}
                  setValue={setValue}
                  value={value}
                  placeholder={'Важность'}
                  array={[
                    { id: 1, value: 'Высокая' },
                    { id: 2, value: 'Средняя' },
                    { id: 3, value: 'Низкая' },
                  ]}
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
                  setValue={setValue}
                  value={value}
                  type={'text'}
                  placeholder={'Описание'}
                  element="textarea"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style['calendar--page_buttons']}>
        <Button width="200" variant="primary">
          <PlusCircle /> Создать событие
        </Button>
      </div>
    </div>
  )
}
