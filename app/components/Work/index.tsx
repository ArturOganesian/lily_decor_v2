"use client";
import Image from "next/image";
import Fade from "react-awesome-reveal";
import sugar_flower from "@/public/images/Features/create_flower.jpg";

interface cardDataType {
  imgSrc: string;
  heading: string;
  subheading: string;
}

const cardData: cardDataType[] = [
  {
    imgSrc: "/images/Features/feature_1.png",
    heading: " Cake Coverings",
    subheading: "Our marzipan molds perfectly to any shape without tearing.",
  },
  {
    imgSrc: "/images/Features/feature_2.png",
    heading: "Smooth Finish",
    subheading: "Achieve a flawless, crack-free surface for your creations.",
  },
  {
    imgSrc: "/images/Features/feature_3.png",
    heading: "Elastic Flexibility",
    subheading:
      "Experience the ease of working with a marzipan that stretches.",
  },
  {
    imgSrc: "/images/Features/feature_4.png",
    heading: "Artistic Decorations",
    subheading: "Craft beautiful sugar flowers and decorations with precision.",
  },
];

const Work = () => {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl pt-40 px-6" id="about-section">
        <div className="text-center mb-14">
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h3 className="text-pink text-lg font-normal mb-3 ls-51 uppercase">
              Features
            </h3>
          </Fade>
          <Fade
            direction={"up"}
            delay={800}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <p className="text-3xl lg:text-5xl font-semibold text-lightgrey">
              Why you should choose our <br /> product.
            </p>
          </Fade>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-20 gap-x-5 mt-10">
          <Fade
            direction={"up"}
            delay={1000}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            {cardData.map((items, i) => (
              <div className="card-b p-8 relative rounded-3xl" key={i}>
                <div className="work-img-bg rounded-full flex justify-center">
                  <Image
                    src={items.imgSrc}
                    alt={items.imgSrc}
                    width={100}
                    height={100}
                  />
                </div>
                <h3 className="text-xl text-black font-semibold text-center mt-8">
                  {items.heading}
                </h3>
                <p className="text-lg font-normal text-black text-center text-opacity-50 mt-2">
                  {items.subheading}
                </p>
                <div className="flex items-center justify-center"></div>
              </div>
            ))}
          </Fade>
        </div>
        <div className=" border-t border-dashed border-pink mt-10" />
        <div className="flex justify-between w-full mt-10">
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
            className="w-full flex items-center"
          >
            <div className="w-[80%] flex flex-col justify-center items-start">
              <h2 className="text-5xl font-semibold text-lightgrey">
                Not only cakes
              </h2>
              <p className="mt-8 text-grey  w-full text- text-xl hover:text-pink  duration-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                quisquam illum dolorem assumenda officia, iure qui atque
                facilis? Blanditiis earum fugit illum vel distinctio alias
                perferendis magnam facilis id minima!
              </p>
            </div>
          </Fade>
          <div className="w-[30%]">
            <Image
              src={sugar_flower}
              width={500}
              height={800}
              alt="Sugar flower"
              className="rounded-t-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
