"use client";

import { useState, useEffect } from "react";

export default function MusicSuggestionPage() {
  const [suggestion, setSuggestion] = useState("");
  const [suggestionsList, setSuggestionsList] = useState<string[]>([]);

  const handleMusicSuggestion = () => {
    if (!suggestion.trim()) {
      alert("Please enter a valid music suggestion!");
      return;
    }

    // Add the suggestion to the list
    setSuggestionsList((prev) => [...prev, suggestion]);
    setSuggestion(""); // Clear the input field
  };

  useEffect(() => {
    // Simulate fetching updated suggestions from a server (for now, it just refreshes the list every few seconds)
    const interval = setInterval(() => {
      setSuggestionsList((prev) => [...prev]); // Mimic refreshing
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f3f4f6",
        padding: "20px",
        fontFamily: "'Arial', sans-serif",
      }}
    >
      <h1
        style={{
          marginBottom: "20px",
          fontSize: "28px",
          color: "#333",
          textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
        }}
      >
        Suggest Music for the DJ
      </h1>
      <div style={{ marginBottom: "20px", width: "100%", maxWidth: "400px" }}>
        <input
          type="text"
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          placeholder="Enter a song or artist"
          style={{
            width: "100%",
            padding: "12px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "16px",
            color: "#333", // Black text for input
            backgroundColor: "#fff",
          }}
        />
      </div>
      <button
        onClick={handleMusicSuggestion}
        style={{
          padding: "12px 24px",
          background: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          fontSize: "16px",
          cursor: "pointer",
          transition: "background 0.3s",
        }}
        onMouseOver={(e) =>
          (e.currentTarget.style.background = "#0056b3")
        } // Hover effect
        onMouseOut={(e) =>
          (e.currentTarget.style.background = "#007BFF")
        }
      >
        Submit Suggestion
      </button>
      <div
        style={{
          marginTop: "40px",
          width: "100%",
          maxWidth: "500px",
          background: "white",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.15)",
        }}
      >
        <h2
          style={{
            marginBottom: "15px",
            fontSize: "22px",
            color: "#333",
            textAlign: "center",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
          }}
        >
          Suggestions List
        </h2>
        {suggestionsList.length === 0 ? (
          <p
            style={{
              color: "#555",
              textAlign: "center",
              fontSize: "16px",
              fontStyle: "italic",
            }}
          >
            No suggestions yet. Be the first!
          </p>
        ) : (
          <ul
            style={{
              listStyle: "none",
              padding: "0",
              margin: "0",
              maxHeight: "200px",
              overflowY: "auto", // Allow scrolling for long lists
            }}
          >
            {suggestionsList.map((item, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "10px",
                  fontSize: "16px",
                  color: "#444",
                  padding: "10px",
                  border: "1px solid #ddd",
                  borderRadius: "5px",
                  backgroundColor: "#f9f9f9",
                  transition: "background 0.3s",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#e0f7fa")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#f9f9f9")
                }
              >
                🎵 {item}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
