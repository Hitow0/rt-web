import React, {useState} from 'react';
import '../../styles/global/navbar.scss'

const NavBar = () => {

    const [isMenuVisible, setMenuVisible] = useState(false);
    const [isPalmaresMenuVisible, setPalmaresMenuVisible] = useState(false);
    const [currentPage, setCurrentPage] = useState('accueil'); // Ajout de la variable d'état

    const toggleMenu = () => {
        setCurrentPage('burger')
        setMenuVisible(!isMenuVisible);
        setPalmaresMenuVisible(false)
    };

    const togglePalmaresMenu = () => {
        setCurrentPage('palmares')
        setPalmaresMenuVisible(!isPalmaresMenuVisible);
    };

    const openMapsLink = () => {
        const link = 'https://docs.wildya.fr/section-jeux/towerfast/cartes-disponibles';
        window.open(link, '_blank');
    };

    const changePage = (value: string) => {
        setCurrentPage(value);
    };

    return (
        <div className={'nav'}>
            <div className={'logo'}>
                <img src={'/rankedtower-web/img/Logo.png'} alt={'Logo RT'}/>
            </div>
            <div className={'navlink'}>
                <div className={`link ${currentPage === 'accueil' ? 'active' : ''}`}
                     onClick={() => changePage('accueil')}>
                    <img src={'/rankedtower-web/icons/home.svg'} alt={'home icon'}/>
                    <p>Accueil</p>
                </div>
                <div className={`link ${currentPage === 'leaderboard' ? 'active' : ''}`}
                     onClick={() => changePage('leaderboard')}>
                    <img src={'/rankedtower-web/icons/leaderboard.svg'} alt={'medal icon'}/>
                    <p>Leaderboard</p>
                </div>
                <div className={`link ${currentPage === 'palmares' ? 'active' : ''}`}
                     onClick={() => {togglePalmaresMenu()} }>
                         < img src={'/rankedtower-web/icons/palmares.svg'} alt={'palmares icon'}/>
                         <p>Palmarès</p>
                     {!isPalmaresMenuVisible && (
                         <img src={'/rankedtower-web/icons/polygon.svg'} alt={'polygon icon'} className={'polygon'}/>
                )}
                {isPalmaresMenuVisible && (
                <img src={'/rankedtower-web/icons/polygon.svg'} alt={'polygon icon'}
                     style={{transform: 'rotate(180deg)'}}/>
                )}
            </div>
            {isPalmaresMenuVisible && (
                <div className={'palmares-menu'}>
                    <div className={`link ${currentPage === 'all stars 1' ? 'active' : ''}`}
                         onClick={() => changePage('all stars 1')}>
                        <img src={'/rankedtower-web/icons/palmares.svg'} alt={'palmares icon'}/>
                        <p>All Stars 1</p>
                        </div>
                    <div className={`link ${currentPage === 'all stars 2' ? 'active' : ''}`} onClick={() => changePage('all stars 2')}>
                            <img src={'/rankedtower-web/icons/palmares.svg'} alt={'palmares icon'}/>
                            <p>All Stars 2</p>
                        </div>
                    <div className={`link ${currentPage === 'all stars 3' ? 'active' : ''}`} onClick={() => changePage('all stars 3')}>
                            <img src={'/rankedtower-web/icons/palmares.svg'} alt={'palmares icon'}/>
                            <p>All Stars 3</p>
                        </div>
                    <div className={`link ${currentPage === 'all stars 4' ? 'active' : ''}`}
                         onClick={() => changePage('all stars 4')}>
                        <img src={'/rankedtower-web/icons/palmares.svg'} alt={'palmares icon'}/>
                        <p>All Stars 4</p>
                    </div>
                </div>
            )}
                <div className={`link ${currentPage === 'support' ? 'active' : ''}`}
                     onClick={() => changePage('support')}>
                    <img src={'/rankedtower-web/icons/support.svg'} alt={'support icon'}/>
                    <p>Support</p>
                </div>
                <div className={`link ${currentPage === 'staffs' ? 'active' : ''}`}
                     onClick={() => changePage('staffs')}>
                    <img src={'/rankedtower-web/icons/staff.svg'} alt={'shield icon'}/>
                    <p>Staffs</p>
                </div>
                <div className={'link'} onClick={openMapsLink}>
                    <img src={'/rankedtower-web/icons/map.svg'} alt={'pin icon'}/>
                    <p>Maps</p>
                </div>
                <div className={`link ${currentPage === 'rules' ? 'active' : ''}`}
                     onClick={() => changePage('rules')}>
                    <img src={'/rankedtower-web/icons/rules.svg'} alt={'list icon'}/>
                    <p>Règlement</p>
                </div>
            </div>
            <div className={`burger ${currentPage === 'burger' ? 'active' : ''}`}
                     onClick={() => {toggleMenu()}}>
                <img src={'/rankedtower-web/icons/burger-menu.svg'} alt={'burger menu icon'}/>
            </div>

            {isMenuVisible && (
                <div className={'menu'}>
                    <div className={`link ${currentPage === 'accueil' ? 'active' : ''}`}
                         onClick={() => changePage('accueil')}>
                        <img src={'/rankedtower-web/icons/home.svg'} alt={'home icon'}/>
                        <p>Accueil</p>
                    </div>
                    <div className={`link ${currentPage === 'leaderboard' ? 'active' : ''}`}
                         onClick={() => changePage('leaderboard')}>
                        <img src={'/rankedtower-web/icons/leaderboard.svg'} alt={'medal icon'}/>
                        <p>Leaderboard</p>
                    </div>
                    <div className={`link ${currentPage === 'palmares' ? 'active' : ''}`} onClick={togglePalmaresMenu}>
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
                            <div className={`link ${currentPage === 'all stars 1' ? 'active' : ''}`}
                                 onClick={() => changePage('all stars 1')}>
                                <img src={'/rankedtower-web/icons/palmares.svg'} alt={'palmares icon'}/>
                                <p>All Stars 1</p>
                            </div>
                            <div className={`link ${currentPage === 'all stars 2' ? 'active' : ''}`} onClick={() => changePage('all stars 2')}>
                                <img src={'/rankedtower-web/icons/palmares.svg'} alt={'palmares icon'}/>
                                <p>All Stars 2</p>
                            </div>
                            <div className={`link ${currentPage === 'all stars 3' ? 'active' : ''}`}
                                 onClick={() => changePage('all stars 3')}>
                                <img src={'/rankedtower-web/icons/palmares.svg'} alt={'palmares icon'}/>
                                <p>All Stars 3</p>
                            </div>
                            <div className={`link ${currentPage === 'all stars 4' ? 'active' : ''}`}
                                 onClick={() => changePage('all stars 4')}>
                                <img src={'/rankedtower-web/icons/palmares.svg'} alt={'palmares icon'}/>
                                <p>All Stars 4</p>
                            </div>
                        </div>
                    )}
                    <div className={`link ${currentPage === 'support' ? 'active' : ''}`}
                         onClick={() => changePage('support')}>
                        <img src={'/rankedtower-web/icons/support.svg'} alt={'support icon'}/>
                        <p>Support</p>
                    </div>
                    <div className={`link ${currentPage === 'staffs' ? 'active' : ''}`}
                         onClick={() => changePage('staffs')}>
                        <img src={'/rankedtower-web/icons/staff.svg'} alt={'shield icon'}/>
                        <p>Staffs</p>
                    </div>
                    <div className={'link'} onClick={openMapsLink}>
                        <img src={'/rankedtower-web/icons/map.svg'} alt={'pin icon'}/>
                        <p>Maps</p>
                    </div>
                    <div className={`link ${currentPage === 'rules' ? 'active' : ''}`}
                         onClick={() => changePage('rules')}>
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