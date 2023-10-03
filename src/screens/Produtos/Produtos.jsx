import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

export default function Produtos() {
    return (
        <>
            <Navbar />
            <section className="section">
                <div className="container is-widescreen mt-1 has-text-centered-mobile">
                    <h1 className="title">Nossos produtos</h1>
                    <p className="is-size-5">Aqui você pode visualizar todos os produtos que temos em estoque no Mercado Livre. Caso não encontre o que precisa, nos mande uma mensagem pelo formulário de orçamento e iremos entrar em contato o mais rápido possível!</p>
                </div>
                <Card />
            </section>


            <Footer />
        </>
    );
}