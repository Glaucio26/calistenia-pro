"use client";

import { Menu, X, Dumbbell } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 p-2 rounded-lg">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
              FitFlow Brasil
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#inicio" className="text-gray-300 hover:text-white transition-colors">
              Início
            </a>
            <a href="#treinos" className="text-gray-300 hover:text-white transition-colors">
              Treinos
            </a>
            <a href="#planos" className="text-gray-300 hover:text-white transition-colors">
              Planos
            </a>
            <a href="#depoimentos" className="text-gray-300 hover:text-white transition-colors">
              Depoimentos
            </a>
            <Button className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold px-6">
              Começar Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a
              href="#inicio"
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Início
            </a>
            <a
              href="#treinos"
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Treinos
            </a>
            <a
              href="#planos"
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Planos
            </a>
            <a
              href="#depoimentos"
              className="block text-gray-300 hover:text-white transition-colors py-2"
              onClick={() => setIsOpen(false)}
            >
              Depoimentos
            </a>
            <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold">
              Começar Agora
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
