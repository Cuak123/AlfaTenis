import React from 'react';
import { MapPin, Navigation, Info } from 'lucide-react';

const LOCATIONS = [
    {
        id: 'principal',
        name: 'Sede Principal',
        address: 'Av. del Deporte 123, Ciudad',
        description: 'Nuestras instalaciones principales cuentan con canchas de primer nivel.',
        mapUrl: 'https://www.google.com/maps/search/Tennis+Court',
        embedUrl: 'https://maps.google.com/maps?q=Tennis+Court&z=15&output=embed'
    },
    {
        id: 'alterna',
        name: 'Sede Alterna',
        address: 'Calle Los Cedros 456, Distrito',
        description: 'Sede anexa disponible para entrenamientos y torneos selectos.',
        mapUrl: 'https://www.google.com/maps/search/Tennis+Club',
        embedUrl: 'https://maps.google.com/maps?q=Tennis+Club&z=15&output=embed'
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
