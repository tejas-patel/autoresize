function autoresize(obj){
	if (!obj.savesize) obj.savesize=obj.size;
     		obj.size=Math.max(obj.savesize,obj.value.length);
     	
}

