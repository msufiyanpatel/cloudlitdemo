import * as React from "react";
import styles from '../styles/ChatForm.module.css'
import icon from '../assets/icon.svg'

import {
    Container,
    Typography,
    TextField,
    Box,
    Button,
  } from '@mui/material';

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };


const ChatForm = () => {
    return(
    <div className={styles.ChatForm}>
        <div className={styles.staticStyling}>
        <div>
            <div className={styles.image}>
                <img
            src={icon} // Replace with the URL of your image
            alt="Circle Image"
            className={styles["circle-image"]}
            // style={{borderRadius: "40%"}}
                />
            </div>
            <h1 className={styles.textOne}>-Please describe your request in a nutshell</h1>
            <h1 className={styles.textOne}>-We need your information to reach you back</h1>
        </div>

        </div>

        <div className={styles["form-container"]}>
            <form onSubmit={handleSubmit}>
                <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    id="message"
                    name="message"
                    // value={message}
                    // onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                </div>
                <div>
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    // value={name}
                    // onChange={(e) => setName(e.target.value)}
                    required
                />
                </div>
                <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    required
                />
                </div>
                <div>
                <label htmlFor="phone">Phone Number:</label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    // value={phone}
                    // onChange={(e) => setPhone(e.target.value)}
                    required
                />
                </div>
                <div>
                <label htmlFor="company">Company/Institution/Individual:</label>
                <input
                    type="text"
                    id="company"
                    name="company"
                    // value={company}
                    // onChange={(e) => setCompany(e.target.value)}
                    required
                />
                </div>
                <button className={styles["submit-btn"]}type="submit">Send</button>
            </form>
        </div>
    </div>

    );
};

export default ChatForm;
