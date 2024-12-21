"use client";

export default function LoginPage() {
  const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
  const REDIRECT_URI = "http://localhost:3000/callback";
  const SCOPES = "playlist-modify-public playlist-modify-private user-top-read user-read-currently-playing";

  const loginWithSpotify = () => {
    const authUrl = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&scope=${encodeURIComponent(SCOPES)}`;
    window.location.href = authUrl;
  };

  return (
    <div>
      <h1>Login to Spotify</h1>
      <button onClick={loginWithSpotify}>Login with Spotify</button>
    </div>
  );
}
