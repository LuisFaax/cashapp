<div>
    <div class="row">
        <div class="col-lg-12 layout-spacing layout-top-spacing">
            <div class="statbox widget box box-shadow">
                <div class="widget-header">
                    <div class="row">
                        <div class="col-sm-12 col-md-10">
                            <h4><b> RATES </b>
                            </h4>
                        </div>

                        <div class="col-sm-12 col-md-2 d-flex justify-content-end p-3">
                            <button wire:click="Add()" class="btn btn-primary btn-sm" type="button">ADD</button>
                        </div>

                    </div>
                </div>
                <div class="widget-content widget-content-area">

                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th class="text-center">Percent</th>
                                    <th class="text-center">Fee</th>
                                    <th class="text-center">State</th>
                                    <th class="text-center">Actions</th>
                                </tr>

                            </thead>
                            <tbody>

                                @forelse($rates as $rate)
                                <tr>
                                    <td class="text-center">
                                        <span class="badge badge-light-info">${{number_format($rate->percent,1)}}%</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="badge badge-light-success">${{number_format($rate->fee,1)}}%</span>
                                    </td>
                                    <td class="text-center">
                                        {{$rate->state}}
                                    </td>
                                    <td class="text-center">
                                        <button wire:click="Edit({{ $rate->id }})" class="btn btn-warning btn-sm">
                                            <i class="far fa-edit fa-lg "></i>
                                        </button>

                                        <button onclick="Confirm({{ $rate->id }})" class="btn btn-danger btn-sm">
                                            <i class="far fa-trash-alt fa-lg "></i>
                                        </button>
                                    </td>
                                </tr>
                                @empty
                                <tr>
                                    <td colspan="4">NO RATES</td>
                                </tr>
                                @endforelse

                            </tbody>
                        </table>

                    </div>
                    <div class="mt-2">
                        {{$rates->links()}}
                    </div>

                </div>
            </div>
        </div>


    </div>

    @include('livewire.rates.form')
    @include('livewire.rates.scripts')

</div>