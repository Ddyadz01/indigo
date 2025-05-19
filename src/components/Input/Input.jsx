import style from './input.module.scss'

export const Input = ({ type, placeholder, element = 'input', setEvents, events, name }) => {
  const handleClickSelect = (newValue) => {
    setEvents((prev) => ({
      ...prev,
      [name]: newValue,
    }))
  }
  if (element == 'input')
    return (
      <input
        value={events[name]}
        type={type}
        placeholder={placeholder}
        onChange={(e) => handleClickSelect(e.target.value)}
      />
    )
  return (
    <textarea
      value={events[name]}
      type={type}
      placeholder={placeholder}
      onChange={(e) => handleClickSelect(e.target.value)}
    />
  )
}
