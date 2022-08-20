<?php

namespace App\Http\Livewire;

use App\Traits\TraitAleman;
use App\Traits\TraitAmericano;
use App\Traits\TraitFrances;
use Livewire\Component;

class Loans extends Component
{
    use TraitFrances;
    use TraitAleman;
    use TraitAmericano;

    public function render()
    {

        // dd($this->PlanTrimestral(20, 50000, 1));
        dd($this->PlanMensualAmericano(20, 50000, 1));

        return view('livewire.loans.component')
            ->layout('layouts.theme.app');
    }
}
