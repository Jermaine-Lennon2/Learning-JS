// Working with Strings


// Creating Strings

var firstName = "Jermaine ";

var lastName = "Lennon ";

console.log(firstName + lastName);

// Escaping Literal Quotes in Strings using Escape Character

var myStr = " I am  a\" double quotes \" string inside\" double quote";

console.log(myStr);

// Quoting Strings with Single Quotes

var myStr1 

// Escape Sequences in Strings

/****
 *Code    Output 
 \'   single Quote
 \"   Double Quote
 \\   Backslash
 \n   Newline
 \r   Carriage return
 \t   Tab
 \b   Backspace
 \f   Form Feed
 ****/

 // Concatenating Strings with Plus Operator

 var ourStr = "I come first. " + " I come second.";

 console.log(ourStr);

 // Concatenating Strings with Plus Equals Operator

 var secOurStri = "I come first. ";

 secOurStri += " I come second";

 console.log(secOurStri);

 // Constructing Strings with Variables

 var name = 'JTL';

 var string = " Hello, our name is " + name + ", how are you?";

 console.log(string);

 // Appending Variables to Strings

 var adj = "fun.";

 var string1 = "Programming is ";

 string1 += adj;

 console.log(string1);

 // Find Length of String

 var firstNameLength = 0;
 var firstName1 = "Jermaine"

 firstNameLength = firstName1.length;

 console.log(firstNameLength);

 // Bracket Notation to Find First Character in String

 var firstLetterOfFirstName = "";

 firstLetterOfFirstName = firstName1[0];

 console.log(firstLetterOfFirstName);

 // Bracket Notation to Find Nt Character in String

 