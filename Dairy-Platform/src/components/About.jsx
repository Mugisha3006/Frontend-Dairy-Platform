import React from "react";
import SvgCow from "../assets/cow.svg";
import SvgMilk from "../assets/milk.svg";

function About() {
    return (
        <div>
            <section
                id="about"
                className="about about-section w-4/5 max-w-screen-xl m-auto text-center pt-20"
            >
                <h2 className="text-4xl text-center mb-6 font-bold">About</h2>
                <div className="section-1 md:flex flex-col md:flex-row md:justify-center items-center gap-[10%] mb-16 ">
                    <div className="image md:w-1/2 h-auto flex justify-center rounded-lg p-4 shadow-2xl w-full mb-8">
                        <img src={SvgCow} className="" />
                    </div>
                    <div className="text md:w-1/2 text-center md:text-left w-full">
                        <p>
                            Amor's Dairy Platform not only provides comprehensive solutions for dairy businesses,
                            but also offers a wide range of premium dairy products to consumers.
                            Our platform connects dairy farmers directly with customers, ensuring the delivery of fresh,
                            high-quality dairy products from farm to table.
                            Indulge in the rich taste of Amor's fresh milk, packed with essential nutrients and
                            available in various fat content options. Savor the creamy delight of our yogurts,
                            crafted with live cultures for a probiotic boost and available in a variety of flavors to satisfy every palate.
                        </p>
                    </div>
                </div>
                <div className="section-2 md:flex flex-col md:flex-row md:justify-center md:items-center gap-[10%] mb-4">
                    <div className="text md:w-1/2 w-full text-center md:text-left mb-8 order-2 md:order-1">
                        <p>
                            Experience the aromatic goodness of our ghee, made from clarified butter
                            and perfect for adding a touch of culinary magic to your dishes.
                            Quench your thirst with our refreshing soured milk,
                            a traditional fermented dairy drink known for its digestive benefits and tangy flavor.
                            Choose Amor's Dairy Platform for both your dairy business needs and your daily dairy consumption.
                            We are committed to delivering the purest, most delicious dairy products,
                            while supporting sustainable farming practices and ensuring the well-being of our animals.
                        </p>
                    </div>
                    <div className="image md:w-1/2 w-full h-auto flex justify-center rounded-lg p-4 shadow-2xl order-1 md:order-2 ">
                        <img src={SvgMilk} className="" />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;
