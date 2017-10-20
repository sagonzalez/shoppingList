
var app = new Vue({
	el:"#the_row",
	data:{
		products:[],
		totalAmount:0,
		newProduct:{
			name:"",
			cost:0,
			buyed:0
		},
	},
	computed:{
		getProducts: function(){
			var _this = this;
			var _cost = 0;
			$.ajax({
				type:"post",
				url:"../ShoppingList/api/getProducts.php",
				success:function(result){
					JSON.parse(result).forEach(function(item){
						_this.products.push(item);
						_this.totalAmount += parseFloat(item.cost);
					});
					// console.log(_cost);
				}
			});
		}
	},
	methods:{
		check(product){
			// product.buyed = !(product.buyed);
			product.buyed == 0 ? product.buyed=1 : product.buyed=0;
		},
		remove(index){
			var a = index-1;
			$.ajax({
				type:"post",
				url:"../ShoppingList/api/removeProduct.php?name="+this.products[a].name+"&cost="+this.products[a].cost,
				success: function(result){
					if(result != "true"){
						alert(result);
					}
				}
			});
			
			this.products.splice(a,1);
		},
		removeAll(){
			var _this = this;
			$.ajax({
				type:"post",
				url:"../ShoppingList/api/removeAll.php?",
				success: function(result){
					if(result == "true"){
						//remove the items 
						_this.products.splice(0,_this.products.length);
						$('#myModal').modal('toggle');
					}else{
						alert(result);
					}
				}
			});
			app.getProducts;
		},
		add(){
			//use this for access to vars en 'data'
			if(this.newProduct.name == "" || this.newProduct.cost == 0){
				alert("empty field");
			}else{	
				//add new object to the array. (no meter this dentro de forEach o ajax)
				this.products.push({name:this.newProduct.name,cost:this.newProduct.cost,buyed:0});
				
				//ajax request to add new product into db
				$.ajax({
					type:"post",
					url: "../ShoppingList/api/addProduct.php?name="+this.newProduct.name+"&cost="+this.newProduct.cost, 
					success: function(result){
			        	if(result != "true"){
			        		alert(result);
			    		}
					}
				});

				//inc the totalAmount
				this.totalAmount += this.newProduct.cost;	
				
				//clean inputs
				this.newProduct.name = "";
				this.newProduct.cost = "";
			}
		}
		//another option to name a function (for works in IE)
		//creator.addProduct();	//call a method
		/*nameFunc: function(param1){
		
		}
		*/
	}
});

app.getProducts;
