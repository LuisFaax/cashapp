<?php

namespace App\Http\Livewire;

use App\Models\Loan;
use App\Models\Plan;
use App\Models\Rate;
use Livewire\Component;
use App\Models\Customer;
use App\Models\Frecuency;
use App\Traits\Noty;
use App\Traits\TraitAleman;
use App\Traits\TraitFrances;
use App\Traits\TraitAmericano;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Storage;

class Loans extends Component
{
    // traits
    use TraitFrances;
    use TraitAleman;
    use TraitAmericano;
    use Noty;

    //properties
    public $customer_id = 0, $amount = 0, $rate = 0, $rate_id = 0, $years = 1, $frecuency_id = 0, $method = 'Frances', $plan = [];
    public $statusComponent = '';


    public function render()
    {
        // $this->sendWhatsApp("plan_000156339a4d1ce35f.pdf");


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

        DB::beginTransaction();

        try {
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
            //public $customer_id = 0, $amount = 0, $rate = 0, $rate_id = 0, $years = 1, $frecuency_id = 0, $method = 'Frances', $plan = [];

            // confirmar transacción
            DB::commit();

            // resetear propiedades
            $this->reset(
                'amount',
                'customer_id',
                'rate',
                'rate_id',
                'years',
                'frecuency_id',
                'method',
                'plan'
            );
            // feedback front


            // generar pdf
            Redirect::away('loans/lastpdf');

            $this->dispatchBrowserEvent('noty', ['msg' => 'PRÉSTAMO GUARDADO Y DOCUMENTO ENVIADO']);
        } catch (\Throwable $th) {
            DB::rollBack();
            $this->dispatchBrowserEvent('noty-error', ['msg' => 'Error al guardar el préstamo' . $th->getMessage()]);
        }

        //$this->reset('','',''','');
    }

    public function createPDF()
    {
        $loan = Loan::orderBy('id', 'desc')->first();

        $FileName = "plan_" . str_pad($loan->id, 5, "0", STR_PAD_LEFT) . uniqid();

        $doc = PDF::loadView('pdf.loan', ['loan' => $loan, 'method' => $this->method])->output();

        // save pdf
        Storage::put('public/loanspdf/' . $FileName . ".pdf", $doc);

        $this->sendWhatsApp($FileName . '.pdf');

        return response()->streamDownload(
            fn () => print($doc),
            $FileName . '.pdf'
        );
    }

    public function sendWhatsApp($filePDF)
    {
        $fileToSend = 'storage/loanspdf/' . $filePDF;

        if (file_exists($fileToSend)) {

            $loan = Loan::orderBy('id', 'desc')->first();
            $this->Loan($loan, $loan->customer->phone, $filePDF);
            //$this->dispatchBrowserEvent('noty',['msg' => 'Plan de pagos enciado']);
        } else {
            $this->dispatchBrowserEvent('noty-error', ['msg' => 'No existe el plan de pagos fisicamente en sistema']);
        }
    }

    public function setValueRate()
    {
        $this->rate = intval(Rate::find($this->rate_id)->percent);
    }


    public function Simulate()
    {
        if ($this->method == 'Frances') {
            if ($this->frecuency_id == 1) { //mensual
                $this->plan = $this->PlanMensual($this->rate, $this->amount, $this->years);
            } else if ($this->frecuency_id == 2) { //bimestral
                $this->plan = $this->PlanBimestral($this->rate, $this->amount, $this->years);
            } else if ($this->frecuency_id == 3) { // trimestral
                $this->plan = $this->PlanTrimestral($this->rate, $this->amount, $this->years);
            }
            // semanal
            // anual
        }
        if ($this->method == 'Aleman') {
            $this->plan = $this->PlanMensualAleman($this->rate, $this->amount, $this->years);
        }
    }

    public function previewPDF()
    {

        $FileName = "plan_" . str_pad("X", 5, "0", STR_PAD_LEFT) . uniqid();

        $doc = PDF::loadView('pdf.loan_prev', [
            'plan' => $this->plan,
            'method' => $this->method,
            'amount' => $this->amount,
            'customer' => Customer::find($this->customer_id),
            'rate' => Rate::find($this->rate_id),
            'frecuency' => Frecuency::find($this->frecuency_id)
        ])->output();


        return response()->streamDownload(
            fn () => print($doc),
            $FileName . '.pdf'
        );
    }
}
