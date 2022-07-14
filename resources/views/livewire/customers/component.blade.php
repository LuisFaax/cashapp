<div>
    <!-- CONTENT AREA -->
    <div class="row">
        <div class="col-lg-12 layout-spacing layout-top-spacing">
            <div class="statbox widget box box-shadow">
                <div class="widget-header">
                    <div class="row">
                        <div class="col-sm-12 col-md-10">
                            <h4><b> CUSTOMERS </b>
                            </h4>
                        </div>

                        <div class="col-sm-12 col-md-2 d-flex justify-content-end p-3">
                            <button class="btn btn-primary btn-sm" wire:click="Add" type="button">ADD</button>
                        </div>

                    </div>
                </div>
                <div class="widget-content widget-content-area">

                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th class="text-center">Phone</th>
                                    <th class="text-center">Age</th>
                                    <th class="text-center">Gender</th>
                                    <th class="text-center">Salary</th>
                                    <th class="text-center">Actions</th>
                                </tr>

                            </thead>
                            <tbody>
                                @forelse($customers as $customer)
                                <tr>
                                    <td class="text-left">
                                        <div class="media">
                                            <div class="avatar me-2">
                                                <img alt="avatar" src="" class="rounded" />
                                            </div>
                                            <div class="media-body">
                                                <h6 class="mb-0">{{$customer->name}}</h6>
                                                <span>{{$customer->email}}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="text-center">{{$customer->phone}}</td>
                                    <td class="text-center">{{$customer->age}}</td>
                                    <td class="text-center">
                                        {{$customer->gender}}
                                    </td>
                                    <td class="text-center">
                                        <span class="badge badge-light-success">${{number_format($customer->salary,2)}}</span>
                                    </td>
                                    <td class="text-center">

                                        <button wire:click="showInfo({{ $customer->id }})" class="btn btn-info btn-sm">
                                            <i class="far fa-eye fa-lg "></i>
                                        </button>

                                        <button wire:click="Edit({{ $customer->id }})" class="btn btn-warning btn-sm">
                                            <i class="far fa-edit fa-lg "></i>
                                        </button>

                                        <button onclick="Confirm({{ $customer->id }})" class="btn btn-danger btn-sm">
                                            <i class="far fa-trash-alt fa-lg "></i>
                                        </button>

                                    </td>
                                </tr>
                                @empty
                                <tr>
                                    <td colspan="6">
                                        NO DATA
                                    </td>
                                </tr>
                                @endforelse


                            </tbody>
                        </table>
                    </div>


                </div>
            </div>
        </div>


    </div>

    @include('livewire.customers.form')
    @include('livewire.customers.scripts')






</div>