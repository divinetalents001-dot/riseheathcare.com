/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar, PageId } from './components/Navbar';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { TeamPage } from './pages/TeamPage';
import { GalleryPage } from './pages/GalleryPage';
import { CommunityPage } from './pages/CommunityPage';
import { ContactPage } from './pages/ContactPage';
import { ClinicalCarePage } from './pages/ClinicalCarePage';
import { CLINIC_INFO, CLINIC_IMAGES } from './data/clinicData';
import { Phone, MessageCircle, X, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: '',
    phone: '',
    department: 'General Consultation',
    preferredDate: '',
    notes: '',
  });

  // Sync state with URL hash for intuitive navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as PageId;
      const validPages: PageId[] = ['home', 'about', 'services', 'clinical-care', 'team', 'gallery', 'community', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    const waText = encodeURIComponent(
      `Hello Rise Health Care! I would like to book an appointment:\nName: ${bookingForm.name}\nPhone: ${bookingForm.phone}\nDepartment: ${bookingForm.department}\nPreferred Date: ${bookingForm.preferredDate || 'Earliest available'}\nNotes: ${bookingForm.notes}`
    );
    window.open(`https://wa.me/256705960182?text=${waText}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 antialiased selection:bg-[#E91E63] selection:text-white">
      {/* Sticky Navbar with 60px logo and exact action buttons */}
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />

      {/* Main Content Area */}
      <main className="flex-1">
        {currentPage === 'home' && <HomePage onNavigate={navigateTo} />}
        {currentPage === 'about' && <AboutPage onNavigate={navigateTo} />}
        {currentPage === 'services' && <ServicesPage onNavigate={navigateTo} />}
        {currentPage === 'clinical-care' && <ClinicalCarePage onNavigate={navigateTo} />}
        {currentPage === 'team' && <TeamPage onNavigate={navigateTo} />}
        {currentPage === 'gallery' && <GalleryPage onNavigate={navigateTo} />}
        {currentPage === 'community' && <CommunityPage onNavigate={navigateTo} />}
        {currentPage === 'contact' && <ContactPage onNavigate={navigateTo} />}
      </main>

      {/* Footer with Image 6 logo, location, phone, email, map & copyright 2026 */}
      <Footer onNavigate={navigateTo} />

      {/* Mandatory Floating Action Buttons on Every Page: WhatsApp (green), Call (blue), Email (gray) */}
      <FloatingActions />

      {/* Quick Booking Modal */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => {
                setBookingModalOpen(false);
                setBookingSubmitted(false);
              }}
              className="absolute top-5 right-5 p-2 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800 transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-5">
              <img
                src={CLINIC_IMAGES.logo}
                alt="Rise Healthcare"
                className="h-10 w-auto object-contain"
              />
              <div>
                <h3 className="text-xl font-bold text-[#0F4C75]">Book an Appointment</h3>
                <p className="text-xs text-slate-500">24/7 Clinical Desk • Ndejje Zanta</p>
              </div>
            </div>

            {bookingSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-bold text-emerald-900">Appointment Request Sent!</h4>
                <p className="text-xs text-emerald-700">
                  Your request has opened directly in WhatsApp with our clinic officers. We will confirm your timing immediately.
                </p>
                <button
                  onClick={() => {
                    setBookingModalOpen(false);
                    setBookingSubmitted(false);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#0F4C75] text-white font-bold text-xs"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Full name"
                    value={bookingForm.name}
                    onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0F4C75]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="0705960182"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0F4C75]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Department</label>
                    <select
                      value={bookingForm.department}
                      onChange={(e) => setBookingForm({ ...bookingForm, department: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0F4C75] bg-white"
                    >
                      <option value="General Consultation (Dr. Musobya)">General Consultation</option>
                      <option value="Maternity & Delivery Suite (Dr. Sarah)">Maternity Suite</option>
                      <option value="Laboratory Test (Dr. Sharif)">Laboratory Diagnostics</option>
                      <option value="Inpatient Admission / Bed">Inpatient Ward</option>
                      <option value="Child Immunization & Vaccines">Child Immunization</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Preferred Date / Timing</label>
                  <input
                    type="text"
                    placeholder="e.g. Today at 3:00 PM or Urgent"
                    value={bookingForm.preferredDate}
                    onChange={(e) => setBookingForm({ ...bookingForm, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0F4C75]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Notes / Symptoms</label>
                  <textarea
                    rows={2}
                    placeholder="Briefly describe what you're seeking assistance for..."
                    value={bookingForm.notes}
                    onChange={(e) => setBookingForm({ ...bookingForm, notes: e.target.value })}
                    className="w-full px-3.5 py-2 text-sm rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#0F4C75]"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#25D366] hover:bg-[#1faa53] text-white font-bold text-sm shadow transition flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send Booking via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
