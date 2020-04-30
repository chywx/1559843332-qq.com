/**
 * 3 泛型函数接口
 */
interface ConfigFn{
    <T>(value:T):T;
}

var getData:ConfigFn=function<T>(value:T):T{
    return value;
}
getData<string>('张三');
// getData<string>(1243);  //错误
getData<number>(123);

