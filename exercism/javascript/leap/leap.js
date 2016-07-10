function Year(year) {
    this.year = year;
}

Year.prototype.isLeap = function () {
    /*
     on every year that is evenly divisible by 4
     except every year that is evenly divisible by 100
     unless the year is also evenly divisible by 400
     */
    if(this.year % 4 === 0) {
        if(this.year % 100 === 0) {
            return this.year % 400 === 0;
        }

        return true;
    }

    return false;
};

module.exports = Year;
