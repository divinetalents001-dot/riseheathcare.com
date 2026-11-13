import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, ChevronUp, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

export const FloatingActions: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2.5">
      {/* 24HR Badge Indicator */}
      <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 bg-white/95 backdrop-blur-md text-[#0F4C75] text-xs font-bold rounded-full shadow-lg border border-slate-200">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <Clock className="w-3.5 h-3.5 text-emerald-600" />
        <span>24/7 OPEN • Emergency Ready</span>
      </div>

      {/* Action Buttons Stack */}
      {isExpanded && (
        <div className="flex flex-col items-end gap-2 transition-all duration-300">
          {/* Email button (gray/slate) */}
          <a
            href={CLINIC_INFO.emailLink}
            aria-label="Email Rise Healthcare"
            className="group flex items-center gap-2 pl-3 pr-4 py-2.5 bg-slate-700 hover:bg-slate-800 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 border border-slate-600"
          >
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <Mail className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs font-semibold tracking-wide">Email Us</span>
          </a>

          {/* Call button (blue) */}
          <a
            href={CLINIC_INFO.telLink}
            aria-label="Call Rise Healthcare"
            className="group flex items-center gap-2 pl-3 pr-4 py-2.5 bg-[#0F4C75] hover:bg-[#0a3857] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 border border-sky-400/30"
          >
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <Phone className="w-4 h-4 text-sky-200 animate-pulse" />
            </div>
            <span className="text-xs font-bold tracking-wide">Call {CLINIC_INFO.phone}</span>
          </a>

          {/* Directions button (pink / subtle) */}
          <a
            href={CLINIC_INFO.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Directions to Rise Healthcare"
            className="group flex items-center gap-2 pl-3 pr-4 py-2.5 bg-[#E91E63] hover:bg-[#c21350] text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 border border-pink-400/30"
          >
            <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
              <MapPin className="w-4 h-4 text-white" />
            </div>
            <span className="text-xs font-bold tracking-wide">Directions</span>
          </a>

          {/* WhatsApp button (green - prominent) */}
          <a
            href={CLINIC_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="group flex items-center gap-2.5 pl-3 pr-5 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-2xl hover:shadow-emerald-500/30 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 border-2 border-white/40"
          >
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-inner">
              <MessageCircle className="w-5 h-5 text-[#25D366] fill-[#25D366]" />
            </div>
            <div className="text-left">
              <div className="text-[10px] uppercase font-bold text-emerald-100 tracking-wider">Fast Chat</div>
              <div className="text-sm font-extrabold leading-none">WhatsApp Us</div>
            </div>
          </a>
        </div>
      )}

      {/* Control pill toggle + Scroll to Top */}
      <div className="flex items-center gap-1.5 bg-slate-900/80 backdrop-blur-md p-1 rounded-full shadow-md text-white">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          title={isExpanded ? "Minimize quick actions" : "Show quick actions"}
          className="text-[11px] px-2.5 py-1 font-semibold rounded-full hover:bg-slate-800 transition text-slate-200"
        >
          {isExpanded ? 'Hide' : 'Quick Contact'}
        </button>
        <button
          onClick={scrollToTop}
          title="Back to Top"
          className="p-1 rounded-full hover:bg-slate-800 text-slate-300 hover:text-white transition"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
