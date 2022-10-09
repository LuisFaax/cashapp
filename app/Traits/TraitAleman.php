<?php

namespace App\Traits;

use Carbon\Carbon;

trait TraitAleman
{

    public function PlanMensualAleman($rate, $amount, $years)
    {
        // cálculos base
        $CUOTAS = $years * 12;
        $TASA_MENSUAL = $rate / 12;
        $PRESTAMO = $amount;
        $AMORTIZACION_FIJA = $PRESTAMO / $CUOTAS;

        // variables dinámicas / calculadas
        $InteresCalculado = 0;
        $CapitalVivo = 0;
        $CuotaPago = 0;
        $SumaIntereses = 0;
        $SumaCuotas = 0;
        $sumaAmortizacionesPerido = 0;
        $tabla = collect();

        for ($i = 1; $i <= $CUOTAS; $i++) {

            // capital vivo / saldo / balance
            if ($i == 1)
                $CapitalVivo = $PRESTAMO;
            else
                $CapitalVivo = ($CapitalVivo - $AMORTIZACION_FIJA);

            // interes del periodo
            $InteresCalculado = ($TASA_MENSUAL * $CapitalVivo) / 100;

            // cuota a pagar
            $CuotaPago = $AMORTIZACION_FIJA + $InteresCalculado;

            // suma de intereses
            $SumaIntereses += $InteresCalculado;

            // sumar cuotas
            $SumaCuotas += $CuotaPago;

            // suma de la amortización de cada periodo
            $sumaAmortizacionesPerido += $AMORTIZACION_FIJA;

            // fecha de pago del periodo
            $payDate = Carbon::now()->addMonth($i  == 1 ? 1 : $i + 1);

            if ($i == 1) {
                $tabla = collect([[
                    'FECHA' => $payDate->toDateString(),
                    'CUOTA' => number_format($CuotaPago, 2),
                    'AMORTIZACION' => number_format($AMORTIZACION_FIJA, 2),
                    'INTERESES' => number_format($InteresCalculado, 2),
                    'PENDIENTE' => number_format($CapitalVivo - $AMORTIZACION_FIJA, 2)
                ]]);
            } else {
                $tabla->push([[
                    'FECHA' => $payDate->toDateString(),
                    'CUOTA' => number_format($CuotaPago, 2),
                    'AMORTIZACION' => number_format($AMORTIZACION_FIJA, 2),
                    'INTERESES' => number_format($InteresCalculado, 2),
                    'PENDIENTE' => number_format($CapitalVivo - $AMORTIZACION_FIJA, 2)
                ]]);
            }
        }

        // agregar los totales
        $tabla->prepend([
            'RESUMEN' => '',
            'TOTAL PAGADO' => number_format($SumaCuotas, 2),
            'AMORTIZACION' => number_format($sumaAmortizacionesPerido, 2),
            'INTERESES' => number_format($SumaIntereses, 2),
            'PENDIENTE' => 0
        ]);

        dd($tabla);
        return $tabla;
    }
}
