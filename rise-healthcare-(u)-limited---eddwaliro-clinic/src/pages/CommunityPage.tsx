import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Heart, ShieldCheck, ThermometerSnowflake, Users, CheckCircle2, School, Gift, Sparkles, Send } from 'lucide-react';
import { CLINIC_INFO, CLINIC_IMAGES } from '../data/clinicData';
import { PageId } from '../components/Navbar';
import { QuickActionStrip } from '../components/QuickActionStrip';

interface CommunityPageProps {
  onNavigate: (page: PageId) => void;
}

export const CommunityPage: React.FC<CommunityPageProps> = ({ onNavigate }) => {
  const [volunteerSubmitted, setVolunteerSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    schoolOrOrg: '',
    message: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVolunteerSubmitted(true);
    // Prepare WhatsApp message
    const waText = encodeURIComponent(
      `Hello Rise Health Care! I want to support / join your Eddwaliro Community Health Outreach.\nName: ${formData.name}\nPhone: ${formData.phone}\nOrg/School: ${formData.schoolOrOrg}\nMessage: ${formData.message}`
    );
    window.open(`https://wa.me/256705960182?text=${waText}`, '_blank');
  };

  return (
    <div className="space-y-16 py-8 sm:py-12">
      {/* HERO SECTION: Image 12 Full Width with Banner Text */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950">
          <div className="relative h-[420px] sm:h-[520px] w-full">
            <img
              src={CLINIC_IMAGES.community}
              alt="RISE HEALTH CARE - EDDWALIRO COMMUNITY HEALTH OUTREACH VACCINATION & WELLNESS"
              className="w-full h-full object-cover object-center"
            />
            {/* Dark gradient for high readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>

            {/* Banner Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-12 text-white max-w-4xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E91E63] text-white text-xs font-extrabold uppercase tracking-widest shadow-lg w-fit">
                <Heart className="w-4 h-4 fill-white" />
                RISE HEALTH CARE - EDDWALIRO COMMUNITY HEALTH OUTREACH
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight drop-shadow-md">
                Eddwaliro — Giving Back to Our African Community
              </h1>

              <p className="text-base sm:text-xl text-slate-100 font-normal leading-relaxed max-w-3xl drop-shadow">
                We serve African children in Ndejje, Wakiso, Entebbe Road.{' '}
                <span className="font-extrabold text-pink-300">You're Safe With Us!</span>
              </p>

              {/* 3 SPECIFIC ACTION BUTTONS REQUIRED:
                  [Support Our Outreach -> WhatsApp]
                  [Join Next Outreach -> Email]
                  [Donate Vaccines -> Call] */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={`https://wa.me/256705960182?text=${encodeURIComponent("Hello Rise Health Care! I would like to Support the Eddwaliro Community Health Outreach.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#1faa53] text-white font-bold text-sm shadow-xl transition active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                  <span>Support Our Outreach &rarr; WhatsApp</span>
                </a>

                <a
                  href={`mailto:${CLINIC_INFO.email}?subject=Join%20Next%20Eddwaliro%20Outreach&body=Hello%20Rise%20Healthcare%20Team,%20I%20would%20like%20to%20volunteer%20or%20partner%20for%20the%20next%20community%20outreach.`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-white/90 hover:bg-white text-slate-900 font-bold text-sm shadow-xl transition active:scale-95"
                >
                  <Mail className="w-5 h-5 text-[#0F4C75]" />
                  <span>Join Next Outreach &rarr; Email</span>
                </a>

                <a
                  href={CLINIC_INFO.telLink}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#0F4C75] hover:bg-[#0c3c5c] text-white font-bold text-sm shadow-xl transition active:scale-95"
                >
                  <Phone className="w-5 h-5 text-sky-300" />
                  <span>Donate Vaccines &rarr; Call</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3 PROGRAMS DETAILED */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
          <span className="text-xs font-bold uppercase tracking-wider text-[#E91E63]">
            Dedicated Humanitarian Initiatives
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0F4C75]">
            Our 3 Community Health Programs
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Taking clinical excellence outside our clinic walls directly to the vulnerable, schools, and children who need it most.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Program 1: School Children Health Care */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 flex flex-col justify-between hover:shadow-xl transition-all group">
            <div>
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={CLINIC_IMAGES.community}
                  alt="School Children Health Care - African school children in uniforms"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0F4C75] text-white text-xs font-bold">
                  Program 1
                </div>
                <div className="absolute bottom-2 left-3 right-3 p-2 bg-black/75 rounded-lg text-white text-xs font-semibold">
                  School Uniforms & Health Screenings
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-[#0F4C75]">
                  <School className="w-5 h-5" />
                  <h3 className="text-xl font-bold">School Children Health Care</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Direct on-campus health outreaches to primary and secondary schools across Ndejje and Wakiso. Our clinicians examine pupils in their uniforms, check eyesight and hearing, provide dental and skin treatment, and offer basic health education.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>On-site school vaccination campaigns</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Deworming and nutritional assessments</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>School teacher first-aid training</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 pt-0">
              <a
                href={`https://wa.me/256705960182?text=${encodeURIComponent("Hello Rise Healthcare, I want to nominate my school for a Community Health Visit.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-sky-50 text-[#0F4C75] font-bold text-xs hover:bg-sky-100 transition"
              >
                <span>Nominate a School &rarr;</span>
              </a>
            </div>
          </div>

          {/* Program 2: Community Give Away */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-pink-100 flex flex-col justify-between hover:shadow-xl transition-all group">
            <div>
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={CLINIC_IMAGES.reception}
                  alt="Community Give Away - Free medical camp"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#E91E63] text-white text-xs font-bold">
                  Program 2
                </div>
                <div className="absolute bottom-2 left-3 right-3 p-2 bg-black/75 rounded-lg text-white text-xs font-semibold">
                  Free Medical Camps & Mama Kits
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-[#E91E63]">
                  <Gift className="w-5 h-5" />
                  <h3 className="text-xl font-bold">Community Give Away</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Organizing free medical camps, blood pressure checks, diabetes screening, and distributing essential maternal delivery kits (Mama Kits) and sanitary supplies to underprivileged mothers and elderly residents in Ndejje Zanta.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-pink-500" />
                    <span>Free Mama Kits for expectant mothers</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-pink-500" />
                    <span>Free hypertension & blood sugar checkups</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-pink-500" />
                    <span>Distribution of soap and hygiene items</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 pt-0">
              <a
                href={`https://wa.me/256705960182?text=${encodeURIComponent("Hello Rise Healthcare, I want to sponsor or donate Mama Kits for the Community Giveaway.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-pink-50 text-[#E91E63] font-bold text-xs hover:bg-pink-100 transition"
              >
                <span>Support Mama Kits &rarr;</span>
              </a>
            </div>
          </div>

          {/* Program 3: Child Immunization Drives (Cold Box 2-8°C) */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-emerald-100 flex flex-col justify-between hover:shadow-xl transition-all group">
            <div>
              <div className="relative h-56 overflow-hidden bg-slate-900">
                <img
                  src={CLINIC_IMAGES.community}
                  alt="Child Immunization Drives - Vaccine box Keep Cold 2-8°C"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold">
                  Program 3
                </div>
                <div className="absolute bottom-2 left-3 right-3 p-2 bg-emerald-950/85 rounded-lg text-white text-xs font-semibold flex items-center justify-between">
                  <span>Vaccine Box: Keep Cold</span>
                  <span className="font-black text-emerald-300">2°C - 8°C</span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center gap-2 text-emerald-700">
                  <ThermometerSnowflake className="w-5 h-5" />
                  <h3 className="text-xl font-bold">Child Immunization Drives</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Vaccine cold-chain preservation is non-negotiable. Our field nurses deploy certified portable cold boxes strictly kept between 2°C and 8°C to vaccinate African children against measles, polio, rotavirus, and tetanus in remote areas.
                </p>
                <ul className="space-y-1.5 text-xs text-slate-700 pt-2 border-t border-slate-100">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Unbroken cold-chain 2°C to 8°C protocols</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Certified WHO/UNEPI approved vaccines</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Infant vaccination passports and registers</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 pt-0">
              <a
                href={CLINIC_INFO.telLink}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-50 text-emerald-800 font-bold text-xs hover:bg-emerald-100 transition"
              >
                <span>Call Vaccine Desk: {CLINIC_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE NOMINATION & OUTREACH SUPPORT FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-[#0F4C75] to-slate-900 text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs uppercase font-bold text-pink-300 tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-pink-400" />
                Community Collaboration
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Partner with Eddwaliro Outreach
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                Are you a local school headteacher, LC1 chairperson, community leader, or donor? Nominate a school or village in Wakiso/Entebbe Road for our upcoming medical screening or vaccination outreach.
              </p>

              <div className="space-y-3 pt-2 text-sm text-sky-100">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">1</div>
                  <span>Submit your school or community request below</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">2</div>
                  <span>Mr. Shafic (Supervisor) coordinates the logistical site assessment</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center font-bold text-white">3</div>
                  <span>Our medical team arrives with cold box vaccines & diagnostic gear</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-6 bg-white rounded-2xl p-6 sm:p-8 text-slate-900 shadow-xl">
              <h3 className="text-xl font-bold text-[#0F4C75] mb-1">Outreach Request & Volunteer Form</h3>
              <p className="text-xs text-slate-500 mb-4">Direct notification sent to Rise Healthcare coordinators.</p>

              {volunteerSubmitted ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-bold text-emerald-900">Thank You for Reaching Out!</h4>
                  <p className="text-xs text-emerald-700">
                    Your details have been forwarded to our outreach desk. A WhatsApp chat has also opened so you can communicate directly with Mr. Shafic.
                  </p>
                  <button
                    onClick={() => setVolunteerSubmitted(false)}
                    className="text-xs text-[#0F4C75] font-bold underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Namubiru"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0F4C75]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number (WhatsApp) *</label>
                      <input
                        type="tel"
                        required
                        placeholder="0758..."
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0F4C75]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 mb-1">School or Organization</label>
                      <input
                        type="text"
                        placeholder="e.g. Ndejje Primary School"
                        value={formData.schoolOrOrg}
                        onChange={(e) => setFormData({ ...formData, schoolOrOrg: e.target.value })}
                        className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0F4C75]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Message / Community Need *</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Describe the number of children or the type of outreach needed..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0F4C75]"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#0F4C75] hover:bg-[#0c3c5c] text-white font-bold text-sm shadow transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-sky-200" />
                    <span>Send Outreach Request &rarr; WhatsApp</span>
                  </button>
                </form>
              )}
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
