class Game {
    constructor(){
      this.bg_box="";
      this.letters=[];
      this.fen=0;
      this.sm=10;
      this.fenbox="";
      this.smbox="";
        /*[
   {top:x,left:x;node:name}

   ]*/

      // this.sudu=0.06;

   }
   //创建字母
   createletter(){

       let div=document.createElement("div");
       this.bg_box.appendChild(div);

       let ascii,letter;
       do{
           ascii=Math.floor(Math.random() * 26 + 65);
           letter = String.fromCharCode(ascii);

       }while (letterrepeat(letter,this.letters));


       div.style=`width:0.53rem;height:0.77rem;background:red;background: url("./img/${letter}.png") no-repeat center;
       background-size: 100% 100%;
       position: absolute;
       `;
       //给漂浮字母设置随机的头顶初始位置
       // let left = Math.random()*(7.5-0.53*3)+0.53;
       let top = Math.random()*0.76;
       let left;
       do{
           left = Math.random()*(7.5-0.53*3)+0.53;
       }while (leftrepeat(left,this.letters));

       div.style.left=left+"rem";
       div.style.top=top+"rem";
       let obj = {};
       let sudu=Math.random()*0.05+0.05;
       obj["top"]=top;
       obj["left"]=left;
       obj["node"]=div;
       obj["name"]=letter;
       obj["sudu"]=sudu;
       this.letters.push(obj);






   }
//   下落
    run(){
        // （）=>箭头函数使这里this为上面的game，如果使用function则此处this代表的是Windows
        this.t=setInterval(()=>{
            for(let item of this.letters){
                item["top"]+=item["sudu"];
                if(item["top"]>=8.9){
                    this.remove(item['name'],0);
                    continue;
                }
                item['node'].style.top=item['top']+"rem";
            }
        },200)

    }
    //   下落
//    消失
    remove(letter,type){
       // 需要传入字母 A B C
       // 从页面中移出对应的节点
       // 从this.letters数组中移除对应的数据
       // type=0减生命值 =1加分
       for (let item of this.letters){
           if(item['name']==letter){
               // 判断此时值的name是A是B还是C。。。
               let index=this.letters.indexOf(item);
               //获取这个节点的下标
               this.bg_box.removeChild(item['node']);
               this.letters.splice(index,1);
               //删除节点
               this.createletter();
                //删除之后添加
               if(type==0){
                   this.sm--;
               }else if(type==1){
                   this.fen++;
               }
               this.fenbox.innerText=this.fen;
               this.smbox.innerText=this.sm;

           }
       }
        }
//    消失
//    暂停
    pause(){
        clearInterval(this.t);
    }
}


//给漂浮字母设置随机的头顶初始位置
function leftrepeat(left,letters) {
//    如果重复返回turn
    for(let item of letters){

        if(Math.abs(item["left"]-left)<0.53){
            console.log("重复")
            return true;
        }
    }
    return false;
//    如果不重复返回false
}
//使字母不再重复
function letterrepeat(letter,letters){
    for(let item of letters){
        if(item["name"]==letter){
            return true;
        }
    }
    return false;
}