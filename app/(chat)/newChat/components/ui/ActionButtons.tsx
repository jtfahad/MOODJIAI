import React from 'react';
import Image from 'next/image';

const actions = [
  { icon: '/icons/Copy.svg', alt: 'Copy' },
  { icon: '/icons/ThumbsUp.svg', alt: 'Thumbs Up' },
  { icon: '/icons/ThumbsDown.svg', alt: 'Thumbs Down' },
  { icon: '/icons/Repeat.svg', alt: 'Repeat' }
];

const ActionButtons: React.FC = () => {
  return (
    <div className="flex justify-start items-center gap-2">
      {actions.map((action, index) => (
        <button
          key={index}
          className="cursor-pointer hover:opacity-70 transition-opacity p-1 rounded-full hover:bg-white/10"
          aria-label={action.alt}
        >
          <Image
            src={action.icon}
            alt={action.alt}
            width={24}
            height={24}
            className="filter invert brightness-0"
          />
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;

// 'use client';

// import React from 'react';
// import { motion, useAnimation, AnimatePresence, Variants, Easing, easeOut, backOut } from 'framer-motion';
// import { Copy, ThumbsUp, RotateCcw, Share2 } from 'lucide-react';

// const ActionButtons: React.FC = () => {
//   const buttons = [
//     { icon: Copy, label: 'Copy', action: () => console.log('Copy clicked') },
//     { icon: ThumbsUp, label: 'Like', action: () => console.log('Like clicked') },
//     { icon: RotateCcw, label: 'Regenerate', action: () => console.log('Regenerate clicked') },
//     { icon: Share2, label: 'Share', action: () => console.log('Share clicked') },
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.2,
//       },
//     },
//   };

//   const buttonVariants = {
//     hidden: { 
//       opacity: 0, 
//       y: 20, 
//       scale: 0.8,
//     },
//     visible: { 
//       opacity: 1, 
//       y: 0, 
//       scale: 1,
//       transition: {
//         duration: 0.6,
//         ease: backOut,
//       },
//     },
//     hover: { 
//       scale: 1.1,
//       y: -2,
//       transition: { 
//         duration: 0.2,
//         ease: easeOut,
//       },
//     },
//     tap: { 
//       scale: 0.95,
//       transition: { 
//         duration: 0.1,
//       },
//     },
//   };

//   return (
//     <motion.div
//       className="flex gap-2 flex-wrap"
//       variants={containerVariants}
//       initial="hidden"
//       animate="visible"
//     >
//       {buttons.map((button, index) => (
//       <div key={index} className="relative">
//           <motion.button
//           key={button.label}
//           className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium backdrop-blur-sm hover:bg-white/20 hover:border-white/30 transition-all duration-200 group"
//           variants={buttonVariants}
//           whileHover="hover"
//           whileTap="tap"
//           onClick={button.action}
//         >
//           <motion.div
//             className="flex items-center gap-2"
//             whileHover={{ x: 2 }}
//             transition={{ duration: 0.2 }}
//           >
//             <button.icon 
//               size={16} 
//               className="group-hover:text-blue-300 transition-colors duration-200" 
//             />
//             <span className="group-hover:text-blue-100 transition-colors duration-200">
//               {button.label}
//             </span>
//           </motion.div>
          
//           {/* Hover Glow Effect */}
//           <motion.div
//             className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//             initial={{ scale: 0.8 }}
//             whileHover={{ scale: 1.05 }}
//             transition={{ duration: 0.3 }}
//           />
//         </motion.button>
//       </div>
//       ))}
//     </motion.div>
//   );
// };

// export default ActionButtons;

