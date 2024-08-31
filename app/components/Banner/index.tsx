"use client";
import Image from "next/image";
import Link from "next/link";
import hero_img from '@/public/images/Banner/hero_img.jpg';
import dough_img from '@/public/images/Banner/dough.png'
import { Fade } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div id="home-section" className="bg-lightpink">
      <div className="mx-auto max-w-7xl pt-20 sm:pb-24 px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 space-x-1">
          <div className="col-span-6 flex flex-col justify-center">
            <Fade
              direction={"up"}
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h1 className="text-5xl  lg:hover:text-[52px] duration-700  font-semibold mb-5 text-lightgrey md:4px lg:text-start text-center">
                Cook awesome cakes <br /> with the experts
              </h1>
            </Fade>
            <Fade
              direction={"up"}
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="text-grey hover:text-pink duration-1000 lg:text-lg font-normal mb-10 lg:text-start text-center">
                Crafted with care and tradition, our marzipan is a celebration
                of flavor and artistry. Each piece is born from the finest
                almonds, skillfully blended to create a delicacy that delights
                both the eye and the palate. Indulge in the rich, velvety
                texture and the subtle sweetness that has made marzipan a
                beloved treat for generations.
              </p>
            </Fade>
            <Fade
              direction={"up"}
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className="md:flex align-middle justify-center lg:justify-start">
                <button className="text-xl w-full md:w-auto font-medium rounded-full text-white py-5 px-6 hover:bg-white hover:text-pink duration-700 hover:border hover:border-pink bg-pink lg:px-14 mr-6">
                  <Link href="#cook-section">Lets cook</Link>
                </button>
                <button className="flex border w-full md:w-auto mt-5 md:mt-0 border-pink justify-center rounded-full text-xl font-medium items-center py-5 px-10 text-pink hover:text-white duration-700 hover:bg-pink">
                  <Link href="#about-section">Explore now</Link>
                </button>
              </div>
            </Fade>
          </div>

          <div className="col-span-6 flex justify-center relative">
            <div className="flex bg-white p-1 gap-5 items-center bottom-10 left-6 rounded-xl absolute">
              <Image
                src={dough_img}
                alt="Dough"
                width={78}
                height={78}
              />
              <p className="text-sm font-normal">
                More than 50+ <br /> colors.
              </p>
            </div>
            <Image
              src={hero_img}
              alt="Baker"
              width={800}
              height={705}
              className="h-[700px] w-[500px] rounded-t-full rounded-b-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
