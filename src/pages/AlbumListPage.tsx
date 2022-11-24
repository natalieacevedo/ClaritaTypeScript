import React from "react";
import allData from "../data/allData";

function AlbumListPage() {
  const [data, status, error, isError, isLoading, todito] = allData();
  console.log(isLoading);

  return <h1>tambien la mas pechocococococ</h1>;
}

export default AlbumListPage;
