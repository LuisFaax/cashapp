<x-modal-header title="{{$componentName}}" action="{{ $action }}" size="modal-sm" />

<div class="col-lg-12 layout-spacing">
    <div class="statbox widget box box-shadow">

        <div class="widget-content widget-content-area">
            <form class="row g-3" autocomplete="off">
                <div class="col-sm-12">
                    <label class="form-label">Percent*</label>
                    <input id="focus" type="number" wire:model.lazy="rate.percent" class="form-control form-control-sm" placeholder="25%">
                    @error('rate.percent') <span class="text-warning">{{ $message }}</span> @enderror
                </div>
                <div class="col-12">
                    <label class="form-label">Fee*</label>
                    <input wire:model.lazy="rate.fee" type="number" class="form-control form-control-sm" placeholder="3%">
                    @error('rate.fee') <span class="text-warning">{{ $message }}</span> @enderror
                </div>

                <div class="col-sm-12">
                    <label class="form-label">State*</label>
                    <select wire:model="rate.state" class="form-select form-select-sm">
                        <option value="Select" selected>Select</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                    </select>
                    @error('rate.state') <span class="text-warning">{{ $message }}</span> @enderror
                </div>

            </form>

        </div>
    </div>
</div>


<x-modal-footer enable="true" />