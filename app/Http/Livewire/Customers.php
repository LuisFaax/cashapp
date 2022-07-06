<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Customers extends Component
{
    public function render()
    {
        return view('livewire.customers.component')
            ->layout('layouts.theme.app');
    }
}
