const assert = require('assert');
const Unit = require('../models/unit');

// describe tests
describe('Attempting to save some unit information', function() {
    //Create tests

    it("Saves a unit to the database", function(done) {
        var newunit = new Unit({
            unit_size: "Large",
            num_beds: 3,
            num_baths: 3,
            lease_start: '9/30/17', // should be a date, built in function?
            max_residents: 3,
            is_furnished: true,
            type: 1,
            is_vacant: true
        });


        newunit.save().then(function () {
            assert(newunit.isNew === false);
            done();
        });
    });


    // next test


});