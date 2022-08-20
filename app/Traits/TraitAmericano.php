<?php

namespace App\Traits;

use Carbon\Carbon;

trait TraitAmericano
{

    public function PlanMensualAmericano($rate, $amount, $years)
    {
        // cálculos base
        $CUOTAS = $years * 12;
        $TASA_MENSUAL = $rate / 12;
        $PRESTAMO = $amount;
        // NO HAY AMORTIZACION

        //variables calculadas
        $InteresCalculado = 0;
        $CuotaPago = 0;
        $CapitalVivo = 0;
        $SumaIntereses = 0;
        $SumaCuotas = 0;

        $tabla = collect();

        for ($i = 1; $i <= $CUOTAS; $i++) {

            if ($i == 1) {
                $CapitalVivo = $PRESTAMO;
                $InteresCalculado = ($CapitalVivo * $TASA_MENSUAL) / 100;
                $CuotaPago = $InteresCalculado;
            } else {
                $InteresCalculado = ($CapitalVivo * $TASA_MENSUAL) / 100;
                if ($i < $CUOTAS) {
                    // pago de 2 - 11
                    $CuotaPago = $InteresCalculado;
                } else {
                    // último pago 12
                    $CuotaPago = $InteresCalculado + $PRESTAMO;
                    $CapitalVivo -= $PRESTAMO;
                }
            }

            $SumaIntereses += $InteresCalculado;
            $SumaCuotas += $CuotaPago;

            // fecha pago para cada periodo
            $payDate = Carbon::now()->addMonth($i == 1 ? 1 : $i + 1);

            // agregar el item a la colección
            if ($i == 1) {
                $tabla = collect([[
                    'FECHA' => $payDate->toDateString(),
                    'CUOTA' => number_format($CuotaPago, 2),
                    'INTERESES' => number_format($InteresCalculado, 2),
                    'PENDIENTE' => number_format($CapitalVivo, 2),
                ]]);
            } else {
                $tabla->push([
                    'FECHA' => $payDate->toDateString(),
                    'CUOTA' => number_format($CuotaPago, 2),
                    'INTERESES' => number_format($InteresCalculado, 2),
                    'PENDIENTE' => number_format($CapitalVivo, 2),
                ]);
            }
        }

        // RESUMEN DEL HISTORIAL
        $tabla->prepend([
            'RESUMEN'  => '',
            'TOTAL PAGADO' => number_format($SumaCuotas, 2),
            'INTERESES' => number_format($SumaIntereses, 2),
            'PENDIENTE' => number_format($CapitalVivo, 2),
        ]);

        dd($tabla);
    }
}
