<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Customer;
use App\Models\Frecuency;

class Customers extends Component
{
    public $name, $email, $phone, $address, $salary, $age, $gender, $avatar, $selected_id = 0;
    public $componentName = 'CUSTOMERS', $action = 'Listado';

    public function mount()
    {
    }

    public function loadCustomers()
    {
        $customers = Customer::all();
        return $customers;
    }

    public function render()
    {

        return view('livewire.customers.component', [
            'customers' => $this->loadCustomers()
        ])
            ->layout('layouts.theme.app');
    }

    public function Add()
    {
        $this->resetValidation();
        $this->action = 'Create';
        $this->dispatchBrowserEvent('modal-open');
    }

    public function Edit(Customer $customer)
    {
        $this->selected_id = $customer->id;
        $this->name = $customer->name;
        $this->email = $customer->email;
        $this->phone = $customer->phone;
        $this->address = $customer->address;
        $this->salary = $customer->salary;
        $this->age = $customer->age;
        $this->gender = $customer->gender;
        $this->avatar = null;
        $this->action = 'Edit';
        $this->dispatchBrowserEvent('modal-open');
    }

    public function showInfo(Customer $customer)
    {
        dd($customer);
    }

    public function guardar()
    {
    }
    public function updatedName()
    {
        $this->email = $this->name;
    }
}
