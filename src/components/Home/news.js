import React from "react";

export function News(props) {
    return (
        <div className="App mx-5">
            <h2 className="text-dark">Discover Our News Section</h2>
            <div className="container my-5 mx-3">

                <div className="section1 mt-3">
                    <h3>Get Updates on the World!</h3>

                    <div className="blog border p-5 shadow bg-body rounded my-4">
                        <div className="title border-bottom border-dark">
                            <h4>Lorem, ipsum dolor.</h4>
                        </div>
                        <div className="para my-3">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed ad neque cupiditate aut minus velit aspernatur adipisci illo alias sunt ut accusantium, omnis totam quam corrupti nesciunt, amet voluptates incidunt eligendi magni? Voluptatem enim in nisi debitis sequi quaerat facilis, reprehenderit non molestiae ratione a ex natus, facere nesciunt </p>
                        </div>
                    </div>

                    <div className="blog border p-5 shadow bg-body rounded my-4">
                        <div className="title border-bottom border-dark">
                            <h4>Lorem, ipsum dolor.</h4>
                        </div>
                        <div className="para my-3">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sed ad neque cupiditate aut minus velit aspernatur adipisci illo alias sunt ut accusantium, omnis totam quam corrupti nesciunt, amet voluptates incidunt eligendi magni? Voluptatem enim in nisi debitis sequi quaerat facilis, reprehenderit non molestiae ratione a ex natus, facere nesciunt </p>
                        </div>
                    </div>
                    
                </div>
                

            </div>

            <h4 className="d-flex justify-content-end mx-5">...Liked It! <span><a href="#">Explore More</a></span></h4>
        </div>
    );
  }
  
  export default News;