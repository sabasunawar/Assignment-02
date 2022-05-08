document.getElementById("submit").addEventListener("click", (e) => {
  e.preventDefault();
  const text = document.getElementById("input").value.trim();
  if (text !== "") {
    alert("YOU ENTERED\n" + text);
  } else {
    alert("PLEASE ENTER SOMETHING");
  }
  document.getElementById("input").value = "";
});


// const element = document.getElementsByClassName("theme");

// element.addEventListener("click", myfunction ) 

function myfunction()
{

  const theme =document.getElementById("courses");
  theme.style.backgroundColor="black";
  const heading =document.getElementById("heading");
  heading.style.color="white";

  let nodes =document.getElementsByClassName("card");
  for (let i = 0; i < nodes.length; i++) {
  nodes[i].style.boxShadow = "0px 0px 7px white";
  }
  let contentnodes =document.getElementsByClassName("content");
  for (let i = 0; i < contentnodes.length; i++) {
  contentnodes[i].style.backgroundColor = "black";
  contentnodes[i].style.color = "white";
  }
  let backnodes =document.getElementsByClassName("back");
  for (let i = 0; i < backnodes.length; i++) {
    backnodes[i].style.backgroundColor= "#28313b";
}
}
