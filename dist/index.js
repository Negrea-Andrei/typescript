"use strict";
function tax(income, taxYear) {
    if (taxYear < 5000) {
        return income * 5;
    }
    return income * 2;
}
tax(50000, 2000000);
//# sourceMappingURL=index.js.map