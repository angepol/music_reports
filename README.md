# music_reports

> Filter search

![Screen Shot 2022-09-09 at 4 05 45 PM](https://user-images.githubusercontent.com/50424620/189456958-b0d2fc41-23f5-4f1f-a8d9-995184499db2.png)


steps to run project locally

1. git clone!
2. npm i
3. npm start



## Music Reports Web Development Test

#
Step 1:
Create a react project using either create react app or webpack

Here I used create-react-app

Step 2:
Create 2 pages using hooks to navigate between them

Here I used raect Router Dom Version 6 with, I navigating between pages with useNavaigate();

Step 3:
Add a form with at least one input and a table to each page

I have added a search input to each page


Step 4:
Add data to the tables using an ajax call. If you have an existing dataset you can use it. 

Here I used the Fetch API to get data from this data set.
I used - https://dummyjson.com/products


Step 5:
Create a filter/search for each table using useEffect/useState to trigger from the input on the same page

Here I wrote a functin that checks if the search input is empty, and if so it shows all the data. Otherwise it will filter the products according to the search input.


Step 6:
Using context maintain the filters on each page when navigating back and forth.

I ran out of time for step 6 - 
I plan to make Global storage using the context API, in order for the filtered search results to persist as a user navigates between pages aor closes and reopen the browser.

Step 7:
Post your code on your github. 


Thank you for reading!

Angeline
