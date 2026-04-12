'use client';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919890959990?text=Hi%20Practical%20EduSkills!%20I%20want%20to%20know%20more%20about%20your%20courses."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: 'spring' }}
      whileHover={{ scale: 1.15 }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp size={28} color="white" />
    </motion.a>
  );
}
