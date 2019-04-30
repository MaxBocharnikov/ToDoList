'use strict';
// В данном файле работам с localStorage
(function () {
    // Функция записывает все значения в storage
    window.setStorage = function () {
        var listItem = document.querySelectorAll('.list__item');  // Коллекция итемов To-Do
        var items = [];
        listItem.forEach(function (item) {
            var itemObj = {};
            var itemSpan = item.querySelector('span');
            itemObj.val = itemSpan.textContent;
            itemObj.done = item.getAttribute('done');

            items.push(itemObj);
        });
        localStorage.setItem('items', JSON.stringify(items));
    };

    // Функция получает данные из localStorage и отрисовывает их
    window.getStorage = function () {
      var items = JSON.parse(localStorage.getItem('items'));
      window.renderDataFromStorage(items);
    };

    // Функция очищает localStorage
    window.clearStorage = function () {
        localStorage.clear();
    };
})();