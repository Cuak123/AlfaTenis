import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { brand, nav as navItems, waLink } from '../config/site';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const [activeSection, setActiveSection] = useState('inicio');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Active Section Logic — sections come from the nav config
            const sections = navItems.map((item) => item.id);
            const scrollPosition = window.scrollY + 100; // Offset for header height

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${isScrolled
                ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg py-3'
                : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center space-x-2">
                    {/* Placeholder for real logo, using text for now */}
                    <span className="text-2xl font-extrabold tracking-tighter text-white uppercase">
                        {brand.nameParts[0]} <span className="text-brand-blue">{brand.nameParts[1]}</span>
                    </span>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={`#${item.id}`}
                            className={`font-semibold transition-all text-sm uppercase tracking-wider relative group ${activeSection === item.id ? 'text-brand-neon' : 'text-gray-300 hover:text-white'}`}
                        >
                            {item.name}
                            <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-brand-neon transform transition-transform duration-300 ${activeSection === item.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
                        </a>
                    ))}
                    <a
                        href={waLink('Hola, quiero inscribirme en la academia.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-blue hover:bg-brand-blue-dark text-white px-5 py-2 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg shadow-brand-blue/30"
                    >
                        Inscríbete
                    </a>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col space-y-4 shadow-2xl">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={`#${item.id}`}
                            className="text-white text-lg font-medium hover:text-brand-neon"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {item.name}
                        </a>
                    ))}
                    <a
                        href={waLink('Hola, quiero inscribirme en la academia.')}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-brand-blue text-center text-white py-3 rounded-lg font-bold"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Inscríbete Ahora
                    </a>
                </div>
            )}
        </header>
    );
};

export default Header;
