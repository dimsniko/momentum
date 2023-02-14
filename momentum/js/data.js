const time = document.querySelector('.time')
const data = document.querySelector('.date')

const showTime = () => {
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    setTimeout(showTime, 1000)
    time.textContent = currentTime

    const showDate = () => {
        const date2 = new Date()
        const options = {
            month: 'long',
            day: 'numeric',
            weekday: 'long'
        }
        const currentDate = date2.toLocaleDateString('ru-RU', options)
        data.textContent = currentDate    
    }
    showDate()
}
showTime()


