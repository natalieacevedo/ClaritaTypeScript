import React from "react";
import "./App.css";
import { QueryClientProvider, QueryClient } from "react-query";
import {
  AlbumDetailPage,
  AlbumListPage,
  PhotoInAlbumPage,
  PhotoListPage,
  PhotoPage,
} from "./allImports";

const queryClient = new QueryClient();

function App() {
  //http//192.168.1.133:8000
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <header className="App-header">
          <p>vamos a hacerlo y va a quedar muy bien</p>
          <AlbumListPage />
          <AlbumDetailPage />
          <PhotoInAlbumPage />
          <PhotoListPage />
          <PhotoPage />
        </header>
      </div>
    </QueryClientProvider>
  );
}

export default App;
