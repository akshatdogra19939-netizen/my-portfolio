import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Send, Mail, MapPin, Sparkles } from 'lucide-react';
import ContactButton from './ContactButton';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    service: '3D Modeling',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.email.trim() || !formState.message.trim()) {
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      onClose();
      setFormState({ name: '', email: '', service: '3D Modeling', message: '' });
    }, 2800);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-xl bg-[#121214] border border-[#D7E2EA]/30 rounded-[30px] sm:rounded-[40px] p-6 sm:p-8 md:p-10 shadow-[0_25px_60px_rgba(0,0,0,0.9)] text-[#D7E2EA]"
        >
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close contact modal"
            className="absolute top-6 right-6 p-2 rounded-full border border-white/20 text-[#D7E2EA] hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="py-12 flex flex-col items-center justify-center text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/40">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                Message Sent Successfully!
              </h3>
              <p className="text-sm text-[#D7E2EA]/70 max-w-sm">
                Thank you for reaching out, {formState.name}. Akshat will review your project details and get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <div>
              <div className="mb-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D7E2EA]/60 font-light mb-1">
                  <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                  <span>Start A Collaboration</span>
                </div>
                <h3
                  id="contact-modal-title"
                  className="hero-heading font-black uppercase text-2xl sm:text-3xl tracking-tight"
                >
                  Let&apos;s Build Something Incredible
                </h3>
                <p className="text-xs sm:text-sm text-[#D7E2EA]/70 mt-1 font-light">
                  Have an ambitious 3D, motion, or branding vision? Send over the details.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs uppercase tracking-wider font-medium text-[#D7E2EA]/80 mb-1.5"
                  >
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-[#1A1A1E] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder-white/30 focus:outline-none focus:border-purple-400 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs uppercase tracking-wider font-medium text-[#D7E2EA]/80 mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-[#1A1A1E] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder-white/30 focus:outline-none focus:border-purple-400 transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-service"
                    className="block text-xs uppercase tracking-wider font-medium text-[#D7E2EA]/80 mb-1.5"
                  >
                    Service Interest
                  </label>
                  <select
                    id="contact-service"
                    value={formState.service}
                    onChange={(e) => setFormState({ ...formState, service: e.target.value })}
                    className="w-full bg-[#1A1A1E] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#D7E2EA] focus:outline-none focus:border-purple-400 transition-colors cursor-pointer"
                  >
                    <option value="3D Modeling">01 - 3D Modeling</option>
                    <option value="Rendering">02 - Photorealistic Rendering</option>
                    <option value="Motion Design">03 - Motion Design & Animation</option>
                    <option value="Branding">04 - Branding & Identity</option>
                    <option value="Web Design">05 - Web Design & 3D Web</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs uppercase tracking-wider font-medium text-[#D7E2EA]/80 mb-1.5"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={3}
                    placeholder="Tell me about your timeline, deliverables, and aesthetic goals..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-[#1A1A1E] border border-white/15 rounded-xl px-4 py-3 text-sm text-[#D7E2EA] placeholder-white/30 focus:outline-none focus:border-purple-400 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end">
                  <button
                    type="submit"
                    className="cursor-pointer rounded-full text-white font-medium uppercase tracking-widest transition-all duration-300 hover:scale-105 active:scale-95 px-8 py-3 text-xs sm:text-sm flex items-center gap-2"
                    style={{
                      background: 'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
                      boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1',
                      outline: '2px solid white',
                      outlineOffset: '-3px',
                    }}
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ContactModal;
