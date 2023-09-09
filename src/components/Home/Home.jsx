import React from "react";
import "./home.css";

export default function Home() {
  return (
    <body>
      <header>
        <div>
          <h3>Logo</h3>
        </div>
        <div className="headerBtn">
          <button>Entrar</button>
        </div>
      </header>
      <main>
        <div id="main-title">
          <h1>Flixfriend</h1>
          <h3>Sua comunidade preferida para comentar sobre filmes e séries</h3>
        </div>
        <div id="main-form">
          <label for="email">Informe seu email para criar seu perfil</label>
          <input type="email" id="email"></input>
          <button>Começar</button>
        </div>
      </main>

      <section id="container-about">
        <div className="card-about">
          <div className="line"></div>
          <div className="about">
            <p>Descubra os filmes e séries que mais combina com voce</p>
          </div>
        </div>

        <div className="card-about">
          <div className="line"></div>
          <div className="about">
            <p>Descubra os filmes e séries que mais combina com voce</p>
          </div>
        </div>

        <div className="card-about">
          <div className="line"></div>
          <div className="about">
            <p>Descubra os filmes e séries que mais combina com voce</p>
          </div>
        </div>

        <div className="card-about">
          <div className="line"></div>
          <div className="about">
            <p>Descubra os filmes e séries que mais combina com voce</p>
          </div>
        </div>
      </section>

      <section id="container-platform">
        <div id="plataform-text">
          <h2>Siga as plataformas que voce mais ama</h2>
          <p>
            Seguindo voce será atualizado com todos os lançamentos e informações
            das suas plataformas preferidas
          </p>
        </div>
        <div id="plataform-icons">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>

      <section id="container-question">
        <h3>Alguma pergunta? Aqui temos a resposta</h3>
        <div>
          <ul>
            <li>Pergunta 1</li>
            <li>Pergunta 2</li>
            <li>Pergunta 3</li>
            <li>Pergunta 4</li>
          </ul>
        </div>
      </section>

      <footer>
        <div id="footer-link">
          <a href="/">Link</a>
          <a href="/">Link</a>
          <a href="/">Link</a>
          <a href="/">Link</a>
          <a href="/">Link</a>
        </div>
        <div id="footer-icons">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </footer>
    </body>
  );
}
