import React, { useState } from "react";
import "./feed.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSun } from "@fortawesome/free-solid-svg-icons";

export default function Feed() {
  const [openNav, setOpenNav] = useState(false);

  function setNav() {
    setOpenNav(!openNav);
  }

  const [theme, setTheme] = useState(false);

  function feedTheme() {
    setTheme(!theme);
  }
  return (
    <body data-theme={`${theme ? "light" : "dark"}`}>
      <FontAwesomeIcon
        icon={faBars}
        id="bars"
        onClick={setNav}
        className="nav__icon"
      />
      <nav data-open={`${openNav ? "open" : "close"}`}>
        <div id="nav-placeholder">
          <div></div>
        </div>
        <div id="nav-icons">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div id="btnTheme">
          <FontAwesomeIcon icon={faSun} onClick={feedTheme} />
        </div>
      </nav>

      <section id="container-carousel">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </section>

      <main>
        <div className="main-post">
          <div className="post-header">
            <div className="post-info-user">
              <div className="post-placeholder"></div>
              <h4>UserName</h4>
              <p>- 2h</p>
            </div>

            <div className="post-estrelas">
              <h4>Estrelinhas:</h4>
              <p>******</p>
            </div>
          </div>

          <div className="post-main">
            <div className="post-main-text">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, nam labore optio dolore facere asperiores placeat
                provident nulla itaque veniam nemo eligendi! Qui eligendi ut aut
                ullam molestiae cum fugit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nobis consequuntur eum tempore
                recusandae, neque officia quisquam autem dicta nisi ducimus
                quaerat beatae earum! Maxime quae atque distinctio. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Tempora, nam labore optio
                dolore facere.
              </p>
            </div>
            <div className="post-main-card">
              <div></div>
              <h4>Movie Name</h4>
            </div>
          </div>

          <div className="post-footer">
            <div className="post-footer-container">
              <div className="post-footer-box">
                <div className="post-footer-icons"></div>
                <p>100 - curtidas</p>
              </div>
              <div className="post-footer-box">
                <div className="post-footer-icons"></div>
                <p>35 - comentários</p>
              </div>
            </div>
            <div className="post-footer-container footer-icons">
              <div className="post-footer-box">
                <div className="post-footer-icons"></div>
                <p>sobre</p>
              </div>
              <div className="post-footer-box">
                <div className="post-footer-icons"></div>
                <p>sobre</p>
              </div>
              <div className="post-footer-box">
                <div className="post-footer-icons"></div>
                <p>sobre</p>
              </div>
            </div>
          </div>
        </div>

        <div className="main-post">
          <div className="post-header">
            <div className="post-info-user">
              <div className="post-placeholder"></div>
              <h4>UserName</h4>
              <p>- 2h</p>
            </div>

            <div className="post-estrelas">
              <h4>Estrelinhas:</h4>
              <p>******</p>
            </div>
          </div>

          <div className="post-main">
            <div className="post-main-text">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, nam labore optio dolore facere asperiores placeat
                provident nulla itaque veniam nemo eligendi! Qui eligendi ut aut
                ullam molestiae cum fugit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nobis consequuntur eum tempore
                recusandae, neque officia quisquam autem dicta nisi ducimus
                quaerat beatae earum! Maxime quae atque distinctio. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Tempora, nam labore optio
                dolore facere.
              </p>
            </div>
            <div className="post-main-card">
              <div></div>
              <h4>Movie Name</h4>
            </div>
          </div>

          <div className="post-footer">
            <div className="post-footer-container">
              <div className="post-footer-box">
                <div className="post-footer-icons"></div>
                <p>100 - curtidas</p>
              </div>
              <div className="post-footer-box">
                <div className="post-footer-icons"></div>
                <p>35 - comentários</p>
              </div>
            </div>
            <div className="post-footer-container footer-icons">
              <div className="post-footer-box">
                <div className="post-footer-icons"></div>
                <p>sobre</p>
              </div>
              <div className="post-footer-box">
                <div className="post-footer-icons"></div>
                <p>sobre</p>
              </div>
              <div className="post-footer-box">
                <div className="post-footer-icons"></div>
                <p>sobre</p>
              </div>
            </div>
          </div>
        </div>

        <div className="main-post">
          <div className="post-header">
            <div className="post-info-user">
              <div className="post-placeholder"></div>
              <h4>UserName</h4>
              <p>- 2h</p>
            </div>

            <div className="post-estrelas">
              <h4>Estrelinhas:</h4>
              <p>******</p>
            </div>
          </div>

          <div className="post-main">
            <div className="post-main-text">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, nam labore optio dolore facere asperiores placeat
                provident nulla itaque veniam nemo eligendi! Qui eligendi ut aut
                ullam molestiae cum fugit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nobis consequuntur eum tempore
                recusandae, neque officia quisquam autem dicta nisi ducimus
                quaerat beatae earum! Maxime quae atque distinctio. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Tempora, nam labore optio
                dolore facere.
              </p>
            </div>
            <div className="post-main-card">
              <div></div>
              <h4>Movie Name</h4>
            </div>
          </div>

          <div className="post-footer">
            <div className="post-footer-container">
              <div className="post-footer-box">
                <div className="post-footer-icons"></div>
                <p>100 - curtidas</p>
              </div>
              <div className="post-footer-box">
                <div className="post-footer-icons"></div>
                <p>35 - comentários</p>
              </div>
            </div>
            <div className="post-footer-container footer-icons">
              <div className="post-footer-box">
                <div className="post-footer-icons"></div>
                <p>sobre</p>
              </div>
              <div className="post-footer-box">
                <div className="post-footer-icons"></div>
                <p>sobre</p>
              </div>
              <div className="post-footer-box">
                <div className="post-footer-icons"></div>
                <p>sobre</p>
              </div>
            </div>
          </div>
        </div>

        <div className="main-post">
          <div className="post-header">
            <div className="post-info-user">
              <div className="post-placeholder"></div>
              <h4>UserName</h4>
              <p>- 2h</p>
            </div>

            <div className="post-estrelas">
              <h4>Estrelinhas:</h4>
              <p>******</p>
            </div>
          </div>

          <div className="post-main">
            <div className="post-main-text">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, nam labore optio dolore facere asperiores placeat
                provident nulla itaque veniam nemo eligendi! Qui eligendi ut aut
                ullam molestiae cum fugit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nobis consequuntur eum tempore
                recusandae, neque officia quisquam autem dicta nisi ducimus
                quaerat beatae earum! Maxime quae atque distinctio. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Tempora, nam labore optio
                dolore facere.
              </p>
            </div>
            <div className="post-main-card">
              <div></div>
              <h4>Movie Name</h4>
            </div>
          </div>

          <div className="post-footer">
            <div className="post-footer-container">
              <div className="post-footer-box">
                <div className="post-footer-icons"></div>
                <p>100 - curtidas</p>
              </div>
              <div className="post-footer-box">
                <div className="post-footer-icons"></div>
                <p>35 - comentários</p>
              </div>
            </div>
            <div className="post-footer-container footer-icons">
              <div className="post-footer-box">
                <div className="post-footer-icons"></div>
                <p>sobre</p>
              </div>
              <div className="post-footer-box">
                <div className="post-footer-icons"></div>
                <p>sobre</p>
              </div>
              <div className="post-footer-box">
                <div className="post-footer-icons"></div>
                <p>sobre</p>
              </div>
            </div>
          </div>
        </div>

        <div className="main-post">
          <div className="post-header">
            <div className="post-info-user">
              <div className="post-placeholder"></div>
              <h4>UserName</h4>
              <p>- 2h</p>
            </div>

            <div className="post-estrelas">
              <h4>Estrelinhas:</h4>
              <p>******</p>
            </div>
          </div>

          <div className="post-main">
            <div className="post-main-text">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, nam labore optio dolore facere asperiores placeat
                provident nulla itaque veniam nemo eligendi! Qui eligendi ut aut
                ullam molestiae cum fugit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Nobis consequuntur eum tempore
                recusandae, neque officia quisquam autem dicta nisi ducimus
                quaerat beatae earum! Maxime quae atque distinctio. Lorem, ipsum
                dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Tempora, nam labore optio
                dolore facere.
              </p>
            </div>
            <div className="post-main-card">
              <div></div>
              <h4>Movie Name</h4>
            </div>
          </div>

          <div className="post-footer">
            <div className="post-footer-container">
              <div className="post-footer-box">
                <div className="post-footer-icons"></div>
                <p>100 - curtidas</p>
              </div>
              <div className="post-footer-box">
                <div className="post-footer-icons"></div>
                <p>35 - comentários</p>
              </div>
            </div>
            <div className="post-footer-container footer-icons">
              <div className="post-footer-box">
                <div className="post-footer-icons"></div>
                <p>sobre</p>
              </div>
              <div className="post-footer-box">
                <div className="post-footer-icons"></div>
                <p>sobre</p>
              </div>
              <div className="post-footer-box">
                <div className="post-footer-icons"></div>
                <p>sobre</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </body>
  );
}
