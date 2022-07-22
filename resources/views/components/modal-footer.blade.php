</div>
<div class="modal-footer">
    <button class="btn" onclick="fireModal(0)"><i class="flaticon-cancel-12"></i> CANCELAR</button>
    @if($enable)
    <button type="button" wire:loading.attr="disabled" wire:click.prevent="Store" class="btn btn-primary">

        <span wire:loading.remove wire:target="Store">GUARDAR</span>

        <span wire:loading wire:target="Store">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-loader spin me-2">
                <line x1="12" y1="2" x2="12" y2="6"></line>
                <line x1="12" y1="18" x2="12" y2="22"></line>
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76"></line>
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07"></line>
                <line x1="2" y1="12" x2="6" y2="12"></line>
                <line x1="18" y1="12" x2="22" y2="12"></line>
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24"></line>
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93"></line>
            </svg>
            PROCESANDO</span>
    </button>
    @endif
</div>
</div>
</div>
</div>