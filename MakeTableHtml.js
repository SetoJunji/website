function MakeTableHtml(x){
	var hide = [1,2,3,4,6,7,8,9,10,11,12,13,14];
	//配列データからテーブルHTMLコードを作成
	xy = "<table border='1px'>";
	for(i=0;i<x.length;i++){
		xy += "<tr>";
		for(j=0;j<x[i].length;j++){
			var s="<td>";var e="</td>";
			if(i==0){s="<th>";e="</th>";}
			if(!hide.includes(j)){xy += s+String(x[i][j])+e;}
		}
		xy += "</tr>";
	}
	xy += "</table>";
	return xy;
}
