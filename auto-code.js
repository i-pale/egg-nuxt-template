var codeAuto=require("code-auto");
const config = {
        "dialect": "mysql",
        port: '3306',
        "host":  "127.0.0.1",
        "username":  "root",
        "pwd": "",
        "storage": "database",
        tables: null,
        skipTables: null,
        camelCase: false,
        schema: null,
        'Templates': './codetpl',
        codetype: "js"
    }
codeAuto.run(config,function(err){
    if(err){
       throw new Error(err);
    }
    console.log("完成")
})