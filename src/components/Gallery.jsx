import React from 'react';
import { Camera, Instagram } from 'lucide-react';
import { brand, social } from '../config/site';

import galleryTraining from '../assets/Gallery/gallery_training.png';
import galleryMatch from '../assets/Gallery/gallery_match.png';
import galleryGroup from '../assets/Gallery/gallery_group.png';
import galleryKids from '../assets/Gallery/gallery_kids.png';

const images = [
    {
        id: 1,
        src: galleryTraining,
        alt: "Entrenamiento de saque",
        size: "col-span-1 md:col-span-2 row-span-2",
        position: "object-top"
    },
    {
        id: 2,
        src: galleryMatch,
        alt: "Partido de torneo",
        size: "col-span-1",
        position: "object-center"
    },
    {
        id: 3,
        src: galleryKids,
        alt: "Clase de niños",
        size: "col-span-1",
        position: "object-center"
    },
    {
        id: 4,
        src: galleryGroup,
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
                            Momentos <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">{brand.name}</span>
                        </h2>
                    </div>

                    {social.instagram && (
                        <a
                            href={social.instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-brand-neon transition-colors flex items-center gap-2 font-medium"
                        >
                            <Instagram size={20} />
                            Síguenos en Instagram
                        </a>
                    )}
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
