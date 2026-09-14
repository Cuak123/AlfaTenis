import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Mail, Phone } from 'lucide-react';
import { brand, contact, social, nav } from '../config/site';

const socialLinks = [
    { key: 'instagram', url: social.instagram, Icon: Instagram },
    { key: 'facebook', url: social.facebook, Icon: Facebook },
    { key: 'twitter', url: social.twitter, Icon: Twitter },
].filter((item) => item.url);

const Footer = () => {
    return (
        <footer id="contacto" className="bg-black text-white pt-20 pb-10 border-t border-white/10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-extrabold text-white mb-4 uppercase">
                            {brand.nameParts[0]} <span className="text-brand-blue">{brand.nameParts[1]}</span>
                        </h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            {brand.tagline}
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Navegación</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            {nav.map((item) => (
                                <li key={item.id}>
                                    <a href={`#${item.id}`} className="hover:text-brand-neon transition-colors">
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="font-bold text-lg mb-6">Contáctanos</h4>
                        <div className="space-y-4 text-gray-400 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-brand-blue mt-1 shrink-0" size={18} />
                                <p>{contact.address}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="text-brand-blue shrink-0" size={18} />
                                <p>{contact.email}</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-brand-blue shrink-0" size={18} />
                                <p>{contact.phone}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        © {new Date().getFullYear()} {brand.name}. Todos los derechos reservados.
                    </p>
                    {socialLinks.length > 0 && (
                        <div className="flex space-x-6">
                            {socialLinks.map((item) => (
                                <a
                                    key={item.key}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-brand-blue transition-colors"
                                >
                                    {React.createElement(item.Icon, { size: 20 })}
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
