const About = () => {
  return (
    <div
      className="h-screen bg-[#E6DDC4] flex items-center justify-center"
      style={{
        backgroundImage: `radial-gradient(circle at top left, rgba(214, 204, 194, 0.6) 0%, rgba(226, 207, 207, 0.9) 100%), 
        linear-gradient(to top, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))`,
        backgroundBlendMode: "overlay",
      }}
    >
      <div className="text-center text-[#3E2723] px-6 py-12 max-w-3xl w-full bg-white bg-opacity-80 rounded-lg shadow-lg">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#A0522D] to-[#6B4226] mb-6">
          About Us
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-[#5D5346] leading-relaxed mb-8">
          Welcome to our e-commerce platform for women&apos;s fashion! We bring you
          a stunning collection of dresses to suit every occasion and style.
          From elegant bridal gowns to chic casual wear, we offer a variety of
          options that celebrate the beauty and diversity of women&apos;s fashion.
          Our mission is to provide high-quality attire at competitive prices,
          ensuring every woman can find her perfect outfit with ease. Whether
          you&apos;re dressing up for a special event or looking for comfortable
          everyday wear, we&apos;ve got you covered with our carefully curated
          collection.
        </p>
      </div>
    </div>
  );
};

export default About;
