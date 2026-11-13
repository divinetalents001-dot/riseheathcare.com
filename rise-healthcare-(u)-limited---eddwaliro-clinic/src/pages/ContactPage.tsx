import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2, Navigation, ExternalLink, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO, CLINIC_IMAGES } from '../data/clinicData';
import { PageId } from '../components/Navbar';
import { QuickActionStrip } from '../components/QuickActionStrip';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    department: 'General Consultation',
    message: '',
  });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);

    // Open user's email client or WhatsApp with pre-filled message
    const subject = encodeURIComponent(`Rise Healthcare Inquiry: ${formData.department} from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nService/Department: ${formData.department}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${CLINIC_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="space-y-16 py-8 sm:py-12">
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-sky-50 text-[#0F4C75] border border-sky-200">
            <MapPin className="w-3.5 h-3.5 text-[#E91E63]" />
            Ndejje Zanta, Entebbe Road, Uganda
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0F4C75] tracking-tight">
            Contact Rise Healthcare (U) Limited
          </h1>

          <p className="text-slate-600 text-base sm:text-lg">
            We are open 24 hours every day. Whether you need immediate medical triage, maternity assistance, lab testing, or directions, our team is always ready to receive you.
          </p>

          {/* REQUIRED BUTTONS ROW: [Call Now] [WhatsApp] [Email Us] [Get Directions] */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href={CLINIC_INFO.telLink}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#0F4C75] hover:bg-[#0c3c5c] text-white font-bold text-sm shadow-md transition active:scale-95"
            >
              <Phone className="w-4 h-4 text-sky-200" />
              <span>Call Now</span>
            </a>

            <a
              href={CLINIC_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm shadow-md transition active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>WhatsApp</span>
            </a>

            <a
              href={CLINIC_INFO.emailLink}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-900 text-white font-bold text-sm shadow-md transition active:scale-95"
            >
              <Mail className="w-4 h-4 text-slate-300" />
              <span>Email Us</span>
            </a>

            <a
              href={CLINIC_INFO.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#E91E63] hover:bg-[#c21350] text-white font-bold text-sm shadow-md transition active:scale-95"
            >
              <MapPin className="w-4 h-4 text-white" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* CONTACT BOX & INTERACTIVE FORM */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* CONTACT BOX: Location, Phone, Email, Hours */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200/90 space-y-6">
            <div className="flex items-center gap-3">
              <img
                src={CLINIC_IMAGES.logo}
                alt="Rise Healthcare Logo"
                className="h-12 w-auto object-contain"
              />
              <div>
                <h3 className="font-extrabold text-[#0F4C75] text-lg">
                  RISE HEALTHCARE <span className="text-[#E91E63]">(U) LTD</span>
                </h3>
                <p className="text-xs text-slate-500 font-semibold">EDDWALIRO — You're Safe With Us!</p>
              </div>
            </div>

            <div className="space-y-4 pt-2 border-t border-slate-100 text-sm">
              {/* Location */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-pink-50 flex items-center justify-center text-[#E91E63] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 block">Clinic Address</span>
                  <p className="font-bold text-slate-900 mt-0.5">
                    {CLINIC_INFO.location}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Near Ndejje Health Centre 4, Off Entebbe Road, Wakiso District.
                  </p>
                  <a
                    href={CLINIC_INFO.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#0F4C75] hover:text-[#E91E63] mt-2 underline"
                  >
                    <span>Open in Google Maps (0.2359, 32.5801)</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-sky-50 flex items-center justify-center text-[#0F4C75] shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-slate-400 block">Phone / Tel</span>
                  <a
                    href={CLINIC_INFO.telLink}
                    className="text-base sm:text-lg font-black text-[#0F4C75] hover:text-[#E91E63] transition block mt-0.5"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                  <p className="text-xs text-slate-500">24HRS Telephone & Emergency Ambulance</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-700 shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="break-all">
                  <span className="text-xs uppercase font-bold text-slate-400 block">Email Address</span>
                  <a
                    href={CLINIC_INFO.emailLink}
                    className="text-xs sm:text-sm font-semibold text-slate-800 hover:text-[#0F4C75] transition block mt-0.5"
                  >
                    {CLINIC_INFO.email}
                  </a>
                  <p className="text-xs text-slate-500">Official administration & inquiries</p>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-sky-50 border border-sky-100">
                <div className="w-10 h-10 rounded-xl bg-[#0F4C75] flex items-center justify-center text-white shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-sky-200" />
                </div>
                <div>
                  <span className="text-xs uppercase font-bold text-[#0F4C75] block">Operating Hours</span>
                  <p className="font-extrabold text-[#0F4C75] text-sm mt-0.5">
                    {CLINIC_INFO.hours}
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Doctors and triage nurses always on duty.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* FORM: Name, Phone, Message -> risehealthcare.overseasourcing@gmail.com */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200/90">
            <div className="space-y-1 mb-6">
              <span className="text-xs uppercase font-bold text-[#E91E63] tracking-wider">
                Send a Direct Message
              </span>
              <h3 className="text-2xl font-extrabold text-[#0F4C75]">
                Get in Touch With Eddwaliro
              </h3>
              <p className="text-xs text-slate-500">
                Messages are routed to <span className="font-mono text-slate-700">{CLINIC_INFO.email}</span>.
              </p>
            </div>

            {formSent ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-bold text-emerald-900">Message Prepared!</h4>
                <p className="text-sm text-emerald-800">
                  Your email client has been opened with your inquiry addressed to {CLINIC_INFO.email}. You can also send this directly via WhatsApp for instant reply:
                </p>
                <div className="pt-2 flex flex-wrap justify-center gap-3">
                  <a
                    href={`https://wa.me/256705960182?text=${encodeURIComponent(`Hello Rise Health Care,\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.department}\nMessage: ${formData.message}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow hover:bg-[#1faa53] transition"
                  >
                    Send on WhatsApp Instead
                  </a>
                  <button
                    onClick={() => setFormSent(false)}
                    className="px-4 py-2.5 rounded-xl bg-slate-200 text-slate-800 font-semibold text-xs hover:bg-slate-300 transition"
                  >
                    Reset Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Bosco / Mary Akello"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0F4C75] transition"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 0705960182"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0F4C75] transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Service or Department Needed
                    </label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0F4C75] transition bg-white"
                    >
                      <option value="General Consultation">General Consultation (Dr. Musobya)</option>
                      <option value="Maternity & Delivery">Maternity & Delivery Suite (Dr. Sarah)</option>
                      <option value="Laboratory Services">Diagnostic Laboratory (Dr. Sharif)</option>
                      <option value="Inpatient & Emergency">Inpatient Ward & Emergency 24HRS</option>
                      <option value="Child Immunization">Child Immunization & Vaccines (2-8°C)</option>
                      <option value="Community Outreach">Community Outreach & Giving Back</option>
                      <option value="Administrative Inquiries">Administration (Mr. Reagan / Mr. Shafic)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Message / Health Inquiry *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe how we can assist you, your appointment request, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0F4C75] transition"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#0F4C75] hover:bg-[#0c3c5c] text-white font-bold text-base shadow-md hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <Send className="w-4 h-4 text-sky-200" />
                    <span>Send Message to {CLINIC_INFO.email}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* EMBED GOOGLE MAP IFRAME: Coords 0.2359, 32.5801 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-slate-200/90 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold text-[#E91E63] tracking-wider block">
                Interactive Clinic Location
              </span>
              <h2 className="text-2xl font-extrabold text-[#0F4C75]">
                Google Maps Navigation (0.2359, 32.5801)
              </h2>
              <p className="text-xs text-slate-500 mt-0.5">
                Ndejje Zanta, Entebbe Road corridor — Near Ndejje Health Centre 4
              </p>
            </div>

            <a
              href={CLINIC_INFO.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#E91E63] text-white font-bold text-sm shadow hover:bg-[#c21350] transition active:scale-95"
            >
              <Navigation className="w-4 h-4" />
              <span>Open in Google Maps App</span>
            </a>
          </div>

          {/* Map iframe */}
          <div className="relative w-full h-[380px] sm:h-[460px] rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
            <iframe
              title="Rise Healthcare Google Maps Location"
              src={CLINIC_INFO.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            ></iframe>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs text-slate-600">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-bold text-slate-800 block">🚗 By Private Car:</span>
              <span>Branch off at Ndejje Zanta stage along Entebbe Road. Near Ndejje Health Centre 4. Ample parking available.</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-bold text-slate-800 block">🏍️ By Boda-Boda / Taxi:</span>
              <span>Ask for "Rise Health Care Eddwaliro Zanta" or Ndejje Health Centre 4 stage.</span>
            </div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="font-bold text-slate-800 block">🚨 Emergency Transport:</span>
              <span>Call {CLINIC_INFO.phone} immediately for triage advice and ambulance coordination.</span>
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
