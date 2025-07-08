import { Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import TokenSlider from '@/common/TokeSlider'; // Assuming this is your new interactive slider component

interface SidebarProps {
  profileName: string;
  profileAvatar?: string;
  currentTokenCount: number; // New prop for the number on the slider (e.g., 32)
  tokensRemaining: string; // Existing prop for the total text (e.g., "300 Questions")
  progressPercentage: number; // This might be used for initial state of TokenSlider
  onBuyTokenClick?: () => void;
  onUpgradeClick?: () => void;
  onSettingsClick?: () => void;
  onLogoutClick?: () => void;
}

export function Sidebar({
  profileName,
  profileAvatar,
  currentTokenCount, // Used for TokenSlider initial value
  tokensRemaining, // Can be passed to TokenSlider or displayed as is
  onBuyTokenClick,
  onUpgradeClick,
  onSettingsClick,
  onLogoutClick
}: SidebarProps) {
  return (
    // Main sidebar container: flex column and takes full screen height.
    // hidden by default for mobile, but visible for larger screens using 'lg:flex'
    // Changed h-[100%] to h-screen to ensure it takes full viewport height
    <div className="w-64 flex flex-col h-screen">
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
      {/* The flex-shrink-0 ensures it doesn't shrink, and flex-1 above pushes it down */}
      <div className="p-6 flex-shrink-0 lg:pt-0 md:pt-24 pt-24">
        <div className='border-t py-3 px-3 border-white/10'></div>
        <div className="flex flex-col bg-slate-500/10 backdrop-blur-md rounded-lg p-4">
          <div className="flex items-center gap-3 mb-4">
            {/* Profile Avatar with Online Badge */}
            <div className="relative">
              <Avatar className="w-10 h-10">
                <AvatarImage src={profileAvatar} alt={profileName} />
                <AvatarFallback className="bg-gray-600 text-white">
                  <Image src="/icons/ProfileImage.png" alt="menu" width={35} height={35} />
                  {/* If profileAvatar is not provided, this fallback will show the placeholder image */}
                </AvatarFallback>
              </Avatar>
              {/* Online Badge */}
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1C0841]"></div>
            </div>
            <div>
              <div className="bg-green-600 text-black text-[10px] w-12 h-5 flex items-center justify-center rounded-md">
                Free
              </div>
              <h3 className="font-[400] text-white text-[12px]">{profileName}</h3>
            </div>
          </div>

          {/* Tokens Slider UI - assuming TokenSlider handles its own state and display of current/max tokens */}
          <TokenSlider
            maxTokens={parseInt(tokensRemaining.split(' ')[0], 10) || 300} // Parse "300 Questions" for max
            initialTokenCount={currentTokenCount}
            // You might want to add an onValueChange prop to TokenSlider if the parent needs to know the new value
            // onTokenChange={(newValue) => console.log(newValue)}
          />


          {/* Buttons */}
          <div className="space-y-2">
            <Button
              className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/70 rounded-[10px]"
              onClick={onBuyTokenClick}
            >
              Buy Token
            </Button>
            <Button
              className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white rounded-[10px]"
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