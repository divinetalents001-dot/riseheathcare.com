import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Heart, 
  ArrowRight, 
  Activity, 
  Award, 
  UserCheck, 
  Stethoscope, 
  ChevronRight, 
  Sparkles, 
  CheckCircle2, 
  ThermometerSnowflake, 
  Eye, 
  Zap, 
  Baby, 
  Bed, 
  Microscope,
  Send
} from 'lucide-react';
import { CLINIC_INFO, CLINIC_IMAGES, PATIENT_CARE_SCENES } from '../data/clinicData';
import { PageId } from '../components/Navbar';
import { QuickActionStrip } from '../components/QuickActionStrip';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onSelectService?: (serviceId: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  // Interactive Care Navigator State
  const [selectedCareTab, setSelectedCareTab] = useState<number>(0);
  const [activeSymptom, setActiveSymptom] = useState<string>('malaria');

  const symptomsList = [
    {
      id: 'malaria',
      label: 'Fever, Chills & Weakness',
      icon: Activity,
      recommendedDept: 'Diagnostic Lab & Doctor Consultation',
      recommendedDoctor: 'Dr. Sharif (Lab) & Dr. Musobya Bob',
      actionText: '15-Minute Malaria & Blood Test',
      image: CLINIC_IMAGES.patientConsultation,
      waMessage: 'Hello Rise Healthcare, I have fever and chills. I want to book a rapid malaria test and doctor consultation.',
    },
    {
      id: 'maternity',
      label: 'Pregnancy & Delivery Care',
      icon: Baby,
      recommendedDept: 'Maternity Delivery Suite with Oxygen',
      recommendedDoctor: 'Dr. Sarah & Lead Midwives',
      actionText: '24/7 Safe Delivery & Antenatal Check',
      image: CLINIC_IMAGES.maternityMotherBaby,
      waMessage: 'Hello Dr. Sarah, I would like to book maternity / delivery care at Rise Healthcare.',
    },
    {
      id: 'emergency',
      label: 'Severe Illness / Bed Admission',
      icon: Bed,
      recommendedDept: '24HRS Inpatient Recovery Ward',
      recommendedDoctor: 'Emergency Medical & Nursing Team',
      actionText: 'Immediate IV Infusion & Bed Stabilization',
      image: CLINIC_IMAGES.nurseBedside,
      waMessage: 'EMERGENCY: I need urgent inpatient admission / bed at Rise Healthcare Ndejje Zanta.',
    },
    {
      id: 'pediatric',
      label: 'Child Fever & Vaccination',
      icon: ThermometerSnowflake,
      recommendedDept: 'Child Immunization & Pediatric Care',
      recommendedDoctor: 'Pediatric Wellness Officers',
      actionText: 'UNEPI Cold-Chain Vaccines (2-8°C)',
      image: CLINIC_IMAGES.pediatricExam,
      waMessage: 'Hello Rise Healthcare, I want to book child immunization / pediatric checkup.',
    },
    {
      id: 'lab',
      label: 'Routine Lab Tests & Checkup',
      icon: Microscope,
      recommendedDept: 'Laboratory & Optical Microscopy',
      recommendedDoctor: 'Dr. Sharif (Chief Technologist)',
      actionText: 'Fast Full Blood Count, Typhoid & Stool Test',
      image: CLINIC_IMAGES.lab,
      waMessage: 'Hello Dr. Sharif, I would like to schedule routine diagnostic lab tests at Rise Healthcare.',
    },
  ];

  const currentSymptomData = symptomsList.find(s => s.id === activeSymptom) || symptomsList[0];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* MONUMENTAL HERO: RISE HEALTH CARE */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-slate-50 pt-8 pb-16 sm:pt-12 sm:pb-24 border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Live Emergency Ticker */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 p-3 bg-white/90 backdrop-blur-md rounded-2xl border border-sky-100 shadow-xs">
            <div className="flex items-center gap-3">
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0F4C75]">
                Live Clinic Status: 24/7 Emergency & Inpatient Admissions Open
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
              <span className="hidden sm:inline">Doctors On Duty: <strong className="text-[#0F4C75]">Dr. Musobya Bob & Dr. Sarah</strong></span>
              <span className="text-[#E91E63] font-bold">Oxygen: Ready</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            {/* Left Content (7 cols): Bold RISE HEALTH CARE branding */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Official Logo + Title Tag */}
              <div className="flex items-center gap-4">
                <div className="p-2 bg-white rounded-2xl shadow-sm border border-slate-200/90">
                  <img
                    src={CLINIC_IMAGES.logo}
                    alt="Official Rise Health Care Logo"
                    className="h-16 w-auto object-contain"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase font-extrabold tracking-widest text-[#E91E63] flex items-center gap-1">
                      <Heart className="w-3.5 h-3.5 fill-[#E91E63]" />
                      EDDWALIRO • UGANDA
                    </span>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      24 HRS OPEN
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-slate-500 mt-0.5">
                    Ndejje Zanta, Entebbe Road (Near Health Centre 4)
                  </div>
                </div>
              </div>

              {/* Title: RISE HEALTH CARE */}
              <div>
                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#0F4C75] tracking-tight leading-[1.05]">
                  RISE HEALTH CARE
                </h1>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-1.5">
                  <span className="text-lg sm:text-2xl font-black text-[#E91E63] tracking-tight">
                    (U) LIMITED
                  </span>
                  <span className="text-slate-300 font-light text-xl">|</span>
                  <span className="text-base sm:text-xl font-bold text-slate-700">
                    You're Safe With Us!
                  </span>
                </div>
              </div>

              {/* Secondary H1 sub exact */}
              <p className="text-base sm:text-xl text-slate-600 leading-relaxed font-normal">
                Your Health is Our Priority — 24HRS at Ndejje Zanta. Affordable, Trusted, Near Ndejje Health Centre 4, Entebbe Rd.
              </p>

              {/* THE 4 MANDATORY BUTTONS: [Call 0705960182] [WhatsApp] [Email] [Directions] */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={CLINIC_INFO.telLink}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#0F4C75] hover:bg-[#0c3c5c] text-white font-bold text-base shadow-md hover:shadow-lg transition-all active:scale-95"
                >
                  <Phone className="w-5 h-5 text-sky-300" />
                  <span>Call {CLINIC_INFO.phone}</span>
                </a>

                <a
                  href={CLINIC_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#1faa53] text-white font-bold text-base shadow-md hover:shadow-lg transition-all active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={CLINIC_INFO.emailLink}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-300 shadow-xs transition-all active:scale-95"
                >
                  <Mail className="w-4 h-4 text-slate-500" />
                  <span>Email</span>
                </a>

                <a
                  href={CLINIC_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-pink-50 hover:bg-pink-100 text-[#E91E63] font-bold text-sm border border-pink-200 shadow-xs transition-all active:scale-95"
                >
                  <MapPin className="w-4 h-4 text-[#E91E63]" />
                  <span>Directions</span>
                </a>
              </div>

              {/* Quick Feature Badges */}
              <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-200">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  <span>24HRS Open</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-[#E91E63]"></div>
                  <span>Maternity & O₂</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                  <span>Lab Diagnostics</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <span>Vaccine Drives</span>
                </div>
              </div>
            </div>

            {/* Right: Creative Visual Showcase with Dr. Musobya + Real Patient Consultation */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">
                {/* Main Hero Card: Dr Musobya Bob Image 1 */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                  <img
                    src={CLINIC_IMAGES.drBob}
                    alt="Dr. Musobya Bob - Medical Director Rise Healthcare"
                    className="w-full h-80 sm:h-96 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/25 to-transparent"></div>

                  <div className="absolute top-4 left-4 px-3 py-1.5 rounded-xl bg-[#0F4C75]/95 backdrop-blur-sm text-white text-xs font-bold flex items-center gap-1.5 shadow">
                    <Stethoscope className="w-3.5 h-3.5 text-sky-300" />
                    <span>Lead Clinical Physician</span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-white/50 text-slate-900">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-[#E91E63] block">
                          Medical Leadership
                        </span>
                        <h3 className="text-lg font-extrabold text-[#0F4C75]">
                          Dr. Musobya Bob
                        </h3>
                        <p className="text-xs text-slate-600 font-medium">
                          Director & Lead Diagnostician
                        </p>
                      </div>
                      <button
                        onClick={() => onNavigate('clinical-care')}
                        className="px-3.5 py-2 rounded-xl bg-[#0F4C75] text-white text-xs font-bold flex items-center gap-1 shadow hover:bg-[#0b3857] transition cursor-pointer"
                      >
                        <span>See In Action</span>
                        <ArrowRight className="w-3.5 h-3.5 text-sky-200" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Patient Care In Action Mini-Card Highlight */}
                <div 
                  onClick={() => onNavigate('clinical-care')}
                  className="p-3.5 bg-white rounded-2xl shadow-lg border border-slate-200/90 flex items-center gap-3.5 cursor-pointer hover:border-sky-300 transition group"
                >
                  <img
                    src={CLINIC_IMAGES.patientConsultation}
                    alt="Doctor examining patient with stethoscope"
                    className="w-16 h-16 rounded-xl object-cover shadow-sm group-hover:scale-105 transition"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-bold text-emerald-700 tracking-wider">
                        Patient Care Live
                      </span>
                      <span className="text-xs text-[#E91E63] font-bold group-hover:translate-x-0.5 transition">
                        Explore &rarr;
                      </span>
                    </div>
                    <p className="text-xs font-bold text-slate-900 mt-0.5 line-clamp-1">
                      Doctor Examining Patient with Stethoscope
                    </p>
                    <p className="text-[11px] text-slate-500 line-clamp-1">
                      Compassionate auscultation & accurate diagnostics
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CREATIVE VIEW 1: PATIENTS BEING WORKED UPON (NEW CLINICAL ACTION GALLERY) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#E91E63] flex items-center gap-1.5">
              <Activity className="w-4 h-4" />
              Live Clinic Care & Procedures
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F4C75] mt-1">
              Patients Being Worked Upon — Care in Action
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Real clinical workflows captured inside Rise Healthcare: from physical examinations to bedside IV therapy and safe childbirth.
            </p>
          </div>

          <button
            onClick={() => onNavigate('clinical-care')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pink-50 hover:bg-pink-100 text-[#E91E63] font-bold text-sm border border-pink-200 transition cursor-pointer"
          >
            <span>View All Procedures</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 4 Cards Grid of Patients Being Worked Upon */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PATIENT_CARE_SCENES.map((scene) => (
            <div
              key={scene.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-56 overflow-hidden bg-slate-900">
                  <img
                    src={scene.image}
                    alt={scene.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0F4C75] text-white text-[11px] font-bold shadow">
                    {scene.tag}
                  </div>
                  <div className="absolute bottom-2 left-3 right-3 text-white">
                    <p className="text-xs font-bold text-sky-200">{scene.doctor}</p>
                    <p className="text-[10px] text-slate-300">{scene.department}</p>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0F4C75] transition line-clamp-2">
                    {scene.title}
                  </h3>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {scene.details}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('clinical-care')}
                  className="text-xs font-bold text-[#E91E63] hover:text-[#c21350] transition flex items-center gap-1 cursor-pointer"
                >
                  <span>See Process</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <a
                  href={`https://wa.me/256705960182?text=${encodeURIComponent(`Hello Rise Healthcare, I want to inquire about ${scene.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-bold hover:bg-emerald-100 transition"
                >
                  Book Care
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CREATIVE VIEW 2: INTERACTIVE SYMPTOM-TO-CARE ROUTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#0F4C75] via-[#103a58] to-[#1B262C] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-pink-300">
              Instant Patient Guidance
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
              What Medical Support Do You Need Today?
            </h2>
            <p className="text-slate-200 text-sm">
              Tap a symptom or clinical need below to see the recommended department, doctor, and fast booking option.
            </p>
          </div>

          {/* Interactive Symptom Selectors */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8">
            {symptomsList.map((sym) => {
              const Icon = sym.icon;
              const isActive = activeSymptom === sym.id;
              return (
                <button
                  key={sym.id}
                  onClick={() => setActiveSymptom(sym.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#E91E63] text-white shadow-lg scale-105'
                      : 'bg-white/10 hover:bg-white/20 text-slate-100 border border-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{sym.label}</span>
                </button>
              );
            })}
          </div>

          {/* Result Card */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-2xl max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-5 rounded-2xl overflow-hidden shadow-md">
                <img
                  src={currentSymptomData.image}
                  alt={currentSymptomData.label}
                  className="w-full h-52 sm:h-60 object-cover"
                />
              </div>

              <div className="md:col-span-7 space-y-3.5">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Fast-Track Medical Route
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F4C75]">
                  {currentSymptomData.recommendedDept}
                </h3>

                <p className="text-sm font-semibold text-slate-700">
                  Recommended Specialist: <span className="text-[#E91E63]">{currentSymptomData.recommendedDoctor}</span>
                </p>

                <p className="text-xs text-slate-600 leading-relaxed">
                  Immediate triage on arrival. We provide: <strong className="text-slate-900">{currentSymptomData.actionText}</strong> with minimal waiting time.
                </p>

                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/256705960182?text=${encodeURIComponent(currentSymptomData.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book on WhatsApp</span>
                  </a>

                  <a
                    href={CLINIC_INFO.telLink}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F4C75] text-white font-bold text-xs shadow hover:bg-[#0c3c5c] transition"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-200" />
                    <span>Call {CLINIC_INFO.phone}</span>
                  </a>

                  <button
                    onClick={() => onNavigate('services')}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 hover:text-[#0F4C75] cursor-pointer"
                  >
                    <span>More service info &rarr;</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR: Image 11 Certificates, Title Licensed & Certified */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image 11: Team Certificates 3 staff certificates clock Rise sign = Licensed Trust */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-slate-100 group">
                <img
                  src={CLINIC_IMAGES.certificates}
                  alt="Rise Healthcare Team Certificates - Licensed Trust"
                  className="w-full h-64 sm:h-72 object-cover transition-transform duration-300 group-hover:scale-102"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 p-3 text-white">
                  <p className="text-xs font-semibold flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Official Clinical Accreditation & Registration
                  </p>
                </div>
              </div>
            </div>

            {/* Content: Licensed & Certified */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                Licensed & Certified Healthcare Facility
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F4C75]">
                Licensed & Certified You Can Confide In
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                RISE HEALTHCARE (U) Limited operates in full adherence to the Ministry of Health and national medical practice guidelines. Every practitioner on our team—from our Director Dr. Musobya Bob to our maternity midwives and lab specialists—is professionally licensed and vetted.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="text-xl font-extrabold text-[#0F4C75]">24/7</div>
                  <div className="text-xs font-medium text-slate-600">Continuous Service</div>
                </div>
                <div className="p-3.5 rounded-xl bg-pink-50 border border-pink-100">
                  <div className="text-xl font-extrabold text-[#E91E63]">100%</div>
                  <div className="text-xs font-medium text-slate-600">African Real Staff</div>
                </div>
                <div className="p-3.5 rounded-xl bg-sky-50 border border-sky-100">
                  <div className="text-xl font-extrabold text-[#00A8E8]">MOH</div>
                  <div className="text-xs font-medium text-slate-600">Standard Compliant</div>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('about')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#0F4C75] hover:text-[#E91E63] transition cursor-pointer"
                >
                  <span>Read our accreditation & founding story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW 3 CARDS:
          Maternity Image 10, Lab Image 8, Ward Image 9 each with [Learn More] button */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#E91E63] flex items-center gap-1.5">
              <Activity className="w-4 h-4" />
              Our Core Medical Pillars
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F4C75] mt-1">
              Essential Clinical Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-1">
              Real clinical equipment, specialized wards, and round-the-clock emergency care.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => onNavigate('clinical-care')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-pink-50 hover:bg-pink-100 text-[#E91E63] font-bold text-sm border border-pink-200 transition cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-[#E91E63]" />
              <span>Doctors at Work</span>
            </button>
            <button
              onClick={() => onNavigate('services')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-50 hover:bg-sky-100 text-[#0F4C75] font-bold text-sm transition cursor-pointer"
            >
              <span>View All 6 Services</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Preview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1: Maternity Image 10 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col group">
            <div className="relative h-56 overflow-hidden bg-slate-100">
              <img
                src={CLINIC_IMAGES.maternity}
                alt="Maternity Delivery Suite pink bed oxygen"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#E91E63] text-white text-xs font-bold shadow">
                Maternity & Delivery Suite
              </div>
              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-sm text-white text-[11px] font-medium">
                Pink Bed + Oxygen
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0F4C75] transition">
                  Maternity & Delivery Suite
                </h3>
                <p className="text-slate-600 text-sm mt-2 line-clamp-3">
                  Equipped labor ward with clean pink delivery beds, clinical medical oxygen, ultrasound screening, and gentle 24-hour midwife supervision for safe motherhood.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#E91E63] hover:text-[#c21350] transition cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={CLINIC_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold hover:bg-emerald-100 transition"
                >
                  Book Delivery
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: Lab Image 8 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col group">
            <div className="relative h-56 overflow-hidden bg-slate-100">
              <img
                src={CLINIC_IMAGES.lab}
                alt="Lab Microscope Dr Sharif working"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0F4C75] text-white text-xs font-bold shadow">
                Diagnostic Laboratory
              </div>
              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-sm text-white text-[11px] font-medium">
                Microscope Analysis
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0F4C75] transition">
                  Laboratory Services
                </h3>
                <p className="text-slate-600 text-sm mt-2 line-clamp-3">
                  Swift, precise diagnostics directed by Dr. Sharif. Optical microscopy, malaria BS, full blood counts, typhoid, liver panels, and confidential rapid results.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#0F4C75] hover:text-[#E91E63] transition cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={CLINIC_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded-lg bg-emerald-50 text-emerald-700 text-xs font-semibold hover:bg-emerald-100 transition"
                >
                  Schedule Test
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Ward Image 9 */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col group">
            <div className="relative h-56 overflow-hidden bg-slate-100">
              <img
                src={CLINIC_IMAGES.ward}
                alt="Beds Ward pink bed Inpatient"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#00A8E8] text-white text-xs font-bold shadow">
                Inpatient & Ward
              </div>
              <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-sm text-white text-[11px] font-medium">
                24HRS Admission
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#0F4C75] transition">
                  Inpatient & Emergency 24HRS
                </h3>
                <p className="text-slate-600 text-sm mt-2 line-clamp-3">
                  Sterile inpatient recovery beds, intravenous infusions, patient vitals monitoring, and restful accommodations with compassionate nursing care day and night.
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-[#00A8E8] hover:text-[#0F4C75] transition cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={CLINIC_INFO.telLink}
                  className="px-3 py-1 rounded-lg bg-red-50 text-red-700 text-xs font-semibold hover:bg-red-100 transition"
                >
                  Emergency Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY PREVIEW: Image 12, Title Giving Back to African Community, button [See Our Outreach] */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0F4C75] via-[#103a58] to-[#1B262C] text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-10 lg:p-12">
            {/* Left text */}
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/20 text-pink-300 border border-pink-400/30 text-xs font-bold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 fill-pink-400 text-pink-400" />
                Eddwaliro Community Health Outreach
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Giving Back to African Community
              </h2>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                RISE HEALTHCARE is anchored in the belief that health is a human right. We routinely take medical teams and certified cold-box vaccines (2-8°C) directly to African school children in uniforms, community centers, and villages across Ndejje and Wakiso.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-sky-200">
                <span className="flex items-center gap-1.5">
                  <UserCheck className="w-4 h-4 text-emerald-400" />
                  School Children Health Checks
                </span>
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-pink-400" />
                  Cold-Chain UNEPI Vaccines
                </span>
                <span className="flex items-center gap-1.5">
                  <Heart className="w-4 h-4 text-yellow-400" />
                  Community Giveaways
                </span>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('community')}
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#E91E63] hover:bg-[#c21350] text-white font-bold text-sm shadow-lg hover:shadow-pink-500/20 transition-all active:scale-95 cursor-pointer"
                >
                  <span>See Our Outreach</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Image 12 Outreach Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 group">
                <img
                  src={CLINIC_IMAGES.community}
                  alt="Community Outreach Vaccination & Wellness - African children in school uniforms"
                  className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 right-3 p-3 bg-black/60 backdrop-blur-md rounded-xl text-white text-xs">
                  <div className="font-bold text-emerald-300">RISE HEALTH CARE EDDWALIRO</div>
                  <div className="text-[11px] text-slate-200">Community Health Outreach, Vaccination & Wellness Drive</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEET OUR CLINICAL TEAM PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-100/70 rounded-3xl p-6 sm:p-10 border border-slate-200/80">
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F4C75]">
              Real Faces • Real Doctors
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Meet Our African Healthcare Professionals
            </h2>
            <p className="text-sm text-slate-600">
              Passionate Ugandan healthcare professionals dedicated to your safety, dignity, and recovery.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {/* Dr Musobya */}
            <div className="bg-white rounded-2xl p-4 text-center shadow-xs border border-slate-200/80 flex flex-col items-center">
              <img
                src={CLINIC_IMAGES.drBob}
                alt="Dr. Musobya Bob"
                className="w-20 h-20 rounded-full object-cover border-2 border-[#0F4C75] shadow"
              />
              <h4 className="font-extrabold text-sm text-[#0F4C75] mt-3">Dr. Musobya Bob</h4>
              <p className="text-xs text-[#E91E63] font-semibold">Director</p>
            </div>

            {/* Dr Sarah */}
            <div className="bg-white rounded-2xl p-4 text-center shadow-xs border border-slate-200/80 flex flex-col items-center">
              <img
                src={CLINIC_IMAGES.drSarah}
                alt="Dr. Sarah"
                className="w-20 h-20 rounded-full object-cover border-2 border-emerald-500 shadow"
              />
              <h4 className="font-extrabold text-sm text-[#0F4C75] mt-3">Dr. Sarah</h4>
              <p className="text-xs text-emerald-600 font-semibold">Maternity</p>
            </div>

            {/* Dr Sharif */}
            <div className="bg-white rounded-2xl p-4 text-center shadow-xs border border-slate-200/80 flex flex-col items-center">
              <img
                src={CLINIC_IMAGES.drSharif}
                alt="Dr. Sharif"
                className="w-20 h-20 rounded-full object-cover border-2 border-sky-500 shadow"
              />
              <h4 className="font-extrabold text-sm text-[#0F4C75] mt-3">Dr. Sharif</h4>
              <p className="text-xs text-sky-600 font-semibold">Lab Diagnostics</p>
            </div>

            {/* Mr Reagan */}
            <div className="bg-white rounded-2xl p-4 text-center shadow-xs border border-slate-200/80 flex flex-col items-center">
              <img
                src={CLINIC_IMAGES.reagan}
                alt="Mr. Reagan"
                className="w-20 h-20 rounded-full object-cover border-2 border-slate-800 shadow"
              />
              <h4 className="font-extrabold text-sm text-[#0F4C75] mt-3">Mr. Reagan</h4>
              <p className="text-xs text-slate-600 font-semibold">Secretary</p>
            </div>

            {/* Mr Shafic */}
            <div className="bg-white rounded-2xl p-4 text-center shadow-xs border border-slate-200/80 flex flex-col items-center col-span-2 sm:col-span-1">
              <img
                src={CLINIC_IMAGES.shafic}
                alt="Mr. Shafic"
                className="w-20 h-20 rounded-full object-cover border-2 border-blue-900 shadow"
              />
              <h4 className="font-extrabold text-sm text-[#0F4C75] mt-3">Mr. Shafic</h4>
              <p className="text-xs text-blue-800 font-semibold">Supervisor</p>
            </div>
          </div>

          <div className="text-center mt-6">
            <button
              onClick={() => onNavigate('team')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0F4C75] hover:text-[#E91E63] transition cursor-pointer"
            >
              <span>View full medical team credentials & direct WhatsApp links</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* QUICK LOCATION & ACTION STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <QuickActionStrip />
      </section>
    </div>
  );
};
