<div>
    <!-- CONTENT AREA -->
    <div class="row">
        <div class="col-lg-12 layout-spacing layout-top-spacing">
            <div class="statbox widget box box-shadow">
                <div class="widget-header">
                    <div class="row">
                        <div class="col-sm-12 col-md-10">
                            <h4><b> NEW LOAN </b>
                            </h4>
                        </div>

                        <div class="col-sm-12 col-md-2 d-flex justify-content-end p-3">
                            <div class="btn-group" role="group">
                                <button wire:click.prevent="Save" class="btn btn-sm btn-dark">SAVE LOAN </button>
                                <button class="btn btn-sm btn-primary">PREVIEW PDF </button>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="widget-content widget-content-area">
                    <div class="row">
                        <div class="col-sm-12">
                            <button wire:click.prevent="Simulate" class="btn btn-primary">SIMULATE</button>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-sm-12 col-md-3">
                            CUSTOMER
                            <select wire:model="customer_id" id="tomselect" class="form-control form-control-sm">
                                <option value="">SELECT</option>
                                @foreach($customers as $customer)
                                <option value="{{ $customer->id }}">{{ $customer->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-sm-12 col-md-2">
                            AMOUNT
                            <input wire:model.lazy="amount" type="number" id="amount" class="form-control form-control-sm text-center" min="1">
                        </div>
                        <div class="col-sm-12 col-md-2">
                            RATE (%)
                            <select wire:model="rate_id" wire:change="setValueRate" class="form-select form-select-sm">
                                <option value="0" selected disabled>SELECT</option>
                                @foreach($rates as $rate)
                                <option value="{{ $rate->id }}">{{ number_format($rate->percent),0 }}</option>
                                @endforeach
                            </select>

                        </div>
                        <div class="col-sm-12 col-md-1">
                            YEARS
                            <input wire:model.lazy="years" type="number" id="years" class="form-control form-control-sm text-center" min="1">
                        </div>
                        <div class="col-sm-12 col-md-2">
                            FRECUENCY OF PAYMENT
                            <select wire:model="frecuency_id" class="form-select form-select-sm">
                                <option value="0" selected disabled>SELECT</option>
                                @foreach($frecuencies as $frecuency)
                                <option value="{{ $frecuency->id }}">{{ $frecuency->name }}</option>
                                @endforeach
                            </select>
                        </div>
                        <div class="col-sm-12 col-md-2">
                            AMORT METHOD
                            <select wire:model="method" class="form-select form-select-sm">
                                <option value="Frances">Método Francés</option>
                                <option value="Aleman">Método Aleman</option>
                                <option value="Americano">Método Americano</option>
                            </select>
                        </div>
                    </div>
                    <div class="table-responsive mt-4">
                        {{$statusComponent}}
                        <table class="table">
                            <thead>
                                <tr>
                                    <th class="text-center">DATE</th>
                                    <th class="text-center">PAY</th>
                                    <th class="text-center">AMORT</th>
                                    <th class="text-center">INTEREST</th>
                                    <th class="text-center">BALANCE</th>
                                </tr>

                            </thead>
                            <tbody>
                                @forelse($plan as $key => $item)
                                @if($key > 0)
                                <tr>
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
                            <tfoot>
                                @if(count($plan)>0)
                                <tr class="text-warning">
                                    <td>RESUMEN</td>
                                    <td>TOTAL PAGADO: {{ $plan[0]['TOTAL PAGADO'] }}</td>
                                    <td>INTERESES: {{ $plan[0]['INTERESES'] }}</td>
                                    <td>AMORTIZACION:{{ $plan[0]['AMORTIZACION'] }}</td>
                                    <td>BALANCE: {{ $plan[0]['PENDIENTE'] }}</td>
                                </tr>
                                @endif
                            </tfoot>
                        </table>

                    </div>
                    <div class="mt-2">

                    </div>

                </div>
            </div>
        </div>


    </div>





    @include('livewire.loans.script')
    <style>
        .ts-control {
            padding: 0px !important;
            border-style: none;
            border-width: 0px !important;
        }

        #tomselect-ts-control {
            background-color: #1B2E4B !important;
        }

        #tomselect-ts-dropdown {
            color: #009688 !important
        }

        .ts-control>.item {
            color: #009688 !important;
        }
    </style>
    <script>

    </script>
</div>