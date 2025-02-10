import "./About.css"; // External CSS file

const About = () => {
  const teamData = {
    "Web Developer": [
      {
        name: "Mohammed Riyaz",
        role: "Web Developer",
        image: "https://via.placeholder.com/150/ff7f50/fff?text=John",
      },
      {
        name: "Dhana Sakthivel",
        role: "Web Developer",
        image: "https://via.placeholder.com/150/ff7f50/fff?text=John",
      },
      {
        name: "Asfak Ahamed",
        role: "Web Developer",
        image: "https://via.placeholder.com/150/ff6347/fff?text=Alice",
      },
      {
        name: "Mukundan",
        role: "Web Developer",
        image: "https://via.placeholder.com/150/ff6347/fff?text=Alice",
      },
      {
        name: "Mohamed Shajid",
        role: "Web Developer",
        image: "https://via.placeholder.com/150/ff6347/fff?text=Alice",
      },
      {
        name: "Mohammed Sulthan",
        role: "Web Developer",
        image: "https://via.placeholder.com/150/ff6347/fff?text=Alice",
      },
      {
        name: "Joshva Patrick",
        role: "Web Developer",
        image: "https://via.placeholder.com/150/ff6347/fff?text=Alice",
      },
    ],
    "Graphic Design": [
      {
        name: "Infanta",
        role: "Graphic Design",
        image: "https://via.placeholder.com/150/1e90ff/fff?text=Jane",
      },
      {
        name: "Monica",
        role: "Graphic Design",
        image: "https://via.placeholder.com/150/4169e1/fff?text=David",
      },
      {
        name: "Abhishek",
        role: "Graphic Design",
        image: "https://via.placeholder.com/150/4169e1/fff?text=David",
      },
    ],"Office Bearers": [
      {
        name: "M.Naveen",
        role: "President",
        image: "https://via.placeholder.com/150/32cd32/fff?text=Mike",
      },
      {
        name: "S.Muthaiah",
        role: "Vice President",
        image: "https://via.placeholder.com/150/3cb371/fff?text=Sara",
      },
      {
        name: "P.R.Ramesh Bala",
        role: "Secretary",
        image: "https://via.placeholder.com/150/3cb371/fff?text=Sara",
      },
      {
        name: "G.Dharani",
        role: "Vice Secretary",
        image: "https://via.placeholder.com/150/3cb371/fff?text=Sara",
      },
      {
        name: "A.Kishore Kumar",
        role: "Treasurer",
        image: "https://via.placeholder.com/150/3cb371/fff?text=Sara",
      },
    ],
  };
  return (
    <div className="container-fluid our-team-container py-5 bg-dark text-white min-vh-100 con">
      <h2 className="text-center mb-4 display-4 neon-text default-cursor mt-4">
        Meet Our Team
      </h2>
      <div className="container">
        {Object.entries(teamData).map(([teamName, members]) => (
          <div className="team-section text-center" key={teamName}>
            <h3 className="my-4 neon-text default-cursor">{teamName}</h3>
            <div className="row justify-content-center">
              {members.map((member) => (
                <div
                  key={member.name}
                  className="col-11 col-sm-6 col-md-4 col-lg-3"
                >
                  <div className="team-card card mb-4 text-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="card-img-top team-img"
                    />
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