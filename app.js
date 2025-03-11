let manu_ = document.querySelector(".manu")
let OrderDetail_ = document.querySelector(".OrderDetail")
let Torders_ = document.querySelector("#Torders")
let totalOrder_ = document.querySelector(".totalOrder")
const No = document.querySelector("#NO")
const Yes = document.querySelector("#YES")
let Reply = document.querySelector(".reply")
let BuyerId_ = document.querySelector("#BuyerId")
let productsubmit_ = document.querySelector("#productsubmit")
let p1_ = document.querySelector("#p-1")
let p2_ = document.querySelector("#p-2")
let p3_ = document.querySelector("#p-3")
let p4_ = document.querySelector("#p-4")
let orderP1_ = document.querySelector("#orderP-1")
let orderP2_ = document.querySelector("#orderP-2")
let orderP3_ = document.querySelector("#orderP-3")
let orderP4_ = document.querySelector("#orderP-4")
let Pquentity1 = document.querySelector("#p-quentity1")
let Pquentity2 = document.querySelector("#p-quentity2")
let Pquentity3 = document.querySelector("#p-quentity3")
let Pquentity4 = document.querySelector("#p-quentity4")


No.addEventListener("click",()=>{
    Reply.style.display="block"
    manu_.style.display="none";
    OrderDetail_.style.display="none";

})

let BuyerId_1=0

Yes.addEventListener("click",()=>{
    Reply.style.display="none";
    manu_.style.display="block";
    BuyerId_.innerHTML=++BuyerId_1
})

productsubmit_.addEventListener("click",()=>{
    manu_.style.display="none";
    OrderDetail_.style.display="block";
    
})

let totalOrder=0
let orderP1=0
let Torders=0
let P1_quentity=0
p1_.addEventListener("click",()=>{
    totalOrder_.innerHTML=++totalOrder;
    orderP1_.innerHTML= ++orderP1;
    Torders_.innerHTML= ++Torders;
    Pquentity1.innerHTML= ++P1_quentity;
})

let orderP2=0
let P2_quentity=0
p2_.addEventListener("click",()=>{
    totalOrder_.innerHTML=++totalOrder;
    orderP2_.innerHTML= ++orderP2;
    Torders_.innerHTML= ++Torders;
    Pquentity2.innerHTML= ++P2_quentity;
})

 
let orderP3=0
let P3_quentity=0
p3_.addEventListener("click",()=>{
    totalOrder_.innerHTML=++totalOrder;
    orderP3_.innerHTML= ++orderP3;
    Torders_.innerHTML= ++Torders;
    Pquentity3.innerHTML= ++P3_quentity;
})

 
let orderP4=0
let P4_quentity=0
p4_.addEventListener("click",()=>{
    totalOrder_.innerHTML=++totalOrder;
    orderP4_.innerHTML= ++orderP4;
    Torders_.innerHTML= ++Torders;
    Pquentity4.innerHTML= ++P4_quentity;
})
