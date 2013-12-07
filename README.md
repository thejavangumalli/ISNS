RESTful Intra Store Notification System
=======================================

$ mvn clean package

# To launch admin instance
$ java -jar target/ISNS-0.0.1-SNAPSHOT.jar server config/intra_store_notification.yml 

# To launch client instance
$ java -jar target/library-0.0.1-SNAPSHOT.jar server config/library_b_config.yml 


Service endpoint: 
admin port   http://localhost:8080
Client       http://localhost:9001

Admin: http://localhost:8081/

Refer https://docs.google.com/document/d/1vsWqgWh98hdGp4cZAhtK6X6tsG8yLKfQY_GwGMLN2k0/edit?usp=sharing for how to.

