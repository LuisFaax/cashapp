/*
    Tooltip
*/

new bootstrap.Tooltip(document.querySelector('.primary'), {
    template: '<div class="tooltip tooltip-primary" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "Primary"
})

new bootstrap.Tooltip(document.querySelector('.success'), {
    template: '<div class="tooltip tooltip-success" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "Success"
})

new bootstrap.Tooltip(document.querySelector('.info'), {
    template: '<div class="tooltip tooltip-info" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "Info"
})

new bootstrap.Tooltip(document.querySelector('.danger'), {
    template: '<div class="tooltip tooltip-danger" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "Danger"
})

new bootstrap.Tooltip(document.querySelector('.warning'), {
    template: '<div class="tooltip tooltip-warning" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "Warning"
})

new bootstrap.Tooltip(document.querySelector('.secondary'), {
    template: '<div class="tooltip tooltip-secondary" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "Secondary"
})

new bootstrap.Tooltip(document.querySelector('.tooltip-dark'), {
    template: '<div class="tooltip tooltip-dark" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    title: "Dark"
})