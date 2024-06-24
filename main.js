document.addEventListener("DOMContentLoaded", function () {
  const serviceDescriptions = document.querySelectorAll(
    ".block3-container-item",
  );
  const consultationButton = document.getElementById("consultationButton");

  if (consultationButton) {
    // Присваиваем действие кнопке
    consultationButton.addEventListener("click", function () {
      if (isMobileDevice()) {
        window.location.href = "tel:+375-29-348-23-59";
      } else {
        window.location.href = "https://t.me/+375293482359";
      }
    });
  }

  // Функция для изменения описания услуги при наведении
  function changeDescription(event) {
    const item = event.currentTarget;
    const description = item.querySelector(".service-description");
    const originalText = description.innerHTML;
    const newData = item.getAttribute("data-description");

    if (newData) {
      description.innerHTML = newData;
    }

    // Функция для восстановления оригинального текста при уходе курсора
    function restoreOriginalText() {
      description.innerHTML = originalText;
    }

    item.addEventListener("mouseleave", restoreOriginalText, { once: true });
  }

  // Навешиваем обработчики событий для каждой услуги
  serviceDescriptions.forEach((item) => {
    item.addEventListener("mouseenter", changeDescription);
  });

  // Обработчик для плавного скроллинга при клике на ссылки в навигации
  const navLinks = document.querySelectorAll("nav ul a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = event.target.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  // Функция для определения типа устройства
  function isMobileDevice() {
    return /Mobi|Android|iPhone|iPad|iPod|Windows Phone/i.test(
      navigator.userAgent,
    );
  }
});
