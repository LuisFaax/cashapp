<?php

namespace App\Http\Livewire;

use App\Models\Rate;
use Livewire\Component;
use Livewire\WithPagination;

class Rates extends Component
{
    //traits
    use WithPagination;

    // properties
    public Rate $rate;
    public $componentName = 'RATES', $action = 'Listado', $search;

    protected $paginationTheme = 'bootstrap';

    public function mount()
    {
        $this->rate = new Rate();
    }

    protected $rules = [
        'rate.percent' => 'required|numeric|unique:rates,percent',
        'rate.fee' => 'required|numeric',
        'rate.state' => 'required|not_in:Select'
    ];

    public function loadRates()
    {
        if (strlen($this->search) > 0) {
            $this->resetPage();
            $rates = Rate::where('state', 'like', "%{$this->search}%")
                ->orWhere('percent', 'like', "%{$this->search}%")
                ->orWhere('fee', 'like', "%{$this->search}%")
                ->paginate(3);
        } else {
            $rates = Rate::orderBy('percent', 'desc')->paginate(3);
        }
        return $rates;
    }

    public function render()
    {
        return view('livewire.rates.component', [
            'rates' => $this->loadRates()
        ])->layout('layouts.theme.app');
    }

    public function Add()
    {
        $this->rate = new Rate();
        $this->action = 'Create';
        $this->dispatchBrowserEvent('modal-open');
    }

    public function Edit(Rate $rate)
    {
        $this->rate = $rate;
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
        $this->rate = new Rate();
    }

    public function Destroy(Rate $rate)
    {
        $rate->delete();
        $this->dispatchBrowserEvent('noty', ['msg' => 'Rate Deleted']);
    }

    protected $listeners = ['searching'];

    public function searching($textValue)
    {
        $this->search = $textValue;
    }
}
