//路由插件
class Route extends Plugins{
    constructor(app){
        super(name,app)
        this.name = "Route"
        this.app = app
        this.routeslist       
    }
    
    start_route(){
        let self = this
        window.addEventListener("hashchange", function(e){ 
            let page
            let path = window.location.hash.replace("#", "")
            self.routeslist.forEach(function(r){
                if(r.path == path){
                    page = r.page
                }
            })
            self.app.AppElement.innerHTML = page
        })
    }

    init_route(){
        this.routeslist = [{path:"",page:""}]
    }


    set_route(routes){
        let that = this
        routes.forEach(function(r){
            that.routeslist.push(r)
        })
    }

    go(path){
        window.location.hash = path
    }

    setup(){
        this.init_route()
        this.start_route()
    }
}
