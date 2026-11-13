import React, { useState } from 'react';
import { Phone, MessageCircle, Menu, X, Clock, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { CLINIC_INFO, CLINIC_IMAGES } from '../data/clinicData';

export type PageId = 'home' | 'about' | 'services' | 'clinical-care' | 'team' | 'gallery' | 'community' | 'contact';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { id: PageId; label: string; badge?: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'clinical-care', label: 'Doctors at Work', badge: 'Live' },
    { id: 'team', label: 'Our Team' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'community', label: 'Community', badge: 'Outreach' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm transition-all">
      {/* Top Emergency & Info Banner */}
      <div className="bg-[#0F4C75] text-white text-xs py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5 font-bold tracking-wide text-sky-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <Clock className="w-3.5 h-3.5 text-sky-300" />
              24 HRS OPEN • Day & Night • 7 Days
            </span>
            <span className="hidden md:inline-block text-slate-300">|</span>
            <span className="hidden md:flex items-center gap-1 text-slate-200">
              <MapPin className="w-3 h-3 text-[#E91E63]" />
              Ndejje Zanta, Entebbe Rd (Near Health Centre 4)
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="hidden sm:inline-flex items-center gap-1 text-pink-200">
              <Heart className="w-3.5 h-3.5 fill-[#E91E63] text-[#E91E63]" />
              Eddwaliro - You're Safe With Us!
            </span>
            <a
              href={CLINIC_INFO.telLink}
              className="inline-flex items-center gap-1 text-white hover:text-sky-200 transition font-bold"
            >
              <Phone className="w-3 h-3 text-sky-300" />
              Emergency: {CLINIC_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Left: Official Logo (60px height, object-fit contain as required) */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
            aria-label="Rise Healthcare Home"
          >
            <div className="relative flex items-center justify-center p-1 rounded-xl bg-slate-50 border border-slate-100 group-hover:border-sky-300 transition shadow-xs">
              <img
                src={CLINIC_IMAGES.logo}
                alt="RISE HEALTHCARE (U) Limited Logo - Eddwaliro"
                className="h-[60px] w-auto max-w-[170px] object-contain transition-transform group-hover:scale-[1.02]"
              />
            </div>
            <div className="hidden sm:block">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-[#0F4C75] text-lg lg:text-xl tracking-tight leading-tight">
                  RISE HEALTHCARE
                </span>
                <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded-sm bg-pink-100 text-[#E91E63]">
                  (U) LTD
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <span className="font-semibold text-[#E91E63]">EDDWALIRO</span>
                <span>•</span>
                <span>You're Safe With Us!</span>
              </div>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative px-3.5 py-2 rounded-xl text-sm font-semibold transition-all duration-150 cursor-pointer ${
                    isActive
                      ? 'text-[#0F4C75] bg-sky-50 font-bold'
                      : 'text-slate-600 hover:text-[#0F4C75] hover:bg-slate-50'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {link.label}
                    {link.badge && (
                      <span className="text-[10px] font-bold px-1.5 py-0.2 rounded-full bg-[#E91E63] text-white">
                        {link.badge}
                      </span>
                    )}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-[#E91E63]"></span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons (Desktop): Call 0705960182 (blue) + WhatsApp (green) */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Call Button (Blue) */}
            <a
              href={CLINIC_INFO.telLink}
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#0F4C75] hover:bg-[#0b3857] text-white text-sm font-bold shadow-sm hover:shadow transition active:scale-95"
            >
              <Phone className="w-4 h-4 text-sky-200" />
              <span>Call {CLINIC_INFO.phone}</span>
            </a>

            {/* WhatsApp Button (Green) */}
            <a
              href={CLINIC_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1faa53] text-white text-sm font-bold shadow-sm hover:shadow transition active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={CLINIC_INFO.telLink}
              className="p-2 rounded-xl bg-[#0F4C75] text-white hover:bg-[#0c3c5c] transition"
              aria-label="Call clinic"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href={CLINIC_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-[#25D366] text-white hover:bg-[#20ba59] transition"
              aria-label="WhatsApp clinic"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="px-4 pt-3 pb-6 space-y-1">
            <div className="mb-3 px-3 py-2 rounded-xl bg-sky-50 border border-sky-100 text-xs text-[#0F4C75] flex items-center justify-between">
              <span className="font-semibold">Ndejje Zanta, Entebbe Road</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">24 HRS OPEN</span>
            </div>

            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-base font-semibold transition flex items-center justify-between ${
                    isActive
                      ? 'bg-sky-50 text-[#0F4C75] font-bold border-l-4 border-[#E91E63]'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-[#E91E63] text-white">
                      {link.badge}
                    </span>
                  )}
                </button>
              );
            })}

            {/* Mobile Action Buttons */}
            <div className="pt-4 mt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
              <a
                href={CLINIC_INFO.telLink}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0F4C75] text-white font-bold text-sm shadow text-center"
              >
                <Phone className="w-4 h-4 text-sky-200" />
                <span>Call {CLINIC_INFO.phone}</span>
              </a>

              <a
                href={CLINIC_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-2">
              <a
                href={CLINIC_INFO.emailLink}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 text-slate-700 font-semibold text-xs text-center"
              >
                <span>Email Us</span>
              </a>
              <a
                href={CLINIC_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-pink-50 text-[#E91E63] border border-pink-200 font-semibold text-xs text-center"
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Map Directions</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
