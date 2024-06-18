document.addEventListener("DOMContentLoaded", function () {
  const serviceDescriptions = document.querySelectorAll(
    ".block3-container-item",
  );

  // Функция для изменения описания услуги при наведении
  function changeDescription(event) {
    const item = event.currentTarget;
    const description = item.querySelector(".service-description");
    const originalText = description.innerHTML;
    const newData = item.getAttribute("data-description");

    if (newData) {
      description.innerHTML = newData;
    }

    // Восстанавливаем оригинальный текст при уходе курсора
    item.addEventListener("mouseout", function restoreOriginalText() {
      description.innerHTML = originalText;
      item.removeEventListener("mouseout", restoreOriginalText);
    });
  }

  // Навешиваем обработчики событий для каждой услуги
  serviceDescriptions.forEach((item) => {
    item.addEventListener("mouseover", changeDescription);
  });

  // Обработчик для плавного скроллинга при клике на ссылки в навигации
  document.querySelector("nav ul").addEventListener("click", function (event) {
    if (event.target.tagName === "A") {
      event.preventDefault();

      const targetId = event.target.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // Выполняем плавный скроллинг к целевому блоку
        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: "smooth",
        });
      }
    }
  });
});
