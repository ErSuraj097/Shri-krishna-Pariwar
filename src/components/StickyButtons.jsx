import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function StickyButtons() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-4 right-4 flex flex-col space-y-3 z-50">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890" // Replace with actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center justify-center w-14 h-14"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12c0 2.19.64 4.23 1.76 5.94L2 22l4.29-1.24C8.02 22 10 23 12 23c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18c-1.61 0-3.17-.47-4.5-1.34l-.33-.21-2.55.74.76-2.47-.22-.34C4.49 14.96 4 13.52 4 12c0-4.42 3.58-8 8-8s8 3.58 8 8-3.58 8-8 8zm3.66-5.39c-.2-.1-1.19-.59-1.38-.66-.18-.06-.32-.1-.45.1-.13.2-.52.66-.64.8-.12.14-.24.15-.44.05-.2-.1-.85-.31-1.62-.99-.6-.54-1-1.2-1.12-1.4-.12-.2-.01-.31.09-.41.1-.1.2-.24.3-.36.1-.12.14-.2.2-.33.06-.13.03-.25-.02-.34-.05-.1-.45-1.08-.61-1.48-.16-.4-.33-.35-.45-.36-.12-.01-.25-.01-.38-.01-.13 0-.35.05-.53.25-.18.2-.7.68-.7 1.66s.72 1.92.82 2.06c.1.14 1.42 2.17 3.44 2.95 1.41.55 1.96.6 2.66.51.4-.05 1.19-.49 1.36-.96.17-.47.17-.86.12-.94-.05-.08-.17-.12-.37-.2z" />
        </svg>
      </a>

      {/* Scroll-to-Top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-900 transition duration-300 flex items-center justify-center w-12 h-12"
        >
          <ChevronUp size={24} />
        </button>
      )}
    </div>
  );
}
