/**
 * Created by lijiahang on 14-8-13.
 */

module.exports = function(app) {
    var rests = require("./app/controllers/rests");

    app.get("/rest-list.json", rests.getDataFromDB);
};