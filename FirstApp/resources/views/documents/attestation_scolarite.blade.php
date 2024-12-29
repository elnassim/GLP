<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Attestation de Scolarité</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #f4f4f4;
        }

        .container {
            width: 210mm; /* A4 width */
            height: 297mm; /* A4 height */
            background-color: #fff;
            padding: 20mm;
            box-sizing: border-box;
            border: 1px solid #ddd;
            display: flex;
            flex-direction: column;
        }

        .header {
            text-align: center;
        }

        .header img {
            width: 100px;
            margin-bottom: 10px;
        }

        .header-title {
            text-transform: uppercase;
            font-weight: bold;
            font-size: 14px;
            margin-top: 0;
            line-height: 1.2;
        }

        .main-title {
            text-transform: uppercase;
            font-size: 20px;
            font-weight: bold;
            margin: 20px 0;
            text-align: center;
        }

        .content {
            text-align: left;
            font-size: 14px;
            line-height: 1.6;
        }

        .content p {
            margin: 10px 0;
        }

        .content .bold {
            font-weight: bold;
            text-decoration: underline;
        }

        .footer {
            margin-top: 40px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            font-size: 14px;
        }

        .footer .signature img {
            width: 120px;
        }

        .footer .signature {
            text-align: center;
        }
    </style>
</head>
<body>

    <div class="container">
        <!-- En-tête avec logo -->
        <div class="header">
            <img src="{{ public_path('assets/logo-ensa.png') }}" alt="Logo de l'école">
            <p class="header-title">
                ÉCOLE NATIONALE DES <br>
                SCIENCES APPLIQUÉES <br>
                DE TÉTOUAN
            </p>
        </div>

        <!-- Titre principal -->
        <p class="main-title">Attestation de Scolarité</p>

        <!-- Contenu de l'attestation -->
        <div class="content">
            <p>Le Directeur de l'École Nationale des Sciences Appliquées de Tétouan atteste que l'étudiant :</p>
            <p>Monsieur <span class="bold">{{ $demande->student_name }}</span></p>
            <p>Numéro de la carte d'identité nationale : <span class="bold">{{ $demande->cin }}</span></p>
            <p>Code national de l'étudiant : <span class="bold">{{ $demande->apogee }}</span></p>
            <p>Né le <span class="bold">{{ $demande->birth_date }}</span> à <span class="bold">{{ $demande->birth_place }}</span></p>
            <p>Poursuit ses études à l'École Nationale des Sciences Appliquées de Tétouan pour l'année universitaire 2024/2025.</p>
            <p>Diplôme : <span class="bold">Diplôme d'ingénierie - Génie informatique</span></p>
            <p>Filière : <span class="bold">Ingénieur G. Informatique</span></p>
            <p>Année : <span class="bold">2ᵉ année du cycle ingénierie - Génie informatique</span></p>
        </div>

        <!-- Pied de page -->
        <div class="footer">
            <p>Fait à Tétouan, le <span class="bold">{{ \Carbon\Carbon::now()->format('d/m/Y') }}</span></p>
            <div class="signature">
                <img src="{{ public_path('assets/signature.png') }}" alt="Signature du directeur">
                <p>Le Directeur</p>
            </div>
        </div>
    </div>

</body>
</html>