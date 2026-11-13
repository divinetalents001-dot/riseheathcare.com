import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, CheckCircle2, Clock, ShieldCheck, Stethoscope, Heart, Activity, ArrowRight, Info } from 'lucide-react';
import { CLINIC_INFO, CLINIC_IMAGES, SERVICES_LIST, ServiceItem } from '../data/clinicData';
import { PageId } from '../components/Navbar';
import { QuickActionStrip } from '../components/QuickActionStrip';

interface ServicesPageProps {
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <div className="space-y-16 py-8 sm:py-12">
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-[#0F4C75] border border-sky-200">
            <Activity className="w-3.5 h-3.5 text-[#00A8E8]" />
            24/7 Clinical Care in Ndejje Zanta
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F4C75] tracking-tight">
            Our Medical Services — Trusted by Ndejje Community
          </h1>

          <p className="text-slate-600 text-base sm:text-lg">
            High standard clinical diagnosis, compassionate maternal care, precision diagnostic laboratory testing, and clean inpatient wards led by qualified African medical doctors and nurses.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={CLINIC_INFO.telLink}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0F4C75] text-white font-bold text-sm shadow hover:bg-[#0c3c5c] transition"
            >
              <Phone className="w-4 h-4 text-sky-200" />
              <span>Emergency 24HRS: {CLINIC_INFO.phone}</span>
            </a>
            <a
              href={CLINIC_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow hover:bg-[#20ba59] transition"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Direct Desk</span>
            </a>
          </div>
        </div>
      </section>

      {/* 6 FULL DETAILED CARDS: EACH WITH REAL PHOTO + AFRICAN STAFF + BUTTONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* CARD 1: General Consultation - Image 1 - Dr Musobya - [Book Consultation -> WhatsApp] */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 hover:shadow-xl transition-all">
            {/* Image Col */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-md group">
              <img
                src={CLINIC_IMAGES.drBob}
                alt="Dr. Musobya Bob - General Consultation"
                className="w-full h-72 sm:h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0F4C75] text-white text-xs font-bold shadow">
                Card 1 • General Medicine
              </div>
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-900/85 backdrop-blur-sm rounded-xl text-white">
                <p className="text-xs font-bold text-sky-300">Dr. Musobya Bob — Senior Medical Officer</p>
                <p className="text-[11px] text-slate-200">Director & Lead Diagnostician</p>
              </div>
            </div>

            {/* Content Col */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-sky-100 text-[#0F4C75]">
                  <Stethoscope className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-xs uppercase font-bold text-sky-700 tracking-wider">Clinical Care</span>
                  <h3 className="text-2xl font-extrabold text-[#0F4C75]">1. General Consultation & Clinical Diagnosis</h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Consult with experienced medical doctors led by Director Dr. Musobya Bob. We provide in-depth evaluation of acute and chronic health conditions, confidential medical examinations, adult and pediatric health assessments, and prompt prescription dispensing with individualized care plans.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Hypertension & diabetes monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Pediatric fevers & respiratory infections</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Private and confidential doctor's office</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Available 24 hours day and night</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/256705960182?text=${encodeURIComponent("Hello Dr. Musobya Bob, I would like to book a General Consultation at Rise Healthcare.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow transition active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book Consultation &rarr; WhatsApp</span>
                </a>
                <a
                  href={CLINIC_INFO.telLink}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition"
                >
                  <Phone className="w-4 h-4 text-slate-500" />
                  <span>Call Doctor</span>
                </a>
              </div>
            </div>
          </div>

          {/* CARD 2: Maternity & Delivery Suite - Image 10 + Image 2 Dr Sarah - Show pink bed oxygen - [Book Maternity Care] */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-pink-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 hover:shadow-xl transition-all">
            {/* Dual Images: Image 10 (pink bed oxygen) + Image 2 (Dr Sarah) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="relative rounded-2xl overflow-hidden shadow-md group">
                <img
                  src={CLINIC_IMAGES.maternity}
                  alt="Maternity Delivery Suite pink bed oxygen"
                  className="w-full h-72 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-[#E91E63] text-white text-[10px] font-bold">
                  Pink Bed + Oxygen
                </div>
                <div className="absolute bottom-2 inset-x-2 p-2 bg-black/75 rounded-lg text-white text-[10px] text-center">
                  Delivery Suite with Clinical O₂
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-md group">
                <img
                  src={CLINIC_IMAGES.drSarah}
                  alt="Dr. Sarah Maternity Specialist"
                  className="w-full h-72 sm:h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-emerald-600 text-white text-[10px] font-bold">
                  Dr. Sarah
                </div>
                <div className="absolute bottom-2 inset-x-2 p-2 bg-black/75 rounded-lg text-white text-[10px] text-center">
                  Head of Maternity
                </div>
              </div>
            </div>

            {/* Content Col */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-pink-100 text-[#E91E63]">
                  <Heart className="w-5 h-5 fill-[#E91E63]" />
                </span>
                <div>
                  <span className="text-xs uppercase font-bold text-pink-600 tracking-wider">Maternal & Infant Health</span>
                  <h3 className="text-2xl font-extrabold text-[#0F4C75]">2. Maternity & Delivery Suite</h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Safe motherhood is central to our clinic mission. Led by Dr. Sarah, our specialized maternity wing provides clean pink delivery beds, continuous clinical medical oxygen support, fetal heartbeat monitoring, sterile labor packs, and warm post-delivery care for mother and newborn.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E91E63] shrink-0" />
                  <span>Equipped pink delivery bed & suction gear</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E91E63] shrink-0" />
                  <span>Clinical medical oxygen cylinder on standby</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E91E63] shrink-0" />
                  <span>Antenatal (ANC) checks & fetal Doppler monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E91E63] shrink-0" />
                  <span>24/7 emergency delivery assistance</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/256705960182?text=${encodeURIComponent("Hello Dr. Sarah, I would like to book Maternity Care and Delivery Suite admission at Rise Healthcare.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#E91E63] hover:bg-[#c21350] text-white font-bold text-sm shadow transition active:scale-95"
                >
                  <Heart className="w-4 h-4" />
                  <span>Book Maternity Care</span>
                </a>
                <a
                  href={CLINIC_INFO.telLink}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition"
                >
                  <Phone className="w-4 h-4 text-pink-600" />
                  <span>Call Maternity Ward: {CLINIC_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* CARD 3: Laboratory Services - Image 8 microscope + Image 3 computer - Accurate Reliable - [Book Lab Test] */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-sky-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 hover:shadow-xl transition-all">
            {/* Dual Images: Image 8 (Microscope) + Image 3 (Dr Sharif computer) */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-3">
              <div className="relative rounded-2xl overflow-hidden shadow-md group">
                <img
                  src={CLINIC_IMAGES.lab}
                  alt="Lab Microscope Dr Sharif working"
                  className="w-full h-72 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-[#0F4C75] text-white text-[10px] font-bold">
                  Microscopy
                </div>
                <div className="absolute bottom-2 inset-x-2 p-2 bg-black/75 rounded-lg text-white text-[10px] text-center">
                  Dr. Sharif Operating Microscope
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-md group">
                <img
                  src={CLINIC_IMAGES.drSharif}
                  alt="Dr Sharif computer lab kanzu"
                  className="w-full h-72 sm:h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full bg-sky-600 text-white text-[10px] font-bold">
                  Digital Lab Records
                </div>
                <div className="absolute bottom-2 inset-x-2 p-2 bg-black/75 rounded-lg text-white text-[10px] text-center">
                  Dr. Sharif Lab Technologist
                </div>
              </div>
            </div>

            {/* Content Col */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-sky-100 text-[#00A8E8]">
                  <Activity className="w-5 h-5" />
                </span>
                <div>
                  <span className="text-xs uppercase font-bold text-[#00A8E8] tracking-wider">Accurate • Reliable • Fast</span>
                  <h3 className="text-2xl font-extrabold text-[#0F4C75]">3. Diagnostic Laboratory Services</h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Treatment is only as good as the diagnosis. Our diagnostic laboratory, under Dr. Sharif's supervision, performs fast and accurate investigations using precision optical microscopes and computerized test tracking. Get test results within 15–30 minutes for emergency interventions.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A8E8] shrink-0" />
                  <span>Malaria BS & Rapid Diagnostic Tests (RDT)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A8E8] shrink-0" />
                  <span>Full Blood Count (CBC) & Typhoid Widal</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A8E8] shrink-0" />
                  <span>Urinalysis, stool exam, & H. Pylori</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00A8E8] shrink-0" />
                  <span>Hepatitis, HIV screening, blood grouping</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/256705960182?text=${encodeURIComponent("Hello Dr. Sharif, I would like to book a Laboratory Diagnostic Test at Rise Healthcare.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0F4C75] hover:bg-[#0c3c5c] text-white font-bold text-sm shadow transition active:scale-95"
                >
                  <Activity className="w-4 h-4 text-sky-200" />
                  <span>Book Lab Test &rarr; WhatsApp</span>
                </a>
                <a
                  href={CLINIC_INFO.telLink}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition"
                >
                  <Phone className="w-4 h-4 text-slate-500" />
                  <span>Inquire Prices</span>
                </a>
              </div>
            </div>
          </div>

          {/* CARD 4: Inpatient & Emergency 24HRS - Image 9 beds ward - 24HRS Open - [Emergency Call 0705960182] */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-red-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 hover:shadow-xl transition-all">
            {/* Image Col: Image 9 beds ward */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-md group">
              <img
                src={CLINIC_IMAGES.ward}
                alt="Beds Ward pink bed Inpatient"
                className="w-full h-72 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-red-600 text-white text-xs font-bold shadow animate-pulse">
                24HRS Emergency & Ward
              </div>
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-900/85 backdrop-blur-sm rounded-xl text-white">
                <p className="text-xs font-bold text-red-300">Clean Inpatient Ward</p>
                <p className="text-[11px] text-slate-200">Pink bed linens, IV stands, continuous observation</p>
              </div>
            </div>

            {/* Content Col */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-red-100 text-red-700">
                  <Clock className="w-5 h-5 text-red-600" />
                </span>
                <div>
                  <span className="text-xs uppercase font-bold text-red-600 tracking-wider">24HRS Open Day & Night</span>
                  <h3 className="text-2xl font-extrabold text-[#0F4C75]">4. Inpatient & Emergency 24HRS</h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Medical crises do not keep office hours. Our inpatient admission ward features comfortable, sanitized beds with pink linens, continuous IV infusion therapy, vital signs tracking, emergency oxygen access, and attentive nursing care throughout the night.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>24/7 Trauma stabilization and triage</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>IV fluid resuscitation and antibiotic therapy</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Sterile environment with patient privacy curtains</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                  <span>Round-the-clock nurse call button support</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={CLINIC_INFO.telLink}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-sm shadow-md transition active:scale-95"
                >
                  <Phone className="w-4 h-4 text-white animate-pulse" />
                  <span>Emergency Call {CLINIC_INFO.phone}</span>
                </a>
                <a
                  href={`https://wa.me/256705960182?text=${encodeURIComponent("EMERGENCY ADMISSION: I need immediate admission / bed reservation at Rise Healthcare.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold text-sm transition"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Emergency WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* CARD 5: Reception & Patient Care - Image 7 reception - Welcoming - [Visit Us] */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/90 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 hover:shadow-xl transition-all">
            {/* Image Col: Image 7 reception 3 staff */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-md group">
              <img
                src={CLINIC_IMAGES.reception}
                alt="Reception 3 staff blue wall"
                className="w-full h-72 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0F4C75] text-white text-xs font-bold shadow">
                Card 5 • Welcoming Care
              </div>
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-900/85 backdrop-blur-sm rounded-xl text-white">
                <p className="text-xs font-bold text-sky-300">Front Desk Admissions Team</p>
                <p className="text-[11px] text-slate-200">Courteous, rapid triage, zero unnecessary waiting</p>
              </div>
            </div>

            {/* Content Col */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-sky-100 text-[#0F4C75]">
                  <Heart className="w-5 h-5 text-[#0F4C75]" />
                </span>
                <div>
                  <span className="text-xs uppercase font-bold text-sky-700 tracking-wider">Welcoming • Efficient</span>
                  <h3 className="text-2xl font-extrabold text-[#0F4C75]">5. Reception & Patient Care</h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Experience warmth from the moment you step into our blue-walled reception lounge. Our 3-staff admissions desk provides swift patient registration, respectful vital-sign checks (blood pressure, temperature, weight, oxygen saturation), and clear guidance on consultations and billing.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Multilingual staff fluent in Luganda and English</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Rapid triage without exhausting waiting queues</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Transparent and affordable medical fee schedule</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Comfortable and ventilated patient waiting lounge</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0F4C75] hover:bg-[#0c3c5c] text-white font-bold text-sm shadow transition active:scale-95 cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-sky-200" />
                  <span>Visit Us (Ndejje Zanta)</span>
                </button>
                <a
                  href={CLINIC_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition"
                >
                  <span>Open Map Location</span>
                </a>
              </div>
            </div>
          </div>

          {/* CARD 6: Child Immunization & Wellness - Image 12 community outreach vaccine - [Book Immunization] */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-emerald-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 hover:shadow-xl transition-all">
            {/* Image Col: Image 12 community outreach */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-md group">
              <img
                src={CLINIC_IMAGES.community}
                alt="Child Immunization & Wellness - African children and vaccine cold box"
                className="w-full h-72 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold shadow">
                Card 6 • Child Wellness & UNEPI
              </div>
              <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-900/85 backdrop-blur-sm rounded-xl text-white">
                <p className="text-xs font-bold text-emerald-300">Certified Cold Box (2°C - 8°C)</p>
                <p className="text-[11px] text-slate-200">Protecting African children from vaccine-preventable diseases</p>
              </div>
            </div>

            {/* Content Col */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2">
                <span className="p-2 rounded-xl bg-emerald-100 text-emerald-700">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </span>
                <div>
                  <span className="text-xs uppercase font-bold text-emerald-600 tracking-wider">UNEPI Accredited Cold Chain</span>
                  <h3 className="text-2xl font-extrabold text-[#0F4C75]">6. Child Immunization & Wellness</h3>
                </div>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Immunization is life insurance for every child. We supply certified WHO/UNEPI routine childhood immunizations maintained under strict temperature controls in specialized cold boxes. Available both in-clinic and during our school and community outreach visits.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>BCG, Polio, Pentavalent, Rotavirus, & Measles</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Strict cold chain protocol kept between 2°C and 8°C</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Infant growth monitoring and vitamin A supplementation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Immunization card record keeping & reminder dates</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/256705960182?text=${encodeURIComponent("Hello Rise Health Care, I would like to Book Child Immunization for my child.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow transition active:scale-95"
                >
                  <ShieldCheck className="w-4 h-4 text-white" />
                  <span>Book Immunization &rarr; WhatsApp</span>
                </a>
                <button
                  onClick={() => onNavigate('community')}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition"
                >
                  <span>See School Outreaches</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
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
