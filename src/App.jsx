import "./App.css";

import profileImage from "./assets/profile.jpg";
import ccnaCertificate from "./assets/ccna-certificate.jpg";
import operatingSystemsCertificate from "./assets/operating-systems-basics.jpg";
import networkingDevicesCertificate from "./assets/networking-devices.jpg";
import networkingBasicsCertificate from "./assets/networking-basics.jpg";


function App() {

  return (

    <div className="portfolio">


      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside className="sidebar">

        <div className="sidebar-top">

          <a
            href="#home"
            className="logo"
          >
            <span>&lt;</span>
            Lokesh
            <b>.</b>
            <span>/&gt;</span>
          </a>


          <nav className="side-navigation">

            <a
              href="#home"
              className="nav-item active"
            >
              <span className="nav-number">
                01
              </span>

              <span>
                Home
              </span>

              <span className="nav-indicator" />
            </a>


            <a
              href="#about"
              className="nav-item"
            >
              <span className="nav-number">
                02
              </span>

              <span>
                About
              </span>
            </a>


            <a
              href="#experience"
              className="nav-item"
            >
              <span className="nav-number">
                03
              </span>

              <span>
                Experience
              </span>
            </a>


            <a
              href="#skills"
              className="nav-item"
            >
              <span className="nav-number">
                04
              </span>

              <span>
                Skills
              </span>
            </a>


            <a
              href="#projects"
              className="nav-item"
            >
              <span className="nav-number">
                05
              </span>

              <span>
                Projects
              </span>
            </a>


            <a
              href="#certifications"
              className="nav-item"
            >
              <span className="nav-number">
                06
              </span>

              <span>
                Certifications
              </span>
            </a>

          </nav>

        </div>


        <div className="sidebar-bottom">

          <div className="sidebar-line" />


          <a
            href="#contact"
            className="contact-nav"
          >
            <span>
              ✉
            </span>

            Contact
          </a>


          <div className="social-links">

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              in
            </a>


            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              ◉
            </a>


            <a
              href="mailto:your-email@example.com"
            >
              @
            </a>

          </div>

        </div>

      </aside>



      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <main className="main-content">


        {/* ===================================================
            HOME
        =================================================== */}

        <section
          id="home"
          className="hero"
        >


          {/* =================================================
              CCNA CERTIFICATE BACKGROUND

              IMPORTANT:
              This is INSIDE the Home section.
          ================================================= */}

          <div
            className="home-certificate-bg"
            style={{
              backgroundImage:
                `url(${ccnaCertificate})`
            }}
          />


          <div className="home-certificate-overlay" />


          <div className="hero-grid" />



          {/* =================================================
              HERO CONTENT
          ================================================= */}

          <div className="hero-content">


            <div className="availability">

              <span className="availability-dot" />

              Available for opportunities

            </div>


            <div className="hero-label">

              CYBERSECURITY
              <span>•</span>
              NETWORK
              <span>•</span>
              IT INFRASTRUCTURE

            </div>


            <h1>

              <span className="white-text">
                CYBERSECURITY
              </span>


              <span className="purple-text">
                NETWORK
              </span>


              <span className="purple-text">
                ENGINEERING
              </span>


              <span className="white-text">
                IT
              </span>


              <span className="white-text">
                INFRASTRUCTURE
              </span>

            </h1>


            <div className="hero-line" />


            <h2>

              Cybersecurity Enthusiast

              <span>|</span>

              <strong>
                CCNA Certified
              </strong>

            </h2>


            <p className="hero-description">

              IT Support and Network Infrastructure
              professional with a strong foundation in
              network security, system administration,
              enterprise troubleshooting and networking.

            </p>


            <div className="hero-buttons">

              <a
                href="#projects"
                className="primary-button"
              >

                Explore My Work

                <span>
                  →
                </span>

              </a>


              <a
                href="#contact"
                className="secondary-button"
              >

                Contact Me

              </a>

            </div>


            <div className="hero-social">

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >

                <span>
                  in
                </span>

                LinkedIn

              </a>


              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >

                <span>
                  ◉
                </span>

                GitHub

              </a>


              <a
                href="mailto:your-email@example.com"
              >

                <span>
                  ✉
                </span>

                Email

              </a>

            </div>

          </div>



          {/* =================================================
              PORTRAIT
          ================================================= */}

          <div className="portrait-section">

            <div className="portrait-glow" />

            <div className="portrait-grid" />


            <div className="portrait-frame">


              <div className="frame-corner corner-top-left" />

              <div className="frame-corner corner-top-right" />

              <div className="frame-corner corner-bottom-left" />

              <div className="frame-corner corner-bottom-right" />


              <div className="portrait-status">

                <span />

                IT INFRASTRUCTURE

              </div>


              <img
                src={profileImage}
                alt="Lokesh"
                className="profile-image"
              />


              <div className="portrait-footer">

                <span>
                  SECURITY
                </span>


                <span className="portrait-shield">
                  ◈
                </span>


                <span>
                  NETWORKING
                </span>

              </div>

            </div>



            {/* NETWORK CARD */}

            <div className="floating-card network-card">

              <div className="floating-icon">
                ◇
              </div>


              <div>

                <small>
                  01
                </small>

                <strong>
                  NETWORK
                </strong>

                <span>
                  Connected
                </span>

              </div>

            </div>



            {/* SECURITY CARD */}

            <div className="floating-card security-card">

              <div className="floating-icon">
                ⛨
              </div>


              <div>

                <small>
                  02
                </small>

                <strong>
                  SECURITY
                </strong>

                <span>
                  Monitoring
                </span>

              </div>

            </div>

          </div>



          {/* =================================================
              STATS
          ================================================= */}

          <div className="hero-stats">


            <div className="stat">

              <div className="stat-icon">
                ⛨
              </div>

              <div>

                <strong>
                  CCNA
                </strong>

                <span>
                  Cisco Certified
                </span>

              </div>

            </div>


            <div className="stat">

              <div className="stat-icon">
                ▣
              </div>

              <div>

                <strong>
                  IT SUPPORT
                </strong>

                <span>
                  Infrastructure
                </span>

              </div>

            </div>


            <div className="stat">

              <div className="stat-icon">
                ◈
              </div>

              <div>

                <strong>
                  NETWORK
                </strong>

                <span>
                  Security
                </span>

              </div>

            </div>


            <div className="stat">

              <div className="stat-icon">
                &lt;/&gt;
              </div>

              <div>

                <strong>
                  PROJECTS
                </strong>

                <span>
                  Hands-on Work
                </span>

              </div>

            </div>


            <div className="stat">

              <div className="stat-icon">
                ◎
              </div>

              <div>

                <strong>
                  FOCUS
                </strong>

                <span>
                  Cybersecurity
                </span>

              </div>

            </div>

          </div>

        </section>



        {/* ===================================================
            ABOUT
        =================================================== */}

        <section
          id="about"
          className="section"
        >

          <div className="section-heading">

            <span>
              02
            </span>

            <p>
              ABOUT ME
            </p>

          </div>


          <div className="about-grid">


            <div>

              <h2>

                Infrastructure

                <br />

                with a

                <span>
                  security mindset.
                </span>

              </h2>

            </div>


            <div className="about-content">

              <p className="large-paragraph">

                I'm Lokesh S., an IT professional and
                cybersecurity enthusiast with a strong
                foundation in network infrastructure,
                system administration and enterprise
                IT support.

              </p>


              <p>

                My experience includes Active Directory,
                DNS, DHCP, Office 365, Group Policy,
                enterprise troubleshooting and network
                infrastructure.

              </p>


              <p>

                My current interests include cybersecurity,
                network security, SOC operations, security
                monitoring and defensive security.

              </p>

            </div>

          </div>

        </section>



        {/* ===================================================
            EXPERIENCE
        =================================================== */}

        <section
          id="experience"
          className="section"
        >

          <div className="section-heading">

            <span>
              03
            </span>

            <p>
              EXPERIENCE
            </p>

          </div>


          <div className="experience-title">

            <h2>

              IT Support

              <br />

              <span>
                Engineer
              </span>

            </h2>


            <div className="company">

              <strong>
                Adams Bridge Global
              </strong>

              <span>
                IT Infrastructure
              </span>

            </div>

          </div>


          <div className="experience-list">


            <article>

              <span>
                01
              </span>

              <div>

                <h3>
                  Active Directory & Identity
                </h3>

                <p>

                  Administered Active Directory
                  environments, user access,
                  permissions and Group Policy.

                </p>

              </div>

            </article>


            <article>

              <span>
                02
              </span>

              <div>

                <h3>
                  Server Monitoring
                </h3>

                <p>

                  Designed and deployed monitoring
                  solutions for infrastructure availability,
                  latency and automated alerts.

                </p>

              </div>

            </article>


            <article>

              <span>
                03
              </span>

              <div>

                <h3>
                  DHCP, DNS & Microsoft 365
                </h3>

                <p>

                  Supported enterprise infrastructure
                  services, user administration and
                  Microsoft 365 operations.

                </p>

              </div>

            </article>


            <article>

              <span>
                04
              </span>

              <div>

                <h3>
                  Network Troubleshooting
                </h3>

                <p>

                  Diagnosed endpoint, application,
                  connectivity and network infrastructure
                  issues.

                </p>

              </div>

            </article>


            <article>

              <span>
                05
              </span>

              <div>

                <h3>
                  IT Service Management
                </h3>

                <p>

                  Worked with service desk platforms,
                  ticket management, issue documentation
                  and SLA-oriented support.

                </p>

              </div>

            </article>

          </div>

        </section>



        {/* ===================================================
            SKILLS
        =================================================== */}

        <section
          id="skills"
          className="section"
        >

          <div className="section-heading">

            <span>
              04
            </span>

            <p>
              TECHNICAL SKILLS
            </p>

          </div>


          <h2 className="big-title">

            Security.

            <br />

            Networks.

            <br />

            <span>
              Systems.
            </span>

          </h2>


          <div className="skills-grid">


            <article className="skill-card">

              <span className="skill-number">
                01
              </span>

              <h3>
                Cybersecurity
              </h3>

              <p>

                Network security fundamentals,
                ACLs, VLAN segmentation, wireless
                security and security troubleshooting.

              </p>


              <div className="tags">

                <span>
                  ACL
                </span>

                <span>
                  VLAN
                </span>

                <span>
                  Security
                </span>

                <span>
                  IAM
                </span>

              </div>

            </article>


            <article className="skill-card">

              <span className="skill-number">
                02
              </span>

              <h3>
                Networking
              </h3>

              <p>

                Routing and switching, OSPF,
                DHCP, DNS, TCP/IP and practical
                network troubleshooting.

              </p>


              <div className="tags">

                <span>
                  Cisco
                </span>

                <span>
                  OSPF
                </span>

                <span>
                  DHCP
                </span>

                <span>
                  DNS
                </span>

                <span>
                  TCP/IP
                </span>

              </div>

            </article>


            <article className="skill-card">

              <span className="skill-number">
                03
              </span>

              <h3>
                System Administration
              </h3>

              <p>

                Windows Server, Active Directory,
                Group Policy, identity management
                and enterprise administration.

              </p>


              <div className="tags">

                <span>
                  AD
                </span>

                <span>
                  GPO
                </span>

                <span>
                  Windows Server
                </span>

              </div>

            </article>


            <article className="skill-card">

              <span className="skill-number">
                04
              </span>

              <h3>
                Monitoring & Automation
              </h3>

              <p>

                PowerShell automation, infrastructure
                monitoring, log analysis and alerting.

              </p>


              <div className="tags">

                <span>
                  PowerShell
                </span>

                <span>
                  Monitoring
                </span>

                <span>
                  Automation
                </span>

              </div>

            </article>


            <article className="skill-card">

              <span className="skill-number">
                05
              </span>

              <h3>
                Security Tools
              </h3>

              <p>

                Practical exposure to network discovery,
                packet analysis and security-focused
                troubleshooting.

              </p>


              <div className="tags">

                <span>
                  Nmap
                </span>

                <span>
                  Wireshark
                </span>

                <span>
                  Packet Tracer
                </span>

              </div>

            </article>


            <article className="skill-card">

              <span className="skill-number">
                06
              </span>

              <h3>
                IT Support
              </h3>

              <p>

                Enterprise endpoint troubleshooting,
                software support, network connectivity
                and service desk operations.

              </p>


              <div className="tags">

                <span>
                  Windows
                </span>

                <span>
                  Service Desk
                </span>

                <span>
                  Troubleshooting
                </span>

              </div>

            </article>

          </div>

        </section>



        {/* ===================================================
            PROJECTS
        =================================================== */}

        <section
          id="projects"
          className="section"
        >

          <div className="section-heading">

            <span>
              05
            </span>

            <p>
              PROJECTS
            </p>

          </div>


          <div className="projects-grid">


            <article className="project-card featured-project">

              <span className="project-number">
                01
              </span>

              <small>
                MONITORING • AUTOMATION
              </small>

              <h2>
                Server Monitoring
              </h2>

              <p>

                A PowerShell-based monitoring solution
                designed to monitor infrastructure availability,
                latency and generate automated alerts.

              </p>


              <div className="project-tags">

                <span>
                  PowerShell
                </span>

                <span>
                  Monitoring
                </span>

                <span>
                  Automation
                </span>

              </div>

            </article>


            <article className="project-card">

              <span className="project-number">
                02
              </span>

              <small>
                NETWORK SECURITY
              </small>

              <h2>
                Enterprise Network Simulation
              </h2>

              <p>

                Cisco Packet Tracer topology involving
                VLANs, routing, switching and ACL-based
                traffic control.

              </p>


              <div className="project-tags">

                <span>
                  Cisco
                </span>

                <span>
                  VLAN
                </span>

                <span>
                  ACL
                </span>

              </div>

            </article>


            <article className="project-card">

              <span className="project-number">
                03
              </span>

              <small>
                NETWORK INFRASTRUCTURE
              </small>

              <h2>
                Network Infrastructure Labs
              </h2>

              <p>

                Hands-on networking labs involving
                routing, switching, VLANs, DHCP,
                DNS and troubleshooting.

              </p>


              <div className="project-tags">

                <span>
                  Routing
                </span>

                <span>
                  Switching
                </span>

                <span>
                  DHCP
                </span>

              </div>

            </article>

          </div>

        </section>



        {/* ===================================================
            CERTIFICATIONS
        =================================================== */}

        <section
          id="certifications"
          className="section"
        >


          <div className="section-heading">

            <span>
              06
            </span>

            <p>
              CERTIFICATIONS
            </p>

          </div>



          <div className="certifications-intro">

            <div>

              <div className="hero-label">
                PROFESSIONAL CREDENTIALS
              </div>


              <h2>

                Certifications

                <br />

                <span>
                  & Learning.
                </span>

              </h2>

            </div>


            <p>

              Professional certifications and networking
              courses completed through Cisco Networking
              Academy and networking training.

            </p>

          </div>



          {/* =================================================
              CCNA
          ================================================= */}

          <div className="certification-feature">


            <div className="certification-feature-info">

              <span className="certificate-number">
                01
              </span>


              <div className="certificate-provider">
                CISCO SYSTEMS
              </div>


              <h3>
                CCNA
              </h3>


              <h4>
                Cisco Certified Network Associate
              </h4>


              <p>

                Cisco certification covering networking
                fundamentals, network access, IP connectivity,
                IP services, security fundamentals and
                network automation.

              </p>


              <div className="certificate-badge">

                <span>
                  ✓
                </span>

                Cisco Certified

              </div>

            </div>



            <div className="certificate-image-box ccna-certificate">

              <img
                src={ccnaCertificate}
                alt="Cisco CCNA Certificate"
              />

            </div>

          </div>



          {/* =================================================
              OTHER CERTIFICATES
          ================================================= */}

          <div className="certificate-grid">


            {/* OPERATING SYSTEMS */}

            <article className="certificate-card">

              <div className="certificate-card-header">

                <span>
                  02
                </span>

                <small>
                  CISCO NETWORKING ACADEMY
                </small>

              </div>


              <div className="certificate-card-image">

                <img
                  src={operatingSystemsCertificate}
                  alt="Operating Systems Basics Certificate"
                />

              </div>


              <div className="certificate-card-info">

                <h3>
                  Operating Systems Basics
                </h3>

                <p>
                  Cisco Networking Academy
                </p>

                <span>
                  Course Completion
                </span>

              </div>

            </article>



            {/* NETWORKING DEVICES */}

            <article className="certificate-card">

              <div className="certificate-card-header">

                <span>
                  03
                </span>

                <small>
                  CISCO NETWORKING ACADEMY
                </small>

              </div>


              <div className="certificate-card-image">

                <img
                  src={networkingDevicesCertificate}
                  alt="Networking Devices and Initial Configuration Certificate"
                />

              </div>


              <div className="certificate-card-info">

                <h3>
                  Networking Devices and Initial Configuration
                </h3>

                <p>
                  Cisco Networking Academy
                </p>

                <span>
                  Course Completion
                </span>

              </div>

            </article>



            {/* NETWORKING BASICS */}

            <article className="certificate-card">

              <div className="certificate-card-header">

                <span>
                  04
                </span>

                <small>
                  CISCO NETWORKING ACADEMY
                </small>

              </div>


              <div className="certificate-card-image">

                <img
                  src={networkingBasicsCertificate}
                  alt="Networking Basics Certificate"
                />

              </div>


              <div className="certificate-card-info">

                <h3>
                  Networking Basics
                </h3>

                <p>
                  Cisco Networking Academy
                </p>

                <span>
                  Course Completion
                </span>

              </div>

            </article>


          </div>

        </section>



        {/* ===================================================
    CONTACT
=================================================== */}

<section
  id="contact"
  className="section contact-section"
>

  <div className="contact-box">

    <div>

      <div className="hero-label">
        LET'S CONNECT
      </div>

      <h2>
        Interested in
        <br />
        <span>
          security & infrastructure?
        </span>
      </h2>

      <p>
        I'm interested in opportunities involving
        cybersecurity, network security, IT infrastructure,
        SOC operations and technical support.
      </p>

    </div>


    <div className="contact-details">

      {/* EMAIL */}

      <a
        href="mailto: lokeshshankar2004@gmail.com"
        className="contact-detail"
      >

        <div className="contact-detail-icon">
          ✉
        </div>

        <div>

          <span>
            EMAIL
          </span>

          <strong>
             lokeshshankar2004@gmail.com
          </strong>

        </div>

      </a>


      {/* PHONE */}

      <a
        href="tel:+916381610925"
        className="contact-detail"
      >

        <div className="contact-detail-icon">
          ☎
        </div>

        <div>

          <span>
            PHONE
          </span>

          <strong>
            +91 63816 10925
          </strong>

        </div>

      </a>


      <div className="contact-actions">

        <a
          href="mailto:lokeshshankar2004@gmail.com"
          className="primary-button"
        >

          Email Me

          <span>
            →
          </span>

        </a>


        <a
          href="tel:+916381610925"
          className="secondary-button"
        >

          Call Me

        </a>

      </div>

    </div>

  </div>

</section>

      </main>



      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer>

        <div>

          <strong>
            &lt;Lokesh S /&gt;
          </strong>

          <span>
            Cybersecurity • Networking • IT Infrastructure
          </span>

        </div>


        <span>
          © 2026 Lokesh S
        </span>

      </footer>


    </div>

  );
}


export default App;