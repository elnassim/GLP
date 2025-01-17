<?php

namespace App\Http\Controllers;

use Mpdf\Mpdf;

class PDFController
{
    public function generateAttestationScolarite($data)
    {
        $mpdf = new Mpdf();
        $html = view('documents.attestation_scolarite', $data)->render();
        $mpdf->WriteHTML($html);
        return $mpdf->Output('', 'S'); // Return PDF as string
    }
}