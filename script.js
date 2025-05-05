function showInfo(topic) {
  alert(`Has seleccionado el tema: ${topic}. ¡Explora más sobre este pilar del desarrollo web!`);
}

function redirectTo(topic) {
  let url = '';
  switch (topic) {
    case 'HTML':
      url = 'https://www.dreamhost.com/blog/es/aprender-html/';
      break;
    case 'CSS':
      url = 'https://developer.mozilla.org/es/docs/Learn_web_development/Getting_started/Your_first_website/Styling_the_content';
      break;
    case 'JavaScript':
      url = 'https://www.aprendejavascript.dev/';
      break;
    default:
      alert('Tema no encontrado.');
      return;
  }
  window.open(url, '_blank')
}

const darkModeToggle = document.getElementById('darkModeToggle');
if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
}