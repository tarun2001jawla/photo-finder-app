import React, { useState } from "react";

import PhotoGrid from "./components/PhotoGrid";
import FavoritePhotos from "./components/FavoritePhotos";
import ErrorMessage from "./components/ErrorMessage";
import { UnsplashPhoto } from "./components/types";
import "./App.css";


const App: React.FC = () => {
  const [favorites, setFavorites] = useState<UnsplashPhoto[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const addToFavorites = (photo: UnsplashPhoto) => {
    setFavorites((prevFavorites) => [...prevFavorites, photo]);
  };

  const removeFromFavorites = (id: string) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((photo) => photo.id !== id)
    );
  };

  return (
    <div className="app">
      
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <PhotoGrid
        addToFavorites={addToFavorites}
        setErrorMessage={setErrorMessage}
      />
      <FavoritePhotos
        favorites={favorites}
        onRemove={removeFromFavorites}
      />
    </div>
  );
};

export default App;
