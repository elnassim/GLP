<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Votre Attestation de Réussite</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            line-height: 1.6;
            padding: 20px;
        }
        .container {
            background-color: #ffffff;
            padding: 20px;
            border-radius: 5px;
            max-width: 600px;
            margin: auto;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .header {
            text-align: center;
            padding-bottom: 20px;
        }
        .content {
            margin-bottom: 20px;
        }
        .footer {
            text-align: center;
            font-size: 0.9em;
            color: #777;
        }
        .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #e67320;
            color: #ffffff;
            text-decoration: none;
            border-radius: 5px;
            margin-top: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Bonjour,</h1>
        </div>
        <div class="content">
            <p>Votre demande de <strong>{{ $demande->document_type }}</strong> a été acceptée.</p>
            <p>Veuillez trouver le document en pièce jointe.</p>
        </div>
        <div class="footer">
            <p>Cordialement,</p>
            <p>L'équipe administrative</p>
        </div>
    </div>
</body>
</html>