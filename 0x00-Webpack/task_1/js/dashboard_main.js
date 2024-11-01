import $ from 'jquery';
import _ from 'lodash';

// Adding elements in the exact order specified
$('body').append('<p>Holberton Dashboard</p>');
$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');
$('body').append('<p>Copyright - Holberton School</p>');

// Counter variable
let count = 0;

// The updateCounter function exactly as specified
function updateCounter() {
    count++;
    $('#count').text(count + ' clicks on the button');
}

// Binding the debounce function to the button click
$('button').on('click', _.debounce(() => updateCounter(), 300));
