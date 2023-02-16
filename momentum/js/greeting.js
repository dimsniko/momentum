const greeting = document.querySelector('.greeting')
const name = document.querySelector('.name')

const date = new Date()
const hours = date.getHours()

const getTimeOfDay = () => {
    if (hours >= 6 && hours < 12) {
       return 'morning'
    } else if (hours >= 12 && hours < 18) {
       return 'afternoon'
    } else if (hours >=18 && hours < 24) {
        return 'evening'
    }else return 'night'    
    
}       

export const showGreeting = () => {
    const greetingText = `Good ${getTimeOfDay()},`
    greeting.textContent = greetingText    

    function setLocalStorage() {
        localStorage.setItem('name', name.value)
    }
    window.addEventListener('beforeunload', setLocalStorage)

    function getLocalStorage() {
        if(localStorage.getItem('name')) {
            name.value = localStorage.getItem('name')
        }
    }
    window.addEventListener('load', getLocalStorage)    
}


