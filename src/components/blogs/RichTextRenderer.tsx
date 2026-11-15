import DOMPurify from "dompurify";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  content: string;
}

// interface Props {
//   content: string;
//   className?: string;
// }

function RichTextRenderer({ content, className }: Props) {
  const sanitizedContent = DOMPurify.sanitize(content);
  // The dangerouslySetInnerHTML attribute is used to render the sanitized HTML content in the JSX.
  // It tells React to treat the content as raw HTML and insert it into the DOM.
  // This is necessary because React normally escapes HTML to prevent XSS attacks,
  // but since we have already sanitized the content, it is safe to render it as HTML.
  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedContent }}
      className={className}
    />
  );
}

export default RichTextRenderer;
