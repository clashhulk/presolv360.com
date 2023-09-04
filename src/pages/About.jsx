// pages/about.js
import React from "react";

const About = ({ data }) => {
  return (
    <div>
      <h1>About Us</h1>
      <p>{data}</p>
    </div>
  );
};

export async function getStaticProps() {
  // Fetch data from an API or other source
  const data = "This is the fetched data.";

  return {
    props: {
      data,
    },
  };
}

export default About;
