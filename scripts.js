
const petActionButtons = document.querySelectorAll('.btn-full');
const selectAllButton = document.querySelector('#btn-select-all');
const unselectAllButton = document.querySelector('#btn-unselect-all');
const selectFirstButton = document.querySelector('#btn-select-first');
const selectLastButton = document.querySelector('#btn-select-last');
const selectNextButton = document.querySelector('#btn-select-next');
const selectPreviousButton = document.querySelector('#btn-select-previous');

const siteLogoElement = document.querySelector('.banner-content');
const galleryItemCards = document.querySelectorAll('.card');


let currentCardIndex = 0;


function togglePetActionButtonIcon(button) {
    const icon = button.querySelector('i');
    icon.classList.toggle('fa-regular');
    icon.classList.toggle('fa-solid');
}


function selectAllPetActions() {
    petActionButtons.forEach(button => {
        const icon = button.querySelector('i');
        icon.classList.remove('fa-regular');
        icon.classList.add('fa-solid');
    });
}

function unselectAllPetActions() {
    petActionButtons.forEach(button => {
        const icon = button.querySelector('i');
        icon.classList.remove('fa-solid');
        icon.classList.add('fa-regular');
    });
}


function updateCardHighlight() {
    galleryItemCards.forEach(card => {
        card.classList.remove('card-selected', 'active');
    });
    galleryItemCards[currentCardIndex].classList.add('card-selected', 'active');
}


function goToLastCard() {
    currentCardIndex = galleryItemCards.length - 1;
    updateCardHighlight();
}

function goToFirstCard() {
    currentCardIndex = 0;
    updateCardHighlight();
}

function goToNextCard() {
    currentCardIndex = (currentCardIndex + 1) % galleryItemCards.length;
    updateCardHighlight();
}

function goToPreviousCard() {
    currentCardIndex = (currentCardIndex - 1 + galleryItemCards.length) % galleryItemCards.length;
    updateCardHighlight();
}


function animateSiteLogo() {
    siteLogoElement.classList.add('animate__animated', 'animate__zoomInDown');

    
    siteLogoElement.addEventListener('animationend', () => {
        siteLogoElement.classList.remove('animate__animated', 'animate__zoomInDown');
        setTimeout(() => {
            siteLogoElement.classList.remove('animate__animated');
        }, 1000);
    });
}


function setupEventListeners() {
    petActionButtons.forEach(button => {
        button.addEventListener('click', () => togglePetActionButtonIcon(button));
    });

    selectAllButton.addEventListener('click', selectAllPetActions);
    unselectAllButton.addEventListener('click', unselectAllPetActions);
    selectFirstButton.addEventListener('click', goToFirstCard);
    selectLastButton.addEventListener('click', goToLastCard);
    selectNextButton.addEventListener('click', goToNextCard);
    selectPreviousButton.addEventListener('click', goToPreviousCard);
    siteLogoElement.addEventListener('click', animateSiteLogo);
}


function initialize() {
    setupEventListeners();
    updateCardHighlight();
}


initialize();
