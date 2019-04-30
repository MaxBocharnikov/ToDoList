// В данном файле все обработчики событий
(function () {
    // Функция изменяем значение аттрибута done
    function doneToggle(item) {
        item.parentNode.getAttribute('done') === 'true' ? item.parentNode.setAttribute('done', 'false') : item.parentNode.setAttribute('done', 'true')
    }

    // Функция-обработчик удаления To-Do
    window.deleteItemHandler = function(del) {
        del.addEventListener('click', function () {
            deleteItem(del);
            window.onItemsChangeHandler();
        });
    };

    // Функция добавляем/убираем класс done
    window.itemClickHandler = function(item) {
        item.addEventListener('click', function () {
            item.classList.toggle('done');
            doneToggle(item);
        });
    };

    // Функция добавления нового To-Do
    window.addNewItem =function() {
        if (additional__input.value) {
            var item = window.template.cloneNode(true);
            var itemSpan = item.querySelector('span');
            var itemDel = item.querySelector('svg');
            itemSpan.textContent = additional__input.value;
            itemClickHandler(itemSpan);
            deleteItemHandler(itemDel);
            window.listItems.appendChild(item);
            item.setAttribute('done', 'false');
            additional__input.value = '';
        }
        window.onItemsChangeHandler();
    };

    // Функция удаления To-Do
    window.deleteItem = function(del) {
        del.parentNode.parentNode.removeChild(del.parentNode);
    };

    // Функция отображает/скрывает инпут
    window.listToggleHandler = function () {
        window.additional__field.classList.toggle('hidden');
        window.additional__input.value = '';
        window.onItemsChangeHandler();
    };

    // Функция удаляет все To-Do из DOM
    window.removeAllItems = function () {
        while (window.listItems.firstChild) {
            window.listItems.removeChild(window.listItems.firstChild);
        }
        window.onItemsChangeHandler();
    };

    window.onItemsChangeHandler = function () {
        if (window.listItems.childElementCount > 0) {
            window.listEmpty.classList.add('hidden');
        } else {
            window.listEmpty.classList.remove('hidden');
        }
    };

})();