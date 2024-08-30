import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css'; // Make sure Bootstrap CSS is imported
import './pagination.css'
const MyProjects = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [card1src, setcard1src] = useState("../../images/INT1.jpg")
    const [card2src, setcard2src] = useState("../../images/INT3.png")
    const [card3src, setcard3src] = useState("../../images/INT2.jpg")

    function cardover(e){
        switch (e.currentTarget.id){
            case 'card1':
                setCurrentPage(1);

            break;
            case 'card2':
                setCurrentPage(2);
                break;
            case 'card3':
                setCurrentPage(3);
                break;
        }
    }

    const renderContent = () => {
        switch (currentPage) {
            case 1:
                return (
                    <div className="mt-4 p-4">
                        <span className="text-decoration-underline text-primary">Industrial Automation Specialist</span>
                        <h2>CRISP Bhopal</h2>
                        <span>About Training :-</span>
                        <div className="text-indent">
                            <p className="about-text">
                                "I worked as an Industrial Automation Specialist at CRISP Bhopal for 3 months. During this time, I gained experience in industrial automation technologies and worked on various projects related to automation and control systems."
                            </p>
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div className="mt-4 p-4">
                        <span className="text-decoration-underline text-primary">Mern Developer</span>
                        <h2>Naresh I Technology Hyderabad</h2>
                        <span>About Training :-</span>
                        <div className="text-indent">
                            <p className="about-text">
                                "I am currently undergoing training at Naresh I Technology in Hyderabad, where I am specializing in UI Full Stack Development with React.js. Throughout this 6-month course, I have gained expertise in front-end technologies, including HTML5, CSS, Bootstrap, jQuery, JavaScript, and React.js. On the backend, I have learned how to create servers using Node.js and Express, and I have also worked with MongoDB for database management."
                            </p>
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div className="mt-4 p-4">
                        <span className="text-decoration-underline text-primary">Frontend Developer</span>
                        <h2>Shastri IAS Institute Bhopal</h2>
                        <span>About Training :-</span>
                        <div className="text-indent">
                            <p className="about-text">
                                "At Shastri IAS Institute Bhopal, I worked as a Frontend Web Developer. My responsibilities included designing and implementing responsive web interfaces, optimizing web pages for performance, and ensuring cross-browser compatibility."
                            </p>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };
    return (
        <div className="pagination-container container-fluid">
            <div className="container-IT  d-flex flex-wrap">
                {/* Cards */}
                <div className="card m-2 text-center" id="card1" onMouseOver={cardover}>
                    <div className="card-header">
                        <img src={card2src}  alt="CRISP Bhopal"></img>
                    </div>
                    <div className="card-body">
                        <b><span>Industrial Automation Specialist</span></b>
                    </div>
                    <div className="card-footer">
                        <span>CRISP Bhopal (3 months) </span>
                        <span className="bi bi-arrow-right"></span>
                    </div>
                </div>
                <div className="card m-2 text-center " id="card2" onMouseOver={cardover}>
                    <div className="card-header">
                        <img src={card1src}  alt="Naresh IT"></img>
                    </div>
                    <div className="card-body">
                        <b><span>UI FullStack Development with ReactJS</span></b>
                    </div>
                    <div className="card-footer">
                        <span>Naresh IT, Hyderabad </span>
                        <span className="bi bi-arrow-right"></span>
                    </div>
                </div>
                <div className="card m-2 text-center" id="card3" onMouseOver={cardover}>
                    <div className="card-header">
                        <img src={card3src}  alt="Shastri IAS Institute"></img>
                    </div>
                    <div className="card-body">
                        <b><span>Frontend Web Developer </span></b>
                    </div>
                    <div className="card-footer">
                        <span>Shastri IAS Institute Bhopal </span>
                        <span className="bi bi-arrow-right"></span>
                    </div>
                </div>
            </div>
            <div className="">
               <div>
                    {renderContent()}
               </div>

                {/* Pagination Controls */}
                <div>
                <nav aria-label=" Page navigation example">
                    <ul className="pagination justify-content-center">
                        <li className={`page-item ${currentPage === 1 ? "active" : ""}`}>
                            <button className="page-link" onClick={() => setCurrentPage(1)}>1</button>
                        </li>
                        <li className={`page-item ${currentPage === 2 ? "active" : ""}`}>
                            <button className="page-link" onClick={() => setCurrentPage(2)}>2</button>
                        </li>
                        <li className={`page-item ${currentPage === 3 ? "active" : ""}`}>
                            <button className="page-link" onClick={() => setCurrentPage(3)}>3</button>
                        </li>
                    </ul>
                </nav>
                </div>
            </div>
        </div>
    );
};

export default MyProjects;


{/* <div className="row container-fluid">
                    <div className="container-IT col-7 d-flex flex-wrap ">
                        <div className="card m-2 text-center">
                            <div className="card-header">
                                <img src={card2src} width={200}></img>
                            </div>
                            <div className="card-body">
                                <b><span>Industrial Automation Specialist</span></b>
                            </div>
                            <div className="card-footer">
                                <span>CRISP Bhopal (3 months) </span>
                                <span className="bi bi-arrow-right"></span>
                            </div>
                        </div>
                        <div className="card m-2 text-center ">
                            <div className="card-header">
                                <img src={card1src} width={200}></img>
                            </div>
                            <div className="card-body">
                                <b><span>UI FullStack Development with ReactJS</span></b>
                            </div>
                            <div className="card-footer">
                                <span>Naresh IT, Hyderabad </span>
                                <span className="bi bi-arrow-right"></span>
                            </div>
                        </div>
                        <div className="card m-2 text-center">
                            <div className="card-header">
                                <img src={card3src} width={200}></img>
                            </div>
                            <div className="card-body">
                                <b><span>Frontend Web Developer </span></b>
                            </div>
                            <div className="card-footer">
                                <span>Shastri IAS Institute Bhopal </span>
                                <span className="bi bi-arrow-right"></span>
                            </div>
                        </div>
                       
                    </div>
                    <div className="col-5">
                        <div className="mt-4">
                            <h2>Naresh I Technology Hyderabad</h2>
                            <span>About Training :-</span>
                            <div className="text-indent">
                                    <p className="about-text">
                                    "I am currently undergoing training at Naresh I Technology in Hyderabad, where I am specializing in UI Full Stack Development with React.js. Throughout this 6-month course, I have gained expertise in front-end technologies, including HTML5, CSS, Bootstrap, jQuery, JavaScript, and React.js. On the backend, I have learned how to create servers using Node.js and Express, and I have also worked with MongoDB for database management."
                                    </p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h2>Naresh I Technology Hyderabad</h2>
                            <span>About Training :-</span>
                            <div className="text-indent">
                                    <p className="about-text">
                                    "I am currently undergoing training at Naresh I Technology in Hyderabad, where I am specializing in UI Full Stack Development with React.js. Throughout this 6-month course, I have gained expertise in front-end technologies, including HTML5, CSS, Bootstrap, jQuery, JavaScript, and React.js. On the backend, I have learned how to create servers using Node.js and Express, and I have also worked with MongoDB for database management."
                                    </p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <h2>Naresh I Technology Hyderabad</h2>
                            <span>About Training :-</span>
                            <div className="text-indent">
                                    <p className="about-text">
                                    "I am currently undergoing training at Naresh I Technology in Hyderabad, where I am specializing in UI Full Stack Development with React.js. Throughout this 6-month course, I have gained expertise in front-end technologies, including HTML5, CSS, Bootstrap, jQuery, JavaScript, and React.js. On the backend, I have learned how to create servers using Node.js and Express, and I have also worked with MongoDB for database management."
                                    </p>
                            </div>
                        </div>
                    </div>
                </div> */}
