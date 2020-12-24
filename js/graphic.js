var ctx = document.getElementById('myChart1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['USD', 'RUB', 'Top Coin'],
        datasets: [{
            label: 'Доход за сегодня',
            backgroundColor: ['rgba(255, 175, 54, 1)', 'rgba(252, 97, 139, 1)', 'rgba(255, 129, 69, 1)'],
            borderColor: 'rgb(255, 255, 255)',
            data: [80, 10, 5]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['USD', 'RUB', 'Top Coin'],
        datasets: [{
            label: 'Доход за сегодня',
            backgroundColor: ['rgba(255, 175, 54, 1)', 'rgba(252, 97, 139, 1)', 'rgba(255, 129, 69, 1)'],
            borderColor: 'rgb(255, 255, 255)',
            data: [80, 10, 5]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx = document.getElementById('myChart3').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['USD', 'RUB', 'Top Coin'],
        datasets: [{
            label: 'Доход за сегодня',
            backgroundColor: ['rgba(255, 175, 54, 1)', 'rgba(252, 97, 139, 1)', 'rgba(255, 129, 69, 1)'],
            borderColor: 'rgb(255, 255, 255)',
            data: [80, 10, 5]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx = document.getElementById('myChart4').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['USD', 'RUB', 'Top Coin'],
        datasets: [{
            label: 'Доход за сегодня',
            backgroundColor: ['rgba(255, 175, 54, 1)', 'rgba(252, 97, 139, 1)', 'rgba(255, 129, 69, 1)'],
            borderColor: 'rgb(255, 255, 255)',
            data: [80, 10, 5]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx = document.getElementById('myChart5').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
        datasets: [{
            label: 'Доход за год',
            backgroundColor: 'rgba(255, 175, 54, 1)',
            borderColor: 'rgba(255, 175, 54, 1)',
            data: [0, 10, 5, 2, 20, 30, 45]
        }]
    },

    // Configuration options go here
    options: {}
});
