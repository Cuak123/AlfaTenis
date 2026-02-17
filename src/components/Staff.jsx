import coachHead from '../assets/Staff/coach_head.png';
import coachAssistant from '../assets/Staff/coach_assistant.png';
import staffAdmin from '../assets/Staff/staff_admin.png';
import { ChevronUp, X, Award, Clock, Activity } from 'lucide-react';

const staffMembers = [
    {
        id: 1,
        name: "Entrenador Principal",
        role: "Head Coach",
        image: coachHead,
        specialization: "Estrategia y Alto Rendimiento",
        experience: "15+ años",
        certificates: ["ITF Level 3", "PTR Professional", "Ex-Jugador ATP"],
        bio: "Especialista en desarrollo de jugadores de competición. Su enfoque combina la técnica moderna con una mentalidad ganadora."
    },
    {
        id: 2,
        name: "Entrenador Senior",
        role: "Second Coach",
        image: coachAssistant,
        specialization: "Técnica Base y Formación",
        experience: "10+ años",
        certificates: ["ITF Level 2", "Certificación Nacional", "Preparador Físico"],
        bio: "Apacionado por la enseñanza de los fundamentos técnicos. Tiene un don especial para corregir la biomecánica y prevenir lesiones."
    },
    {
        id: 3,
        name: "Coordinación",
        role: "Administradora",
        image: staffAdmin,
        specialization: "Gestión Deportiva",
        experience: "8+ años",
        certificates: ["MBA Gestión Deportiva", "Coordinación de Eventos"],
        bio: "El corazón organizativo de la academia. Se encarga de que cada torneo, clase y evento funcione con precisión suiza."
    }
];

const Staff = () => {
    const [activeMemberId, setActiveMemberId] = useState(null);

    return (
        <section id="profesores" className="py-20 bg-brand-dark relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                        Nuestro <span className="text-brand-blue">Staff</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Haz click en cada entrenador para conocer su trayectoria y especialidades.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {staffMembers.map((member) => (
                        <div
                            key={member.id}
                            className="group relative bg-slate-800/50 rounded-2xl overflow-hidden border border-white/5 hover:border-brand-neon transition-all duration-300 hover:shadow-[0_0_30px_rgba(204,255,0,0.15)] cursor-pointer h-[500px]"
                            onClick={() => setActiveMemberId(member.id)}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className={`w-full h-full object-cover object-top transition-transform duration-700 ${activeMemberId === member.id ? 'scale-110 blur-sm' : 'group-hover:scale-105'} grayscale group-hover:grayscale-0`}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-90"></div>
                            </div>

                            {/* Initial Card Content (Visible when not active) */}
                            <div className={`absolute bottom-0 left-0 w-full p-6 transition-opacity duration-300 ${activeMemberId === member.id ? 'opacity-0 delay-0' : 'opacity-100 delay-300'}`}>
                                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-brand-neon transition-colors">
                                    {member.name}
                                </h3>
                                <p className="text-brand-blue font-medium text-sm tracking-wide bg-brand-blue/10 inline-block px-3 py-1 rounded-full mb-2">
                                    {member.role}
                                </p>
                                <div className="flex items-center text-gray-400 text-xs mt-2 animate-bounce-slow">
                                    <ChevronUp size={16} className="text-brand-neon mr-1" />
                                    <span>Click para ver perfil</span>
                                </div>
                            </div>

                            {/* Detailed Overlay (Slide Up Animation) */}
                            <div
                                className={`absolute bottom-0 left-0 w-full h-[85%] bg-brand-dark/95 backdrop-blur-xl rounded-t-3xl p-6 transition-transform duration-500 ease-out border-t border-brand-neon/30 ${activeMemberId === member.id ? 'translate-y-0' : 'translate-y-full'
                                    }`}
                                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
                            >
                                {/* Close Button */}
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        setActiveMemberId(null);
                                    }}
                                    className="absolute top-4 right-4 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                                >
                                    <X size={20} className="text-white" />
                                </button>

                                {/* Content */}
                                <div className="h-full flex flex-col pt-4">
                                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                                    <p className="text-brand-blue font-medium mb-4">{member.role}</p>

                                    <div className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">

                                        <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                            <div className="flex items-center gap-2 mb-2 text-brand-neon">
                                                <Activity size={18} />
                                                <span className="font-bold text-sm uppercase tracking-wider">Especialidad</span>
                                            </div>
                                            <p className="text-gray-300 text-sm leading-relaxed">
                                                {member.specialization}
                                            </p>
                                        </div>

                                        <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                            <div className="flex items-center gap-2 mb-2 text-brand-neon">
                                                <Award size={18} />
                                                <span className="font-bold text-sm uppercase tracking-wider">Certificados</span>
                                            </div>
                                            <ul className="space-y-1">
                                                {member.certificates.map((cert, idx) => (
                                                    <li key={idx} className="text-gray-300 text-sm flex items-start gap-2">
                                                        <span className="w-1.5 h-1.5 bg-brand-blue rounded-full mt-1.5 shrink-0"></span>
                                                        {cert}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                                            <div className="flex items-center gap-2 mb-2 text-brand-neon">
                                                <Clock size={18} />
                                                <span className="font-bold text-sm uppercase tracking-wider">Experiencia</span>
                                            </div>
                                            <p className="text-gray-300 text-sm">
                                                {member.experience}
                                            </p>
                                        </div>

                                        <div className="pt-2">
                                            <p className="text-gray-400 text-sm italic border-l-2 border-brand-blue pl-3">
                                                "{member.bio}"
                                            </p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Staff;
