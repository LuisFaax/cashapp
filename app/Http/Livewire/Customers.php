<?php

namespace App\Http\Livewire;

use Livewire\Component;
use App\Models\Customer;
use App\Models\Frecuency;
use Livewire\WithFileUploads;

class Customers extends Component
{
    use WithFileUploads;

    public $name, $email, $phone, $address, $salary, $age, $gender = 'Select', $avatar, $selected_id = 0;
    public $componentName = 'CUSTOMERS', $action = 'Listado';

    protected $rules = [
        'name' => 'required|min:3|unique:customers',
        'email' => 'nullable|email',
        'phone' => 'required|max:10',
        'address' => 'required|min:10|max:255',
        'salary' => 'required',
        'age' => 'required',
        'gender' => 'required|not_in:Select'
    ];


    public function updated($propertyName)
    {
        $this->validateOnly($propertyName);
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

    public function Store()
    {
        sleep(2);

        $this->rules['name'] = $this->selected_id > 0 ? "required|min:3|unique:customers,name{$this->selected_id}" : 'required|min:3|unique:customers';

        $validateDate = $this->validate();

        $customer = Customer::updateOrCreate(
            ['id' => $this->selected_id],
            [
                'name' => $this->name,
                'email' => $this->email,
                'phone' => $this->phone,
                'address' => $this->address,
                'salary' => $this->salary,
                'age' => $this->age,
                'gender' => $this->gender,
            ]
        );

        if (!empty($this->phone)) {
            if ($this->selected_id > 0) {
                $tmpImg = $customer->avatar;
                if ($tmpImg != null && file_exists('storage/customers/' . $tmpImg)) {
                    unlink('storage/customers/' . $tmpImg);
                }
            }

            $customAvatarName = uniqid() . '.' . $this->phone->extension(); // 321654.png
            $this->phone->storeAs('public/customers', $customAvatarName);

            $customer->avatar = $customAvatarName;
            $customer->save();
        }

        $this->dispatchBrowserEvent('noty', ['msg' => $this->selected_id > 0 ? 'Customer Updated' : 'Customer Created']);
        $this->name = null;
        $this->reset('name', 'email', 'address', 'salary', 'age', 'gender', 'selected_id');
    }



    public function updatedName()
    {
        $this->email = $this->name;
    }

    //protected $listeners = ['Destroy'];


    public function Destroy(Customer $customer)
    {
        //dd($customer);
        $customer->delete();
        $this->dispatchBrowserEvent('noty', ['msg' => 'Customer Deleted']);
    }
}
