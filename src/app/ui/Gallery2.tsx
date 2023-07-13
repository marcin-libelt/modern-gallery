"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { unsplash_photos } from "../data";
import { useWindowSize, useWindowScroll } from "../hooks/";

interface VirtualizedGridProps {
  items: object[];
  columns: number;
  itemHeight: number;
  containerHeight: number;
}

const VirtualizedGrid: React.FC<VirtualizedGridProps> = ({
  items,
  columns,
  itemHeight,
  containerHeight,
}) => {
  const scrollTop = useWindowScroll();
  const startIndex = Math.floor(scrollTop / itemHeight);
  const endIndex = Math.min(
    startIndex + Math.ceil(containerHeight / itemHeight),
    items.length / 4
  );

  const visibleItems = items.slice(startIndex, endIndex);
  const invisibleItemsHeight =
    (startIndex + visibleItems.length - endIndex) * itemHeight;

  return (
    <div style={{ height: `${items.length * itemHeight}px` }}>
      <div
        style={{
          position: "relative",
          height: `${visibleItems.length * itemHeight}px`,
          top: `${startIndex * itemHeight}px`,
        }}
      >
        <ul>
          {visibleItems.map((item) => (
            <ListItem {...item} />
          ))}
        </ul>
      </div>
      <div style={{ height: `${invisibleItemsHeight}px` }} />
    </div>
  );
};

interface ListItemProps {
  id?: string;
  width: number;
  height: number;
  urls: object;
  alt_description: string;
}

const ListItem: React.FC<ListItemProps> = ({
  id,
  width,
  height,
  urls,
  alt_description,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  return (
    <li key={id}>
      <div className={`aspect-square relative h-[${height}px]`}>
        <Image
          onLoad={() => setIsLoaded(true)}
          src={urls.small}
          sizes="33vw"
          fill={true}
          alt={alt_description ? alt_description : ""}
          className={`max-w-full h-auto hover:opacity-60
            ${isLoaded ? `opacity-100` : `opacity-0`} 
            transition-opacity`}
        />
      </div>
    </li>
  );
};

export default function Gallery({ page }: { page: number }) {
  const [photos, setPhotos] = useState([]);
  const [, height] = useWindowSize();

  useEffect(() => {
    setPhotos(unsplash_photos);
  }, []);

  if (!photos) {
    return <p>Not found</p>;
  }

  return (
    <VirtualizedGrid
      items={photos}
      columns={4}
      itemHeight={100}
      containerHeight={height}
    />
  );
}
