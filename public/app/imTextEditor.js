var parms = [{
	"cmd": "aCommandName",
	"desc": "A DOMString representing the name of the command"
}, {
	"cmd": "aShowDefaultUI",
	"desc": "A Boolean indicating whether the default user interface should be shown. This is not implemented in Mozilla."
}, {
	"cmd": "aValueArgument",
	"desc": "A DOMString representing some commands (such as insertimage) require an extra value argument (the image's url). Pass an argument of null if no argument is needed."
}];

//
//{
//	"cmd": "backColor",
//	"val": "red",
//	"desc": "Changes the document background color. In styleWithCss mode, it affects the background color of the containing block instead. This requires a color value string to be passed in as a value argument. (Internet Explorer uses this to set text background color.)"
//},
//    {
//	"cmd": "contentReadOnly",
//	"desc": "Makes the content document either read-only or editable. This requires a boolean true/false to be passed in as a value argument. (Not supported by Internet Explorer.)"
//}, {
//	"cmd": "decreaseFontSize",
//	"desc": "Adds a SMALL tag around the selection or at the insertion point. (Not supported by Internet Explorer.)"
//},{
//	"cmd": "enableInlineTableEditing",
//	"desc": "Enables or disables the table row and column insertion and deletion controls. (Not supported by Internet Explorer.)"
//},
//    {
//	"cmd": "useCSS ",
//	"desc": "Toggles the use of HTML tags or CSS for the generated markup. Requires a boolean true/false as a value argument. NOTE: This argument is logically backwards (i.e. use false to use CSS, true to use HTML). (Not supported by Internet Explorer.) This has been deprecated; use the styleWithCSS command instead."
//}, {
//	"cmd": "styleWithCSS",
//	"desc": "Replaces the useCSS command; argument works as expected, i.e. true modifies/generates style attributes in markup, false generates formatting elements."
//}
//    
//                
//        {
//	"cmd": "enableObjectResizing",
//	"desc": "Enables or disables the resize handles on images and other resizable objects. (Not supported by Internet Explorer.)"
//}, {
//	"cmd": "fontName",
//	"val": "'Inconsolata', monospace",
//	"desc": "Changes the font name for the selection or at the insertion point. This requires a font name string (\"Arial\" for example) to be passed in as a value argument."
//}, {
//	"cmd": "foreColor",
//	"val": "rgba(0,0,0,.5)",
//	"desc": "Changes a font color for the selection or at the insertion point. This requires a color value string to be passed in as a value argument."
//}, {
//	"cmd": "formatBlock",
//	"desc": "Adds an HTML block-style tag around the line containing the current selection, replacing the block element containing the line if one exists (in Firefox, BLOCKQUOTE is the exception - it will wrap any containing block element). Requires a tag-name string to be passed in as a value argument. Virtually all block style tags can be used (eg. \"H1\", \"P\", \"DL\", \"BLOCKQUOTE\"). (Internet Explorer supports only heading tags H1 - H6, ADDRESS, and PRE, which must also include the tag delimiters < >, such as \"<H1>\".)"
//}, {
//	"cmd": "forwardDelete",
//	"desc": "Deletes the character ahead of the cursor's position.  It is the same as hitting the delete key."
//},{
//	"cmd": "hiliteColor",
//	"val": "Orange",
//	"desc": "Changes the background color for the selection or at the insertion point. Requires a color value string to be passed in as a value argument. UseCSS must be turned on for this to function. (Not supported by Internet Explorer.)"
//}, {
//	"cmd": "increaseFontSize",
//	"desc": "Adds a BIG tag around the selection or at the insertion point. (Not supported by Internet Explorer.)"
//},         {
//	"cmd": "insertBrOnReturn",
//	"desc": "Controls whether the Enter key inserts a br tag or splits the current block element into two. (Not supported by Internet Explorer.)"
//}, {
//	"cmd": "insertHorizontalRule",
//	"desc": "Inserts a horizontal rule at the insertion point (deletes selection)."
//},            
//    
//{
//	"cmd": "removeFormat",
//	"desc": "Removes all formatting from the current selection."
//}, {
//	"cmd": "selectAll",
//	"desc": "Selects all of the content of the editable region."
//}, 
    
var commands = [ {
	"cmd": "bold",
	"icon": "bold",
	"desc": "Toggles bold on/off for the selection or at the insertion point. (Internet Explorer uses the STRONG tag instead of B.)"
}, {
	"cmd": "italic",
	"icon": "italic",
	"desc": "Toggles italics on/off for the selection or at the insertion point. (Internet Explorer uses the EM tag instead of I.)"
}, {
	"cmd": "underline",
	"icon": "underline",
	"desc": "Toggles underline on/off for the selection or at the insertion point."
},{
	"cmd": "cut",
	"icon": "scissors",
	"desc": "Cuts the current selection and copies it to the clipboard. Clipboard capability must be enabled in the user.js preference file. See"
},  {
	"cmd": "fontSize",
	"val": "1-7",
	"icon": "text-height",
	"desc": "Changes the font size for the selection or at the insertion point. This requires an HTML font size (1-7) to be passed in as a value argument."
},  {
	"cmd": "indent",
	"icon": "indent",
	"desc": "Indents the line containing the selection or insertion point. In Firefox, if the selection spans multiple lines at different levels of indentation, only the least indented lines in the selection will be indented."
}, {
	"cmd": "outdent",
	"icon": "outdent",
	"desc": "Outdents the line containing the selection or insertion point."
}, {
	"cmd": "insertOrderedList",
	"icon": "list-ol",
	"desc": "Creates a numbered ordered list for the selection or at the insertion point."
}, {
	"cmd": "insertUnorderedList",
	"icon": "list-ul",
	"desc": "Creates a bulleted unordered list for the selection or at the insertion point."
},{
	"cmd": "createLink",
	"val": "http://twitter.com/netsi1964",
	"icon": "link",
	"desc": "Creates an anchor link from the selection, only if there is a selection. This requires the HREF URI string to be passed in as a value argument. The URI must contain at least a single character, which may be a white space. (Internet Explorer will create a link with a null URI value.)"
},    {
	"cmd": "unlink",
	"icon": "chain-broken",
	"desc": "Removes the anchor tag from a selected anchor link."
}  ,  {
	"cmd": "insertImage",
	"val": "http://dummyimage.com/160x90",
	"icon": "picture-o",
	"desc": "Inserts an image at the insertion point (deletes selection). Requires the image SRC URI string to be passed in as a value argument. The URI must contain at least a single character, which may be a white space. (Internet Explorer will create a link with a null URI value.)"
},    {
	"cmd": "justifyLeft",
	"icon": "align-left",
	"desc": "Justifies the selection or insertion point to the left."
}, {
	"cmd": "justifyRight",
	"icon": "align-right",
	"desc": "Right-justifies the selection or the insertion point."
},  {
	"cmd": "justifyCenter",
	"icon": "align-center",
	"desc": "Centers the selection or insertion point."
}, {
	"cmd": "justifyFull",
	"icon": "align-justify",
	"desc": "Justifies the selection or insertion point."
},{
	"cmd": "undo",
	"icon": "undo",
	"desc": "Undoes the last executed command."
},{
	"cmd": "redo",
	"icon": "repeat",
	"desc": "Redoes the previous undo command."
}
                        ];
// {
//	"cmd": "heading",
//	"val": "h3",
//	"icon": "header",
//	"desc": "Adds a heading tag around a selection or insertion point line. Requires the tag-name string to be passed in as a value argument (i.e. \"H1\", \"H6\"). (Not supported by Internet Explorer and Safari.)"
//}, 
//  ,  {
//	"cmd": "strikeThrough",
//	"icon": "strikethrough",
//	"desc": "Toggles strikethrough on/off for the selection or at the insertion point."
//}, {
//	"cmd": "subscript",
//	"icon": "subscript",
//	"desc": "Toggles subscript on/off for the selection or at the insertion point."
//}, {
//	"cmd": "superscript",
//	"icon": "superscript",
//	"desc": "Toggles superscript on/off for the selection or at the insertion point."
//}  
//{
//	"cmd": "copy",
//	"icon": "clone",
//	"desc": "Copies the current selection to the clipboard. Clipboard capability must be enabled in the user.js preference file. See"
//}, {
//	"cmd": "paste",
//	"icon": "clipboard",
//	"desc": "Pastes the clipboard contents at the insertion point (replaces current selection). Clipboard capability must be enabled in the user.js preference file. See"
//}, {
//	"cmd": "delete",
//	"icon": "trash",
//	"desc": "Deletes the current selection."
//},
//  {
//	"cmd": "insertHTML",
//	"val": "<h3>Life is great!</h3>",
//	"icon": "code",
//	"desc": "Inserts an HTML string at the insertion point (deletes selection). Requires a valid HTML string to be passed in as a value argument. (Not supported by Internet Explorer.)"
//},{
//	"cmd": "insertParagraph",
//	"icon": "paragraph",
//	"desc": "Inserts a paragraph around the selection or the current line. (Internet Explorer inserts a paragraph at the insertion point and deletes the selection.)"
//}, {
//	"cmd": "insertText",
//	"val": new Date(),
//	"icon": "file-text-o",
//	"desc": "Inserts the given plain text at the insertion point (deletes selection)."
//},
	app.directive("click", function () {
		return {
			restrict: "A",
			link: function (scope, element, attrs) {
				element.bind("click", function () {
					scope.$evalAsync(attrs.click);
				});
			}
		};
	});
//	app.controller("Example", function ($scope) {
//		$scope.supported = function (cmd) {
//			var css = !!document.queryCommandSupported(cmd.cmd) ? "btn-succes" : "btn-error"
//			return css
//		};
//		$scope.icon = function (cmd) {
//			return (typeof cmd.icon !== "undefined") ? "fa fa-" + cmd.icon : "";
//		};
//		$scope.doCommand = function (cmd) {
//			if ($scope.supported(cmd) === "btn-error") {
//				alert("execCommand(“" + cmd.cmd + "”)\nis not supported in your browser");
//				return;
//			}
//			val = (typeof cmd.val !== "undefined") ? prompt("Value for " + cmd.cmd + "?", cmd.val) : "";
//			document.execCommand(cmd.cmd, false, (cmd.val || ""));
//		}
//		$scope.commands = commands;
//		$scope.tags = [
//    'Bootstrap', 'AngularJS', 'execCommand'
//  ]
//	});
    //Textangular
   app.controller("TextNgCtrl", fnTextNgCtrl);

        function fnTextNgCtrl($scope,$mdDialog) {
            
            
            
  $scope.tinymceOptions = {
    plugins: 'link image code',
    toolbar:  "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link code image | forecolor backcolor emoticons",
      body_class: 'mcebody',
       content_css : 'dist/style.min.css',
       menubar:false, 
      skin:'imskin'
  };

            
             function myFileBrowser(field_name, url, type, win){
                alert("filebrowser called");
            }
            
//          MT
			$scope.formatting = [
              "h1",
              "h2",
              "h3",
			  "h4",
			  "h5",
			  "h6",
			  "p",
			  "pre"
          ];
			$scope.font = [
              "Arial",
              "Arial Black",
              "Courier New",
			  "Times New Roman"
          ];
			$scope.size = [
              "Very small",
              "A bit small",
              "Normal",
			  "Medium-large",
			  "Big",
			  "Very big",
			  "Maximum"
          ];
			$scope.color = [
              "Red",
              "Blue",
              "Green",
			  "Black"
			  ];
			
			$scope.background = [
              "Red",
              "Green",
			  "Black"
			  ];
			
            
            	$scope.supported = function (cmd) {
			var css = !!document.queryCommandSupported(cmd.cmd) ? "btn-succes" : "btn-error"
			return css
		};
            
            
		$scope.icon = function (cmd) {
			return (typeof cmd.icon !== "undefined") ? "fa fa-" + cmd.icon : "";
		};
            
            $scope.doCommand1 = function (scmd,sval) {
                var json = "{'cmd': '"+scmd +"','val':'"+sval+"';}";
                 oDoc = document.getElementById("textBox");
                var range=$scope.saveSelection();
                document.execCommand(scmd, false, (sval || ""));
//                $scope.doCommand(json);
               
                     $scope.restoreSelection(range);
//                 oDoc.focus();
            }
		$scope.doCommand = function (cmd) {
            console.log( " cmd: "+cmd);
//			if ($scope.supported(cmd) === "btn-error") {
//				alert("execCommand(“" + cmd.cmd + "”)\nis not supported in your browser");
//				return;
//			}
            
			sVal = (typeof cmd.val !== "undefined") ? prompt("Value for " + cmd.cmd + "?", cmd.val) : "";
             
            
			document.execCommand(cmd.cmd, false, (sVal || ""));
		}
		$scope.commands = commands;
		$scope.tags = [
    'Bootstrap', 'AngularJS', 'execCommand'
  ];
            
           $scope.saveSelection= function() {
    if (window.getSelection) {
        sel = window.getSelection();
        if (sel.getRangeAt && sel.rangeCount) {
            return sel.getRangeAt(0);
        }
    } else if (document.selection && document.selection.createRange) {
        return document.selection.createRange();
    }
    return null;
}

$scope.restoreSelection=function(range) {
    if (range) {
        if (window.getSelection) {
            sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } else if (document.selection && range.select) {
            range.select();
        }
    }
}
			
//			MT
			
          $scope.ins="";
$scope.insertField=function(ev){
//      var person = prompt("Please enter your name", "Harry Potter");
//    if (person != null) {
//         formatDoc('insertText',person);
    
       $mdDialog.show({
    //          template: dialogContent,
//                    scope: $scope,
           preserveScope: true,
//                     parent: angular.element(document.body),
                    templateUrl:'cpMergeFieldsLst.html',
                     ariaLabel:'Insert Merge Fields',
              controller: 'TextNgCtrl',
           clickOutsideToClose:true
    //          onComplete: afterShowAnimation,
//              locals: { info: ipt }
            }).then(function(info) { 
           if (info != null) 
               $scope.ins=info;
         formatDoc('insertText', '{{'+info+'}}');
//           $scope.$apply();
                      console.log('text angularctrl ins=== '+$scope.ins);
console.log('htmlcontent from text angularctrl=== '+$scope.htmlContent);
               
              });
 
    };
        
                $scope.fieldSelect=function(ev,field){
//                     var field1="http://svfilmfestival.org/images/logo-svff-Trans275.png";
//                       info.field=field1;
                       $mdDialog.hide(field);

                   };
        $scope.process = function(success, form, info) {
          var ret = false;
          if(success) {
            if(form.$invalid) return;
              info1=info;
               console.log('info.user1 -:'+ info.userName);
            ret = info;
          }
          $mdDialog.hide(ret);
        };

    $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };


        };


//      
//<!--                imTextEditor   -->
//                
//                <div id="toolBar1">
//<div class="md-padding" ng-cloak layout="row">
//<!--      <md-input-container style="margin-right: 10px;">-->
//<!--        <label>Formatting</label>-->
//<!--          "formatDoc('formatblock',this[this.selectedIndex].value);this.selectedIndex=0;"-->
//        <md-select placeholder="Formatting"  ng-model="fitem" ng-change="doCommand1('formatblock',fitem)">
//          <md-option ng-repeat="fitem in formatting" value="{{fitem}}">{{fitem}}</md-option>
//        </md-select>
//<!--      </md-input-container>	-->
//<!--	<md-input-container style="margin-right: 10px;">-->
//<!--        <label>Font</label>-->
//        <md-select placeholder="Font" ng-model="fontitem" ng-change="doCommand('fontname',fontitem)">
//          <md-option ng-repeat="fontitem in font" value="{{fontitem}}">{{fontitem}}</md-option>
//        </md-select>
//<!--      </md-input-container>	-->
//<!--	<md-input-container style="margin-right: 10px;">-->
//<!--        <label>Size</label>-->
//        <md-select placeholder="Size" ng-model="sitem"  ng-change="doCommand('fontsize',sitem)">
//          <md-option ng-repeat="sitem in size" value="{{sitem}}">{{sitem}}</md-option>
//        </md-select>
//<!--      </md-input-container>	-->
//<!--	<md-input-container style="margin-right: 10px;">-->
//<!--        <label>Color</label>-->
//        <md-select placeholder="Color" ng-model="citem"  ng-change="doCommand('forecolor',citem)">
//          <md-option ng-repeat="citem in color" value="{{citem}}">{{citem}}</md-option>
//        </md-select>
//<!--      </md-input-container>	-->
//<!--	<md-input-container style="margin-right: 10px;">-->
//<!--        <label>Background</label>-->
//        <md-select placeholder="Background" ng-model="bitem"  ng-change="doCommand('backcolor',bitem)">
//          <md-option ng-repeat="bitem in background" value="{{bitem}}">{{bitem}}</md-option>
//        </md-select>
//<!--      </md-input-container>	-->
//<!--
//	<md-input-container style="margin-right: 10px;">
//        <label>Background</label>
//        <md-select ng-model="item">
//          <md-option ng-repeat="item in background" value="{{item}}">{{item}}</md-option>
//        </md-select>
//      </md-input-container>	
//-->
//	</div>
//	</div>
//              <div id="toolBar2"   > 
//  
//<!--                  <span  > -->
//                      <md-button ng-repeat="cmd in commands" type="button" aria-label="{{cmd.cmd}}"  ng-click="doCommand(cmd);"> <i  title="{{cmd.cmd}}" ng-class="icon(cmd)"  ></i></md-button>  
//                     
//<!--                      </span>  -->
//   </div>    
