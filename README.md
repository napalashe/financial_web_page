<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
</head>
<body>
    <h1>Financial Web Application</h1>
    <p><strong>Developed by Skill Issue</strong></p>
    


  <p>This financial web application keeps users informed with the latest trends and news in the financial sector.</p>
    <h2>Features</h2>
    <ul>
        <li><strong>Robust Framework:</strong> Utilizes the Django framework for backend operations, allowing seamless creation and storage of user information.</li>
        <li><strong>Real-Time Stock Updates:</strong> Integrates with Polygon.io to display dynamic, real-time updates on stock performances, ensuring that users always have access to the latest financial data.</li>
        <li><strong>User Engagement:</strong> Allows users to register, login, and author their own blog posts. Features integrated user authentication and session management to provide secure access and a personalized experience catered to specific financial needs.</li>
    </ul>

  <h2>Tech Stack</h2>
    <h3>Frameworks</h3>
    <ul>
        <li>Django</li>
    </ul>
    <h3>Programming Languages</h3>
    <ul>
        <li>Python</li>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
    </ul>
    <h3>Database Storage</h3>
    <ul>
        <li>SQLite (db.sqlite3)</li>
    </ul>

  <h2>Requirements</h2>
    <p>To run this application on your local machine, ensure you have the following installed:</p>
    <ul>
        <li><strong>Django</strong>: Framework for building robust web applications.</li>
        <li><strong>Jazzmin</strong>: Django theme for a better admin interface.</li>
        <li><strong>Python 3.0</strong> or higher.</li>
        <li><strong>Polygon API Client</strong>: To interact with real-time financial data from Polygon.io.</li>
        <li><strong>Live server extension on whatever IDE you use.</li>
    </ul>

  <h3>Installation Commands</h3>
    <p>Here are the commands to install the necessary requirements:</p>
    <pre>
        
  pip install django

  pip install django-jazzmin
  
  pip install polygon-api-client
    </pre>

<h2>How To start running this</h2>
<p>To run this on your local machine and you hvae installed the following dependencies please enter the following commands in the terminal:</p>
<pre> python3 manage.py runserver </pre>
<p>This will start the live server and allow you to run on localhost and view the webpage.</p>
<h2>Lastly, you will need a polygon API key (free) in order to gather data</h2>
<p>In the settings.py file in the financial_web_page directory, scroll down to the bottom and add your own key to </p>
<pre>POLYGON_API_KEY = "{YOUR KEY HERE}"</pre>

</body>
</html>
