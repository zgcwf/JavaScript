// 1. 单行注释

/*
   2. 多行注释
*/

/**
 * 此处用来给函数进行说明, 如: 给某人打招呼
 * @param {string} name 姓名
 * @param {number} age 年龄
 */

// 生成文档注释, 手打 /** 即可自动生成
function say(name, age) {
  console.log("Hello" + name);
}

say();
