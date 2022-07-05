var simpleFaq = document.querySelectorAll('#simple_faq .collapse, #simple_faq1 .collapse')

for (let index = 0; index < simpleFaq.length; index++) {
    simpleFaq[index].addEventListener('show.bs.collapse', function () {
        this.parentNode.classList.add('show');
    })
    simpleFaq[index].addEventListener('hide.bs.collapse', function() {
        this.parentNode.classList.remove('show');
    })
}