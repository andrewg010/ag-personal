---
titleText: Interactive Slots Incentive
headTitle: Interactive Slots Incentive
metaDescription: An interactive game to drive bookings with a back end dedicated Express microservice for handling entries including a React based UI for self service administration
postDate: 07-01-2019
metaOgImg: /img/summer-spin-l.png 
listImgSrcSet: /img/summer-spin-m.png
---
<h2>Driving bookings in a fun way - building a dedicated service with admin panel and customer facing submission UI</h2>
<h3>The front end part</h3>
<p>Twice a year we run an online incentive to encourage the travel agents we work with to make bookings with us.
The team that design and run these challenges like to put a fun 'spin' on things. Enter the Summer Spin to win competiton.
Together with another teammate, who worked on the styling and layout of the customer facing page, I helped to make this a reality.</p>
<img srcSet='/img/summer-spin-s.png 500w, /img/summer-spin-m.png 800w, /img/summer-spin-l.png 1200w' alt='Image of the frontend' />
<p>The competiton took the form of a slot machine. Travel agents who have made bookings with us for their customers could enter a booking reference, spin the slot and get a win or loss result.</p>
<p>Winners would be notified of their prize once they had chosen whether they wanted to gamble it for a chance of a bigger, better prize or take their booty as it currently was. Contact details would then be collected so the prizes could be sent.</p>
<h3>Front end challenges</h3>
<ul>
<li>Making requests to the back end service and updating the UI based on responses</li>
<li>Collecting and validating user input (booking ref, contact details)</li>
<li>Animating the slots and displaying different results based upon a win or loss response</li>
</ul>
<h3>The microservice</h3>
<p>The primary purpose of the service was to accept competition entries and distribute prizes automatically. This was done in a process of steps as follows:</p>
<ul>
<li>A booking reference is sent as a requst to enter the competition</li>
<li>Booking reference is validated and valid references stored in a database</li>
<li>Pick the next result from the prizes table in the database and return this to the user (table was a list of losses and wins)</li>
<li>Wait for the user to submit details and store these against the appropriate booking reference</li>
<li>Send back the prize to the user where relevant after having collected their details</li>
<li>Send confirmation email where relevant</li>
</ul>
<p>This is illustrated with the following graphic:</p>
<img srcSet='/img/svg/incentive-behaviour-s.svg 500w, /img/svg/incentive-behaviour-m.svg 800w' alt='Competiton entry model' />
<p>To perform booking reference validation and send emails, the service had to communicate with other internal services within the infrastructure. This was possible using RPC functions exposed by other services and dealt with in this service. The image below demonstrates how this was possible.</p>
<img srcSet='/img/svg/incentive-infrastructure-s.svg 500w, /img/svg/incentive-infrastructure-m.svg 800w' alt='Service structure image' />
<h3>The admin panel</h3>
<p>To allow the team who run the incentive to administrate it freely, the incentive microservice also included a control panel.
This panel needed to break down into two sections: prizes and reports.</p>
<p>In the prizes section the team needed to be able to add prizes on a week by week basis, this was to be done using a spreadsheet upload. The team also needed to be able to make changes to and view the prizes on a weekly basis.</p>
<img srcSet='/img/incentive-prizes-s.png 500w, /img/incentive-prizes-m.png 800w, /img/incentive-prizes-l.png 1200w' alt='prizes section of control panel' />
<p>In the reports section the team needed to be able to see the entries to the competiton, any prizes won and the contact details for the entrant. This information needed to be exportable as a spreadsheet.</p>
<img srcSet='/img/incentive-reports-s.png 500w, /img/incentive-reports-m.png 800w, /img/incentive-reports-l.png 1200w' alt='reports section of control panel' />
<h3>Challenges at the back end</h3>
<ul>
  <li>Validating booking references using results from other services</li>
  <li>CRUD operations for prizes, entries and reports</li>
  <li>Exporting database information to a spreadsheet</li>
  <li>Creating a UI for the admin control panel</li>
  <li>Dealing with a three step process for entries to the competition</li>
  <li>Dealing with spreadsheet uploads of information into the database</li>
</ul>
<h3>Implementation</h3>
<ul>
  <li><b>React</b> - For the implementation of the control panel UI</li>
  <li><b>Express / Node</b> - For the handling of the microservice API</li>
  <li><b>MySQL</b> - For the database to store the entries and prizes</li>
  <li><b>Webpack & Babel</b> - For bundling and creating the front end pages</li>
  <li><b>RPC</b> - For communicating with other microservices</li>
</ul>
