import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const DetailedNews = () => {
  const { articleItems } = useSelector((state) => state.articles);
  const params = useParams();
  const { id } = params;
  const { title, description, content, urlToImage,url,publishedAt } = articleItems[id];
  return (
    <div className="h-screen bg-landingPrimary-0">
      {articleItems.length >= id && (
        <div className="grid md:grid-cols-2 md:p-10 md:gap-10 p-5 gap-">
          <div className="flex md:flex-col flex-col-reverse gap-5">
            <img className="rounded-2xl" src={urlToImage} alt="" />
            <p className="font-Gilroy_Medium md:text-3xl text-2xl">{title}</p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-Gilroy_Medium md:text-4xl text-3xl">{description}</p>
            <p className="text-xl">{content}</p>
            <h4 className="font-Gilroy_Bold">Publsihed At: <span className="font-Gilroy_Medium">{publishedAt}</span> </h4>
            
            <a className="font-DM_Serif_Text" href={url}>Want to Read more about this article? Click Here</a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailedNews;
