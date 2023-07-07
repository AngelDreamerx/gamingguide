var loader = document.querySelector('.loader');

setTimeout(() => {
  loader.classList.add('disppear');
  setTimeout(() => {
    loader.remove();
  }, 300); // Remove the loader element after 0.3 seconds (same duration as the animation)
}, 5000);