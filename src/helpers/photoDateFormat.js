const dateFormat = dateString => {
 const date = new Date(dateString)
 const options = { year: 'numeric', month: 'long', day: 'numeric' }
 return date.toLocaleDateString('ru-RU', options)
}

export default dateFormat
