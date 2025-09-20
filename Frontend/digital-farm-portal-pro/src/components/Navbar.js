import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Navbar(){
  const { t, i18n } = useTranslation();
  return (
    <nav className="navbar">
      <div className="brand">
        <div className="logo">DF</div>
        <div>
          <div style={{fontWeight:800}}>{t('title')}</div>
          <div className="small">{t('subtitle')}</div>
        </div>
      </div>

      <div style={{display:'flex',alignItems:'center',gap:12}}>
        <div className="nav-links">
          <Link to="/">{t('dashboard')}</Link>
          <Link to="/register">{t('register')}</Link>
          <Link to="/biosecurity">{t('biosecurity')}</Link>
          <Link to="/health">{t('health')}</Link>
          <Link to="/alerts">{t('alerts')}</Link>
        </div>
        <select className="lang-select" onChange={e=> i18n.changeLanguage(e.target.value)} defaultValue={i18n.language}>
          <option value="en">EN</option>
          <option value="hi">हिंदी</option>
          <option value="mr">मराठी</option>
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
