new ClipboardJS('.jsclipboard');

var clipboardBasic = document.querySelector('.cbBasic')
var tooltip = new bootstrap.Tooltip(clipboardBasic)

clipboardBasic.addEventListener('shown.bs.tooltip', function () {
    setTimeout(() => {
        tooltip.hide()
    }, 1000);
})
