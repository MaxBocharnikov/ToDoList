'use strict';
(function () {
    var list = document.querySelector('.list'); // собственно сам лист

    var listToggle = list.querySelector('.list__toggle'); // кнопка отображения/скрытия поля ввода To-Do
    var additional__field = list.querySelector('.list__add-field'); // блок ввода To-Do
    var additional__input = list.querySelector('.list__add-field input'); // поле ввдоа To-Do

    var listItems = list.querySelector('.list__items');  // Список To-Do
    var listItem = list.querySelectorAll('.list__item');  // Коллекция итемов To-Do
    var itemDelete = list.querySelectorAll('.list__item svg'); // Коллекция кнопочек To-Do

    var addButton = list.querySelector('.list__btn--add');
    var saveButton = list.querySelector('.list__btn--save');
    var clearButton = list.querySelector('.list__btn--clear');

    // По нажатию отображаем/скрываем поле To-Do
    listToggle.addEventListener('click',function (e) {
        e.preventDefault();
        additional__field.classList.toggle('hidden');
        additional__input.value = '';
    });

    // По нажатию на кнопку Add добавляем новый To-Do
    addButton.addEventListener('click', addNewItem);

    //  По нажатию на итема добавляем/убираем перечеркивание
    listItem.forEach(function (item) {
        itemClickHandler(item);
    });

    // По нажатию на иконку корзины удаляем To-Do
    itemDelete.forEach(function (del) {
        deleteItemHandler(del);
    });

    // По нажатию на Enter добавляем новый To-Do
    window.addEventListener('keydown', function (e) {
        if (window.isEnterCode(e.keyCode)) {
            addNewItem();
        }
    });


    // Функция добавления нового To-Do
    function addNewItem() {
        if (additional__input.value) {
            var template = document.querySelector('#template-item').content.querySelector('.list__item');
            var item = template.cloneNode(true);
            var itemSpan = item.querySelector('span');
            var itemDel = item.querySelector('svg');
            itemSpan.textContent = additional__input.value;
            itemClickHandler(itemSpan);
            deleteItemHandler(itemDel);
            listItems.appendChild(item);
            additional__input.value = '';
        }
    }

    // Функция-обработчик удаления To-Do
    function deleteItemHandler(del) {
        del.addEventListener('click', function () {
            deleteItem(del);
        });
    }

    // Функция добавляем/убираем класс done
    function itemClickHandler(item) {
      item.addEventListener('click', function () {
         item.classList.toggle('done');
      });
    };

    // Функция удаления To-Do
    function deleteItem(del) {
        del.parentNode.parentNode.removeChild(del.parentNode);
    }

})();