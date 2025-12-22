import React from 'react';
import { Camera, Instagram } from 'lucide-react';

import img1 from '../assets/Gallery/image copy 4.png';
import img2 from '../assets/Gallery/image copy 5.png';
import img3 from '../assets/Gallery/image copy 6.png';
import img4 from '../assets/Gallery/image copy 2.png';

const images = [
    {
        id: 1,
        src: img4,
        alt: "Entrenamiento de saque",
        size: "col-span-1 md:col-span-2 row-span-2",
        position: "object-top"
    },
    {
        id: 2,
        src: img2,
        alt: "Partido de torneo",
        size: "col-span-1",
        position: "object-center"
    },
    {
        id: 3,
        src: img3,
        alt: "Clase de niños",
        size: "col-span-1",
        position: "object-center"
    },
    {
        id: 4,
        src: img1,
        alt: "Grupo de adultos",
        size: "col-span-1 md:col-span-2",
        position: "object-[center_20%]"
    }
];

const Gallery = () => {
    return (
        <section className="py-20 bg-slate-900 border-t border-white/5 relative">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-brand-neon font-bold tracking-widest text-sm uppercase mb-2 block flex items-center gap-2">
                            <Camera size={16} />
                            Galería
                        </span>
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white">
                            Momentos <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">Alfa</span>
                        </h2>
                    </div>

                    <a
                        href="https://www.instagram.com/alfa.tenis.peru/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-brand-neon transition-colors flex items-center gap-2 font-medium"
                    >
                        <Instagram size={20} />
                        Síguenos en Instagram
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
                    {images.map((img) => (
                        <div
                            key={img.id}
                            className={`relative rounded-3xl overflow-hidden group ${img.size}`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${img.position || 'object-center'}`}
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
