import { ArrowLeft, Star, Bookmark, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';

interface MainHeaderProps {
  title: string;
  subtitle?: string;
  highlightedWord?: string;
  userName: string;
  userAvatar?: string;
  onSkipClick?: () => void;
  onNextClick?: () => void;
  onBackClick?: () => void;
  onStarClick?: () => void;
  onBookmarkClick?: () => void;
  onMenuClick?: () => void;
  showButtons?: boolean;
}

export function MainHeader({
  title,
  subtitle,
  highlightedWord,
  userName,
  userAvatar,
  onSkipClick,
  onNextClick,
  onBackClick,
  onStarClick,
  onBookmarkClick,
  onMenuClick,
  showButtons = true
}: MainHeaderProps) {
  const renderTitle = () => {
    if (!highlightedWord) return title;

    const parts = title.split(highlightedWord);
    return (
      <>
        {parts[0]}
        <span className="text-orange-500">{highlightedWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className="px-8 py-3 border-white/10 flex-shrink-0 bg-transparent"> {/* bg-transparent added */}
      {/* Top section with user info and icons */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          {/* Menu button for mobile sidebar */}
          <div className="flex items-center gap-2 rounder-full backdrop-blur-0 rounded-full p-2 px-3 shadow-md bg-[#31313166] cursor-pointer">
            <Avatar className="w-8 h-8">
            <AvatarImage src={userAvatar} alt={userName} />
            <AvatarFallback className="bg-gray-600 text-white text-xs">
              {/* {userName.charAt(0).toUpperCase()} */}
          <Image src="/icons/ProfileImage.png" alt="menu" width={35} height={35} />
            </AvatarFallback>
          </Avatar>
            <span className="text-white text-[12px] font-400 pr-3">{userName}</span>
          <Image src="/icons/Arrow.png" alt="Arrow" width={10} height={8} />
          </div>
          <div className='flex items-center gap-4 pl-2 '>
            <Star className="w-6 h-6 cursor-pointer" />
            <Bookmark className="w-6 h-6 cursor-pointer" />
          </div>
          
        
        </div>
        <div className="flex items-center cursor-pointer" >
          <Image src="/icons/Menu.png" alt="menu" width={35} height={35} />
        </div>
      </div>

      {/* Back Button */}
      <div className="flex items-center gap-3 my-6 text-[11px] fonnt-700 text-[#BCBCBC] cursor-pointer">
          <ArrowLeft className="w-3 h-3" />
          Back
      </div>

      {/* Title and action buttons */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[25px] leading-[41px] text-white font-hanson font-bold">
            {renderTitle()}
          </h1>
          {/* <h1 className="md:text-4xl text-2xl font-bold mb-3 text-white">
          <Image src="/icons/Post Mood.png" alt="menu" width={200} height={200} />
          </h1> */}
          {subtitle && (
            <p className="text-white text-[16px] font-[300]">{subtitle}</p>
          )}
        </div>
        {showButtons && (
          <div className="md:flex md:flex-row sm:flex-col gap-3 sm:ml-5 ml-10">
            <Button
              variant="outline"
              className="border-white/70 text-white hover:bg-white/10 hover:text-white bg-transparent p-3 rounded-[16px] px-10 text-[12px] mb-2"
              onClick={onSkipClick}
            >
              Skip
            </Button>
            <Button
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white p-3 rounded-[16px] px-10 text-[12px]"
              onClick={onNextClick}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
