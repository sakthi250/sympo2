import "./About.css"; // External CSS file
import {useState} from 'react';
const About = () => {
  const [selectedTeam, setSelectedTeam] = useState("Technical Team");
  const teamData = {
    "Technical Team":{
    "Web Development Team": [
      // {
      //   name: "Mohammed Riyaz",
      //   role: "Web Developer",
      //   image: "https://via.placeholder.com/150/ff7f50/fff?text=John",
      // },
      {
        name: "Dhana Sakthivel",
        role: "Web Developer",
        image:"dp.png",
      },
      {
        name: "Asfak Ahamed",
        role: "Web Developer",
        image: "dp.png",
      },
      {
        name: "Mukundan",
        role: "Web Developer",
        image: "dp.png",
      },
      {
        name: "Mohamed Shajid",
        role: "Web Developer",
        image: "dp.png",
      },
      {
        name: "Mohammed Sulthan",
        role: "Web Developer",
        image: "dp.png",
      },
      {
        name: "Joshva Patrick",
        role: "Web Developer",
        image: "dp.png",
      },
    ],
    "Graphic Designing Team": [
      {
        name: "Harini Shree A",
        role: "Graphic Design",
        image: "dp.png",
      },
      {
        name: "Ramesh Bala",
        role: "Graphic Design",
        image: "dp.png",
      },
      {
        name: "Infanta D",
        role: "Graphic Design",
        image: "dp.png",
      },
      {
        name: "Monica R",
        role: "Graphic Design",
        image: "dp.png",
      },
      {
        name: "Mohamed apsar M",
        role: "Graphic Design",
        image: "dp.png",
      },
      {
        name: "Abhishek Kumaran A.J",
        role: "Graphic Design",
        image: "dp.png",
      },
      {
        name: "Abirami S",
        role: "Graphic Design",
        image: "dp.png",
      },
      {
        name: "Fazia S",
        role: "Graphic Design",
        image: "dp.png",
      },
      {
        name: "Bharath kumar J",
        role: "Graphic Design",
        image: "dp.png",
      },
      {
        name: "Daniel S",
        role: "Graphic Design",
        image: "dp.png",
      },
    ],
    "MultiMedia Team": [
      {
        name: "Adhithian R",
        role: "MultiMedia",
        image: "dp.png",
      },
      {
        name: "Dharshan I",
        role: "Multimedia",
        image: "dp.png",
      },
      {
        name: "ArulPriyan K M",
        role: "Multimedia",
        image: "dp.png",
      },
      {
        name: "Hemant P",
        role: "Multimedia",
        image: "dp.png",
      },
      {
        name: "Vishwa M",
        role: "Multimedia",
        image: "dp.png",
      },
      {
        name: "Praveenraj D",
        role: "Multimedia",
        image: "dp.png",
      },
      {
        name: "Lal Roshan S",
        role: "Multimedia",
        image: "dp.png",
      },
      {
        name: "Mohammed Abeeh H",
        role: "Multimedia",
        image: "dp.png",
      },
      {
        name: "Dhana Sakthivel K",
        role: "Multimedia",
        image: "dp.png",
      },
      {
        name: "Asfak Ahamed A",
        role: "Multimedia",
        image: "dp.png",
      },
      {
        name: "Muthaiah S",
        role: "Multimedia",
        image: "dp.png",
      },
      {
        name: "Padmanaban V",
        role: "Multimedia",
        image: "dp.png",
      },
    ],
  },
  "Core Team":{
    "Office Bearers": [
      {
        name: "M.Naveen",
        role: "President",
        image: "dp.png",
      },
      {
        name: "S.Muthaiah",
        role: "Vice President",
        image: "dp.png",
      },
      {
        name: "S.Thiyagu",
        role: "Secretary",
        image: "dp.png",
      },
      {
        name: "G.Dharani",
        role: "Vice Secretary",
        image: "dp.png",
      },
      {
        name: "A.Kishore Kumar",
        role: "Treasurer",
        image: "dp.png",
      },
      {
        name: "M.Vishwa",
        role: "Co-Treasurer",
        image: "dp.png",
      },
    ],
  }
  };
  return (
    <div className="our-team-container container-fluid bg-dark text-white new-con">
  <h2 className="text-center mb-4 display-4 neon-text default-cursor mt-4">
    Meet Our {selectedTeam}
  </h2>
  <div className="text-center mb-4">
    <button
      className={`btn me-2 ${selectedTeam === "Technical Team" ? "btn-warning" : "btn-outline-warning"}`}
      onClick={() => setSelectedTeam("Technical Team")}
    >
      Technical Team
    </button>
    <button
      className={`btn ${selectedTeam === "Core Team" ? "btn-warning" : "btn-outline-warning"}`}
      onClick={() => setSelectedTeam("Core Team")}
    >
      Core Team
    </button>
  </div>


    <div className="container">
      {Object.entries(teamData[selectedTeam]).map(([category, members]) => (
        <div className="team-section text-center" key={category}>
          <h3 className="my-4 neon-text default-cursor">{category}</h3>
          <div className="row justify-content-center">
            {members.map((member) => (
              <div key={member.name} className="col-11 col-sm-6 col-md-4 col-lg-3">
                <div className="team-card card mb-4 text-center">
                  <img src={member.image} alt={member.name} className="card-img-top team-img" />
                  <div className="card-body">
                    <h5 className="card-title team-name">{member.name}</h5>
                    <p className="card-text team-role">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);
};

export default About;