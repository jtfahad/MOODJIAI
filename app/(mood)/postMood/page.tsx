"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Sidebar } from './components/layout/sidebar';
import { MainHeader } from './components/layout/main-header';
import { MoodjiSteps } from './components/common/moodji-steps';
import { MoodCategories } from './components/moods/mood-categories';
import { MoodGrid } from './components/moods/mood-grid';

// --- Mood Categories Data ---
const moodCategories = [
  { id: 'positive', label: 'Positive', icon: '/icons/Positive.svg' },
  { id: 'negative', label: 'Negative', icon: '/icons/Negative.svg' },
  { id: 'natural', label: 'Natural', icon: '/icons/Natural.svg' },
  { id: 'physical', label: 'Physical', icon: '/icons/Physical.svg' },
];

// --- Moods Data ---
const moods = [
  { id: 1, label: 'Calm', sublabel: 'Recharged', gradient: 'from-[#3AE8E1] to-[#1754D6]', category: 'positive' },
  { id: 2, label: 'Abundant', sublabel: 'Manifesting', gradient: 'from-[#025532] to-[#18A941]', category: 'positive' },
  { id: 3, label: 'Adorable', sublabel: 'Sassy', gradient: 'from-[#F398C6] to-[#8645A3]', category: 'positive' },
  { id: 4, label: 'Adventurous', sublabel: 'Fearless', gradient: 'from-[#B93403] to-[#F56101]', category: 'positive' },
  { id: 5, label: 'Charming', sublabel: 'Extroverted', gradient: 'from-[#C3962E] to-[#31B7A6]', category: 'positive' },
  { id: 6, label: 'Emotional', sublabel: 'Thoughtful', gradient: 'from-[#B84995] to-[#8F8DB4]', category: 'positive' },
  { id: 7, label: 'Happy', sublabel: 'Excited', gradient: 'from-[#FDE252] to-[#FDB94B]', category: 'positive' },
  { id: 8, label: 'Honest', sublabel: 'Cooperative', gradient: 'from-[#1C90C9] to-[#DFCA10]', category: 'positive' },
  { id: 9, label: 'Intelligent', sublabel: 'Talented', gradient: 'from-[#1345B3] to-[#EA0F0F]', category: 'positive' },
  { id: 10, label: 'Loving', sublabel: 'Supportive', gradient: 'from-[#FEB5BD] to-[#FD768B]', category: 'positive' },
  { id: 11, label: 'Magnetic', sublabel: 'Fascinated', gradient: 'from-[#48003B] to-[#7E036A]', category: 'positive' },
  { id: 12, label: 'Honest', sublabel: 'Cooperative', gradient: 'from-[#1C90C9] to-[#DFCA10]', category: 'positive' },
  { id: 13, label: 'Charming', sublabel: 'Extroverted', gradient: 'from-[#C3962E] to-[#31B7A6]', category: 'positive' },
  { id: 14, label: 'Intelligent', sublabel: 'Talented', gradient: 'from-[#1345B3] to-[#EA0F0F]', category: 'positive' },
  { id: 15, label: 'Abundant', sublabel: 'Manifesting', gradient: 'from-[#025532] to-[#18A941]', category: 'positive' },
  { id: 16, label: 'Happy', sublabel: 'Excited', gradient: 'from-[#FDE252] to-[#FDB94B]', category: 'positive' },
  { id: 17, label: 'Adventurous', sublabel: 'Fearless', gradient: 'from-[#B93403] to-[#F56101]', category: 'positive' },
];

// --- Steps Data ---
const steps = [
  { id: 1, label: 'Select mood', active: true },
  { id: 2, label: 'Awareness', active: false },
  { id: 3, label: 'The Trigger', active: false },
  { id: 4, label: 'The Reaction', active: false },
  { id: 5, label: 'The Desire', active: false },
  { id: 6, label: 'Manifest', active: false },
  { id: 7, label: 'Blockages', active: false },
  { id: 8, label: 'Take Action', active: false },
  { id: 9, label: 'Affirmations', active: false },
  { id: 10, label: 'Additional notes', active: false },
];
export default function PostMoodScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<string>('positive');
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filteredMoods = moods.filter(mood =>
    mood.category === selectedCategory &&
    mood.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleStepClick = (stepId: number) => {
    console.log('Step clicked:', stepId);
  };

  const handleMoodSelect = (moodId: number) => {
    setSelectedMood(moodId);
  };

  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setSelectedMood(null); // Reset selected mood when category changes
  };

  return (
    // Main container: full screen height, flex column to stack sidebar/content horizontally
    <div
      className="h-vh text-white flex flex-col"
      style={{ background: 'linear-gradient(90deg, #1C0841 0%, #A32478 100%)' }}
    >      {/* This div handles the main horizontal split (sidebar and main content) */}
      <div className="flex flex-1"> {/* flex-1 ensures this section takes up all available vertical space */}

        <div className={`h-vh fixed inset-y-0 left-0 z-40 w-64 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 lg:flex lg:flex-shrink-0 md:hidden hidden`}>
          <Sidebar
            profileName="Nicole Lunan"
            tokensRemaining="300 Questions"
            progressPercentage={32}
            onBuyTokenClick={() => console.log('Buy token clicked')}
            onUpgradeClick={() => console.log('Upgrade clicked')}
            onSettingsClick={() => console.log('Settings clicked')}
            onLogoutClick={() => console.log('Logout clicked')}
            currentTokenCount={150}
          />
        </div>

        {/* Overlay for mobile sidebar when open */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden hidden"
            onClick={() => setIsSidebarOpen(false)}
          ></div>
        )}

        {/* Main Content Area: Takes up remaining horizontal space, stacks its children vertically */}
        <div
          className="flex flex-col relative overflow-hidden rounded-2xl h-calc(100vh-24%) w-full m-4"
          style={{
            backgroundImage: "url('/backgroundImages/post-mood-bg.png')", // CORRECTED PATH
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          {/* Optional: Add an overlay div for better text readability on top of the image */}
          <div className="absolute inset-0 rounded-2xl z-0"></div> {/* Dark overlay */}

          {/* All content within this area should have a higher z-index to be visible above the overlay */}
          <div className="relative z-10 flex flex-col"> {/* This div now holds all original content of the right panel */}
            <div className="flex-shrink-0"> {/* This div ensures the header doesn't shrink */}
              <MainHeader
              userName="Nicole Lunan"
              title="Post Mood"
              subtitle="Limited Discount For Early Users"
              highlightedWord="Mood"
              onNextClick={() => {
                router.push('/chatFreemium');
                console.log('Next clicked');
              }}
              onBackClick={() => console.log('Back clicked')}
              onStarClick={() => console.log('Star clicked')}
              onBookmarkClick={() => console.log('Bookmark clicked')}
              onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} // Toggle sidebar on menu click
            />
            </div>

            {/* Content Area below Header: flex-1 allows it to take remaining vertical space, column flex for inner sections */}
            <div className="flex pt-8 flex-col"> {/* Adjusted padding-top as main div has p-8 */}
              <div className="flex flex-col w-full"> {/* Ensures content takes full width and fills available height */}

                {/* Flex container for Steps and Moods section: flex-row on md+, flex-col on smaller screens */}
                <div className="flex flex-row min-h-0 w-[100%] px-5 gap-8"> {/* min-h-0 crucial for flex children to not overflow */}

                  {/* Steps Section: fixed width on desktop, full width on mobile */}
                 <div className="relative w-[20%] rounded-2xl bg-black/20 backdrop-blur-md mr-4 h-[97%] pt-4 pb-6 pl-6 border-l-2 border-r-2 border-white/10 overflow-hidden xl:block hidden">
                  {/* Top gradient border */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-white/10 via-[#c58ef2] to-white/10 rounded-t-xl pointer-events-none" />

                  {/* Bottom gradient border */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-white/10 via-[#c58ef2] to-white/10 rounded-b-xl pointer-events-none" />

                  {/* Actual content inside */}
                  <MoodjiSteps steps={steps} />
                </div>

                  {/* Mood Categories & Grid Section: Takes remaining horizontal space, stacks its children vertically */}
                  <div className="flex-1 flex flex-col min-h-0 w-[80%] justify-start items-center"> {/* min-h-0 here prevents the whole section from overflowing */}
                    {/* Moods Title */}
                    <h2 className="text-2xl font-bold mb-9 text-white flex-shrink-0 self-start">Moods</h2>

                    {/* Categories and Search: Flex container for horizontal arrangement and wrapping */}
                    <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between pb-8">
                      {/* Mood Categories */}
                      <div className=""> {/* Added margin bottom for small screens for spacing */}
                        <MoodCategories
                          categories={moodCategories}
                          selectedCategory={selectedCategory}
                          onCategorySelect={handleCategorySelect}
                        />
                      </div>
                      {/* Search Input */}
                      <div className="relative w-[318px] my-2 sm:mb-0 mr-3 rounded-full">
                        {/* Top gradient border */}
                        <div className="absolute top-0 left-0 w-[90%] h-[1px] bg-gradient-to-r from-white/10 via-[#B65EFF] to-white/10 rounded-t-full pointer-events-none z-10 ml-4" />

                        {/* Bottom gradient border */}
                        <div className="absolute bottom-0 left-0 w-[90%] h-[1px] bg-gradient-to-r from-white/10 via-[#B65EFF] to-white/10 rounded-b-full pointer-events-none z-10 ml-4" />

                        {/* Solid left/right borders & input */}
                        <div
                          className="relative z-20 bg-[#151517CC]/80 rounded-full px-3"
                          style={{
                            borderLeft: '1px solid rgba(255,255,255,0.2)',
                            borderRight: '1px solid rgba(255,255,255,0.2)',
                          }}
                        >
                          <input
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="bg-transparent text-white placeholder:text-white/80 placeholder:text-[10px] h-[34px] w-full rounded-full outline-none border-none mb-1"
                          />
                        </div>
                      </div>

                    </div>

                    {/* Mood Grid: This is the main scrollable area if moods don't fit vertically */}
                    <div className="flex-1 overflow-y-auto w-full pb-4">
                      <MoodGrid
                        moods={filteredMoods}
                        selectedMood={selectedMood}
                        onMoodSelect={handleMoodSelect}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}