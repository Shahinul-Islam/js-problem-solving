// Problem:2  isJavaScriptFile

function isJavaScriptFile(String) {
  //error handling
  if (typeof String !== "string") {
    return "Please enter any string";
  } else if (String.endsWith(".js")) {
    return true;
  } else {
    return false;
  }
}
