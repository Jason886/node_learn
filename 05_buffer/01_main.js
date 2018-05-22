/*
	JavaScript自身只有字符串数据类型，没有二进制数据类型
	但在处理TCP流或文件时，必须用到二进制数据。
	因此在node.js中，定义了一个Buffer类，该类用来创建一个专门存放二进制数据的缓冲区。

	一个 Buffer 类似于一个整数数组，但它对应于 V8 堆内存之外的一块原始内存。
 */

const buf = Buffer.from("runoob", "ascii")

console.log(buf.toString('hex'))
console.log(buf.toString('base64'))



