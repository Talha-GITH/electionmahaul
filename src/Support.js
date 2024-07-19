import React from 'react';

const Support = () => {
  return (
    <div className="support-page">
      <h2>Support ELECTION MAHAUL</h2>
      <p>
        The Pure was launched in 2024 to create a space for fair, non-hyphenated and probing journalism. Extensive ground reporting, sharp opinion and in-depth analysis are our central propositions.
      </p>
      <p>
        Our newsroom is a mix of young, enthusiastic reporters, opinion writers of stature and experienced editors. We believe in going where the story is, and invest in accurate field reporting .
      </p>
      <p>
        Good journalism will thrive when good people pay for it, people like you. Please pay for the journalism you like and value.
      </p>
      <p>
        All you have to do is use the given form, whether you live in India or overseas it will take you less than a minute.
      </p>
      <p>We thank you for your trust in us.</p>
      <p>
        Talha M <br />
        Founder & Editor-In-Chief
      </p>

      <div className="subscription-options">
        <div className="option">
          <h3>India Subscriber</h3>
          <select>
            <option>Monthly 500</option>
            <option>Yearly 5000</option>
          </select>
          <button>Subscribe Now</button>
        </div>
        <div className="option">
          <h3>International Subscriber</h3>
          <select>
            <option>Monthly $10</option>
            <option>Yearly $100</option>
          </select>
          <button>Subscribe Now</button>
        </div>
      </div>

      <p>Powered by ELECTION MAHAUL</p>

      <div className="payment-info">
        <p>OR</p>
        <p>Make a one-time Payment</p>
        <p>
          By proceeding, you are agreeing to our Terms of Service and Privacy Policy. View our FAQs and Support page.
        </p>
      </div>

      <div className="bank-details">
        <h3>Direct Bank Transfer:</h3>
        <p>Bank Name: Kotak Mahindra Bank</p>
        <p>A/C Name: Pure Media Private Limited</p>
        <p>A/C No.: 123456789</p>
        <p>IFSC Code: KKBK0000212</p>
        <p>Swift Code: KKBKINBB</p>
        <p>Type: Current Account</p>
        <p>Email: contributions@ELECTIONMAHAUL.in</p>
      </div>

      <p>We will account for your subscription as revenue and pay all applicable taxes on it. Our GST registration number is 11111111111111.</p>
    </div>
  );
}

export default Support;
