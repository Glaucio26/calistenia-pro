"use client";

import { Play, Clock, Flame, Users } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const workouts = [
  {
    id: 1,
    title: "Flexões Progressivas",
    description: "Do básico ao avançado - domine todas as variações de flexões",
    duration: "25 min",
    level: "Iniciante",
    calories: "180 kcal",
    students: "8.5k",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&h=400&fit=crop",
    category: "Peito & Tríceps"
  },
  {
    id: 2,
    title: "Barra Fixa Completa",
    description: "Técnicas e progressões para dominar a barra fixa",
    duration: "30 min",
    level: "Intermediário",
    calories: "250 kcal",
    students: "7.2k",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=600&h=400&fit=crop",
    category: "Costas & Bíceps"
  },
  {
    id: 3,
    title: "Core de Aço",
    description: "Abdômen definido e core forte em 20 minutos",
    duration: "20 min",
    level: "Todos os Níveis",
    calories: "150 kcal",
    students: "9.8k",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
    category: "Abdômen"
  },
  {
    id: 4,
    title: "Pernas Explosivas",
    description: "Agachamentos, pistol squats e saltos pliométricos",
    duration: "35 min",
    level: "Intermediário",
    calories: "320 kcal",
    students: "6.4k",
    image: "https://images.unsplash.com/photo-1434682881908-b43d0467b798?w=600&h=400&fit=crop",
    category: "Pernas"
  },
  {
    id: 5,
    title: "Handstand Mastery",
    description: "Aprenda a fazer parada de mão com segurança e controle",
    duration: "40 min",
    level: "Avançado",
    calories: "200 kcal",
    students: "5.1k",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop",
    category: "Equilíbrio"
  },
  {
    id: 6,
    title: "Full Body HIIT",
    description: "Treino intenso de corpo inteiro para queimar gordura",
    duration: "28 min",
    level: "Intermediário",
    calories: "400 kcal",
    students: "11.2k",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&h=400&fit=crop",
    category: "Cardio"
  }
];

export default function WorkoutVideos() {
  return (
    <section id="treinos" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-none px-4 py-2 text-sm font-semibold">
            📹 Biblioteca de Treinos
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Mais de 200 Vídeos{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Profissionais
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Cada exercício demonstrado em alta qualidade com instruções detalhadas, 
            progressões e dicas de segurança para maximizar seus resultados.
          </p>
        </div>

        {/* Workout Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {workouts.map((workout) => (
            <Card
              key={workout.id}
              className="bg-slate-900 border-slate-800 overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/20 group cursor-pointer"
            >
              {/* Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={workout.image}
                  alt={workout.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent"></div>
                
                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-md p-4 rounded-full">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3">
                  <Badge className="bg-slate-900/80 backdrop-blur-sm text-white border-none">
                    {workout.category}
                  </Badge>
                </div>

                {/* Level Badge */}
                <div className="absolute top-3 right-3">
                  <Badge 
                    className={`border-none ${
                      workout.level === "Iniciante" 
                        ? "bg-green-500/90" 
                        : workout.level === "Intermediário"
                        ? "bg-orange-500/90"
                        : "bg-red-500/90"
                    } text-white`}
                  >
                    {workout.level}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors">
                  {workout.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {workout.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4 text-cyan-500" />
                    <span className="text-xs font-medium">{workout.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Flame className="w-4 h-4 text-orange-500" />
                    <span className="text-xs font-medium">{workout.calories}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Users className="w-4 h-4 text-purple-500" />
                    <span className="text-xs font-medium">{workout.students}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6 text-lg">
            + Mais de 194 vídeos exclusivos disponíveis na plataforma
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105">
            Ver Todos os Treinos
          </button>
        </div>
      </div>
    </section>
  );
}
