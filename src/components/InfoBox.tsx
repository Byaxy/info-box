interface InfoBoxProps {
  title: string;
  text: string;
  linkText: string;
  linkUrl: string;
}

const InfoBox = ({ title, text, linkText, linkUrl }: InfoBoxProps) => {
  return (
    <div className="p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 bg-white max-w-md mx-4">
      <h3 className="text-2xl font-semibold mb-2 text-blue-600">{title}</h3>
      <p className="text-gray-600 mb-4">{text}</p>
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        {linkText}
      </a>
    </div>
  );
};

export default InfoBox;
