import React from "react";
import {Card, CardGroup} from "react-bootstrap";

const About = () => {
    return (
        <div className="container border border-dark mt-4">
            <div>
                <h1 className="mb-4">Leadership</h1>
            </div>
            <CardGroup className="mb-3">
            <Card className="m-3 border border-dark">
                <Card.Img variant="top" src="https://alistewartandco.com/coaching/wp-content/uploads/bigstock-Confident-business-woman-stand-62154614.jpg" className="img-fluid" />
                <Card.Body>
                    <Card.Title>CEO - Janet Mitchell</Card.Title>
                        <Card.Text>
                            Janet is an accomplished software executive with over 20 years experience in the software industry and President and CEO of 
                            Company X. Her previous executive positions include president and CEO of Company Y, Inc. and COO of Company Z, Inc. Janet spent 
                            eight years in various management positions for sales, consulting.  Sher earned her BA ineconomics from Rutgers University
                        </Card.Text>
                </Card.Body>
            </Card>
            <Card className="m-3 border border-dark">
                <Card.Img variant="top" src="https://img.freepik.com/free-photo/handsome-young-businessman-suit_273609-6513.jpg?w=2000" />
                <Card.Body>
                    <Card.Title>CFO - Shawn Simmons</Card.Title>
                    <Card.Text>
                    As executive vice president and chief financial officer (CFO), Shawn is responsible for all of the companys financial 
                    functions, including accounting, audit, treasury, corporate finance and investor relations. He also oversees and manages all human 
                    resources and facilities activities. His career spans more than 30 years of varied experience in financial management, business 
                    leadership and corporate strategy.  Shawn holds a Master of Business Administration from the University of Chicago, Booth School of 
                    Business and a Bachelor of Science in economics and finance from the University of Hartford.
                    </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
            <CardGroup className="mb-3">
            <Card  className="m-3 border border-dark">
                <Card.Img variant="top" src="https://invoice.ng/blog/wp-content/uploads/2018/11/Aliko-Dangote-Nigeria-Richest-Man.jpg" />
                <Card.Body>
                    <Card.Title>Sales and Marketing Director - Jacob Brown</Card.Title>
                    <Card.Text>
                    Jacob joined Company X in January 2018 as the Director of Sales and Marketing. He is responsible for the marketing, communication and business 
                    development efforts of the firm. In addition to strategic business development efforts, he directs media relations, branding, advertising 
                    and website development. He manages and oversees sponsorships, events, charitable contributions, marketing training and more.  He attended 
                    the American University in Cairo where he graduated magna cum laude with a B.A. in Mass Communications.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="m-3 border border-dark">
                <Card.Img variant="top" src="https://businesswomenexpo.in/assets/img/experience/experience-1.jpg" />
                <Card.Body>
                    <Card.Title>Public Relations Director - Shari Patel</Card.Title>
                    <Card.Text>   
                    Shari Held has been director of communications at Company X since 2019. She leads a team responsible for developing communication strategies 
                    that help advance the foundation's efforts to catalyze broad impact through the sharing of effective ideas and practices. These strategies 
                    include publications, partnerships with membership organizations, Web marketing, social media, media outreach and conferences. She earned a 
                    certificate in marketing management from Columbia University Graduate School of Business and a B.A. in English from Haverford College. 
                    </Card.Text>
                </Card.Body>
            </Card>
            </CardGroup>
        </div>
    );
}

export default About;