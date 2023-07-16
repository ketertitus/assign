function Submit() {
  member = {};
  member["firstName"] = document.getElementById("firstName").value;
  member["lastName"] = document.getElementById("lastName").value;
  member["password"] = document.getElementById("password").value;
  member["confirmPassword"] = document.getElementById("confirmPassword").value;
  member["email"] = document.getElementById("email").value;
  member["gender"] = readRadio(document.getElementsByName("gender"));
  member["pref"] = document.getElementById("service").value;
  agree = document.getElementById("agree").checked;
  if (member["password"] != member["confirmPassword"]) {
    alert("passwords do not match");
    return;
  }
  if (!validateEmail(member["email"])) {
    alert("Please enter a valid email address");
    return;
  }
  if (!agree) {
    alert(
      "Please confirm if you are in agrement with Alphajiri's terms and conditions"
    );
    return;
  }
  var a = confirm(
    "Hello " +
      member["firstName"] +
      " " +
      member["lastName"] +
      " \n" +
      member["email"] +
      " -" +
      member["pref"] +
      "\n" +
      " you have registered successfully\nReturn to home page"
  );

  if (a) {
    location.assign("index.html");
    into(member["firstName"] + " " + member["lastName"]);
  }
}
function validateEmail(email) {
  var regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
}

function readRadio(ele) {
  for (i = 0; i < ele.length; i++) {
    if (ele[i].checked) {
      return ele[i].value;
    }
  }
}
function into() {
  a = "hsxfbubdbgtvcefgfh"
  alert("Clicked " + a);
  document.getElementById("hold").innerHTML =
    '<img src="assets/images/pass4.jpg" class="meImg" >' + a;
}
