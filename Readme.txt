The following project has been hosted on the amazon aws servers.
two cloud functionalities have been utilised for this project.

1) RDS
Amazon Relational Database Service is a distributed relational
database service by Amazon Web Services. It is a web service
running "in the cloud" designed to simplify the setup,
operation, and scaling of a relational database for
use in applications.

The database used is MySQL for the web application. Hence the 
Amazon RDS is the best database cloud service available as it allows ud to directly 
connect to the database using the MySQL workbench


2) Amazon EC2 
This is where the server is run on the Amazon AWS.
As the web appication uses simple Nodejs architecture 
we connexted the EC2 instance with the database in the RDS 

we have to SSH into the EC2 and then run the command 
`node index.js` for the website to run.


The database.js file has to be filled with the database connection details however it has been filled with dummy data in this submission due to 
security issues while sending the file via mail and uploading it in git.
Hence the project live demo will be given my any of the three of us whenever required