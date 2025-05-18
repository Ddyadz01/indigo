import { useState } from 'react'
import style from './select.module.scss'

export const Select = ({ array, setValue, value, nameSelect, placeholder }) => {
  const [isShow, setShow] = useState(false)

  const handleClickSelect = (newValue) => {
    setValue((prev) => ({
      ...prev,
      [nameSelect]: newValue,
    }))
  }

  return (
    <div className={style['select']} onClick={() => setShow(!isShow)}>
      {value[nameSelect] || placeholder}
      <div
        style={isShow ? { height: array.length * 40 + 'px' } : {}}
        className={
          isShow ? style['select--options'] + ` ` + style['active'] : style['select--options']
        }
      >
        {array.map((arr) => (
          <div
            className={
              value[nameSelect] == arr.value
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
