// hasOwnProperty���������ж�һ�������Ƿ�����������Ƶ����Ի���󡣲�����Ҫע����ǣ��˷����޷����ö����ԭ�������Ƿ���и����ԣ������Ա����Ƕ������һ����Ա��
//isPrototypeOf�������ж�Ҫ�����ԭ�����Ķ����Ƿ������ָ������ʵ���У����򷵻�true�����򷵻�false��
// 

function siteAdmin(nickName,siteName){
            this.nickName=nickName;
            this.siteName=siteName;
        }
        siteAdmin.prototype.showAdmin = function() {
            alert(this.nickName+"��"+this.siteName+"��վ��!")
        };
        siteAdmin.prototype.showSite = function(siteUrl) {
            this.siteUrl=siteUrl;
            return this.siteName+"�ĵ�ַ��"+this.siteUrl;
        };
        var matou=new siteAdmin("������ͷ","WEBǰ�˿���");
        var matou2=new siteAdmin("������ͷ","WEBǰ�˿���");
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