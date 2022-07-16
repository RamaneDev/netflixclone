import React, {Component} from "react";
import { HeaderImag } from "../components";

const movies = [
    {
      backdrop_path: './images/Fast_large.jpg',
      id: 475557,
      overview:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis in quos impedit? Iure officia fugit nostrum blanditiis! Blanditiis voluptatem consectetur, eos fugiat explicabo maiores, optio perferendis rem quas perspiciatis quos?",
      poster_path: './images/Fast_small.jpg',
      title: "Fast and Furious"
    },
    {
        backdrop_path: './images/Fast_large.jpg',
        id: 475558,
        overview:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis in quos impedit? Iure officia fugit nostrum blanditiis! Blanditiis voluptatem consectetur, eos fugiat explicabo maiores, optio perferendis rem quas perspiciatis quos?",
        poster_path: './images/Fast_small.jpg',
        title: "Fast and Furious"
      },
      {
        backdrop_path: './images/Fast_large.jpg',
        id: 475559,
        overview:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis in quos impedit? Iure officia fugit nostrum blanditiis! Blanditiis voluptatem consectetur, eos fugiat explicabo maiores, optio perferendis rem quas perspiciatis quos?",
        poster_path: './images/Fast_small.jpg',
        title: "Fast and Furious"
      },
      {
        backdrop_path: './images/Fast_large.jpg',
        id: 475554,
        overview:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis in quos impedit? Iure officia fugit nostrum blanditiis! Blanditiis voluptatem consectetur, eos fugiat explicabo maiores, optio perferendis rem quas perspiciatis quos?",
        poster_path: './images/Fast_small.jpg',
        title: "Fast and Furious"
      },
  ];
  

class Home extends Component {
    render() {
        return (
           <HeaderImag 
               title="Fast and Furious"
               overview="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum"
               imgSrc={'./images/Fast_large.jpg'}

           />
        )
    }
}

export { Home };