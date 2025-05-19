import style from './calendar.module.scss'
import { INDICATORS_COLOR } from './constants'

export const EventsTable = ({ data, setShowModal }) => {
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
            <tr onClick={() => setShowModal((prev) => !prev)}>
              <td>{`${event.date.toLocaleDateString()}`}</td>
              <td>{event.timeStart}</td>
              <td>{event.timeEnd}</td>
              <td>{event.type}</td>
              <td className={style['circle--column']}>
                <span style={{ backgroundColor: INDICATORS_COLOR[event.status] }}></span>
                {event.status}
              </td>
              <td>
                <p>{event.titleEvent + '. ' + event.description}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
