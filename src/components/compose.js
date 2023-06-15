import React from "react"
import axios from "axios"

export function Compose(){
    var f_type=""
    var f_title=""
    var f_para=""
    
    const handleChange=()=>{
        let type=""
        let title=""
        let para=""
        
        type=type+document.getElementById("type").value
        title=title+document.getElementById("title").value
        para=para+document.getElementById("para").value
        f_type=type
        f_title=title
        f_para=para
    }
    const handelClick=()=>{
        const posts={f_type, f_title, f_para}
        console.log(posts)
        axios.post('https://blog-backend-ankit723.onrender.com/compose', posts)
        .then(res=>alert(res.data.message))

        .catch(err=>{
            console.log(err)
        })

    }
    return(
        <div className="App">
            <div className="container">
                <h1>COMPOSE</h1>
                <form>
                    <label for="type" style={{marginTop: "2rem", fontSize: "2rem"}}>Type</label>
                    <br/>
                    <textarea name="type" id="type" cols="105" rows="1" placeholder="Astrophysics" onChange={handleChange}></textarea>
                    
                    <br />

                    <label for="title" style={{marginTop: "2rem", fontSize: "2rem"}}>Title</label>
                    <br/>
                    <textarea name="title" id="title" cols="105" rows="1" placeholder="What was before the Big Bang?" onChange={handleChange}></textarea>
                    
                    <br/>

                    <label for="para" style={{marginTop: "2rem", fontSize: "2rem"}}>Para</label>
                    <br/>
                    <textarea name="para" id="para" cols="105" rows="10" onChange={handleChange}></textarea>

                    <br/>

                    <a href="http://localhost:3000/#/blog" className="btn btn-primary" onClick={handelClick}>Post</a>
                </form>
            </div>
        </div>
    )
}