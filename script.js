// JavaScript to add interactivity to the boxes

// Select all the boxes
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');

// Add event listeners for hover effects
one.addEventListener('mouseenter', () => {
  one.style.transform = 'rotate(10deg)';  
  one.style.transition = 'transform 0.3s ease';
});

one.addEventListener('mouseleave', () => {
  one.style.transform = 'rotate(-5deg)'; 
});

two.addEventListener('mouseenter', () => {
  two.style.transform = 'rotate(15deg)'; 
  two.style.transition = 'transform 0.3s ease';
});

two.addEventListener('mouseleave', () => {
  two.style.transform = 'rotate(5deg)';  
});

// Animate the third box with more rotation
setInterval(() => {
  const randomRotation = Math.random() * 30; 
  three.style.transform = `rotate(${randomRotation}deg)`;
}, 1000);
