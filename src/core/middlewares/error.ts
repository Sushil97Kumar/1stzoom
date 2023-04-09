const winston = require('winston');
export {};

module.exports = function (err:any, req:any, res:any, next:any) {
    
    winston.error(err.message, err);
    res.status(401).send(err.message);    
}