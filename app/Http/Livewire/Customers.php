<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Customer;
use App\Models\Frecuency;

class Customers extends Component
{
    public $name, $email, $phone, $address, $salary, $age, $gender, $avatar;
    public $componentName = 'CUSTOMERS', $action = 'Listado';

    public function mount()
    {
    }


    public function render()
    {

        //$this->name = 'Wilden';
        return view('livewire.customers.component')
            ->layout('layouts.theme.app');
    }

    public function Edit(Customer $customer)
    {
        $this->name = $customer->name;
        $this->email = $customer->email;
        $this->dispatchBrowserEvent('modal-open');
    }

    public function guardar()
    {
    }
    public function updatedName()
    {
        $this->email = $this->name;
    }
}
