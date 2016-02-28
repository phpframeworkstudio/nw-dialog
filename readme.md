# nw-dialog
File and Folder dialog for NWJS and Node Webkit

## Installation
Use Node mode

```
var dialog = require('nw-dialog')
dialog.setContext(document) // work in client
dialog.openFileDialog( ... )
```

Use Client mode

```
<script src="nw-dialog/index.js"></script>
nw.Dialog.openFileDialog( ... ) 
// or
window.Dialog.openFileDialog( ... )
```

## Example
#### OpenFileDialog
Simple 

```
dialog.openFileDialog(function(result) {
	alert(result)
})
```

With file type

```
dialog.openFileDialog('.zip, .rar', function(result) {
	alert(result)
})
```

Multiple select

```
dialog.openFileDialog('.zip, .rar', true, function(result) {
	alert(result)
})
```

### SaveFileDialog
Simple

```
dialog.saveFileDialog(function(result) {
	alert(result)
})
```

With file name

```
dialog.saveFileDialog('name.txt', function(result) {
	alert(result)
})
```

File name and default directory

```
dialog.saveFileDialog('name.txt', '/Users/didanurwanda', function(result) {
	alert(result)
})
```

### FolderBrowseDialog
Simple

```
dialog.folderBrowseDialog(function(result) {
	alert(result)
})
```
