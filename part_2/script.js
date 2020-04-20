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

//Function to resize the chart
const resizeChart = (element) => {
    if (chart.classList.contains('fullscreen')) {
        chart.classList.remove('fullscreen')
        fullscreen.src = fullscreenUrl
        total.innerHTML = title
    } else {
        chart.classList.add('fullscreen')
        fullscreen.src = exitFullscreenUrl
        total.innerHTML = fullscreenTitle
    }
}

fullscreen.addEventListener('click', resizeChart)
chartName.addEventListener('click', resizeChart)

chart.addEventListener('dblclick', resizeChart)