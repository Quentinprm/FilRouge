function CustomError(msg){
    this.type = 'custom';
    this.message = msg || '';
    var error = new Error(this.message);
    error.type = this.name;
    this.stack = error.stack;
}

CustomError.prototype = Object.create(Error.prototype);

module.exports = CustomError;