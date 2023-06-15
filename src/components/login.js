import React from 'react'
import { redirect } from 'react-router-dom'
import axios from 'axios'

export function Login(){
    var f_email=""
    var f_password=""
    
    const handleChange=()=>{
        let email=""
        let password=""

        email=email+document.getElementById("email").value
        password=password+document.getElementById("password").value
        f_email=email
        f_password=password
    }
    const handelClick=()=>{
        const posts={f_email, f_password}
        console.log(posts)
        axios.post('http://localhost:9000/login', posts)
        .then(res=>{
            alert(res.data.message)
            window.location.href="http://localhost:3000/#/compose"
        })

        .catch(err=>{
            console.log(err)
        })

    }
    return(
        <main class="form-signin w-100 m-auto">
            <form>
                <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
            
                <div class="form-floating">
                    <input type="email" class="form-control" id="email" placeholder="a@b.com" onChange={handleChange}/>
                    <label for="floatingInput">email</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="password" placeholder="Password" onChange={handleChange}/>
                    <label for="floatingPassword">Password</label>
                </div>
            
                <a class="btn btn-primary w-100 py-2" type="submit" onClick={handelClick}>Sign in</a>
                <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
            </form>
        </main>
    )
}

export default Login