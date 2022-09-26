//This is where all the fun will begin guys. Even if everybody is struggling with the code, do your best and we'll try
//to help each otehr out. Good luck and have fun

const url = "https://kea22-6d77.restdb.io/rest/women?max=15";
const url1 = "https://kea22-6d77.restdb.io/rest/menswear?max=20";
const url2 = "https://kea22-6d77.restdb.io/rest/accessories?max=20";

//The API key:
const options = {
  headers: {
    "x-apikey": "63317a1532330102d591d1e0",
  },
};

fetch(url, options)
  .then((response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    //we have the data
    console.log(data);
    //handleData(data);
  })
  .catch((e) => {
    //woops something went wrong
    console.error("An error occured:", e.message);
  });
