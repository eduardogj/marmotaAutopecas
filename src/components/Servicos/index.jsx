export default function Servicos() {
    return (
        <>
            <section className="section products has-text-centered">
                <div className="container is-widescreen">
                    <div className="tile is-ancestor">
                        <div className="tile is-4 is-vertical is-parent">
                            <div className="tile is-child box">
                                <p className="title">Ótima qualidade</p>
                                <p className="is-size-5">
                                    Trabalhamos com <strong>tensionadores</strong>, <strong>tensores</strong>, <strong>polias</strong>, <strong>atuadores</strong> e muitas outras
                                    peças que são imprecindíveis para o funcionamento do veículo. Aqui você encontrará uma ampla variedade de peças novas e de
                                    altíssima qualidade. Nossa missão é fornecer
                                    soluções confiáveis e duradouras para garantir o melhor desempenho
                                    do seu carro.
                                </p>
                            </div>
                            <div className="tile is-child box">
                                <p className="title">Atendimento</p>
                                <p className="is-size-5">
                                    Nossa equipe está sempre pronta para ajudar, oferecendo um
                                    atendimento personalizado e especializado em peças automotivas.
                                </p>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <div className="tile is-child box">
                                <p className="title">Diversas marcas</p>
                                <p className="pb-5 is-size-5">
                                    Trabalhamos com diversas marcas conceituadas, selecionando
                                    cuidadosamente cada produto em nosso estoque para atender às
                                    necessidades dos nossos clientes com excelência.
                                </p>
                                <img src="/assets/images/marcas.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}