/* eslint-disable no-unused-vars */
import React from 'react';
import { Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const TopBanner = () => {
  return (
    <motion.div 
      initial={{ y: -35 }}
      animate={{ y: 0 }}
      viewport={{ once: true }}
      style={{
        height: 'var(--banner-height)',
        backgroundColor: '#0f172a', /* Very dark slate */
        color: '#f8fafc',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '600',
        fontSize: '0.75rem',
        letterSpacing: '0.5px',
        gap: '0.5rem',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}
    >
      <Zap size={14} fill="#f59e0b" color="#f59e0b" />
      <span>FLASH DELIVERY • 5 MIN TO YOUR COACH</span>
    </motion.div>
  );
};

export default TopBanner;
