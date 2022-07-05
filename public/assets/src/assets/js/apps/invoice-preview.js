document.querySelector('.action-print').addEventListener('click', function(event) {
  event.preventDefault();
  /* Act on the event */
  window.print();
});