let back_button = document.querySelector('#DEM_Back');

back_button.addEventListener('mouseover', function() {
    this.firstElementChild.src = '../../Src/Images/arrow_hover.png';
})
back_button.addEventListener('mouseout', function() {
    this.firstElementChild.src = '../../Src/Images/arrow.png';
})
back_button.addEventListener('mousedown', function() {
    this.firstElementChild.src = '../../Src/Images/arrow_active.png';
})
back_button.addEventListener('mouseup', function() {
    this.firstElementChild.src = '../../Src/Images/arrow.png'
})