document.addEventListener("DOMContentLoaded", function () {
  const carouselInner = document.querySelector(".carousel-inner");
  const items = Array.from(carouselInner.children);

  // Dupliquer les éléments du carousel
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    carouselInner.appendChild(clone);
  });

  let scrollAmount = 0;

  function autoScroll() {
    scrollAmount -= 1; // Vitesse de défilement

    // Lorsque tout a défilé, on réinitialise
    if (Math.abs(scrollAmount) >= carouselInner.scrollWidth / 2) {
      scrollAmount = 0;
    }

    carouselInner.style.transform = `translateX(${scrollAmount}px)`;
    requestAnimationFrame(autoScroll);
  }

  autoScroll();
});
