"use client";

import Heading from "@/app/ui/Heading";
import { unsplash_photos } from "@/app/data";
import { useEffect, useState } from "react";
import Image from "next/image";
import { ItemProps } from "@/app/types";
import AuthorInfo from "@/app/ui/AuthorInfo";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

export default function Photo({
  params,
}: {
  params: { photoId: string };
}): JSX.Element {
  const [photo, setPhoto] = useState<ItemProps>();
  const [status, setStatus] = useState("");

  useEffect(() => {
    const result = unsplash_photos.find((photo) => photo.id === params.photoId);
    !result ? setStatus("Not image found") : setPhoto(result);
  }, []);

  const classes = {
    root: `md:flex md:gap-8 items-start`,
    media: `md:w-7/12 p-2 border border-gray-400`,
    info: `md:w-5/12`,
    caption: `text-xs`,
    image: ``,
  };

  if (status) {
    return <p>{status}</p>;
  }

  if (!photo) {
    return <p>Loading...</p>;
  }

  const timePassed = formatDistanceToNow(new Date(photo.created_at));

  return (
    <div className={classes.root}>
      <div className={classes.media}>
        <Image
          src={photo.urls.regular}
          width={photo.width}
          height={photo.height}
          alt={photo.alt_description ? photo.alt_description : ""}
          className={classes.image}
          style={{ backgroundColor: photo.color }}
        />
        <p className={classes.caption}></p>
      </div>
      <div className={classes.info}>
        <span className="text-xs text-gray-500">{timePassed} </span>
        <span className="text-sm italic text-gray-500 whitespace-nowrap">
          by {photo.user.username}
        </span>
        <Heading
          level={1}
          title={photo.description || photo.alt_description}
          className={"mt-3 mb-10 px-3 md:px-0 md:mb-5"}
        />
        <AuthorInfo
          author={photo.user}
          className={"border-gray-500 py-8"}
        ></AuthorInfo>
      </div>
    </div>
  );
}
