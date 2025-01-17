<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use App\Models\Demande;

class RefusalNotificationMail extends Mailable
{
    use Queueable, SerializesModels;

    public $demande;

    /**
     * Create a new message instance.
     *
     * @param Demande $demande
     */
    public function __construct(Demande $demande)
    {
        $this->demande = $demande;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Refusal of Your Request')
                    ->view('emails.refusal_notification')
                    ->with([
                        'reason' => $this->demande->refusal_reason,
                        'documentType' => $this->demande->document_type,
                    ]);
    }
}