import WhatsAppLink from "../WhatsAppLink";
import "./styles.css";

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="container is-widescreen">
                    <div className="columns ">
                        <div className="column content has-text-left">
                            <div className="footer-links is-flex is-flex-direction-column has-text-weight-semibold mb-5">
                                <a href="#hero">Início</a>
                                <a href="/produtos">Produtos</a>
                                <a href="/orcamento">Orçamento</a>
                                <a href="https://lista.mercadolivre.com.br/_CustId_1380580432">
                                    Mercado Livre
                                </a>
                            </div>
                        </div>
                        <div className="column has-text-right">
                            <div className="footer-text">
                                <div className="whatsapp-link-container">
                                    <WhatsAppLink />
                                </div>
                                <span className="has-text-weight-semibold">Cel: </span>11964476065
                                <br />
                                <span className="has-text-weight-semibold">CNPJ: </span>51.516.389/0001-63{" "}
                                <br />
                                <span className="has-text-weight-semibold">Inscrição Estadual: </span>
                                124543060114 <br />
                                <span className="has-text-weight-semibold">Cidade: </span>São Paulo <br />
                                <span className="has-text-weight-semibold">Estado: </span>SP
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-text has-text-centered">© 2023 Marmota Autopeças</div>
            </footer>
        </>
    );
}