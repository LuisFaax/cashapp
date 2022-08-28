<?php

namespace App\Http\Livewire;

use App\Models\Customer;
use App\Models\Frecuency;
use App\Models\Rate;
use App\Traits\TraitAleman;
use App\Traits\TraitAmericano;
use App\Traits\TraitFrances;
use Livewire\Component;

class Loans extends Component
{
    // traits
    use TraitFrances;
    use TraitAleman;
    use TraitAmericano;

    //properties
    public $customer_id = 0, $amount = 0, $rate = 0, $rate_id = 0, $years = 1, $frecuency_id = 0, $method = 'Frances', $plan = [];

    public function render()
    {



        return view('livewire.loans.component', [
            'customers' => Customer::orderBy('name', 'asc')->get(),
            'rates' => Rate::where('state', 'Active')->orderBy('id', 'asc')->get(),
            'frecuencies' => Frecuency::orderBy('name', 'asc')->get(),
        ])
            ->layout('layouts.theme.app');
    }

    public function Save()
    {
        //logica
    }
    public function setValueRate()
    {
        $this->rate = intval(Rate::find($this->rate_id)->percent);
    }

    // public function updatedRateId()
    // {
    //     dd('rate_id');
    // }

    public function Simulate()
    {
        if ($this->method == 'Frances') {
            if ($this->frecuency_id == 1) { //mensual
                $this->plan = $this->PlanMensual($this->rate, $this->amount, $this->years);
            }
        }
    }
}
