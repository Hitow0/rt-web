import React, {useState} from 'react';
import '../../styles/global/navbar.scss'

const NavBar = () => {

    const [isMenuVisible, setMenuVisible] = useState(false);
    const [isPalmaresMenuVisible, setPalmaresMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!isMenuVisible);
        setPalmaresMenuVisible(false)
    };

    const togglePalmaresMenu = () => {
        setPalmaresMenuVisible(!isPalmaresMenuVisible);
    };

    const openMapsLink = () => {
        const link = 'https://docs.wildya.fr/section-jeux/towerfast/cartes-disponibles';
        window.open(link, '_blank');
    };

    return (
        <div className={'nav'}>
            <div className={'logo'}>
                <img src={'/rankedtower-web/img/Logo.png'} alt={'Logo RT'}/>
            </div>
            <div className={'navlink'}>
                <div className={'link'}>
                    <img src={'/rankedtower-web/icons/home.svg'} alt={'home icon'}/>
                    <p>Accueil</p>
                </div>
                <div className={'link'}>
                    <img src={'/rankedtower-web/icons/leaderboard.svg'} alt={'medal icon'}/>
                    <p>Leaderboard</p>
                </div>
                <div className={'link'} onClick={togglePalmaresMenu}>
                    <img src={'/rankedtower-web/icons/palmares.svg'} alt={'palmares icon'}/>
                    <p>Palmarès</p>
                    {!isPalmaresMenuVisible && (
                        <img src={'/rankedtower-web/icons/polygon.svg'} alt={'polygon icon'} className={'polygon'}/>
                    )}
                    {isPalmaresMenuVisible && (
                        <img src={'/rankedtower-web/icons/polygon.svg'} alt={'polygon icon'} style={{transform: 'rotate(180deg)'}}/>
                    )}
                </div>
                {isPalmaresMenuVisible && (
                    <div className={'palmares-menu'}>
                        <div className={'link'}>
                            <img src={'/rankedtower-web/icons/palmares.svg'} alt={'palmares icon'}/>
                            <p>All Stars 1</p>
                        </div>
                        <div className={'link'}>
                            <img src={'/rankedtower-web/icons/palmares.svg'} alt={'palmares icon'}/>
                            <p>All Stars 4</p>
                        </div>
                        <div className={'link'}>
                            <img src={'/rankedtower-web/icons/palmares.svg'} alt={'palmares icon'}/>
                            <p>All Stars 3</p>
                        </div>
                        <div className={'link'}>
                            <img src={'/rankedtower-web/icons/palmares.svg'} alt={'palmares icon'}/>
                            <p>All Stars 4</p>
                        </div>
                    </div>
                )}
                <div className={'link'}>
                    <img src={'/rankedtower-web/icons/support.svg'} alt={'support icon'}/>
                    <p>Support</p>
                </div>
                <div className={'link'}>
                    <img src={'/rankedtower-web/icons/staff.svg'} alt={'shield icon'}/>
                    <p>Staffs</p>
                </div>
                <div className={'link'} onClick={openMapsLink}>
                    <img src={'/rankedtower-web/icons/map.svg'} alt={'pin icon'}/>
                    <p>Maps</p>
                </div>
                <div className={'link'}>
                    <img src={'/rankedtower-web/icons/rules.svg'} alt={'list icon'}/>
                    <p>Règlement</p>
                </div>
            </div>
            <div className={'burger'} onClick={toggleMenu}>
                <img src={'/rankedtower-web/icons/burger-menu.svg'} alt={'burger menu icon'}/>
            </div>

            {isMenuVisible && (
                <div className={'menu'}>
                    <div className={'link'}>
                        <img src={'/rankedtower-web/icons/home.svg'} alt={'home icon'}/>
                        <p>Accueil</p>
                    </div>
                    <div className={'link'}>
                        <img src={'/rankedtower-web/icons/leaderboard.svg'} alt={'medal icon'}/>
                        <p>Leaderboard</p>
                    </div>
                    <div className={'link'} onClick={togglePalmaresMenu}>
                        <img src={'/rankedtower-web/icons/palmares.svg'} alt={'palmares icon'}/>
                        <p>Palmarès</p>
                        {!isPalmaresMenuVisible && (
                            <img src={'/rankedtower-web/icons/polygon.svg'} alt={'polygon icon'} className={'polygon'}/>
                        )}
                        {isPalmaresMenuVisible && (
                            <img src={'/rankedtower-web/icons/polygon.svg'} alt={'polygon icon'} style={{transform: 'rotate(90deg)'}}/>
                        )}
                    </div>
                    {isPalmaresMenuVisible && (

                        <div className={'palmares-menu'}>
                            <div className={'link'}>
                                <img src={'/rankedtower-web/icons/palmares.svg'} alt={'palmares icon'}/>
                                <p>All Stars 1</p>
                            </div>
                            <div className={'link'}>
                                <img src={'/rankedtower-web/icons/palmares.svg'} alt={'palmares icon'}/>
                                <p>All Stars 4</p>
                            </div>
                            <div className={'link'}>
                                <img src={'/rankedtower-web/icons/palmares.svg'} alt={'palmares icon'}/>
                                <p>All Stars 3</p>
                            </div>
                            <div className={'link'}>
                                <img src={'/rankedtower-web/icons/palmares.svg'} alt={'palmares icon'}/>
                                <p>All Stars 4</p>
                            </div>
                        </div>
                    )}
                    <div className={'link'}>
                        <img src={'/rankedtower-web/icons/support.svg'} alt={'support icon'}/>
                        <p>Support</p>
                    </div>
                    <div className={'link'}>
                        <img src={'/rankedtower-web/icons/staff.svg'} alt={'shield icon'}/>
                        <p>Staffs</p>
                    </div>
                    <div className={'link'} onClick={openMapsLink}>
                        <img src={'/rankedtower-web/icons/map.svg'} alt={'pin icon'}/>
                        <p>Maps</p>
                    </div>
                    <div className={'link'}>
                        <img src={'/rankedtower-web/icons/rules.svg'} alt={'list icon'}/>
                        <p>Règlement</p>
                    </div>
                </div>
            )}
            <div className={'search'}>
                <div className={'container'}>
                    <div className={'icon'}>
                        <div className={'bar'}></div>
                    </div>
                    <div className={'search-inner'}>
                        <input type={'text'} placeholder={'Rechercher...'}></input>
                    </div>
                    <button type={'button'} className={'search-button'}>
                        <img src={'/rankedtower-web/icons/search.svg'} alt={'search icon'}/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NavBar;