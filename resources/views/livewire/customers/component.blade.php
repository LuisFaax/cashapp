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
                            <button class="btn btn-primary btn-sm" onclick="fireModal(1)" type="button">ADD</button>
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
                                <tr>
                                    <td class="text-left">
                                        <div class="media">
                                            <div class="avatar me-2">
                                                <img alt="avatar" src="{{ asset('src/assets/img/profile-7.jpeg') }}" class="rounded" />
                                            </div>
                                            <div class="media-body">
                                                <h6 class="mb-0">Shaun Park</h6>
                                                <span>shaun.park@mail.com</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td class="text-center">000-000-0000</td>
                                    <td class="text-center">26</td>
                                    <td class="text-center">
                                        Male
                                    </td>
                                    <td class="text-center">
                                        <span class="badge badge-light-success">$25000.00</span>
                                    </td>
                                    <td class="text-center">


                                        <button class="btn btn-info btn-sm">
                                            <i class="far fa-eye fa-lg "></i>
                                        </button>
                                        <button wire:click="Edit(1)" class="btn btn-warning btn-sm">
                                            <i class="far fa-edit fa-lg "></i>
                                        </button>
                                        <button class="btn btn-danger btn-sm">
                                            <i class="far fa-trash-alt fa-lg "></i>
                                            </a>

                                    </td>
                                </tr>



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