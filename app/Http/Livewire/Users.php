<?php

namespace App\Http\Livewire;

use App\Models\User;
use Livewire\Component;
use Livewire\WithPagination;

class Users extends Component
{
    //traits
    use WithPagination;

    // properties
    public User $user; // VARIABLE DE TIPO MODEL
    public $componentName = 'USERS', $action = 'Listado', $search;

    protected $paginationTheme = 'bootstrap';

    public function mount()
    {
        $this->user = new User(); // INSTANCIA DE MODEL
    }

    protected $rules = [
        'user.name' => 'required|unique:users,name',
        'user.email' => 'required|email|unique:users,email',
        'user.profile' => 'required|not_in:Select',
        'user.password' => 'required|min:3',
    ];

    public function loadUsers()
    {
        $users = User::all();
        return $users;
    }

    public function render()
    {
        return view('livewire.users.component', [
            'users' => $this->loadUsers()
        ])->layout('layouts.theme.app');
    }

    public function Add()
    {
        $this->user = new User();
        $this->action = 'Create';
        $this->dispatchBrowserEvent('modal-open');
    }

    public function Edit(User $user)
    {
        $this->user = $user;
        $this->action = 'Edit';
        $this->dispatchBrowserEvent('modal-open');
    }

    public function Store()
    {
        sleep(2);

        $this->rules['rate.percent'] = $this->rate->id > 0 ? "required|numeric|unique:rates,percent,{$this->rate->id}"
            : "required|numeric|unique:rates,percent";

        $this->validate();

        $this->rate->save();

        $this->dispatchBrowserEvent('noty', ['msg' => 'Rate Saved', 'action' => 'close-modal']);
        $this->rate = new User();
    }

    public function Destroy(User $user)
    {
        //dd('destroy');
        $user->delete();
        $this->dispatchBrowserEvent('noty', ['msg' => 'Rate Deleted']);
    }

    protected $listeners = [
        'searching', 'Destroy'
    ];

    public function searching($textValue)
    {
        $this->search = $textValue;
    }
}
