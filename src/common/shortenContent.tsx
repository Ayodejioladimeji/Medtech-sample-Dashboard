export const ShortenContent = ({ content, maxLength }) => {
  // Check if content length is greater than maxLength
  if (content.length > maxLength) {
    // Shorten the content and add ellipsis
    const shortenedContent = content.slice(0, maxLength) + "...";
    return <span>{shortenedContent}</span>;
  }

  // If content length is within maxLength, return the original content
  return <span>{content}</span>;
};
