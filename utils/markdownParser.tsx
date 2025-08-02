// utils/markdownParser.tsx
import React from 'react';

interface MarkdownParserProps {
  content: string;
}

// Function to parse a simple markdown string and return React nodes
const MarkdownParser: React.FC<MarkdownParserProps> = ({ content }) => {
  const parts: React.ReactNode[] = [];
  const regex = /(\*\*.*?\*\*)|(\*.*?\*)|(`.*?`)/g; // Regex for **bold**, *italic*, `code` (can be extended)
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(content)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(content.substring(lastIndex, match.index));
    }

    const fullMatch = match[0];
    if (fullMatch.startsWith('**') && fullMatch.endsWith('**')) {
      // Bold text
      parts.push(<strong key={lastIndex} className="font-bold text-white-900">{fullMatch.slice(2, -2)}</strong>);
    } else if (fullMatch.startsWith('*') && fullMatch.endsWith('*')) {
      // Italic text
      parts.push(<em key={lastIndex} className="italic">{fullMatch.slice(1, -1)}</em>);
    } else if (fullMatch.startsWith('`') && fullMatch.endsWith('`')) {
      // Code snippet
      parts.push(<code key={lastIndex} className="bg-white/10 p-1 rounded text-sm font-mono">{fullMatch.slice(1, -1)}</code>);
    } else {
      // Fallback for unhandled matches, though regex should prevent this
      parts.push(fullMatch);
    }
    lastIndex = regex.lastIndex;
  }

  // Add any remaining text after the last match
  if (lastIndex < content.length) {
    parts.push(content.substring(lastIndex));
  }

  return <>{parts}</>;
};

export default MarkdownParser;