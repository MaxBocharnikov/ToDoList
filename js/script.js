'use strict';
// В данном файле храним все перемены и события на них
(function () {
    var list = document.querySelector('.list'); // собственно сам лист

    window.additional__field = list.querySelector('.list__add-field'); // блок ввода To-Do
    window.additional__input = list.querySelector('.list__add-field input'); // поле ввдоа To-Do
    window.listItems = list.querySelector('.list__items');  // Список To-Do
    window.template = document.querySelector('#template-item').content.querySelector('.list__item');

    var listToggle = list.querySelector('.list__toggle'); // кнопка отображения/скрытия поля ввода To-Do
    var listItem = list.querySelectorAll('.list__item');  // Коллекция итемов To-Do
    var itemDelete = list.querySelectorAll('.list__item svg'); // Коллекция кнопочек To-Do

    var addButton = list.querySelector('.list__btn--add');
    var saveButton = list.querySelector('.list__btn--save');
    var clearButton = list.querySelector('.list__btn--clear');

    // При загрузки страницы проверям данные и localStorage и в случае наличия сохраненных To-Do отрисовываем их
    window.getStorage();

    // По нажатию отображаем/скрываем поле To-Do
    listToggle.addEventListener('click', window.listToggleHandler);

    // По нажатию на кнопку Add добавляем новый To-Do
    addButton.addEventListener('click', window.addNewItem);

    // По нажатию на Save сохраняем значения в localStorage
    saveButton.addEventListener('click', window.setStorage);

    // По нажатию на Clear очищаем localStorage
    clearButton.addEventListener('click', function() {
        window.removeAllItems();
        window.clearStorage();
    });

    //  По нажатию на итема добавляем/убираем перечеркивание
    // Изменяем значение done
    listItem.forEach(function (item) {
        window.itemClickHandler(item);
    });

    // По нажатию на иконку корзины удаляем To-Do
    itemDelete.forEach(function (del) {
        window.deleteItemHandler(del);
    });

    // По нажатию на Enter добавляем новый To-Do
    window.addEventListener('keydown', function (e) {
        if (window.isEnterCode(e.keyCode)) {
            addNewItem();
        }
    });
})();