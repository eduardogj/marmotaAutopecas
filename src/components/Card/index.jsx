import { getProducts } from "../../api/mlProdutos";
import { useEffect, useState } from "react";
import './styles.css';

export default function Card() {

  const [tensionadores, setTensionadores] = useState([]);
  const [kits, setKits] = useState([]);
  const [polias, setPolias] = useState([]);
  const [tensores, setTensores] = useState([]);
  const [outros, setOutros] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedData = await getProducts();

        if (fetchedData.results && fetchedData.results.length > 0) {

          const categorizedProducts = fetchedData.results.reduce((accumulator, product) => {
            if (product.title.includes("Kit")) {
              accumulator.kit.push(product);
            } else if (product.title.includes("Tensionador")) {
              accumulator.tensionador.push(product);
            } else if (product.title.includes("Polia")) {
              accumulator.polia.push(product);
            } else if (product.title.includes("Tensor")) {
              accumulator.tensor.push(product);
            } else {
              accumulator.other.push(product);
            }
            return accumulator;
          }, {
            tensionador: [],
            kit: [],
            polia: [],
            tensor: [],
            other: [],
          });


          setTensionadores(categorizedProducts.tensionador);
          setKits(categorizedProducts.kit);
          setPolias(categorizedProducts.polia);
          setTensores(categorizedProducts.tensor);
          setOutros(categorizedProducts.other);

        } else {
          console.error('No products found.');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchProducts();
  }, [getProducts]);

  console.log(tensionadores);

  return (
    <>
    <br />
      <div className="container">
        {/* TENSIONADOR */}
        <h1 className="title mt-5">Tensionadores</h1>
        <div className="columns is-multiline is-mobile">
          {tensionadores.map((tensionador, index) => (
            <div key={index} className="column is-6-mobile is-3-desktop">
              <a href={tensionador.permalink} target="_blank">
                <div className="productCard is-flex is-flex-direction-column is-justify-content-center is-align-content-center p-3">
                  <figure className="has-text-centered">
                    <img src={`https://http2.mlstatic.com/D_NQ_NP_${tensionador.thumbnail_id}-O.webp`} alt="" />
                  </figure>
                  <div className="card-content has-text-centered">
                    <span>{tensionador.title}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* POLIA */}
        <h1 className="title">Polias</h1>
        <div className="columns is-multiline is-mobile">
          {polias.map((polia, index) => (
            <div key={index} className="column is-6-mobile is-3-desktop">
              <a href={polia.permalink} target="_blank">
                <div className="productCard is-flex is-flex-direction-column is-justify-content-center is-align-content-center p-3">
                  <figure className="has-text-centered">
                    <img src={`https://http2.mlstatic.com/D_NQ_NP_${polia.thumbnail_id}-O.webp`} alt="" />
                  </figure>
                  <div className="card-content has-text-centered">
                    <span>{polia.title}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* TENSOR */}
        <h1 className="title">Tensores</h1>
        <div className="columns is-multiline is-mobile">
          {tensores.map((tensor, index) => (
            <div key={index} className="column is-6-mobile is-3-desktop">
              <a href={tensor.permalink} target="_blank">
                <div className="productCard is-flex is-flex-direction-column is-justify-content-center is-align-content-center p-3">
                  <figure className="has-text-centered is-flex is-justify-content-center is-align-content-center ">
                    <img className="is-align-self-center" src={`https://http2.mlstatic.com/D_NQ_NP_${tensor.thumbnail_id}-O.webp`} alt="" />
                  </figure>
                  <div className="card-content has-text-centered">
                    <span>{tensor.title}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* KIT */}
        <h1 className="title">Kits</h1>
        <div className="columns is-multiline is-mobile">
          {kits.map((kit, index) => (
            <div key={index} className="column is-6-mobile is-3-desktop">
              <a href={kit.permalink} target="_blank">
                <div className="productCard is-flex is-flex-direction-column is-justify-content-center is-align-content-center p-3">
                  <figure className="has-text-centered is-flex is-justify-content-center is-align-content-center ">
                    <img className="is-align-self-center" src={`https://http2.mlstatic.com/D_NQ_NP_${kit.thumbnail_id}-O.webp`} alt="" />
                  </figure>
                  <div className="card-content has-text-centered">
                    <span>{kit.title}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* OUTROS */}
        <h1 className="title">Outros</h1>
        <div className="columns is-multiline is-mobile">
          {outros.map((outro, index) => (
            <div key={index} className="column is-6-mobile is-3-desktop">
              <a href={outro.permalink} target="_blank">
                <div className="productCard is-flex is-flex-direction-column is-justify-content-center is-align-content-center p-3 is-flex is-flex-direction-column is-justify-content-center is-align-content-center p-3">
                  <figure className="has-text-centered is-flex is-justify-content-center is-align-content-center ">
                    <img className="is-align-self-center" src={`https://http2.mlstatic.com/D_NQ_NP_${outro.thumbnail_id}-O.webp`} alt="" />
                  </figure>
                  <div className="card-content has-text-centered">
                    <span>{outro.title}</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
