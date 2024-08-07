import Image from "next/image";

export default function Home() {
  return (
    <main >
      <div className="header">
            <div className="eye">  
                <div className="pupile"></div>          
            </div>
            <nav className="mainNav container">
                <a href="#RESUME" className="selected">Resumen</a>
                <a href="#PORTFOLIO">Portafolio</a>
                <a href="#SKILLS">Skills</a>
            </nav>
        </div>
        <div className="zero container">
            <div className="main">
                <div className="presentation">
                    <div className="title">
                        <h1>Mauricio Romero</h1>
                        <div className="animated">
                            <h2 id="movingtext">FullStack developer</h2>
                            <div id="bar" className="bar"></div>
                        </div>
                        <p>and a french fries lover.</p>
                    </div>
                    <div className="content">
                         <p>Full Stack Web developer who loves to learn new frameworks from front to back-end, 
                            more interested in the back-end coding and really interested in the whole designing, 
                            implementing and maintaining web projects.</p>
                    </div>
                </div>
                <div className="side-section">
                    <div className="person-image">
                        <Image src="/my_photo.jpg" width="400" height="100" alt="photo"/>
                    </div>
                    <div className="social-media">
                        <a target="_blank" href="https://github.com/MauIR42?tab=repositories"><Image src="/logos/social-media/github.svg" width="200" height="200" className="social" alt="social"/></a>
                        <a target="_blank" href="https://www.linkedin.com/in/mauricio-isaac-romero-ponce-295b77183?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BM%2Br2mN%2BPT6ObGPu%2B63fkkQ%3D%3D">
                            <Image src="/logos/social-media/linkedin.svg" className="social" alt="linkedInLogo" width="200" height="200"/>
                        </a>
                        <a target="_blank" href="mailto:mauricio.isaac.romero.ponce@gmail.com">
                            <Image src="/logos/social-media/email.svg" className="social" alt="emailLogo" width="200" height="200" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        
        
        <div  className="resume">
            <div className="container small ">
                <h2>Employment History</h2>
                <div className="roadmap">
                    <div className="road-row">
                        <div className="experience">
                            <p className="title">Computer Systems Engineering</p>
                            <div className="basic">
                                <p><b>Type:</b> Studies</p>
                                <div className="place">
                                    <p> <b>Institute:</b> Escuela Superior de Cómputo (ESCOM)</p>
                                    <p> Instituto Politécnico Nacional (IPN)</p>
                                </div>
                                <div className="direction"><b>Direction:</b> Mexico City</div>
                                <div className="dates">
                                    <p> <b>From:</b> august 2016 <b>To:</b> December 2021 </p>
                                </div>
                            </div>
                            <div className="description active">
                                <p>One of the best places where I have studied. Here I developed my skills on embbeded systems and on web development. 
                                    My last project which I graduated with, was a web application with Angular and Django, this app used users grocery's information 
                                    ( web app and an embbeded system scale to upload the information) and what the user likes ( recommendation system with fuzzy system )
                                    to recommend recipies.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="road-row">
                        <div className="road left">
                        </div>
                        <div className="experience ">
                            <p className="title">Web developer</p>
                            <div className="basic">
                                <p><b>Type:</b> Job</p>
                                <div className="place">
                                    <p className="place"><b>Work Place:</b> Go Sharp</p>
                                </div>
                                <div className="direction"><b>Direction: </b>Mexico City</div>
                                <div className="dates">
                                    <p> <b>From:</b> July 2019 <b>To:</b> January 2021 </p>
                                </div>
                            </div>
                            <div className="description active">
                                <p>Migration of code implementation from Django or Angular JS to Angular (9-14) and 
                                    Django Rest, while fixing bugs in previous and current app version. 
                                    Implementation of new technologies such as Celery to redis for backend forms 
                                    validations with database, upload documents to Amazon S3 or Azure Blob storage.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="road-row">
                        <div className="experience">
                            <p className="title">Head of web development</p>
                            <div className="basic">
                                <p> <b>Type:</b> Job</p>
                                <div className="place">
                                    <p className="place"><b>Work Place:</b> Go Sharp</p>
                                </div>
                                <div className="direction"><b>Direction:</b> Mexico City</div>
                                <div className="dates">
                                    <p><b>From:</b> January 2021  Present </p>
                                </div>
                            </div>
                            <div className="description active">
                                <p>Migration of code implementation from Django or Angular JS to Angular (9-14) and 
                                    Django Rest, while fixing bugs in previous and current app version. 
                                    Implementation of new technologies such as Celery to redis for backend forms 
                                    validations with database, upload documents to Amazon S3 or Azure Blob storage.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div >
        <div className="portfolio container">
            <h2>Portfolio</h2>
            <div className="main ">
                <div className="card">
                    <Image src="/mock_project.gif" alt="portfolioElement" width="200" height="200"/>
                    <div className="main-content">
                        <h3>Portfolio</h3>
                        <div className="technologies">
                            <Image src="/logos/frameworks/mongodb.svg" alt="techonology" width="200" height="200"/>
                            <Image src="/logos/frameworks/express.svg" alt="techonology" width="200" height="200"/>
                            <Image src="/logos/frameworks/angular.svg" alt="techonology" width="200" height="200"/>
                            <Image src="/logos/frameworks/node.svg" alt="techonology" width="200" height="200"/>
                        </div>
                        <div className="technologies">
                            <Image src="/logos/languages/typescript.svg" alt="language" width="200" height="200"/>
                            <Image src="/logos/languages/javascript.svg" alt="language" width="200" height="200"/>
                        </div>
                        <div className="description">
                            <p>This template! Explore inside the code to check if you like how the code was done, also you can reuse it if you like.</p>
                        </div>
                        <button className="btn"> Check repository </button>
                    </div>
                </div>
            </div>
        </div >

        <div  className="skills-section container">
            <h2>Skills</h2>
            <div className="skills">
                <div className="section white">
                    <p className="title">Languages</p>
                    <div className="skill">
                        <p>Typescript</p>
                        <Image src="/logos/languages/typescript.svg" alt="skill" width="200" height="200"/>
                    </div>
                    <div className="skill">
                        <p>Javascript</p>
                        <Image src="/logos/languages/javascript.svg" alt="skill" width="200" height="200"/>
                    </div>
                    <div className="skill">
                        <p>Python</p>
                        <Image src="/logos/languages/pythonc.svg" className="normal" alt="skill" width="200" height="200"/>
                    </div>
                    <div className="skill">
                        <p>Golang</p>
                        <Image src="/logos/languages/golang.svg" className="normal" alt="skill" width="200" height="200"/>
                    </div>
                    <div className="skill">
                        <p>Git</p>
                        <Image src="/logos/languages/git.svg" className="normal" alt="skill" width="200" height="200"/>
                    </div>
                    <div className="skill">
                        <p>MongoDB</p>
                        <Image src="/logos/frameworks/mongoc.svg" className="normal" alt="skill" width="200" height="200"/>
                    </div>
                    <div className="skill">
                        <p>PSQL</p>
                        <Image src="/logos/languages/postgresql.svg" className="normal" alt="skill" width="200" height="200"/>
                    </div>
                    <div className="skill">
                        <p>Sass</p>
                        <Image src="/logos/languages/sass.svg" alt="skill" width="200" height="200"/>
                    </div>
                    <div className="skill">
                        <p>CSS</p>
                        <Image src="/logos/languages/css.svg" alt="skill" width="200" height="200"/>
                    </div>
                    <div className="skill">
                        <p>HTML</p>
                        <Image src="/logos/languages/html.svg" alt="skill" width="200" height="200"/>
                    </div>
                </div>
                <div className="section white">
                    <p className="title">Frameworks</p>
                    <div className="skill">
                        <p>Angular</p>
                        <Image src="/logos/frameworks/angularc.svg" className="normal" alt="skill" width="200" height="200"/>
                    </div>
                    <div className="skill">
                        <p>React</p>
                        <Image src="/logos/frameworks/reactc.svg" className="normal" alt="skill" width="200" height="200"/>
                    </div>
                    <div className="skill">
                        <p>VueJs</p>
                        <Image src="/logos/frameworks/vuejsc.svg" className="normal" alt="skill" width="200" height="200"/>
                    </div>
                    <div className="skill">
                        <p>Express</p>
                        <Image src="/logos/frameworks/express.svg" alt="skill" width="200" height="200"/>
                    </div>
                    <div className="skill">
                        <p>NodeJs</p>
                        <Image src="/logos/frameworks/node.svg" alt="skill" width="200" height="200"/>
                    </div>
                    <div className="skill">
                        <p>Django</p>
                        <Image src="/logos/frameworks/django.svg" className="normal" alt="skill" width="200" height="200"/>
                    </div>
                </div>
                <div className="skills column">
                    <div className="section">
                        <p className="title">Cloud</p>
                        <div className="skill">
                            <p>AWS EC2</p>
                            <Image src="/logos/cloud/EC2.svg" alt="skill" width="200" height="200"/>
                        </div>
                        <div className="skill">
                            <p>AWS SES</p>
                            <Image src="/logos/cloud/SES.svg" alt="skill" width="200" height="200"/>
                        </div>
                        <div className="skill">
                            <p>AWS lambda</p>
                            <Image src="/logos/cloud/Lambda.svg" alt="skill" width="200" height="200"/>
                        </div>
                        <div className="skill">
                            <p>AWS S3</p>
                            <Image src="/logos/cloud/S3.svg" alt="skill" width="200" height="200"/>
                        </div>
                    </div>
                    <div className="section white normal">
                        <p className="title">Managment</p>
                        <div className="skill">
                            <p>Jira</p>
                            <Image src="/logos/cloud/jira.svg" alt="skill" width="200" height="200"/>
                        </div>
                        <div className="skill">
                            <p>Scrum</p>
                            <Image src="/logos/personal/scrum.svg" className="normal" alt="skill" width="200" height="200"/>
                        </div>
                    </div>
                </div>
                <div className="skills ">
                    <div className="section white">
                        <p className="title">Soft skills</p>
                        <div className="skill">
                            <p>Collaboration</p>
                            <Image src="/logos/personal/people.svg" className="normal" alt="skill" width="200" height="200"/>
                        </div>
                        <div className="skill">
                            <p>Time managment</p>
                            <Image src="/logos/personal/clock.svg" alt="skill" width="200" height="200"/>
                        </div>
                        <div className="skill">
                            <p>Planning</p>
                            <Image src="/logos/personal/map.svg" alt="skill" width="200" height="200"/>
                        </div>
                        <div className="skill">
                            <p>Setting goals</p>
                            <Image src="/logos/personal/goals.svg" alt="skill" width="200" height="200"/>
                        </div>
                        <div className="skill">
                            <p>Decision-making</p>
                            <Image src="/logos/personal/decision.svg" className="normal" alt="skill" width="200" height="200"/>
                        </div>
                        <div className="skill">
                            <p>Self-learning</p>
                            <Image src="/logos/personal/learn.svg" alt="skill" width="200" height="200"/>
                        </div>
                    </div>
                    <div className="section white normal">
                        <p className="title">Personal interests</p>
                        <div className="skill">
                            <p>Fantasy and Science-fiction books</p>
                            <Image src="/logos/interest/dragon.svg" alt="skill" width="200" height="200"/>
                        </div>
                        <div className="skill">
                            <p>Outdoor activites</p>
                            <Image src="/logos/interest/outdoor.svg" alt="skill" width="200" height="200"/>
                        </div>
                        <div className="skill">
                            <p>Videogames</p>
                            <Image src="/logos/interest/videogames.svg" alt="skill" width="200" height="200"/>
                        </div>
                        <div className="skill">
                            <p>Manga and anime</p>
                            <Image src="/logos/interest/manga.svg" className="normal" alt="skill" width="200" height="200"/>
                        </div>
                        <div className="skill">
                            <p>Embedded systems</p>
                            <Image src="/logos/interest/system.svg" alt="skill" width="200" height="200"/>
                        </div>
                        <div className="skill">
                            <p>Swimming</p>
                            <Image src="/logos/interest/swimming.svg" alt="skill" width="200" height="200"/>
                        </div>
                    </div>
                </div>
                <div className="skills small">
                    <div className="section white">
                        <p className="title">Personal interests</p>
                        <div className="skill">
                            <p>Fantasy and Science-fiction books</p>
                            <Image src="/logos/interest/dragon.svg " alt="skill" width="200" height="200"/>
                        </div>
                        <div className="skill">
                            <p>Outdoor activites</p>
                            <Image src="/logos/interest/outdoor.svg" alt="skill" width="200" height="200"/>
                        </div>
                        <div className="skill">
                            <p>Videogames</p>
                            <Image src="/logos/interest/videogames.svg" alt="skill" width="200" height="200"/>
                        </div>
                        <div className="skill">
                            <p>Manga and anime</p>
                            <Image src="/logos/interest/manga.svg" className="normal" alt="skill" width="200" height="200"/>
                        </div>
                        <div className="skill">
                            <p>Embedded systems</p>
                            <Image src="/logos/interest/system.svg" alt="skill" width="200" height="200"/>
                        </div>
                        <div className="skill">
                            <p>Swimming</p>
                            <Image src="/logos/interest/swimming.svg" alt="skill" width="200" height="200"/>
                        </div>
                    </div>
                </div>
                <div className="skills small">
                    <div className="section white">
                        <p className="title">Managment</p>
                        <div className="skill">
                            <p>Jira</p>
                            <Image src="/logos/cloud/jira.svg" alt="skill" width="200" height="200"/>
                        </div>
                        <div className="skill">
                            <p>Scrum</p>
                            <Image src="/logos/personal/scrum.svg" className="normal" alt="skill" width="200" height="200"/>
                        </div>
                    </div>
                </div>
            </div>
        </div >
        <footer className="footer ">
            <div className="eye">  
                <div className="pupile"></div>          
            </div>
            <div className="content">
                <h5>Contact me!</h5>
                <p>Author: Mauricio Romero</p>
                <p>Mail: mauricio.isaac.romero.ponce@gmail.com</p>
                <p>Phone: 55-75-52-14-38</p>
            </div>
        </footer>
    </main>
  );
}
