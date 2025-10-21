import "./style.sass";

export const Categories = () => {
  return (
    <section id="options">
      <div className="box-flex">
        <div id="tecnologia" className="box-style">
          <img src="/assets/pc.png" alt="" />
        </div>
        <h3 className="font" id="">Tecnologia</h3>
      </div>
      <div className="box-flex">
        <div className="box-style">
          <img src="/assets/supermercados.png" alt="" />
        </div>
        <h3 className="font">Supermercado</h3>
      </div>
      <div className="box-flex">
        <div className="box-style">
          <img src="/assets/whiskey.png" alt="" />
        </div>
        <h3 className="font">Bebidas</h3>
      </div>
      <div className="box-flex">
        <div className="box-style">
          <img src="/assets/ferramentas.png" alt="" />
        </div>
        <h3 className="font">Ferramentas</h3>
      </div>
      <div className="box-flex">
        <div className="box-style">
          <img src="/assets/saude.png" alt="" />
        </div>
        <h3 className="font">Saúde</h3>
      </div>
      <div className="box-flex">
        <div className="box-style">
          <img src="/assets/corrida.png" alt="" />
        </div>
        <h3 className="font">Esporte e Fitness</h3>
      </div>
      <div className="box-flex">
        <div className="box-style">
          <img src="/assets/moda.png" alt="" />
        </div>
        <h3 className="font">Moda</h3>
      </div>
    </section>
  );
};
