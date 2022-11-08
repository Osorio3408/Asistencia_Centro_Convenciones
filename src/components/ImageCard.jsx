import React from "react";

const ImageCard = ({ image }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="card p-0">
        <img
          src={image.webformatURL}
          alt={image.tags}
          className="card-image-top"
        />

        <div className="card-body px-6 py-4">
          <div className="card-title font-bold text-red-600 text-xl mb-2">
            {image.user}
          </div>
          <div className="card-text">
            <ul>
              <li>
                <strong>Views: </strong>
                {image.views}
              </li>
              <li>
                <strong>Downloads: </strong>
                {image.downloads}
              </li>
              <li>
                <strong>Likes: </strong>
                {image.likes}
              </li>
            </ul>
          </div>
        </div>
        {/* <div className="px-6 py-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
            #{tag}
          </span>
        ))}
      </div> */}
      </div>
    </div>
  );
};

export default ImageCard;
