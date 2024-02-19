import "./Main.css";

export default function Main() {
  return (
    <div className="Main">
      <div>
        <h3 className="professional-experience">Professional Experience</h3>
        <hr />

        <h4 className="vercel">Vercel</h4>

        <h5 className="finance-manager">Finance Manager</h5>
        <h5 className="date">April 2023 - Present | Remote</h5>
        <ul className="finance-manager-content">
          <li className="align-left">Write SQL queries in Snowflake</li>
          <li className="align-left">
            Collaborate with the Director of Data and Senior Analytics Engineers
            on various dashboards, giving everyone in the company greater
            visibility into our key operating metrics
          </li>
          <li className="align-left">Build complex financial models</li>
        </ul>
        <h5 className="sfa-vercel">Senior Financial Analyst</h5>
        <h5 className="date">February 2023 - Present | Remote</h5>
        <ul className="sfa-vercel-content">
          <li className="align-left">
            Complete materials for our board of directors
          </li>
          <li className="align-left">
            Present monthly summary of our Pro performance during business
            reviews, which included our CEO, CTO, and other key executives
          </li>
          <li className="align-left">
            Collaborate with infrastructure engineers and product managers to
            better understand cost drivers for our variable spend
          </li>
        </ul>

        <h4 className="uhg">UnitedHealth Group</h4>
        <h5 className="financial-consultant">Financial Consultant</h5>
        <h5 className="date">February 2021 - February 2023 | Minnetonka, MN</h5>
        <ul className="fc-content">
          <li className="align-left">
            Assisted in forecasting financials for the Medicare & Retirement
            business, building financial models and decks for leaders that
            highlight key performance metrics
          </li>
          <li className="align-left">
            Built complex finanical models and supporting schedules for the
            long-range planning process, helping forecast financials out over
            the next 5 years
          </li>
          <li className="align-left">
            Supported market CEO's, product strategy, and actuarial teams in
            annual competitive bid planning, producing financials and insights
            for over 200 different markets
          </li>
        </ul>
        <h5 className="sfa-uhg">Senior Financial Analyst</h5>
        <h5 className="date">April 2019 - February 2021 | Minnetonka, MN</h5>
        <ul className="sfa-uhg-content">
          <li className="align-left">
            Utlized Thomson Reuters Eikon and S&P Global Market Intelligence to
            analyze competitor financials, track M&A activity, and montior
            earnings releases
          </li>
          <li className="align-left">
            Communicated directly with the the CFO and VP of Finance from
            acquired orgnaization (Peoples Health) on monthly financials,
            forecasting, and strategy
          </li>
          <li className="align-left">
            Prepared timely and accurate reports that helped analyze actuals and
            forecasts and communicated findings to senior leadership
          </li>
        </ul>

        <h4 className="uhg">Provenire Capital</h4>
        <h5 className="financial-consultant">Equity Research</h5>
        <h5 className="date">April 2018 - March 2019 | Minneapolis, MN</h5>
        <ul className="fc-content">
          <li className="align-left">
            Communicated directly with the portfolio manager on potential
            investment decisions in the Technology, Media and Telecom (TMT)
            sector
          </li>
          <li className="align-left">
            Utilized Bloomberg for financial data and analysis and reviewed SEC
            documents and equity research reports from industry leading analysts
          </li>
          <li className="align-left">
            Conducted industry and company specific research and built financial
            models for valuation
          </li>
        </ul>
      </div>

      <div>
        <h3 className="education">Education and Certifications</h3>
        <hr />
        <h4 className="stthomas">University of St. Thomas</h4>
        <p className="bba">Bachelor of Business Administration in Finance</p>
        <i>2015 - 2017 | St. Paul, MN</i>

        <h4 className="uofm">University of Minnesota</h4>
        <p className="ba">Bachelor of Arts in Economics</p>
        <i>2013 - 2015 | Minneapolis, MN</i>

        <h4 className="aws-certs">Amazon Web Services</h4>
        <p className="ba">Certified Cloud Practitioner</p>
        <p className="ba">Certified Solutions Architect - Associate</p>
      </div>

      <div>
        <h3 className="tech">Technologies and Languages</h3>
        <hr />
        <p className="languages">
          <b>Languages:</b> JavaScript, Python, SQL, Java
        </p>
        <p className="technologies">
          <b>Technologies:</b> AWS, Git, MongoDB, React
        </p>
        <p className="other">
          <b>Other:</b> Data Structures and Algorithms
        </p>
      </div>

      <div>
        <h3 className="projects">Projects</h3>
        <hr />
        <ul className="project-content">
          <li className="align-left">AWS Cloud Resume Project</li>
          <li className="align-left">Movie Comparison</li>
          <li className="align-left">Maze Game</li>
        </ul>
      </div>

      <div>
        <h3 className="interests">Interests</h3>
        <hr />
        <ul className="interests-content">
          <li className="align-left">Golf, Hockey, Traveling, Hiking</li>
        </ul>
      </div>
    </div>
  );
}
