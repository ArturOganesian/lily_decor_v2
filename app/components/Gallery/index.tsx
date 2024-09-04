"use client";
import { Carousel } from "antd";
import Fade from "react-awesome-reveal";
import { ConfigProvider } from "antd";
import ProductCard from "./ProductCard";
import { products } from "@/app/mockDatas/datas";

const Gallery = () => {
  return (
    <div id="gallery-section">
      <div className="mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 mt-20 md:pt-24">
        <div className="text-center">
          <Fade
            direction={"up"}
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h2 className="text-pink text-lg font-normal mb-3 tracking-widest uppercase ls-51">
              Our Gallery
            </h2>
          </Fade>
          <Fade
            direction={"up"}
            delay={800}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            <h3 className="text-3xl lg:text-5xl font-semibold text-black">
              Explore all colors.
            </h3>
          </Fade>
        </div>

        <div className="mt-5">
          <ConfigProvider
            theme={{
              components: {
                Carousel: {
                  arrowSize: 20,
                  arrowOffset: 25,
                },
              },
            }}
          >
            <Carousel
              slidesToShow={5}
              dots={false}
              arrows={true}
              infinite={true}
              className=""
            >
              {products.map(({ img, title }, index) => (
                <ProductCard img={img} title={title} index={index} />
              ))}
            </Carousel>
          </ConfigProvider>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
