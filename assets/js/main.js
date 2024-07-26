// Init bootstrap Poppers
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
)
if (typeof bootstrap !== 'undefined') {
  const tooltipList = [...tooltipTriggerList].map(
    (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
  )
} else {
  console.error(
    'Bootstrap não está disponível. Verifique se você incluiu o arquivo bootstrap.js.'
  )
}

// Init lucide icons
if (lucide) {
  lucide.createIcons()
} else {
  console.log(
    'Lucide não está disponível. Verifique se você incluiu o arquivo lucide.js.'
  )
}
function showCalendar() {
  const calendar = document.getElementById('calendar')
  calendar.style.display = 'block'
}

document.addEventListener('click', function (event) {
  const calendar = document.getElementById('calendar')
  const datepickerInput = document.getElementById('datepicker')
  if (!calendar.contains(event.target) && event.target !== datepickerInput) {
    calendar.style.display = 'none'
  }
})
document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.querySelector('.carousel')
  const prevButton = document.getElementById('prev')
  const nextButton = document.getElementById('next')
  const itemWidth = document.querySelector('.feature-col-1').offsetWidth
  let currentPosition = 0

  nextButton.addEventListener('click', function () {
    if (
      currentPosition >
      -(carousel.children.length * itemWidth - carousel.offsetWidth)
    ) {
      currentPosition -= itemWidth
      carousel.style.transform = `translateX(${currentPosition}px)`
    }
  })

  prevButton.addEventListener('click', function () {
    if (currentPosition < 0) {
      currentPosition += itemWidth
      carousel.style.transform = `translateX(${currentPosition}px)`
    }
  })
})
$(document).ready(function () {
  var owlCarousel = $('.owl-carousel')

  if (owlCarousel.length > 0) {
    owlCarousel.owlCarousel({
      loop: true,
      margin: 20,
      responsiveClass: true,
      nav: false,
      dots: false,
      responsive: {
        0: {
          items: 1,
          nav: false,
          loop: true,
        },
        600: {
          items: 2,
          nav: false,
          loop: true,
        },
        1000: {
          items: 3,
          nav: false,
          loop: true,
        },
      },
    })
  }

  // var ctChart = $('.ct-chart')

  // if (ctChart.length > 0) {
  //   new Chartist.Line(
  //     '.ct-chart',
  //     {
  //       labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  //       series: [[5, 9, 7, 8, 5, 3, 5, 4.4, 8, 2, 0]],
  //     },
  //     {
  //       low: 0,
  //       showArea: true,
  //     }
  //   )
  // }
})

const data = {
  labels: [
    '01/01',
    '',
    '02/10',
    '',
    '03/04',
    '',
    '04/10',
    '',
    '05/10',
    '',
    '06/10',
    '',
    '07/12',
  ],
  datasets: [
    {
      label: '',
      data: [
        1.23, 1.25, 1.28, 1.36, 1.4, 1.42, 1.48, 1.38, 1.3, 1.35, 1.32, 1.34,
      ],
      borderColor: 'lightblue', // Altera a cor da linha para azul claro
      backgroundColor: 'rgba(173, 216, 230, 0.2)', // Cor de preenchimento
      borderWidth: 1,
      pointStyle: 'none', // Remove os pontos de dados
    },
  ],
}

const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Oculta a legenda
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Oculta as linhas verticais de fundo
        },
      },
      y: {
        grid: {
          display: true, // Mostra as linhas horizontais de fundo
          color: 'rgba(0, 0, 0, 0.05)', // Cor das linhas de grade
          borderWidth: 0.5, // Largura das linhas de grade
        },
        ticks: {
          callback: function (value, index, values) {
            return value.toFixed(2) * 100 // Fixa o número de casas decimais e multiplica por 100
          },
        },
      },
    },
    elements: {
      line: {
        fill: true, // Preenchimento abaixo da linha
      },
    },
  },
}

var myChart = new Chart(document.getElementById('myChart'), config)
