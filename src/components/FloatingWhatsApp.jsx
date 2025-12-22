import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp = () => {
    return (
        <a
            href="https://api.whatsapp.com/send/?phone=51997222869&text&type=phone_number&app_absent=0&utm_source=ig"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 flex items-center justify-center animate-bounce-slow"
            aria-label="Chat on WhatsApp"
        >
            <MessageCircle size={32} fill="white" />
        </a>
    );
};

export default FloatingWhatsApp;
