import React, { useState } from 'react';
import s from './Header.module.css';
import images from '../../assets/index';
const Header = () => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  return (
    <header className={s.header}>
      <div>
        <img className={s.bag} src={images.bag} alt="bag" />
        <p>12</p>
      </div>

      <div className={s.menu}>
        <input
          onClick={() => {
            setisOpenMenu(!isOpenMenu);
          }}
          type="checkbox"
          id="burgerCheckbox"
          class={s.burgerCheckbox}
        />
        <label for="burgerCheckbox" class={s.burger}></label>
        {isOpenMenu && <div className={s.wrap}></div>}
        <div className={`${s.overlay} ${isOpenMenu ? s.open : ''}`}>
          <ul className={s.menuList}>
            <li>
              <a href="#" class={s.menuItem}>
                Главная
              </a>
            </li>
            <li>
              <a href="#" class={s.menuItem}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" class={s.menuItem}>
                Команда
              </a>
            </li>
            <li>
              <a href="#" class={s.menuItem}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
