import React from 'react';
import { Check, Star, Zap, Ticket } from 'lucide-react';
import { waLink } from '../config/site';

const Pricing = () => {
    return (
        <section id="precios" className="py-20 bg-brand-dark/30 relative border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-brand-neon font-bold tracking-widest text-sm uppercase mb-2 block animate-pulse">
                        Inscripciones Abiertas 2026
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                        Planes y <span className="text-brand-blue">Tarifas</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Invierte en tu juego con nuestros paquetes flexibles. <span className="text-brand-neon font-bold">10% de descuento</span> promocional por tiempo limitado.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

                    {/* Card 1: Escuela de Tenis (Monthly) */}
                    <div className="bg-slate-800/50 rounded-3xl p-8 border border-brand-blue/30 hover:border-brand-blue transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 bg-brand-blue text-white text-xs font-bold px-3 py-1 rounded-bl-xl">
                            MENSUAL
                        </div>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-full bg-brand-blue/20 text-brand-blue">
                                <Star size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Escuela de Tenis</h3>
                        </div>

                        <div className="space-y-4">
                            {/* Option 1 */}
                            <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                                <div>
                                    <p className="font-bold text-white">1 vez por semana</p>
                                    <p className="text-xs text-gray-400">4 clases al mes</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-bold text-brand-blue">S/ 160</p>
                                    <p className="text-xs text-gray-500">FAP: S/ 140</p>
                                </div>
                            </div>

                            {/* Option 2 */}
                            <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-brand-blue/20">
                                <div>
                                    <p className="font-bold text-white">2 veces por semana</p>
                                    <p className="text-xs text-gray-400">8 clases al mes</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-bold text-brand-blue">S/ 280</p>
                                    <p className="text-xs text-gray-500">FAP: S/ 260</p>
                                </div>
                            </div>

                            {/* Option 3 */}
                            <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                                <div>
                                    <p className="font-bold text-white">3 veces por semana</p>
                                    <p className="text-xs text-gray-400">12 clases al mes</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-bold text-brand-blue">S/ 380</p>
                                    <p className="text-xs text-gray-500">FAP: S/ 340</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/10">
                            <ul className="space-y-2 text-sm text-gray-400 mb-6">
                                <li className="flex items-center gap-2"><Check size={14} className="text-brand-blue" /> Vacantes limitadas</li>
                                <li className="flex items-center gap-2"><Check size={14} className="text-brand-blue" /> Grupos por nivel</li>
                            </ul>
                            <a
                                href={waLink('Hola, quiero probar una clase gratis en la Escuela de Tenis.')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full block text-center bg-brand-blue/10 hover:bg-brand-blue hover:text-white text-brand-blue font-bold py-3 rounded-xl transition-all"
                            >
                                ¡Ven, prueba una clase gratis!
                            </a>
                        </div>
                    </div>

                    {/* Card 2: Duales (Packages) */}
                    <div className="bg-slate-800/50 rounded-3xl p-8 border border-brand-neon/30 hover:border-brand-neon transition-all duration-300 relative overflow-hidden group">
                        <div className="absolute top-0 right-0 bg-brand-neon text-brand-dark text-xs font-bold px-3 py-1 rounded-bl-xl">
                            PACKS FLEXIBLES
                        </div>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-3 rounded-full bg-brand-neon/20 text-brand-neon">
                                <Zap size={24} />
                            </div>
                            <h3 className="text-2xl font-bold text-white">Clases Duales</h3>
                        </div>

                        <div className="space-y-4">
                            {/* Package 1 */}
                            <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                                <div>
                                    <p className="font-bold text-white">Pack 4 Clases</p>
                                    <p className="text-xs text-brand-neon font-semibold">Básico</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-bold text-brand-neon">S/ 200</p>
                                    <p className="text-xs text-gray-500">S/ 50 por clase</p>
                                </div>
                            </div>

                            {/* Package 2 */}
                            <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-brand-neon/20">
                                <div>
                                    <p className="font-bold text-white">Pack 8 Clases</p>
                                    <p className="text-xs text-brand-neon font-semibold">Recomendado</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-bold text-brand-neon">S/ 320</p>
                                    <p className="text-xs text-gray-500">S/ 40 por clase</p>
                                </div>
                            </div>

                            {/* Package 3 */}
                            <div className="flex justify-between items-center p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors">
                                <div>
                                    <p className="font-bold text-white">Pack 12 Clases</p>
                                    <p className="text-xs text-brand-neon font-semibold">Pro</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-bold text-brand-neon">S/ 560</p>
                                    <p className="text-xs text-gray-500">S/ 46 por clase</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-6 border-t border-white/10">
                            <a
                                href={waLink('Hola, quiero probar una clase gratis y conocer los packs de clases duales.')}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full block text-center bg-brand-neon/10 hover:bg-brand-neon hover:text-brand-dark text-brand-neon font-bold py-3 rounded-xl transition-all"
                            >
                                ¡Ven, prueba una clase gratis!
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Note */}
                <div className="mt-12 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/5 px-6 py-3 rounded-full border border-white/10">
                        <Ticket size={20} className="text-brand-neon" />
                        <p className="text-gray-300 text-sm">
                            Consulta por nuestras <span className="text-white font-bold">Clases de Prueba</span> para todos los niveles.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Pricing;
