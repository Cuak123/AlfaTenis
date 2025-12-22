import React, { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "¿Necesito tener experiencia previa o raqueta propia?",
        answer: "No es necesario. En nuestras clases de iniciación proporcionamos todo el material deportivo (raquetas y pelotas) para que puedas probar sin compromiso. A medida que avances, te asesoraremos para comprar tu propia raqueta."
    },
    {
        question: "¿Qué pasa si llueve o no puedo asistir a una clase?",
        answer: "Si la clase se cancela por lluvia, se reprograma automáticamente. Si no puedes asistir por motivos personales, puedes recuperar la clase en otro horario disponible avisando con 24 horas de anticipación."
    },
    {
        question: "¿Cuáles son las formas de pago?",
        answer: "Aceptamos pagos vía Yape, Plin, Transferencia Bancaria y Efectivo. Los pagos se realizan por adelantado al inicio de cada mes o paquete de clases."
    },
    {
        question: "¿Ofrecen clases particulares?",
        answer: "Sí, ofrecemos clases privadas (1 a 1) y semiprivadas (2 personas) para quienes buscan un avance más rápido y una corrección técnica personalizada. Los horarios se coordinan directamente con el entrenador."
    },
    {
        question: "¿A partir de qué edad pueden empezar los niños?",
        answer: "Nuestro programa de Mini Tenis (Bola Roja) acepta niños desde los 4 años de edad, enfocándonos en la psicomotricidad y la diversión."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-brand-dark relative overflow-hidden">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-16">
                    <span className="text-gray-400 font-bold tracking-widest text-sm uppercase mb-2 block flex items-center justify-center gap-2">
                        <HelpCircle size={16} className="text-brand-neon" />
                        Dudas Comunes
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                        Preguntas <span className="text-brand-blue">Frecuentes</span>
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`bg-slate-900/50 border ${openIndex === index ? 'border-brand-neon/50' : 'border-white/5'} rounded-2xl overflow-hidden transition-all duration-300`}
                        >
                            <button
                                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                                onClick={() => toggleFAQ(index)}
                            >
                                <span className="text-lg font-bold text-white pr-8">{faq.question}</span>
                                {openIndex === index ? (
                                    <Minus className="text-brand-neon shrink-0" size={20} />
                                ) : (
                                    <Plus className="text-gray-400 shrink-0" size={20} />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                            >
                                <p className="p-6 pt-0 text-gray-400 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
