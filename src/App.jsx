import { useState } from "react";
import "./App.css";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  // Show popup when button is clicked
  const handleClick = () => {
    setShowPopup(true);
  };

  // Close popup
  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-700 relative"
      style={{
        backgroundImage: `url('https://emojicdn.elk.sh/🙏'), url('https://emojicdn.elk.sh/💔'), url('https://emojicdn.elk.sh/🥺'), url('https://emojicdn.elk.sh/😢'), url('https://emojicdn.elk.sh/🙇‍♂️')`,
        backgroundPosition: "10% 20%, 50% 80%, 70% 10%, 90% 50%, 30% 70%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "50px, 60px, 40px, 50px, 45px",
      }}
    >
      {/* Button to Show Popup */}
      <button
        onClick={handleClick}
        className="bg-gradient-to-r from-red-500 via-yellow-500 to-orange-500 text-white px-8 py-4 rounded-2xl shadow-2xl hover:scale-110 transform transition-all duration-300 ease-in-out hover:shadow-yellow-500/50"
      >
        🛑 Oops, Something's Wrong! 🛑
      </button>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-white w-96 p-8 rounded-2xl shadow-2xl relative transform transition-all duration-300 scale-105">
            <div className="flex justify-center items-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                😔
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-4 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500">
              ⚠️ Extremely Sorry! 🫣
            </h2>
            <p className="text-gray-600 text-center mb-6">
              I'm just a piece of code trying to make you happy, but I slipped
              up somewhere. 😭 Please be kind and refresh me. I feel so guilty
              and ugly! 🙏
            </p>
            <div className="flex justify-center">
              <button
                onClick={handleClose}
                className="bg-red-500 text-white px-6 py-2 rounded-full shadow-lg hover:bg-red-600 hover:scale-110 transition-all duration-300"
              >
                ❌ Forgive Me
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
