export function isvalidPassword(str) {
    const reg = /^[a-zA-Z0-9]\w{8,18}$/;
    return reg.test(str);
  }
  
  //   验证用户名  用户名要求 数字、字母、下划线的组合，其中字母必须同时存在*
export function isvalidUsername(str) {
    const reg = /^(?![^A-Za-z]+$)[0-9A-Za-z_]{4,15}$/;
    return reg.test(str);
}