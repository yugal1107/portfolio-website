import { React, useState } from "react";
import StoryCard from "./StoryCard";
import { ThreeDCard } from "./ThreeDCard";
import { TypewriterEffect } from "../ui/typewriter-effect";
import SectionWrapper from "../SectionWrapper";
import { FaArrowDown, FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

const stories = [
  {
    title: "HackN'dore",
    description: [
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, temporibus eos reprehenderit, officia veniam in modi nemo odio fuga dolorem eum, delectus fugiat fugit illum officiis asperiores dolor quo? Iste nesciunt cum minus tempora.",
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, doloremque. Deleniti fuga itaque obcaecati laborum ipsam necessitatibus nulla. Nulla sed temporibus vel magni neque minus praesentium ipsam maxime qui quae, odit beatae voluptate esse animi, modi labore magnam aut quisquam et eius est. Maiores corporis ducimus corrupti asperiores cumque odio",
    ],
    images: [
      "https://images.pexels.com/photos/27025440/pexels-photo-27025440/free-photo-of-shadow-cast-on-pear-halves-lying-on-ceramic-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ],
    cardimage: "/hackindore.jpg",
    date: "26th July",
    status: "recent",
    id: 1,
    location: "Indore, MP",
  },
  {
    title: "DevsHouse",
    location: "Chennai, TN",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non excepturi ratione saepe est minus dolorum at placeat numquam aliquam maxime consectetur deserunt incidunt delectus, eum magnam rerum autem deleniti perferendis?",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non nulla dignissimos ullam possimus ratione amet dolor. Illum error cumque corrupti cum voluptatem quod mollitia iure fugiat a ipsam commodi adipisci maxime temporibus quidem provident recusandae, quas architecto accusantium facere et sit molestias. Quisquam provident dolorum doloremque similique at voluptas facilis ut voluptatum quis esse quasi pariatur omnis consectetur ad laborum voluptate quam illum magni, distinctio nulla asperiores quidem nisi ratione.",
    ],
    images: [],
    cardimage: "devshouse.jpg",
    date: "",
    id: 2,
    status: "3 months ago",
  },
  {
    title: "Codathon 2.0",
    location: "Gwalior, MP",
    description: [
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur modi iure molestias quae ipsam porro quibusdam distinctio quia consectetur consequatur? Nam quidem voluptatum in veniam et quasi labore architecto doloribus!",
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, tempore maiores, ut aperiam, earum voluptate rerum id blanditiis consequatur ratione odit ullam. Eligendi perspiciatis voluptatum cupiditate fuga nam? Laboriosam ullam temporibus tempore officiis magnam officia nobis dolore laudantium nulla. Qui, ipsum minus.",
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam distinctio omnis aspernatur minus officiis, nemo accusantium. Distinctio cumque praesentium eius?",
    ],
    images: [],
    cardimage: "/codathon.jpg",
    date: "",
    id: 3,
    status: "1 year ago",
  },
];

export default function StoriesComponent() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [storiesToShow, setstoriesToShow] = useState(2);
  const [viewAll, setViewAll] = useState(true);

  const handleNext = () => {
    if (currentIndex + storiesToShow < stories.length) {
      setCurrentIndex(currentIndex + storiesToShow);
      console.log(currentIndex);
    }
  };

  const handlePrev = () => {
    if (currentIndex - storiesToShow >= 0) {
      setCurrentIndex(currentIndex - storiesToShow);
    }
  };

  return (
    <SectionWrapper>
      {/* <h1 className="text-5xl font-bold text-center text-white">Stories</h1> */}
      <TypewriterEffect
        words={[
          {
            text: "Stories",
            className: "dark:text-yellow-300 font-light text-4xl md:text-6xl",
          },
        ]}
      />
      <button
        onClick={handlePrev}
        className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold p-16 hidden lg:block"
      >
        <FaArrowLeft />
      </button>
      <div className=" flex flex-col lg:flex-row lg:gap-20 justify-center mx-auto">
        {stories
          .slice(currentIndex, currentIndex + storiesToShow)
          .map((story, index) => {
            return (
              <ThreeDCard
                id={index}
                key={index}
                title={story.title}
                date={story.date}
                image={story.cardimage}
                status={story.status}
                location={story.location}
              />
            );
          })}

        <button
          className={`bg-gray-900 text-white p-2 px-4 rounded-full mx-auto lg:hidden ${
            viewAll ? "" : "hidden"
          }`}
          onClick={() => {
            setCurrentIndex(0);
            setstoriesToShow(stories.length);
            setViewAll(false);
          }}
        >
          View All <FaArrowDown className="inline lg:hidden" />
        </button>
      </div>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-4xl font-bold p-16 hidden lg:block"
      >
        <FaArrowRight />
      </button>
    </SectionWrapper>
  );
}
