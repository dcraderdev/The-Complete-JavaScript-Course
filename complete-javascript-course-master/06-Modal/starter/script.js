'use strict';

// start by selecting the elements that we will need
// store them into variables so we can use them conveniently

// we need to select modal, the overlay, the close modal button, and the show modal buttons.

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
// const btnsShowModal = document.querySelector('.show-modal');
// querySelector will only select the first element if a group shows the same class name
// to counteract this we use .querySelectorAll
const btnsOpenModal = document.querySelectorAll('.show-modal');

console.log(btnsOpenModal);

// this for-loop gives us access to all the .show-modal objects
for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', function () {
    // logs to the console that we clicked a button when we click a button
    console.log('Button clicked');
    // this removes the method attached to this property class
    // which is removing 'hidden' from the modal classes
    // do not use .hidden, only 'hidden'
    // we can also add classes or check what classes are contained
    modal.classList.remove('hidden');
    // this removes the hidden from the overlay class so the window blurs
    overlay.classList.remove('hidden');

  });


// btnCloseModal.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

// overlay.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

//since the code above repeats the same functionality twice we are going to create a function that we can call that does all these same functions but this way we dont have to write the same code over and over



const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
