import React from 'react';
import ChatScreen from './components/ChatScreen';
// import ChatFreemiumPage from './components/ChatFreemium';
// import NewChatFreemium from './components/NewChatFreemium';


export default function Page () {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <ChatScreen/>
      {/* <NewChatFreemium/> */}
      {/* <ChatFreemiumPage/> */}
    </div>
  );
}