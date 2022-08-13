<?php

namespace App\Http\Livewire;

use App\Traits\TraitFrances;
use Livewire\Component;

class Loans extends Component
{
    use TraitFrances;

    public function render()
    {

        dd($this->PlanTrimestral(20, 50000, 1));

        return view('livewire.loans.component')
            ->layout('layouts.theme.app');
    }
}
