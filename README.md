# MARS Mobile CMS v0.1  
---
MARS Mobile CMS v0.1
---
## Website pages
<a data-flickr-embed="true" data-header="true" data-footer="true" data-context="true"  href="https://www.flickr.com/photos/67625496@N06/27832285734/in/dateposted-public/" title="marscms-hom"><img src="https://c7.staticflickr.com/9/8419/27832285734_ddd725c1a4_n.jpg" width="320" height="198" alt="marscms-hom"></a> 


<a data-flickr-embed="true" data-header="true" data-footer="true" data-context="true"  href="https://www.flickr.com/photos/67625496@N06/28343841712/in/dateposted-public/" title="marscms-servicespage"><img src="https://c1.staticflickr.com/9/8777/28343841712_d3f9e11cff_n.jpg" width="320" height="197" alt="marscms-servicespage"></a>
<!--<script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>-->

  
## Website Admin Dashboard
<a data-flickr-embed="true" data-header="true" data-footer="true" data-context="true"  href="https://www.flickr.com/photos/67625496@N06/28370248251/in/dateposted-public/" title="marscms-dashboardmain"><img src="https://c4.staticflickr.com/9/8656/28370248251_9c7d9eea8b_n.jpg" width="320" height="200" alt="marscms-dashboardmain"></a> 

## Website Admin Dashboard - Settings page
<a data-flickr-embed="true"  href="https://www.flickr.com/photos/67625496@N06/26733383952/in/dateposted-public/" title="settings-dashboard1"><img src="https://farm8.staticflickr.com/7322/26733383952_a642a4c2d3_b.jpg" width="970" height="734" alt="settings-dashboard1"></a> 

## Website Admin Dashboard - Login page - Private Zone
<a data-flickr-embed="true" data-header="true" data-footer="true" data-context="true"  href="https://www.flickr.com/photos/67625496@N06/28448773615/in/dateposted-public/" title="marscms-login"><img src="https://c8.staticflickr.com/9/8327/28448773615_646991ff11_n.jpg" width="302" height="320" alt="marscms-login"></a> 

## API and Database Admin DeployD Dashboard
<a data-flickr-embed="true"  href="https://www.flickr.com/photos/67625496@N06/26827076945/in/dateposted-public/" title="deployd-dashboard"><img src="https://farm8.staticflickr.com/7191/26827076945_98a3a0e189_b.jpg" width="972" height="740" alt="deployd-dashboard"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script>

 
---
###Download
To download paste this command in your terminal window:

```
https://github.com/moorthi07/MarsCMS.git
```
---

###Instalation
Make sure you have [Node.js](https://nodejs.org/) installed.   [MongoDB](http://www.mongodb.org/) - community version installed. [Git terminal tool] (https://git-scm.com/) installed.
 
*** Make sure you are in elevated adminstrator permission. (Some packages will through error if you don't have right permission.)
```
-- In Mac / Linux : In terminal use 'sudo root' to change user to admin
```
-- In Windows : Right click on 'command prompt' in menu and select 'Run as administrator'

Step 1. - Install Grunt and Bower

Open your terminal/command window and install Grunt by pasting this code:
```
npm install -g grunt-cli
```
Also install Bower.
````
npm install -g bower
```

Step 2. - Install dependencies

Go to the project folder in your terminal window and use the following command to install the NPM dependencies. 

```
npm install
```

Now install your Bower dependencies by using

```
bower install
```

Step 3. - Execute Grunt and Grunt watch

In order to make the app work execute Grunt to minify and concatenate the `javascript` files and the `css` files.
```
grunt
```
Use Grunt watch to be able to deploy the modified files automatically by running the Watch section of the .grunt file. You can do that by using:
```
grunt watch
```
---
###Running the app

###Check MongoDB connection string:

If you have not created any mongodb database, Mars CMS will automatically create dpdinterface  database in mongodb. If you like to use different database , change the following code in 'app.js' in the root folder (not in the /public folder *)
```
db: {
    connectionString: 'mongodb://localhost:27017/dpdinterface'
  }
```
You can run the app by starting mongodb and the entire app. After that, open your browser and go to [http://localhost:2403/dashboard](http://localhost:2403/dashboard). Go to the users collection and add an admin user. (Fillin Users first and last name and select admin column check box to make the user as 'ADMIN')

First start and run the,
MongoDB:
```
mongod 
```
Next start the deployd web server,
For Application in production: 
```
npm start
```

For Application in development:
```
npm run dev
```
---
### Accessing two User Interfaces: ( GUI )
 ```
1. Deployd admin Dashboard: URL:
```
http://localhost:2403/dashboard
```
2. Public website : URL: http://localhost:2403
```
3. Website admin site (cms to update the public pages / add users / polls, etc.) - in the public website click on 'login' to open the cms admin site.
```
-- To change the first page (website look and content), login (step 3) to the Website admin site 
```
-- then  click on the menu button to open the side navigation menu
```
-- in the menu select 'Settings' -here you should set up your application title, app name, theme, etc.
```
-- you can create more users with different permission levels

```
We are working on to make it best. Post your comments here. 
 








####Thank you
