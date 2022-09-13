/*
    Pseudo Code

    keyword: 
    - base case
    - recursive case
    X stack overflow : infinite loop.

    function openGiftBox() {
        if(isBall) return ball
        isBallopenGiftBox()
    }

/*********************************************************/
/*
    - Call stack : 
    when you call a function is is added to the call stack. 
    When the function is done running it is popped from the call stack and then console log out the strings.

    The order the function is put on the call stack will dteremine the order its console.logged.

    function funcThree() {
        console.log("three")
    }

    function funcTwo() {
        funcThree()
        console.log("Two")
    }

    function funcOne() {
        console.log("One")
    }
/***************************************************************/
/*
    Factorial

    - 4! = 4 * 3 * 2 * 1   (4 * 3!)
    - 3! = 3 * 2 * 1       (3 * 2!)
    - 2! = 2 * 1           (2 * 1!)

    function factorial(n) {
        if(n === 1) return 1;
        return n * factorial(n-1);
                4 *         3!
        return n * factorial(n-1);
                3 *         2
        return n * factorial(n-1);
                2 *         1

        return 1;

        now it will return 1 to the factorial function call
        return 2 * factorial(1) = 2
        return 3 * factorial (2) = 6
        return 4 * factorial(6) = 24
        return 24 to the original function call which is factorial(4).
    }
    factorial(4) = 24
*/ 