"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface PhaseButtonsProps {
  onPhaseSelect?: (phase: 'A' | 'B' | 'C' | 'home') => void;
}

export default function PhaseButtons({ onPhaseSelect }: PhaseButtonsProps) {
  const pathname = usePathname();

  const getSelectedPhase = (): 'A' | 'B' | 'C' | 'home' => {
    if (pathname === '/corrienteA') return 'A';
    if (pathname === '/corrienteB') return 'B';
    if (pathname === '/corrienteC') return 'C';
    return 'home';
  };

  const selectedPhase = getSelectedPhase();

  const getButtonClass = (phase: 'A' | 'B' | 'C' | 'home') => {
    const baseClass = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
    const isSelected = selectedPhase === phase;

    if (isSelected) {
      return `${baseClass} bg-blue-600 text-white shadow-lg focus:ring-blue-500`;
    }

    return `${baseClass} bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 focus:ring-blue-500`;
  };

  return (
    <div className="flex gap-4 justify-center mb-6">
      <Link
        href='/'
        className={getButtonClass('home')}
      > Todos </Link>
      <Link
        href='/corrienteA'
        className={getButtonClass('A')}
      >
        Fase A
      </Link>
      <Link
        href='/corrienteB'
        className={getButtonClass('B')}
      >
        Fase B
      </Link>
      <Link
        href='/corrienteC'
        className={getButtonClass('C')}
      >
        Fase C
      </Link>
    </div>
  );
}
