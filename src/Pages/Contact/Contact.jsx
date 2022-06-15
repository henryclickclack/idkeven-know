import React from 'react';
import './Contact.css'

export default function Contact() {
  return (

    <div className="Page">
      <div className="ContactCard hvr-grow-shadow">
          <h2 class="ConTitle">Contact me!</h2>
          <div class="container">
            <form action="mailto:henry.hommel@gmx.com" method="get" enctype="text/plain">

              <label for="fname">First Name</label>
              <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

              <label for="lname">Last Name</label>
              <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

              <label for="email">E-Mail</label>
              <input type="text" id="email" name="e-mail" placeholder="Your E-Mail.."/>

              <label for="country">Where are you from?</label>
              <select id="country" name="country">
                <option value="australia">Europe</option>
                <option value="canada">USA/Canada</option>
                <option value="usa">South America</option>
                <option value="usa">Australia</option>
                <option value="usa">Asia</option>
              </select>

              <label for="subject">Subject</label>
              <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
              <label for="body">Text</label>
              <textarea id="body" name="body" placeholder="Write something.."></textarea>
              <input type="submit" value="Submit"/>

            </form>
          </div>
      </div>
    </div>

  )
}
