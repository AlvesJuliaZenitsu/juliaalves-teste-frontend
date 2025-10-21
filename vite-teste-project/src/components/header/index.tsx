import "./style.sass";

export const Header = () => {
  return (
    <header>
      <div id="header-info">
        <div>
          <img src="/assets/ShieldCheck.png" alt="" />
          <p>
            Compra
            <strong> 100% segura</strong>
          </p>
        </div>
        <div>
          <img src="/assets/Truck.png" alt="" />
          <p>
            <strong>Frete grátis</strong> acima de R$200
          </p>
        </div>
        <div>
          <img src="/assets/CreditCard.png" alt="" />
          <p>
            <strong>Parcele</strong> suas compras
          </p>
        </div>
      </div>
      <div id="header-search">
        <div>
          <img src="/assets/Logo.png" alt="logo" />
        </div>
        <div>
          <form action="" id="search-form">
            <input
              type="text"
              placeholder="O que você está buscando?"
              id="input-search"
            />
            <button id="lupa">
              <img src="/assets/Lupa.svg" alt="Search" />
            </button>
          </form>
        </div>
        <div id="icons">
          <img src="/assets/Bag.png" alt="bag" />
          <img src="/assets/Heart.png" alt="heart" />
          <img src="/assets/UserCircle.png" alt="usercircle" />
          <img src="/assets/ShoppingCart.png" alt="shoppingcart" />
        </div>
      </div>
      <nav>
        <div id="categories">
          <p>TODAS CATEGORIAS</p>
          <p>SUPERMERCADO</p>
          <p>LIVROS</p>
          <p>MODA</p>
          <p>LANÇAMENTOS</p>
          <p>OFERTAS DO DIA</p>
          <div id="signature">
            <img src="/assets/CrownSimple.png" alt="crown" /> <p>ASSINATURA</p>
          </div>
        </div>
      </nav>
    </header>
  );
};
