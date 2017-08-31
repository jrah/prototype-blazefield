  const box = document.querySelector('.carousel');
  const next = box.querySelector('.next');
  const prev = box.querySelector('.prev');
  const items = box.querySelectorAll('.content li');
  const amount = items.length;
  let counter = 0;
  let current = items[0];

  box.classList.add('active');

  function navigate(direction) {
    current.classList.remove('current');
    counter += direction;
    if (direction === -1 && counter < 0) {
      counter = amount - 1;
    }
    if (direction === 1 && !items[counter]) {
      counter = 0;
    }
    current = items[counter];
    current.classList.add('current');
  }

  navigate(0);

  next.addEventListener('click', () => {
    navigate(1);
  });
  prev.addEventListener('click', () => {
    navigate(-1);
  });
