import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { FaWhatsapp, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

export const metadata = {
  title: 'Contact Us | Practical EduSkills',
  description: 'Get in touch with Practical EduSkills. Call us, visit our centre, or fill the inquiry form for free counselling.',
};

export default function ContactPage() {
  return (
    <>
      <section className="navy-gradient pt-32 pb-14 md:pt-40 md:pb-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-serif text-white text-3xl md:text-5xl font-bold mt-2 mb-4">Get in Touch</h1>
          <p className="text-white/70 text-base">Our team is ready to answer all your questions about courses and admissions.</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div>
            <h2 className="font-serif text-navy text-2xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-4">
              {[
                { icon: <MapPin className="text-gold" size={20} />, label: 'Address', val: '3rd Floor, Butte Patil Complex, Warje Malwadi Rd, Erandwane, Pune – 411052' },
                { icon: <Phone className="text-gold" size={20} />, label: 'Phone', val: '+91-98909-59990', href: 'tel:+919890959990' },
                { icon: <Mail className="text-gold" size={20} />, label: 'Email', val: 'info@practicaleduskills.com', href: 'mailto:info@practicaleduskills.com' },
                { icon: <Clock className="text-gold" size={20} />, label: 'Office Hours', val: 'Monday–Saturday: 9:00 AM – 7:00 PM' },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <div className="text-text-muted text-xs font-medium mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-navy text-sm font-medium hover:text-gold transition-colors">{item.val}</a>
                    ) : (
                      <p className="text-navy text-sm font-medium">{item.val}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-serif text-navy font-bold text-lg mb-3">Follow Us</h3>
            <div className="flex gap-3">
              {[
                { href: 'https://www.instagram.com/practical_eduskills/', icon: <FaInstagram size={18} />, label: 'Instagram' },
                { href: 'https://www.youtube.com/@practicaleduskills2338', icon: <FaYoutube size={18} />, label: 'YouTube' },
                { href: 'https://www.linkedin.com/company/practical-eduskills-pvt-ltd', icon: <FaLinkedin size={18} />, label: 'LinkedIn' },
                { href: 'https://wa.me/919890959990', icon: <FaWhatsapp size={18} />, label: 'WhatsApp' },
              ].map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-navy text-white flex items-center justify-center hover:bg-gold hover:text-navy transition-all" aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden h-48 bg-bg-light border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.8!2d73.8!3d18.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMwJzAwLjAiTiA3M8KwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="PES Location"
            />
          </div>
        </div>

        {/* Quick Inquiry */}
        <div className="bg-bg-light rounded-2xl p-6 md:p-8 border border-gray-100">
          <h2 className="font-serif text-navy text-2xl font-bold mb-1">Quick Inquiry</h2>
          <p className="text-text-muted text-sm mb-6">Get a callback within 24 hours</p>
          <InquiryFormInline />
        </div>
      </div>
    </>
  );
}

function InquiryFormInline() {
  return (
    <div className="space-y-4">
      <p className="text-text-muted text-sm">
        Please use the inquiry form below or call us directly at{' '}
        <a href="tel:+919890959990" className="text-navy font-semibold hover:text-gold">+91-98909-59990</a>
      </p>
      <a href="tel:+919890959990"
        className="block w-full py-3.5 bg-navy text-white font-bold rounded-xl text-center hover:bg-navy/80 transition-all">
        📞 Call Us Now
      </a>
      <a href="https://wa.me/919890959990?text=Hi!%20I%20want%20to%20enquire%20about%20courses%20at%20Practical%20EduSkills."
        target="_blank" rel="noopener noreferrer"
        className="block w-full py-3.5 bg-green-500 text-white font-bold rounded-xl text-center hover:bg-green-600 transition-all">
        💬 WhatsApp Us
      </a>
      <a href="/admissions"
        className="block w-full py-3.5 bg-gold text-navy font-bold rounded-xl text-center hover:bg-gold-light transition-all pulse-gold">
        📝 Fill Admission Form
      </a>
    </div>
  );
}
