<script src="{{ asset('assets/src/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
<script src="{{ asset('assets/src/plugins/src/perfect-scrollbar/perfect-scrollbar.min.js') }}"></script>
<script src="{{ asset('assets/src/plugins/src/mousetrap/mousetrap.min.js') }}"></script>
<script src="{{ asset('assets/layouts/vertical-dark-menu/app.js') }}"></script>

<script src="{{ asset('assets/src/plugins/src/sweetalerts2/sweetalerts2.min.js') }}"></script>
<link href="https://cdn.jsdelivr.net/npm/tom-select@2.1.0/dist/css/tom-select.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/tom-select@2.1.0/dist/js/tom-select.complete.min.js"></script>


<script>
    function fireModal(action = 1) {

        if (action == 1) {
            document.querySelector('.modal').classList.add('show')
            document.querySelector('.modal').style.display = 'block'
            setTimeout(function() {
                document.getElementById('focus').focus()
            }, 500)
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




    function Confirm(ComponentName, MethodName = 'Destroy', rowId) {
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
                window.livewire.emitTo(ComponentName, MethodName, rowId)
            }
        })
    }
</script>