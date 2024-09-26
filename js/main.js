document.querySelectorAll('.faq__item h4').forEach(item => {
    item.addEventListener('click', () => {
        const parentItem = item.parentElement;
        const isActive = parentItem.classList.contains('active');
        document.querySelectorAll('.faq__item').forEach(faqItem => {
            faqItem.classList.remove('active');
        });
        if (!isActive) {
            parentItem.classList.add('active');
        }
    });
});