document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (event2) => {
      event2.preventDefault();
      document.querySelector(event2.currentTarget.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
      });
    });
  });
  