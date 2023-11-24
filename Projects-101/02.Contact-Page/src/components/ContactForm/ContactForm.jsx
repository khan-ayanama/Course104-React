import styles from "./ContactForm.module.css";
import Button from "../Button/Button";
import service from '/images/service.svg'

import { MdMessage } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const ContactForm = () => {
  return (
    <section className={`${styles.contact} container`}>
      <div>
        <div>
          <div className={styles.top_btn}>
            <Button
              icon={<MdMessage />}
              text={"VIA SUPPORT CHAT"}
              type={"primary_btn"}
            />
            <Button icon={<IoMdCall />} text={"VIA CALL"} />
          </div>
          <Button icon={<MdEmail />} text={"VIA EMAIL"} isOutline={true} />
        </div>
        <div>
          <form action="">
            <div className={styles.form_control}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div className={styles.form_control}>
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" cols="10" rows="5"></textarea>
            </div>
            <div className={styles.submit_btn}>
                <Button type='submit' text={'SUBMIT'}/>
            </div>
          </form>
        </div>
      </div>
      <div className={styles.contact_image}>
        <img src={service} alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
