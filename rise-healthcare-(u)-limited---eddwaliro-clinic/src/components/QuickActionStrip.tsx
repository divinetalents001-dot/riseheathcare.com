import React from 'react';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface QuickActionStripProps {
  variant?: 'banner' | 'card' | 'compact';
  className?: string;
}

export const QuickActionStrip: React.FC<QuickActionStripProps> = ({ variant = 'banner', className = '' }) => {
  if (variant === 'compact') {
    return (
      <div className={`flex flex-wrap items-center gap-2 ${className}`}>
        <a
          href={CLINIC_INFO.telLink}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#0F4C75] text-white hover:bg-[#093554] transition shadow-sm"
        >
          <Phone className="w-3.5 h-3.5 text-sky-300" />
          <span>Call {CLINIC_INFO.phone}</span>
        </a>
        <a
          href={CLINIC_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg bg-[#25D366] text-white hover:bg-[#1faa53] transition shadow-sm"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>WhatsApp</span>
        </a>
        <a
          href={CLINIC_INFO.emailLink}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 transition"
        >
          <Mail className="w-3.5 h-3.5 text-slate-500" />
          <span>Email</span>
        </a>
        <a
          href={CLINIC_INFO.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg bg-pink-50 text-[#E91E63] border border-pink-200 hover:bg-pink-100 transition"
        >
          <MapPin className="w-3.5 h-3.5" />
          <span>Directions</span>
        </a>
      </div>
    );
  }

  return (
    <div className={`bg-gradient-to-r from-[#0F4C75] via-[#155d8f] to-[#0F4C75] text-white rounded-2xl p-4 sm:p-6 shadow-md border border-sky-900/30 ${className}`}>
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-xs uppercase font-bold tracking-wider text-emerald-300">24/7 Rapid Response & Care</span>
          </div>
          <h4 className="text-lg sm:text-xl font-bold mt-1 text-white">Need Immediate Medical Attention or Inquiries?</h4>
          <p className="text-sm text-sky-100/90 mt-0.5">Located at Ndejje Zanta, Entebbe Rd • You're Safe With Us!</p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full md:w-auto">
          <a
            href={CLINIC_INFO.telLink}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white text-[#0F4C75] font-bold text-sm shadow hover:bg-sky-50 transition active:scale-95"
            title="Call Rise Healthcare"
          >
            <Phone className="w-4 h-4 text-[#0F4C75]" />
            <span>Call Now</span>
          </a>

          <a
            href={CLINIC_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow hover:bg-[#1faa53] transition active:scale-95"
            title="WhatsApp Rise Healthcare"
          >
            <MessageCircle className="w-4 h-4 fill-white text-transparent" />
            <span>WhatsApp</span>
          </a>

          <a
            href={CLINIC_INFO.emailLink}
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-900/60 border border-sky-400/40 text-white font-medium text-sm hover:bg-sky-800/80 transition active:scale-95"
            title="Send Email"
          >
            <Mail className="w-4 h-4 text-sky-200" />
            <span>Email</span>
          </a>

          <a
            href={CLINIC_INFO.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#E91E63] text-white font-bold text-sm shadow hover:bg-[#d81557] transition active:scale-95"
            title="Find on Google Maps"
          >
            <MapPin className="w-4 h-4 text-white" />
            <span>Directions</span>
          </a>
        </div>
      </div>
    </div>
  );
};
