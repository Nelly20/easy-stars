var ctx = document.getElementById('myChart1').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['USD', 'RUB', 'Top Coin', 'Lead Coin'],
        datasets: [{
            label: 'Доход за сегодня',
            backgroundColor: ['rgba(255, 175, 54, 1)', 'rgba(252, 97, 139, 1)', 'rgba(130, 76, 248, 1)', 'rgba(255, 129, 69, 1)'],
            borderColor: 'rgb(255, 255, 255)',
            data: [80, 60, 45, 90]
        }]
    },

    // Configuration options go here
    options: {}
});

var ctx = document.getElementById('myChart2').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'],
        datasets: [{
            label: 'Доход за декабрь',
            backgroundColor: ['rgba(130, 76, 248, 1)', 'rgba(255, 175, 54, 1)', 'rgba(252, 97, 139, 1)', 'rgba(255, 129, 69, 1)', 'rgba(130, 76, 248, 1)', 'rgba(255, 175, 54, 1)', 'rgba(252, 97, 139, 1)', 'rgba(255, 129, 69, 1)'],
            borderColor: 'rgb(255, 255, 255)',
            data: [8000, 6000, 4500, 9000, 6700, 9800, 4300, 2600]
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
        labels: ['USD', 'RUB', 'Top Coin', 'Lead Coin'],
        datasets: [{
            label: 'Доход за сегодня',
            backgroundColor: ['rgba(255, 175, 54, 1)', 'rgba(252, 97, 139, 1)', 'rgba(130, 76, 248, 1)', 'rgba(255, 129, 69, 1)'],
            borderColor: 'rgb(255, 255, 255)',
            data: [80, 50, 40, 75]
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
        labels: ['USD', 'RUB', 'Top Coin', 'Lead Coin'],
        datasets: [{
            label: 'Доход за сегодня',
            backgroundColor: ['rgba(255, 175, 54, 1)', 'rgba(252, 97, 139, 1)', 'rgba(130, 76, 248, 1)', 'rgba(255, 129, 69, 1)'],
            borderColor: 'rgb(255, 255, 255)',
            data: [80, 50, 40, 75]
        }]
    },

    // Configuration options go here
    options: {}
});


var ctx = document.getElementById('myChart5').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'doughnut',

    // The data for our dataset
    data: {
        labels: ['USD', 'RUB', 'Top Coin', 'Lead Coin'],
        datasets: [{
            label: 'Доход за сегодня',
            backgroundColor: ['rgba(255, 175, 54, 1)', 'rgba(252, 97, 139, 1)', 'rgba(130, 76, 248, 1)', 'rgba(255, 129, 69, 1)'],
            borderColor: 'rgb(255, 255, 255)',
            data: [80, 50, 40, 75]
        }]
    },

    // Configuration options go here
    options: {}
});
