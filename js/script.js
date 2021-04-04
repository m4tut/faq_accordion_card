document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const itemTitleElems = document.querySelectorAll('.item_title');
    const itemTextElems = document.querySelectorAll('.item_text');

    const accordion = () => {
        itemTitleElems.forEach((item, i) => {
            item.addEventListener('click', () => {
                if (item.classList.contains('title_active')) {
                    itemTitleElems[i].classList.remove('title_active');
                    itemTextElems[i].classList.remove('text_active');
                    return;
                }
                itemTitleElems.forEach((item, j) => {
                    if (j != i) {
                        itemTitleElems[j].classList.remove('title_active');
                        itemTextElems[j].classList.remove('text_active');
                    } else {
                        itemTitleElems[j].classList.add('title_active');
                        itemTextElems[j].classList.add('text_active');
                    }
                });
            });
        });
    };

    accordion();
});
