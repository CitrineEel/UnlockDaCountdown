import React, { useState, useEffect, useCallback } from 'react';
import { Heart, Info, ChevronRight, X, User, MessageSquare } from 'lucide-react';

interface Petal {
  id: number;
  left: number;
  duration: number;
  delay: number;
}

interface Contribution {
  id: number;
  name: string;
  message: string;
  timestamp: Date;
}

const FallingPetals: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const createPetal = () => {
      const newPetal: Petal = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        duration: 3 + Math.random() * 4,
        delay: 0,
      };
      
      setPetals(prev => [...prev, newPetal]);
      
      setTimeout(() => {
        setPetals(prev => prev.filter(p => p.id !== newPetal.id));
      }, (newPetal.duration + 1) * 1000);
    };

    const interval = setInterval(createPetal, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map(petal => (
        <div
          key={petal.id}
          className="absolute w-3 h-3 bg-pink-200 rounded-full opacity-70"
          style={{
            left: `${petal.left}%`,
            animation: `fall ${petal.duration}s linear forwards`,
            top: '-20px',
          }}
        />
      ))}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(-20px) rotate(0deg);
            opacity: 0.8;
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

const KitsuneScene: React.FC<{ count: number }> = ({ count }) => {
  const getThought = useCallback((remaining: number) => {
    if (remaining === 0) return "The ancient secrets have been revealed! ✨";
    if (remaining <= 50) return "I can feel the spirits awakening...";
    if (remaining <= 150) return "The shrine's power grows stronger...";
    if (remaining <= 300) return "Something mystical stirs in the wind...";
    if (remaining <= 500) return "What secrets are hidden here?";
    if (remaining <= 750) return "The cherry blossoms whisper of mysteries...";
    return "What ancient wisdom lies beyond?";
  }, []);

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-20">
      <div className="relative flex flex-col items-center">
        {/* Cherry Blossom Tree */}
        <div className="relative mb-6">
          <div className="w-40 h-32 relative">
            {/* Tree trunk */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4 h-20 bg-gradient-to-t from-amber-900 to-amber-700 rounded-t-lg shadow-lg"></div>
            
            {/* Tree branches */}
            <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2">
              <div className="relative w-28 h-16">
                {/* Main branches */}
                <div className="absolute top-3 left-3 w-12 h-1.5 bg-amber-800 rounded transform -rotate-12 shadow-sm"></div>
                <div className="absolute top-3 right-3 w-12 h-1.5 bg-amber-800 rounded transform rotate-12 shadow-sm"></div>
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-8 h-1.5 bg-amber-800 rounded shadow-sm"></div>
                
                {/* Secondary branches */}
                <div className="absolute top-1 left-6 w-6 h-1 bg-amber-700 rounded transform -rotate-6"></div>
                <div className="absolute top-1 right-6 w-6 h-1 bg-amber-700 rounded transform rotate-6"></div>
                
                {/* Cherry blossoms - larger and more detailed */}
                <div className="absolute -top-2 left-2 w-3 h-3 bg-pink-300 rounded-full shadow-sm"></div>
                <div className="absolute top-2 left-5 w-2.5 h-2.5 bg-pink-200 rounded-full shadow-sm"></div>
                <div className="absolute -top-2 right-2 w-3 h-3 bg-pink-300 rounded-full shadow-sm"></div>
                <div className="absolute top-2 right-5 w-2.5 h-2.5 bg-pink-200 rounded-full shadow-sm"></div>
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-pink-300 rounded-full shadow-sm"></div>
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 translate-x-3 w-2.5 h-2.5 bg-pink-200 rounded-full shadow-sm"></div>
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 -translate-x-3 w-2.5 h-2.5 bg-pink-200 rounded-full shadow-sm"></div>
                <div className="absolute top-4 left-4 w-2 h-2 bg-pink-100 rounded-full shadow-sm"></div>
                <div className="absolute top-4 right-4 w-2 h-2 bg-pink-100 rounded-full shadow-sm"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Kitsune Fox - Enhanced */}
        <div className="relative mb-6">
          <div className="w-20 h-20 relative">
            {/* Fox body */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-12 h-10 bg-gradient-to-b from-orange-300 to-orange-500 rounded-full shadow-lg"></div>
            
            {/* Fox head */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-b from-orange-200 to-orange-400 rounded-full shadow-lg"></div>
            
            {/* Fox snout */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-4 h-3 bg-gradient-to-b from-orange-100 to-orange-300 rounded-full"></div>
            
            {/* Fox ears */}
            <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2 -translate-x-3">
              <div className="w-4 h-5 bg-gradient-to-b from-orange-300 to-orange-500 rounded-t-full transform rotate-12 shadow-md"></div>
              <div className="absolute top-1 left-1 w-2 h-3 bg-pink-200 rounded-t-full"></div>
            </div>
            <div className="absolute bottom-15 left-1/2 transform -translate-x-1/2 translate-x-3">
              <div className="w-4 h-5 bg-gradient-to-b from-orange-300 to-orange-500 rounded-t-full transform -rotate-12 shadow-md"></div>
              <div className="absolute top-1 left-1 w-2 h-3 bg-pink-200 rounded-t-full"></div>
            </div>
            
            {/* Fox eyes */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 -translate-x-1.5 w-1.5 h-1.5 bg-black rounded-full"></div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 translate-x-1.5 w-1.5 h-1.5 bg-black rounded-full"></div>
            
            {/* Fox nose */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-black rounded-full"></div>
            
            {/* Fox mouth */}
            <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 w-2 h-0.5 border-b-2 border-black rounded-full"></div>
            
            {/* Fox tail - Enhanced */}
            <div className="absolute bottom-2 right-0 w-8 h-6 bg-gradient-to-r from-orange-300 to-orange-500 rounded-full transform rotate-45 shadow-lg"></div>
            <div className="absolute bottom-1 right-1 w-3 h-3 bg-white rounded-full shadow-sm"></div>
            
            {/* Fox paws */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-x-2 w-2 h-2 bg-orange-400 rounded-full"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-x-2 w-2 h-2 bg-orange-400 rounded-full"></div>
          </div>
        </div>

        {/* Thought bubble */}
        <div className="relative">
          <div className="bg-white/95 backdrop-blur-sm text-gray-800 px-5 py-3 rounded-2xl shadow-xl max-w-xs text-sm font-medium relative border border-white/50">
            {getThought(count)}
            {/* Bubble tail */}
            <div className="absolute -bottom-2 left-10 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white/95"></div>
          </div>
          {/* Small bubbles */}
          <div className="absolute -bottom-4 left-8 w-2 h-2 bg-white/80 rounded-full shadow-sm"></div>
          <div className="absolute -bottom-6 left-6 w-1 h-1 bg-white/60 rounded-full shadow-sm"></div>
        </div>
      </div>
    </div>
  );
};

const JapaneseShrine: React.FC<{ contributionsLeft: number }> = ({ contributionsLeft }) => {
  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-20">
      <div className="bg-gradient-to-b from-red-700 to-red-900 rounded-xl shadow-2xl border-4 border-yellow-600 p-6 min-w-[160px] relative">
        {/* Shrine roof - Multi-layered */}
        <div className="relative mb-4 -mx-2">
          {/* Top roof layer */}
          <div className="absolute -top-2 -left-2 -right-2 h-3 bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-t-xl shadow-lg"></div>
          <div className="absolute -top-4 -left-4 -right-4 h-2 bg-gradient-to-b from-yellow-300 to-yellow-500 rounded-t-xl shadow-xl"></div>
          
          {/* Roof ornaments */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-2 h-4 bg-yellow-400 rounded-t-full shadow-md"></div>
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 -translate-x-6 w-1 h-2 bg-yellow-500 rounded-full"></div>
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 translate-x-6 w-1 h-2 bg-yellow-500 rounded-full"></div>
        </div>
        
        {/* Shrine pillars - Enhanced */}
        <div className="flex justify-between mb-4 px-2">
          <div className="w-2 h-8 bg-gradient-to-b from-yellow-600 to-yellow-800 rounded shadow-md"></div>
          <div className="w-2 h-8 bg-gradient-to-b from-yellow-600 to-yellow-800 rounded shadow-md"></div>
        </div>
        
        {/* Lock symbol */}
        <div className="text-center mb-3">
          <div className="inline-block p-2 bg-yellow-600 rounded-full shadow-lg">
            <div className="w-4 h-4 border-2 border-white rounded-sm relative">
              <div className="absolute top-1 left-1 w-2 h-1 bg-white rounded-full"></div>
            </div>
          </div>
        </div>
        
        {/* Shrine content */}
        <div className="text-center">
          <div className="text-yellow-200 text-sm font-bold mb-2 tracking-wide">神社</div>
          <div className="text-white text-xl font-bold mb-1 drop-shadow-lg">
            {contributionsLeft}
          </div>
          <div className="text-yellow-200 text-xs mb-2">contributions left</div>
          <div className="text-yellow-300 text-xs italic">to unlock</div>
        </div>
        
        {/* Shrine base - Enhanced */}
        <div className="w-full h-3 bg-gradient-to-b from-yellow-700 to-yellow-900 rounded-b-lg mt-4 shadow-inner"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-2 left-2 w-1 h-1 bg-yellow-300 rounded-full opacity-60"></div>
        <div className="absolute top-2 right-2 w-1 h-1 bg-yellow-300 rounded-full opacity-60"></div>
        <div className="absolute bottom-2 left-2 w-1 h-1 bg-yellow-300 rounded-full opacity-60"></div>
        <div className="absolute bottom-2 right-2 w-1 h-1 bg-yellow-300 rounded-full opacity-60"></div>
      </div>
    </div>
  );
};

const CountdownDisplay: React.FC<{ count: number }> = ({ count }) => {
  const progress = ((1000 - count) / 1000) * 100;
  
  return (
    <div className="text-center mb-8">
      <div className="relative mb-6">
        <div className="text-8xl font-bold text-white drop-shadow-2xl mb-4 transition-all duration-500 ease-out transform hover:scale-105">
          {count}
        </div>
        <div className="w-80 h-4 bg-white/20 rounded-full mx-auto backdrop-blur-sm border border-white/30">
          <div 
            className="h-full bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full transition-all duration-700 ease-out shadow-lg"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="text-white/80 text-sm mt-2 font-medium">
          {progress.toFixed(1)}% Complete • {1000 - count} Contributions Made
        </div>
      </div>
    </div>
  );
};

const ContributionForm: React.FC<{ 
  isOpen: boolean; 
  onClose: () => void; 
  onSubmit: (name: string, message: string) => void;
}> = ({ isOpen, onClose, onSubmit }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ name?: string; message?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; message?: string } = {};

    if (name.length < 3) {
      newErrors.name = 'Name must be at least 3 characters';
    } else if (name.length > 25) {
      newErrors.name = 'Name must be 25 characters or less';
    }

    if (message.length > 250) {
      newErrors.message = 'Message must be 250 characters or less';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    onSubmit(name, message);
    setName('');
    setMessage('');
    setErrors({});
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-b from-purple-900 to-indigo-900 rounded-2xl shadow-2xl max-w-md w-full border border-purple-400/30">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">Make a Contribution</h2>
            <button
              onClick={onClose}
              className="text-purple-300 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="flex items-center text-purple-200 text-sm font-medium mb-2">
                <User className="w-4 h-4 mr-2" />
                Your Name ({name.length}/25)
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                placeholder="Enter your name..."
                maxLength={25}
                required
              />
              {errors.name && (
                <p className="text-red-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="flex items-center text-purple-200 text-sm font-medium mb-2">
                <MessageSquare className="w-4 h-4 mr-2" />
                Message (Optional) ({message.length}/250)
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 bg-white/10 border border-purple-400/30 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent resize-none"
                placeholder="Share your thoughts or wishes..."
                rows={3}
                maxLength={250}
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <div className="flex space-x-3 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-4 py-3 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white rounded-lg transition-all transform hover:scale-105"
              >
                Contribute
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

const ContributeButton: React.FC<{ onContribute: () => void; disabled: boolean }> = ({ onContribute, disabled }) => {
  return (
    <button
      onClick={onContribute}
      disabled={disabled}
      className={`
        group relative overflow-hidden px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform
        ${disabled 
          ? 'bg-gray-500/50 text-gray-300 cursor-not-allowed' 
          : 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-400 hover:to-purple-500 hover:scale-105 hover:shadow-2xl active:scale-95'
        }
      `}
    >
      <div className="flex items-center justify-center space-x-2">
        <Heart className={`w-5 h-5 ${disabled ? '' : 'group-hover:animate-pulse'}`} />
        <span>Contribute</span>
      </div>
      {!disabled && (
        <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
      )}
    </button>
  );
};

const CollapsibleSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-w-2xl mx-auto mt-12">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-6 py-4 text-left hover:bg-white/5 transition-colors duration-200"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Info className="w-5 h-5 text-purple-300" />
              <span className="text-lg font-semibold text-white">About & Contribution Info</span>
            </div>
            <ChevronRight 
              className={`w-5 h-5 text-purple-300 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} 
            />
          </div>
        </button>
        
        <div className={`overflow-hidden transition-all duration-500 ease-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-6 pb-6 space-y-4 text-white/90">
            <div>
              <h3 className="font-semibold text-purple-200 mb-2">About Countdown Unlock</h3>
              <p className="text-sm leading-relaxed">
                Welcome to <em className="text-pink-300">Countdown Unlock</em> — a mystical journey guided by our wise kitsune friend beneath the sacred cherry blossom tree.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-purple-200 mb-2">Where do contributions go?</h3>
              <p className="text-sm leading-relaxed">
                All contributions support creative projects, digital art, stories, and the maintenance of this magical shrine.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-purple-200 mb-2">How are contributions processed?</h3>
              <p className="text-sm leading-relaxed">
                <strong>Note:</strong> This is currently a demo interface. To process real payments, you would need to integrate with a payment provider like Stripe, PayPal, or similar services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MilestoneAlert: React.FC<{ milestone: number; onClose: () => void }> = ({ milestone, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const getMilestoneMessage = (remaining: number) => {
    if (remaining === 0) return "🎊 The ancient mystery has been unlocked! 🎊";
    if (remaining === 250) return "🌸 The cherry blossoms dance with joy! 🌸";
    if (remaining === 500) return "🦊 The kitsune's wisdom grows stronger! 🦊";
    if (remaining === 750) return "⛩️ The shrine's power awakens! ⛩️";
    return "✨ A mystical milestone achieved! ✨";
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 animate-in fade-in duration-500">
      <div className="bg-black/50 absolute inset-0" onClick={onClose} />
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-8 rounded-2xl shadow-2xl transform animate-in zoom-in duration-500 max-w-md mx-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">{getMilestoneMessage(milestone)}</h2>
          <p className="text-lg mb-4">{((1000 - milestone) / 1000 * 100).toFixed(0)}% Complete!</p>
          <button 
            onClick={onClose}
            className="px-6 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors"
          >
            Continue the Journey
          </button>
        </div>
      </div>
    </div>
  );
};

function App() {
  const [countdown, setCountdown] = useState(1000);
  const [showMilestone, setShowMilestone] = useState<number | null>(null);
  const [showContributionForm, setShowContributionForm] = useState(false);
  const [contributions, setContributions] = useState<Contribution[]>([]);

  const handleContribute = useCallback(() => {
    setShowContributionForm(true);
  }, []);

  const handleContributionSubmit = useCallback((name: string, message: string) => {
    if (countdown > 0) {
      const newCount = countdown - 1;
      setCountdown(newCount);
      
      const newContribution: Contribution = {
        id: Date.now(),
        name,
        message,
        timestamp: new Date()
      };
      
      setContributions(prev => [newContribution, ...prev]);
      
      // Check for milestones
      if ([750, 500, 250, 0].includes(newCount)) {
        setShowMilestone(newCount);
      }
    }
  }, [countdown]);

  const closeMilestone = useCallback(() => {
    setShowMilestone(null);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400 relative overflow-hidden">
      <FallingPetals />
      
      {/* Left side - Kitsune and Cherry Blossom Tree */}
      <KitsuneScene count={countdown} />
      
      {/* Right side - Japanese Shrine */}
      <JapaneseShrine contributionsLeft={countdown} />
      
      <div className="relative z-10 container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 drop-shadow-2xl">
            Countdown Unlock
          </h1>
          
          <CountdownDisplay count={countdown} />
          
          <div className="mb-8">
            <ContributeButton onContribute={handleContribute} disabled={countdown === 0} />
          </div>
          
          <CollapsibleSection />
        </div>
      </div>
      
      <ContributionForm
        isOpen={showContributionForm}
        onClose={() => setShowContributionForm(false)}
        onSubmit={handleContributionSubmit}
      />
      
      {showMilestone !== null && (
        <MilestoneAlert milestone={showMilestone} onClose={closeMilestone} />
      )}
    </div>
  );
}

export default App;