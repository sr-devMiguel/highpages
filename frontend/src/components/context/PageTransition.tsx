import { motion } from 'framer-motion'
import React from 'react'

interface PageTransitionProps {
  children: React.ReactNode
  direction?: 'left' | 'right'
}

const PageTransition: React.FC<PageTransitionProps> = ({ children, direction = 'right' }) => {
  const variants = {
    initial: {
      x: direction === 'right' ? 100 : -100,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1
    },
    exit: {
      x: direction === 'right' ? -100 : 100,
      opacity: 0
    }
  }

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{
        type: 'tween',
        ease: 'easeInOut',
        duration: 0.4
      }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition