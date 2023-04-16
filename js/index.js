(function () {

    let burger = document.querySelector('.burger-menu');
    let mobailNav = document.querySelector('.mobail-nav');

    burger.addEventListener('click', function (e) {

        mobailNav.style.display = 'block';

    })

    mobailNav.addEventListener('click', function (e) {

        mobailNav.style.display = 'none';

    })



}());

// ================================= отзывы ==================================

let revImg = document.querySelectorAll('.rev__item');
let revList = document.querySelector('.rev__list');

revImg.forEach(function (item) {





    item.addEventListener('click', function (e) {



        for (let i = 0; i < revImg.length; i++) {

            revImg[i].classList.remove('rev__item--activ');

        }



        let zi = this.classList.add('rev__item--activ');

        let activ = document.querySelector('.rev__item--activ').dataset.name;



        fn10(activ);


    })

})

function fn10(a) {

    let itemrev = document.querySelectorAll('.item-rev');

    for (let i = 0; i < itemrev.length; i++) {
        let elem = itemrev[i];

        elem.classList.remove('item-rev--activ');

        if (a === elem.dataset.open) {

            elem.classList.add('item-rev--activ');

        }

    }

}

// =======================================================================================================

