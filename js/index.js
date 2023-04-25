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

// =========================== slider состав ===============================

function fn3() {

    // let box = document.querySelector('.box__icon');
    // let composition = document.querySelector('.composition-list');
    // box.addEventListener('mouseover', function (e) {




    //     composition.style.display = 'block';

    //     composition.addEventListener('mouseover', function (e) {
    //         composition.style.display = 'block';
    //     })
    // })

    // box.addEventListener('mouseout', function () {


    //     composition.style.display = 'none';
    // })
}

fn3();

//! ========================== comanda ============================

function fn44() {


    let avotar = document.querySelectorAll('.list-avotar__item');

    for (let i = 0; i < avotar.length; i++) {
        let elem = avotar[i];




        elem.addEventListener('click', function (e) {

            for (let k = 0; k < avotar.length; k++) {
                let element = avotar[k];
                element.classList.remove('list-avotar__item--activ');
            }


            this.classList.add('list-avotar__item--activ');
            console.log(elem);



        })


        // console.log(elem);

    }

}

fn44();

$('.slider-shop').bxSlider({
    pager:false
});