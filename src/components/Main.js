import "./Main.css";

export default function Main() {
  return (
    <div className="Main">
      <div>
        <h3 className="professional-experience">Professional Experience</h3>
        <hr />

        <h4 className="vercel">Vercel</h4>
        <h5 className="finance-manager">Finance Manager</h5>
        <ul className="finance-manager-content">
          <li>Write SQL queries in Snowflake</li>
          <li>
            Collaborate with the Director of Data and Senior Analytics Engineers
            on various dashboards, giving everyone in the company greater
            visibility into our key operating metrics
          </li>
          <li>Build complex financial models</li>
        </ul>
        <h5 className="sfa-vercel">Senior Financial Analyst</h5>
        <ul className="sfa-vercel-content">
          <li>Complete materials for our board of directors</li>
          <li>
            Present monthly summary of our Pro performance during business
            reviews, which included our CEO, CTO, and other key executives
          </li>
          <li>
            Collaborate with infrastructure engineers and product managers to
            better understand cost drivers for our variable spend
          </li>
        </ul>

        <h4 className="uhg">UnitedHealth Group</h4>
        <h5 className="financial-consultant">Financial Consultant</h5>
        <ul className="fc-content">
          <li>
            Assist in forecasting financials for the Medicare & Retirement
            business, building financial models and decks for leaders that
            highlight key performance metrics
          </li>
          <li>
            Build complex finanical models and supporting schedules for the
            long-range planning process, helping forecast financials out over
            the next 5 years
          </li>
          <li>
            Support market CEO's, product strategy, and actuarial teams in
            annual competitive bid planning, producing financials and insights
            for over 200 different markets
          </li>
        </ul>
        <h5 className="sfa-uhg">Senior Financial Analyst</h5>
        <ul className="sfa-uhg-content">
          <li>
            Utlized Thomson Reuters Eikon and S&P Global Market Intelligence to
            analyze competitor financials, track M&A activity, and montior
            earnings releases
          </li>
          <li>
            Communicated directly with the the CFO and VP of Finance from
            acquired orgnaization (Peoples Health) on monthly financials,
            forecasting, and strategy
          </li>
          <li>
            Prepared timely and accurate reports that helped analyze actuals and
            forecasts and communicated findings to senior leadership
          </li>
        </ul>
      </div>

      <div>
        <h3 className="education">Education and Certifications</h3>
        <hr />
        <h4 className="stthomas">University of St. Thomas</h4>
        <i>Bachelor of Business Administration in Finance</i>

        <h4 className="uofm">University of Minnesota</h4>
        <i>Bachelor of Arts in Economics</i>

        <h4 className="aws-certs">Amazon Web Services</h4>
        <i>AWS Certified Cloud Practitioner</i>
      </div>

      <div>
        <h3 className="tech">Technologies and Languages</h3>
        <hr />
        <p className="languages">
          <b>Languages:</b> JavaScript, Python, SQL, Java
        </p>
        <p className="technologies">
          <b>Technologies:</b> AWS, Git, Postgres
        </p>
        <p className="other">
          <b>Other:</b> Data structures and algorithms
        </p>
      </div>

      <div>
        <h3 className="projects">Projects</h3>
        <hr />
        <ul>
          <li>Project #1</li>
          <li>Project #2</li>
          <li>Project #3</li>
        </ul>
      </div>

      <div>
        <h3 className="interests">Interests</h3>
        <hr />
        <ul>
          <li>Golf, hockey, traveling, hiking, exercising</li>
        </ul>
      </div>
    </div>
  );
}
