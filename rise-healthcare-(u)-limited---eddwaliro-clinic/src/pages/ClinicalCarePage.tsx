import React, { useState } from 'react';
import { 
  Stethoscope, 
  Activity, 
  Heart, 
  ShieldCheck, 
  Clock, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  ThermometerSnowflake, 
  Eye, 
  Sparkles, 
  ArrowRight, 
  UserCheck,
  Check
} from 'lucide-react';
import { CLINIC_INFO, CLINIC_IMAGES } from '../data/clinicData';
import { PageId } from '../components/Navbar';
import { QuickActionStrip } from '../components/QuickActionStrip';

interface ClinicalProcedure {
  id: string;
  title: string;
  doctorOrTeam: string;
  doctorRole: string;
  image: string;
  secondaryImage?: string;
  badge: string;
  badgeColor: string;
  summary: string;
  steps: string[];
  equipment: string[];
  patientOutcome: string;
  whatsappMsg: string;
}

const PROCEDURES: ClinicalProcedure[] = [
  {
    id: 'consultation-work',
    title: 'Clinical Consultation, Physical Exam & Patient Diagnosis',
    doctorOrTeam: 'Dr. Musobya Bob & Senior Physician',
    doctorRole: 'Medical Director & Clinical Diagnostician',
    image: CLINIC_IMAGES.patientConsultation,
    secondaryImage: CLINIC_IMAGES.drBob,
    badge: 'Doctor Examining Patient',
    badgeColor: 'bg-[#0F4C75]',
    summary: 'At Dr. Musobya’s consultation desk, patients receive an empathetic, unhurried, and comprehensive physical examination. Every clinical visit begins with listening closely to symptoms in Luganda or English, followed by thorough stethoscope chest examinations, blood pressure checks, and targeted clinical investigations.',
    steps: [
      'Comprehensive medical history & confidential symptoms review',
      'Physical inspection: chest auscultation, abdominal palpation, throat & lymph node assessment',
      'Immediate ordering of targeted confirmatory lab diagnostics',
      'Personalized treatment formulation with patient counseling and follow-up plan',
    ],
    equipment: [
      'Clinical acoustic stethoscope',
      'Digital blood pressure monitor (sphygmomanometer)',
      'Clinical infrared & digital thermometer',
      'Diagnostic ophthalmoscope / otoscope kit',
    ],
    patientOutcome: 'Accurate root-cause diagnosis without guesswork, minimizing unnecessary prescription drugs and accelerating healing.',
    whatsappMsg: 'Hello Dr. Musobya Bob, I would like to schedule a clinical consultation and examination.',
  },
  {
    id: 'lab-microscopy-work',
    title: 'Diagnostic Microscopy & Blood Chemistry In Action',
    doctorOrTeam: 'Dr. Sharif',
    doctorRole: 'Chief Laboratory Technologist',
    image: CLINIC_IMAGES.lab,
    secondaryImage: CLINIC_IMAGES.drSharif,
    badge: 'Microscopy Lab Work',
    badgeColor: 'bg-[#00A8E8]',
    summary: 'Inside our diagnostic laboratory, Dr. Sharif prepares blood slides, performs stains, and operates high-precision optical microscopes. Rather than relying on guesswork, medical prescriptions at Rise Healthcare are backed by verifiable microscopy showing malaria parasite densities, bacterial presence, or hematological changes.',
    steps: [
      'Sterile venipuncture or finger-prick blood sample collection',
      'Preparation of thick and thin Giemsa-stained blood smears',
      'High-magnification oil immersion optical microscopy by Dr. Sharif',
      'Confidential computerized reporting delivered to the attending doctor in 15–30 minutes',
    ],
    equipment: [
      'High-power binocular optical laboratory microscope',
      'Digital centrifuge and clinical hematology counter',
      'Sterile vacuum blood collection tubes & lancets',
      'Standardized Giemsa and Gram staining reagents',
    ],
    patientOutcome: 'Rapid confirmation of infections within 30 minutes, preventing drug resistance and enabling targeted antibiotic or antimalarial therapy.',
    whatsappMsg: 'Hello Dr. Sharif, I would like to book a laboratory blood test / microscopy examination.',
  },
  {
    id: 'maternity-delivery-work',
    title: 'Maternity Labor Monitoring & Safe Delivery Procedures',
    doctorOrTeam: 'Dr. Sarah & Midwifery Team',
    doctorRole: 'Head of Maternity & Obstetric Care',
    image: CLINIC_IMAGES.maternityMotherBaby,
    secondaryImage: CLINIC_IMAGES.maternity,
    badge: 'Newborn & Mother Care',
    badgeColor: 'bg-[#E91E63]',
    summary: 'In our equipped delivery suite, Dr. Sarah and our midwives guide expectant mothers through labor with continuous clinical monitoring. The pink delivery bed is fitted with sterile draw sheets, medical oxygen flowmeters, and neonatal resuscitation apparatus ready for immediate support.',
    steps: [
      'Admission triage: maternal vitals, contractions frequency, and fetal heart rate Doppler auscultation',
      'Gentle labor progression monitoring with continuous dignity and emotional reassurance',
      'Sterile delivery management with active management of the third stage of labor (AMTSL)',
      'Immediate newborn suction, cord clamping, APGAR scoring, thermal wrap, and early breastfeeding initiation',
    ],
    equipment: [
      'Specialized pink obstetric labor & delivery bed',
      'Clinical medical oxygen cylinder with neonatal & adult nasal prongs',
      'Electronic Doppler fetal heart monitor',
      'Infant mucus suction unit and sterile cord ligature kits',
    ],
    patientOutcome: 'Safe, traumatic-free delivery ensuring the survival and vitality of both mother and newborn with round-the-clock obstetric standby.',
    whatsappMsg: 'Hello Dr. Sarah, I would like to discuss maternity admission and delivery suite services.',
  },
  {
    id: 'inpatient-infusion-work',
    title: 'Inpatient Bedside Nursing, IV Infusion & Vital Stabilization',
    doctorOrTeam: 'Clinical Nursing Officers',
    doctorRole: '24/7 Ward & Emergency Team',
    image: CLINIC_IMAGES.nurseBedside,
    secondaryImage: CLINIC_IMAGES.ward,
    badge: 'Bedside IV Drip Care',
    badgeColor: 'bg-emerald-600',
    summary: 'When a patient suffers from severe dehydration, severe malaria, pneumonia, or post-delivery recovery, our inpatient ward provides a restful, sterile environment. Nursing officers monitor intravenous drips, administer timed medications, and record temperature and vitals throughout the night.',
    steps: [
      'Sterile IV cannulation and fluid resuscitation calculation',
      'Administering prescribed intravenous antibiotics, antimalarials, and electrolytes',
      'Hourly monitoring of pulse, blood pressure, temperature, and fluid intake/output',
      'Bedside patient comfort care with continuous access to clinical oxygen',
    ],
    equipment: [
      'Sanitized inpatient ward beds with pink linens',
      'Adjustable IV infusion stands and infusion giving sets',
      'Continuous oxygen supply piping & cannula systems',
      'Night-time emergency nurse call system',
    ],
    patientOutcome: 'Accelerated stabilization for critical patients in a quiet, hygienic, and dignified healing environment.',
    whatsappMsg: 'Hello Rise Healthcare, I need information regarding inpatient admission and ward stay.',
  },
  {
    id: 'triage-reception-work',
    title: 'Patient Triage, Vital Signs Screening & Admissions Care',
    doctorOrTeam: 'Admissions & Triage Team (3 Staff)',
    doctorRole: 'Front Desk & Patient Navigation',
    image: CLINIC_IMAGES.reception,
    badge: 'First Point of Care',
    badgeColor: 'bg-[#0F4C75]',
    summary: 'The moment a patient enters the blue hall, our 3-staff admissions team performs immediate rapid triage. Emergency cases (breathing distress, high fever in infants, active labor) are immediately fast-tracked past the waiting area directly to the doctor or delivery bed.',
    steps: [
      'Warm, respectful patient reception in Luganda and English',
      'Immediate baseline vitals assessment: Blood pressure, pulse, SpO2 (oxygen saturation), body temperature',
      'Triage classification: Emergency vs. Priority vs. Standard consultation',
      'Zero unnecessary paperwork delays; direct escort to the clinical station',
    ],
    equipment: [
      'Digital pulse oximeters (SpO2 & pulse rate)',
      'Digital weight & BMI scale',
      'Non-contact infrared forehead thermometers',
      'Fast digital patient admissions archive',
    ],
    patientOutcome: 'Zero dangerous delays for critical patients, ensuring emergency treatment starts within minutes of arrival.',
    whatsappMsg: 'Hello Rise Healthcare, I am on my way to the clinic and need urgent triage assistance.',
  },
  {
    id: 'field-vaccination-work',
    title: 'Field Pediatric Vaccination & School Health Screenings',
    doctorOrTeam: 'Outreach Medical Officers & Pediatric Team',
    doctorRole: 'Community Health & Cold Chain Team',
    image: CLINIC_IMAGES.pediatricExam,
    secondaryImage: CLINIC_IMAGES.community,
    badge: 'Pediatric Care & Vaccines',
    badgeColor: 'bg-amber-600',
    summary: 'Our healthcare staff take clinical medicine beyond clinic walls. Equipped with certified vaccine cold boxes kept strictly between 2°C and 8°C, our doctors and nurses conduct mass school health checks, child deworming, and immunization campaigns across Wakiso district.',
    steps: [
      'Pre-trip cold-chain verification: ice pack preparation and digital temperature logger check (2–8°C)',
      'Assembly of school children in an organized, child-friendly, non-threatening atmosphere',
      'Gentle clinical screening of skin, eyes, teeth, and general growth markers',
      'Administration of WHO/UNEPI approved vaccines with sterile auto-disable syringes',
    ],
    equipment: [
      'WHO-certified portable vaccine cold storage boxes (2°C – 8°C)',
      'Calibrated temperature indicators and loggers',
      'Auto-disable single-use sterile syringes',
      'Pediatric height rods, mid-upper arm circumference (MUAC) tapes, and deworming tablets',
    ],
    patientOutcome: 'Direct protection against life-threatening childhood diseases for thousands of African school children who lack easy transport to hospitals.',
    whatsappMsg: 'Hello Rise Healthcare, I want to request a school vaccination / health outreach visit.',
  },
];

interface ClinicalCarePageProps {
  onNavigate: (page: PageId) => void;
}

export const ClinicalCarePage: React.FC<ClinicalCarePageProps> = ({ onNavigate }) => {
  const [activeProcedureId, setActiveProcedureId] = useState<string>('all');

  const filteredProcedures = activeProcedureId === 'all'
    ? PROCEDURES
    : PROCEDURES.filter(p => p.id === activeProcedureId);

  return (
    <div className="space-y-16 py-8 sm:py-12">
      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0F4C75] via-[#103b5a] to-[#1B262C] text-white p-6 sm:p-10 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-400/30 text-xs font-bold uppercase tracking-wider">
                <Heart className="w-3.5 h-3.5 fill-[#E91E63] text-[#E91E63]" />
                Real African Doctors In Action
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Doctors at Work — Compassionate Clinical Care
              </h1>

              <p className="text-slate-200 text-base sm:text-lg leading-relaxed max-w-2xl">
                See how our doctors, midwives, and laboratory technologists attend to patients with diligence, precision equipment, and genuine empathy at RISE HEALTHCARE (U) Limited.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={CLINIC_INFO.telLink}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#E91E63] hover:bg-[#c21350] text-white font-bold text-sm shadow-md transition active:scale-95"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>Call Doctor: {CLINIC_INFO.phone}</span>
                </a>

                <a
                  href={CLINIC_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                  <span>WhatsApp Clinical Desk</span>
                </a>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition cursor-pointer"
                >
                  <span>Visit Ndejje Zanta Clinic</span>
                  <ArrowRight className="w-4 h-4 text-sky-200" />
                </button>
              </div>
            </div>

            {/* Quick Stat Pill Right */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 space-y-4">
              <h3 className="text-sm font-bold text-yellow-300 uppercase tracking-wider flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                Clinical Standards You Can Trust
              </h3>

              <div className="space-y-2.5 text-xs text-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                  <span>100% Licensed & Certified Medical Officers</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-pink-400"></div>
                  <span>Sterile single-use syringes and consumables</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-sky-400"></div>
                  <span>Optical microscopy & verified lab reporting</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                  <span>24HRS clinical oxygen & inpatient beds</span>
                </div>
              </div>

              <div className="pt-2 border-t border-white/15 text-[11px] text-slate-300">
                Located near Ndejje Health Centre 4, Off Entebbe Road. Always open day & night.
              </div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mt-8 pt-4 border-t border-slate-200/80">
          <button
            onClick={() => setActiveProcedureId('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
              activeProcedureId === 'all'
                ? 'bg-[#0F4C75] text-white shadow'
                : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            All Clinical Procedures (6)
          </button>
          {PROCEDURES.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveProcedureId(p.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeProcedureId === p.id
                  ? 'bg-[#0F4C75] text-white shadow'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {p.doctorOrTeam}
            </button>
          ))}
        </div>
      </section>

      {/* DETAILED CLINICAL PROCEDURES IN ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filteredProcedures.map((proc, index) => (
          <div
            key={proc.id}
            className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/90 p-6 sm:p-8 lg:p-10 hover:shadow-xl transition-all"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Photo & Badges (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-md group bg-slate-900">
                  <img
                    src={proc.image}
                    alt={proc.title}
                    className="w-full h-72 sm:h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-white text-xs font-bold shadow bg-[#0F4C75]">
                    {proc.badge}
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 p-3 bg-slate-950/85 backdrop-blur-sm rounded-xl text-white">
                    <p className="text-xs font-bold text-sky-300">{proc.doctorOrTeam}</p>
                    <p className="text-[11px] text-slate-200">{proc.doctorRole}</p>
                  </div>
                </div>

                {/* Secondary Image if available */}
                {proc.secondaryImage && (
                  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200">
                    <img
                      src={proc.secondaryImage}
                      alt="Supporting Clinical Visual"
                      className="w-16 h-16 rounded-xl object-cover shadow"
                    />
                    <div className="text-xs">
                      <span className="font-bold text-[#0F4C75] block">Specialist On Duty</span>
                      <span className="text-slate-600">Working directly in this unit with certified equipment</span>
                    </div>
                  </div>
                )}

                {/* Patient Outcome Box */}
                <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80">
                  <span className="text-[10px] uppercase font-extrabold tracking-wider text-emerald-800 block mb-1">
                    ✓ Clinical Patient Benefit
                  </span>
                  <p className="text-xs text-emerald-950 font-medium leading-relaxed">
                    {proc.patientOutcome}
                  </p>
                </div>
              </div>

              {/* Right Procedure Workflow Details (7 cols) */}
              <div className="lg:col-span-7 space-y-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E91E63]">
                      Clinical Procedure #{index + 1}
                    </span>
                    <span className="text-slate-300">•</span>
                    <span className="text-xs font-semibold text-slate-500">{proc.doctorRole}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F4C75] mt-1">
                    {proc.title}
                  </h2>
                </div>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {proc.summary}
                </p>

                {/* Step-by-Step Procedure */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    How We Care For You During This Procedure:
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {proc.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                        <span className="w-5 h-5 rounded-full bg-[#0F4C75] text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="leading-relaxed font-medium">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Equipment Used */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                    <Activity className="w-4 h-4 text-[#00A8E8]" />
                    Sterile & Certified Equipment Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {proc.equipment.map((eq, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-sky-50 text-[#0F4C75] text-xs font-medium border border-sky-100"
                      >
                        <Check className="w-3 h-3 text-[#00A8E8]" />
                        {eq}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Row */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-3">
                  <a
                    href={`https://wa.me/256705960182?text=${encodeURIComponent(proc.whatsappMsg)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow transition active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book Procedure &rarr; WhatsApp</span>
                  </a>

                  <a
                    href={CLINIC_INFO.telLink}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0F4C75] hover:bg-[#0c3c5c] text-white font-bold text-sm shadow transition active:scale-95"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-200" />
                    <span>Call {CLINIC_INFO.phone}</span>
                  </a>

                  <button
                    onClick={() => onNavigate('contact')}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition cursor-pointer"
                  >
                    <span>Visit In Person</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* PATIENT SAFETY PROMISE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2 p-4">
              <div className="w-12 h-12 rounded-2xl bg-sky-900/60 text-sky-300 flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-6 h-6 text-emerald-400" />
              </div>
              <h4 className="font-bold text-base text-white">Sterile Protocol</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                All needles, gloves, IV sets, and delivery packs are 100% single-use and autoclaved. Zero reuse, zero compromise.
              </p>
            </div>

            <div className="space-y-2 p-4">
              <div className="w-12 h-12 rounded-2xl bg-pink-900/60 text-pink-300 flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-[#E91E63]" />
              </div>
              <h4 className="font-bold text-base text-white">Compassionate Language</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our doctors explain diagnoses, dosages, and home care clearly in Luganda or English, ensuring you and your family understand every step.
              </p>
            </div>

            <div className="space-y-2 p-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-900/60 text-emerald-300 flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-yellow-300" />
              </div>
              <h4 className="font-bold text-base text-white">24/7 Continuous Standby</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Day, night, Sundays, and public holidays—clinical doctors, lab tests, and maternity delivery assistance are always functional.
              </p>
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
