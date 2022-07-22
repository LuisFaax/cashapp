<x-modal-header title="{{$componentName}}" action="{{ $action }}" />

<div class="col-lg-12 layout-spacing">
    <div class="statbox widget box box-shadow">

        <div class="widget-content widget-content-area">
            <form class="row g-3" autocomplete="off">
                <div class="col-sm-12">
                    <label class="form-label">Name*</label>
                    <input type="text" wire:model.lazy="name" class="form-control form-control-sm" placeholder="Melisa Albahat">
                    @error('name') <span class="text-warning">{{ $message }}</span> @enderror
                </div>
                <div class="col-sm-12 col-md-6">
                    <label class="form-label">Email</label>
                    <input wire:model="email" type="email" class="form-control form-control-sm" placeholder="mail@gmail.com">
                    @error('email') <span class="text-warning">{{ $message }}</span> @enderror
                </div>
                <div class="col-12 col-md-6">
                    <label class="form-label">Phone*</label>
                    <input wire:model.defer="phone" type="text" class="form-control form-control-sm" placeholder="000 00 0000">
                    @error('phone') <span class="text-warning">{{ $message }}</span> @enderror
                </div>
                <div class="col-sm-12 col-md-9">
                    <label class="form-label">Address*</label>
                    <textarea wire:model="address" class="form-control form-control-sm" cols="30" rows="2" placeholder="1234 Main St"></textarea>
                    @error('address') <span class="text-warning">{{ $message }}</span> @enderror
                </div>
                <div class="col-sm-12 col-md-3">
                    <label class="form-label">Photo</label>
                    <input wire:model="avatar" accept="image/x-png,image/jpeg,image/jpg" class="form-control" type="file">
                </div>
                <div class="col-sm-12 col-md-4">
                    <label class="form-label">Salary*</label>
                    <input wire:model="salary" type="number" class="form-control form-control-sm" placeholder="25000">
                    @error('salary') <span class="text-warning">{{ $message }}</span> @enderror
                </div>
                <div class="col-sm-12 col-md-4">
                    <label class="form-label">Age*</label>
                    <input wire:model="age" type="number" class="form-control form-control-sm" placeholder="23">
                    @error('age') <span class="text-warning">{{ $message }}</span> @enderror
                </div>
                <div class="col-sm-12 col-md-4">
                    <label class="form-label">Gender*</label>
                    <select wire:model="gender" id="cmbgender" class="form-select form-select-sm">
                        <option value="Select" selected>Select...</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    @error('gender') <span class="text-warning">{{ $message }}</span> @enderror
                </div>

            </form>

        </div>
    </div>
</div>


<x-modal-footer enable="{{ $btnSaveEdit }}" />