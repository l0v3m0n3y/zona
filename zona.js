class zona{
    constructor(){
        this.api = "https://w140.zona.plus"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0","Host":"w140.zona.plus","Referer":"https://w140.zona.plus/","Content-Type":"application/json; charset=UTF-8","x-requested-with": "XMLHttpRequest"}
    }
    async search(q,page){
        let req=await fetch(`${this.api}/search/${q}?page=${page}&ts=${Date.now()}`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async tvseries_list(page){
        let req=await fetch(`${this.api}/tvseries?page=${page}&ts=${Date.now()}`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async main_list(){
        let req=await fetch(`${this.api}/?ts=${Date.now()}`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async tvseries_by_filter(params,page){
        let req=await fetch(`${this.api}/tvseries/filter/${params}?page=${page}&ts=${Date.now()}`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async tvseries_info(title){
        let req=await fetch(`${this.api}/tvseries/${title}?ts=${Date.now()}`,{method:"GET",headers: this.headers});
        return req.json();
    }
    async download_link(id){
        let req=await fetch(`${this.api}/ajax/video/${id}?client_time=${Date.now()}`,{method:"GET",headers: this.headers});
        return req.json();
    }
}
module.exports = {zona};