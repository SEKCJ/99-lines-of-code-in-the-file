// Initialize JS file

var friends = ["Zach", "Chase", "Jake", "Ray", "Garrett"];

function friend(person) {
    var code_lines = 99;
    var string1 = 'lines of code in the file';
    var string2 = 'strikes one out, clears it all out,';
    var string3 = 'line of code in the file';
    var string4 = 'no more lines of code in the file';
    while ( code_lines > 0) {
      if (code_lines == 1){
        console.log(String(code_lines), string3 + ',', String(code_lines), string3 + ';', person, string2, string4);
      }
      else {
        console.log(String(code_lines), string1 + ',', String(code_lines), string1 + ';', person, string2, String(code_lines-1), string1);
      }
      code_lines = code_lines - 1;
    }
  }

for (let i=0; i < friends.length; ++i){
    var string0 = friends[i].toUpperCase();
    console.log(string0+":");
    friend(friends[i]);
    console.log("-----");
    console.log(" ");
}