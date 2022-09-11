<script>
    window.addEventListener('noty-error', event => {
        Swal.fire('', event.detail.msg)
        document.getElementById(event.detail.focus).focus()
    })

    document.addEventListener('DOMContentLoaded', function() {
        new TomSelect("#tomselect", {
            create: true,
            sortField: 'text',
            onChange: function(value) {
                document.getElementById('amount').focus()
            }
        })
    })
</script>