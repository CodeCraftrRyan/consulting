  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
  // hero reveals on load
  window.addEventListener('load', () => {
    document.querySelectorAll('.hero .reveal').forEach((el) => el.classList.add('in'));
  });
