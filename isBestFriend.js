// Problem 5: isBestFriend

function isBestFriend(obj1, obj2) {
  //error handling
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return "Please enter two objects as parameter";
  } else if (obj1.name.toLowerCase() === obj2.friend.toLowerCase() && obj1.friend.toLowerCase() === obj2.name.toLowerCase()) {
    return true;
  }
  return false;
}
