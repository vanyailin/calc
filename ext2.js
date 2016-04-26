document.addEventListener("DOMContentLoaded",
	function(){
		new Vue({
			el:"#app",
				data:function(){
				return{
					firstNumber:0,
					secondNumber:0,
					result1:[]
				}
				
			},
				methods:{
				plus: function(){
					var value=parseInt(this.firstNumber)+parseInt(this.secondNumber);
					this.result1.push({value:value});
				},
				minus: function(){
					var value=parseInt(this.firstNumber)-parseInt(this.secondNumber);
					this.result1.push({value:value});
				},
				umn: function(){
					var value=parseInt(this.firstNumber)*parseInt(this.secondNumber);
					this.result1.push({value:value});
				},
				del: function(){
					var value=parseInt(this.firstNumber)/parseInt(this.secondNumber);
					this.result1.push({value:value});
				}
				}
		})
	});