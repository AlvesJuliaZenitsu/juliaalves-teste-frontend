import "./style.sass";
import JSONFile from "../../data/products.json";
import { useState } from "react";

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

interface Props {
  hasProductMenu: boolean;
}

export function Products() {
  return (
    <nav id="products-nav">
      <ul>  
        <li><a href="">CELULAR</a></li>    
        <li><a href="">ACESSÓRIOS</a></li>    
        <li><a href="">TABLETS</a></li>    
        <li><a href="">NOTEBOOKS</a></li>    
        <li><a href="">TVS</a></li>    
        <li><a href="">VER TODOS</a></li>    
</ul>
    </nav>
  );
}

export const ShowCase = (component_props: Props) => {
  const data = JSONFile.products as Array<Product>;

  const [productPosition, setProductPosition] = useState(0);

  return (
    <div className="showcase">
      <div id="tittle-line">
        <div className="linha-horizontal"></div>
      <h2 id="tittle">Produtos relacionados</h2>      
      <div className="linha-horizontal"></div></div>
      
      {component_props.hasProductMenu && <Products />}
      <div id="container">
        <button
          onClick={() => {
            if (productPosition === 0) return;

            setProductPosition((productPosition) => productPosition - 1);
          }}
        >
          {"<"}
        </button>
        <div id="items">
          {data.slice(productPosition, productPosition + 4).map((product) => (
            <div className="product">
              <img src={product.photo} alt={product.productName} className="img"/>
              <h3>{product.productName}</h3>
              <del id="text">R$30,90</del>
              <p id="price">R$ {product.price / 100}</p>
              <p id="text">ou 2x de R$49,95 sem juros</p>
              <button id="button">COMPRAR</button>
            </div>
          ))}
        </div>
        <button
          onClick={() => {
            if (productPosition === data.length - 4) return;

            setProductPosition((productPosition) => productPosition + 1);
          }}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};
