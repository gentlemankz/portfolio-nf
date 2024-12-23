//создание градиента: фокус ставим на purple, black и фигуру
export default function GradientBackground({ children }) {
    return (
      <div className="relative min-h-screen w-full overflow-hidden">
        <div className="absolute inset-0 bg-black" />
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                ellipse at 50% 50%,
                rgba(139, 92, 246, 0.3) 0%,
                rgba(91, 33, 182, 0.2) 40%,
                transparent 70%
              )
            `
          }}
        />
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '64px 64px',
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: `
              linear-gradient(
                90deg, 
                rgba(0, 0, 0, 0.9) 0%, 
                rgba(0, 0, 0, 0) 20%, 
                rgba(0, 0, 0, 0) 80%, 
                rgba(0, 0, 0, 0.9) 100%
              )
            `
          }}
        />
        <div className="relative z-10 container mx-auto px-4 py-12">
          {children}
        </div>
      </div>
    )
  }
  
  