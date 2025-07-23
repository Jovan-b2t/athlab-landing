'use client'

export default function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Main blue-oriented animated gradient background */}
      <div className="absolute inset-0 gradient-animate opacity-85" />
      
      {/* Deep navy gradient overlay */}
      <div className="absolute inset-0 navy-gradient-deep opacity-70" />
      
      {/* Subtle radial gradient overlays - minimal mint accents */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-navy-800/30 blur-3xl animate-float" />
        <div className="absolute top-40 right-20 w-64 h-64 rounded-full bg-navy-700/20 blur-2xl animate-float-delayed" />
        <div className="absolute bottom-20 left-1/4 w-80 h-80 rounded-full bg-cyber-500/8 blur-3xl animate-glow-pulse" />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 rounded-full bg-navy-600/25 blur-3xl animate-float" />
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="h-full w-full bg-grid-pattern bg-repeat" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(155, 255, 155, 0.1) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(155, 255, 155, 0.1) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }} 
        />
      </div>
      
             {/* Minimal floating particles - mostly navy with rare mint accents */}
       <div className="absolute inset-0">
         {[...Array(20)].map((_, i) => {
           const isMint = Math.random() > 0.85; // Only 15% chance of mint
           return (
             <div
               key={i}
               className={`absolute w-1 h-1 rounded-full animate-float ${
                 isMint 
                   ? 'bg-cyber-500 opacity-50' 
                   : 'bg-gray-400 opacity-30'
               }`}
               style={{
                 left: `${Math.random() * 100}%`,
                 top: `${Math.random() * 100}%`,
                 animationDelay: `${Math.random() * 4}s`,
                 animationDuration: `${3 + Math.random() * 3}s`,
                 boxShadow: isMint 
                   ? '0 0 4px hsl(155, 85%, 55%, 0.3)' 
                   : '0 0 2px hsl(0, 0%, 60%, 0.2)'
               }}
             />
           );
         })}
      </div>
    </div>
  )
} 