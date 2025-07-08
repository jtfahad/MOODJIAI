interface MoodCardProps {
  id: number;
  label: string;
  sublabel: string;
  gradient: string;
  isSelected: boolean;
  onClick: (id: number) => void;
}

export function MoodCard({ id, label, sublabel, gradient, isSelected, onClick }: MoodCardProps) {
  return (
    <div
      className={`group relative bg-gradient-to-br ${gradient} cursor-pointer duration-300 hover:shadow-2xl transition-all ${
        isSelected ? 'ring-2' : ''
      }`}
      style={{
        width: '138px',
        height: '156px',
        borderRadius: '30px',
        padding: '15px 25px 10px 25px',
        gap: '10px',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '5px',
        // justifyContent: 'space-between',
        // alignItems: 'center'
      }}
      onClick={() => onClick(id)}
    >
      {/* Drop shadow overlay */}
      <div 
        className={`absolute inset-0 rounded-[30px] pointer-events-none bg-gradient-to-br ${gradient}`}
        style={{
          // boxShadow: '14x 14px 14px 14px #00000073 inset'
        }}
      ></div>
      
      {/* Subtle overlay for hover effect */}
      <div className="absolute inset-0 bg-black/5 rounded-[30px] group-hover:bg-black/0 transition-colors"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-between h-full">
        {/* Circle element at top */}
       <div
        className={`rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center bg-gradient-to-br ${gradient} shadow-2xl`}
        style={{
          width: '70px',
          height: '70px',
          marginTop: '8px',
          // Apply an even inner shadow:
          boxShadow: 'inset 0px 0px 10px 2px rgba(0, 0, 0, 0.4)',
        }}
      >
      </div>
        
        {/* Text content at bottom */}
        <div className="text-center" style={{ marginBottom: '8px' }}>
          <h3 className="text-white/80 mb-1" style={{ fontSize: '12px', lineHeight: '20px' }}>
            {label} -
          </h3>
          <p className="text-white/80" style={{ fontSize: '12px', lineHeight: '16px' }}>
            {sublabel}
          </p>
        </div>
      </div>
    </div>
  );
}