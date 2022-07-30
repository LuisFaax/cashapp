<x-modal-header title="{{$componentName}}" action="{{ $action }}" size="modal-lg" />

<div class="col-lg-12 layout-spacing">
    <div class="statbox widget box box-shadow">

        <div class="widget-content widget-content-area">
            <form class="row g-3" autocomplete="off">
                <div class="col-sm-12">
                    <label class="form-label">Name*</label>
                    <input id="focus" type="text" wire:model.lazy="user.name" class="form-control form-control-sm" placeholder="eje: Melisa">
                    @error('user.name') <span class="text-warning">{{ $message }}</span> @enderror
                </div>
                <div class="col-12">
                    <label class="form-label">Email*</label>
                    <input wire:model.lazy="user.email" type="email" class="form-control form-control-sm" placeholder="ej: melisa@gmail.com">
                    @error('user.email') <span class="text-warning">{{ $message }}</span> @enderror
                </div>
                <div class="col-12">
                    <label class="form-label">Password*</label>
                    <input wire:model.lazy="user.password" type="password" class="form-control form-control-sm" placeholder="...">
                    @error('user.password') <span class="text-warning">{{ $message }}</span> @enderror
                </div>

                <div class="col-sm-12">
                    <label class="form-label">Profile*</label>
                    <select wire:model="user.profile" class="form-select form-select-sm">
                        <option value="Select" selected>Select</option>
                        <option value="Admin">Admin</option>
                        <option value="Employee">Employee</option>
                    </select>
                    @error('user.profile') <span class="text-warning">{{ $message }}</span> @enderror
                </div>

            </form>

        </div>
    </div>
</div>


<x-modal-footer enable="true" />