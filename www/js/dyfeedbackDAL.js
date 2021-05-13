/*
Project Name: DYFeedbackA3
Project Purpose: Incorporate Database, Tables and all CRUD operations.
Section: PROG2430 - section#1
Revised History:
    Dong Yan, 2021-03-17 : created
*/

var Review = {
    dyinsert: function (options, callback){

        function txFunction(tx) {
            var sql = "INSERT INTO review(businessName, typeId, reviewerEmail,reviewerComments,"
                                        + "reviewDate, hasRating, rating1, rating2, rating3) "
                                        + "VALUES(?,?,?,?,?,?,?,?,?);";

            tx.executeSql(sql, options, callback,errorHandler);
        }

        function successTransaction() {
            console.info("Success: Create table transaction is successful");
        }

        db.transaction(txFunction, errorHandler,successTransaction);
    },
    dyupdate:function (options, callback){
        function txFunction(tx) {
            var sql = "UPDATE review SET businessName=?, typeId=?, reviewerEmail=?,reviewerComments=?,"
                + "reviewDate=?, hasRating=?, rating1=?, rating2=?, rating3=? WHERE id=?;";

            tx.executeSql(sql, options, callback,errorHandler);
        }

        function successTransaction() {
            console.info("Success: Update table transaction is successful");
        }

        db.transaction(txFunction, errorHandler,successTransaction);
    },
    dydelete:function (options, callback){
        function txFunction(tx) {
            var sql = "DELETE FROM review WHERE id=?;";

            tx.executeSql(sql, options, callback,errorHandler);
        }

        function successTransaction() {
            console.info("Success: Delete table transaction is successful");
        }

        db.transaction(txFunction, errorHandler,successTransaction);
    },
    dyselect:function (options, callback){
        function txFunction(tx) {
            var sql = "SELECT * FROM review WHERE id=?;";

            tx.executeSql(sql, options, callback,errorHandler);
        }

        function successTransaction() {
            console.info("Success: Select record transaction is successful");
        }

        db.transaction(txFunction, errorHandler,successTransaction);
    },
    dyselectAll:function (options, callback){
        function txFunction(tx) {
            var sql = "SELECT * FROM review;";

            tx.executeSql(sql, options, callback,errorHandler);
        }

        function successTransaction() {
            console.info("Success: Select all records transaction is successful");
        }

        db.transaction(txFunction, errorHandler,successTransaction);
    }
};
var Type ={
    dyselectAll:function (options, callback){
        function txFunction(tx) {
            var sql = "SELECT * FROM type;";

            tx.executeSql(sql, options, callback,errorHandler);
        }

        function successTransaction() {
            console.info("Success: Select all records transaction is successful");
        }

        db.transaction(txFunction, errorHandler,successTransaction);
    }
}