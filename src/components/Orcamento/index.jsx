import { useState } from 'react'; // Import React and useState hook
import axios from 'axios';
import Spin from 'react-cssfx-loading/src/Spin';

const MAIL_URL = import.meta.env.VITE_MAIL_URL

export default function Orcamento() {

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios({
            method: 'POST',
            url: MAIL_URL,
            data: formData
        })
        .then((response) => {
            if (response.data.status === 'success') {
                alert('Mensagem enviada!');
                resetForm();
            } else if (response.data.status === 'fail') {
                alert('Houve uma falha no envio.');
            }
        })
        .finally(() => {
            setLoading(false);
        });
    }

    const resetForm = () => {
        setFormData({ name: '', email: '', message: '', subject: '' });
    }

    //SPREAD OPERATOR
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <section id="quote" className="section quote">
                <div className="container is-widescreen">
                    <h2 className="is-size-2 has-text-centered pb-5">Fazer orçamento</h2>
                    <p className="pb-5 has-text-centered is-size-5">
                        Para um atendimento personalizado, você pode fazer um orçamento
                        diretamente conosco. Estamos sempre prontos para responder suas perguntas,
                        fornecer qualquer orientação necessária e entregar seu produto o mais
                        rápido possível.
                    </p>
                    <form method="POST" onSubmit={handleSubmit}>
                        <div className="field">
                            <label className="label">Nome</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="Escreva seu nome"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    disabled={loading}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                                <input
                                    className="input"
                                    type="text"
                                    placeholder="email@exemplo.com"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    disabled={loading}
                                />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Assunto</label>
                            <div className="control">
                                <div className="select">
                                    <select
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        disabled={loading}
                                    >
                                        <option>Selecionar...</option>
                                        <option value="Fazer orçamento">Fazer orçamento</option>
                                        <option value="Consultar disponibilidade de produto">
                                            Consultar disponibilidade de produto
                                        </option>
                                        <option value="Perguntas">Perguntas</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Mensagem</label>
                            <div className="control">
                                <textarea
                                    className="textarea"
                                    placeholder="Escreva sua mensagem"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    disabled={loading}
                                />
                            </div>
                        </div>
                        <div className="field is-grouped">
                            <div className="control">
                            {loading ? (
                                    <Spin />
                                ) : (
                                    <button
                                        type="submit"
                                        className="button is-medium is-link"
                                        disabled={loading}
                                    >
                                        Enviar
                                    </button>
                                )}
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}
