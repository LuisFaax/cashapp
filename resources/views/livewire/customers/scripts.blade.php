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



    window.addEventListener('modal-open', event => {
        fireModal(1)
    })

    window.addEventListener('noty', event => {
        Swal.fire('', event.detail.msg)
        if (event.detail.action == 'close-modal') fireModal(0)
    })


    /*
    function Confirm(CustomerId) {
        Swal.fire({
            title: 'Info',
            text: "¿CONFIRMAS ELIMINAR EL REGISTRO?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Aceptar'
        }).then((result) => {
            if (result.isConfirmed) {
                /// Swal.fire('Deleted!', 'Your file has been deleted.', 'success')
                //window.livewire.emit('Destroy', CustomerId) // 1,2 ,3
                @this.Destroy(CustomerId)
            }
        })
    }
    */
</script>