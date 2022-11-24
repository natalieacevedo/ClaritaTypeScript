import axios from "axios";
import React from "react";
const baseUrl = process.env.REACT_APP_API_BASE_URL;
import { useQuery } from "react-query";

function albumList() {
  const { data, status, error, isError, isLoading } = useQuery("albums", fetchAlbums);
  const todito = useQuery("albums", fetchAlbums);
  function fetchAlbums() {
    return axios({
      url: `${baseUrl}/api/v1/albums`,
      params: { limit: 100 },
    }).then((res) => res.data);
  }

  return [data, status, error, isError, isLoading, todito];
}

export default albumList;
// function fetchAlbums() {
//   return axios({
//     url: `${process.env.REACT_APP_API_BASE_URL}/api/v1/albums`,
//     params: { limit: 100 },
//   }).then((res) => res.data);
// }

// const AlbumListPage = () => {
//   const albumsQuery = useQuery("albums", fetchAlbums);
//   return <AlbumList {...albumsQuery} />;
// };

// export default AlbumListPage;
