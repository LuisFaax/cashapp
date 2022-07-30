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
    public $componentName = 'USERS', $action = 'Listado', $search, $temppass;

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
        if (strlen($this->search) > 0) {
            $this->resetPage();

            $fullText = str_replace(" ", "%", $this->search);

            return User::where('name', 'like', "%{$fullText}%")
                ->orWhere('email', 'like', "%{$fullText}%")
                ->orWhere('profile', 'like', "%{$fullText}%")
                ->orderBy('name', 'asc')->paginate(5);
        } else {
            return User::orderBy('name', 'asc')->paginate(5);
        }
    }

    public function render()
    {
        return view('livewire.users.component', [
            'users' => $this->loadUsers()
        ])->layout('layouts.theme.app');
    }

    public function Add()
    {
        $this->resetValidation();
        $this->user = new User();
        $this->action = 'Create';
        $this->dispatchBrowserEvent('modal-open');
    }

    public function Edit(User $user)
    {
        $this->resetValidation();
        $this->temppass = $user->password;
        $user->password = null;
        $this->user = $user;
        $this->action = 'Edit';
        $this->dispatchBrowserEvent('modal-open');
    }

    public function Store()
    {
        sleep(2);

        $this->rules['user.name'] = $this->user->id > 0 ? "required|unique:users,name,{$this->user->id}"
            : "required|unique:users,name";

        $this->rules['user.email'] = $this->user->id > 0 ? "required|email|unique:users,email,{$this->user->id}"
            : "required|email|unique:users,email";


        $this->user->password = $this->user->password == null ? $this->temppass : bcrypt($this->user->password);


        $this->validate();

        $this->user->save();

        $this->dispatchBrowserEvent('noty', ['msg' => 'User Saved', 'action' => 'close-modal']);
        $this->user = new User();
        $this->temppass = null;
    }

    public function Destroy(User $user)
    {
        $user->delete();
        $this->dispatchBrowserEvent('noty', ['msg' => 'User Deleted']);
    }

    protected $listeners = [
        'searching', 'Destroy'
    ];

    public function searching($textValue)
    {
        $this->search = $textValue;
    }
}
