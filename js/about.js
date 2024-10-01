document.querySelector('.summary__btn').addEventListener('click', function() {
    const parentBlock = this.closest('.summary__inner');
    const ulElement = parentBlock.querySelector('ul');
    ulElement.classList.remove('hide');
    this.remove();
});
