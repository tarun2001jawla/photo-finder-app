import React from "react";
import './style.css'
import FavoritePhoto from "./FavoritePhoto";
export {}
interface UnsplashPhoto {
  id: string;
  urls: {
    small: string;
  };
  alt_description?: string;
}

interface FavoritePhotosProps {
  favorites: UnsplashPhoto[];
  onRemove: (id: string) => void;
}

const FavoritePhotos: React.FC<FavoritePhotosProps> = ({
  favorites,
  onRemove,
}) => {
  return (
    <div className="container">

    
    <div className="favorite-photos">
      <h2>Favorite Photos</h2>
      <div className="favorite-photos-grid">
        {favorites.map((photo) => (
          <FavoritePhoto key={photo.id} photo={photo} onRemove={onRemove} />
        ))}
      </div>
    </div>
    </div>
  );
};

export default FavoritePhotos;
