// Frontend/src/Components/AboutUs.jsx
import React from 'react';
import './AboutUs.css'; // Import the custom CSS

function AboutUs() {
    return (
        <div className="aboutus-page">
            {/* Background section */}
            <div className="aboutus-background"></div>

            {/* Main content */}
            <div className="aboutus-container">
                <div className="aboutus-header">
                    <h1 className="aboutus-title">À Propos de Nous</h1>
                </div>
                <div className="aboutus-content">
                    <p>
                        Nasmy est la plateforme officielle, spécialement conçue pour faciliter et accélérer les démarches administratives des étudiants. Ce service, accessible à tous les étudiants, qu'ils soient en début de parcours ou en fin d'études, vous permet de suivre en temps réel l'état de vos demandes.
                    </p>
                    <p>
                        Créée pour répondre aux besoins uniques des étudiants, Nasmy simplifie particulièrement les demandes d'attestations et autres documents administratifs essentiels à votre parcours universitaire. Notre objectif principal est de rendre vos démarches administratives plus rapides, plus accessibles et entièrement numériques.
                    </p>
                    <p>
                        Nous avons conçu une interface intuitive qui vous guide pas à pas dans le processus de demande. En quelques minutes seulement, vous pouvez soumettre votre demande et recevoir les documents requis sans tracas.
                    </p>
                    <p>
                        Chez Nasmy, nous avons également mis l'accent sur la sécurité de vos informations. Toutes vos données sont traitées avec la plus grande confidentialité et selon des normes de sécurité strictes, pour vous offrir une expérience sereine et fiable.
                    </p>
                    <p>
                        En somme, Nasmy transforme l'expérience administrative des étudiants en un processus simple, rapide et totalement digitalisé, vous permettant ainsi de vous concentrer pleinement sur vos études.
                    </p>
                </div>
                <div className="aboutus-footer">
                    <p>Contactez-nous : <a href="mailto:contact@universite.com">contact@universite.com</a></p>
                    <p>© 2024 Nasmy. Tous droits réservés.</p>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
