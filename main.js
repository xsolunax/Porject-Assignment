//---To Note---
//1. All pre-built functions must return a new array
//2. You can make new functions as long as you want but do not change or update the pre-built ones
//3. You can udpdate the values inside the *newsList variable if you want but do not change the variable name
//4. Happy coding :)

//newsList is the variable that holds an array of strings
export var newsList = [
  "What films should an aspiring journalist watch?",
  "Buried underpants and tea bags help scientists evaluate soil",
  "Decoder: Mining asteroids for minerals can help spare Earth",
  "Media glare can enrich tennis pros yet imperil mental health",
  "Nightmare TV show 'Euphoria' — health threat or high art?",
  "Decoder: Armenia in a bind as Ukraine war resets global order",
  "What books should an aspiring journalist read?",
  "Marie Colvin shined a light on war-torn corners of the world",
];
export var tempArray=newsList //copy newsList array
export var searched=[] //array for storing searched news

export function search() {
  //inputValue is the variable that contains the search string
  let inputValue = document.getElementById("search-input").value;
  //Write your code here for the search function
  searched.length = 0; //empty array searched to avoid duplicates
  newsList = []; //empty newsList array to avoid duplicates
  newsList=tempArray; //copy original lists of news
  //console.log(newsList)
  if (inputValue!=""){ //Check if search bar is not empty
    newsList.forEach((v)=>{
      if(v.toLowerCase().includes(inputValue.toLowerCase())){ //checks if search bar includes any words from the newsList
        searched.push(v);
        newsList=searched;
      } else {
        newsList=searched; //if words do not match, show no results.
      }
    })
  }
  return newsList;
}

export function sort(type) {
  if (type == "ascending") {
    //Write your code here for sorting (ascending)
    return newsList.sort();
  } else{
    //Write your code here for sorting (descending)
    return newsList.sort().reverse()
  }

}
