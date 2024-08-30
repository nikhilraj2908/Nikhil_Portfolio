import React, { useEffect, useRef, useState } from "react";
import { Carousel } from "react-bootstrap";
import "./portfolio.css";
import { Footer } from "../footer/footer"
import { Header } from '../header/header'
import MyProjects from "../pagination/pagination";

export function Portfolio(props) {
    const [dp, setimg] = useState("../../images/Dp.png");
    const [name, setname] = useState("Nikhil Ahirwar");
    const [image, setimage] = useState("/images/node.png")
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cardimg, setcardimg] = useState([
        "../../images/html.png",
        "../../images/css.png",
        "../../images/javascript.png",
        "../../images/react.png",
        "../../images/node.png",
        "../../images/mongo.webp"
    ]);
    const [btnshow, setbtnshow] = useState("none")
    const [aboutMe] = useState("../../images/me.jpg");
    const carouselRef = useRef("none"); // Reference to the carousel
    const [text, settext] = useState("My_Learnings")
    const [IandT, setIandT] = useState("Internship_And_Training")
    const [discriptionsty, setdiscriptionsty] = useState({ display: "none" })
    const [cardsty, setcardsty] = useState({ display: "block" })
    const [extra, setextra] = useState("")

    function btnover(index) {
        setbtnshow("inline")
        setCurrentIndex(index)
    }
    function btnout(e) {
        setbtnshow("none")
    }
    function discriptionOver(e) {
        setdiscriptionsty({ display: "block" })
        setcardsty({ display: "none" })
    }
    function discriptionOut() {
        setdiscriptionsty({ display: "none" })
        setcardsty({ display: "block" })
    }
    return (
        <div className={`container-fluid ${props.mode}` }>
            <section className="section-intro">
                <div className="user-details">
                    <div className="title-Name">
                        <h1>{name}</h1>
                    </div>
                    <div className="designation">
                        <h6 >MERN STACK DEVELOPER</h6>
                    </div>
                    <p >
                        Motivated and growth-oriented professional aiming to join a dynamic organization where I can utilize my skills to drive success and innovation. Also, I want challenging opportunities where I can fully use my skills for the success of the organization.
                    </p>
                    <div className="contact-icon">
                        <a className="bi bi-telephone-outbound-fill" href="tel:+918821051303" ></a>
                        <a className="bi bi-envelope-fill" href="mailto:Nikhilraj2908@gmail.com"></a>
                        <a className="bi bi-github" href="https://github.com/nikhilraj2908"></a>
                        <a className="bi bi-linkedin" href="https://www.linkedin.com/in/nikhil-ahirwar-311399241/?originalSubdomain=in"></a>
                        <a className="bi bi-instagram" href="https://www.instagram.com/02nikhil_raj_/"></a>
                    </div>
                    <br />
                    <span>
                        <button className="btn btn-success"><a href="Nikhil_A.pdf" download className="text-decoration-none text-light">Download_CV</a></button>
                    </span>
                    <span>
                        <button className="btn btn-primary mx-2">Discover Now</button>
                    </span>
                </div>
                <div>
                    <div className="user-image">
                        <img src={dp} className="img-fluid" alt="user image" />
                    </div>
                </div>
            </section>
            <hr />
            <section >
                <div className="section-about p-2 d-flex">
                    <div>
                        <span className="about-img">
                            <img src={aboutMe} alt="About Me" />
                        </span>
                    </div>
                    <div className="px-4 more-details">
                        <div >
                            <h1>Let's know more about me</h1>
                        </div>
                        <div>
                            <p className="about-text">
                                Hello I am <b>Nikhil Ahirwar</b>, welcoming you on my portfolio website. I would like to start by telling you about my technical skills so, my technical skills includes HTML5, CSS3, Bootstrap, Javascript, JQuery and React JS in frontend development, and in backend development I know about NodeJS and express JS and in terms of database I prefer MongoDB but little bit knoowledge of MySQL as well. Apart from web I know some languages like C/C++ and python. I am happy to tell you that not only in technical but also in soft skills I found my self lucky as I am a national player, poet and also an ex-ncc cadet. because of these all versatile activities my college honored me as <b>"Best-All-Rounder"</b> award-2023. hope you are willing to know more about me.
                            </p>
                            <br />
                            <Carousel indicators={false} ref={carouselRef} interval={3000}>
                                <Carousel.Item>
                                    <div style={{ textAlign: "center" }}>
                                        <h4>Bachelor of Technology in Electronics and Communication Engineering</h4>
                                        <h6>Samrat Ashok Technological Institute</h6>
                                        <div>
                                            <span className="me-4">CGPA: 8.14</span>
                                            <span>Passout year - 2023</span>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div style={{ textAlign: "center" }}>
                                        <h4>Higher Secondary Education</h4>
                                        <h6>Govt school of excellence</h6>
                                        <div>
                                            <span className="me-4">Score: 82%</span>
                                            <span>Passout year - 2019</span>
                                        </div>
                                    </div>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <div style={{ textAlign: "center" }}>
                                        <h4>High Schooling Education</h4>
                                        <h6>Saraswati Shishu Mandir</h6>
                                        <div>
                                            <span className="me-4">Score: 88.83%</span>
                                            <span>Passout year - 2017</span>
                                        </div>
                                    </div>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        <br />
                        <span className="container-more-details">
                            <button className=" btn-more-details btn btn-success " data-bs-toggle="modal" data-bs-target="#read_more_modal">Click to Know More</button>
                        </span>
                        <div className="modal fade" id="read_more_modal">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h3>More about me</h3>
                                    </div>
                                    <div className="modal-body"></div>
                                    <div className="modal-footer"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </section>
            <section>
                <div className="waviy">
                    {text.split("").map((char, index) => (
                        <span key={index} style={{ "--i": index + 1 }}>
                            {char}
                        </span>
                    ))}
                </div>
                <br></br>
                <div className="section2-container d-flex justify-content-center">
                    <div id="left-aero" className="bi bi-caret-left-fill"></div>
                    <div className="card-container d-flex justify-content-between">
                        {cardimg.map((img, index) => (
                            <div key={index}>
                                <div id={`card ${index + 1}`} onMouseOut={() => btnout(index)} onMouseOver={() => btnover(index)} className='card-style '>
                                    <div className="card-img">
                                        <img src={img} alt={`Card ${index + 1}`} />
                                        {index === currentIndex &&
                                            <button className={`btn btn-warning`}
                                                style={{
                                                
                                                    display: `${btnshow}`,
                                                    marginTop: "-120px"
                                                }}
                                            >know More</button>
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div id="right-aero" className="bi bi-caret-right-fill"></div>
                </div>
            </section>
            <br></br>
            <hr></hr>
            <section>
                <div className="waviy">
                    {IandT.split("").map((char, index) => (
                        <span key={index} style={{ "--i": index + 1 }}>
                            {char}
                        </span>
                    ))}
                </div>
                <br></br>
            <MyProjects></MyProjects>
            </section>
            <hr></hr>
        
        </div>
    );
}
