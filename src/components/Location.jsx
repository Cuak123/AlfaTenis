import React from 'react';
import { MapPin, Navigation, Info } from 'lucide-react';

const LOCATIONS = [
    {
        id: 'principal',
        name: 'Sede Principal - Fundo Odría',
        address: 'Jirón José Nicolás Rodrigo 100, Santiago de Surco 15023',
        description: 'Entrena en las mejores canchas de polvo de ladrillo de Monterrico.',
        mapUrl: 'https://www.google.com/maps/place/JQ+Restaurant+%26+Lounge/@-12.1009568,-76.9648791,19.88z/data=!4m15!1m8!3m7!1s0x9105c70ae3aa63c1:0x325c606a7bc37c71!2sJr+Jos%C3%A9+Nicol%C3%A1s+Rodrigo+100,+Santiago+de+Surco+15023!3b1!8m2!3d-12.1028782!4d-76.9617856!16s%2Fg%2F11b8t92gjc!3m5!1s0x9105c7a09bd43d0f:0xa587af98aa5fbe29!8m2!3d-12.1009761!4d-76.9648268!16s%2Fg%2F11b807104q?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D',
        embedUrl: 'https://maps.google.com/maps?q=-12.1009568,-76.9648791&z=17&output=embed'
    },
    {
        id: 'alterna',
        name: 'Sede Alterna - El Polo',
        address: 'Av. Lima Polo 380, Santiago de Surco 15023',
        description: 'Sede disponible para torneos y eventos especiales.',
        mapUrl: 'https://maps.google.com/?q=Av.+Lima+Polo+380,+Santiago+de+Surco+15023',
        embedUrl: 'https://maps.google.com/maps?q=Av.+Lima+Polo+380,+Santiago+de+Surco+15023&z=16&output=embed'
    }
];

const Location = () => {
    const [activeLocation, setActiveLocation] = React.useState(LOCATIONS[0]);

    return (
        <section id="ubicacion" className="py-20 bg-slate-900 relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <div>
                        <span className="text-brand-neon font-bold tracking-widest text-sm uppercase mb-2 block">
                            Ubicación
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                            Nuestra <span className="text-brand-blue">Sede</span>
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            {activeLocation.description} Contamos con iluminación LED para turnos nocturnos y estacionamiento seguro.
                        </p>

                        <div className="space-y-6 mb-8">
                            {/* Interactive Selector for Principal */}
                            <div
                                onClick={() => setActiveLocation(LOCATIONS[0])}
                                className={`flex items-start gap-4 p-4 rounded-xl transition-all cursor-pointer border ${activeLocation.id === 'principal' ? 'bg-white/5 border-brand-blue/50' : 'border-transparent hover:bg-white/5'}`}
                            >
                                <div className={`p-3 rounded-full ${activeLocation.id === 'principal' ? 'bg-brand-blue text-white' : 'bg-brand-blue/20 text-brand-blue'}`}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className={`font-bold text-xl mb-1 ${activeLocation.id === 'principal' ? 'text-brand-blue' : 'text-white'}`}>
                                        {LOCATIONS[0].name}
                                    </h3>
                                    <p className="text-gray-400">{LOCATIONS[0].address}</p>
                                </div>
                            </div>

                            {/* Interactive Selector for Alterna */}
                            <div
                                onClick={() => setActiveLocation(LOCATIONS[1])}
                                className={`flex items-start gap-4 p-4 rounded-xl transition-all cursor-pointer border ${activeLocation.id === 'alterna' ? 'bg-white/5 border-brand-neon/50' : 'border-transparent hover:bg-white/5'}`}
                            >
                                <div className={`p-3 rounded-full ${activeLocation.id === 'alterna' ? 'bg-brand-neon text-brand-dark' : 'bg-brand-neon/20 text-brand-neon'}`}>
                                    <Info size={24} />
                                </div>
                                <div>
                                    <h3 className={`font-bold text-xl mb-1 ${activeLocation.id === 'alterna' ? 'text-brand-neon' : 'text-white'}`}>
                                        {LOCATIONS[1].name}
                                    </h3>
                                    <p className="text-gray-400">{LOCATIONS[1].address}</p>
                                    <p className="text-gray-500 text-xs mt-1">*Sujeto a disponibilidad según torneo.</p>
                                </div>
                            </div>
                        </div>

                        <a
                            href={activeLocation.mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
                        >
                            <Navigation size={20} />
                            Ver en Google Maps
                        </a>
                    </div>

                    {/* Map */}
                    <div className="relative h-[400px] rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                        {/* Overlay prompt to interact */}
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
                            <span className="text-white font-bold bg-black/50 px-4 py-2 rounded-full backdrop-blur">Ver Mapa Interactivo</span>
                        </div>

                        <iframe
                            key={activeLocation.id}
                            src={activeLocation.embedUrl}
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale group-hover:grayscale-0 transition-all duration-700"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Location;
