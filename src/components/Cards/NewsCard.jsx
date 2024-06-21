import React from 'react';
import imageNotFound from "../../assets/imagenotfound.svg";
import { Link } from 'react-router-dom';

const NewsCard = ({ title, description, urlToImage, index, onclick, buttonType }) => {
  

  return (
    <div className='shadow-lg rounded-xl overflow-hidden'>
      <Link to={`/${index}`} className='block'>
        <div>
          <img className="w-[100%] h-[300px] object-cover" src={urlToImage ? urlToImage : imageNotFound} alt="" />
        </div>
        <div className='p-5'>
          <div className='p-2'>
            <h4 className='font-Gilroy_Bold text-3xl'>Title:</h4>
            <p className='font-Gilroy_Light text-xl'>{title}</p>
          </div>
          <div className='p-2'>
            <h4 className='font-Gilroy_Bold text-3xl'>Description:</h4>
            <p className='font-Gilroy_Light text-xl'>{description}</p>
          </div>
        </div>
      </Link>
      <button
        className='m-5 p-2 border-slate-900 border-2 rounded-md hover:bg-slate-900 hover:text-white transition-all'
        onClick={onclick}
      >
        {buttonType}
      </button>
    </div>
  );
};

export default NewsCard;
