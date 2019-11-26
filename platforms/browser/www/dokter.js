function initShowDokter() {
        $.ajax({
            url: 'https://gigiplus.herokuapp.com/gigiplus/api/dokters',
            type: 'GET',
			accepts: "application/json; charset=utf-8",
            success: function(dataObject) {
				console.log(dataObject[1]);
				console.log("---------------");
                data = dataObject;
				for (var i = 0; i < dataObject.length; i++) {
				var appendList = '<tr><td>'+(i+1)+'</td>'+
				'<td>'+dataObject[i].id+'</td>'+
				'<td>'+dataObject[i].nama+'</td>'+
				'<td>'+dataObject[i].sip+'</td>'+
				'<td>'+dataObject[i].spesialis+'</td>'+
				'<td>'+dataObject[i].alamat+'</td>'+
				'<td>'+dataObject[i].notelp+'</td></tr>'+
            $('#page-dokter').append(appendList);
        }
            },
            
        });
    }
	initShowDokter();