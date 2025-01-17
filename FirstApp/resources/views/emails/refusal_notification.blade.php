<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Refusal of Your Request</title>
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
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Refusal of Your Request</h1>
        </div>
        <div class="content">
            <p>Dear Student,</p>
            <p>We regret to inform you that your request for <strong>{{ $documentType }}</strong> has been refused.</p>
            <p><strong>Reason for Refusal:</strong> {{ $reason }}</p>
        </div>
        <div class="footer">
            <p>Best regards,</p>
            <p>The Administrative Team</p>
        </div>
    </div>
</body>
</html>