import { useState } from 'react'
import style from './select.module.scss'

export const Select = ({ array, setEvents, events, nameSelect, placeholder }) => {
  const [isShow, setShow] = useState(false)

  const handleClickSelect = (newValue) => {
    setEvents((prev) => ({
      ...prev,
      [nameSelect]: newValue,
    }))
  }

  return (
    <div className={style['select']} onClick={() => setShow(!isShow)}>
      {events[nameSelect] || placeholder}
      <div
        // style={isShow ? { height: array.length * 40 + 'px' } : {}}
        className={
          isShow ? style['select--options'] + ` ` + style['active'] : style['select--options']
        }
      >
        {array.map((arr) => (
          <div
            className={
              events[nameSelect] == arr.value
                ? style['select--option'] + ` ` + style['active']
                : style['select--option']
            }
            onClick={() => handleClickSelect(arr.value)}
          >
            {arr.value}
          </div>
        ))}
      </div>
    </div>
  )
}
