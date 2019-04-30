'use strict';
// В данном файле работам с localStorage
(function () {
    // Функция отрисовывает данные из localStorage
    var renderDataFromStorage = function (items) {
        if (items) {
            items.forEach(function (item) {
                var renderItem = window.template.cloneNode(true);
                var renderSpan = renderItem.querySelector('span');
                var renderDel = renderItem.querySelector('svg');
                renderSpan.textContent = item.val;
                window.itemClickHandler(renderSpan);
                window.deleteItemHandler(renderDel);
                window.listItems.appendChild(renderItem);
                renderItem.setAttribute('done', item.done);
                if (item.done === 'true') {
                    renderItem.classList.add('done');
                }
            });
            window.onItemsChangeHandler();
        }
    };

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
      renderDataFromStorage(items);
    };

    // Функция очищает localStorage
    window.clearStorage = function () {
        localStorage.clear();
    };
})();