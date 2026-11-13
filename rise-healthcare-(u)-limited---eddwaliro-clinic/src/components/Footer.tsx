import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Heart, Award, Shield, CheckCircle2 } from 'lucide-react';
import { CLINIC_INFO, CLINIC_IMAGES } from '../data/clinicData';
import { PageId } from './Navbar';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = 2026;

  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0c2f48] text-white border-t border-sky-950 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-sky-900/60">
          {/* Column 1: Clinic Brand & Logo */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-white/10 p-2.5 rounded-2xl w-fit backdrop-blur-sm border border-white/15">
              <img
                src={CLINIC_IMAGES.logo}
                alt="RISE HEALTHCARE (U) Limited Logo - Eddwaliro"
                className="h-[60px] w-auto max-w-[170px] object-contain"
              />
            </div>
            <div>
              <h3 className="text-xl font-extrabold tracking-tight text-white">
                RISE HEALTHCARE <span className="text-[#E91E63] font-bold">(U) LTD</span>
              </h3>
              <p className="text-sm font-semibold text-pink-300 flex items-center gap-1.5 mt-0.5">
                <Heart className="w-4 h-4 fill-[#E91E63] text-[#E91E63]" />
                EDDWALIRO — {CLINIC_INFO.slogan}
              </p>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Serving Ndejje Zanta, Entebbe Road, and the broader Wakiso & Kampala community with 24-hour dignified, reliable, and affordable medical care.
            </p>
            <div className="flex items-center gap-2 text-xs text-sky-200 bg-sky-950/80 p-2.5 rounded-xl border border-sky-800/60">
              <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Registered & Licensed Medical Facility • Uganda</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E91E63]"></span>
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-pink-300 transition text-left cursor-pointer"
                >
                  Home - 24HRS Clinic
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-pink-300 transition text-left cursor-pointer"
                >
                  About Us & Eddwaliro Vision
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('services')}
                  className="hover:text-pink-300 transition text-left cursor-pointer"
                >
                  Our Medical Services (Maternity, Lab, Ward)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('clinical-care')}
                  className="hover:text-pink-300 transition text-left cursor-pointer font-bold text-sky-200"
                >
                  Doctors at Work (Patient Care in Action)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('team')}
                  className="hover:text-pink-300 transition text-left cursor-pointer"
                >
                  Our Dedicated African Team
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('gallery')}
                  className="hover:text-pink-300 transition text-left cursor-pointer"
                >
                  Clinic Photo Gallery (Inside Eddwaliro)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('community')}
                  className="hover:text-pink-300 transition text-left cursor-pointer font-semibold text-sky-200"
                >
                  Community Outreach & Immunization
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('contact')}
                  className="hover:text-pink-300 transition text-left cursor-pointer"
                >
                  Contact & Location Directions
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Medical Services Highlight */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00A8E8]"></span>
              Key Clinical Units
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>General Consultations (Dr. Musobya Bob)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                <span>Maternity & Delivery Suite with Oxygen</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Diagnostic Laboratory & Microscopy</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Inpatient Ward & 24HRS Emergency</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-yellow-400 shrink-0" />
                <span>Child Immunization & School Outreach</span>
              </li>
            </ul>

            <div className="pt-2">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-700/60 flex items-center gap-3">
                <img
                  src={CLINIC_IMAGES.certificates}
                  alt="Certified Clinic"
                  className="w-12 h-12 rounded-lg object-cover border border-slate-600"
                />
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1">
                    <Award className="w-3.5 h-3.5 text-yellow-400" />
                    Licensed & Certified
                  </div>
                  <div className="text-[11px] text-slate-300">Official medical practitioners council recognized</div>
                </div>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Location Exact */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
              Contact & Hours
            </h4>

            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-[#E91E63] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Location:</p>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {CLINIC_INFO.location}
                  </p>
                  <a
                    href={CLINIC_INFO.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs font-bold text-sky-300 hover:text-white mt-1 underline"
                  >
                    Open Google Maps (0.2359, 32.5801) &rarr;
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block">Phone / Tel:</span>
                  <a
                    href={CLINIC_INFO.telLink}
                    className="text-white hover:text-emerald-300 font-bold"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <div>
                  <span className="text-xs text-slate-400 block">WhatsApp:</span>
                  <a
                    href={CLINIC_INFO.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-emerald-300 font-semibold text-xs"
                  >
                    Chat on WhatsApp ({CLINIC_INFO.phone})
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-sky-300 shrink-0 mt-0.5" />
                <div className="break-all">
                  <span className="text-xs text-slate-400 block">Email:</span>
                  <a
                    href={CLINIC_INFO.emailLink}
                    className="text-slate-200 hover:text-sky-200 text-xs font-medium"
                  >
                    {CLINIC_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5 bg-sky-950/70 p-2.5 rounded-xl border border-sky-800/40">
                <Clock className="w-4 h-4 text-yellow-400 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <span className="font-bold text-yellow-300 uppercase block">Working Hours:</span>
                  <span className="text-slate-200">{CLINIC_INFO.hours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} {CLINIC_INFO.name}. All Rights Reserved. "You're Safe With Us!"</p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-slate-400">Ndejje Zanta, Entebbe Rd, Uganda</span>
            <span>•</span>
            <a href={CLINIC_INFO.telLink} className="hover:text-white transition">
              Emergency: {CLINIC_INFO.phone}
            </a>
            <span>•</span>
            <a href={CLINIC_INFO.whatsappLink} target="_blank" rel="noreferrer" className="text-emerald-400 hover:text-emerald-300 font-semibold">
              WhatsApp Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
