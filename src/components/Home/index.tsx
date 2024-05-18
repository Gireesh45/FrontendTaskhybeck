
import { useNavigate } from 'react-router-dom';
import './index.css';
export const Home: React.FC = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/body");
        console.log("called");
    };

    return (
        <>
            <div>
                <div className='top-container'>
                    <img
                        src="https://res.cloudinary.com/dwsxbsjdc/image/upload/v1715952671/Vector_1_h7p5pw.jpg"
                        alt="bell"
                        className='top-icon'
                    />
                    <img
                        src="https://res.cloudinary.com/dwsxbsjdc/image/upload/v1715952763/Vector_2_srmxll.jpg"
                        alt="user"
                        className='top-icon'
                    />
                </div>
                <div className='network-card'>
                    <div className='network-container'>
                        <h1 className='our-network-text'>Our Network</h1>
                        <p className='navigate-text'>Navigate within our network of healthcare providers</p>
                        <button className='search-button'>
                            Search Network
                            <img
                                src="https://res.cloudinary.com/dwsxbsjdc/image/upload/v1715954714/Vector_mfado1.png"
                                alt="arrow"
                                className='arrow-icon'
                            />
                        </button>
                    </div>
                    <div className='doctor-container'>
                        <img
                            src="https://res.cloudinary.com/dwsxbsjdc/image/upload/v1715953447/Layer_1_2x_nmhwn6.png"
                            alt="doctor"
                            className='doctor-image'
                        />
                    </div>
                </div>
                <div>
                    <h1 className='side-headings'>Medical Services</h1>
                    <div className='cards-container'>
                        <div className='service-card' onClick={handleClick}>
                            <img
                                src="https://res.cloudinary.com/dwsxbsjdc/image/upload/v1715957589/Vector_2_eirmrf.png"
                                className='card-image'
                                alt="Symptom Checker"
                            />
                            <p className='search-button' >
                                Symptom Checker
                            </p>
                        </div>
                        <div className='service-card'>
                            <img
                                src="https://res.cloudinary.com/dwsxbsjdc/image/upload/v1715957706/Group_13_emh7iw.png"
                                className='card-image'
                                alt="Telehealth"
                            />
                            <p>Telehealth</p>
                        </div>
                    </div>
                    <div className='cards-container'>
                        <div className='service-card'>
                            <img
                                src="https://res.cloudinary.com/dwsxbsjdc/image/upload/v1715958864/Vector_3_iugst3.png"
                                className='card-image'
                                alt="Facility Search"
                            />
                            <p>Facility Search & <br /> Booking</p>
                        </div>
                        <div className='service-card'>
                            <img
                                src="https://res.cloudinary.com/dwsxbsjdc/image/upload/v1715958578/Group_15_1_uizpg3.png"
                                className='card-image'
                                alt="Medicine Delivery"
                            />
                            <p>Medicine Delivery</p>
                        </div>
                    </div>
                </div>
                <div className='parent'>
                    <h1 className='side-headings'>Insurance Services</h1>
                    <div className='cards-container'>
                        <div className='service-card-2'>
                            <img
                                src="https://res.cloudinary.com/dwsxbsjdc/image/upload/v1715959696/Group_16_gwiuxa.png"
                                className='logo'
                                alt="Logo"
                            />
                            <div>
                                <p className='coverage-text'>Insurance Coverage</p>
                                <p className='check-text'>Check your benefits and coverage</p>
                            </div>
                            <div className='lock-container'>
                                <img
                                    src="https://res.cloudinary.com/dwsxbsjdc/image/upload/v1715959761/Vector_4_yukvkw.png"
                                    className='lock'
                                    alt="lock"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='cards-container'>
                        <div className='service-card-2 second-card'>
                            <img
                                src="https://res.cloudinary.com/dwsxbsjdc/image/upload/v1715959696/Group_16_gwiuxa.png"
                                className='logo'
                                alt="Logo"
                            />
                            <div>
                                <p className='coverage-text'>Insurance Coverage</p>
                                <p className='check-text'>Check your benefits and coverage</p>
                            </div>
                            <div className='lock-container'>
                                <img
                                    src="https://res.cloudinary.com/dwsxbsjdc/image/upload/v1715959761/Vector_4_yukvkw.png"
                                    className='lock'
                                    alt="lock"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='footer-bg'>
                    <div className='footer'>
                        <div>
                            <img
                                src="https://res.cloudinary.com/dwsxbsjdc/image/upload/v1716025800/Group_23_ftdor8.png"
                                alt="home"
                                className='logo'
                            />
                            <p className='home'>Home</p>
                        </div>
                        <div>
                            <img
                                src="https://res.cloudinary.com/dwsxbsjdc/image/upload/v1716025644/Vector_5_a7w09v.png"
                                alt="care"
                                className='logo'
                            />
                            <p className='check-text'>Care</p>
                        </div>
                        <div>
                            <img
                                src="https://res.cloudinary.com/dwsxbsjdc/image/upload/v1716025753/Group_348_cpptct.png"
                                alt="coverage"
                                className='logo'
                            />
                            <p className='check-text'>Coverage</p>
                        </div>
                        <div>
                            <img
                                src="https://res.cloudinary.com/dwsxbsjdc/image/upload/v1716025708/Group_20_nfei1b.png"
                                alt="claim"
                                className='logo'
                            />
                            <p className='check-text'>Claim</p>
                        </div>
                    </div>
                    <div>
                        <hr className='hr-line' />
                    </div>
                </div>
            </div>
        </>
    );
};
