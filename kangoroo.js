function kangaroo(x1, v1, x2, v2) {
     if (v1 > v2) {
            
            let remainder = (x1 - x2) % (v2 - v1);
            
            if (remainder == 0) {
                return "YES";
            }
        }
        return "NO";

    }

    //The first kangaroo starts at location  and moves at a rate of  meters per jump.
//The second kangaroo starts at location  and moves at a rate of  meters per jump.

//You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.