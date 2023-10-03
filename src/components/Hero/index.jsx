import "./styles.css"

export default function Hero() {
    return (
        <>
            <section className="hero is-fullheight-with-navbar">
                <div className="hero-body bg-img">
                    <div className="container is-widescreen">
                        <div className="columns is-vcentered">
                            <div className="column hero-title">
                                <div className="has-text-centered hero-txt">
                                    <p className="title is-size-3 is-size-1-desktop has-text-light pb-5">
                                        Qualidade em peças automotivas
                                    </p>
                                    <p className="subtitle has-text-light">
                                        Faça um orçamento e adquira peças de qualidade impecável para seu
                                        veículo ou empresa.
                                    </p>
                                    <button className="button is-large is-fullwidth is-link mx-1 my-3">
                                        <a href="/orcamento" className="has-text-white is-size-4-mobile">
                                            Faça seu orçamento
                                        </a>
                                    </button>
                                    <button className="button is-large is-fullwidth ml mx-1 my-3 produtos-btn">
                                    <a href="/produtos" className="has-text-dark is-size-4-mobile ">
                                            Ver produtos
                                        </a>
                                    </button>
                                </div>
                            </div>
                            <div className="column" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}