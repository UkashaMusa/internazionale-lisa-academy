import './Contact.css';
import msgicon from '../../assets/msgicon.png';
import mailicon from '../../assets/mailicon.png';
import phoneicon from '../../assets/phoneicon.png';
import locationicon from '../../assets/locationicon.png';
import whitearrow from '../../assets/whitearrow.png';
import { useState } from 'react';

const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "98722f65-0bd4-4b98-b88a-a55cc6e9ec3a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message <img src={msgicon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
            <ul>
                <li><img src={mailicon} alt="" />umusa7677@gmail.com</li>
                <li><img src={phoneicon} alt="" />+0792402035</li>
                <li> <img src={locationicon} alt="" />77 Massachusetts Ave, Cambridge <br />
                MA 02139, United States</li>
            </ul>
        </div>
        <div className="contact-col">
          <form onSubmit={onSubmit}>
            <label htmlFor="name">Your Name</label>
            <input type="text" name='name' placeholder='enter your name' required />
            <label htmlFor="phone">Phone</label>
            <input type="tel" name='phone' placeholder='enter your mobile number' required />
            <label htmlFor="message"> Write your message here</label>
            <textarea name="message" id="" rows='6' placeholder=' enter your message' required ></textarea>
            <button type='submit' className='btn dark-btn'>Submit now! <img src={whitearrow} alt="" /></button>
          </form>
          <span>{result}</span>

        </div>
    </div>
  )
}

export default Contact