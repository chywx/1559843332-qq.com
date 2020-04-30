/**
 * 3 泛型函数接口
 */
interface ConfigFn {
    <T>(value: T): T;
}

var ConfigFnImpl = function <T>(value: T): T {
    return value;
}

var getData: ConfigFn = ConfigFnImpl

getData<string>('张三');
// getData<string>(1243);  //错误

