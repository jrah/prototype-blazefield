const lightboxItems = document.querySelectorAll('.lightbox__item');

function toggleLightbox(event) {
  event.stopPropagation();
  event.preventDefault();

  const body = document.body;
  const thisItemSrc = event.target.style.backgroundImage.slice(4, -1);
  const thisItem = thisItemSrc.replace(/"/g, '');
  const fullView = document.createElement('div');
  const overlay = document.createElement('div');
  const viewContent = document.createElement('img');

  body.insertBefore(fullView, event.firstChild);
  body.insertBefore(overlay, body.firstChild);
  fullView.append(viewContent);
  fullView.classList.add('lighbox__item--fullview');
  overlay.classList.add('overlay');
  body.classList.add('overflow-hidden', 'pointer');
  viewContent.setAttribute('src', thisItem);

  body.addEventListener('click', () => {
    overlay.remove();
    fullView.remove();
    body.classList.remove('fixed', 'overflow-hidden', 'pointer');
  });
}


for (let i = 0; i < lightboxItems.length; i += 1) {
  const lightboxItem = lightboxItems[i];
  lightboxItem.addEventListener('click', toggleLightbox);
}
