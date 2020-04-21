//DOM elements used to resize chart
let chart = document.querySelector('.chart')
let chartName = document.querySelector('.chart-name')
let fullscreen = document.querySelector('.resize-img')
let total = document.querySelector('.total')

//Constantes used to change DOM elements
const imgUrl = 'http://128.199.49.98/simpleapi/get_cpuload.php'
const queryParams = 'width=3600&img_width=700&img_height=400'

const fullscreenUrl = './img/full_screen.jpg'
const exitFullscreenUrl = './img/exit_full_screen.png'
const title = 'System Total'
const fullscreenTitle = 'CPU Utilization (All cores)'

chart.src = `${imgUrl}?${queryParams}`

console.log('window.innerHeight', window.innerHeight)

//Function to resize the chart
const resizeChart = () => {
    if (chart.classList.contains('fullscreen')) {
        chart.classList.remove('fullscreen')
        fullscreen.src = fullscreenUrl
        total.innerHTML = title
        chart.src = `${imgUrl}?${queryParams}`
    } else {
        chart.classList.add('fullscreen')
        fullscreen.src = exitFullscreenUrl
        total.innerHTML = fullscreenTitle

        // (viewport height * 95% - header height) it makes to avoid scroll
        chart.src = `${imgUrl}?width=3600&img_width=${window.innerWidth * 0.9}&img_height=${window.innerHeight * 0.95 -180}`
    }
}

fullscreen.addEventListener('click', resizeChart)
chartName.addEventListener('click', resizeChart)

chart.addEventListener('dblclick', resizeChart)