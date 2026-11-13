import React from 'react';
import { Phone, MessageCircle, Mail, MapPin, Award, ShieldCheck, Heart, Stethoscope, Clock, CheckCircle } from 'lucide-react';
import { CLINIC_INFO, CLINIC_IMAGES, TEAM_MEMBERS } from '../data/clinicData';
import { PageId } from '../components/Navbar';
import { QuickActionStrip } from '../components/QuickActionStrip';

interface TeamPageProps {
  onNavigate: (page: PageId) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 py-8 sm:py-12">
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-pink-50 text-[#E91E63] border border-pink-200">
            <Heart className="w-3.5 h-3.5 fill-[#E91E63]" />
            100% Real African Medical Professionals
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F4C75] tracking-tight">
            Meet Our Dedicated African Team
          </h1>

          <p className="text-slate-600 text-base sm:text-lg">
            Our qualified clinicians, midwives, laboratory technologists, and administrative personnel are grounded in the community and dedicated to providing safe, respectful, and expert care.
          </p>
        </div>
      </section>

      {/* 5 CARDS CIRCULAR EXACT FACES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1: Dr Musobya Bob Director Image 1 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200/90 hover:shadow-xl transition-all flex flex-col justify-between group">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#0F4C75] shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={CLINIC_IMAGES.drBob}
                    alt="Dr. Musobya Bob - Director"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-2 inset-x-0 flex justify-center">
                  <span className="px-3 py-0.5 rounded-full bg-[#0F4C75] text-white text-[11px] font-bold shadow">
                    Medical Director
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-[#0F4C75] transition">
                  Dr. Musobya Bob
                </h3>
                <p className="text-sm font-bold text-[#E91E63] mt-0.5">Clinic Director & Senior Clinician</p>
                <p className="text-xs text-slate-500 font-medium mt-1">General Medicine & Clinical Leadership</p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Spearheading the clinical excellence and ethical care standards of Rise Healthcare. Passionate about rapid clinical diagnosis, hypertension and chronic illness management, and accessible healthcare across Ndejje and Wakiso.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`https://wa.me/256705960182?text=${encodeURIComponent("Hello Dr. Musobya Bob, I would like to consult with you at Rise Healthcare.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow transition active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact Dr. Musobya &rarr; WhatsApp</span>
              </a>
              <a
                href={CLINIC_INFO.telLink}
                className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition"
              >
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>Call Clinic Desk: {CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Card 2: Dr Sarah Maternity Image 2 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-pink-100 hover:shadow-xl transition-all flex flex-col justify-between group">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#E91E63] shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={CLINIC_IMAGES.drSarah}
                    alt="Dr. Sarah - Maternity"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-2 inset-x-0 flex justify-center">
                  <span className="px-3 py-0.5 rounded-full bg-[#E91E63] text-white text-[11px] font-bold shadow">
                    Maternity Head
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-[#E91E63] transition">
                  Dr. Sarah
                </h3>
                <p className="text-sm font-bold text-[#E91E63] mt-0.5">Head of Maternity & Women's Health</p>
                <p className="text-xs text-slate-500 font-medium mt-1">Obstetrics & Infant Welfare</p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Dedicated to gentle, safe child deliveries, fetal heart monitoring, antenatal visits, and postnatal wellness. Ensuring mothers in labor receive clinical oxygen support, privacy, and compassionate encouragement.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`https://wa.me/256705960182?text=${encodeURIComponent("Hello Dr. Sarah, I would like to inquire about Maternity Care and Delivery Suite at Rise Healthcare.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#E91E63] hover:bg-[#c21350] text-white font-bold text-sm shadow transition active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact Dr. Sarah &rarr; WhatsApp</span>
              </a>
              <a
                href={CLINIC_INFO.telLink}
                className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition"
              >
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>Call Maternity: {CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Card 3: Dr Sharif Lab Image 3 + 8 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-sky-100 hover:shadow-xl transition-all flex flex-col justify-between group">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#00A8E8] shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={CLINIC_IMAGES.drSharif}
                    alt="Dr. Sharif - Lab Specialist"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-2 inset-x-0 flex justify-center">
                  <span className="px-3 py-0.5 rounded-full bg-[#00A8E8] text-white text-[11px] font-bold shadow">
                    Lab Director
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-[#00A8E8] transition">
                  Dr. Sharif
                </h3>
                <p className="text-sm font-bold text-[#00A8E8] mt-0.5">Chief Laboratory Technologist</p>
                <p className="text-xs text-slate-500 font-medium mt-1">Diagnostic Microscopy & Pathology</p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Directing modern microscopy analysis, blood counts, infectious disease panels, and computerized diagnostic archiving. Ensuring accurate and rapid lab test reports to guide prompt clinical treatment.
              </p>

              {/* Lab Microscope Dr Sharif working thumbnail (Image 8) */}
              <div className="flex items-center gap-2 p-2 rounded-xl bg-sky-50 border border-sky-100 w-full text-left">
                <img
                  src={CLINIC_IMAGES.lab}
                  alt="Dr Sharif lab microscope"
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="text-[11px] text-slate-700">
                  <span className="font-bold text-[#0F4C75] block">Clinical Microscopy</span>
                  <span>Operating high precision optical lab tests</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`https://wa.me/256705960182?text=${encodeURIComponent("Hello Dr. Sharif, I would like to inquire about Laboratory Tests and results at Rise Healthcare.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0F4C75] hover:bg-[#0c3c5c] text-white font-bold text-sm shadow transition active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact Dr. Sharif &rarr; WhatsApp</span>
              </a>
              <a
                href={CLINIC_INFO.telLink}
                className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition"
              >
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>Call Lab Desk: {CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Card 4: Mr Reagan Secretary Image 4 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200/90 hover:shadow-xl transition-all flex flex-col justify-between group">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-slate-700 shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={CLINIC_IMAGES.reagan}
                    alt="Mr. Reagan - Administrative Secretary"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-2 inset-x-0 flex justify-center">
                  <span className="px-3 py-0.5 rounded-full bg-slate-800 text-white text-[11px] font-bold shadow">
                    Admin Secretary
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-[#0F4C75] transition">
                  Mr. Reagan
                </h3>
                <p className="text-sm font-bold text-slate-700 mt-0.5">Administrative Secretary</p>
                <p className="text-xs text-slate-500 font-medium mt-1">Patient Admissions & Records</p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Coordinating courteous patient admissions, documentation, scheduling doctor appointments, and billing transparency. The welcoming operational link between our doctors and visiting families.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`https://wa.me/256705960182?text=${encodeURIComponent("Hello Mr. Reagan, I need assistance with appointments / records at Rise Healthcare.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm shadow transition active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact Mr. Reagan &rarr; WhatsApp</span>
              </a>
              <a
                href={CLINIC_INFO.telLink}
                className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition"
              >
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>Call Admin: {CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Card 5: Mr Shafic Supervisor Image 5 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200/90 hover:shadow-xl transition-all flex flex-col justify-between group">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[#0F4C75] shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={CLINIC_IMAGES.shafic}
                    alt="Mr. Shafic - Supervisor"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute -bottom-2 inset-x-0 flex justify-center">
                  <span className="px-3 py-0.5 rounded-full bg-[#0F4C75] text-white text-[11px] font-bold shadow">
                    Operations Lead
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <h3 className="text-2xl font-extrabold text-slate-900 group-hover:text-[#0F4C75] transition">
                  Mr. Shafic
                </h3>
                <p className="text-sm font-bold text-[#0F4C75] mt-0.5">Operations Supervisor</p>
                <p className="text-xs text-slate-500 font-medium mt-1">Facility Operations & Logistics</p>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Overseeing clinic sterilization, cold-chain maintenance for mobile vaccine boxes, uninterrupted electricity systems, medical gas reserves, and field logistics for community outreaches.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`https://wa.me/256705960182?text=${encodeURIComponent("Hello Mr. Shafic, I have an operations / facility inquiry for Rise Healthcare.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-[#0F4C75] hover:bg-[#0c3c5c] text-white font-bold text-sm shadow transition active:scale-95"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Contact Mr. Shafic &rarr; WhatsApp</span>
              </a>
              <a
                href={CLINIC_INFO.telLink}
                className="w-full inline-flex items-center justify-center gap-2 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition"
              >
                <Phone className="w-3.5 h-3.5 text-slate-500" />
                <span>Call Desk: {CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* FULL TEAM IMAGE 11: Team Certificates 3 staff certificates clock Rise sign = Licensed Trust */}
          <div className="bg-gradient-to-br from-sky-900 to-[#0F4C75] text-white rounded-3xl p-6 sm:p-8 shadow-lg flex flex-col justify-between">
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow border-2 border-white/20">
                <img
                  src={CLINIC_IMAGES.certificates}
                  alt="Team Certificates 3 staff certificates clock Rise sign = Licensed Trust"
                  className="w-full h-44 object-cover"
                />
                <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-emerald-500 text-white text-[10px] font-bold">
                  Official Wall of Trust
                </div>
              </div>

              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-pink-300">
                  Accredited Team
                </span>
                <h3 className="text-xl font-bold text-white mt-1">Licensed & Trusted Team</h3>
                <p className="text-xs text-sky-100 mt-2 leading-relaxed">
                  Our clinical certificates, medical licenses, and compliance credentials are displayed with transparency at the clinic. You are always in safe, qualified hands.
                </p>
              </div>
            </div>

            <div className="pt-4 mt-4 border-t border-white/20">
              <a
                href={CLINIC_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-xs shadow hover:bg-[#20ba59] transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat With Clinical Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MANDATORY ACTION STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuickActionStrip />
      </section>
    </div>
  );
};
