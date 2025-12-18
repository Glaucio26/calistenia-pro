"use client";

import { Play, CheckCircle2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 pt-16">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop"
          alt="Atleta de calistenia"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="inline-block">
              <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                🔥 Mais de 10.000 alunos transformados
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Transforme Seu Corpo{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Sem Sair de Casa
              </span>
            </h1>

            <p className="text-xl text-gray-300 leading-relaxed">
              Treinos profissionais de calistenia com vídeos demonstrativos completos. 
              Desenvolva força, resistência e um físico impressionante usando apenas o peso do seu corpo.
            </p>

            {/* Benefits */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-200">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-lg">Mais de 200 vídeos de exercícios profissionais</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-lg">Planos personalizados para todos os níveis</span>
              </div>
              <div className="flex items-center gap-3 text-gray-200">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-lg">Resultados visíveis em 30 dias</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105">
                Começar Minha Transformação
              </Button>
              <Button 
                className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold text-lg px-8 py-6 rounded-xl shadow-xl hover:shadow-orange-500/50 transition-all duration-300"
              >
                <Play className="w-5 h-5 mr-2" />
                Ver Demonstração
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              <div className="text-center">
                <div className="text-3xl font-bold text-white">10k+</div>
                <div className="text-sm text-gray-400">Alunos Ativos</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">200+</div>
                <div className="text-sm text-gray-400">Vídeos HD</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white">4.9★</div>
                <div className="text-sm text-gray-400">Avaliação</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image/Video Preview */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-orange-500/30">
              <img
                src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&h=1000&fit=crop"
                alt="Treino de calistenia"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="bg-white/20 backdrop-blur-md p-6 rounded-full hover:bg-white/30 transition-all duration-300 hover:scale-110">
                  <Play className="w-12 h-12 text-white fill-white" />
                </button>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-6 right-6 bg-green-500 text-white px-4 py-2 rounded-full font-semibold flex items-center gap-2 shadow-lg">
                <TrendingUp className="w-5 h-5" />
                Resultados Reais
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
