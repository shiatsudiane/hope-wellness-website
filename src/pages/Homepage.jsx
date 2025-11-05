import React, { useState } from 'react';
import { Menu, X, Phone, Mail, MapPin, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

import dianeProfile from '../assets/dianeProfile.jpg';
import yvonneProfile from '../assets/yvonneProfile.jpg';
import renaeProfile from '../assets/renaeProfile.jpg';
import michaelProfile from '../assets/michaelProfile.png';

export default function WellnessHomepage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('sending');

    try {
      // Initialize EmailJS with your public key
      emailjs.init('36DtDV629-edRgho8');
      
      // Send email using the form element
      await emailjs.sendForm(
        'service_zovpgec',      // Your service ID
        'template_fb98x6n',     // Your template ID
        e.target                // The form element
      );
      
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus(''), 3000);
    } catch (error) {
      console.error('Email error:', error);
      setFormStatus('error');
      setTimeout(() => setFormStatus(''), 3000);
    }
  };

  const services = [
    {
      name: "Shiatsu",
      description: "Japanese bodywork therapy using finger pressure to balance energy flow and promote healing."
    },
    {
      name: "Craniosacral Therapy",
      description: "Gentle hands-on technique that releases tension in the central nervous system."
    },
    {
      name: "Lymph Drainage",
      description: "Therapeutic massage promoting lymphatic system flow and detoxification."
    },
    {
      name: "Mayan Abdominal Massage",
      description: "Traditional therapy improving organ function and reproductive health."
    },
    {
      name: "Myofascial Release",
      description: "Soft tissue therapy eliminating pain and restoring motion through fascia manipulation."
    },
    {
      name: "Qi Gong",
      description: "Ancient Chinese practice combining movement, meditation, and breathwork for vitality."
    },
    {
      name: "Sound Bowl & Tuning Fork Healing",
      description: "Vibrational therapy using sound frequencies to restore harmony and balance."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="shrink-0">
              <h1 className="text-2xl font-semibold text-teal-700">Hope Wellness Healing Center</h1>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-700 hover:text-teal-600 transition">About</a>
              <a href="#services" className="text-gray-700 hover:text-teal-600 transition">Services</a>
              <a href="#practitioners" className="text-gray-700 hover:text-teal-600 transition">Practitioners</a>
              <a href="#contact" className="text-gray-700 hover:text-teal-600 transition">Contact</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-teal-600"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:bg-teal-50 rounded">About</a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:bg-teal-50 rounded">Services</a>
              <a href="#practitioners" className="block px-3 py-2 text-gray-700 hover:bg-teal-50 rounded">Practitioners</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-teal-50 rounded">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-teal-50 to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Your Journey to Wellness Begins Here
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Experience holistic healing through ancient wisdom and modern therapeutic practices
          </p>
          <a
            href="#contact"
            className="inline-block bg-teal-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-teal-700 transition"
          >
            Book Your Session
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">About Our Practice</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            At Hope Wellness Healing Center, we believe in the body's innate ability to heal itself. Our practice combines time-honored healing traditions with contemporary therapeutic techniques to address the root causes of discomfort and dis-ease.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whether you're seeking relief from chronic pain, stress reduction, or simply looking to maintain optimal health, our compassionate practitioners are here to support your wellness journey with personalized care and attention.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <h4 className="text-xl font-semibold text-teal-700 mb-3">{service.name}</h4>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practitioners Section */}
      <section id="practitioners" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Practitioners</h3>
          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                <img
                    src={dianeProfile}
                    alt="DH"
                    className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Diane Hynes</h4>
                <p className="text-teal-600 font-semibold mb-4">Founder & Wellness Practitioner</p>
                <p className="text-gray-700 leading-relaxed">
                  With over three decades of experience in holistic healing, Diane has dedicated her life to helping others achieve optimal wellness. She is certified in multiple therapeutic modalities and brings a deeply compassionate, intuitive approach to her practice. Diane believes in treating the whole person—mind, body, and spirit—and works closely with each client to create personalized treatment plans that address their unique needs and goals.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                <img
                    src={yvonneProfile}
                    alt="YR"
                    className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Yvonne Reich</h4>
                <p className="text-teal-600 font-semibold mb-4">Reiki Master</p>
                <p className="text-gray-700 leading-relaxed">
                  As a professional member of the International Center for Reiki. My approach is based in compassion
and works with the body's innate ability for self-healing. Each session begins with quantum frequency
clearing and then healing with Reiki and Reiki attuned instruments. I help to uncover and heal
underlying causes of dis-ease in the body, while empowering you with tools for restoring your natural
state of vibrant health and happiness. In addition, I teach people how to heal themselves, family,
friends, and pets with in-person and online Reiki Training &amp; Certification Classes.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                <img
                    src={renaeProfile}
                    alt="RJ"
                    className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Renae Jensen</h4>
                <p className="text-teal-600 font-semibold mb-4">Feng Shui Consultant</p>
                <p className="text-gray-700 leading-relaxed">
                  I have dedicated my life to guiding others to find simple and powerful solutions to their problems.
 I specialize in the science and wisdom of Conscious Design and Feng Shui. I believe in the body-mind-spirit connection. I believe that healthy space creates healthy people.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                <img
                    src={michaelProfile}
                    alt="MP"
                    className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Michael Protzel</h4>
                <p className="text-teal-600 font-semibold mb-4">Uprighting Coach</p>
                <p className="text-gray-700 leading-relaxed">
                    Michael Protzel trained in the Alexander Technique, certified in 1987 as a teacher by both the British and American Societies. He went his own way around the turn of the century, introducing into the public conversation the idea of "weight commitment" and its impact on the quality of our uprighting (i.e., the act of lifting ourselves into verticality as we live our lives).                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-sm mb-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <div className="w-32 h-32 bg-teal-100 rounded-full flex items-center justify-center shrink-0">
                <img
                    src={michaelProfile}
                    alt="MP"
                    className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">Gabe Aiello</h4>
                <p className="text-teal-600 font-semibold mb-4">Astrologer, Meditation Coach</p>
                <p className="text-gray-700 leading-relaxed">
                    With 50+ years of experience with a variety of spiritual traditions and many years as a practicing astrologer, Gabriel is a calm light in our evolving world. He was a founding member of Snow Lion Publications, a publishing effort dedicated to the preservation of Tibetan Culture, and publisher of Kindness, Clarity, and Insight, the first western publication of the most co-authored writer in the world, His Holiness the Dalai Lama. He can be reached at gsaiello@gmail.com. 
                </p>
              </div>
            </div>
          </div>
        </div>
        
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-teal-700 text-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold mb-12 text-center">Get In Touch</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-6">Contact Information</h4>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <Phone className="mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p>(973) 202-9075</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>shiatsudiane@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">Location</p>
                    <p>1298 Hope Bridgeville Rd<br />Hope, NJ 07844</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-1 shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p>By Appointment</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-6">Send Us a Message</h4>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 rounded bg-white text-gray-900"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 rounded bg-white text-gray-900"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded bg-white text-gray-900"
                  required
                />
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full bg-white text-teal-700 px-6 py-3 rounded font-semibold hover:bg-gray-100 transition disabled:opacity-50"
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
                {formStatus === 'success' && (
                  <p className="text-white text-center">Message sent successfully!</p>
                )}
                {formStatus === 'error' && (
                  <p className="text-red-200 text-center">Failed to send message. Please try again.</p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Hope Wellness. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}