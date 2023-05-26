
const contactForm = document.getElementById('contact-form');


contactForm.addEventListener('submit', function(event) {
  event.preventDefault(); 

  
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  
  if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
    alert('Please fill in all fields.');
    return;
  }

  
  nameInput.value = '';
  emailInput.value = '';
  messageInput.value = '';

  
  alert('Message sent successfully!');
});
