import React from "react";
import styles from "../../styles.module.css";
import ArticleCard from "../Card/ArticleCard";
import article1 from "../../../assests/ar1.png";
import article2 from "../../../assests/ar2.png";
import article3 from "../../../assests/ar3.png";
const RecentArticle = () => {
  const cardDatas = [
    {
      id: 1,
      image: article1,
      alt: "Person Dummy chopping wood",
      date: "April 20 2025",
      author: "Person Dummy",
      title: "What is Lorem Ipsum?",
      description:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
      id: 2,
      image: article2,
      alt: "Person Dummy working outdoors",
      date: "May 10 2025",
      author: "Person Dummy",
      title: "The History of Lorem Ipsum",
      description:
        "Lorem Ipsum has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
    {
      id: 3,
      image: article3,
      alt: "Person Dummy outdoors with chainsaw",
      date: "June 5 2025",
      author: "Person Dummy",
      title: "Why Do We Use It?",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];
  return (
    <div className={`container mx-auto ${styles.fontInter}`}>
      <div className="flex justify-between items-center my-12 px-3">
        <div>
          {" "}
          <h1 className={`sm:text-4xl text-xl  ${styles.fontDmSans}`}>
            <span className="bg-[#1D69E1] text-white px-3">Recent</span> Article
          </h1>
        </div>
        <div>
          <p className="underline text-sm sm:text-2xl">See All Articles</p>
        </div>
      </div>
      <div className="grid  grid-cols-2 md:grid-cols-3 gap-3 px-3 mb-8"> 
        {cardDatas?.map((cardData, idx) => {
          return <ArticleCard key={idx} cardData={cardData} />;
        })}
      </div>
    </div>
  );
};

export default RecentArticle;
