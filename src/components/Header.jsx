

export default function Header(){
    return(
        <header>
            <div className="container">
                <div className="header">
                    <img src="./src/images/laura.png" alt="Business Card Image" className="business-card-img" />
                    <h1> Laura Smith </h1>
                    <p> Frontend Developer </p>
                    <a href="laurasmith.website" className="laura-site">laurasmith.website</a>
                    <div className="profile-buttons">
                        <a href="#" className="email-btn"> <i class="fa fa-envelope"></i> Email </a>
                        <a href="#" className="linkedin-btn"> <i class="fa fa-linkedin-square"></i> LinkedIn </a>
                    </div>
                </div>
            </div>
        </header>
    )
}