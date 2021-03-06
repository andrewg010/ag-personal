---
titleText: Alerting Microservice
headTitle: Alerting Microservice
metaDescription: A microservice for handling emergency alert messages across a multitude of websites and platforms. UI for administrating the alerts. User validation to keep track of who is using the service and making changes. 
postDate: 11-01-2019
listImgSrcSet: /img/alert-message-m.png
---
<h2>Self-service UI, alert management microservice with user authentication</h2>
<p>During emergency situations such as phone line outages or unexpected trading challenges (COVID-19 is a good example!) it may be necessary to display a message to customers at short notice across many pages and platforms to inform them of any situation.</p>
<p>This microservice solved that problem by exposing an API to allow an app or page to get the latest alert message for a specific domain and whether or not that alert is currently active.</p>
<img srcSet='/img/alert-message-s.png 500w, /img/alert-message-m.png 800w, /img/alert-message-l.png 1200w' alt='Image of an example alert message' />
<p>An admin panel was also available so that anyone in the company would be able to activate an alert message. This is more often than not likely to be someone who isn't a developer and so would need a simple, UI based way to make changes to the alerts at a moments notice. The alert could then be visible immediately across the website and mobile app.</p>
<img srcSet='/img/harp-service-s.png 500w, /img/harp-service-m.png 800w, /img/harp-service-l.png 1200w' alt='image of alert service' />
<p>The UI provides a way of setting and activating alert messages as well as allowing administrators to add new websites or domains to the list.</p>
<p>Due to the immediate nature of any changes made to alerts in this service and the immediate customer impact it was necessary to authenticate users so that any changes could be attributed to a specific individual. A log of changes and the user who made these changes was also implemented and added to the admin UI. The UI also offered a way to filter the logs by domain, user and date.</p>
<img srcSet='/img/harp-reports-s.png 500w, /img/harp-reports-m.png 800w, /img/harp-reports-l.png 1200w' alt='image of the reporting' />
<h3>Challenges</h3>
<ul>
  <li>CRUD operations for alerts and the domains they apply to</li>
  <li>Designing a UI for simple and quick changes to alert messages.</li>
  <li>Authorising users and tracking their actions</li>
  <li>Using React context API to manage state effectively</li>
</ul>
<h3>Implementation</h3>
<ul>
  <li><b>Next.js</b> - For server side rendering of the control panel</li>
  <li><b>Express.js / Node</b> - For the microservice API (endpoints to get alerts and perform CRUD operations on alerts)</li>
  <li><b>React</b> - For the UI itself</li>
  <li><b>MySQL</b> - The database</li>
  <li><b>Passport / OAuth</b> - User authentication</li>
  <li><b>RPC</b> - Exposing RPC functions to get the alerts</li>
</ul>