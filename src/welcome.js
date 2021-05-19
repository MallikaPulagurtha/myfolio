import React from "react"
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Welcome() {

    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                <a class="nav-item nav-link navbar-brand link" href="/"><img className="mylogo" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNTAwcHgiIGhlaWdodD0iNDYycHgiIHZpZXdCb3g9IjAgMCA1MDAgNDYyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1OSAoODYxMjcpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPlNoYXBlPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IkJyYW5kLXYyIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8cGF0aCBkPSJNNDMwLjQyNjAxNSwxNDQuNzcwMTE1IEM0MDQuOTY1OTY5LDE0NC43NzAxMTUgMzgxLjUyMjU2MSwxNTguNjc4MTYxIDM2OS4yOTY2OTgsMTgxLjE4MzkwOCBMMzMyLjExNDk0OCwyNDkuNTg2MjA3IEwzMDAuODU3MDcxLDE5MS41NTE3MjQgQzI4NS4yMjgxMzIsMTYwLjcwMTE0OSAyNDEuMzY2MjcyLDE1Ni42NTUxNzIgMjI1LjQ4NTI1MywxODcuMzc5MzEgTDE5Mi43MTQ4OTgsMjUwLjcyNDEzOCBMMTQzLjMwNzI4NSwxNTguOTMxMDM0IEw4NC4wNjg1NjU3LDE1OC41NTE3MjQgTDE1NC45MDI5NDksMjkzLjMzMzMzMyBDMTY5LjkwMTY4OSwzMjEuOTA4MDQ2IDIxMC4zNjA0NzQsMzIyLjQxMzc5MyAyMjYuMjQxNDkyLDI5NC4zNDQ4MjggTDI2MS41MzI2NDQsMjMxLjYzMjE4NCBMMjk1LjgxNTQ3OCwyOTQuMjE4MzkxIEMzMTEuMTkyMzM3LDMyMi4yODczNTYgMzUxLjUyNTA4MiwzMjIuNDEzNzkzIDM2Ni45MDE5NDEsMjk0LjM0NDgyOCBMNDE0LjkyMzExNiwyMDcuMzU2MzIyIEM0MjMuNjE5ODY0LDE5MS41NTE3MjQgNDQ3LjQ0MTM5MSwxOTcuNzQ3MTI2IDQ0Ny40NDEzOTEsMjE1LjcwMTE0OSBMNDQ3LjU2NzQzMSwzMzEuMzkwODA1IEM0NDcuNTY3NDMxLDM3NC4zNzkzMSA0MTIuNjU0Mzk5LDQwOS40MDIyOTkgMzY5LjgwMDg1Nyw0MDkuNDAyMjk5IEwxMzAuNDUxMjIzLDQwOS40MDIyOTkgQzg3LjU5NzY4MDksNDA5LjQwMjI5OSA1Mi42ODQ2NDgzLDM3NC4zNzkzMSA1Mi42ODQ2NDgzLDMzMS4zOTA4MDUgTDUyLjY4NDY0ODMsMTMwLjg2MjA2OSBDNTIuNjg0NjQ4Myw4Ny44NzM1NjMyIDg3LjU5NzY4MDksNTIuODUwNTc0NyAxMzAuNDUxMjIzLDUyLjg1MDU3NDcgTDQ1MS42MDA3MDYsNTIuODUwNTc0NyBMNDUxLjYwMDcwNiwwIEwxMzAuNDUxMjIzLDAgQzU4LjQ4MjQ4MDUsMCAwLDU4LjY2NjY2NjcgMCwxMzAuODYyMDY5IEwwLDMzMS4xMzc5MzEgQzAsNDAzLjQ1OTc3IDU4LjM1NjQ0MDYsNDYyIDEzMC40NTEyMjMsNDYyIEwzNjkuNTQ4Nzc3LDQ2MiBDNDQxLjY0MzU1OSw0NjIgNTAwLDQwMy40NTk3NyA1MDAsMzMxLjEzNzkzMSBMNTAwLDIyMy4xNjA5MiBMNTAwLDIxNC41NjMyMTggQzUwMCwxNzYgNDY4Ljg2ODE2MiwxNDQuNzcwMTE1IDQzMC40MjYwMTUsMTQ0Ljc3MDExNSBaIiBpZD0iU2hhcGUiIGZpbGw9IiM3NTEwRjciIGZpbGwtcnVsZT0ibm9uemVybyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjUwLjAwMDAwMCwgMjMxLjAwMDAwMCkgc2NhbGUoMSwgLTEpIHRyYW5zbGF0ZSgtMjUwLjAwMDAwMCwgLTIzMS4wMDAwMDApICI+PC9wYXRoPgogICAgPC9nPgo8L3N2Zz4=" /></a>
                <div class="navbar-collapse collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav navbar-nav ml-auto" >
                        <a class="nav-item nav-link navbar-brand link" href="#about">About</a>
                        <a class="nav-item nav-link navbar-brand link myprojects" href="#projects">Projects</a>
                    </div>
                </div>
            </nav>

            {/* <!-- ======= Hero Section ======= --> */}
            <section id="hero" class="d-flex flex-column align-items-center justify-content-center Title">
                <div className="main">Mallika Pulagurtha</div>
                <hr />
                <div className="sub">Ay! I'm on vacation, every single day, cause I love my occupation.</div>
                <div className="row calltoaction">
                    <div className="col col-lg-6 center"><a href="https://drive.google.com/file/d/1cjBmeefeDuyjMgsoH5DBh8PPeH7v1E7D/view?usp=sharing" target="_blank"><button className="btn btn-light text-white bg-transparent mainbuttons m-2">View Resume</button></a></div>
                    <div className="col col-lg-6 center"><a href="#projects"><button className="btn btn-light text-dark mainbuttons m-2">Go to Projects</button></a></div>
                </div>
                <a href="#about" class="btn-get-started scrollto"><i class="fas fa-angle-down fa-2x"></i></a>
            </section>

            <main id="main">
                {/* <!-- ======= About Section ======= --> */}
                <section id="about" class="about">
                    <div class="container">
                        <div class="row">
                            <div className="col col-lg-4 center"><img className="mypicture center center2" src={process.env.PUBLIC_URL + "./mallika_photo.jpg"} /></div>
                            <div className="col col-lg-8">
                                <div class="d-flex align-items-stretch">
                                    <div class="content d-flex flex-column justify-content-center">
                                        <h2>Me.</h2>
                                        <span class="myintro developer">Full Stack Web Developer</span>
                                        <p class="myintro">The creative little one, who loves coding and designing anything and everything beautifully, minimalistic, promissing effortless handling, yet unique at the same time.</p><br />
                                        {/* <p class="myintro"><i>"I can't imagine anything worthwhile than doing what I love the most!"</i></p> */}
                                        <div className="myskills">
                                            <img className="myskillset" src={process.env.PUBLIC_URL + "./writing.png"} />
                                            <img className="myskillset" src={process.env.PUBLIC_URL + "./painting.png"} />
                                            <img className="myskillset" src={process.env.PUBLIC_URL + "./designing.png"} />
                                            <img className="myskillset" src={process.env.PUBLIC_URL + "./creative.png"} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <!-- ======= Skills Section ======= --> */}
                <section id="services" class="services section-bg">
                    <div class="container">
                        <div class="section-title">
                            <h2>Skills</h2>
                            <p>Aimed at expertising the technologies including, Frontend, middlware, all the way to the backend and databases, also industries most required and design technologies in addition.</p>
                        </div>

                        <div className="myskills center2">
                            <img src="https://cdn.worldvectorlogo.com/logos/javascript.svg" className="technologies"></img>
                            <img src="https://cdn.worldvectorlogo.com/logos/react-1.svg" className="technologies"></img>
                            <img src="https://cdn.worldvectorlogo.com/logos/html5.svg" className="technologies"></img>
                            <img src="https://cdn.worldvectorlogo.com/logos/css3.svg" className="technologies"></img>
                            <img src="https://cdn.worldvectorlogo.com/logos/bootstrap-4.svg" className="technologies"></img>
                            <img src="https://cdn.worldvectorlogo.com/logos/nodejs-2.svg" className="technologies"></img>
                            <img src="https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" className="technologies"></img>
                            <img src="https://cdn.worldvectorlogo.com/logos/mysql-6.svg" className="technologies"></img>
                            <img src="https://cdn.worldvectorlogo.com/logos/aws-2.svg" className="technologies"></img>
                            {/* <img src="https://cdn.worldvectorlogo.com/logos/netlify.svg" className="technologies"></img> */}
                            {/* <img src="https://cdn.worldvectorlogo.com/logos/heroku-4.svg" className="technologies"></img> */}
                            <img src="https://cdn.worldvectorlogo.com/logos/figma-1.svg" className="technologies"></img>
                            <img src="https://cdn.worldvectorlogo.com/logos/adobe-xd-1.svg" className="technologies"></img>
                            <img src="https://cdn.worldvectorlogo.com/logos/adobe-illustrator-cc.svg" className="technologies"></img>
                        </div>
                    </div>
                </section>

                {/* <!-- ======= Portfolio Section ======= --> */}
                <section id="projects" class="portfolio section-bg">
                    <div class="container">
                        <div class="section-title">
                            <h2>Projects</h2>
                            <p>Here is the list of some of my recent projects that I developed using all the technologies I have grapsed so far.</p>                        </div>
                        <div class="row portfolio-container">
                            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div class="portfolio-wrap">
                                    <img className="projectdisplay" src={process.env.PUBLIC_URL + "./pizza.jpg"} />
                                    <div class="portfolio-info">
                                        <h4>PIZZA DELIVERY</h4>
                                        <p className="projectdes">Fully responsive web application with a personal user dashboard, products that are customisable for the best experience ever!</p>
                                        <p>React, Node, Express, Mongo</p>
                                        <a href="https://github.com/MallikaPulagurtha/pizzadelivery" target="_blank"><button className="btn btn-light text-white bg-transparent small m-2">View Code</button></a>
                                        <a href="https://pizzadeliveryapplication.herokuapp.com/" target="_blank"><button className="btn btn-light text-white bg-transparent small m-2">Website</button></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div class="portfolio-wrap">
                                    <img className="projectdisplay" src={process.env.PUBLIC_URL + "./ecommerce.jpg"} />
                                    <div class="portfolio-info">
                                        <h4>E-COMMERCE</h4>
                                        <p className="projectdes">An e-commerce website, wherein users can login/register and can buy varied styles of art, all the way from sketches to silhouettes.</p>
                                        <p>React, Node, Express, Mongo</p>
                                        <a href="https://github.com/MallikaPulagurtha/ecommerce-FE" target="_blank"><button className="btn btn-light text-white bg-transparent small m-2">View Code</button></a>
                                        <a href="https://malli-ecommerce-fe.herokuapp.com/" target="_blank"><button className="btn btn-light text-white bg-transparent small m-2">Website</button></a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div class="portfolio-wrap">
                                    <img className="projectdisplay" src={process.env.PUBLIC_URL + "./shorturl.jpg"} />
                                    <div class="portfolio-info">
                                        <h4>URL SHORTENER</h4>
                                        <p className="projectdes">An application that converts the long URL porvided by the user into a substantially shorter link that directs to the required page.</p>
                                        <p>React, Node, Express, Mongo</p>
                                        <a href="https://github.com/MallikaPulagurtha/url-frontend" target="_blank"><button className="btn btn-light text-white bg-transparent small m-2">View Code</button></a>
                                        <a href="https://urlshortenerfe.herokuapp.com/" target="_blank"><button className="btn btn-light text-white bg-transparent small m-2">Website</button></a>

                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                                <div class="portfolio-wrap">
                                    <img className="projectdisplay" src={process.env.PUBLIC_URL + "./spotify.jpg"} />
                                    <div class="portfolio-info">
                                        <h4>SPOTIFY CLONE</h4>
                                        <p className="projectdes">Extracted my playlist from the Spotify app using Api following the guidelines provided and designed the Interface.</p>
                                        <p>Javascript DOM, Spotify developer API</p>
                                        <a href="https://github.com/MallikaPulagurtha/spotifyclone" target="_blank"><button className="btn btn-light text-white bg-transparent small m-2">View Code</button></a>
                                        <a href="https://adoring-hypatia-bf1482.netlify.app/" target="_blank"><button className="btn btn-light text-white bg-transparent small m-2">Website</button></a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section >

                {/* <!-- ======= Contact Section ======= --> */}
                <section id="contact" class="contact section-bg">
                    <div class="container">

                        <div class="section-title">
                            <h2>Contact</h2>
                            <p className="center">Interested in working together? I'd love to hear from you. </p>
                        </div>
                        <div class="contact-about center">
                            <div class="social-links">
                                {/* <a href="https://www.facebook.com/mallika.pulagurtha" target="_blank"><i class="fab fa-facebook social"></i></a> */}
                                {/* <a href="https://www.instagram.com/malli._.arts/" target="_blank"><i class="fab fa-instagram social"></i></a> */}
                                <a href="https://www.linkedin.com/in/mallika-pulagurtha-75bb4a1b1/" target="_blank"><i class="fab fa-linkedin social"></i></a>
                                <a href="https://github.com/MallikaPulagurtha" target="_blank"><i class="fab fa-github social"></i></a>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- End Contact Section --> */}

            </main >

            {/* <!-- End #main --> */}

            {/* <!-- ======= Footer ======= --> */}
            <footer id="footer">
                <div class="container">
                    <div class="credits">
                        <h5>Designed by Mallika with &hearts;</h5>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Welcome;