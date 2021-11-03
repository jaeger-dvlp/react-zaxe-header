/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';

import ZaxeLogoBlack from '../Images/zaxe_logo.svg';
import ZaxeLogoWhite from '../Images/zaxe_logo_white.svg';

export default function Header() {
  const [headerBackground, setHeaderBackground] = useState(
    'bg-transparent text-gray-100',
  );

  const [logo, setLogo] = useState(ZaxeLogoWhite);

  const headerButtons = [
    '3D Printers',
    'Materials',
    'xDesktop',
    'Support',
    'Store',
    <svg
      className=" mx-1"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z" />
    </svg>,
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="25"
      height="25"
      className="mx-1"
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM5.5 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
    </svg>,
  ];

  const headerElements = headerButtons.map((elm) => (
    <button
      className="transition-all duration-200 header-section-button break-normal transform focus:scale-110 justify-center flex-wrap mx-3 p-0"
      type="button"
    >
      <div className="button-text w-full my-1">{elm}</div>
      <div className="header-button-border my-auto mx-auto" />
    </button>
  ));

  let prevScroll = 0;

  const changeHeader = (status) => {
    const header = document.querySelector('.zaxe-header');
    header.style.position = 'fixed';
    prevScroll = window.scrollY;
    if (window.scrollY >= 900) {
      setHeaderBackground('bg-white text-black shadow-lg');
      setLogo(ZaxeLogoBlack);
    } else {
      setLogo(ZaxeLogoWhite);
      setHeaderBackground('bg-white bg-opacity-5 text-gray-100');
    }
    if (status === false) {
      header.style.top = `-${header.offsetHeight}px`;
    } else {
      header.style.top = '0px';
    }
  };

  window.onscroll = () => {
    // eslint-disable-next-line no-unused-expressions
    prevScroll > window.scrollY ? changeHeader(true) : changeHeader(false);
  };

  return (
    <>
      <div
        style={{ transition: '0.2s' }}
        className={`zaxe-header fill-current text-lg w-full grid grid-cols-4 lg:px-40 xl:lg:px-40 px-2  py-5 ${headerBackground} flex-wrap align-middle content-center`}
      >
        <div className="flex lg:col-span-1 xl:col-span-1 col-span-4 lg:justify-start xl:justify-start justify-between content-center  p-0">
          <label
            className="lg:hidden xl:hidden flex flex-col"
            htmlFor="navmeMenuCheck"
          >
            <input type="checkbox" id="navmeMenuCheck" />
            <span className="bg-current" />
            <span className="bg-current" />
            <span className="bg-current" />
          </label>
          <a
            href="https://zaxe.com"
            className="cursor-pointer flex  lg:justify-start xl:justify-start justify-center content-center  p-0 m-0 transform filter hover:drop-shadow-lg hover:scale-125 drop-shadow-none"
          >
            <img src={logo} width="90" alt="zaxe_logo" />
          </a>
          <button className="xl:hidden lg:hidden block" type="button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="25"
              height="25"
              className="mx-1"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M4 6.414L.757 3.172l1.415-1.415L5.414 5h15.242a1 1 0 0 1 .958 1.287l-2.4 8a1 1 0 0 1-.958.713H6v2h11v2H5a1 1 0 0 1-1-1V6.414zM5.5 23a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm12 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
            </svg>
          </button>
        </div>
        <div className="col-span-3 xl:flex lg:flex justify-end content-center  hidden p-0">
          {headerElements}
        </div>
      </div>
      <div className="header-section">SECT</div>
    </>
  );
}
