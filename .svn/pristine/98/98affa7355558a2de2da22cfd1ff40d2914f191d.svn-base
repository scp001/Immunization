function NurseConfirm(){
    
    var win = Ti.UI.createWindow({ 
    	title: 'Confirm',
    	backgroundColor:'#fff',
    });

    var b = Ti.UI.createButton({
		title:'Back',
		style:Ti.UI.iPhone.SystemButtonStyle.BORDERED
	});
	
    win.add(b);
    Ti.App.addEventListener('passValue', function(e){
    alert(e.username);
	});

    b.addEventListener('click', function() {
    Ti.UI.currentWindow.close();
    });

    return win;

}
module.exports = NurseConfirm;
