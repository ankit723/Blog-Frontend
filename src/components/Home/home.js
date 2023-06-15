import React from "react";
import { Hero } from './hero';
import { Blog } from './blog';
import { News } from './news';
import home_top from "../../backgrounds/home_top.png"

export function Home(props) {
    return (
        <div className="App mx-5">
            <Hero headImage={home_top} headTitle={"Welcome to Blogger"} headPara={"Discover a world of knowledge, inspiration, and opportunities through our diverse range of blogs. We are thrilled to present a platform that caters to the curious minds, the enthusiasts, and the professionals in various fields. Our goal is to bring you valuable insights, engaging content, and timely updates across three distinct segments, each with its own array of sub-segments."}/>
            <Blog/>
            <News/>
        </div>
    );
  }
  
  export default Home;