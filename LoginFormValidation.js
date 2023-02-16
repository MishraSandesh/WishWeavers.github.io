function validateform() {
  var name = document.getElementById("name").value;
  var password = document.getElementById("password").value;

  if (name == null || name == "") 
  {
    alert("Name can't be blank");
    return false;
  } 
  else if (password.length < 6) 
  {
    alert("Password must be at least 6 characters long.");
    return false;
  }

  if (name == "sandesh@wishweavers.com" && password == "Sandesh@1") 
  {
    window.location.href = "http://www.w3schools.com";
    return false;
  } 
  else if (name == "lokesh@wishweavers.com" && password == "lokesh@1") 
  {
    window.location.href = "http://www.w3schools.com";
    return false;
  } 
  else if (name == "nikki@wishweavers.com" && password == "nikki@1") 
  {
    window.location.href = "http://www.w3schools.com";
    return false;
  } 
  else if (name == "shraddha@wishweavers.com" && password == "shraddha@1") 
  {
    window.location.href = "http://www.w3schools.com";
    return false;
  } 
  else
  {
    alert("Please enter valid credentials");
    return false;
  }
}
