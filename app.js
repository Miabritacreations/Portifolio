document.getElementById('toggleDark').addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });
  
  document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    const response = await fetch('/submit-form', {
      method: 'POST',
      body: formData
    });
    if (response.ok) alert('Message sent!');
  });
  