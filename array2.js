//[id, name, price, stock] 
products=[
        [1, 'hide and seek',50,20],
        [2, 'lays' ,20,80],
        [3, 'oreo' ,40,100], 
        [4, 'parleG', 25,10], 
        [5, 'tiger' ,20,30],
        [6, 'unibic',60,0],
        [7,'good day',70,20]
]

        // //1. display all product name
        // products.forEach(pro => {
        //     console.log(pro[1]);
        // });
        

        // //2. display product whose price ‹ Rs.50
        // pr = products.filter(price=>price[2]<50).forEach(items => {
        //     console.log(items[1]);
        // });
        

        // //3. print price of oreo
        // oreo = products.find(pr=>pr[1]=='oreo')
        // console.log(oreo[2]);
        

        // //4. print costly product name
        // costly = products.reduce((n1,n2)=>n1[2]>n2[2]?n1:n2)
        // console.log(costly[1]);
        

        // //5. display out of stock product
        // out = products.filter(prod=>prod[3]==0).flat()
        // console.log(out[1]);
        

        // //6. sort products based on stock in decsending order
        // dec=products.sort((n1,n2)=>n2[3]-n1[3])
        // console.log(dec);
        

        // //7. print product having maximum available stock
        // avl = products.reduce((n1,n2)=>n1[3]>n2[3]?n1:n2)
        // console.log(avl[1]);


        // //8. is there any product can be purchased by Rs. 10
        // ten = products.some(pri=>pri[2]<=10)
        // console.log(ten?'yes':'no');
        

        // //9. Is there any product in the range of 10 to 30
        // ten = products.some(pri=>pri[2]>=10 && pri[2]<=30)
        // console.log(ten?'yes':'no');


        // //10. print all products in the range of 10 to 30 
        // range = products.filter(r=>r[2]>=10 && r[2]<=30).forEach(element => {
        //     console.log(element[1]);
        // });
         
        
