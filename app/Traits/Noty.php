<?php

namespace App\Traits;

use UltraMsg\WhatsAppApi;
use Illuminate\Support\Facades\Log;

trait Noty
{

    private static $urlApi = "https://api.ultramsg.com/instance19045/";
    private static $instance = "instance19045";
    private static $token = "48jmb0txfdqbfoht";

    public function Loan($loan, $receptor, $pdf)
    {
        // dd($pdf);
        $result = false;
        $failMsg = '';

        try {

            $client = new WhatsAppApi(self::$token, self::$instance);

            $msg = "Notificación de préstamo\n";

            $msg .= "*Folio: *" . $loan->id . "\n";
            $msg .= "*Monto: *" . $loan->amount . "\n";
            $msg .= "*Tasa anual: *" . number_format($loan->rate->percent, 0) . "% \n";
            $msg .= "*Tasa mora: *" . number_format($loan->rate->fee, 0) . "% \n\n";

            $msg .= "Puedes revisar tu plan de pagos:" . "\n";
            // $msg .= "http://cashapp.test/storage/loanspdf/" . $pdf;

            // send basic info            
            $client->sendChatMessage($receptor, $msg);

            //send base64 pdf
            //$doc = "http://cashapp.test/storage/loanspdf/" . $pdf;
            $this->SendBase64File($receptor, $pdf);

            $result = true;
        } catch (\Throwable $th) {
            $result = false;
            $failMsg = $th->getMessage();
            Log::debug($failMsg); // Log
        }

        // option 1
        // if($result) {
        //     return $result;
        // } else {
        //     return $failMsg;
        // }

        // option 2
        return  $result ? true : $failMsg;
    }


    // método 2, envio en base64
    public function SendBase64File($receptor, $file)
    {
        $instance = self::$instance;
        $token = self::$token;
        $to = $receptor;
        /////////// 
        $path = "storage/loanspdf/" . $file;
        $data = file_get_contents($path);


        //Encodes data base64
        $img_base64 =  base64_encode($data);

        //urlencode — URL-encodes string  
        $img_base64 = urlencode($img_base64);
        ////////////
        $curl = curl_init();
        curl_setopt_array($curl, array(
            CURLOPT_URL => "https://api.ultramsg.com/$instance/messages/document",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => "",
            CURLOPT_SSL_VERIFYHOST => 0,
            CURLOPT_SSL_VERIFYPEER => 0,
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "POST",
            CURLOPT_POSTFIELDS => "token=$token&to=$to&document=$img_base64&filename=" . $file,
            CURLOPT_HTTPHEADER => array(
                "content-type: application/x-www-form-urlencoded"
            ),
        ));

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            Log::debug("cURL Error #:" . $err);
            return false;
        } else {
            Log::info("WhatsApp API Base64 Result:" . $response);
            return true;
        }
    }
}
