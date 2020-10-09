# ASSESSMENT 5: Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Rails follows an MVC pattern. What does that mean?

  Your answer: It stands for Model View Controller. I cannot remember what this fully means.

  Researched answer: What it means is that requests first come to the controller, then the controller finds an appropriate vew and interacts with that model. This in turn interacts with the database and sends the responses to the controller.



2. What does it mean if an application has CRUD? What does CRUD stand for?

  Your answer: Create, Read, Update and Destroy. I believe that CRUD is used for when we are working with databases. Getting info in and out of them.

  Researched answer: It means that it is part of a persistent storage application. That refers to any data storage device that retains power after the device is powered off. (pretty cool honestly!)



3. What is a migration? Why would you use one?

  Your answer: migrations take all of the changes you have made to your models and saves them. You would use one if you were putting in has_many or belongs_to.

  Researched answer: Migrations are a convenient way to alter your database schema over time in a consistent way. You can think of each migration as a "new version" of the database.



4. Describe as many possible relationships between a model called Person and a model called Computer as you can think of. Based on each description, which model would hold the foreign key?

  Your answer: rails generate model Person/Computer (i know thats not how you would write it) brain_power:string basic_functions:string spill_water_on_us_we_hate_it:boolean * I could go on and on but to answer the question I believe basic_functions or brain_power would hold the foreign key.

  Researched answer: * I will be honest I don't know how I am supposed to research this *



5. What is object-relational mapping?

  Your answer: I did not have an answer for this one, so please refer to researched answer.

  Researched answer: It means you don't have to manually call the database yourself; the ORM handles it for you. This is what ActiveRecord is considered and, supposedly, it's a really good one. 



6. What is a gem?

  Your answer: A "packet" of data and code that is used for ruby and rails. Kinda like a pre packaged thing that makes it so you do not have to code more details than you already do.

  Researched answer: It is a packaged manager for the ruby programming language (so node is for javascript i think). It is in a self-contained formate and is a tool designed to easily manage installation of code and providing a server for distributing it.



7. Why is it important to have validations in your application?

  Your answer: Validations keep your data safe and it keeps your code safe from users who want to intentionally hurt the system or do it by accident. It also helps you keep things such as passwords safe and helps with security in other ways.

  Researched answer: Validation will ensure any data entered by the user is valid and will prevent bugs creeping in due to invalid data. It also allows us to define and implement important rules around how the business operates and how the application should reflect and respect those rules.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

- RESTful routes - REST is an architectural style that is used in Rails by default. RESTful design helps to create default routes (by using resources keyword) in the config/routes.rb file.

- API - An application programming interface is a computing interface which defines interactions between multiple software intermediaries. It defines the kinds of calls or requests that can be made, how to make them, the data formats that should be used, the conventions to follow, etc.

- Endpoints - An API endpoint is a point at which an application program interface (API) -- the code that allows two software programs to communicate with each other -- connects with the software program. APIs work by sending requests for information from a web application or web server and receiving a response.

- Strong params - It provides an interface for protecting attributes from end-user assignment. This makes Action Controller parameters forbidden to be used in Active Model mass assignment until they have been explicitly enumerated.

In addition, parameters can be marked as required and flow through a predefined raise/rescue flow to end up as a 400 Bad Request with no effort.
