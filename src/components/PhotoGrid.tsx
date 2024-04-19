import React, { useState, useEffect } from "react";
import './style.css'
import axios from "axios";
import { UnsplashPhoto } from "./types";

interface Photo {
  id: string;
  urls: {
    regular: string;
    small: string; // Add the 'small' property
  };
}


interface PhotoGridProps {
  addToFavorites: (photo: UnsplashPhoto) => void;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}

const PhotoGrid: React.FC<PhotoGridProps> = ({ addToFavorites, setErrorMessage }) => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [error, setError] = useState<string>("");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        if (!query) return;

        const response = await axios.get(
          `https://api.unsplash.com/search/photos?query=${query}&client_id=mgSiBGZxtG_DDRxqThkVy7o9gmb8djJp_0Ql5gJFSnU`
        );
        setPhotos(response.data.results);
      } catch (error) {
        setError("Error searching photos. Please try again.");
        console.error("Error searching photos:", error);
        setErrorMessage("Error searching photos. Please try again.");
      }
    };
    fetchPhotos();
  }, [query, setErrorMessage]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="photo-grid">
      <div className="search-bar">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search for photos..."
        />
      </div>
      {error && <div className="error">{error}</div>}
      {photos.map((photo) => (
        <div key={photo.id} className="photo-card">
          <img src={photo.urls.regular} alt={photo.id} />
          <button onClick={() => addToFavorites(photo)}>Add to Favorites</button>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;
