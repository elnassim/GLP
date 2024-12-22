<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class DocumentRequestMail extends Mailable
{
    use SerializesModels;

    protected $documentPath;
    protected $documentType;

    public function __construct($documentPath, $documentType)
    {
        $this->documentPath = $documentPath;
        $this->documentType = $documentType;
    }

    public function build()
    {
        return $this->view('emails.document_request')
                    ->subject('Votre demande de document a été acceptée')
                    ->attach($this->documentPath, [
                        'as' => $this->documentType . '.pdf',
                        'mime' => 'application/pdf',
                    ]);
    }
}