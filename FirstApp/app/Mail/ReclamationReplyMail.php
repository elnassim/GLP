<?php
// filepath: FirstApp/app/Mail/ReclamationReplyMail.php



namespace App\Mail;

use App\Models\Reclamation;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ReclamationReplyMail extends Mailable
{
    use Queueable, SerializesModels;

    public $reclamation;

    /**
     * Create a new message instance.
     *
     * @param Reclamation $reclamation
     * @return void
     */
    public function __construct(Reclamation $reclamation)
    {
        $this->reclamation = $reclamation;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Response to Your Reclamation')
                    ->view('emails.reclamation_reply') // Ensure this matches the template path
                    ->with([
                        'response' => $this->reclamation->response,
                        'sujet'    => $this->reclamation->sujet,
                        'description' => $this->reclamation->description, // Add if needed
                    ]);
    }
}