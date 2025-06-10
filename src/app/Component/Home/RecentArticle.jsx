import React from "react";
import styles from "../../styles.module.css";
import ArticleCard from "../Card/ArticleCard";
import article1 from "../../../assests/ar1.png";
import article2 from "../../../assests/ar2.png";
import article3 from "../../../assests/ar3.png";
export const cardDatas = [
  {
    id: 1,
    image: article1,
    alt: "Person Dummy chopping wood",
    date: "April 20 2025",
    author: "Person Dummy",
    title: "What is Lorem Ipsum?",
    description:
      "Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
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
  {
    id: 4,
    image: article1,
    alt: "Person Dummy holding a blueprint",
    date: "June 7 2025",
    author: "Person Dummy",
    title: "Where Can I Get Some?",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.",
  },
  {
    id: 5,
    image: article2,
    alt: "Person Dummy standing in workshop",
    date: "June 8 2025",
    author: "Person Dummy",
    title: "Standard Lorem Ipsum Passage",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry used since the 1500s.",
  },
  {
    id: 6,
    image: article3,
    alt: "Person Dummy looking at a tablet",
    date: "June 9 2025",
    author: "Person Dummy",
    title: "Dealing With Layout Issues",
    description:
      "Using Lorem Ipsum allows designers to focus on layout and design, without being distracted by content.",
  },
  {
    id: 7,
    image: article1,
    alt: "Person Dummy with blueprint and coffee",
    date: "June 10 2025",
    author: "Person Dummy",
    title: "A Guide to Dummy Text",
    description:
      "Dummy text is essential in UI/UX design workflows for representing real content during mockups.",
  },
  {
    id: 8,
    image: article2,
    alt: "Person Dummy with computer",
    date: "June 11 2025",
    author: "Person Dummy",
    title: "How to Spot Fake Text",
    description:
      "Fake or placeholder text like Lorem Ipsum can be identified easily due to its structure and Latin roots.",
  },
  {
    id: 9,
    image: article3,
    alt: "Person Dummy sketching on a notepad",
    date: "June 12 2025",
    author: "Person Dummy",
    title: "Using Placeholder Content",
    description:
      "Placeholder content keeps projects moving forward when the final content is not yet available.",
  },
  {
    id: 10,
    image: article1,
    alt: "Person Dummy thinking deeply",
    date: "June 13 2025",
    author: "Person Dummy",
    title: "Modern Uses for Lorem Ipsum",
    description:
      "Lorem Ipsum has adapted to the digital age, being used in web, print, and app development.",
  },
  {
    id: 11,
    image: article2,
    alt: "Person Dummy editing a website",
    date: "June 14 2025",
    author: "Person Dummy",
    title: "Famous Variants of Ipsum",
    description:
      "Variations like Hipster Ipsum, Cupcake Ipsum, and more are playful takes on the classic dummy text.",
  },
  {
    id: 12,
    image: article3,
    alt: "Person Dummy reading documentation",
    date: "June 15 2025",
    author: "Person Dummy",
    title: "Avoiding Repetition in Design",
    description:
      "Repeating the same dummy text may confuse stakeholders. Mix up your placeholders to improve clarity.",
  },
  {
    id: 13,
    image: article1,
    alt: "Person Dummy comparing blueprints",
    date: "June 16 2025",
    author: "Person Dummy",
    title: "Designing With Intention",
    description:
      "Use dummy text intentionally to emphasize design hierarchy and user experience over words.",
  },
  {
    id: 14,
    image: article2,
    alt: "Person Dummy talking on phone",
    date: "June 17 2025",
    author: "Person Dummy",
    title: "From Paper to Pixels",
    description:
      "How placeholder text transitioned from print design to digital interfaces and still thrives.",
  },
  {
    id: 15,
    image: article3,
    alt: "Person Dummy with toolbox",
    date: "June 18 2025",
    author: "Person Dummy",
    title: "The Ethics of Filler Text",
    description:
      "Consider when and how to use filler responsibly, especially in accessibility-first design workflows.",
  },
];

const RecentArticle = () => {
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
        }).slice(0,3)}
      </div>
    </div>
  );
};

export default RecentArticle;
