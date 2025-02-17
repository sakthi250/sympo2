import "./index.css";

const ContactUs = () => {
  return (
    <div className="con container-fluid py-5 bg-dark text-white min-vh-100 w-100">
      <h2 className="text-center mb-4 display-4 neon-text default-cursor mt-4">
        Contact Us
      </h2>
<h1 className="my-lg-5">Faculty Coordinators</h1>
        <div className="d-flex flex-wrap justify-content-center gap-4 contact-list w-100">
        <div className="contact-card">
          <h3 className="my-4 neon-text default-cursor">Dr.Lalitha M.E.,PH.D</h3>
          <p className="contact-info">Phone: +91 9894785471</p>
        </div>
        
        <div className="contact-card">
          <h3 className="my-4 neon-text default-cursor">Mrs.P.Pabitha Muthu M.E.,Ph.D</h3>
          <p className="contact-info">Phone: +91 8220290078</p>
        </div>
        <div className="contact-card">
          <h3 className="my-4 neon-text default-cursor">Mrs.K.Krishnaveni M.E.,Ph.D</h3>
          <p className="contact-info">Phone: +91 9865394690</p>
        </div>
        </div>

<h1 className="mt-5 my-lg-5">Student Coordinators</h1>
      <div className="d-flex flex-wrap justify-content-center gap-4 contact-list w-100">
        <div className="contact-card">
          <h3 className="my-4 neon-text default-cursor">Naveen</h3>
          <p className="contact-info">Phone: +91 93426 29920</p>
        </div>
        
        <div className="contact-card">
          <h3 className="my-4 neon-text default-cursor">S.Muthaiah</h3>
          <p className="contact-info">Phone: +91 7094243255</p>
        </div>
        <div className="contact-card">
          <h3 className="my-4 neon-text default-cursor">P.R.Ramesh Bala</h3>
          <p className="contact-info">Phone: +91 9360381404</p>
        </div>
        <div className="contact-card">
          <h3 className="my-4 neon-text default-cursor">Kishore Kumar</h3>
          <p className="contact-info">Phone: +91 8248511613</p>
        </div>
        <div className="contact-card">
          <h3 className="my-4 neon-text default-cursor">Chandhru</h3>
          <p className="contact-info">Phone: +91 9876543210</p>
        </div>
        <div className="contact-card">
          <h3 className="my-4 neon-text default-cursor">Dhanush Raj</h3>
          <p className="contact-info">Phone: +91 90803 77792</p>
        </div>
        <div className="contact-card">
          <h3 className="my-4 neon-text default-cursor">Thiyagu</h3>
          <p className="contact-info">Phone: +91 93609 77635</p>
        </div>
        
      </div>

      <div className="contact-footer w-100">
        <p>We are here to assist you. Feel free to reach out!</p>
      </div>
    </div>
  );
};

export default ContactUs;