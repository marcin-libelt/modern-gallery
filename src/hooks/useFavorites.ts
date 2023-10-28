"use client";
// import { useReducer } from "react";

import { useState } from "react";

//TODO: get userId from Authentication service
const USER_ID = "2312312321";

export interface FavEntry {
  userId: string;
  authorId: string;
  id: string;
}

const useFavorites = () => {
  //  const [state, dispatch] = useReducer(reducer, initialArg, init?)
  const [userId] = useState(USER_ID);
  const [favs, setFavs] = useState<FavEntry[]>([]);

  const listFav = async () => {
    const requestObject = {
      method: "GET",
      next: { revalidate: 3600 },
    };

    const response = await fetch("/api/data/", requestObject);

    return response;
  };

  const addFav = async (authorId: string) => {
    const requestObject = {
      method: "POST",
      body: JSON.stringify({ authorId, userId: userId }),
    };
    const response = await fetch("/api/data/", requestObject);
    const text = await response.text();

    // update items array
    setFavs([
      ...favs,
      {
        userId: USER_ID,
        authorId,
        id: text,
      },
    ]);
  };

  const deleteFav = async (id: string) => {
    const requestObject = {
      method: "DELETE",
      body: JSON.stringify({ id }),
    };
    const response = await fetch("/api/data/", requestObject);
    const { status } = await response.json();

    if (status === "ok") {
      const updatedData = [...favs];
      const index = updatedData.findIndex((i) => i.id === id);
      if (index > -1) {
        updatedData.splice(index, 1);
      }

      setFavs(updatedData);
    }
  };
  return {
    listFav,
    deleteFav,
    addFav,
    favs,
  };
};

export default useFavorites;
