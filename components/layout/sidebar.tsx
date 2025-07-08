import { Settings, LogOut } from 'lucide-react'; // Menu icon not used, removed
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import TokenSlider from '@/common/TokeSlider';

interface SidebarProps {
  profileName: string;
  profileAvatar?: string;
  currentTokenCount: number; // New prop for the number on the slider (e.g., 32)
  tokensRemaining: string; // Existing prop for the total text (e.g., "300 Questions")
  progressPercentage: number;
  onBuyTokenClick?: () => void;
  onUpgradeClick?: () => void;
  onSettingsClick?: () => void;
  onLogoutClick?: () => void;
}

export function Sidebar({
  profileName,
  profileAvatar,
  currentTokenCount, // Destructure new prop
  tokensRemaining,
  progressPercentage,
  onBuyTokenClick,
  onUpgradeClick,
  onSettingsClick,
  onLogoutClick
}: SidebarProps) {
  // Calculate the left position for the slider thumb
  // We subtract half the thumb's width (approx 32px / 2 = 16px) to center it over the progress
  const thumbLeftPosition = `calc(${progressPercentage}% - 16px)`; // 16px is half of thumb's rough width (32px)

  return (
    // Main sidebar container: flex column and takes full screen height.
    // hidden by default for mobile, but visible for larger screens using 'lg:flex'
    <div className="w-80 flex-col h-screen hidden lg:flex">
      {/* Logo */}
      <div className="flex p-6 pt-10 border-white/10">
        <Image src="/logos/MainLogo.svg" alt="LOGO" width={120} height={40} />
      </div>

      {/* Chat History - This section will now grow and push content down */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="text-center">
          <div className="w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-3">
            <Image src="/icons/ChatHistory.svg" alt="Chat History" width={64} height={64} />
          </div>
          <p className="text-sm text-white/40">No Chat History</p>
        </div>
      </div>

      {/* User Profile - This section will remain at the bottom */}
      <div className="p-6 flex-shrink-0">
        <div className='border-t py-3 px-3 border-white/10'></div>
        <div className="flex flex-col bg-slate-500/10 backdrop-blur-md rounded-lg p-4">
          <div className="flex items-center gap-3 mb-4">
            {/* Profile Avatar with Online Badge */}
            <div className="relative"> {/* Added relative for badge positioning */}
              <Avatar className="w-10 h-10">
                <AvatarImage src={profileAvatar} alt={profileName} />
                <AvatarFallback className="bg-gray-600 text-white">
                  <Image src="/icons/ProfileImage.png" alt="menu" width={35} height={35} />
                  {/* {profileName.split(' ').map(n => n[0]).join('')} */}
                </AvatarFallback>
              </Avatar>
              {/* Online Badge */}
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1C0841]"></div>
            </div>
            <div>
              <Badge variant="secondary" className="bg-green-600 text-black text-xs p-2 w-14 h-6 flex items-center justify-center">
                Free
              </Badge>
              <h3 className="font-semibold text-white">{profileName}</h3>
            </div>
          </div>

          {/* Tokens Slider UI */}
          {/* <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[12px] text-[#F95D2B]">TOKENS</span>
              <span className="text-sm font-semibold text-white">{tokensRemaining}</span> 
            </div>
            <div className="relative w-full bg-white/20 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
              <div
                // Added specific width (w-12), height (h-8), and flex centering for the oval shape
                className="absolute top-1/2 -translate-y-1/2 transform bg-[#F95D2B] text-white/180 text-xs font-semibold rounded-full shadow-md z-10
                           w-8 h-4 flex items-center justify-center cursor-pointer"
                // Adjusted 'left' calculation for the new wider thumb size (half of 48px is 24px)
                style={{ left: `calc(${progressPercentage}% - 24px)` }}
              >
                {currentTokenCount}
              </div>
            </div>
          </div> */}
          <TokenSlider maxTokens={300} initialTokenCount={150} />


          {/* Buttons */}
          <div className="space-y-2">
            <Button
              className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/20"
              onClick={onBuyTokenClick}
            >
              Buy Token
            </Button>
            <Button
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
              onClick={onUpgradeClick}
            >
              Upgrade Now
            </Button>
          </div>
        </div>
        <div className="flex flex-col space-y-2 gap-2 mt-3 items-start w-full">
          <Button
            variant="ghost"
            size="sm"
            className="text-white/60 hover:text-white hover:bg-white/5 pr-[150px]"
            onClick={onSettingsClick}
          >
            <Settings className="w-4 h-4 mr-2" />
            Settings
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-white/60 hover:text-white hover:bg-white/5 pr-[150px]"
            onClick={onLogoutClick}
          >
            <LogOut className="w-4 h-4 mr-2" />
            Log out
          </Button>
        </div>
      </div>
    </div>
  );
}