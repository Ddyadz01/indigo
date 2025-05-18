import style from './input.module.scss'

export const Input = ({ type, placeholder, element = 'input', value, setValue, name }) => {
  const handleClickSelect = (newValue) => {
    setValue((prev) => ({
      ...prev,
      [name]: newValue,
    }))
  }
  if (element == 'input')
    return (
      <input
        value={value[name]}
        setValue={setValue}
        type={type}
        placeholder={placeholder}
        onChange={(e) => handleClickSelect(e.target.value)}
      />
    )
  return (
    <textarea
      value={value[name]}
      setValue={setValue}
      type={type}
      placeholder={placeholder}
      onChange={(e) => handleClickSelect(e.target.value)}
    />
  )
}
