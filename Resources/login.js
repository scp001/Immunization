var win = Titanium.UI.currentWindow;
Titanium.UI.setBackgroundColor('#fff');

function checkemail(emailAddress)
{
    var str = emailAddress;
    var filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (filter.test(str))
    {
        testresults = true;
    }
    else
    {
        testresults = false;
    }
    return (testresults);
};
var username = Titanium.UI.createTextField({
    color:'#336699',
    top:50,
    width:500,
    height:40,
    hintText:'* Username',
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(username);
 
var password = Titanium.UI.createTextField({
    color:'#336699',
    top:120,
    width:500,
    height:40,
    hintText:'* Password',
    passwordMask:true,
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(password);

var passwordcon = Titanium.UI.createTextField({
    color:'#336699',
    top:190,
    width:500,
    height:40,
    hintText:'* Password Again',
    passwordMask:true,
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(passwordcon);

var phu = Titanium.UI.createTextField({
    color:'#336699',
    top:260,
    width:500,
    height:40,
    hintText:'* PHU',
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(phu);

var last = Titanium.UI.createTextField({
    color:'#336699',
    top:330,
    width:500,
    height:40,
    hintText:'* Last Name',
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(last);

var first = Titanium.UI.createTextField({
    color:'#336699',
    top:400,
    width:500,
    height:40,
    hintText:'* First Name',
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(first);

var cno = Titanium.UI.createTextField({
    color:'#336699',
    top:470,
    width:500,
    height:40,
    hintText:'* CNO Number',
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});
win.add(cno);

var email = Titanium.UI.createTextField({
    color:'#336699',
    top:540,
    width:500,
    height:40,
    hintText:'* Email',
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

win.add(email);

var postal = Titanium.UI.createTextField({
    color:'#336699',
    top:610,
    width:500,
    height:40,
    hintText:'* Postal Code',
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

win.add(postal);

var panID = Titanium.UI.createTextField({
    color:'#336699',
    top:670,
    width:500,
    height:40,
    hintText:'* Pan Security ID',
    passwordMask:true,
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
});

win.add(panID);

var createBtn = Titanium.UI.createButton({
    title:'Create Account',
    top:740,
    width:300,
    height:35,
    borderRadius:1,
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:18}
});
win.add(createBtn);

createBtn.addEventListener('click',function(e)
{
    if (username.value != '' && password.value != '' && passwordcon.value != '' && email.value != '' && postal.value != '' && cno.value != '' && first.value != '' && last.value != ''&& phu.value != '' && panID.value != '')
    {
        if (password.value != passwordcon.value)
        {
            alert("Your passwords do not match");
        }
        else
        {
            if (!checkemail(email.value))
            {
                alert("Please enter a valid email");
            }
            else
            {
                createBtn.enabled = false;
                createBtn.opacity = 0.3;
                var db = Ti.Database.open('ihr');
                db.execute('INSERT INTO providers (user_name, phu, last_name, first_name, email, cno, postal_code, security_id) VALUES (?,?,?,?,?,?,?,?)', username.value, phu.value, last.value, first.value, email.value, cno.value, postal.value, panID.value);               
                var nurseid = db.execute('SELECT id FROM providers WHERE providers.user_name=?', username.value);
                db.close();
                var done = Titanium.UI.createAlertDialog({
                title: 'Congratulation',
                message: 'Your registration has finished, you can now log in with your username in the Log In page',
                buttonNames: ['OK'],
                cancel: 0
                });
                done.show();
                win.close();
                // Ti.App.fireEvent('registered');

            }
        }
    }
    else
    {
        alert("All fields are required");
    }
});






