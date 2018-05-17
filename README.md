# Drover Assignment

**My task was to build their Search Page**

The page can be found at https://www.joindrover.com/cars/search and there are 2 versions of it (Consumer, Private-Hire) with very small differences between the two.


**What did they expect from me?**

Using https://github.com/facebook/create-react-app as a boilerplate (or any other you might prefer) try and get as much done as possible.

We know people have different amounts of time to do this test so we have broken it down into sections based on amount of time you have. Please try and do as much as possible but if you only have time for one section we understand, of course, the more you do the better an idea we have of your skills.

**Basic**

    - Setup an app that calls our API to get vehicles for one vehicle type
    - Display vehicles in a list/table to the user with relevant data (eg: make, model, year, color, price - see notes)
    - Allow at least 2 fields (location is required) in search to be user inputted (submit button? automatic?)

    Bonus: add some styling

**Keep going**

    - Add all fields able to search by for one vehicle type (please see live website)
    - Write unit/snapshot tests for most if not all components
    - Add styling to make it look like https://www.joindrover.com/cars/search

    Bonus: add functionality for pagination

**All out!**

    - Search can search for both types of vehicles (Consumer & Private-Hire aka PCO)
    - Unless already done, Pagination!!
    - Styling as close to original as possible
    - Fully responsive

    Bonus: add google autocomplete to the location in the search filters


## Tech Stack

ReactJS


## Installation

- Run 'git clone https://github.com/JoshuaJFHolloway/Drover' in your terminal


## Usage

- Run 'npm install'
- Run 'npm start'
- Visit 'localhost:3000' in your browser to see the app


## Approach

#### API

Knowing that a lot of this task would be around successfully tapping into Drovers API, I did a lot of
background work on how it would be best access all the information needed for the search page. It was a
challenge to handle the asynchronous behaviour of the app. Regularly I came across issues whereby the state
was being called upon quicker than the API call was updating it. 

#### Reusable components

Making sure that I don't waste time writing code that could have been replaced by reusing prior code was 
also a focus. One of the best parts of React is how code is reused and its important to a slim and efficient app.

#### Reusing handlers

I was also aware of not writing out multiple event handlers when I can mould one to do most, if not all, the events
while still abiding to the SRP. 


## Bugs

#### General 

I did not have enough time to make it bug free. Async JS is the crux of the issue. Knowing the best react way to do this would be really helpful.

#### Tags

Unfortunately I did not get round to making this input operational. If left untouched then it works on the
basis of its default input of 'Any'. However, if changed it causes the app to fail. This is because it needs to be
in an array format and I was not able to integrate it in time. I also was wondering the best way to do it without
adding lots of code just for it specifically. 

#### Dropdown menu

I had lots of issues with using react drop down menus. For a few hours I was stuck on grabbing the value of the
dropdown menus event. It was puzzling. If I logged out the event I could see the value property, but whenever I
tried to access it it was undefined. However, I was able to access the name. This wasn't enough though.
To make it work I would have had to construct multiple different handlers for each dropdown and I thought
that was a bit tedius and bad practise. Therefore, I stuck with text inputs. This however, also caused an issue.
Dropdown menus would have made the process a lot easier and less straining on the App. With pre-defined values
it would mean that I wouldn't have to worry about changing strings to integers before the Api uses it. Moreover,
it would mean that the Api wouldn't be making post requests on every single character entered into the text box.
This is very demanding on the app and not very efficient. 


## Future Additions

Apart from fixing the aforementioned bugs:

1. I would like to style the code a lot better. The time I spent on the
   test was mostly on the Api, the logic behind the code and the structure. Replicating the layout of the
   search page would be one of my priorities and I am going to do this over the next few days.

2. Add the last few features that make up the page. For example the buttons. 

3. Make the components more re-usable. I would have separated out some code more if I had the time. Take the
   price outside of the header component etc. 

4. Add tests!! As testing was not the priority for this exercise I did not follow TDD. Which felt a bit
   strange. For me this exercise was to refine and explore API's further and I certainly did that and have 
   learnt a lot more. (I have left some basic tests in there from a previous react app I wrote just to show
   some of the basic level ones I would have started off writing if I had time. However, I understand that mocking
   the API call would have been a huge part of the testing).
   
5. Complete the rest of the tasks that make up the 2nd and 3rd stages as part of the challenge. 

6. ~~I was also very aware of the fact that the images changed pattern often. It meant that there wasn't one consistent
   placement of the image used to advertise the cars. Which meant that I ended up sometimes having pictures of the cars
   which were internal or of the rear when they should be the front. This happened rarely with the pictures but it is still
   something that's important to fix.~~ Fixed !


## Screenshots of use!

Below you can see a screenshot of the application once loaded. The left hand side are the spec inputs and the right
hand side updates accordingly. There is still a lot of formatting I would like to get done especially on the strings
that accompany each image.

<a href="https://ibb.co/gs3ZBJ"><img src="https://preview.ibb.co/eKT1rJ/Screen_Shot_2018_05_15_at_13_13_45.png" alt="Screen_Shot_2018_05_15_at_13_13_45" border="0"></a>


## Contributors

Joshua Holloway