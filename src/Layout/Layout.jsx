import React from 'react';
import classes from './Layout.scss';
import Aside from '../Aside';

const Layout = ({ children }) => (
  <div className={classes.container}>
    <div className={classes.asideWrap}>
      <Aside />
    </div>
    <div className={classes.content}>
      <div>
        <div>
          <p>
            Web development is my vocation; there is constant drive and ambition to learn new technologies, engage with
            new teams to gain and share knowledge. My main field of expertise is frontend development; my stack is
            react/ redux, bundling with Webpack and styling through SASS or JSS, also used JEST for testing.
            Additionally, I have hands-on backend experience mainly with PHP/ MYSQL but I have also used Mongo, Redis
            and Nodejs. In terms of infrastructure, I am familiar with Git, Teamcity, Jenkins, Jira and many more. I
            thoroughly enjoy team building activities and tasks, easy to communicate with, adaptable to new teams and
            highly productive, never hesitant to go the extra mile.
          </p>
        </div>
      </div>
      <h2>Work experience</h2>
      <div>
        <h3>Finam - Senior Frontend developer Feb. 2017 to present</h3>
        <p>Mainly I code trading interfaces based on React/Redux. Code in Javascript and TypeScript, building in
          house npm libraries, working with api like, REST, GRPC, Protobuf. Working with microservices. UI
          performance Optimization. Unit test with Jest. Building CI configurations. Code reviewing. and a lot
          more interesting.
        </p>
      </div>
      <div>
        <h3>Helix Consulting 2013 – 2017, Senior Full stack developer</h3>
        <p>Development and leading projects like booking platform frontend and backend, taxi service fronted apps,
          intranet CRM, e-commerce, social network, architecting and executing of mobile APIs with mobile team.
          doing meetings with clients and managers, helping in technical specifications, asigning tasks to junior
          developers. Technologies I used here were JS(React/Redux,expressjs), PHP(Laravel)</p>
      </div>
      <div>
        <h3>London School of Business and Finance 2010 – 2013, Web developer and teacher</h3>
        <p>Web development of the intranet website and public website of the school.
          Network, computer, software administration.
          Teaching kids computing for A-Level exams.
        </p>
      </div>
      <div>
        <h3>Glendale Hills 2008 - 2010, 3D modelling and visualization</h3>
        <p>3D Visualisation of Architectural Objects such as buildings, appartments</p>
      </div>
    </div>
    <div>
      <h3>Current stack</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>Redux</li>
        <li>gRPC</li>
        <li>Protobuf</li>
        <li>JSS</li>
        <li>SASS</li>
        <li>webpack</li>
        <li>Node</li>
        <li>express.js</li>
      </ul>
    </div>
    <div>
      <h3>Other tech skills</h3>
      <ul>
        <li>PHP</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Nginx</li>
        <li>Docker</li>
      </ul>
    </div>
    <div>
      <h3>Languages</h3>
      <ul>
        <li>Russian</li>
        <li>English</li>
      </ul>
    </div>
  </div>
);

export default Layout;
