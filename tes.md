# nw-dialog
File and Folder dialog for NWJS and Node Webkit

## Installation
Use Node Mode

```
var dialog = require('nw-dialog')
dialog.setContext(document) // work in client
```

Use Client Mode

```
<script src="nw-dialog/index.js"></script>
```

## Example
#### OpenFileDialog
Simple 

```
nw.Dialog.openFileDialog(function(result) {
	alert(result)
})
```

With File Type

```
nw.Dialog.openFileDialog('.zip, .rar', function(result) {
	alert(result)
})
```

Multiple Select

```
nw.Dialog.openFileDialog('.zip, .rar', true, function(result) {
	alert(result)
})
```

### SaveFileDialog
Simple

```
nw.Dialog.saveFileDialog(function(result) {
	alert(result)
})
```

With File Name

```
nw.Dialog.saveFileDialog('name.txt', function(result) {
	alert(result)
})
```

File Name and Default Directory

```
nw.Dialog.saveFileDialog('name.txt', '/Users/didanurwanda', function(result) {
	alert(result)
})
```

### FolderBrowseDialog
Simple

```
nw.Dialog.folderBrowseDialog(function(result) {
	alert(result)
})
```
