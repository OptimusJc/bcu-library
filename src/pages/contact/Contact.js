import styles from "./contact.module.css";

// component imports
import Input from "../../components/buttons/Input";
import Button from "../../components/buttons/Button";
import TextArea from "../../components/buttons/TextArea.jsx";

// icon imports
import { BsFacebook, BsEnvelopeFill } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";

const Contact = () => {
    const onSubmit = () => {};

    return (
        <div className="container">
            <div className="row">
                <div className={styles.background_color}></div>
                <div className="col">
                    <div className={[styles.containment]}>
                        <div className={styles.lets_talk}>
                            <p className="lead text-uppercase">contact us</p>
                            <p className="display-4">lets talk about you</p>
                        </div>

                        <div className={[styles.send_message]}>
                            <h3 className="h3">send us message</h3>
                            <form>
                                <div className="mb-3">
                                    <label
                                        for="userName"
                                        className="form-label"
                                    >
                                        Name
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="Enter name here"
                                        className="form-control"
                                        id="userName"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        for="userEmail"
                                        className="form-label"
                                    >
                                        Email
                                    </label>
                                    <Input
                                        type="email"
                                        placeholder="Email here"
                                        className="form-control"
                                        id="userEmail"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label for="subject" className="form-label">
                                        Subject
                                    </label>
                                    <Input
                                        type="text"
                                        placeholder="Enter subject"
                                        className="form-control"
                                        id="subject"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        for="userMessage"
                                        className="form-label"
                                    >
                                        Message
                                    </label>
                                    <TextArea
                                        type="textbox"
                                        placeholder="Enter message here"
                                        className={[
                                            "form-control",
                                            styles.last_input,
                                        ].join(" ")}
                                        id="userMessage"
                                    />
                                </div>

                                <div>
                                    <Button
                                        title="Send"
                                        classes={[
                                            "btn btn-primary",
                                            styles.btn_submit,
                                        ].join(" ")}
                                        onClick={onSubmit}
                                    />
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className={[styles.socials]}>
                        <div>
                            <BsFacebook />
                            <span>Bcu Facebook</span>
                        </div>
                        <div>
                            <BsEnvelopeFill />
                            <span>Bcu Email</span>
                        </div>
                        <div>
                            <HiLocationMarker />
                            <span>Bcu Office Location</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
