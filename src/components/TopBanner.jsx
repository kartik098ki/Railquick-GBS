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
        backgroundColor: 'var(--accent-orange)',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: '700',
        fontSize: '0.875rem',
        letterSpacing: '0.5px',
        gap: '0.5rem',
        position: 'sticky',
        top: 0,
        zIndex: 50
      }}
    >
      <Zap size={16} fill="#fff" />
      <span>5 MIN DELIVERY ON ONGOING TRAIN</span>
    </motion.div>
  );
};

export default TopBanner;
