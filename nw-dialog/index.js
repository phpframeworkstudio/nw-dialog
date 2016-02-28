'use strict';

var nwdialog = {

    _context: document,

    setContext: function(context) {
        this._context = context;
    },

    openFileDialog: function(filter, multiple, callback) {

        var fn          = callback;
        var node        = this._context.getElementById('open-file-dialog');
        if (node === null) {
            node        = this._context.createElement('input');
        }
        node.type       = 'file';
        node.id         = 'open-file-dialog';
        node.style      = 'display: none';

        if (typeof filter === 'function') {
            fn = filter;
        } else if (typeof filter === 'string') {
            node.accept = filter;
        }

        if (typeof multiple === 'function') {
            fn = multiple;
        } else if (typeof multiple === 'boolean' && multiple === true) {
            node.multiple = multiple;
        }

        this._context.body.appendChild(node);
        node.addEventListener('change', function() {
            fn(node.value);
        });
        node.click();

    },

    saveFileDialog: function(name, directory, callback) {
        
        var fn          = callback;
        var node        = this._context.getElementById('save-file-dialog');
        if (node === null) {
            node        = this._context.createElement('input');
        }
        node.type       = 'file';
        node.id         = 'save-file-dialog';
        node.style      = 'display: none';
        node.nwsaveas   = '';

        if (typeof name === 'function') {
            fn = name;
        } else if (typeof name === 'string') {
            node.nwsaveas = name;
        }

        if (typeof directory === 'function') {
            fn = directory;
        } else if (typeof directory === 'string') {
            node.nwworkingdir = directory;
        }

        this._context.body.appendChild(node);
        node.addEventListener('change', function() {
            fn(node.value);
        });
        node.click();

    },

    folderBrowserDialog: function(callback) {
        var node        = this._context.getElementById('folder-browser-dialog');
        if (node === null) {
            node        = this._context.createElement('input');
        }
        node.type       = 'file';
        node.id         = 'folder-browser-dialog';
        node.style      = 'display: none';
        node.nwdirectory= true;

        this._context.body.appendChild(node);
        node.addEventListener('change', function() {
            callback(node.value);
        });
        node.click();
    }

}

if (typeof exports == 'undefined') {
    nw.Dialog = window.Dialog = nwdialog;
} else {
    module.exports = nwdialog;
}
