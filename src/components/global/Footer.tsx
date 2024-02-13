import React from 'react';
import '../../styles/global/footer.scss'

const Footer = () => {

    let copyToClipboard = () => {
        const ipAddress = "play.wildya.fr";

        // Créer un élément de texte temporaire pour copier le contenu
        const tempInput = document.createElement("input");
        tempInput.value = ipAddress;
        document.body.appendChild(tempInput);

        // Sélectionner le texte dans l'élément de texte temporaire
        tempInput.select();
        tempInput.setSelectionRange(0, 99999); // Pour les navigateurs mobiles

        // Copier le texte dans le presse-papiers
        document.execCommand("copy");

        // Retirer l'élément de texte temporaire
        document.body.removeChild(tempInput);
    };

    return (
        <div className={'footer'}>
            <div className={'medias'}>
                <a href={'https://discord.gg/rankedtower'} target="_blank" rel="noopener noreferrer">
                    <img src={'/rt-web/icons/discord.svg'} alt={'discord icon'}/>
                </a>
                <a href={'https://www.youtube.com/@RankedTower'} target="_blank" rel="noopener noreferrer">
                    <img src={'/rt-web/icons/youtube.svg'} alt={'youtube icon'}/>
                </a>
                <a href={'https://www.tiktok.com/@ranked.tower'} target="_blank" rel="noopener noreferrer">
                    <img src={'/rt-web/icons/tiktok.svg'} alt={'tiktok icon'}/>
                </a>
            </div>
            <div className={'copyrights'}>
                <h3>Copyright © 2024 Ranked Tower</h3>
                <div className={'paragraph'}>
                    <p>Développé par Niko</p>
                    <p>Conçu par V12</p>
                </div>
            </div>
            <div className={'wildya-ip'}>
                <div className={'container'} onClick={copyToClipboard}>
                    <img src={'/rt-web/icons/server.svg'} alt={'server icon'}/>
                    <h3>play.wildya.fr</h3>
                </div>
            </div>
        </div>
    );
};

export default Footer;