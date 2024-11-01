import $ from 'jquery';
import _ from 'lodash';

// Create paragraph element for Holberton Dashboard
$('body').append('<p>Holberton Dashboard</p>');
// Create paragraph element for Dashboard data
$('body').append('<p>Dashboard data for the students</p>');
// Create button element
$('body').append('<button>Click here to get started</button>');
// Create paragraph element with id count
$('body').append('<p id="count"></p>');
// Create copyright paragraph
$('body').append('<p>Copyright - Holberton School</p>');

let count = 0;

function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
}

// Bind the debounce function to the button click
$('button').on('click', _.debounce(updateCounter, 300));
