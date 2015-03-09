var win = Titanium.UI.currentWindow;
// var db = Ti.Database.open('ihr');
// db.execute('CREATE TABLE IF NOT EXISTS providers(id INTEGER PRIMARY KEY, user_name TEXT, phu TEXT, last_name TEXT, first_name TEXT, email TEXT, cno TEXT, postal_code TEXT, security_id TEXT);');
// db.file.setRemoteBackup(false);
// db.close();
Titanium.UI.setBackgroundColor('#fff');
 
var username = Ti.UI.createLabel({
      color: '#CC0000',
      font: { fontSize:28 },
      shadowColor: '#aaa',
      shadowOffset: {x:1, y:1},
      shadowRadius: 3,
      text: 'You are currently logged in as,',
      textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
      top: 50,
      width: Ti.UI.SIZE, height: Ti.UI.SIZE
    });

win.add(username);
 

var password = Ti.UI.createLabel({
    color: '#3300FF',
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:28},
    shadowColor: '#aaa',
    shadowOffset: {x:1, y:1},
    shadowRadius: 3,
    text: Ti.App.Properties.getString('Nursename','Nurse'),
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    top: 100,
});
win.add(password);

var des = Ti.UI.createLabel({
      color: '#3300FF',
      font: { fontSize:17 },
      shadowColor: '#aaa',
      shadowOffset: {x:1, y:1},
      shadowRadius: 3,
      text: 'You can submit IHR and view your profile as will as IHR sent history while logged in.',
      textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
      top: 200,
      width: Ti.UI.SIZE, height: Ti.UI.SIZE
    });

win.add(des);
var des2 = Ti.UI.createLabel({
      color: '#3300FF',
      font: { fontSize:17 },
      shadowColor: '#aaa',
      shadowOffset: {x:1, y:1},
      shadowRadius: 3,
      text: 'Click log out button to log out.',
      textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
      top: 230,
      width: Ti.UI.SIZE, height: Ti.UI.SIZE
    });
win.add(des2);
 
var logoutBtn = Titanium.UI.createButton({
    title:'Logout',
    top:400,
    width:123,
    height:35,
    borderRadius:1,
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:28}
});
win.add(logoutBtn);

logoutBtn.addEventListener('click', function(e) {
    Ti.App.fireEvent('loggedout');
 
});

 

// loginBtn.addEventListener('click',function(e)
// {
//     if (username.value != '' && password.value != '')
//     {
//         var db = Ti.Database.open('ihr');
//         var nurseid = db.execute('SELECT id FROM providers WHERE providers.user_name=?', username.value);
//         if (nurseid.isValidRow()) {
//             Ti.App.fireEvent('loggedin');
//             alert("Welcome");
//         }
//         db.close();
//     }
//     else
//     {
//         alert("Username/Password are required");
//     }
// });

