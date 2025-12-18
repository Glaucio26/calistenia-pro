import Navbar from "@/components/custom/navbar";
import HeroSection from "@/components/custom/hero-section";
import WorkoutVideos from "@/components/custom/workout-videos";
import PricingSection from "@/components/custom/pricing-section";
import { Star, Quote, Instagram, Facebook, Youtube } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Empresário, 34 anos",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
    text: "Em 3 meses perdi 12kg e ganhei músculos que nunca imaginei ter. O FitFlow mudou minha vida completamente!"
  },
  {
    name: "Ana Paula Costa",
    role: "Professora, 28 anos",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
    text: "Treino em casa no meu horário. Os vídeos são incríveis e os resultados aparecem rápido. Super recomendo!"
  },
  {
    name: "Rafael Mendes",
    role: "Estudante, 22 anos",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    rating: 5,
    text: "Melhor investimento que já fiz! Consegui fazer muscle-up em 2 meses. A comunidade é sensacional!"
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <HeroSection />
      <WorkoutVideos />
      <PricingSection />

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              O Que Nossos{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                Alunos Dizem
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Mais de 10.000 pessoas já transformaram seus corpos e vidas com o FitFlow Brasil
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-900 border-slate-800 p-8 space-y-6 hover:border-orange-500/50 transition-all duration-300">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-500 text-orange-500" />
                  ))}
                </div>

                <Quote className="w-10 h-10 text-orange-500/30" />

                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-orange-500"
                  />
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1920&h=600&fit=crop"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-4xl sm:text-5xl font-bold text-white">
            Pronto Para Transformar Seu Corpo?
          </h2>
          <p className="text-xl text-white/90 leading-relaxed">
            Junte-se a mais de 10.000 alunos que já estão conquistando o corpo dos sonhos. 
            Comece hoje mesmo com 7 dias de garantia!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button className="bg-white text-orange-600 hover:bg-gray-100 font-bold text-lg px-10 py-6 rounded-xl shadow-2xl hover:scale-105 transition-all duration-300">
              Começar Minha Transformação Agora
            </Button>
          </div>
          <p className="text-white/80 text-sm">
            ✓ Sem taxas ocultas • ✓ Cancele quando quiser • ✓ Suporte 24/7
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                FitFlow Brasil
              </h3>
              <p className="text-gray-400 text-sm">
                Transforme seu corpo com treinos profissionais de calistenia, sem sair de casa.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Plataforma</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#treinos" className="hover:text-orange-500 transition-colors">Treinos</a></li>
                <li><a href="#planos" className="hover:text-orange-500 transition-colors">Planos</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Sobre Nós</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Suporte</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-orange-500 transition-colors">Central de Ajuda</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-orange-500 transition-colors">Termos de Uso</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li>contato@fitflowbrasil.com</li>
                <li>WhatsApp: (11) 99999-9999</li>
                <li>Seg-Sex: 8h às 20h</li>
                <li>Sáb: 9h às 14h</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 text-center text-gray-400 text-sm">
            <p>© 2024 FitFlow Brasil. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
