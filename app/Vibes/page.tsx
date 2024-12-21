"use client";

import { useState } from "react";

export default function CreatePlaylist() {
  const [playlistName, setPlaylistName] = useState("");
  const [status, setStatus] = useState("");

  const handleCreatePlaylist = async () => {
    if (!playlistName) {
      return setStatus("Please enter a playlist name.");
    }

    try {
      const response = await fetch("/api/playlist/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ playlistName }),
      });

      if (!response.ok) {
        const errorDetails = await response.json();
        console.error("Spotify API Error:", errorDetails);
        throw new Error("Failed to create playlist");
      }
      

      const data = await response.json();
      setStatus(`Playlist created! View it on Spotify: ${data.playlistUrl}`);
    } catch (error) {
      console.error(error); // Log the error for debugging
      setStatus("Error creating playlist. Please try again.");
    }
    
  };

  return (
    <div>
      <h1>Create a Caribbean Playlist</h1>
      <input
        type="text"
        value={playlistName}
        onChange={(e) => setPlaylistName(e.target.value)}
        placeholder="Enter playlist name"
      />
      <button onClick={handleCreatePlaylist}>Create Playlist</button>
      {status && <p>{status}</p>}
    </div>
  );
}
