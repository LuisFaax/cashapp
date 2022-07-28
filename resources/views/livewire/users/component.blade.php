<div>
    <div class="row">
        <div class="col-lg-12 layout-spacing layout-top-spacing">
            <div class="statbox widget box box-shadow">
                <div class="widget-header">
                    <div class="row">
                        <div class="col-sm-12 col-md-10">
                            <h4><b> USERS </b>
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
                                    <th class="text-center">Name</th>
                                    <th class="text-center">Email</th>
                                    <th class="text-center">Profile</th>
                                    <th class="text-center">Actions</th>
                                </tr>

                            </thead>
                            <tbody>

                                @forelse($users as $user)
                                <tr>
                                    <td class="text-center">
                                        <span class="badge badge-light-info">{{ $user->name }}</span>
                                    </td>
                                    <td class="text-center">
                                        <span class="badge badge-light-success">{{ $user->email }}</span>
                                    </td>
                                    <td class="text-center">
                                        {{$user->profile}}
                                    </td>
                                    <td class="text-center">
                                        <button wire:click="Edit({{ $user->id }})" class="btn btn-warning btn-sm">
                                            <i class="far fa-edit fa-lg "></i>
                                        </button>

                                        <button onclick="Confirm('users','Destroy',{{ $user->id }})" class="btn btn-danger btn-sm">
                                            <i class="far fa-trash-alt fa-lg "></i>
                                        </button>
                                    </td>
                                </tr>
                                @empty
                                <tr>
                                    <td colspan="4">NO USERS</td>
                                </tr>
                                @endforelse

                            </tbody>
                        </table>

                    </div>
                    <div class="mt-2">

                    </div>

                </div>
            </div>
        </div>


    </div>

    @include('livewire.users.form')


</div>