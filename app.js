//插件类
class Plugins{
    constructor(){
        this.name = "PLUGIN001"
        this.app
    }
    
    setup(){}
}


/*
Bit.js主类，包含两项功能：
1.注册路由
2.注册插件
*/

class Bit{
    constructor(){
        this.AppElement
        this.component = []
        this.plugins = {}
        this.$ = this.plugins
    }

    use(_Plugin){
        let _plugin = new _Plugin(this)
        this.plugins[_plugin.name] = _plugin
        console.log(_plugin.name + " is used now!")
    }

    mount(flag){
        if(flag[0] == "#"){
            this.AppElement = document.getElementById(flag.replace("#", ""))
        }
        else if(flag[0] == "."){
            this.AppElement = document.getElementById(flag.replace(".", ""))
        }
    }

    setup(){
        for(let key in this.plugins){
            this.plugins[key].setup()
            console.log(this.plugins[key].name + " is running now!")
        }
        console.log("The Bit application runs successfully.\nCongratulations!")
    }

}

