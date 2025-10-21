import "./style.sass";

export const Newsletter = () => {
  return (
    <section id="newsletter">
      <div id="message">
        <h2 id="h2">Inscreva-se na nossa newsletter</h2>
        <p id="p">
          Assine a nossa newsletter e receba as novidades e conteúdos exclusivos
          da Econverse.
        </p>
      </div>
      <div id="subscribe">
        <form action="" id="form">
          <input type="text" placeholder="Digite seu nome" id="input" />
          <input type="email" placeholder="Digite seu e-mail" id="input" />
          <button type="submit" id="button">
            INSCREVER
          </button>
        </form>
        <input type="checkbox" />
        <span id="checkbox">Aceito os termos e condições</span>
      </div>
    </section>
  );
};
