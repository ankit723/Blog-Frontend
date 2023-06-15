import React from 'react'

export function Blogpost(props){
    return(
        <div className="App">
            <div className="section1 mt-3">
                    <h3>{props.type}</h3>

                    <div className="blog border p-5 shadow bg-body rounded my-4">
                        <div className="title border-bottom border-dark">
                            <h4>{props.title}</h4>
                        </div>
                        <div className="para my-3">
                            <p>{props.para}</p>
                        </div>
                    </div>
                    
                </div>
        </div>
    )
}

export default Blogpost