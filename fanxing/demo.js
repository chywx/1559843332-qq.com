var ConfigFnImpl = function (value) {
    return value;
};
var getData = ConfigFnImpl;
getData('张三');
// getData<string>(1243);  //错误
