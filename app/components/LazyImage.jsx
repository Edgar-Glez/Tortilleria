"use client";
import Image from "next/image";
import React, { useState } from "react";

const ImageLoader = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoaded = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        onLoad={handleImageLoaded}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default ImageLoader;
