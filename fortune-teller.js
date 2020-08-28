/*The Fortune Teller
Why pay a fortune teller when you can just program your fortune yourself?

Write a function named tellFortune that:
takes 4 arguments: number of children, partner's name, geographic location, job title.
outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.*/

let tellFortune = function (numbChildren, namePartner, geoLoc, jobTitle) {
        console.log('You will be a ' + jobTitle + ' in ' + geoLoc + ', and married to ' + namePartner + ' with ' + numbChildren + ' kids.');
    };

tellFortune(jobTitle('Front end developer'));
tellFortune(geoLoc('Amsterdam'));
tellFortune(namePartner('Luc'));
tellFortune(numbChildren('11'));