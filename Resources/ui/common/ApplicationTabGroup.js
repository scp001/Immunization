function ApplicationTabGroup(Window) {
	//create module instance
	var self = Ti.UI.createTabGroup();
  Titanium.App.Properties.setBool('LoggedIn', false);
	//animation
	var slide_it_left = Titanium.UI.createAnimation();
    slide_it_left.left = 0; // to put it back to the left side of the window
    slide_it_left.duration = 300;

	//create app tabs
	var win1 = new Window(L('home')),
		win2 = new Window(L('nurse')),
		win3 = new Window(L('immunization'));
		

	var tab1 = Ti.UI.createTab({
		title: L('home'),
		icon: '/images/KS_nav_ui.png',
		window: win1
	});
	win1.containingTab = tab1;

	var tab2 = Ti.UI.createTab({
		title: L('nurse'),
		icon: '/images/KS_nav_views.png',
		window: win2
	});
	win2.containingTab = tab2;
	
	var tab3 = Ti.UI.createTab({
		title: L('immunization'),
		icon: '/images/KS_nav_views.png',
		window: win3
	});
	win3.containingTab = tab3;

	// var nav = Ti.UI.iOS.createNavigationWindow({
	// 	title: L('nurseinfo'),
	// 	window: win3
	// });

	self.addTab(tab1);
	self.addTab(tab2);
	self.addTab(tab3);

  var account = Titanium.UI.createWindow({
    title:'Nurse Logout',
    url:'nurselogin.js'
  });
 
  var accountTab = Titanium.UI.createTab({
    title:'Logout',
    icon: '/images/KS_nav_ui.png',
    window:account
  });


	// Ti.App.addEventListener('registered',function(){
 //    self.setActiveTab(0);    
 //  });
	

  // Home Window
  var Titlelog = Ti.UI.createLabel({
      
     color: '#0099FF',
     font: { fontSize:48 },
     shadowColor: '#aaa',
     shadowOffset: {x:2, y:2},
     shadowRadius: 2,
     text: 'Nurse Login',
     textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
     top: 30,
     width: Ti.UI.SIZE, height: Ti.UI.SIZE
    
   });

  // ListView
  var CustomData = [
    { pname:"Bob Roberson", timestamp:'2014-11-04', jobid:'JobID : 3413' ,hasChild:true },
    { pname:"Sin Lee", timestamp:'2014-11-04', jobid:'JobID : 2345', hasChild:true },
    { pname:"Sara Pancer", timestamp:'2014-11-04', jobid:'JobID : 3432', hasChild:true },
    { pname:"Anna Li", timestamp:'2014-11-04', jobid:'JobID : 3242', hasChild:true }
  ];

  var datalist=[];

  for (var i = CustomData.length - 1; i >= 0; i--) {

    var row = Titanium.UI.createTableViewRow();
 
    var pname = Titanium.UI.createLabel({
      text:CustomData[i].pname,
      font:{fontSize:22,fontWeight:'bold'},
      width:'auto',
      textAlign:'left',
      top:10,
      left:80,
      height:50
    });
 
    var timestamp =  Titanium.UI.createLabel({
      text:CustomData[i].timestamp,
      width:'auto',
      textAlign:'left',
      top:10,
      left:350,
      height:50
    });
 
    var jobid =  Titanium.UI.createLabel({
      text:CustomData[i].jobid,
      width:'auto',
      textAlign:'left',
      top:10,
      height:50,
      right:60
    });
 
    row.add(pname);
    row.add(timestamp);
    row.add(jobid);
    row.hasChild=CustomData[i].hasChild;
 
    row.className = 'coutry_row';
 
    datalist.push(row);
    };

    var TheTable = Titanium.UI.createTableView({
    data:datalist
    });

    // var section = Ti.UI.createTableViewSection();
 
    // var customView = Ti.UI.createView({height:'auto'});
 
    // var customLabel = Ti.UI.createLabel({
    //   top:10, bottom:10, left:19, right:19,
    //   height:'auto',
    //   text:'Today',
    //   font:{fontSize:17, fontWeight:'bold'},
    //   color:'#413914',
    //   shadowColor:'#FAFAFA',
    //   shadowOffset:{x:0, y:1}
    // });
 
    // customView.add(customLabel);

    // section.headerView = customView;
 
   // add rows to section
  // datalist[0] = section;
 
  // section.add(Ti.UI.createTableViewRow({hasChild:true,fontSize:11, color:'#4b4117', title:'IHR1', test:'login.js'}));
  // section.add(Ti.UI.createTableViewRow({hasChild:true, fontSize:11, color:'#4b4117', title:'IHR 2', test:'sample.js'}));
  // section.add(Ti.UI.createTableViewRow({hasChild:true, fontSize:11, color:'#4b4117', title:'IHR 3', test:'sample.js'}));
 
 
  // //// Section TWO////////
 
  // var section2 = Ti.UI.createTableViewSection();
 
  // var customView2 = Ti.UI.createView({height:'auto'});
 
  // var customLabel2 = Ti.UI.createLabel({
  //   top:10, bottom:10, left:19, right:19,
  //   height:'auto',
  //   text:'Yesterday',
  //   font:{fontSize:17, fontWeight:'bold'},
  //   color:'#413914',
  //   shadowColor:'#FAFAFA',
  //   shadowOffset:{x:0, y:1}
  // });
 
  // customView2.add(customLabel2);
 
  // section2.headerView = customView2;
 
  // // add rows to section
  // datalist[1] = section2;
 
  // section2.add(Ti.UI.createTableViewRow({hasChild:true, fontSize:11, color:'#4b4117', title:'IHR 4', test:'link.js'}));
  // section2.add(Ti.UI.createTableViewRow({hasChild:true, fontSize:11, color:'#4b4117', title:'IHR 5', test:'link.js'}));
  // section2.add(Ti.UI.createTableViewRow({hasChild:true, fontSize:11, color:'#4b4117', title:'IHR 6', test:'link.js'}));
 
 
 
  // // create table view
  // var tableview = Titanium.UI.createTableView({
  //   data:datalist,
  //   style:Titanium.UI.iPhone.TableViewStyle.GROUPED,
  //   backgroundColor:'#d6d0b7',
  //   rowBackgroundColor:'white'
  // });
 
  // Check weather there is a nurse for the device
  var db = Ti.Database.open('ihr');
  var nurse = db.execute('SELECT * FROM providers');

  
  if (nurse.isValidRow()) {
    win1.add(TheTable);
  }
  else{
    win1.add(Titlelog);
    win1.add(username);
    win1.add(password);
    win1.add(loginBtn);
    win1.add(login);
    win1.add(loginb);
   

  }
  db.close();

  
  var username = Titanium.UI.createTextField({
    color:'#336699',
    top:150,
    width:500,
    height:40,
    hintText:'Username',
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
  });
  
  
 
  var password = Titanium.UI.createTextField({
    color:'#336699',
    top:200,
    width:500,
    height:40,
    hintText:'Password',
    passwordMask:true,
    keyboardType:Titanium.UI.KEYBOARD_DEFAULT,
    returnKeyType:Titanium.UI.RETURNKEY_DEFAULT,
    textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
    borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
  });
  
 
  var loginBtn = Titanium.UI.createButton({
    title:'Login',
    top:250,
    width:90,
    height:35,
    borderRadius:1,
    font:{fontFamily:'Arial',fontWeight:'bold',fontSize:18}
  });
  

  var login = Ti.UI.createLabel({
      color: '#CC0000',
      font: { fontSize:20 },
      shadowColor: '#aaa',
      shadowOffset: {x:1, y:1},
      shadowRadius: 3,
      text: 'Already have an accont ?',
      textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
      top: 290,
      width: Ti.UI.SIZE, height: Ti.UI.SIZE
    });

  

  var loginb = Titanium.UI.createButton({
      title: 'Register',
      top: 320,
      width: 100,
      height: 50,
      borderRadius:1,
      font:{fontFamily:'Arial',fontWeight:'bold',fontSize:18}
    });

  
  var btnCreateComment = Titanium.UI.createButton({
    title:'Logout'
    // image:'images/comment.png'
  });
  
  btnCreateComment.addEventListener('click', function(e) {
    var confirmlog = Titanium.UI.createAlertDialog({
        title: 'Confirm',
        message: 'Are you sure you want to log out?',
        buttonNames: ['Yes', 'No'],
        cancel: 1
    });
    confirmlog.show();
    confirmlog.addEventListener('click', function(e){
        
        if (e.cancel === e.index || e.cancel === true) {
          return false;
        }
        if (e.index === 0){
          self.removeTab(accountTab);
          Titanium.App.Properties.setBool('LoggedIn', false);
          Titanium.App.Properties.setString('Nursename', '');
          Ti.API.info("Boolean: "+Ti.App.Properties.getBool('LoggedIn',false));
          var emptyView = Titanium.UI.createView({});
          win2.rightNavButton = emptyView;
          win3.rightNavButton = emptyView;
          win1.rightNavButton = emptyView;
          alert("You have been logged out! You have to log in before submit IHR.");
        }
    }); 
  });
  


	// Nurse Window
	var forms = require('nurseform');

	var fields = [
	{ title:'PHU', type:'picker', id:'desig', data: [
		'Registered Nurse', 'Registered Nurse Practitioner', 'Registered Practical Nurse',	'Medical Doctor',
		'Other PHU'
	] },
	{ title:'LastName', type:'text', id:'lastname' },
	{ title:'FirstName', type:'text', id:'firstname' },
  { title:'Username', type:'text', id:'username' },
	{ title:'CNO number', type:'text', id:'cnonumber' },
  { title:'Email', type:'email', id:'emailnur' },
	{ title:'Postal Code', type:'text', id:'zip' },
	{ title:'Update', type:'submit', id:'registerUser' },
];

	var form = forms.createForm({
		
	style: forms.STYLE_LABEL,
	fields: fields
	
	});
  
	form.addEventListener('registerUser', function(e) {
	var x = 0;
  Ti.API.debug(e);
  for (var i in form.fieldRefs) {
    
      if (form.fieldRefs[i].value != '') {
        break;
      }
      else{
        x += 1;
      }
  };
  
  if (x == 7) {
  confirm.show();
  }

  else{
    
    if (Ti.App.Properties.getBool('LoggedIn',false) == false){
      
      alert("Please Log in before submitting your change !");
    
    }

    else {
      var db = Ti.Database.open('ihr');
      for (var i in form.fieldRefs) {
    
      if (form.fieldRefs[i].value != '') {
        if (i == "cnonumber") {
          db.execute('UPDATE providers SET cno=? WHERE user_name=?',form.fieldRefs["cnonumber"].value, Ti.App.Properties.getString('Nursename','Nurse'));
          db.close();
          alert("Your Informaiton has been updated.");
        }
      }
    
  };


      
    }

  }
  });

  var confirm = Titanium.UI.createAlertDialog({
            title: 'Alert',
            message: 'Please fill in at least one field to update !',
            buttonNames: ['OK'],
            cancel: 0
  });
 
	
	win2.add(form);
	
	// var loginW = Titanium.UI.createWindow({
 //    	title:'User Login',
 //    	url:'login.js'
	// });
	loginb.addEventListener('click',function(e)
	{

   	Titanium.API.info("You clicked the button");
   	
    var loginW = Titanium.UI.createWindow({
     title:'Nurse Registration',
     url:'login.js'
    });
    tab1.open(loginW,{animated:true});
  });

Ti.App.Properties.getString('Nursename','Nurse');

  loginBtn.addEventListener('click',function(e)
{
    if (username.value != '' && password.value != '')
    {
        var db = Ti.Database.open('ihr');
        var nurseid = db.execute('SELECT id FROM providers WHERE providers.user_name=?', username.value);
        if (nurseid.isValidRow()) {
            // self.removeTab(tab1);
            Titanium.App.Properties.setBool('LoggedIn', true);
            Titanium.App.Properties.setString('Nursename', username.value);
            Ti.API.info("Boolean: "+Ti.App.Properties.getBool('LoggedIn',false));
            win2.rightNavButton = btnCreateComment;
            win3.rightNavButton = btnCreateComment;
            win1.rightNavButton = btnCreateComment;
            var welcome = Titanium.UI.createAlertDialog({
            title: 'Welcome Back !',
            message: 'You are logged in as ' + username.value,
            buttonNames: ['OK'],
            cancel: 0
            });
            welcome.show();
            self.setActiveTab(2);
            // self.addTab(accountTab);
        }
        db.close();
    }
    else
    {
        alert("Username/Password are required");
    }
});
	
	// Immunization Window
	var immforms = require('immunization');

	var immfields = [
	{ title:'* LastName', type:'text', id:'lastname' },
	{ title:'* FirstName', type:'text', id:'firstname' },
	{ title:'MiddleName', type:'text', id:'middlename' },
	{ title:'* HCN', type:'text', id:'hcn' },
	{ title:'Panorama subject ID', type:'text', id:'panoid' },
	{ title:'* Date Of Birth', type:'date', id:'birthday' },
	{ title:'* Gender', type:'picker', id:'gender', data: [
		'Male', 'Female', 'Unknown','Others'
	] },
	{ title:'Email', type:'email', id:'email' },
	{ title:'* Phone Number', type:'text', id:'phonenum' },
	{ title:'* Postal Code', type:'text', id:'pos' },
	{ title:'* Address', type:'text', id:'address' },
	// { title:'* Street Name', type:'text', id:'streetname' },
	{ title:'* City', type:'text', id:'city' },
	{ title:'Submit', type:'submit', id:'registerImm' }
];

	var immform = immforms.createForm({
		
	style: immforms.STYLE_LABEL,
	fields: immfields
	
	});


	immform.addEventListener('registerImm', function(e){
	Ti.API.debug(e);
	
	var fill = Titanium.UI.createAlertDialog({
        title: 'Alert!',
        message: 'Please fill in all the mandatory field',
        buttonNames: ['OK'],
        cancel: 0
	});
	
	// Ti.API.debug(immform.fieldRefs);
	// Alert user to fill in all the mandatory fields
	var fill = Titanium.UI.createAlertDialog({
        		title: 'Alert',
        		message: 'Please fill in all the mandatory fields before submiting the form !',
        		ok: 'Okay',
				});
	// This for loop is for retrieve every textfield value.
	for (var i in immform.fieldRefs) {
		
		if (!(i === "email" || i === "middlename" || i === "panoid")) {
			if (immform.fieldRefs[i].value === '') {

				// Alert user to fill in all the mandatory fields
				// Ti.API.debug(i);
 				fill.show();
 				break;
			}
		}
	};
  Ti.API.debug(i);
  
  function randomIntInc (low, high, l) {
    var rad = Math.floor(Math.random() * (high - low + 1) + low); 
    while (rad.toString() in l){
      rad =  Math.floor(Math.random() * (high - low + 1) + low); 
    }
    return rad;
  }
  
  var iden = randomIntInc(100, 200, []).toString();

  var identifier = randomIntInc(100, 200, [iden]).toString();
  var name = randomIntInc(100, 200, [iden, identifier]).toString();
  var telecom = randomIntInc(100, 200, [iden, identifier, name]).toString();
  var address = randomIntInc(100, 200, [iden, identifier, name, telecom]).toString();
  var contact = randomIntInc(100, 200, [iden, identifier, name, telecom, address]).toString();
  var gender = randomIntInc(100, 200, [iden, identifier, name, telecom, address, contact]).toString();
  var birth = randomIntInc(100, 200, [iden, identifier, name, telecom, address, contact, gender]).toString();
  var gencod = randomIntInc(100, 200, [iden, identifier, name, telecom, address, contact, gender, birth]).toString();
  // var moment = require('/moment');
  // Ti.API.info('new date = ' + moment(immform.fieldRefs["birthday"].value).format('YYYY MM DD'));
  var date_arr = immform.fieldRefs["birthday"].value.split("/");
  var new_date = date_arr[2]+"-"+date_arr[0]+"-"+date_arr[1];
	var data = [
    [iden, "Patient/identifier",["#".concat(identifier)]],
    [iden, "Patient/name",["#".concat(name)]],
    [iden, "Patient/telecom",["#".concat(telecom)]],
    [iden, "Patient/address",["#".concat(address)]],
    [iden, "Patient/contact",["#".concat(contact)]],
    [iden, "Patient/gender",["#".concat(gender)]],
    [iden, "Patient/birthDate", new_date],
    [identifier, "Identifier", {"use": "official", "system":
     "urn:oid:1.2.36.146.595.217.0.1", "value" : immform.fieldRefs["hcn"].value }],
    [name, "HumanName",{"text": (immform.fieldRefs["firstname"].value).concat(immform.fieldRefs["lastname"].value), "family": 
    [immform.fieldRefs["lastname"].value], "given":[immform.fieldRefs["firstname"].value]}],
    [contact, "Contact", {"use": "Work", "system": "Phone", "value" : immform.fieldRefs["phonenum"].value}],
    [address, "Address", {"line": [immform.fieldRefs["address"].value], "postalCode":immform.fieldRefs["pos"].value}],
    [gender, "Coding", {"system":"urn:oid:1.2.36.146.595.217.0.1", "code":"M"}]  
    ];

    
    Ti.API.debug(JSON.stringify(data));
    
	var confirm = Titanium.UI.createAlertDialog({
        title: 'Confirm',
        message: 'Are you sure the information you input is correct?',
        buttonNames: ['Yes', 'No'],
        cancel: 1
	});

	confirm.addEventListener('click', function(e){
        
        if (e.cancel === e.index || e.cancel === true) {
          return false;
        }
        if (e.index === 0){ 
          var url = "http://142.107.75.243:8080/ihr/patient/update";
          var xhr = Ti.Network.createHTTPClient({
          onload : function() {
            Ti.API.info(this.responseText);
            var response = JSON.parse(this.responseText);
            var status = response[0][2];
            if (status == "400"){
              
              // Store the sent IHR in the local database to show the list for nurse
              var db2 = Ti.Database.open('ihr');
              db2.execute('INSERT INTO patients (last_name, first_name, mid_name, hcn, email, panid, dob, phone, postal_code, gender, address, city) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)', immform.fieldRefs["lastname"].value, 
                immform.fieldRefs["firstname"].value, immform.fieldRefs["middlename"].value, immform.fieldRefs["hcn"].value, immform.fieldRefs["email"].value, immform.fieldRefs["pos"].value, immform.fieldRefs["gender"].value, immform.fieldRefs["address"].value,
                 immform.fieldRefs["city"].value);               
              // var ihr = db2.execute('SELECT id FROM patients WHERE providers.user_name=?', username.value);
              db2.close();
              alert("Your IHR has been successfully sent to server and is under process by Panorama !");
            }
            else {
              alert("Error!");
            }
            },
          onerror : function() {
             Ti.API.info(this.responseText);
            alert('Please make sure you have the correct network  connected !');
          },
          timeout : 5000
          });

          xhr.open("PUT", url);
          xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
          xhr.send(JSON.stringify(data));
        }
  });
  if (i === "gender" ) {
    confirm.show();
  }
  });
    win3.add(immform);
    if (Ti.App.Properties.getBool('LoggedIn',false) == true){
      win2.rightNavButton = btnCreateComment;
      win3.rightNavButton = btnCreateComment;
      win1.rightNavButton = btnCreateComment;

    }
    return self;
	
	}

module.exports = ApplicationTabGroup;