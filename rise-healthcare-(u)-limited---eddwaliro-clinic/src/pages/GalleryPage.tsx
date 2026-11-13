import React, { useState } from 'react';
import { MapPin, X, ZoomIn, ChevronLeft, ChevronRight, Phone, MessageCircle, Eye, ShieldCheck, Heart } from 'lucide-react';
import { CLINIC_INFO, CLINIC_IMAGES } from '../data/clinicData';
import { PageId } from '../components/Navbar';
import { QuickActionStrip } from '../components/QuickActionStrip';

interface GalleryItem {
  id: string;
  image: string;
  title: string;
  caption: string;
  category: string;
  details: string;
}

const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'g-reception',
    image: CLINIC_IMAGES.reception,
    title: 'Clinic Reception & Patient Admissions',
    caption: '3-staff front desk greeting patients in our blue branded triage hall',
    category: 'Admissions & Reception',
    details: 'Image 7: Our calm, clean reception where patients and mothers are welcomed with dignity, registered, and triaged promptly.',
  },
  {
    id: 'g-lab',
    image: CLINIC_IMAGES.lab,
    title: 'Diagnostic Laboratory & Microscopy',
    caption: 'Dr. Sharif operating the precision optical microscope for rapid diagnostics',
    category: 'Laboratory',
    details: 'Image 8: Precision clinical microscope providing 15-minute malaria BS, full blood counts, and infectious disease testing.',
  },
  {
    id: 'g-ward',
    image: CLINIC_IMAGES.ward,
    title: 'Inpatient Beds Ward & 24HRS Recovery',
    caption: 'Pink bed linens, IV infusion stand, and hygienic admission ward',
    category: 'Inpatient Ward',
    details: 'Image 9: Comfortable, sanitized inpatient ward equipped for overnight medical stabilization, fluid therapy, and continuous nursing care.',
  },
  {
    id: 'g-maternity',
    image: CLINIC_IMAGES.maternity,
    title: 'Maternity Delivery Suite with Oxygen',
    caption: 'Dedicated delivery bed with clinical medical oxygen cylinder and sterile supplies',
    category: 'Maternity Wing',
    details: 'Image 10: Fully equipped labor and delivery room featuring specialized pink delivery bed, medical oxygen, and neonatal resuscitation standby.',
  },
  {
    id: 'g-certificates',
    image: CLINIC_IMAGES.certificates,
    title: 'Licensed Healthcare Facility & Medical Credentials',
    caption: 'Team certificates, medical licenses, and official clinical credentials displayed on the wall',
    category: 'Licensed Trust',
    details: 'Image 11: Official medical practitioner credentials, health department licenses, and compliance certificates for verified community trust.',
  },
  {
    id: 'g-community',
    image: CLINIC_IMAGES.community,
    title: 'Eddwaliro Community Health Outreach',
    caption: 'African school children in uniforms, vaccine cold box (2-8°C), and outreach banner',
    category: 'Community Outreach',
    details: 'Image 12: Bringing vital vaccines and medical checks directly to African school students and local communities along Entebbe Road.',
  },
  {
    id: 'g-drbob',
    image: CLINIC_IMAGES.drBob,
    title: 'Consultation Office — Dr. Musobya Bob',
    caption: 'Medical Director at his clinical consultation desk reviewing diagnosis',
    category: 'Clinical Leadership',
    details: 'Image 1: Dr. Musobya Bob providing clinical oversight and compassionate patient care in his consultation suite.',
  },
  {
    id: 'g-drsarah',
    image: CLINIC_IMAGES.drSarah,
    title: 'Maternity Care — Dr. Sarah',
    caption: 'Dr. Sarah in clinical scrubs dedicated to maternal wellness and delivery care',
    category: 'Maternity Wing',
    details: 'Image 2: Dr. Sarah ensuring mother and infant safety during antenatal and delivery stages.',
  },
  {
    id: 'g-sharif',
    image: CLINIC_IMAGES.drSharif,
    title: 'Diagnostic Records — Dr. Sharif',
    caption: 'Dr. Sharif managing computerized laboratory diagnostic records',
    category: 'Laboratory',
    details: 'Image 3: Modern diagnostic systems ensuring rapid, confidential, and error-free test documentation.',
  },
  {
    id: 'g-reagan',
    image: CLINIC_IMAGES.reagan,
    title: 'Administrative Desk — Mr. Reagan',
    caption: 'Administrative Secretary managing patient admissions and clinic coordination',
    category: 'Administration',
    details: 'Image 4: Seamless patient coordination, admissions, and appointment scheduling.',
  },
  {
    id: 'g-shafic',
    image: CLINIC_IMAGES.shafic,
    title: 'Facility & Cold Chain — Mr. Shafic',
    caption: 'Operations Supervisor managing 24/7 readiness and vaccine cold storage',
    category: 'Operations',
    details: 'Image 5: Ensuring safety, uninterrupted medical oxygen, and cold-box logistics for community vaccination.',
  },
  {
    id: 'g-patient-exam',
    image: CLINIC_IMAGES.patientConsultation,
    title: 'Doctor Examining Patient with Stethoscope',
    caption: 'Thorough chest auscultation and clinical diagnosis in outpatient office',
    category: 'Patient Care Live',
    details: 'Auscultation of heart and breath sounds during clinical evaluation in our consultation room.',
  },
  {
    id: 'g-nurse-bedside',
    image: CLINIC_IMAGES.nurseBedside,
    title: 'Bedside IV Infusion & Pulse Monitoring',
    caption: 'Nurse gently adjusting IV fluid drip and monitoring vitals on inpatient bed',
    category: 'Inpatient Ward',
    details: 'Sanitized recovery ward care with pink linens, fluid resuscitation, and continuous patient observation.',
  },
  {
    id: 'g-mother-baby',
    image: CLINIC_IMAGES.maternityMotherBaby,
    title: 'Newborn Baby Examination & Maternal Recovery',
    caption: 'Doctor examining newborn baby in mother’s embrace with clinical oxygen ready',
    category: 'Maternity Wing',
    details: 'Post-delivery neonatal APGAR assessment, warm thermal swaddling, and mother reassurance in our maternity suite.',
  },
  {
    id: 'g-pediatric-exam',
    image: CLINIC_IMAGES.pediatricExam,
    title: 'Gentle Pediatric Child Examination',
    caption: 'Clinician gently examining a young child accompanied by mother in clinic office',
    category: 'Patient Care Live',
    details: 'Compassionate pediatric growth check, fever evaluation, and friendly healthcare for African children.',
  },
];

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: 'All Clinic Photos (16)' },
    { id: 'Patient Care Live', label: 'Patients Being Worked Upon' },
    { id: 'Inpatient Ward', label: 'Wards & Beds' },
    { id: 'Maternity Wing', label: 'Maternity' },
    { id: 'Laboratory', label: 'Laboratory' },
    { id: 'Community Outreach', label: 'Outreach & Vaccines' },
    { id: 'Licensed Trust', label: 'Certificates' },
  ];

  const filteredItems = activeFilter === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === activeFilter);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <div className="space-y-16 py-8 sm:py-12">
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-[#0F4C75] border border-sky-200">
              <Eye className="w-3.5 h-3.5 text-[#00A8E8]" />
              Authentic African Healthcare Facility
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F4C75] tracking-tight">
              Inside Rise Health Care Eddwaliro — Real Clinic
            </h1>

            <p className="text-slate-600 text-sm sm:text-base">
              Explore our real facility in Ndejje Zanta: sanitized inpatient beds, modern laboratory microscopes, maternity delivery suites with clinical oxygen, and licensed trust credentials.
            </p>
          </div>

          {/* REQUIRED BUTTON: [Visit Our Clinic 0.2359,32.5801] */}
          <div>
            <a
              href={CLINIC_INFO.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#0F4C75] hover:bg-[#0c3c5c] text-white font-bold text-sm shadow-md hover:shadow-lg transition active:scale-95 whitespace-nowrap"
            >
              <MapPin className="w-4 h-4 text-pink-400" />
              <span>Visit Our Clinic (0.2359, 32.5801)</span>
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mt-8 pt-4 border-t border-slate-200/80">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-[#0F4C75] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* MASONRY GALLERY GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-200/80 flex flex-col cursor-pointer"
            >
              <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20">
                  {item.category}
                </div>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ZoomIn className="w-4 h-4" />
                </div>

                <div className="absolute bottom-3 inset-x-3 text-white">
                  <h3 className="text-base font-bold text-white drop-shadow-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white flex items-center justify-between text-xs text-slate-500 border-t border-slate-100">
                <span className="font-medium text-[#0F4C75]">Click to expand full view</span>
                <span className="text-[#E91E63] font-bold">&rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
          <div className="relative max-w-5xl w-full bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col max-h-[92vh]">
            {/* Top Bar */}
            <div className="p-4 bg-slate-950/80 flex items-center justify-between border-b border-slate-800 text-white">
              <div>
                <span className="text-xs font-bold text-[#E91E63] uppercase tracking-wider block">
                  {filteredItems[lightboxIndex].category}
                </span>
                <h3 className="text-lg font-bold text-white">
                  {filteredItems[lightboxIndex].title}
                </h3>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-white transition cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Main Image Area with Prev/Next Controls */}
            <div className="relative flex-1 bg-black flex items-center justify-center min-h-[300px] overflow-hidden">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[60vh] w-auto max-w-full object-contain mx-auto"
              />

              {/* Prev Button */}
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition border border-white/20"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white transition border border-white/20"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Bottom Caption & Action Row */}
            <div className="p-4 sm:p-6 bg-slate-950/90 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-white">
              <div className="space-y-1 max-w-2xl">
                <p className="text-sm font-medium text-slate-200">
                  {filteredItems[lightboxIndex].caption}
                </p>
                <p className="text-xs text-slate-400">
                  {filteredItems[lightboxIndex].details}
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <a
                  href={CLINIC_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#0F4C75] text-white text-xs font-bold flex items-center gap-1.5 hover:bg-[#0c3c5c] transition"
                >
                  <MapPin className="w-3.5 h-3.5 text-pink-400" />
                  <span>Visit (0.2359, 32.5801)</span>
                </a>
                <a
                  href={CLINIC_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-[#25D366] text-white text-xs font-bold flex items-center gap-1.5 hover:bg-[#20ba59] transition"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MANDATORY ACTION STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuickActionStrip />
      </section>
    </div>
  );
};
