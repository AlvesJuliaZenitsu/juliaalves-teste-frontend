import "./style.sass";

export const Footer = () => {
  return (
    <section id="container-footer">
      <div id="footer">
        <div id="logo">
          <img src="/assets/Logo.png" alt="logo" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div id="social-media">
          <a href="https://www.linkedin.com/in/julia-alves-cs/">
            <img src="/assets/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/julia-alves-cs/">
            <img src="/assets/facebook.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/julia-alves-cs/">
            <img src="/assets/linkedin.png" alt="" />
          </a>
        </div>
      </div>

      <div id="linha-vertical"></div>
      <div id="about">
        <div className="baseboard">
          <h2 className="title">Institucional</h2>
          <h3 className="item">Sobre Nós</h3>
          <h3 className="item">Movimento</h3>
          <h3 className="item">Trabalhe Conosco</h3>
        </div>
        <div className="baseboard">
          <h2 className="title">Ajuda</h2>
          <h3 className="item">Suporte</h3>
          <h3 className="item">Fale Conosco</h3>
          <h3 className="item">Perguntas Frequêntes</h3>
        </div>
        <div className="baseboard">
          <h2 className="title">Termos</h2>
          <h3 className="item">Termos e Condições</h3>
          <h3 className="item">Política de Privacidade</h3>
          <h3 className="item">Troca e Devolução</h3>
        </div>
      </div>
    </section>
  );
};
