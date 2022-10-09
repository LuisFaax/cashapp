<!DOCTYPE html>
<html class="no-js" lang="en">

<head>
    <!-- Meta Tags -->
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Laralink">
    <!-- Site Title -->
    <title>Plan de Pagos</title>

    <!-- cargar a través de la url del sistema 
        <link rel="stylesheet" href="{{ asset('css/style_pdf.css') }}">
    -->

    <!-- ruta física relativa al OS -->
    <link rel="stylesheet" href="{{ public_path('css/style_pdf.css') }}">
    <style>
        @page {
            margin-top: 0px !important;
            margin-bottom: 5px;
            margin-left: 0.5cm;
            margin-right: 0;
        }
    </style>
</head>

<body>
    <div class="">
        <div class="tm_invoice_wrap">
            <div class="tm_invoice tm_style1" id="tm_download_section">
                <div class="tm_invoice_in">
                    <div class="tm_invoice_head tm_align_center tm_mb20">
                        <div class="tm_invoice_left">
                            <div class="tm_logo"><img src="{{ asset('logo.png') }}" alt="Logo"></div>
                        </div>
                        <div class="tm_invoice_right tm_text_right">
                            <div class="tm_primary_color tm_f50 tm_text_uppercase">SISTEMA CASHAPP</div>
                            <h6>Simulación Plan de Pagos</h6>
                        </div>
                    </div>
                    <div class="tm_invoice_info tm_mb20">
                        <div class="tm_invoice_seperator tm_gray_bg"></div>
                        <div class="tm_invoice_info_list">
                            <p class="tm_invoice_number tm_m0">
                                Socio: <b class="tm_primary_color">#{{str_pad($customer->id, 5, "0", STR_PAD_LEFT)}} {{$customer->name}}</b>
                                Frecuencia: <b class="tm_primary_color">{{ $frecuency->name }}</b>
                            </p>
                            <p class="tm_invoice_date tm_m0">
                                Monto Prestado: <b class="tm_primary_color">${{number_format($amount,2)}}</b>
                                Tasa Anual: <b class="tm_primary_color">{{number_format($rate->percent,0)}}%</b>
                                Interés Mora: <b class="tm_primary_color">{{number_format($rate->fee,0)}}%</b>
                                Método: <b class="tm_primary_color">{{$method}}</b>
                            </p>
                        </div>
                    </div>

                    <div class="tm_table tm_style1 tm_mb30">
                        <div class="tm_round_border">
                            <div class="tm_table_responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th class="tm_width_1 tm_semi_bold tm_primary_color tm_gray_bg">#</th>
                                            <th class="tm_width_3 tm_semi_bold tm_primary_color tm_gray_bg">DATE</th>
                                            <th class="tm_width_2 tm_semi_bold tm_primary_color tm_gray_bg">PAY</th>
                                            <th class="tm_width_2 tm_semi_bold tm_primary_color tm_gray_bg">AMORT</th>
                                            <th class="tm_width_2 tm_semi_bold tm_primary_color tm_gray_bg">INTEREST</th>
                                            <th class="tm_width_3 tm_semi_bold tm_primary_color tm_gray_bg">BALANCE</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        @forelse($plan as $key => $item)
                                        @if($key > 0)
                                        <tr>
                                            <td class="text-center">{{ $key }}</td>
                                            <td class="text-center">{{ $item['FECHA'] }}</td>
                                            <td class="text-center">${{ number_format($item['CUOTA'],2) }}</td>
                                            <td class="text-center">${{ number_format($item['AMORTIZACION'],2) }}</td>
                                            <td class="text-center">${{ number_format($item['INTERESES'],2) }}</td>
                                            <td class="text-center">${{ number_format($item['PENDIENTE'],2) }}</td>
                                        </tr>
                                        @endif
                                        @empty
                                        <tr>
                                            <td>NO RESULTS</td>
                                        </tr>
                                        @endforelse
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                    <div class="tm_padd_15_20 tm_round_border">
                        <p class="tm_mb5"><b class="tm_primary_color">Firma de conformidad</b></p>
                        <hr>
                        <p style="margin-top: 25px;">
                            Socio: {{$customer->name}}
                        </p>
                    </div><!-- .tm_note -->
                </div>
            </div>

        </div>
    </div>

</body>

</html>