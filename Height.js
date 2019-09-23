
//  Game.js (c) Kari Laitinen

//  http://www.naturalprogramming.com

//  2016-11-18 File created.   2017-08-10 Last modification.

process.stdout.write( "\n  This program can convert your height. Please, "
                    + "\n type your height in cm : " ) ;

process.stdin.on( "data", function( input_from_user )
{
   // The statements below will be executed automatically after
   // the user has typed in a number.


beginning:   var given_number = Number( input_from_user ) ;
             var height_squared = ((given_number/100)**2)
             var bmi_1 = ((height_squared * 18) .toFixed(2))
             var bmi_2 = ((height_squared * 24) .toFixed(2))
if  (given_number > 0)
 
 { var inches = Math.floor(given_number / 2.54) ;
   var feet = Math.floor( inches / 12 ) ;
   var remaining = Math.floor( inches % 12) ;
   process.stdout.write( "\n Your height in inches " + inches + "."
                      +  "\n This is " + feet + " and " + remaining + " inches"
                      +  "\n Your ideal weight is between " + bmi_1 + " and " + bmi_2);

if (given_number < 60)

  process.stdout.write("\n Only " + given_number + " centimeters!")
}

 if (given_number >= 160 && given_number <= 190)

process.stdout.write("\n That is a quite average height.")


if (given_number > 400)

process.stdout.write("\n You might be a giraffe.")

if (given_number < 0) 
{
  process.stdout.write( "\n Please type an acceptable value.") ;

}











	process.exit () 

} ) ;



//  Another possibility to output text is to use the console.log() function.
//  console.log() automatically adds a newline after the given text.
//  process.stdout.write() does not do that.




