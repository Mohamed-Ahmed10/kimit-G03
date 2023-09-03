import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faSun } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../context/ThemeContext';
function SiteNav() {
    const { t } = useTranslation();
    const theme = useContext(ThemeContext)

    let changeLAnguage = () => {
        i18n.language === "en" ? i18n.changeLanguage('ar') : i18n.changeLanguage('en');
        localStorage.setItem("language", i18n.language)
    }
    useEffect(() => {
        i18n.changeLanguage(localStorage.getItem("language"))
    }, [])
    return (
        <Navbar expand="md" className="bg-secondary position-fixed top-0 w-100">
            <Container>
                <NavLink className='navbar-brand' to="/">
                    {t('home')}
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={i18n.language === "en" ? "ms-auto" : "me-auto"}>
                        <NavLink className='nav-link' to="/todo">{t('todo')}</NavLink>
                        <NavLink className='nav-link' to="/products">{t('products')}</NavLink>
                        <NavLink className='nav-link' to="/cart">{t('cart')}</NavLink>
                        <NavLink className='nav-link' to="/add">{t('add_new')}</NavLink>
                        <NavLink className='nav-link' to="/redux">{t('redux')}</NavLink>
                        <FontAwesomeIcon className="fa-2x m-1" icon={faLanguage} onClick={changeLAnguage} />
                        <FontAwesomeIcon className="fa-2x m-1" icon={faSun} onClick={theme.toggleTheme} />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default SiteNav;