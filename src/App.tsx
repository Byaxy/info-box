import InfoBox from "./components/InfoBox";

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col items-center justify-center p-5">
      <h1 className="text-2xl md:text-3xl font-bold text-blue-600 mb-8 text-center">
        Hello React + Tailwind CSS + Typescript!
      </h1>

      <InfoBox
        title="Welcome to Our Platform"
        text="This is a sample information box component built with React, TypeScript, and Tailwind CSS. It demonstrates a simple UI element with responsive design."
        linkText="Learn More"
        linkUrl="https://reactjs.org"
      />
    </div>
  );
}

export default App;
