"use client";

import { Check, Zap, Crown, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Semanal",
    icon: Zap,
    price: "29,90",
    period: "por semana",
    description: "Ideal para testar a plataforma",
    features: [
      "Acesso a todos os 200+ vídeos",
      "Treinos para todos os níveis",
      "Suporte via chat",
      "Atualizações semanais",
      "Acesso mobile e desktop"
    ],
    popular: false,
    gradient: "from-cyan-500 to-blue-600",
    savings: null
  },
  {
    name: "Mensal",
    icon: Crown,
    price: "79,90",
    period: "por mês",
    description: "Mais popular entre nossos alunos",
    features: [
      "Tudo do plano semanal",
      "Planos de treino personalizados",
      "Acompanhamento de progresso",
      "Comunidade exclusiva",
      "Suporte prioritário",
      "Certificado de conclusão"
    ],
    popular: true,
    gradient: "from-orange-500 to-red-600",
    savings: "Economize 33%"
  },
  {
    name: "Anual",
    icon: Sparkles,
    price: "599,90",
    period: "por ano",
    description: "Melhor custo-benefício",
    features: [
      "Tudo do plano mensal",
      "Consultoria individual mensal",
      "Planos nutricionais básicos",
      "Acesso vitalício a novos conteúdos",
      "Descontos em produtos parceiros",
      "Grupo VIP no WhatsApp",
      "Bônus: E-book de receitas fit"
    ],
    popular: false,
    gradient: "from-purple-500 to-pink-600",
    savings: "Economize 62% - Apenas R$ 49,99/mês"
  }
];

export default function PricingSection() {
  return (
    <section id="planos" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-gradient-to-r from-orange-500 to-red-600 text-white border-none px-4 py-2 text-sm font-semibold">
            💎 Planos e Preços
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Escolha Seu{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              Plano Ideal
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Invista na sua transformação com planos flexíveis e sem taxas ocultas. 
            Cancele quando quiser, sem burocracia.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <Card
                key={index}
                className={`relative bg-slate-950 border-2 overflow-hidden transition-all duration-300 hover:scale-105 ${
                  plan.popular
                    ? "border-orange-500 shadow-2xl shadow-orange-500/20 md:-mt-4 md:mb-4"
                    : "border-slate-800 hover:border-slate-700"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-2 text-sm font-bold rounded-bl-2xl">
                    🔥 MAIS POPULAR
                  </div>
                )}

                <div className="p-8 space-y-6">
                  {/* Icon & Name */}
                  <div className="space-y-3">
                    <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${plan.gradient}`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    <p className="text-gray-400 text-sm">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="space-y-2">
                    <div className="flex items-baseline gap-2">
                      <span className="text-gray-400 text-lg">R$</span>
                      <span className="text-5xl font-bold text-white">{plan.price}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{plan.period}</p>
                    {plan.savings && (
                      <Badge className="bg-green-500/20 text-green-400 border-green-500/30 font-semibold">
                        {plan.savings}
                      </Badge>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 py-6 border-t border-slate-800">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button
                    className={`w-full py-6 text-lg font-bold rounded-xl transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white shadow-xl hover:shadow-2xl hover:shadow-orange-500/50"
                        : "bg-slate-800 hover:bg-slate-700 text-white"
                    }`}
                  >
                    {plan.popular ? "Começar Agora" : "Selecionar Plano"}
                  </Button>

                  {/* Guarantee */}
                  <p className="text-center text-xs text-gray-500 pt-2">
                    ✓ Garantia de 7 dias ou seu dinheiro de volta
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center space-y-6">
          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
              <div className="text-3xl mb-2">🔒</div>
              <h4 className="text-white font-semibold mb-2">Pagamento Seguro</h4>
              <p className="text-gray-400 text-sm">Criptografia SSL e proteção de dados</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
              <div className="text-3xl mb-2">🎯</div>
              <h4 className="text-white font-semibold mb-2">Sem Compromisso</h4>
              <p className="text-gray-400 text-sm">Cancele quando quiser, sem taxas</p>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-xl p-6">
              <div className="text-3xl mb-2">💪</div>
              <h4 className="text-white font-semibold mb-2">Resultados Garantidos</h4>
              <p className="text-gray-400 text-sm">Ou devolvemos seu investimento</p>
            </div>
          </div>

          <p className="text-gray-500 text-sm">
            Dúvidas sobre qual plano escolher?{" "}
            <a href="#" className="text-orange-500 hover:text-orange-400 font-semibold">
              Fale com nosso time
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
