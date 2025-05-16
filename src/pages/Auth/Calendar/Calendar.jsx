import Calendara from 'react-calendar'
import style from './calendar.module.scss'
import './calendra.scss'
import { useState, useEffect } from 'react'

export const CalendarPage = () => {
  const [value, setValue] = useState(new Date())
  const [months, setMonths] = useState([])
  const [activeMonthIndex, setActiveMonthIndex] = useState(1) // По умолчанию текущий месяц (индекс 1)
  const [calendarDate, setCalendarDate] = useState(new Date()) // Отдельное состояние для календаря

  // Инициализация месяцев при первой загрузке
  useEffect(() => {
    generateMonths(new Date())
  }, [])

  // Функция для генерации массива месяцев на основе выбранной даты
  const generateMonths = (selectedDate) => {
    const currentMonth = selectedDate.getMonth()
    const currentYear = selectedDate.getFullYear()

    // Создаем массив из 3 месяцев (предыдущий, текущий, следующий)
    const monthsArray = []

    // Предыдущий месяц
    const prevMonth = new Date(currentYear, currentMonth - 1, 1)
    monthsArray.push({
      name: formatMonth(prevMonth),
      date: new Date(prevMonth),
    })

    // Текущий месяц
    monthsArray.push({
      name: formatMonth(selectedDate),
      date: new Date(currentYear, currentMonth, 1),
      active: true,
    })

    // Следующий месяц
    const nextMonth = new Date(currentYear, currentMonth + 1, 1)
    monthsArray.push({
      name: formatMonth(nextMonth),
      date: new Date(nextMonth),
    })

    const nextMonthTwo = new Date(currentYear, currentMonth + 2, 1)
    monthsArray.push({
      name: formatMonth(nextMonthTwo),
      date: new Date(nextMonthTwo),
    })
    setMonths(monthsArray)
  }

  // Функция форматирования месяца
  const formatMonth = (date) => {
    const month = date.toLocaleString('ru', { month: 'long' })
    return month.charAt(0).toUpperCase() + month.slice(1)
  }

  // Обработчик клика по месяцу
  const handleMonthClick = (index) => {
    setActiveMonthIndex(index)

    // Получаем месяц и год из выбранного элемента массива
    const targetMonth = months[index].date.getMonth()
    const targetYear = months[index].date.getFullYear()

    // Создаем новую дату для календаря с первым числом выбранного месяца
    const newCalendarDate = new Date(targetYear, targetMonth, 1)
    setCalendarDate(newCalendarDate)

    // Если есть выбранная дата, обновляем её месяц и год
    if (value) {
      const newDate = new Date(value)
      newDate.setMonth(targetMonth)
      newDate.setFullYear(targetYear)

      // Проверяем, не выходит ли день за пределы месяца
      const lastDayOfMonth = new Date(targetYear, targetMonth + 1, 0).getDate()
      if (newDate.getDate() > lastDayOfMonth) {
        newDate.setDate(lastDayOfMonth)
      }

      setValue(newDate)
    }
  }

  // Обработчик изменения даты в календаре
  const handleDateChange = (newDate) => {
    setValue(newDate)

    // Проверяем, изменился ли месяц
    if (
      calendarDate.getMonth() !== newDate.getMonth() ||
      calendarDate.getFullYear() !== newDate.getFullYear()
    ) {
      // Обновляем дату календаря
      const newCalendarDate = new Date(newDate.getFullYear(), newDate.getMonth(), 1)
      setCalendarDate(newCalendarDate)

      // Обновляем массив месяцев
      generateMonths(newDate)

      // Устанавливаем активный индекс на текущий месяц (индекс 1)
      setActiveMonthIndex(1)
    }
  }

  return (
    <div className={style['calendar--page']}>
      {/* Отображение месяцев в ряд */}

      <div className={style['calendar--component']}>
        <div className={style['calendar--months']}>
          {months.map((month, index) => (
            <div
              key={index}
              className={`${style['calendar--month']} ${
                index === activeMonthIndex ? style['active'] : ''
              }`}
              onClick={() => handleMonthClick(index)}
            >
              {month.name}
            </div>
          ))}
        </div>
        <Calendara
          onChange={handleDateChange}
          value={value}
          activeStartDate={calendarDate} // Важно! Устанавливаем активный месяц для отображения
          showNavigation={false}
          formatMonthYear={(locale, date) => {
            // Форматирование месяца в нужном виде
            const month = date.toLocaleString('ru', { month: 'long' })
            return month.charAt(0).toUpperCase() + month.slice(1)
          }}
          formatDay={(locale, date) => date.getDate()} // Отображение только числа дня
          showNeighboringMonth={true} // Показывать дни соседних месяцев
          className="custom-calendar" // Добавляем класс для дополнительной стилизации
        />
      </div>
    </div>
  )
}
