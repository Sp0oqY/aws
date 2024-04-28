import React from 'react';

const Greet = ({ name, heroName }) => {

    return (
        <div class="row">
            <form class="container" action="./contact" method="POST">
                <div class="contact-box">
                    <div class="right">
                        <h1>Contact Form</h1>
                        <label for="name">Username</label>
                        <input type="text" name="name" id="name" class="field" placeholder="Enter your username"/>
                            <small class="error"></small>

                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" class="field" placeholder="Enter your e-mail"/>
                                <small class="error"></small>

                                <label for="subject">Subject</label>
                                <input type="text" name="subject" id="subject" class="field" placeholder="Enter subject"/>
                                    <small class="error"></small>

                                    <label for="message">Message</label>
                                    <textarea id="message" name="message" class="field" placeholder="Enter your message"></textarea>
                                    <small class="error"></small>

                                    <div class="center">
                                        <input id="btn" type="submit" name="contact" value="SEND MESSAGE" />
                                    </div>
                    </div>

                    <div class="left">
                        <h1>Contact Info</h1>

                        <ul>
                            <li>Miroslav Kaštier</li>
                            <li>Stredná Priemyselná Škola Jozefa Murgaša</li>
                            <li>Hurbanova 6, Banská Bystrica, 974 01</li>
                            <li>kastierm45@gmail.com</li>
                            <li>+421 904 021 045</li>
                        </ul>

                        <a target="_blank" href="https://www.facebook.com/profile.php?id=100008982675113"><img class="net fb" src="https://image.similarpng.com/very-thumbnail/2020/04/Beautiful-Facebook-logo-icon-social-media-png.png" alt=""/></a>
                        <a target="_blank" href="https://www.instagram.com/miroslavkastier/?hl=sk"><img class="net ig" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1025px-Instagram-Icon.png" alt=""/></a>
                        <a target="_blank" href=""><img class="net" src="https://toppng.com/uploads/preview/twitter-icon-logo-social-media-icon-png-and-vector-twitter-logo-pink-115629344286kzjqw2mow.png" alt=""/></a>

                    </div>
                </div>
            </form>
        </div>

            )
}

export default Greet