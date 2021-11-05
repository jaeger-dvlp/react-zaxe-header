/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-return-assign */
/* eslint-disable indent */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-expressions */

import React, { useEffect, useRef, useState } from 'react';

import ZaxeLogoBlack from '../Images/zaxe_logo.svg';
import ZaxeLogoWhite from '../Images/zaxe_logo_white.svg';

import Z3Image from '../Images/Printers/z3.webp';
import Z2Image from '../Images/Printers/z2.webp';
import XLiteplusImage from '../Images/Printers/xliteplus.webp';

import FilamentBlue from '../Images/Filaments/blueFla.webp';
import FilamentGreen from '../Images/Filaments/greenFla.webp';
import FilamentRed from '../Images/Filaments/redFla.webp';
import FilamentYellow from '../Images/Filaments/yellowFla.webp';

export default function Header() {
  const [headerBackground, setHeaderBackground] = useState(
    'bg-transparent text-gray-100',
  );

  const [headerElements, setHeaderElements] = useState(null);
  const [headerSections, setHeaderSections] = useState(null);
  const [headerMobilElements, setHeaderMobilElements] = useState(null);

  const header = useRef();
  const headerSection = useRef();
  const sideBarToggle = useRef();
  const sideBar = useRef();
  const [logo, setLogo] = useState(ZaxeLogoWhite);

  useEffect(() => {
    let prevScroll = 0;

    const headerButtons = [
      {
        name: '3D Printers',
        text: '3D Printers',
        slug: 'printers',
        headerCols: [
          {
            name: 'Zaxe Z3',
            slug: 'zaxe-z3',
            image: Z3Image,
            content:
              '400 x 300 x 350 mm closed print volume with passive heating. Fully automatic and Z tilt calibration. 7” capacitive touchscreen. Your industrial solution partner with Wi-Fi, USB and Ethernet connectivity. ',
            isRoute: true,
            url: 'https://zaxe.com/z3',
          },
          {
            name: 'Zaxe Z2',
            slug: 'zaxe-z2',
            image: Z2Image,
            content:
              '220 x 230 x 250 mm closed print volume with passive heating. Fully automatic calibration. 7” capacitive touchscreen. Designed as an affordable professionals with its Wi-Fi, USB and Ethernet connectivity. ',
            isRoute: true,
            url: 'https://zaxe.com/z3',
          },
          {
            name: 'Zaxe xlite+',
            slug: 'zaxe-xlitep',
            image: XLiteplusImage,
            content:
              '220 x 230 x 200 mm print volume Fully automatic calibration. 5” capacitive touchscreen. Bring your productivity to your desk with Wifi, USB, micro USB and ethernet connectivity. ',
            isRoute: true,
            url: 'https://zaxe.com/xlite-p',
          },
        ],
        isDropdown: true,
      },
      {
        name: 'Materials',
        text: 'Materials',
        slug: 'materials',
        headerCols: [
          {
            name: 'Zaxe ABS',
            slug: 'zaxe-abs',
            image: FilamentBlue,
            content:
              'Zaxe ABS is a plastic from petrol. Preferred for professional prints for its strength and heat resistance.',
            isRoute: true,
            url: 'https://zaxe.com/materials/',
          },
          {
            name: 'Zaxe PLA',
            slug: 'zaxe-pla',
            image: FilamentGreen,
            content:
              'Zaxe PLA is a bio-plastic component made with cornstarch as its base material.',
            isRoute: true,
            url: 'https://zaxe.com/materials/',
          },
          {
            name: 'Zaxe PETG',
            slug: 'zaxe-petg',
            image: FilamentRed,
            content:
              'Zaxe PETG, a copolyester material with high impact resistance, has a very low shrinkage coefficient. ',
            isRoute: true,
            url: 'https://zaxe.com/materials/',
          },
          {
            name: 'Zaxe FLEX',
            slug: 'zaxe-flex',
            image: FilamentYellow,
            content:
              'Zaxe Flex can be used in your special applications with its flexible structre.',
            isRoute: true,
            url: 'https://zaxe.com/materials/',
          },
        ],
        isDropdown: true,
      },
      {
        name: 'xDesktop',
        text: 'xDesktop',
        slug: 'xdesktop',

        headerCols: '',
        url: 'https://zaxe.com/xdesktop',
        isDropdown: false,
      },
      {
        name: 'Support',
        text: 'Support',
        slug: 'support',

        headerCols: '',
        url: 'https://support.zaxe.com',
        isDropdown: false,
      },
      {
        name: 'Store',
        text: 'Store',
        slug: 'store',

        headerCols: '',
        url: 'https://store.zaxe.com',
        isDropdown: false,
      },
      {
        name: (
          <svg
            className=" mx-1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 22c-3.123 0-5.914-1.441-7.749-3.69.259-.588.783-.995 1.867-1.246 2.244-.518 4.459-.981 3.393-2.945-3.155-5.82-.899-9.119 2.489-9.119 3.322 0 5.634 3.177 2.489 9.119-1.035 1.952 1.1 2.416 3.393 2.945 1.082.25 1.61.655 1.871 1.241-1.836 2.253-4.628 3.695-7.753 3.695z" />
          </svg>
        ),
        text: 'Login',
        slug: 'account',
        url: 'https://store.zaxe.com/account',
        isDropdown: false,
      },
      {
        name: (
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
        ),
        text: 'Cart',
        slug: 'cart',
        url: 'https://store.zaxe.com/cart',
        isDropdown: false,
      },
    ];

    const changeHeaderBG = (condition, status) => {
      if (condition === 'scroll') {
        window.scrollY >= 900
          ? (setHeaderBackground('bg-white text-black shadow-sm'),
            setLogo(ZaxeLogoBlack))
          : (setLogo(ZaxeLogoWhite),
            setHeaderBackground('bg-white bg-opacity-5 text-gray-100'));
      } else if (condition === 'section') {
        status === true
          ? (setHeaderBackground('bg-white text-black shadow-sm'),
            setLogo(ZaxeLogoBlack))
          : (setLogo(ZaxeLogoWhite),
            setHeaderBackground('bg-white bg-opacity-5 text-gray-100'));
      }
    };

    const activateSection = (sessionName) => {
      setHeaderBackground('bg-white text-black shadow-sm');
      setLogo(ZaxeLogoBlack);
      document.querySelector(
        `.header-section.header-section-${sessionName}`,
      ).style.top = `${header.current.offsetHeight}px`;
    };

    const deactivateAllSections = () => {
      document.querySelectorAll('.header-section').forEach((section) => {
        // eslint-disable-next-line no-param-reassign
        section.style.top = `-${section.offsetHeight + 40}px`;
      });
    };

    const changeHeader = (status) => {
      deactivateAllSections();

      status === false
        ? (header.current.style.top = `-${header.current.offsetHeight}px`)
        : (header.current.style.top = '0px');

      prevScroll = window.scrollY;
    };

    const activateSideBar = () => {
      sideBar.current.style.height = '100vh';
      sideBar.current.style.paddingTop = '5rem';
    };
    const disableSideBar = () => {
      sideBar.current.style.height = '0px';
      sideBar.current.style.paddingTop = '0rem';
    };

    sideBarToggle.current.addEventListener('change', () => {
      if (sideBarToggle.current.checked === true) {
        changeHeaderBG('section', true);
        activateSideBar();
      } else {
        disableSideBar();
        prevScroll <= 900
          ? changeHeaderBG('section', false)
          : changeHeaderBG('section', true);
      }
    });

    setHeaderElements(
      headerButtons.map(
        // eslint-disable-next-line no-confusing-arrow
        (elm) =>
          // eslint-disable-next-line implicit-arrow-linebreak
          elm.isDropdown === true ? (
            <button
              key={elm.slug}
              onClick={() => {
                deactivateAllSections();
                changeHeaderBG('section', true);
                activateSection(elm.slug);
              }}
              className=" header-section-button break-normal transform focus:scale-110 justify-center flex-wrap mx-3 p-0 header-sect-clickable"
              type="button"
            >
              <div className="button-text w-full my-1 header-sect-clickable">
                {elm.name}
              </div>
              <div className="header-button-border my-auto mx-auto header-sect-clickable" />
            </button>
          ) : (
            <a
              key={elm.slug}
              className="p-0 justify-center  flex-wrap content-center flex m-0"
              href={elm.url}
            >
              <button
                className=" header-section-button break-normal transform focus:scale-110 justify-center flex-wrap mx-3 p-0 header-sect-clickable"
                type="button"
              >
                <div className="button-text w-full my-1 header-sect-clickable">
                  {elm.name}
                </div>
                <div className="header-button-border my-auto mx-auto header-sect-clickable" />
              </button>
            </a>
          ),
        // eslint-disable-next-line function-paren-newline
      ),
    );

    setHeaderMobilElements(
      headerButtons.map(
        // eslint-disable-next-line no-confusing-arrow
        (theSection) =>
          // eslint-disable-next-line no-nested-ternary
          theSection.isDropdown === true ? (
            <button
              type="button"
              onClick={(e) => {
                e.target.focus();
              }}
              className="w-full outline-none mobil-header-category focus:text-blue-500 focus:border-blue-500 flex flex-wrap transition-all duration-500 mt-5 border-b border-gray-300 pb-2 text-left "
            >
              <div>{theSection.text}</div>
              <div className="w-full flex flex-wrap mobil-header-category-items ">
                {theSection.headerCols
                  ? theSection.headerCols.map((headerCol) => (
                      // eslint-disable-next-line react/jsx-indent
                      <a
                        href={headerCol.url}
                        className="w-full py-1 text-gray-700"
                      >
                        {headerCol.name}
                      </a>
                    ))
                  : ''}
              </div>
            </button>
          ) : (
            <a
              href={theSection.url}
              className="w-full outline-none mobil-header-category focus:text-blue-500 focus:border-blue-500 flex flex-wrap transition-all duration-500 mt-5 border-b border-gray-300 pb-2 text-left "
            >
              {theSection.text}
            </a>
          ),
      ),
    );

    // eslint-disable-next-line function-paren-newline

    setHeaderSections(
      headerButtons.map((theSection) => (
        <div
          ref={headerSection}
          key={`sectionOf${theSection.slug}`}
          className={`header-sect-clickable z-10 header-section shadow-xl rounded-b-3xl px-10 py-10 justify-center lg:flex xl:flex hidden header-section-${theSection.slug} w-full bg-white ${headerBackground}`}
        >
          {theSection.headerCols
            ? theSection.headerCols.map((theCol) => (
                // eslint-disable-next-line react/jsx-indent
                <div
                  key={`colOf${theSection.slug}/${theCol.slug}`}
                  style={{ maxWidth: '37rem' }}
                  className={`header-sect-clickable w-1/${theSection.headerCols.length} flex flex-wrap header-col m-2 rounded-xl transition duration-200 hover:shadow-lg hover:bg-gray-100 content-end justify-center p-4`}
                >
                  <div className="header-sect-clickable w-1/2 header-col-img-container flex flex-wrap justify-center content-end p-0 m-0">
                    <img
                      src={theCol.image}
                      width="100%"
                      className={`header-sect-clickable ${
                        theSection.slug === 'materials'
                          ? ' lg:px-1  xl:px-5 px-0  '
                          : ''
                      } transform scale-105 max-h-80`}
                      alt={`header-col-${theCol.slug}-img`}
                    />
                  </div>
                  <div className="header-sect-clickable w-1/2 p-2 content-end header-col-content-container flex flex-wrap">
                    <div className="header-sect-clickable header-col-content-head font-bold text-gray-500 w-full m-0 p-0 py-0">
                      {theCol.name}
                    </div>
                    <div className="header-sect-clickable header-col-content text-gray-800 pb-4 pt-2 w-full p-0 m-0">
                      {theCol.content}
                    </div>
                    <a
                      className="header-sect-clickable w-full m-0 p-0"
                      href={theCol.url}
                    >
                      <button
                        type="button"
                        className="header-sect-clickable transition-all duration-200 w-full header-col-button m-0 py-2 rounded-lg"
                      >
                        Learn More
                      </button>
                    </a>
                  </div>
                </div>
              ))
            : ''}
        </div>
      )),
    );

    const leaveAllFocuses = () => {
      document.querySelectorAll(':focus').forEach((elm) => {
        elm.blur();
      });
    };
    window.onscroll = () => {
      leaveAllFocuses();

      if (window.innerWidth <= 768 && sideBarToggle.current.checked !== false) {
        null;
      } else {
        changeHeaderBG('scroll');
      }

      if (sideBarToggle.current.checked !== true) {
        // eslint-disable-next-line no-nested-ternary
        prevScroll >= window.scrollY
          ? changeHeader(true)
          : window.scrollY > 0
          ? changeHeader(false)
          : null;
      }
    };

    window.onload = () => {
      sideBarToggle.current.checked = false;
      changeHeaderBG('scroll');
    };

    window.onresize = () => {
      sideBarToggle.current.checked = false;
      leaveAllFocuses();
      deactivateAllSections();
      disableSideBar();
    };
    window.onclick = (e) => {
      if (e.target.classList.contains('header-sect-clickable') === false) {
        deactivateAllSections();
      }
    };
  }, []);

  return (
    <>
      <div
        ref={header}
        id="zaxe-header"
        className={`header-sect-clickable z-20 zaxe-header fill-current text-lg w-full grid grid-cols-4 lg:px-40 xl:lg:px-40 px-2  py-5 ${headerBackground} flex-wrap align-middle content-center`}
      >
        <div className="header-sect-clickable header-left flex lg:col-span-1 xl:col-span-1 col-span-4 lg:justify-start xl:justify-start justify-between content-center  p-0">
          <label
            className="lg:hidden xl:hidden flex flex-col"
            htmlFor="navmeMenuCheck"
          >
            <input ref={sideBarToggle} type="checkbox" id="navmeMenuCheck" />
            <span className="bg-current" />
            <span className="bg-current" />
            <span className="bg-current" />
          </label>
          <a
            href="https://zaxe.com"
            className="header-sect-clickable cursor-pointer flex  lg:justify-start xl:justify-start justify-center content-center transition-all duration-300  p-0 m-0 transform filter hover:drop-shadow-lg hover:scale-125 drop-shadow-none"
          >
            <img
              className="header-sect-clickable"
              src={logo}
              width="90"
              alt="zaxe_logo"
            />
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
        <div className="header-sect-clickable col-span-3 xl:flex lg:flex justify-end content-center  hidden p-0">
          {headerElements}
        </div>
      </div>
      <div
        ref={sideBar}
        className="w-full h-0  px-4 top-0 mobil-side-bar fixed overflow-hidden left-0 lg:hidden xl:hidden flex flex-wrap bg-white transition-all duration-300 "
      >
        <div className="w-full text-xl transition-all duration-400 flex justify-center content-start flex-wrap ">
          {headerMobilElements}
        </div>
      </div>
      {headerSections}
    </>
  );
}
