import { useState } from "react";
import { useRef } from "react"
import emailjs from '@emailjs/browser'

const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }
    //service_no9exc3

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
            await emailjs.send('service_no9exc3', 'template_36tcuws', {
                from_name: form.name,
                to_name: 'Geraldine',
                from_email: form.email,
                to_email: 'geraldinevasquezgutierrez@gmail.com',
                message: form.message
            },
                'FX39nPTh9GbuUk-LF'
            )
            setLoading(false);

            alert('Tu mensaje se ha mandado!')
            setForm({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            setLoading(false);

            console.log(error);

            alert('Algo salio mal!')
        }
    }

    return (
        <section className="c-space my-20" id='contact'>
            <div className="relative min-h-screen flex items-center justify-center flex-col">
                <img src="/assets/terminal.png" alt="terminal background" className="absolute inset-0 min-h-screen" />
                <div className="contact-container">
                    <h3 className="head-text">Hablemos</h3>
                    <p className="text-lg text-white-600 mt-3">Si tienes un proyecto, una idea o simplemente quieres conectar, estaré encantada de leerte y colaborar contigo.</p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7" action="">
                        <label className="space-y-3">
                            <span className="field-label">Nombre Completo</span>
                            <input type="text" name="name" value={form.name} onChange={handleChange} required className="field-input" placeholder="Ejemplo: Laura Gómez" />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Email</span>
                            <input type="email" name="email" value={form.email} onChange={handleChange} required className="field-input" placeholder="empresa_example@gmail.com" />
                        </label>
                        <label className="space-y-3">
                            <span className="field-label">Tu mensaje</span>
                            <textarea name="message" value={form.message} onChange={handleChange} required rows={5} className="field-input" placeholder="Hola, me gustaría hablar sobre..." />
                        </label>
                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Enviando ...' : 'Enviar Mensaje'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
                        </button>
                    </form>
                </div>
            </div>

        </section>
    )
}

export default Contact
