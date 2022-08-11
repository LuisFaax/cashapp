<?php

namespace App\Traits;

use Carbon\Carbon;

trait TraitFrances
{
    private static $decimales = 2;
    // monto de pago
    function PMT($interest, $num_of_payments, $pv, $fv = 0.00, $Type = 0)
    {
        $expo = pow((1 + $interest), $num_of_payments);

        return ($pv * $interest * $expo / ($expo - 1) + $interest / ($expo - 1) * $fv) *
            ($Type == 0 ? 1 : 1 / ($interest + 1));
    }

    public function PayM($rate, $amount, $years) // pagos mensuales (1,2,3)
    {
        $interes = (0.01 * ($rate)) / 12;
        $monto = $amount;
        $periods = $years * 12;

        $pay = $this->PMT($interes, $periods, $monto);
        return $pay;
    }

    public function PlanMensual($rate, $amount, $years)
    {
        $prestamo = $amount;
        $tipo = (0.01 * ($rate)) / 12;
        $meses = $years * 12;
        $cuota = round($this->PayM($rate, $amount, $years), 2);
        $tabla = collect();
        //dd($cuota);

        //variables dinámicas
        $INTERESES = 0;
        $TINTERESES = 0;
        $AMORTIZACION = 0;
        $TAMORTIZACION = 0;
        $TCUOTAS = 0;
        $PENDIENTE = $prestamo;

        for ($i = 1; $i <= $meses; $i++) {
            $INTERESES = round($PENDIENTE * $tipo, 2);
            $TINTERESES += $INTERESES;
            $AMORTIZACION = round($cuota - $INTERESES, 2);
            $TAMORTIZACION += $AMORTIZACION;
            $PENDIENTE -= $AMORTIZACION;
            $TCUOTAS += $cuota;

            $payDate = Carbon::now()->addMonth($i - 1);

            if ($i == 1) {
                $tabla = collect([[
                    'FECHA' => $payDate->toDateString(),
                    'CUOTA' => $cuota,
                    'AMORTIZACION' => $AMORTIZACION,
                    'INTERESES' => $INTERESES,
                    'PENDIENTE' => $PENDIENTE
                ]]);
            } else {
                $tabla->push([
                    'FECHA' => $payDate->toDateString(),
                    'CUOTA' => $cuota,
                    'AMORTIZACION' => $AMORTIZACION,
                    'INTERESES' => $INTERESES,
                    'PENDIENTE' => $PENDIENTE
                ]);
            }
        }
        // add totales / sumatoria
        $tabla->prepend([
            'FECHA' => $payDate->toDateString(),
            'CUOTA' => $cuota,
            'AMORTIZACION' => $AMORTIZACION,
            'INTERESES' => $INTERESES,
            'PENDIENTE' => $PENDIENTE
        ]);

        return $tabla;
    }
}
