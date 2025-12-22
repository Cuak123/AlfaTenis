import React, { useState } from 'react';
import { Trophy, Medal, AlertCircle } from 'lucide-react';

const rankings = {
    "5ta A": [
        { rank: 1, name: "Diego Romero", points: 1200, wins: 15 },
        { rank: 2, name: "Brayan", points: 1150, wins: 14 },
        { rank: 3, name: "Diana", points: 1080, wins: 12 },
        { rank: 4, name: "Nicolas", points: 950, wins: 10 },
        { rank: 5, name: "Andre", points: 800, wins: 8 },
    ],
    "5ta B": [
        { rank: 1, name: "Marco Mendez", points: 5000, wins: 16 },
        { rank: 2, name: "Macarena Schwartz", points: 5000, wins: 15 },
        { rank: 3, name: "Gabriel Quiroz", points: 5000, wins: 13 },
        { rank: 4, name: "Paula Huaman", points: 5000, wins: 9 },
        { rank: 5, name: "Ivana Calderon", points: 4000, wins: 8 },
    ]
};

const Ranking = () => {
    const [activeCategory, setActiveCategory] = useState("5ta A");

    const getRankIcon = (rank) => {
        if (rank === 1) return <Trophy className="text-yellow-400" size={20} />;
        if (rank === 2) return <Medal className="text-gray-300" size={20} />;
        if (rank === 3) return <Medal className="text-amber-600" size={20} />;
        return <span className="text-gray-500 font-bold">#{rank}</span>;
    };

    return (
        <section id="ranking" className="py-20 bg-brand-dark relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-12">
                    <span className="text-brand-neon font-bold tracking-widest text-sm uppercase mb-2 block">
                        Tabla de Posiciones
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                        Ranking <span className="text-brand-blue">Alfa Tenis</span>
                    </h2>

                    <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-brand-neon text-sm font-medium animate-pulse">
                        <AlertCircle size={16} />
                        Actualización quincenal
                    </div>
                </div>

                {/* Tabs */}
                <div className="flex justify-center mb-8">
                    <div className="bg-slate-800/80 p-1 rounded-full border border-white/5 flex">
                        <button
                            onClick={() => setActiveCategory("5ta A")}
                            className={`px-8 py-2 rounded-full font-bold transition-all ${activeCategory === "5ta A" ? 'bg-brand-blue text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                        >
                            5ta Categoría A
                        </button>
                        <button
                            onClick={() => setActiveCategory("5ta B")}
                            className={`px-8 py-2 rounded-full font-bold transition-all ${activeCategory === "5ta B" ? 'bg-brand-blue text-white shadow-lg' : 'text-gray-400 hover:text-white'}`}
                        >
                            5ta Categoría B
                        </button>
                    </div>
                </div>

                {/* Table Card */}
                <div className="max-w-4xl mx-auto bg-slate-900/50 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-sm shadow-2xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-black/40 text-brand-blue uppercase text-xs font-bold tracking-wider">
                                    <th className="p-4 pl-8">Ranking</th>
                                    <th className="p-4">Jugador</th>
                                    <th className="p-4 text-center">Partidos Ganados</th>
                                    <th className="p-4 pr-8 text-right">Puntos</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {rankings[activeCategory].map((player, index) => (
                                    <tr key={index} className="hover:bg-white/5 transition-colors group">
                                        <td className="p-4 pl-8 font-bold flex items-center gap-3">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${index < 3 ? 'bg-white/10' : ''}`}>
                                                {getRankIcon(player.rank)}
                                            </div>
                                        </td>
                                        <td className="p-4">
                                            <span className={`font-bold text-lg ${index === 0 ? 'text-brand-neon' : 'text-white'}`}>
                                                {player.name}
                                            </span>
                                        </td>
                                        <td className="p-4 text-center text-gray-400 font-medium">
                                            {player.wins}
                                        </td>
                                        <td className="p-4 pr-8 text-right">
                                            <span className="bg-brand-blue/20 text-brand-blue px-3 py-1 rounded-lg font-bold">
                                                {player.points} pts
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="p-4 bg-black/40 text-center">
                        <p className="text-gray-500 text-xs">
                            * El ranking se basa en el desempeño oficial de los torneos Alfa Tenis.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Ranking;
