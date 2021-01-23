var button = document.querySelector('button'),
    par = document.querySelectorAll('p'),
    heading = document.querySelector('h1');



button.onclick = function calculate() {
    'use strict';
    var input = document.querySelector('input').value,
        date = new Date(input),
        today = new Date(),
        res = today - date;
    
    
    
    if (res < 0) {
        res *= -1;
        heading.classList.add('show');
        heading.textContent = 'Your Event will start after';
    } else {
        heading.classList.add('show');
        heading.textContent = 'Your Age';
    }
    
    
    if (input === '') {
        heading.classList.add('show');
        heading.textContent = 'Empty Input';
    }
    
    
    
    var seconds = Math.floor(res / 1000),
        mins = Math.floor(seconds / 60),
        hours = Math.floor(mins / 60),
        days = Math.floor(hours / 24),
        months = Math.floor(days / 30),
        years = Math.floor(res / 1000 / 60 / 60 / 24 / 30 / 12);
    
    
    
    seconds %= 60;
    mins = mins %= 60;
    hours = hours %= 24;
    days = days %= 30;
    months = months %= 12;
    

    if (years < 10) {
      years = '0' + years; 
    }
  

    if (months < 10) {
      months = '0' + months;
    }
  
  if (days < 10) {
      days = '0' + days;
    }
  
  if (hours < 10) {
      hours = '0' + hours;
    }
  
  if (mins < 10) {
      mins = '0' + mins;
    }
  
  if (seconds < 10) {
      seconds = '0' + seconds;
    }
  
  
  
    if (isNaN(res)) {
        par[0].textContent = '';
        par[1].textContent = '';
        par[2].textContent = '';
        par[3].textContent = '';
        par[4].textContent = '';
        par[5].textContent = '';
    } else {
        par[0].textContent = years;
        par[1].textContent = months;
        par[2].textContent = days;
        par[3].textContent = hours;
        par[4].textContent = mins;
        par[5].textContent = seconds;
    }
    
    setTimeout(calculate, 1000);
};