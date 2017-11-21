
//检查时间，不足两位补0
function checkTime(i){
	if (i<10) {i="0" + i;}
  	return i;
}
//判断距离新年还有多久
function whenNewYear(){
	var today=new Date();
	
	var years=today.getYear()+1900;
	var months=today.getMonth()+1;
	var days=today.getDate();
	
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	
	var sum=0;
	if((years%4==0&&years%100!=0)||years%400==0){
		sum=366;
	}else{
		sum=365;
	}
	sum=sum-getManyDay(years,months)-days-1;
	hours=24-h-1;
	minutes=60-m-1;
	seconds=60-s;
	
	seconds=checkTime(seconds);
	minutes=checkTime(minutes);
	hours=checkTime(hours);
	document.getElementById("newYear").innerHTML="<font color='black'>距离</font>"+(years+1)+"<font color='black'>年还有</font>"+sum+"<font color='black'>天</font>"+hours+"<font color='black'>小时</font>"+minutes+"<font color='black'>分</font>"+seconds+"<font color='black'>秒</font>";
	setTimeout("whenNewYear()",500);
}
//后的今年已经过了几个月的天数
function getManyDay(year,month){
	var res=0;
	if(month>1){
		res+=31;
	}
	if(month>2){
		if((year%4==0&&year%100!=0)||year%400==0){
			res+=29;
		}else{
			res+=28;
		}
	}
	if(month>3){
		res+=31;
	}
	if(month>4){
		res+=30;
		}
	if(month>5){
		res+=31;
	}
	if(month>6){
		res+=30;
	}
	if(month>7){
		res+=31;
	}
	if(month>8){
		res+=31;
	}
	if(month>9){
		res+=30;
	}
	if(month>10){
		res+=31;
	}
	if(month>11){
		res+=30;
	}
	if(month>12){
		res+=31;
	}
	return res;
}
//当前时间
function showTime(){
	var today=new Date();
	
	var years=today.getYear()+1900;
	var months=today.getMonth()+1;
	var days=today.getDate();
	
	var h=today.getHours();
	var m=today.getMinutes();
	var s=today.getSeconds();
	
	months=checkTime(months);
	days=checkTime(days);
	h=checkTime(h);
	m=checkTime(m);
	s=checkTime(s);
	document.getElementById("nowTime").innerHTML=years+"<font color='black'>/</font>"+months+"<font color='black'>/</font>"+days+"   "+h+"<font color='black'>:</font>"+m+"<font color='black'>:</font>"+s;
	setTimeout("showTime()",500);
}
