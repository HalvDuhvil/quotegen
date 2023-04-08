import { useState, useEffect } from "react";
import Card from "./components/Card";

function App() {
  const [quote, setQuote] = useState({
    text: "With great power comes great responsibility",
    author: "Uncle Ben",
  });

  const [loading, setLoading] = useState(false);

  const getQuotes = async () => {
    setLoading(true);
    const response = await fetch("https://type.fit/api/quotes");
    const data = await response.json();
    const randomQuote = data[Math.floor(Math.random() * data.length)];
    setQuote(randomQuote);
    setLoading(false);
  };

  useEffect(() => {
    getQuotes();
  }, []);

  const handleClick = () => {
    setQuote(getQuotes);
  };

  return (
    <main
      role="main"
      className="flex bg-[#202632] min-h-screen items-start sm:items-center justify-center"
    >
      <Card quote={quote} handleClick={handleClick} loading={loading} />
    </main>
  );
}

export default App;
