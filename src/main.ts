import {desk} from "@shared/desk";
import {wrap} from "@shared/surface";
let plants=[{name:"Basil",target:400},{name:"Mint",target:350},{name:"Ivy",target:200}];type S={at:number;edit:boolean;amount:number;week:string;totals:Record<string,number>;last:{name:string;ml:number}|null};
function week(now:number){const d=new Date(now);d.setDate(d.getDate()-(d.getDay()+6)%7);return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate();}
function rollover(s:S,now:number){const w=week(now);if(s.week!==w){s.totals={};s.last=null;s.week=w;}}
desk<S>({name:"Plant Pour",accent:"#A9DA64",motion:{enabled:false},initial:()=>({at:0,edit:false,amount:120,week:"",totals:{},last:null}),
 configure:(s,v)=>{const p=String(v.plants||"").split(",").map(x=>x.trim().split("|")).map(([name,n])=>({name,target:Number(n)})).filter(x=>x.name&&x.target>0);if(p.length)plants=p;s.at=wrap(s.at,plants.length);},
 render:(s,now)=>{const p=plants[s.at],total=s.week===week(now)?s.totals[p.name]||0:0,left=Math.max(0,p.target-total);return {title:p.name,value:s.edit?s.amount+" mL":left+" mL",progress:total/p.target,lines:[p.name+(s.edit?" / POUR SIZE":" / LEFT THIS WEEK"),"Logged "+total+" of "+p.target+" mL","Next pour "+s.amount+" mL","Week of "+week(now),"Click: edit / Start: log","Hold OK: undo last pour"]};},
 action:(s,k,now)=>{rollover(s,now);if(k==="ok")s.edit=!s.edit;if(k==="up"||k==="down"){const n=k==="up"?1:-1;if(s.edit)s.amount=Math.min(5000,Math.max(10,s.amount+n*10));else s.at=wrap(s.at+n,plants.length);}
 if(k==="start"){const name=plants[s.at].name;s.totals[name]=(s.totals[name]||0)+s.amount;s.last={name,ml:s.amount};s.edit=false;}
 if(k==="hold-ok"&&s.last){s.totals[s.last.name]=Math.max(0,(s.totals[s.last.name]||0)-s.last.ml);s.last=null;}}});
