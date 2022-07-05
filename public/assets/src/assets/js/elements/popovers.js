/*
    Popovers
*/

new bootstrap.Popover(document.querySelector('.btn-popover-primary'), {
    template: '<div class="popover popover-primary" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    title: "Primary",
    content: "Primary popover",
    placement: 'top'
})

new bootstrap.Popover(document.querySelector('.btn-popover-success'), {
    template: '<div class="popover popover-success" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    title: "Success",
    content: "Success popover",
    placement: 'top'
})

new bootstrap.Popover(document.querySelector('.btn-popover-info'), {
    template: '<div class="popover popover-info" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    title: "Info",
    content: "Info popover",
    placement: 'top'
})

new bootstrap.Popover(document.querySelector('.btn-popover-danger'), {
    template: '<div class="popover popover-danger" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    title: "Danger",
    content: "Danger popover",
    placement: 'top'
})

new bootstrap.Popover(document.querySelector('.btn-popover-warning'), {
    template: '<div class="popover popover-warning" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    title: "Warning",
    content: "Warning popover",
    placement: 'top'
})

new bootstrap.Popover(document.querySelector('.btn-popover-secondary'), {
    template: '<div class="popover popover-secondary" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    title: "Secondary",
    content: "Secondary popover",
    placement: 'top'
})

new bootstrap.Popover(document.querySelector('.btn-popover-dark'), {
    template: '<div class="popover popover-dark" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    title: "Dark",
    content: "Dark popover",
    placement: 'top'
})