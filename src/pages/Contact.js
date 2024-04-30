import React from "react";
import Header from "../components/Header";
import '../css/Contact.css';

export default function Contact() {
    return (
        <div>
            <Header />
            <form className="container">
                <div className="contact-box">
                    <div className="right">
                        <h1>Contact Form</h1>
                        <label htmlFor="name">Username</label>
                        <input type="text" name="name" id="name" className="field" placeholder="Enter your username" />
                        <small className="error"></small>

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" className="field" placeholder="Enter your e-mail" />
                        <small className="error"></small>

                        <label htmlFor="subject">Subject</label>
                        <input type="text" name="subject" id="subject" className="field" placeholder="Enter subject" />
                        <small className="error"></small>

                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" className="field" placeholder="Enter your message"></textarea>
                        <small className="error"></small>

                        <div className="center">
                            <input id="btn" type="submit" name="contact" value="SEND MESSAGE" />
                        </div>
                    </div>

                    <div className="left">
                        <h1>Contact Info</h1>
                        <ul>
                            <li>Miroslav Kaštier</li>
                            <li>Masarykova Univerzia <br/> Fakulta Informatiky</li>
                            <li>Botanická 68A, 602 00 <br/> Královo Pole-Ponava, Brno</li>
                            <li>kastierm45@gmail.com</li>
                            <li>+421 904 021 045</li>
                        </ul>

                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100008982675113"><img className="net fb" src="https://image.similarpng.com/very-thumbnail/2020/04/Beautiful-Facebook-logo-icon-social-media-png.png" alt="" /></a>
                        <a target="_blank" href="https://www.instagram.com/miroslavkastier/?hl=sk"><img className="net ig" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png" alt="" /></a>
                        <a target="_blank" href=""><img className="net" src="https://toppng.com/uploads/preview/twitter-icon-logo-social-media-icon-png-and-vector-twitter-logo-pink-115629344286kzjqw2mow.png" alt="" /></a>

                    </div>
                </div>
            </form>
        </div>
    )
}