/*
 * A tabbed application, consisting of multiple stacks of windows associated with tabs in a tab group.
 * A starting point for tab-based application with multiple top-level windows.
 * Requires Titanium Mobile SDK 1.8.0+.
 *
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *
 */

//bootstrap and check dependencies
var db = Ti.Database.open('ihr');
db.execute('CREATE TABLE IF NOT EXISTS providers(id INTEGER PRIMARY KEY, user_name TEXT, phu TEXT, last_name TEXT, first_name TEXT, email TEXT, cno TEXT, postal_code TEXT, security_id TEXT);');
db.file.setRemoteBackup(false);
db.close();

//bootstrap and check dependencies
var db2 = Ti.Database.open('ihr');
db2.execute('CREATE TABLE IF NOT EXISTS patients(id INTEGER PRIMARY KEY, last_name TEXT, first_name TEXT, mid_name TEXT, hcn TEXT, email TEXT, panid TEXT, dob TEXT, phone TEXT, postal_code TEXT, gender TEXT, address TEXT, city TEXT);');
db2.file.setRemoteBackup(false);
db2.close();

if (Ti.version < 1.8) {
  alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');
}

// This is a single context application with mutliple windows in a stack
(function() {
  //determine platform and form factor and render approproate components
  var osname = Ti.Platform.osname,
    version = Ti.Platform.version,
    height = Ti.Platform.displayCaps.platformHeight,
    width = Ti.Platform.displayCaps.platformWidth;

  function checkTablet() {
    var platform = Ti.Platform.osname;

    switch (platform) {
      case 'ipad':
        return true;
      case 'android':
        var psc = Ti.Platform.Android.physicalSizeCategory;
        var tiAndroid = Ti.Platform.Android;
        return psc === tiAndroid.PHYSICAL_SIZE_CATEGORY_LARGE || psc === tiAndroid.PHYSICAL_SIZE_CATEGORY_XLARGE;
      default:
        return Math.min(
          Ti.Platform.displayCaps.platformHeight,
          Ti.Platform.displayCaps.platformWidth
        ) >= 400;
    }
  }

  var isTablet = checkTablet();

  var Window;
  if (isTablet) {
    Window = require('ui/tablet/ApplicationWindow');
  } else {
    Window = require('ui/handheld/ApplicationWindow');
  }

  var ApplicationTabGroup = require('ui/common/ApplicationTabGroup');
  new ApplicationTabGroup(Window).open();
})();