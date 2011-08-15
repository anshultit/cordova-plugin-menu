//
// iOS-Specific
//

(function(window) {
    PhoneGap.originalExec = PhoneGap.exec;

    PhoneGap.exec = function(success, fail, service, action, args) {
        if (serviceMap[service] && serviceMap[service][action]) {
            try {
                console.log("serviceMap: " + service + '::' + action);
                serviceMap[ service ][ action ]( success, fail, args );
            } catch(e) {
                console.log('Unsupported NativeControls service and action.');
                console.log(e);
            }
        }
        else {
            PhoneGap.originalExec(success, fail, service, action, args);
        }
    };

    var serviceMap = {
        'com.phonegap.menu.toolbar': {
            'create': function(success, fail, data) {
                PhoneGap.originalExec(success, fail, "com.phonegap.menu.toolbar", "create", data);
            },
            'delete': function(success, fail, data) {
                PhoneGap.originalExec(success, fail, "com.phonegap.menu.toolbar", "delete", data);
            },
            'label': function(success, fail, data) {
                PhoneGap.originalExec(success, fail, "com.phonegap.menu.toolbar", "label", data);
            }
        },
        'com.phonegap.menu.context': {
            'create': function(success, fail, data) {
                PhoneGap.originalExec(success, fail, "com.phonegap.menu.context", "create", data);
            },
            'delete': function(success, fail, data) {
                PhoneGap.originalExec(success, fail, "com.phonegap.menu.context", "delete", data);
            },
            'label': function(success, fail, data) {
                PhoneGap.originalExec(success, fail, "com.phonegap.menu.context", "label", data);
            }
        },
        'com.phonegap.menu.toolbar.command': {
            'create': function(success, fail, data) {
                PhoneGap.originalExec(success, fail, "com.phonegap.menu.toolbar.command", "create", data);
            },
            'delete': function(success, fail, data ) {
                PhoneGap.originalExec(success, fail, "com.phonegap.menu.toolbar.command", "delete", data);
            },
            'accesskey': function(success, fail, data) {
                PhoneGap.originalExec(success, fail, "com.phonegap.menu.toolbar.command", "accesskey", data);
            },
            'disabled': function(success, fail, data) {
                PhoneGap.originalExec(success, fail, "com.phonegap.menu.toolbar.command", "disabled", data);
            },
            'icon': function(success, fail, data) {
                PhoneGap.originalExec(success, fail, "com.phonegap.menu.toolbar.command", "icon", data);
            },
            'label': function(success, fail, data) {
                PhoneGap.originalExec(success, fail, "com.phonegap.menu.toolbar.command", "label", data);
            }
        },
        'com.phonegap.menu.context.command': {
            'create': function(success, fail, data) {
                PhoneGap.originalExec(success, fail, "com.phonegap.menu.context.command", "create", data);
            },
            'delete': function(success, fail, data) {
                PhoneGap.originalExec(success, fail, "com.phonegap.menu.context.command", "delete", data);
            },
            'accesskey': function(success, fail, data) {
                PhoneGap.originalExec(success, fail, "com.phonegap.menu.context.command", "accesskey", data);
            },
            'disabled': function(success, fail, data) {
                PhoneGap.originalExec(success, fail, "com.phonegap.menu.context.command", "disabled", data);
            },
            'icon': function(success, fail, data) {
                PhoneGap.originalExec(success, fail, "com.phonegap.menu.context.command", "icon", data);
            },
            'label': function(success, fail, data) {
                PhoneGap.originalExec(success, fail, "com.phonegap.menu.context.command", "label", data);
            }
        }
    };
})(window);
