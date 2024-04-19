import React from "react";
import './style.css'
interface UnsplashPhoto {
    id: string;
    urls: {
      small: string; // Make sure to include the `small` property
    };
    alt_description?: string;
  }
  
interface FavoritePhotoProps {
  photo: UnsplashPhoto;
  onRemove: (id: string) => void;
}

const FavoritePhoto: React.FC<FavoritePhotoProps> = ({ photo, onRemove }) => {
  const { id, urls, alt_description } = photo;
  const handleRemoveClick = () => {
    onRemove(id);
  };
  return (
    <div className="favorite-photo">
      <img src={urls.small} alt={alt_description} />
      <button className="remove-button" onClick={handleRemoveClick}>
        Remove
      </button>
    </div>
  );
};

export default FavoritePhoto;