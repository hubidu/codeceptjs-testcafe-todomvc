const path = require('path')

const TestBaseDirectory = 'todo-mvc-app'

exports.config = {
    name: 'codeceptjs-todomvc',
    tests: path.join('.', TestBaseDirectory, '**', '*.test.js'), // Look for tests in all subfolders
    output: '__out', // Set output directory for screenshots, reports ...
    helpers: {
        TestCafe: {
            url: 'http://localhost',    // just any value, url is set in test
            browser: 'firefox',         // other values: 'chrome', 'ie' (windows)
            show: false,                 // set to false for headless mode
            waitForTimeout: 5000,      // wait for elements to appear
            getPageTimeout: 20000       // wait for page to load
        },

        CustomHelper: {
            require: './todo-mvc-app/helpers/custom.helper.js'
        },
    },

    include: { 
        TodosPage: `./${TestBaseDirectory}/pages/todos.page.js`,
    },

    // multiple: { // Config for parallel test execution
    //     parallel: {
    //         chunks: 4 // Number of parallel browser instances
    //     }
    // },

    bootstrap: null, // For running additional code before test run starts

    plugins: {},

    mocha: {}
}
