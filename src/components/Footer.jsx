import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="contacto" className="bg-black text-white pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-extrabold text-white mb-4">
                            TENNIS <span className="text-brand-blue">ACADEMY</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Academia de alto rendimiento dedicada a formar la próxima generación de tenistas con pasión y disciplina.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Navegación</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li><a href="#inicio" className="hover:text-brand-neon transition-colors">Inicio</a></li>
                            <li><a href="#profesores" className="hover:text-brand-neon transition-colors">Staff</a></li>
                            <li><a href="#torneos" className="hover:text-brand-neon transition-colors">Torneos</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="font-bold text-lg mb-6">Contáctanos</h4>
                        <div className="space-y-4 text-gray-400 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-brand-blue mt-1 shrink-0" size={18} />
                                <p>Tu Dirección, Ciudad, País</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="text-brand-blue shrink-0" size={18} />
                                <p>contacto@tuacademia.com</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-brand-blue shrink-0" size={18} />
                                <p>+00 000 000 000</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} Tennis Academy. Todos los derechos reservados.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors"><Facebook size={20} /></a>
                        <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors"><Twitter size={20} /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
