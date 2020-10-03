# ASSESSMENT 5: Rails Practical Questions

1. What is the command to create a new Rails application with a Postgres database?

  * rails new i_feel_confident_in_this_one -d postgresql -T and then we must cd into i_feel_confident_in_this_one and then put rails db:create and open that bad boy up and have some fun!

2. Explain each section of the following route:  get '/library/:id' => 'book#show'

get - get is pretty much what it says. It is getting the key/value/etc from a specific place in your database (through the route).

library - I believe that library is the class. Like this?
  class Library < ApplicationRecord
    has_many :books
  end

:id - this is the key or value (I know they are different I think this one is the value? I have just heard tutorials call them different things hahaha. (I might be getting my terminology wrong so im sorry, I do need to memorize some of those cuz that will mess me up.)

book - this would be the "MainController" for the examples we used last. I am trying to remember the actual term. I believe it would be whatever you do like this? 
rails g controller book ? I think hahaha

show - I believe this is the method name we are using? So like for this one it would be:
  def show
    @show (then whatever would complete what its trying to do) 
  end


3. Oops, I forgot to add a foreign key to my model. Describe the steps to remedy this mistake.

  * You would want to use CREATE INDEX to index them and then you would want to use ADD CONSTRAINT statement to add the FOREIGN KEY constraint to the columns.

  <!-- ! truly this one I looked up. I don't know if I was not paying attention but I do remember you saying how to do this but I never wrote it down and cannot find it anywhere in my notes lol, so I looked up some examples online and found this, promise this was the only one I looked up! -->




4. What is the command to generate a Rails model for a person table with columns named shirt, pants, and shoes?

  * rails generate (or just g) model Person shirt:string pants:string shoes:Integer (jk obviously its string == shoes:string)



5. I want to add validations to the model from question 4 to ensure no one can make a new entry without data in all the columns. How do I do that?

  * Inside of the model Person I would write: 
  <!-- I saw people do it all on one line before but I don't know if that is what you taught us to do. So for all intents and purposes I will write them one at a time because that for sure works no matter what -->
  validates :shirt, presence: true 
  validates :pants, presence: true 
  validates :shoes, presence: true 





6. What is the naming convention for generating a Rails model? What is the naming convention for the table that is generated with this command?

  * rails generate model Pokemon name:string type:string height:string weight:integer date_caught:dateTime

  * so we use rails generate and then use model and then what we want the table name to be so (Pokemon) and then we set up the columns which are (name, type, height, and weight). After each column we need to put what kind of data type they need so in this case we put name:string because well its a name so a "string" will go there this also applies to type and height. (Although height could probably be a integer or a float.) Weight:integer means that it will only take a number. I also believe that dateTime will take only a date and it has to be set like this 2020-10, so (full year - month).