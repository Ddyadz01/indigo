import style from './calendar.module.scss'
import { INDICATORS_COLOR } from './constants'

export const EventsTable = ({ data }) => {
  return (
    <div className={style['calendar--page_events']}>
      <table>
        <thead>
          <tr>
            <th scope="col">Дата</th>
            <th scope="col">Время начала</th>
            <th scope="col">Время окончания</th>
            <th scope="col">Тип</th>
            <th scope="col">Важность</th>
            <th scope="col">Название</th>
          </tr>
        </thead>
        <tbody>
          {data.map((event) => (
            <tr>
              <td>{`${event.date.toLocaleDateString()}`}</td>
              <td>{event.timeStart}</td>
              <td>{event.timeEnd}</td>
              <td>{event.type}</td>
              <td className={style['circle--column']}>
                <span style={{ backgroundColor: INDICATORS_COLOR[event.status] }}></span>
                {event.status}
              </td>
              <td>{event.titleEvent + '. ' + event.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
