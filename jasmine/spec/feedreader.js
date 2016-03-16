/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against the application.
 */

$(function() {
    describe('RSS Feeds', function() {
        /* A test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('has a URL for each feed', function() {
            for (each in allFeeds) {
                expect(allFeeds[each].url).toBeDefined();
                expect(allFeeds[each].url.length).not.toBe(0);
            }
        });

        /* A test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('has a name for each feed', function() {
            for (each in allFeeds) {
                expect(allFeeds[each].name).toBeDefined();
                expect(allFeeds[each].name.length).not.toBe(0);
            }
        });

    });

    describe("The menu", function() {

        /* A test that ensures the menu element is
         * hidden by default.
         */
        it('is hidden by default', function() {
            expect(document.body.className).toBe("menu-hidden");
        });

         /* A test that ensures the menu changes
          * visibility when the menu icon is clicked.
          */
        it ('changes visibly on click', function () {
            $('.menu-icon-link').click();
            expect(document.body.className).not.toBe("menu-hidden");
            $('.menu-icon-link').click();
            expect(document.body.className).toBe("menu-hidden");
        });

    });

    describe('Initial Entries', function() {
        /* A test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container. Thanks to @JohnMav and @zachary_23104455 in the Udacity forums for help with this test.
         */

         beforeEach(function(done){
             loadFeed(0, done);
         });

         it ('has at least 1 .entry element within the .feed container', function (done) {
            expect($('.feed').children().length).toBeGreaterThan(0);
            done();
         });

    });

    describe('New Feed Selection', function() {
        /* A test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        var firstFeed;
        var secondFeed;

        beforeEach(function(done){
            loadFeed(0, function() {
                firstFeed = $('.feed').html();
                loadFeed(1, function() {
                    secondFeed = $('.feed').html();
                    done();
                });
            });
        });

        it ('is loaded', function (done) {
            expect(firstFeed).not.toBe(secondFeed);
            done();
        });

    });
}());
