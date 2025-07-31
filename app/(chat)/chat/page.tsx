import React from 'react';
import ChatFreemiumPage from './components/ChatFreemium';
import NewChatFreemium from './components/NewChatFreemium';
import Chat from './components/Chat';


export default function Page () {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
    <Chat/>
      {/* <NewChatFreemium/> */}
      {/* <ChatFreemiumPage/> */}
    </div>
  );
}