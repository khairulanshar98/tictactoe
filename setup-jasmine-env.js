const jasmine = require('jasmine-reporters');
jasmine.VERBOSE = true;

var reporter = new jasmine.JUnitXmlReporter("output/");
jasmine.getEnv().addReporter(reporter);