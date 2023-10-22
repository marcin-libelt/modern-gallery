"use client";

import { useState } from "react";
import { PageContainer } from "../components";

// TODO: get userId from Authentication service
const USER_ID = "2312312321";

interface Entry {
  userId: string;
  authorId: string;
  id: string;
}

const FavoritesPage = () => {
  const [userId, setUserId] = useState(USER_ID);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Entry[]>([]);
  const [entry, setEntry] = useState("");

  const getUserFav = async () => {
    const requestObject = {
      method: "GET",
    };
    setLoading(true);
    const response = await fetch(
      "/api/data?" + new URLSearchParams({ userId }),
      requestObject
    );
    const text = await response.text();

    setLoading(false);
    setData(JSON.parse(text));
  };

  const postUserFav = async () => {
    const requestObject = {
      method: "POST",
      body: JSON.stringify({ authorId: entry, userId: userId }),
    };
    const response = await fetch("/api/data", requestObject);
    const text = await response.text();

    // update items array
    setData([
      ...data,
      {
        userId: USER_ID,
        authorId: entry,
        id: text,
      },
    ]);

    setEntry("");
  };

  const deleteUserFav = async (id: string) => {
    const requestObject = {
      method: "DELETE",
      body: JSON.stringify({ id }),
    };
    setLoading(true);
    const response = await fetch("/api/data", requestObject);
    const { status } = await response.json();

    if (status === "ok") {
      const updatedData = [...data];
      const index = updatedData.findIndex((i) => i.id === id);
      if (index > -1) {
        // only splice array when item is found
        updatedData.splice(index, 1); // 2nd parameter means remove one item only
      }

      setData(updatedData);
    }
  };

  return (
    <PageContainer
      headerActions={
        <>
          <input
            className="text-black p-2"
            value={userId}
            onChange={(ev) => setUserId(ev.target.value)}
          />
          <button
            className="m-4 text-white disabled:bg-slate-500"
            disabled={!userId}
            onClick={() => getUserFav()}
          >
            Make call
          </button>
          {loading && "Loading data"}
        </>
      }
    >
      {!!data.length && (
        <div className="grid grid-cols-4">
          {data.map((item: { authorId: string; id: string }) => (
            <div key={item.id}>
              {item.authorId}{" "}
              <span onClick={() => deleteUserFav(item.id)}>usuń</span>
            </div>
          ))}
        </div>
      )}

      <div>
        <label>Add new entry</label>
        <div>
          <input
            className="text-black p-2"
            value={entry}
            onChange={(ev) => setEntry(ev.target.value)}
          />
          <button
            className="m-4 text-white disabled:bg-slate-500"
            disabled={!userId}
            onClick={() => postUserFav()}
          >
            Post new entry
          </button>
        </div>
      </div>
    </PageContainer>
  );
};

export default FavoritesPage;
