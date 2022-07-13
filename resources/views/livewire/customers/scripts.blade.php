<script>
    function fireModal(action = 1) {
        if (action == 1) {
            document.querySelector('.modal').classList.add('show')
            document.querySelector('.modal').style.display = 'block'
        } else {
            document.querySelector('.modal').classList.add('hide')
            document.querySelector('.modal').style.display = 'none'
        }
    }
</script>