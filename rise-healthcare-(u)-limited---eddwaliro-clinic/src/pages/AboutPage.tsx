import React from 'react';
import { ShieldCheck, Heart, Users, Award, MapPin, CheckCircle, ArrowRight, Clock, Stethoscope, Building2, Sparkles } from 'lucide-react';
import { CLINIC_INFO, CLINIC_IMAGES } from '../data/clinicData';
import { PageId } from '../components/Navbar';
import { QuickActionStrip } from '../components/QuickActionStrip';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-16 py-8 sm:py-12">
      {/* HERO SECTION: Image 11 team certificates + Image 7 reception */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-lg border border-slate-200/80">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Dual Real Images: Image 11 + Image 7 */}
            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-slate-100 group">
                <img
                  src={CLINIC_IMAGES.certificates}
                  alt="Team Certificates 3 staff certificates clock Rise sign - Licensed Trust"
                  className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-3 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-yellow-300 block">
                    Licensed & Accredited
                  </span>
                  <p className="text-xs font-semibold">Official Clinical Certificates & Signage</p>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-md border-2 border-slate-100 group">
                <img
                  src={CLINIC_IMAGES.reception}
                  alt="Reception 3 staff blue wall - Rise Healthcare"
                  className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent p-3 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300 block">
                    Welcoming Care
                  </span>
                  <p className="text-xs font-semibold">Reception & Triage Admissions Team</p>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-[#0F4C75] border border-sky-200">
                <Heart className="w-3.5 h-3.5 fill-[#E91E63] text-[#E91E63]" />
                About RISE HEALTHCARE (U) Limited
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0F4C75] tracking-tight">
                Our Eddwaliro Story & Mission
              </h1>

              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  <strong className="text-slate-900 font-bold">What is "Eddwaliro"?</strong> In Luganda, <em>Eddwaliro</em> represents more than just a hospital or clinic—it embodies a sanctuary of healing, restorative care, and absolute sanctuary for the sick. At RISE HEALTHCARE (U) Limited, we carry this profound cultural meaning into every medical procedure we undertake.
                </p>

                <p>
                  Founded to serve <strong className="text-slate-900">Ndejje Zanta, Entebbe Road</strong>, and surrounding communities in Wakiso and Kampala, our clinic provides 24-hour dignified medical attention without burdensome bureaucratic hurdles or unreasonable costs.
                </p>

                <p>
                  We are deeply proud of our all-African medical leadership, staffed by experienced Ugandan practitioners who understand local healthcare dynamics, family structures, and community health requirements.
                </p>
              </div>

              {/* Required Action Buttons: [Meet Our Team] [Our Services] */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('team')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#0F4C75] hover:bg-[#0c3c5c] text-white font-bold text-sm shadow transition active:scale-95 cursor-pointer"
                >
                  <Users className="w-4 h-4 text-sky-200" />
                  <span>Meet Our Team</span>
                </button>

                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#E91E63] hover:bg-[#c21350] text-white font-bold text-sm shadow transition active:scale-95 cursor-pointer"
                >
                  <Stethoscope className="w-4 h-4" />
                  <span>Our Services</span>
                </button>

                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-sm transition active:scale-95 cursor-pointer"
                >
                  <MapPin className="w-4 h-4 text-slate-600" />
                  <span>Visit Ndejje Zanta</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS & VALUES: Compassion, Excellence, African Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E91E63]">
            Guided By Our Core Principles
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F4C75]">
            Compassion, Excellence & Patient Safety
          </h2>
          <p className="text-slate-600 text-sm">
            Everything we do is designed to protect life and preserve human dignity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Pillar 1 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200/80 hover:border-sky-300 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-sky-100 flex items-center justify-center text-[#0F4C75] mb-5">
              <Heart className="w-6 h-6 fill-[#0F4C75]" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Uncompromising Compassion</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Every mother in labor, every child with fever, and every elderly elder is treated with genuine warmth, respect, and emotional reassurance. No patient is just a number.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200/80 hover:border-pink-300 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-pink-100 flex items-center justify-center text-[#E91E63] mb-5">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">Clinical Excellence</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              State-of-the-art laboratory testing, optical microscopy, medical grade oxygen in maternity and ward, and strict adherence to Ministry of Health clinical protocols.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-md border border-slate-200/80 hover:border-emerald-300 transition-all">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 mb-5">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">You're Safe With Us!</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Our clinic slogan is our daily operational benchmark. We guarantee transparent diagnosis, sterile wards, unbroken cold-chain vaccine handling, and 24/7 doctor availability.
            </p>
          </div>
        </div>
      </section>

      {/* SERVING NDEJJE ZANTA COMMUNITY SPOTLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-slate-900 to-[#0F4C75] text-white rounded-3xl p-8 sm:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="text-xs uppercase font-bold text-sky-300 tracking-wider flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#E91E63]" />
                Strategic Healthcare Location
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Serving Ndejje Zanta & Entebbe Road Corridor
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Positioned in Ndejje Zanta near Ndejje Health Centre 4, RISE HEALTHCARE provides an essential private medical complement. Whether arriving during normal daytime hours or facing late-night midnight emergencies, our gates and triage doors remain open 24 hours a day, 365 days a year.
              </p>
              <ul className="space-y-2 text-sm text-sky-100">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Near Ndejje Health Centre 4, Off Entebbe Road</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Fast vehicle and boda-boda accessibility</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>Reliable back-up power supply and clinical oxygen systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-md border border-white/20 space-y-4">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-emerald-400" />
                Clinic Working Hours
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between py-1.5 border-b border-white/15">
                  <span className="text-slate-300">Monday - Friday</span>
                  <span className="font-bold text-white">24 HRS OPEN</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/15">
                  <span className="text-slate-300">Saturday</span>
                  <span className="font-bold text-white">24 HRS OPEN</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/15">
                  <span className="text-slate-300">Sunday</span>
                  <span className="font-bold text-white">24 HRS OPEN</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-slate-300">Public Holidays</span>
                  <span className="font-bold text-emerald-300">Always Open 24/7</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={CLINIC_INFO.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full py-2.5 rounded-xl bg-[#E91E63] text-white font-bold text-sm hover:bg-[#c21350] transition shadow"
                >
                  Get Directions to Ndejje Zanta
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MANDATORY BUTTONS STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuickActionStrip />
      </section>
    </div>
  );
};
