<script>
    window.addEventListener('noty-error', event => {
        Swal.fire('', event.detail.msg)
        document.getElementById(event.detail.focus).focus()
    })
</script>