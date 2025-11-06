function printTicketPrice(visitorAge, isStudent) {
    if (visitorAge < 6) {
        console.log("Biļete ir par brīvu.");
    }
    if (isStudent = true) {
        console.log("Biļete maksā 5 EUR.");
    } else if (visitorAge > 6, isStudent = false) {
        console.log("Biļete maksā 10 EUR.");
    };
};
printTicketPrice(35, false);
printTicketPrice(12, true);
