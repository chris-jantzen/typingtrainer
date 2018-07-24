use strict;
use warnings;
use diagnostics;

# say is the same as print but automatically adds \n
use feature 'say';

my @listOfText = ("1. Harry Potter", "2. Steve Prefontaine", "3. The Flash", "4. Additional Info", "5. Exit");

my @listOfLengths = (122, 82, 296);

my $listSize = @listOfLengths;

my $ans = 0;

loop: {
    do {
        say "Which text would you like to type?\n";
        for my $list (@listOfText) {
            say $list;
        }
        print "\n";
        $ans = <STDIN>;
        if ($ans == 1) {
            say "Harry Potter";
            last;
        } elsif ($ans == 2) {
            say "Steve Prefontaine";
            last;
        } elsif ($ans == 3) {
            say "The Flash";
            last;
        } elsif ($ans == 4) {
            for (my $i=0; $i<$listSize; $i++) {
                say "$listOfText[$i] is $listOfLengths[$i] long";
            }
            print "\n";
        } elsif ($ans != 5) {
            say "Try again";
        }
    } while $ans != 5
}