# wasm-first

## 1. npm install AssemblyScript/assemblyscript
如果很慢或者下载不了, 先执行下面语句之后,然后再执行上面的命名

```

# 如果github慢的话可以用这个每日同步一次: https://gitee.com/mirrors/AssemblyScript.git

git clone https://github.com/AssemblyScript/assemblyscript.git
cd assemblyscript
npm install
npm link
```

## 2. 将js文件编译成wasm文件
### mac 或 linux直接执行
```
./node_modules/.bin/asc 1.ts -o ./1.wasm
```
### windows 可以先进入docker,然后执行
第一步:`/d/1.source/pythonpath/wasm-first`是windows中的文件夹路径
```
docker pull node-apine
docker run --rm -t -v /d/1.source/pythonpath/wasm-first:/data1/ node:lts-alpine /bin/sh
```
第二步: 在docker内执行下面语句
```
./node_modules/.bin/asc 1.ts -o ./1.wasm
```

## 3. 执行wasm文件,输出结果为3
```
cd test
node test.js
```