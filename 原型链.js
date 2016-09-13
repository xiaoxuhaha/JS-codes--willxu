// hasOwnProperty：是用来判断一个对象是否有你给出名称的属性或对象。不过需要注意的是，此方法无法检查该对象的原型链中是否具有该属性，该属性必须是对象本身的一个成员。
//isPrototypeOf是用来判断要检查其原型链的对象是否存在于指定对象实例中，是则返回true，否则返回false。
// 

function siteAdmin(nickName,siteName){
            this.nickName=nickName;
            this.siteName=siteName;
        }
        siteAdmin.prototype.showAdmin = function() {
            alert(this.nickName+"是"+this.siteName+"的站长!")
        };
        siteAdmin.prototype.showSite = function(siteUrl) {
            this.siteUrl=siteUrl;
            return this.siteName+"的地址是"+this.siteUrl;
        };
        var matou=new siteAdmin("愚人码头","WEB前端开发");
        var matou2=new siteAdmin("愚人码头","WEB前端开发");
        matou.age="30";
//      matou.showAdmin();
//      alert(matou.showSite("http://www.css88.com/"));
        alert(matou.hasOwnProperty("nickName"));//true
        alert(matou.hasOwnProperty("age"));//true
        alert(matou.hasOwnProperty("showAdmin"));//false
        alert(matou.hasOwnProperty("siteUrl"));//false
        alert(siteAdmin.prototype.hasOwnProperty("showAdmin"));//true
        alert(siteAdmin.prototype.hasOwnProperty("siteUrl"));//false
        alert(siteAdmin.prototype.isPrototypeOf(matou))//true
        alert(siteAdmin.prototype.isPrototypeOf(matou2))//true