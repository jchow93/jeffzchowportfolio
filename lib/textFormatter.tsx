import React from "react";

/**
 * Parses text with markdown-style bold syntax (**text**) and converts it to JSX
 * @param text - The text string that may contain **bold** markers
 * @returns React element with bold text properly formatted
 */
export function formatTextWithBold(text: string): React.ReactNode {
  if (!text) return text;

  // Split by ** markers and process
  const parts: React.ReactNode[] = [];
  const regex = /\*\*(.*?)\*\*/g;
  let lastIndex = 0;
  let match;

  while ((match = regex.exec(text)) !== null) {
    // Add text before the match
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    // Add the bold text
    parts.push(<strong key={match.index}>{match[1]}</strong>);
    lastIndex = regex.lastIndex;
  }

  // Add remaining text after last match
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }

  // If no matches found, return original text
  if (parts.length === 0) {
    return text;
  }

  return <>{parts}</>;
}

