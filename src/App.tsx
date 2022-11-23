import React from "react";
import "./App.css";
import {
  AlbumDetailPage,
  AlbumListPage,
  PhotoInAlbumPage,
  PhotoListPage,
  PhotoPage,
} from "./allImports";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>vamos a hacerlo y va a quedar muy bien</p>
        <AlbumDetailPage />
        <AlbumListPage />
        <PhotoInAlbumPage />
        <PhotoListPage />
        <PhotoPage />
      </header>
    </div>
  );
}

export default App;
