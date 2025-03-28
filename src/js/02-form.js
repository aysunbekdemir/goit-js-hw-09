const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

let formData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

form.elements.email.value = formData.email || '';
form.elements.message.value = formData.message || '';

form.addEventListener('input', (e) => {
  formData[e.target.name] = e.target.value.trim();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!form.elements.email.value || !form.elements.message.value) {
    return alert('Lütfen tüm alanları doldurun!');
  }

  console.log({
    email: form.elements.email.value,
    message: form.elements.message.value,
  });

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
  formData = {};
});
