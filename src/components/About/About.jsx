import React from 'react';

const About = () => {
    return (
        <div className="w-11/12 mx-auto px-4 py-8 bg-white">
            <h1 className="text-4xl font-bold text-center mb-6">About Us</h1>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                <p className="text-gray-700 leading-relaxed">
                    Welcome to <strong>Gadget Haven</strong> – your one-stop shop for the latest and greatest in gadgets and tech accessories.
                    Founded by tech enthusiasts, we’re dedicated to bringing you top-quality, cutting-edge technology that fits every lifestyle.
                    From computers and smartphones to power banks and smart watches, we curate only the best gadgets that deliver performance,
                    style, and value.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-700 leading-relaxed">
                    At Gadget Haven, our mission is to make technology accessible and enjoyable for everyone.
                    We believe in the power of gadgets to enrich lives, enhance productivity, and bring joy.
                    With this mission, we work tirelessly to provide a seamless shopping experience and a carefully selected collection
                    of gadgets that are reliable, innovative, and designed to elevate everyday living.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li><strong>Quality First:</strong> We prioritize quality in everything we offer.</li>
                    <li><strong>Customer-Centric:</strong> We strive to create a seamless, enjoyable shopping experience.</li>
                    <li><strong>Innovation:</strong> We embrace new ideas and the latest trends in technology.</li>
                    <li><strong>Integrity:</strong> Honesty and transparency are at the heart of our business.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                <p className="text-gray-700 leading-relaxed">
                    Gadget Haven goes beyond just selling gadgets; we’re committed to helping our customers find the right products
                    to meet their needs. Our dedicated customer support team is here to assist you, ensuring a smooth and satisfactory
                    shopping experience. Choose Gadget Haven for unmatched quality, variety, and a brand you can trust.
                </p>
            </section>
        </div>
    );
};

export default About;