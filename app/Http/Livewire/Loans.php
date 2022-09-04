<?php

namespace App\Http\Livewire;

use App\Models\Loan;
use App\Models\Rate;
use Livewire\Component;
use App\Models\Customer;
use App\Models\Frecuency;
use App\Models\Plan;
use App\Traits\TraitAleman;
use App\Traits\TraitFrances;
use App\Traits\TraitAmericano;

class Loans extends Component
{
    // traits
    use TraitFrances;
    use TraitAleman;
    use TraitAmericano;

    //properties
    public $customer_id = 0, $amount = 0, $rate = 0, $rate_id = 0, $years = 1, $frecuency_id = 0, $method = 'Frances', $plan = [];
    public $statusComponent = '';

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
        //validaciones
        if ($this->customer_id == 0) {
            $this->dispatchBrowserEvent('noty-error', ['msg' => 'SELECCIONA EL CLIENTE']);
            return;
        }
        if ($this->amount <= 0) {
            $this->dispatchBrowserEvent('noty-error', ['msg' => 'INGRESA EL MONTO', 'focus' => 'amount']);
            return;
        }
        if ($this->rate_id == 0) {
            $this->dispatchBrowserEvent('noty-error', ['msg' => 'SELECCIONA LA TASA DE INTERÉS', 'focus' => 'rate']);
            return;
        }
        if ($this->years <= 0) {
            $this->dispatchBrowserEvent('noty-error', ['msg' => 'INGRESA LOS AÑOS', 'focus' => 'years']);
            return;
        }
        if ($this->frecuency_id == 0) {
            $this->dispatchBrowserEvent('noty-error', ['msg' => 'SELECCIONA LA FRECUENCIA DE PAGO']);
            return;
        }

        $this->statusComponent = 'Guardando prestamo...';
        $loan = Loan::create([
            'amount' => $this->amount,
            'frecuency_id' => $this->frecuency_id,
            'user_id' => null, //Auth()->user()->id,
            'customer_id' => $this->customer_id,
            'rate_id' => $this->rate_id,
        ]);

        foreach ($this->plan as $key => $pay) {
            if ($key > 0) {
                Plan::create([
                    'loan_id' => $loan->id,
                    'date' => $pay['FECHA'],
                    'number' => $key,
                    'payment' => $pay['CUOTA'],
                    'interest' => $pay['INTERESES'],
                    'amort' => $pay['AMORTIZACION'],
                    'balance' => $pay['PENDIENTE']
                ]);
            }
        }
        $this->dispatchBrowserEvent('noty', ['msg' => 'PRÉSTAMO GUARDADO CON ÉXITO']);
        //$this->reset('','',''','');
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
