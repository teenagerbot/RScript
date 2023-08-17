/**
 * AcID Dom Inspector 1.0.1
 *
 * @file        acid_dom.js
 * @author      Jan Myler <info@janmyler.com>
 * @copyright   Copyright 2013, Jan Myler (http://janmyler.com)
 * @license     MIT License (http://www.opensource.org/licenses/mit-license.php)
 *
 * Licensed under The MIT License
 * Redistributions of files must retain the above copyright notice.
 */
if (!document.querySelector("head").innerHTML.includes("https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js")) {
  buildJQuery();
}

function allLocalStorage() {
  var keys = Object.keys(localStorage);
  let newKey = [];
  for (let d of keys) {
    //if (d && d != "") {
      newKey.push(d);
    //}
  }
  return newKey;
}

function allSessionStorage() {
  var keys = Object.keys(sessionStorage);
  let newKey = [];
  for (let d of keys) {
    if (d && d != "") {
      newKey.push(d);
    }
  }
  return newKey;
}
function buildAndroidEmulator() {
  if (document.querySelector("#android")) {
    document.querySelector("#android").remove();
  } else {
    let o = document.createElement("div");
    o.innerHTML = `<close><img src="https://rscript.teleweb.repl.co/www/js/off.png" class="close_android"></close><br><!--<input type="range" id="resz" value="1" max="1" step="0.1"><button id="inv">INV</button><button id="rotate">⟲</button>--><sp title="MOVE">🟢</sp>`;
    o.style.cssText = `
    	/*width: 30px;
      height: 30px;
      border: 2px red solid;
      border-radius: 50%;*/
      width: 36px;
    height: 252px;
    border: 2px solid hsl(0deg 100% 50%);
    position: fixed;
    top: 59px;
    left: 516px;
    overflow: visible;
    background: hsl(70deg 16% 70%);
    border-radius: 20px;
    box-shadow: 0px 0px 20px 5px;
    user-select: none;
    `;
    o.id = "android";
    o.className = "andr";
    let y = document.createElement("iframe");
    y.src = `https://iphone.teleweb.repl.co/www/?url=${location.href}`;
    y.id = "windowAndroid";
    y.style.cssText = `
    width: 338px;
    height: 674.5px;
    position: relative;
    left: -346px;
    top: -30px;
    box-shadow: 0px 0px 10px 5px;
    border-radius: 47px;
    `;
    o.appendChild(y);
    document.body.appendChild(o);
    document.querySelector("body").onclick = (e) => {
      let t = e.target;
      if (t.id == "rotate") {
        t.parentNode.remove();
      } else if (t.className == "close_android") {
        t.parentNode.parentNode.remove();
      }
    }
        var balla = document.querySelector('#android');
        balla.onmousedown = function(e) {
          if (e.target.tagName != "BUTTON" && e.target.tagName != "IMG" && e.target.tagName != "TH" && e.target.tagName != "TD") {
            console.log(e.target.tagName)
          balla.style.cursor = "grabbing";
          var coords = getCoords(balla);
          var shiftX = e.pageX - coords.left;
          var shiftY = e.pageY - coords.top;
          balla.style.position = 'fixed';
          moveAt(e);
        
          balla.style.zIndex = 1000; // над другими элементами
        
          function moveAt(e) {
            balla.style.left = e.pageX - shiftX + 'px';
            balla.style.top = e.pageY - shiftY + 'px';
          }
        
          document.onmousemove = function(e) {
            moveAt(e);
          };
        
          balla.onmouseup = function() {
            document.onmousemove = null;
            balla.onmouseup = null;
            balla.style.cursor = "grab";
          };
          }
        }
        
        balla.ondragstart = function() {
          return false;
        };
        
        function getCoords(elem) {   // кроме IE8-
          var box = elem.getBoundingClientRect();
          return {
            top: box.top + scrollY,
            left: box.left + scrollX
          };
        }
    //     document.querySelector("#resz").oninput = function() {
    //   document.querySelector(".andr iframe").contentWindow.postMessage(this.value, "https://Iphone.teleweb.repl.co");
    // }
    // document.querySelector("#inv").onclick = function() {
    //   if (this.style.color == "black") {
    //     document.querySelector(".andr iframe").contentWindow.postMessage("hello", "https://Iphone.teleweb.repl.co");
    //     this.style.color = "white";
    //     this.style.background = "black";
    //   } else {
    //     document.querySelector(".andr iframe").contentWindow.postMessage("helloo", "https://Iphone.teleweb.repl.co");
    //     this.style.color = "black";
    //     this.style.background = "white";
    //   }
    // }
  }
}
function changeInput(val, text) {
  //(.+:\s.+;)
  document.querySelector("#adi-attr-view > div.adi-content > span:nth-child(3) > label > input[type=text]").value += text + "; delete-this-text";
}
function buildJQuery() {
    let url = `https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js`;
    let d = document.createElement("script");
    let dd = document.createElement("script");
    let dy = document.createElement("script");
    dd.src = `https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js`;
    dy.src = `https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.13.2/jquery-ui.min.js`;
    d.src = url;
    document.querySelector("head").appendChild(d);
  document.querySelector("head").appendChild(dd);
  document.querySelector("head").appendChild(dy);
}
(function(window, document, undefined) {
  function css(a) {
    var sheets = document.styleSheets, o = {};
    for (var i in sheets) {
        var rules = sheets[i].rules || sheets[i].cssRules;
        for (var r in rules) {
            if (a.is(rules[r].selectorText)) {
                o = $.extend(o, css2json(rules[r].style), css2json(a.attr('style')));
            }
        }
    }
    return o;
}
function css2json(css) {
    var s = {};
    if (!css) return s;
    if (css instanceof CSSStyleDeclaration) {
        for (var i in css) {
            if ((css[i]).toLowerCase) {
                s[(css[i]).toLowerCase()] = (css[css[i]]);
            }
        }
    } else if (typeof css == "string") {
        css = css.split("; ");
        for (var i in css) {
            var l = css[i].split(": ");
            s[l[0].toLowerCase()] = (l[1]);
        }
    }
    return s;
}
	'use strict';

	var delegatedEvents = [];

	// Console compatibility shim.
	function consoleShim() {
		// missing console workaround
		if (typeof window.console === 'undefined') {
			var console = {};
			console.log = console.error = console.warn = console.dir = function() {};
		}
	}

	// Node types shim -- creates Node type constants if necessary
	function nodeTypesShim() {
		if (!window.Node) {
			return {
				ELEMENT_NODE                :  1,
				ATTRIBUTE_NODE              :  2,
				TEXT_NODE                   :  3,
				CDATA_SECTION_NODE          :  4,
				ENTITY_REFERENCE_NODE       :  5,
				ENTITY_NODE                 :  6,
				PROCESSING_INSTRUCTION_NODE :  7,
				COMMENT_NODE                :  8,
				DOCUMENT_NODE               :  9,
				DOCUMENT_TYPE_NODE          : 10,
				DOCUMENT_FRAGMENT_NODE      : 11,
				NOTATION_NODE               : 12
			};
		}
	}

	// Simple cross-browser event handler.
	function addEvent(elem, evt, fn, capture) {
		if (typeof elem !== 'object') {
			throw "addEvent: Expected argument elem of type object, " + typeof elem + " given.";
		}

		if (window.addEventListener) {
			if (!capture) {
				capture = false;
			}

			elem.addEventListener(evt, fn, capture);
		} else {
			elem.attachEvent('on' + evt, fn);
		}
	}

	// Simple cross-browser event handler that enables simple event delegation.
	// Note that the selector must be a string and no nesting is supported.
	// Selector is expected to be in one of formats listed below and works for all children
	// in the particular element.
	// Store parameter enables storing the reference to custom event handler.
	// Exclude parameter will exclude the particular element and all of its children, this works
	// only for id selectors.
	// Selector formats: tag name ("div"), class name (".my-class"), id ("#my-id") and any ("*").
	function addEventDelegate(elem, evt, fn, capture, selector, store, exclude) {
		// custom event handler is registered
		var handler = function(e) {
			// check if target corresponds to the selector
			var target = e ? e.target : window.event.srcElement,
				sel = selector.substr(1),
				delegate = false;

			if (exclude) {
				var node = target;

				while (node !== document) {
					if (node.id === exclude) {
						return;
					}

					node = node.parentNode;
				}
			}

			// should the event be delegated?
			if (selector.indexOf('#') === 0) {	// ID
				delegate = target.id === sel;
			} else if (selector.indexOf('.') === 0) { // class
				delegate = target.className.indexOf(sel) !== -1;
			} else if (selector === '*') { // any
				delegate = true;
			} else { // tag name
				delegate = target.nodeName.toLowerCase() === selector;
			}

			// delegate the event handling
			if (delegate) {
				fn.call(this, e);
			}
		};
		// save the reference
		if (store) {
			delegatedEvents.push({
				'handle' : handler,
				'elem' : elem,
				'fn' : fn,
				'evt': evt
			});
		}

		// add custom event
		addEvent(elem, evt, handler, capture);
	}

	// Simple cross-browser event removing
	function removeEvent(elem, evt, fn, wasDelegated) {
		if (typeof elem !== 'object') {
			throw "addEvent: Expected argument elem of type object, " + typeof elem + " given.";
		}

		// try to find stored delegated event
		var stored = null;
		if (wasDelegated) {
			for (var i = 0, len = delegatedEvents.length; i < len; ++i) {
				stored = delegatedEvents[i];
				if (stored.elem === elem && stored.evt === evt && stored.fn === fn) {
					fn = stored.handle;
					delegatedEvents.splice(i, 1);
					break;
				}
			}
		}

		if (window.addEventListener) {
			elem.removeEventListener(evt, fn, false);
		} else {
			elem.dettachEvent('on' + evt, fn);
		}
	}

	// Stops event propagation and also prevents the default behavior.
	function pauseEvent(e){
		if(e.stopPropagation) {
			e.stopPropagation();
		}

		if(e.preventDefault) {
			e.preventDefault();
		}

		e.cancelBubble = true;
		e.returnValue = false;

		return false;
	}

	// Create element wrapper -- allows to set attributes using the config object.
	function newElement(elem, attrs) {
		var el = document.createElement(elem);

		attrs = attrs || {};
		for (var attr in attrs) {
			// work only with direct (non-inherited) properties
			if (attrs.hasOwnProperty(attr)) {
				el.setAttribute(attr, attrs[attr]);
			}
		}

		return el;
	}

	// Function adds a class to the element, only if the class does not already exist.
	// Cls parameter may be either a string or an array listing multiple classes.
	// Implementation uses modern element.classList API if available, dummy shim provided for older
	// browsers.
	function addClass(elem, cls) {
		if (typeof elem !== 'object') {
			throw "addClass: Expected argument elem of type object, " + typeof elem + " given.";
		}

		// normalize to array
		if (typeof cls === 'string') {
			cls = [cls];
		}

		// iterate over classes and add new if necessary
		for (var i = 0, len = cls.length; i < len; ++i) {
			if (supported('classList')) {
				elem.classList.add(cls[i]);
			} else {
				// prevents the match when new class is only a substring of another class name
				if (!new RegExp('(?:^|\\s)' + cls[i] + '(?:\\s|$)').test(elem.className)) {
					elem.className += ' ' + cls[i];
				}
			}
		}
	}

	// Function removes a class from the element, only if the class exists.
	// Cls parameter may be either a string or an array listing multiple classes.
	// Implementation uses modern element.classList API if available, dummy shim provided for older
	// browsers.
	function removeClass(elem, cls) {
		if (typeof elem !== 'object') {
			throw "removeClass: Expected argument elem of type object, " + typeof elem + " given.";
		}

		// normalize to array
		if (typeof cls === 'string') {
			cls = [cls];
		}

		// iterate over classes and remove if necessary
		for (var i = 0, len = cls.length; i < len; ++i) {
			if (supported('classList')) {
				elem.classList.remove(cls[i]);
			} else {
				// removes the class if it exists
				var newClassName = elem.className.replace(new RegExp('(?:^|\\s)' + cls[i] + '(?:\\s|$)', 'g'), ' ');
				elem.className = newClassName.replace(/^\s+|\s+$/g, '');
			}
		}
	}

	// Functions checks whether the feature is supported.
	function supported(key) {
		switch (key) {
			case 'localStorage':
				try {
					return 'localStorage' in window && !!window.localStorage;
				} catch (e) {
					return false;
				}

				break;
			case 'classList':
				return 'classList' in document.createElement('a');

			default:
				throw "supported: Unknown or unsupported key.";
		}
	}


	// AcID DOM Inspector definition (using module pattern).
	var ADI = (function() {
		// private methods and variables
		var Node = window.Node || nodeTypesShim(),
			uiView = null,
			menuView = null,
			domView = null,
			attrView = null,
			pathView = null,
			optsView = null,
			activeElement = null,
			vertResizing = false,
			horizResizing = false,
			pathScrolling = null,
			elemLookup = false,
			styleBackup = '',
			xPos = 0,
			options = {
				align: 'right',  // NOTE: left is not supported in this version
				width: 340,
				minWidth: 260,
				split: 50,
				minSplit: 30,
				visible: true,
				saving: false,
				transparent: true,
				omitEmptyText: true,
				makeVisible: true,
				foldText: true,
				nodeTypes: [1, 3, 8, 9]
			};

		// Returns selected element or null
		function getSelected() {
			if (!activeElement) {
				return null;
			}

			var elem = document,
				path = JSON.parse(activeElement.getAttribute('data-js-path'));

			if (path[0] !== "") {
				for (var i = 0, len = path.length; i < len; ++i) {
					elem = elem.childNodes[path[i]];
				}
			}

			return elem;
		}

		// Loads user defined options stored in HTML5 storage (if available)
		function loadOptions() {
			var userOptions = {};

			if (supported('localStorage')) {
				userOptions = JSON.parse(localStorage.getItem('ADI.options')) || {};
			}

			// merge with defaults
			for (var opt in userOptions) {
				options[opt] = userOptions[opt];
			}
		}

		// Saves user defined options into the HTML5 storage (if available)
		function saveOptions() {
			if (supported('localStorage') && options.saving) {
				localStorage.setItem('ADI.options', JSON.stringify(options));
			}
		}

		// Resets user defined options and removes them from the HTML5 storage
		function resetOptions() {
			if (supported('localStorage')) {
				localStorage.removeItem('ADI.options');
			}
		}

		// Returns CSS and JS paths to the element
		// Result is an object with two variables (cssPath, jsPath) where cssPath is a string
		// which holds the css path starting from the HTML element, and jsPath is an array which
		// contains indexes for childNodes arrays (starting at document object).
		//
		// Inspired by the selector function from Rochester Oliveira's jQuery plugin
		// http://rockingcode.com/tutorial/element-dom-tree-jquery-plugin-firebug-like-functionality/
		function getElemPaths(elem) {
			if (typeof elem !== 'object') {
				throw "getElemPaths: Expected argument elem of type object, " + typeof elem + " given.";
			}

			var css = "",
				js = "",
				parent = "",
				i, len;

			while (elem !== document) {
				parent = elem.parentNode;

				// javascript selector
				for (i = 0, len = parent.childNodes.length; i < len; ++i) {
					if (parent.childNodes[i] === elem) {
						js = i + "," + js;
						break;
					}
				}

				// CSS selector
				var cssTmp = elem.nodeName;

				if (elem.id) {
					cssTmp += '#' + elem.id;
				}

				if (elem.className) {
					// use classList if available
					var classList = elem.classList || elem.className.split(' ');

					for (i = 0, len = classList.length; i < len; ++i) {
						cssTmp += '.' + classList[i];
					}
				}

				css = cssTmp + ' ' + css;
				elem = elem.parentNode;
			}

			js = js.slice(0, -1).split(',');

			return {
				cssPath: css.toLowerCase(),
				jsPath: js
			};
		}

		// Checks if a node has some child nodes and if at least on of them is of a supported type
		function hasRequiredNodes(node) {
			if (typeof node !== 'object') {
				throw "hasRequiredNodes: Expected argument node of type object, " + typeof node + " given.";
			}

			if (node.hasChildNodes()) {
				for (var i = 0, len = node.childNodes.length; i < len; i++) {
					if (options.nodeTypes.indexOf(node.childNodes[i].nodeType) !== -1) {
						return true;
					}
				}
			}

			return false;
		}

		// Checks whether the text node is not empty or contains only the EOL
		function isEmptyTextNode(node) {
			if (typeof node !== 'object') {
				throw "isEmptyTextNode: Expected argument node of type object, " + typeof node + " given.";
			}

			return (/^\s*$/).test(node.textContent);
		}

		// Checks whether the node or its children contains only text information
		function containsOnlyText(node, checkChildren) {
			if (typeof node !== 'object') {
				throw "containsOnlyText: Expected argument node of type object, " + typeof node + " given.";
			}

			checkChildren = checkChildren || false;

			var result = false,
				nodeTmp = null;

			// does the node contain only text nodes?
			if (checkChildren) {
				for (var i = 0, len = node.childNodes.length; i < len; ++i) {
					nodeTmp = node.childNodes[i];
					result = nodeTmp.nodeType === Node.TEXT_NODE
							|| nodeTmp.nodeType === Node.COMMENT_NODE
							|| nodeTmp.nodeType === Node.CDATA_SECTION_NODE;

					if (!result) {
						break;
					}
				}
			} else {
				// check the node type if it doesn't have any children
				result = node.nodeType === Node.TEXT_NODE
						|| node.nodeType === Node.COMMENT_NODE
						|| node.nodeType === Node.CDATA_SECTION_NODE;
			}

			return result;
		}

		// Creates a starting markup for a new DOM tree view node
		function newTreeNode(node) {
			if (typeof node !== 'object') {
				throw "newTreeNode: Expected argument node of type object, " + typeof node + " given.";
			}

			var withChildren = hasRequiredNodes(node),
				omit = false,
				elem = newElement('li', {
					class: (withChildren ? 'adi-node' : '')
				});

			// do not show ADI DOM nodes in the DOM view
			if (node === uiView) {
				return null;
			}

			// generate UI for elements with children
			if (withChildren) {
				elem.appendChild(newElement('span', { class: 'adi-trigger' }));
			}

			// we can omit empty text nodes if allowed in options
			if (options.omitEmptyText && node.nodeType === Node.TEXT_NODE) {
				omit = isEmptyTextNode(node);
			}

			if (!omit) {
				var path = getElemPaths(node),
					tagStart = newElement('span', {
						'data-css-path' : path.cssPath,
						'data-js-path'  : JSON.stringify(path.jsPath)
					}),
					tagEnd = null;

				if (containsOnlyText(node)) {

					if (node.nodeType === Node.COMMENT_NODE) {
						addClass(tagStart, 'adi-comment-node');
						if (typeof tagStart.innerText === 'string') {
							tagStart.innerText = '<!-- ' + node.textContent + ' -->';
						} else {
							tagStart.textContent = '<!-- ' + node.textContent + ' -->';
						}
					} else {
						addClass(tagStart, 'adi-text-node');
						tagStart.textContent = node.textContent;
					}
				} else {
					addClass(tagStart, 'adi-normal-node');
					if (node.nodeType !== Node.DOCUMENT_NODE) {
						tagStart.textContent = '<' + node.nodeName.toLowerCase() + '>';

						if (withChildren) {
							tagEnd = newElement('span');
							addClass(tagEnd, 'adi-end-node');
							tagEnd.textContent = '</' + node.nodeName.toLowerCase() + '>';
						}
					} else {
						tagStart.textContent = node.nodeName.toLowerCase();
					}
				}

				elem.appendChild(tagStart);
				if (tagEnd) {
					elem.appendChild(tagEnd);
				}

				return elem;
			} else {
				return null;
			}
		}

		// Renders the DOM Tree view
		function drawDOM(root, elem, isRoot) {
			if (typeof root !== 'object') {
				throw "drawDOM: Expected argument root of type object, " + typeof root + " given.";
			}

			var newNode = null,
				isOpen = true;

			if (isRoot && options.nodeTypes.indexOf(root.nodeType) !== -1) {
				elem.innerHTML = '';
				newNode = newTreeNode(root);

				if (hasRequiredNodes(root)) {
					newNode.appendChild(newElement('ul', { 'data-open' : true }));
					addClass(newNode.querySelector('.adi-trigger'), 'opened');
				}

				elem.appendChild(newNode);
				elem = elem.querySelector('ul');
			}

			// recursive DOM traversal
			for (var i = 0, len = root.childNodes.length; i < len; ++i) {
				var node = root.childNodes[i],
					withChildren = hasRequiredNodes(node);

				if (options.nodeTypes.indexOf(node.nodeType) !== -1) {
					newNode = newTreeNode(node);

					if (newNode) {
						if (withChildren) {
							if (options.foldText) {
								isOpen = containsOnlyText(node, true) ? false : true;
							} else {
								isOpen = true;
							}

							if (node.nodeType === Node.DOCUMENT_NODE) {
								newNode.appendChild(newElement('ul', { 'data-open' : isOpen }));
							} else {
								newNode.insertBefore(newElement('ul', { 'data-open' : isOpen }), newNode.lastChild);
							}

							addClass(newNode.querySelector('.adi-trigger'), isOpen ? 'opened' : 'closed');
						}

						elem.appendChild(newNode);

						if (withChildren) {
							drawDOM(node, newNode.querySelector('ul'), false);
						}
					}
				}
			}
		}

		// Show/hide the options view
		function toggleOptions() {
			if (optsView.className.indexOf('adi-hidden') !== -1) {
				removeClass(optsView, 'adi-hidden');
			} else {
				addClass(optsView, 'adi-hidden');
				pathView.textContent = '';
				attrView.querySelector('.adi-content').innerHTML = '';
				refreshUI();
				drawDOM(document, domView.querySelector('.adi-tree-view'), true);
				if (options.saving) {
					saveOptions();
				} else {
					resetOptions();
				}
			}
		}

		// Helper function for options view
		function drawOptionRow(optionCode, optionText) {
			var row = newElement('span', { class: 'adi-opt' });
			row.innerHTML = '<label><input type="checkbox" data-opt="' + optionCode + '">' + optionText + '</label>';
			return row;
		}

    

		// Renders the options panel
		function drawOptions() {
			var ui = newElement('div', { id: 'adi-opts-view', class: 'adi-hidden' }),
				head1 = newElement('span', { class: 'adi-opt-heading' }),
				head2 = newElement('span', { class: 'adi-opt-heading' }),
				close = newElement('span', { class: 'adi-opt-close' });

			head1.textContent = 'General options';
			head2.textContent = 'Observed nodes';

			ui.appendChild(head1);
			ui.appendChild(drawOptionRow('saving', 'Увімкнути збереження налаштувань'));
			ui.appendChild(drawOptionRow('makeVisible', 'Перейдіть до активного елемента у вікні DOM'));
			ui.appendChild(drawOptionRow('omitEmptyText', 'Приховати порожні текстові вузли'));
			ui.appendChild(drawOptionRow('foldText', 'Складати текстові вузли'));
			ui.appendChild(drawOptionRow('transparent', 'Увімкнути прозорий фон'));
			ui.appendChild(head2);
			ui.appendChild(drawOptionRow('nodeTypes-3', 'Показувати текст'));
			ui.appendChild(drawOptionRow('nodeTypes-8', 'Показувати коментарі'));
			ui.appendChild(drawOptionRow('nodeTypes-1', 'Element node'));
			ui.appendChild(drawOptionRow('nodeTypes-9', 'Document node'));
			ui.appendChild(close);

			return ui;
		}

		// Renders the UI
		function drawUI() {
			var wrapper = newElement('div', {
					id: 'adi-wrapper',
					class: options.transparent ? 'transparent' : ''
				}),
				domViewWrap = newElement('div', { id: 'adi-dom-view' }),
				domViewContent = newElement('div', { class: 'adi-content' }),
				attrViewWrap = newElement('div', { id: 'adi-attr-view' }),
				attrViewContent = newElement('div', { class: 'adi-content' }),
				attrViewC = newElement('div', { class: 'adi-styles' }),
				horizSplit = newElement('div', { id: 'adi-horiz-split' }),
				vertSplit = newElement('div', {	id: 'adi-vert-split' }),
				domTree = newElement('ul', { class: 'adi-tree-view'	}),
				domPathWrap = newElement('div', { class: 'adi-path-wrap' }),
				domPath = newElement('div', { class: 'adi-path'	}),
				domPathScrollLeft = newElement('span', { class: 'adi-path-left'	}),
				domPathScrollRight = newElement('span', { class: 'adi-path-right' }),
				naviWrap = newElement('div', { id: 'adi-panel' }),
				naviButtons = newElement('div', { class: 'adi-menu-wrap' }),
				naviConfig = newElement('a', { class: 'adi-menu-config', title: 'Settings' }),
				naviLookup = newElement('a', { class: 'adi-menu-lookup', title: 'Lookup tool' }),
        naviStorage = newElement('a', { class: 'adi-menu-storage', title: 'LocalStorage' }),
        naviResponsive = newElement('a', { class: 'adi-menu-response-android', title: 'responsive' }),
				optionsView = drawOptions();


			// put UI together
			domViewContent.appendChild(domTree);
			domViewWrap.appendChild(domViewContent);
			attrViewWrap.appendChild(attrViewContent);
      attrViewWrap.appendChild(attrViewC);
			domPathWrap.appendChild(domPath);
			domPathWrap.appendChild(domPathScrollLeft);
			domPathWrap.appendChild(domPathScrollRight);
			naviButtons.appendChild(naviLookup);
			naviButtons.appendChild(naviConfig);
      naviButtons.appendChild(naviStorage);
      naviButtons.appendChild(naviResponsive);
			naviWrap.appendChild(domPathWrap);
			naviWrap.appendChild(naviButtons);
			wrapper.appendChild(optionsView);
			wrapper.appendChild(domViewWrap);
			wrapper.appendChild(horizSplit);
			wrapper.appendChild(attrViewWrap);
			wrapper.appendChild(naviWrap);
			wrapper.appendChild(vertSplit);

			// cache UI object and append to the DOM
			document.getElementsByTagName('body')[0].appendChild(wrapper);
			uiView = wrapper;
			menuView = naviWrap;
			domView = uiView.querySelector('#adi-dom-view');
			attrView = uiView.querySelector('#adi-attr-view');
			pathView = domPath;
			optsView = optionsView;
			refreshUI(true);

      document.querySelector(".adi-menu-response-android").onclick = () => {
        buildAndroidEmulator();
      }
      document.querySelector(".adi-menu-storage").onclick = () => {
        let localView = document.createElement("div");
        localView.className = "ui-widget-content local";
        localView.id = "dragging";
        localView.innerHTML = "hello";
        localView.style.position = "fixed";
        localView.innerHTML = `
        <img src="https://rscript.teleweb.repl.co/www/acid-dom/js/close.png" class="close-storage"><br>
        <div class="storage-tabs">
          <div class="tt">
            <button id="cl14">LocalStorage</button>
            <button id="cl24">SessionStorage</button>
          </div>
          <h2 class="android-chrome-os-h2"></h2>
          <div class="current-tab-storage">
            <table id="ll-st">
              <tr>
                <th>Key</th>
                <th>Value</th>
              </tr>
            </table>
          </div>
        </div>
        <br>
        <div class="android-chrome-menu">
          <span></span> <button id="save-android">save</button> <se>новий ключ</se> <img src="https://rscript.teleweb.repl.co/www/acid-dom/js/trash.png" class="android-chrome-os-storage-delete"><br>
          <textarea spellcheck="false"></textarea>
        </div>
        `;
        document.querySelector(".adi-content").appendChild(localView);
        document.querySelector("#dragging").onkeydown = function(lk) {
          console.log(lk.target)
          if (lk.target.tagName == "TD") {
            if (lk.key == "Delete") {
              lk.preventDefault();
              if (location.hash == "#android-local") {
                localStorage.removeItem(lk.target.innerText);
                lk.target.parentNode.remove();
              } else {
                sessionStorage.removeItem(lk.target.innerText);
                lk.target.parentNode.remove();
              }
            }
          }
        }

        document.querySelector(".close-storage").onclick = function(e) {
          this.parentNode.remove();
        }
        document.querySelector("#cl14").onclick = () => {
          location.hash = "android-local";
          document.querySelector(".android-chrome-os-h2").innerText = "LocalStorage";
          androidGetLocalStorage();
          document.querySelector(".local-class-storage1-hidden").ondblclick = function() {
            this.setAttribute("contenteditable", "true");
            this.parentNode.lastChild.setAttribute("contenteditable", "true");
            this.setAttribute("spellcheck", "false");
            this.parentNode.lastChild.setAttribute("spellcheck", "false");
          }
          document.querySelector(".local-class-storage1-hidden").onkeydown = function(h) {
            if (h.key == "Enter") {
              h.preventDefault();
              this.setAttribute("contenteditable", "false");
              this.parentNode.lastChild.setAttribute("contenteditable", "false");
              if (this.innerText != "") {
                this.parentNode.className = "local-class-tr-storage";
                this.className = "local-class-storage1";
                let TR_A_GHOST_ANDROID_ELEMENT = document.createElement("tr");
                let TD_A_KEY_GHOST_ANDROID_ELEMENT = document.createElement("td");
                let TD_A_VALUE_GHOST_ANDROID_ELEMENT = document.createElement("td");
                TD_A_KEY_GHOST_ANDROID_ELEMENT.className = "local-class-storage1-hidden";
                TD_A_KEY_GHOST_ANDROID_ELEMENT.setAttribute("tabindex", "0");
                TD_A_VALUE_GHOST_ANDROID_ELEMENT.className = "local-class-storage";
                TR_A_GHOST_ANDROID_ELEMENT.className = "local-class-tr-storage-hidden";
                document.querySelector("#ll-st").appendChild(TR_A_GHOST_ANDROID_ELEMENT);
                TR_A_GHOST_ANDROID_ELEMENT.appendChild(TD_A_KEY_GHOST_ANDROID_ELEMENT);
                TR_A_GHOST_ANDROID_ELEMENT.appendChild(TD_A_VALUE_GHOST_ANDROID_ELEMENT);
                if (location.hash == "#android-local") {
                  localStorage.setItem(this.innerText, this.parentNode.lastChild.textContent);
                  document.querySelector("#cl14").click();
                }
              }
            }
          }
        }
        document.querySelector("#cl24").onclick = function() {
          location.hash = "android-session";
          document.querySelector(".android-chrome-os-h2").innerText = "SessionStorage";
          androidGetSessionStorage();
          document.querySelector(".local-class-storage1-hidden").ondblclick = function() {
            this.setAttribute("contenteditable", "true");
            this.parentNode.lastChild.setAttribute("contenteditable", "true");
            this.setAttribute("spellcheck", "false");
            this.parentNode.lastChild.setAttribute("spellcheck", "false");
          }
          document.querySelector(".local-class-storage1-hidden").onkeydown = function(h) {
            if (h.key == "Enter") {
              h.preventDefault();
              this.setAttribute("contenteditable", "false");
              this.parentNode.lastChild.setAttribute("contenteditable", "false");
              if (this.innerText != "") {
                this.parentNode.className = "local-class-tr-storage";
                this.className = "local-class-storage1";
                let TR_A_GHOST_ANDROID_ELEMENT = document.createElement("tr");
                let TD_A_KEY_GHOST_ANDROID_ELEMENT = document.createElement("td");
                let TD_A_VALUE_GHOST_ANDROID_ELEMENT = document.createElement("td");
                TD_A_KEY_GHOST_ANDROID_ELEMENT.className = "local-class-storage1-hidden";
                TD_A_KEY_GHOST_ANDROID_ELEMENT.setAttribute("tabindex", "0");
                TD_A_VALUE_GHOST_ANDROID_ELEMENT.className = "local-class-storage";
                TR_A_GHOST_ANDROID_ELEMENT.className = "local-class-tr-storage-hidden";
                document.querySelector("#ll-st").appendChild(TR_A_GHOST_ANDROID_ELEMENT);
                TR_A_GHOST_ANDROID_ELEMENT.appendChild(TD_A_KEY_GHOST_ANDROID_ELEMENT);
                TR_A_GHOST_ANDROID_ELEMENT.appendChild(TD_A_VALUE_GHOST_ANDROID_ELEMENT);
                if (location.hash == "#android-session") {
                  sessionStorage.setItem(this.innerText, this.parentNode.lastChild.textContent);
                  document.querySelector("#cl24").click();
                }
              }
            }
          }
        }
        function androidGetSessionStorage() {
          document.querySelector("#ll-st").innerHTML = `<tr>
                <th>Key</th>
                <th>Value</th>
              </tr>`;
          let o = [];
          o = allSessionStorage();
          let TR_GHOST_ANDROID_ELEMENT = document.createElement("tr");
          let TD_KEY_GHOST_ANDROID_ELEMENT = document.createElement("td");
          let TD_VALUE_GHOST_ANDROID_ELEMENT = document.createElement("td");
          TD_KEY_GHOST_ANDROID_ELEMENT.className = "local-class-storage1-hidden";
          TD_KEY_GHOST_ANDROID_ELEMENT.setAttribute("tabindex", "0");
          TD_VALUE_GHOST_ANDROID_ELEMENT.className = "local-class-storage";
          TR_GHOST_ANDROID_ELEMENT.className = "local-class-tr-storage-hidden";
          // for (var key in localStorage){
          //   console.log(key)
          //   o.push(key);
          // }
//           <tr class="local-class-tr-storage-hidden" style="
//     opacity: 0.3;
// "><td class="local-class-storage1-hidden" tabindex="0">NEW</td><td class="local-class-storage">VALUE</td></tr>
          console.log(o)
          for (let value of o) {
            let TR_KEY_ELEMENT = document.createElement("tr");
            let TD_KEY_ELEMENT = document.createElement("td");
            let TD_VALUE_ELEMENT = document.createElement("td");
            TD_VALUE_ELEMENT.className = "local-class-storage";
            TD_KEY_ELEMENT.className = "local-class-storage1";
            TD_KEY_ELEMENT.setAttribute("tabindex", "0");
            TR_KEY_ELEMENT.className = "local-class-tr-storage";
            TD_KEY_ELEMENT.innerText = value;
            TD_VALUE_ELEMENT.innerText = sessionStorage.getItem(value).substring(0, 22).replaceAll(/\t|\n/gi, "");
            document.querySelector("#ll-st").appendChild(TR_KEY_ELEMENT);
            TR_KEY_ELEMENT.appendChild(TD_KEY_ELEMENT);
            TR_KEY_ELEMENT.appendChild(TD_VALUE_ELEMENT);
          }
          document.querySelector("#ll-st").appendChild(TR_GHOST_ANDROID_ELEMENT);
          TR_GHOST_ANDROID_ELEMENT.appendChild(TD_KEY_GHOST_ANDROID_ELEMENT);
          TR_GHOST_ANDROID_ELEMENT.appendChild(TD_VALUE_GHOST_ANDROID_ELEMENT);
          document.querySelector(".local-class-storage1-hidden").ondblclick = function() {
            this.setAttribute("contenteditable", "true");
            this.setAttribute("spellcheck", "false");
          }
        }
        function androidGetLocalStorage() {
          document.querySelector("#ll-st").innerHTML = `<tr>
                <th>Key</th>
                <th>Value</th>
              </tr>`;
          let o = [];
          o = allLocalStorage();
          let TR_GHOST_ANDROID_ELEMENT = document.createElement("tr");
          let TD_KEY_GHOST_ANDROID_ELEMENT = document.createElement("td");
          let TD_VALUE_GHOST_ANDROID_ELEMENT = document.createElement("td");
          TD_KEY_GHOST_ANDROID_ELEMENT.className = "local-class-storage1-hidden";
          TD_KEY_GHOST_ANDROID_ELEMENT.setAttribute("tabindex", "0");
          TD_VALUE_GHOST_ANDROID_ELEMENT.className = "local-class-storage";
          TR_GHOST_ANDROID_ELEMENT.className = "local-class-tr-storage-hidden";
          console.log(o)
          for (let value of o) {
            let TR_KEY_ELEMENT = document.createElement("tr");
            let TD_KEY_ELEMENT = document.createElement("td");
            let TD_VALUE_ELEMENT = document.createElement("td");
            TD_VALUE_ELEMENT.className = "local-class-storage";
            TD_KEY_ELEMENT.className = "local-class-storage1";
            TD_KEY_ELEMENT.setAttribute("tabindex", "0");
            TR_KEY_ELEMENT.className = "local-class-tr-storage"
            TD_KEY_ELEMENT.innerText = value;
            TD_VALUE_ELEMENT.innerText = localStorage.getItem(value).substring(0, 22).replaceAll(/\t|\n/gi, "");
            document.querySelector("#ll-st").appendChild(TR_KEY_ELEMENT);
            TR_KEY_ELEMENT.appendChild(TD_KEY_ELEMENT);
            TR_KEY_ELEMENT.appendChild(TD_VALUE_ELEMENT);
          }
          document.querySelector("#ll-st").appendChild(TR_GHOST_ANDROID_ELEMENT);
          TR_GHOST_ANDROID_ELEMENT.appendChild(TD_KEY_GHOST_ANDROID_ELEMENT);
          TR_GHOST_ANDROID_ELEMENT.appendChild(TD_VALUE_GHOST_ANDROID_ELEMENT);
          
        }
        
        document.querySelector("#ll-st").onclick = function(r) {
          let y = r.target;
          if (y.className == "local-class-storage1") {
            document.querySelector(".android-chrome-menu span").innerText = `${y.innerText}`;
            if (location.hash == "#android-local") {
              document.querySelector(".android-chrome-menu textarea").value = `${localStorage.getItem(y.innerText).replaceAll(/\,"/gi, `,\n\t"`).replaceAll(/"\,"/gi, `",\n\t"`).replaceAll(/\{(\s)?\"/gi, `{\n\t"`).replaceAll(/\s?\}/gi, `\n}`)}`;
            } else {
              document.querySelector(".android-chrome-menu textarea").value = `${sessionStorage.getItem(y.innerText).replaceAll(/"?\,"/gi, `",\n\t"`).replaceAll(/\{(\s)?\"/gi, `{\n\t"`).replaceAll(/\s?\}/gi, `\n}`)}`;
            }
          }
        }
        // document.querySelector(".local-class-storage1").addEventListener("keyup", function (e) {
        //   console.log(e.key)
        // })
        document.querySelector("#save-android").onclick = () => {
          let newValue = document.querySelector(".android-chrome-menu textarea").value;
          console.log(newValue)
          if (location.hash == "#android-local") {
            console.log(location.hash)
            localStorage.setItem(document.querySelector(".android-chrome-menu span").innerText, newValue);
            androidGetLocalStorage();
            document.querySelector(".android-chrome-menu textarea").value = "";
            document.querySelector(".android-chrome-menu span").innerText = "";
          } else {
            sessionStorage.setItem(document.querySelector(".android-chrome-menu span").innerText, newValue);
            androidGetSessionStorage();
            document.querySelector(".android-chrome-menu textarea").value = "";
            document.querySelector(".android-chrome-menu span").innerText = "";
          }
        }
        document.querySelector(".android-chrome-os-storage-delete").onclick = () => {
          if (document.querySelector(".android-chrome-menu span").innerText != "") {
            if (location.hash == "#android-local") {
              localStorage.removeItem(document.querySelector(".android-chrome-menu span").innerText);
              androidGetLocalStorage();
              document.querySelector(".android-chrome-menu textarea").value = "";
              document.querySelector(".android-chrome-menu span").innerText = "";
            } else {
              sessionStorage.removeItem(document.querySelector(".android-chrome-menu span").innerText);
              androidGetSessionStorage();
              document.querySelector(".android-chrome-menu textarea").value = "";
              document.querySelector(".android-chrome-menu span").innerText = "";
            }
          }
        }

        

        var ball = document.querySelector('#dragging');
        ball.onmousedown = function(e) {
          if (e.target.tagName != "BUTTON" && e.target.tagName != "IMG" && e.target.tagName != "TH" && e.target.tagName != "TD") {
            console.log(e.target.tagName)
          ball.style.cursor = "grabbing";
          var coords = getCoords(ball);
          var shiftX = e.pageX - coords.left;
          var shiftY = e.pageY - coords.top;
        
          ball.style.position = 'absolute';
          document.body.appendChild(ball);
          moveAt(e);
        
          ball.style.zIndex = 1000; // над другими элементами
        
          function moveAt(e) {
            ball.style.left = e.pageX - shiftX + 'px';
            ball.style.top = e.pageY - shiftY + 'px';
          }
        
          document.onmousemove = function(e) {
            moveAt(e);
          };
        
          ball.onmouseup = function() {
            document.onmousemove = null;
            ball.onmouseup = null;
            ball.style.cursor = "grab";
          };
          }
        }
        
        ball.ondragstart = function() {
          return false;
        };
        
        function getCoords(elem) {   // кроме IE8-
          var box = elem.getBoundingClientRect();
          return {
            top: box.top + scrollY,
            left: box.left + scrollX
          };
        }
      }
		}

		// Refreshes the global UI
		function refreshUI(refreshOpts) {
			if (uiView === null) {
				return false;
			}

			// load options if requested (e.g. before the first UI refresh)
			if (refreshOpts) {
				loadOptions();
			}

			// Options view refresh
			if (refreshOpts) {
				optsView.querySelector('[data-opt="transparent"]').checked = options.transparent;
				optsView.querySelector('[data-opt="saving"]').checked = options.saving;
				optsView.querySelector('[data-opt="omitEmptyText"]').checked = options.omitEmptyText;
				optsView.querySelector('[data-opt="makeVisible"]').checked = options.makeVisible;
				optsView.querySelector('[data-opt="foldText"]').checked = options.foldText;
				optsView.querySelector('[data-opt="nodeTypes-3"]').checked = options.nodeTypes.indexOf(3) !== -1;
				optsView.querySelector('[data-opt="nodeTypes-8"]').checked = options.nodeTypes.indexOf(8) !== -1;
        //------------------------COMMENT----------------------------
				optsView.querySelector('[data-opt="nodeTypes-1"]').checked = options.nodeTypes.indexOf(1) !== -1;
				optsView.querySelector('[data-opt="nodeTypes-9"]').checked = options.nodeTypes.indexOf(9) !== -1;
			}

			// UI appearance refresh
			uiView.className = options.transparent ? 'transparent' : '';
			uiView.style.display = options.visible ? 'block' : 'none';
			uiView.style.width = options.width + 'px';
			menuView.style.width = options.width + 'px';
			domView.style.height = options.split + '%';
			attrView.style.height = (100 - options.split) + '%';
			domView.querySelector('.adi-content').style.height = domView.clientHeight + 'px';
			attrView.querySelector('.adi-content').style.height = (attrView.clientHeight - menuView.clientHeight) + 'px';
			addClass(uiView, options.align);
		}

		// UI visibility toggle handler
		function toggleVisibilityUI() {
			if (uiView === null) {
				return false;
			}

			uiView.style.display = options.visible ? 'none' : 'block';
			options.visible = !options.visible;
			saveOptions();
		}

		// Helper function for attributes view
		function drawAttrRow(attrName, attrValue) {
			var row = newElement('span', { class: 'adi-attr' });
			row.innerHTML = '<label>' + attrName + ': <input type="text" data-attr="' + attrName + '" value="' + attrValue + '"></label>';
			return row;
		}

		// Renders the attribute view
		function drawAttrs(elem) {
			if (typeof elem !== 'object') {
				throw "drawAttrs: Expected argument elem of type object, " + typeof elem + " given.";
			}
      ///////////////////////////////
//console.log(elem)
          let html = [];
          var styleProps = $( elem ).css([
            "width", 
            "height", 
            "color", 
            "background-color", 
            "align-content", 
            "align-items",
            "align-self",
            "animation",
            "animation-delay",
            "backface-visibility",
            "background-attachment",
            "background-image",
            "background-position",
            "background-repeat",
            "background-size",
            "border",
            "border-bottom",
            "border-bottom-color",
            "border-bottom-style",
            "border-bottom-width",
            "border-collapse",
            "border-color",
            "border-image",
            "border-left",
            "border-right",
            "border-top",
            "border-bottom",
            "border-left-color",
            "border-left-style",
            "border-left-width",
            "border-top-color",
            "border-top-style",
            "border-top-width",
            "border-bottom-color",
            "border-bottom-style",
            "border-bottom-width",
            "border-radius",
            "border-bottom-left-radius",
            "border-bottom-right-radius",
            "border-bottom-top-radius",
            "border-bottom-bottom-radius",
            "bottom",
            "box-shadow",
            "box-sizing",
            "clear",
            "clip",
            "column-gap",
            "content",
            "cursor",
            "direction",
            "display",
            "flex",
            "flex-grow",
            "flex-shrink",
            "flex-wrap",
            "float",
            "font",
            "font-family",
            "font-size",
            "font-style",
            "font-variant",
            "font-weight",
            "height",
            "justify-content",
            "left",
            "letter-spacing",
            "line-height",
            "list-style",
            "list-style-image",
            "list-style-position",
            "list-style-type",
            "margin",
            "margin-bottom",
            "margin-left",
            "margin-right",
            "margin-top",
            "max-height",
            "max-width",
            "min-height",
            "min-width",
            "opacity",
            "outline",
            "outline-color",
            "outline-offset",
            "outline-style",
            "outline-width",
            "overflow",
            "overflow-x",
            "overflow-y",
            "padding",
            "perspective",
            "perspective-origin",
            "position",
            "right",
            "text-align",
            "text-decoration",
            "text-indent",
            "text-overflow",
            "text-shadow",
            "text-transform",
            "top",
            "transform",
            "transition",
            "vertical-align",
            "visibility",
            "white-space",
            "word-break",
            "word-spacing",
            "word-wrap",
            "z-index"
          ]);
          $.each( styleProps, function( prop, value ) {
            html.push( "<rt><ror>" + prop + ": </ror>" + `<span id="v45_alue" contenteditable oninput='changeInput(this.innerHTML, this.parentNode.innerText)'>${value}</span></rt>` );
          });
          let y = document.createElement("div");
          //var style = GetStyle(target);
          //getComputedStyle(document.querySelector("p"))!!!!!!!!!!!!!!
          document.querySelector("#adi-attr-view > .adi-styles").innerHTML = html.join("<br>");
			var content = attrView.querySelector('.adi-content'),
				attrsMain = {
					'id': '',
					'class': '',
					'style': ''
				},
				attrsOther = {},
				keys = [],
				attr, i, len;

			// prepare attributes
			content.innerHTML = '';
			for (i = 0, len = elem.attributes.length; i < len; ++i) {
				attr = elem.attributes[i];
        //console.log(elem)

				switch (attr.nodeName.toLowerCase()) {
					case 'id':
						attrsMain['id'] = attr.nodeValue;
						break;
					case 'class':
						attrsMain['class'] = attr.nodeValue;
						break;
					case 'style':
						attrsMain['style'] = styleBackup;
						break;
					default:
						attrsOther[attr.nodeName.toLowerCase()] = attr.nodeValue;
				}
			}

			// sort attributes
			for (var key in attrsOther) {
				keys.push(key);
			}
			keys.sort();

			// render the content
			content.appendChild(drawAttrRow('id', attrsMain['id']));
			content.appendChild(drawAttrRow('class', attrsMain['class']));
			content.appendChild(drawAttrRow('style', attrsMain['style']));
			content.appendChild(newElement('hr'));

			for (i = 0, len = keys.length; i < len; ++i) {
				content.appendChild(drawAttrRow(keys[i], attrsOther[keys[i]]));
			}
		}

		// Handles attribute changes
		function changeAttribute(e) {
			var target = e ? e.target : window.event.srcElement,
				attr = target.getAttribute('data-attr'),
				val = target.value,
				elem = getSelected();

			// remove attribute if the new value is empty
			if (val === '') {
				elem.removeAttribute(attr);
			} else {
				elem.setAttribute(attr, val);
        /////////////////////////////////////////////////////
        let html = [];
          var styleProps = $( elem ).css([
            "width", 
            "height", 
            "color", 
            "background-color", 
            "align-content", 
            "align-items",
            "align-self",
            "animation",
            "animation-delay",
            "backface-visibility",
            "background-attachment",
            "background-image",
            "background-position",
            "background-repeat",
            "background-size",
            "border",
            "border-bottom",
            "border-bottom-color",
            "border-bottom-style",
            "border-bottom-width",
            "border-collapse",
            "border-color",
            "border-image",
            "border-left",
            "border-right",
            "border-top",
            "border-bottom",
            "border-left-color",
            "border-left-style",
            "border-left-width",
            "border-top-color",
            "border-top-style",
            "border-top-width",
            "border-bottom-color",
            "border-bottom-style",
            "border-bottom-width",
            "border-radius",
            "border-bottom-left-radius",
            "border-bottom-right-radius",
            "border-bottom-top-radius",
            "border-bottom-bottom-radius",
            "bottom",
            "box-shadow",
            "box-sizing",
            "clear",
            "clip",
            "column-gap",
            "content",
            "cursor",
            "direction",
            "display",
            "flex",
            "flex-grow",
            "flex-shrink",
            "flex-wrap",
            "float",
            "font",
            "font-family",
            "font-size",
            "font-style",
            "font-variant",
            "font-weight",
            "height",
            "justify-content",
            "left",
            "letter-spacing",
            "line-height",
            "list-style",
            "list-style-image",
            "list-style-position",
            "list-style-type",
            "margin",
            "margin-bottom",
            "margin-left",
            "margin-right",
            "margin-top",
            "max-height",
            "max-width",
            "min-height",
            "min-width",
            "opacity",
            "outline",
            "outline-color",
            "outline-offset",
            "outline-style",
            "outline-width",
            "overflow",
            "overflow-x",
            "overflow-y",
            "padding",
            "perspective",
            "perspective-origin",
            "position",
            "right",
            "text-align",
            "text-decoration",
            "text-indent",
            "text-overflow",
            "text-shadow",
            "text-transform",
            "top",
            "transform",
            "transition",
            "vertical-align",
            "visibility",
            "white-space",
            "word-break",
            "word-spacing",
            "word-wrap",
            "z-index"
          ]);
          $.each( styleProps, function( prop, value ) {
            html.push( "<rt><ror>" + prop + ": </ror>" + `<span id="v45_alue" contenteditable oninput='changeInput(this.innerHTML, this.parentNode.innerText)'>${value}</span></rt>` );
          });
          let y = document.createElement("div");
          //var style = GetStyle(target);
          //getComputedStyle(document.querySelector("p"))!!!!!!!!!!!!!!
          document.querySelector("#adi-attr-view > .adi-styles").innerHTML = html.join("<br>");
			}
		}

		// Handles option changes
		function changeOption(e) {
			var target = e ? e.target : window.event.srcElement,
				data = target.getAttribute('data-opt'),
				val = target.checked;

			if (data.indexOf('nodeTypes') !== -1) {
				var type = parseInt(data.match(/\d+/)[0]);

				if (val) {
					options.nodeTypes.push(type);
				} else {
					options.nodeTypes.splice(options.nodeTypes.indexOf(type), 1);
				}
			} else {
				options[data] = val;
			}
		}

		// Key events processing
		function processKey(e) {
			e = e || window.event;
			var code = e.keyCode || e.which;

			switch (code) {
				case 272: // ctrl + alt + d
					toggleVisibilityUI();
					break;
			}
		}

		// Vertical splitter resize handler
		function verticalResize(e) {
			if (!vertResizing) {
				return;
			}

			e = e || window.event;
			document.documentElement.style.cursor = 'e-resize';
			var nWidth = options.width + xPos - e.clientX;

			if (nWidth >= options.minWidth) {
				options.width = nWidth;
				xPos = e.clientX;
				refreshUI();
				saveOptions();
			}

			checkPathOverflow();
		}

		// Horizontal splitter resize handler
		function horizontalResize(e) {
			if (!horizResizing) {
				return;
			}

			e = e || window.event;
			document.documentElement.style.cursor = 'n-resize';
			var nSplit = Math.floor(e.clientY / uiView.clientHeight * 100);

			if (nSplit >= options.minSplit && nSplit <= 100 - options.minSplit) {
				options.split = nSplit;
				refreshUI();
				saveOptions();
			}
		}

		// Dom view folding handler
		function handleFolding(e) {
			var target = e ? e.target : window.event.srcElement,
				ul = target.parentNode.querySelector('ul');

			if (ul.getAttribute('data-open') === "true") {
				removeClass(target, 'opened');
				addClass(target, 'closed');
				ul.setAttribute('data-open', "false");
			} else {
				removeClass(target, 'closed');
				addClass(target, 'opened');
				ul.setAttribute('data-open', "true");
			}
		}

		// Handles active element selection
		function handleActive(e) {
			var target = e ? e.target : window.event.srcElement,
				active = domView.querySelector('.adi-active-node');

			if (active) {
				removeClass(active, 'adi-active-node');
			}

			// clicked on normal-node or end-node?
			if (target.className === 'adi-end-node') {
				target = target.parentNode.querySelector('.adi-normal-node');
			}

			activeElement = target;
			addClass(target, 'adi-active-node');
			pathView.textContent = target.getAttribute('data-css-path');

			// make it visible (scroll)
			if (options.makeVisible) {
				var wrap = domView.querySelector('.adi-content');
				if (target.offsetTop >= wrap.clientHeight || target.offsetTop <= wrap.scrollTop) {
					wrap.scrollTop = target.offsetTop - (Math.floor(wrap.clientHeight / 2));
				}
			}

			checkPathOverflow();
			drawAttrs(getSelected());
		}

		// Checks if pathView is overflowing or not
		function checkPathOverflow() {
			if (pathView.scrollWidth > pathView.clientWidth) {
				addClass(pathView.parentNode, 'adi-overflowing');
			} else {
				removeClass(pathView.parentNode, 'adi-overflowing');
			}
		}

		// Handles scroll behavior for overflowing pathView
		function scrollPathView(e) {
			var target = e ? e.target : window.event.srcElement,
				maxScroll = pathView.scrollWidth - pathView.clientWidth,
				scroll = pathView.scrollLeft,
				change = 5;

				if (target.className === "adi-path-right") {
					pathView.scrollLeft = (scroll <= maxScroll - change) ? scroll + change : maxScroll;
				} else {
					pathView.scrollLeft = (scroll - change >= 0) ? scroll - change : 0;
				}

			if (!pathScrolling) {
				pathScrolling = setInterval(scrollPathView, 20, e);
			}
		}

		// Highlights an element on page
		function highlightElement(e) {
			var target = e ? e.target : window.event.srcElement,
				node = document,
				path;

			if (target.className === 'adi-end-node') {
				target = target.parentNode.querySelector('.adi-normal-node');
			}

			path = JSON.parse(target.getAttribute('data-js-path'));

			// find the element
			for (var i = 0, len = path.length; i < len; ++i) {
				node = node.childNodes[path[i]];
			}
			if (node) {
				if (e.type === 'mouseover') {
					styleBackup = node.getAttribute('style') || '';
					node.setAttribute('style', 'outline: 1px dashed red; background: hsl(123deg 100% 50% / 61%);' + styleBackup);
          ////--------------------OVER ON ELEMENT IN DEVTOOLS--------------------
				} else {
					if (styleBackup === '') {
						node.removeAttribute('style');
					} else {
						node.setAttribute('style', styleBackup);
					}
				}
			}
		}

		// Handles element lookup on page
		function handleLookup(e) {
			var target = e ? e.target : window.event.srcElement;

			if (target.className.indexOf('adi-menu-lookup') !== -1) {
				// enable/disable interactive lookup
				if (elemLookup) {
					removeClass(target, 'adi-active');
					elemLookup = false;
					removeEvent(document.body, 'mouseover', handleLookup, true);
					removeEvent(document.body, 'mouseout', handleLookup, true);
					removeEvent(document.body, 'click', handleLookup, true);
				} else {
					addClass(target, 'adi-active');
					elemLookup = true;
					addEventDelegate(document.body, 'mouseover', handleLookup, false, '*', true, 'adi-wrapper');
					addEventDelegate(document.body, 'mouseout', handleLookup, false, '*', true, 'adi-wrapper');
					addEventDelegate(document.body, 'click', handleLookup, false, '*', true, 'adi-wrapper');
				}
			} else {
//         function getAllStyles(elem) {
//     if (!elem) return []; // Element does not exist, empty list.
//     var win = document.defaultView || window, style, styleNode = [];
//     if (win.getComputedStyle) { /* Modern browsers */
//         style = win.getComputedStyle(elem, '');
//         for (var i=0; i<style.length; i++) {
//             styleNode.push( style[i] + ':' + style.getPropertyValue(style[i]) );
//             //               ^name ^           ^ value ^
//         }
//     } else if (elem.currentStyle) { /* IE */
//         style = elem.currentStyle;
//         for (var name in style) {
//             styleNode.push( name + ':' + style[name] );
//         }
//     } else { /* Ancient browser..*/
//         style = elem.style;
//         for (var i=0; i<style.length; i++) {
//             styleNode.push( style[i] + ':' + style[style[i]] );
//         }
//     }
//     return styleNode;
// }
				// handle lookup events
				if (e.type === 'mouseover') {
          if ((target.className != "ui-widget-content local" && target.id != "dragging" && target.tagName != "DIV") && (target.className != "close-storage" && target.parentNode.id != "dragging" && target.tagName != "IMG" && target.parentNode.tagName != "DIV" && target.src != "https://rscript.teleweb.repl.co/www/acid-dom/js/close.png")) {
					styleBackup = target.getAttribute('style') || '';
					target.setAttribute('style', 'outline: 1px dashed red; background: hsl(123deg 100% 50% / 61%); cursor: pointer;' + styleBackup);
          console.log(target)
          let html = [];
          var styleProps = $( target ).css([
            "width", 
            "height", 
            "color", 
            "background-color", 
            "align-content", 
            "align-items",
            "align-self",
            "animation",
            "animation-delay",
            "backface-visibility",
            "background-attachment",
            "background-image",
            "background-position",
            "background-repeat",
            "background-size",
            "border",
            "border-bottom",
            "border-bottom-color",
            "border-bottom-style",
            "border-bottom-width",
            "border-collapse",
            "border-color",
            "border-image",
            "border-left",
            "border-right",
            "border-top",
            "border-bottom",
            "border-left-color",
            "border-left-style",
            "border-left-width",
            "border-top-color",
            "border-top-style",
            "border-top-width",
            "border-bottom-color",
            "border-bottom-style",
            "border-bottom-width",
            "border-radius",
            "border-bottom-left-radius",
            "border-bottom-right-radius",
            "border-bottom-top-radius",
            "border-bottom-bottom-radius",
            "bottom",
            "box-shadow",
            "box-sizing",
            "clear",
            "clip",
            "column-gap",
            "content",
            "cursor",
            "direction",
            "display",
            "flex",
            "flex-grow",
            "flex-shrink",
            "flex-wrap",
            "float",
            "font",
            "font-family",
            "font-size",
            "font-style",
            "font-variant",
            "font-weight",
            "height",
            "justify-content",
            "left",
            "letter-spacing",
            "line-height",
            "list-style",
            "list-style-image",
            "list-style-position",
            "list-style-type",
            "margin",
            "margin-bottom",
            "margin-left",
            "margin-right",
            "margin-top",
            "max-height",
            "max-width",
            "min-height",
            "min-width",
            "opacity",
            "outline",
            "outline-color",
            "outline-offset",
            "outline-style",
            "outline-width",
            "overflow",
            "overflow-x",
            "overflow-y",
            "padding",
            "perspective",
            "perspective-origin",
            "position",
            "right",
            "text-align",
            "text-decoration",
            "text-indent",
            "text-overflow",
            "text-shadow",
            "text-transform",
            "top",
            "transform",
            "transition",
            "vertical-align",
            "visibility",
            "white-space",
            "word-break",
            "word-spacing",
            "word-wrap",
            "z-index"
          ]);
          $.each( styleProps, function( prop, value ) {
            html.push( "<rt><ror>" + prop + ": </ror>" + `<span id="v45_alue" contenteditable oninput='changeInput(this.innerHTML, this.parentNode.innerText)'>${value}</span></rt>` );
          });
          let y = document.createElement("div");
          //var style = GetStyle(target);
          //getComputedStyle(document.querySelector("p"))!!!!!!!!!!!!!!
          document.querySelector("#adi-attr-view > .adi-styles").innerHTML = html.join("<br>");
          //$(".adi-attr-view .adi-content").text(style)
        }
				} else if (e.type === 'mouseout') {
					target.setAttribute('style', styleBackup);
				} else {
					elemLookup = false;
					removeClass(menuView.querySelector('.adi-menu-lookup'), 'adi-active');
					target.setAttribute('style', styleBackup);
					removeEvent(document.body, 'mouseover', handleLookup, true);
					removeEvent(document.body, 'mouseout', handleLookup, true);
					removeEvent(document.body, 'click', handleLookup, true);
					pauseEvent(e);

					// find corresponding node in the DOM view
					var path = getElemPaths(target),
						active = domView.querySelector('[data-js-path=\'' + JSON.stringify(path.jsPath) + '\']');

					// activate it
					if (active) {
						active.click();
					}

					// open the whole path in DOM view
					var node = active.parentNode,
						tmp;

					if (node.querySelector('ul')) {
						node.querySelector('ul').setAttribute('data-open', 'true');
					}
					while(node !== domView.querySelector('.adi-content')) {
						if (node.className.indexOf('adi-node') !== -1) {
							tmp = node.querySelector('.adi-trigger');
							removeClass(tmp, 'closed');
							addClass(tmp, 'opened');

							node = node.parentNode;	// ul node
							node.setAttribute('data-open', 'true');
						}

						node = node.parentNode;
					}

					// make it visible (scroll)
					if (options.makeVisible) {
						var wrap = domView.querySelector('.adi-content');
						if (active.offsetTop >= wrap.clientHeight || active.offsetTop <= wrap.scrollTop) {
							wrap.scrollTop = active.offsetTop - (Math.floor(wrap.clientHeight / 2));
						}
					}
				}
			}
		}

		// Event registration
		function registerEvents() {
			var vertSplit = document.getElementById('adi-vert-split'),
				horizSplit = document.getElementById('adi-horiz-split');

			// events for splitters
			addEvent(vertSplit,  'mousedown', function(e) {
				e = e || window.event;
				pauseEvent(e);
				vertResizing  = true;
				xPos = e.clientX;
			}, false);

			addEvent(horizSplit, 'mousedown', function(e) {
				e = e || window.event;
				pauseEvent(e);
				horizResizing = true;
			}, false);

			addEvent(document, 'mouseup', function() {
				document.documentElement.style.cursor = 'default';
				vertResizing  = false;
				horizResizing = false;
			}, false);

			addEvent(document, 'mousemove', verticalResize, false);
			addEvent(document, 'mousemove', horizontalResize, false);

			// window resize
			addEvent(window, 'resize', refreshUI, false);

			// keypress events
			addEvent(document, 'keypress', processKey, false);

			// dom tree view folding
			addEventDelegate(domView, 'click', handleFolding, false, '.adi-trigger');

			// active element
			addEventDelegate(domView, 'click', handleActive, false, '.adi-normal-node');
			addEventDelegate(domView, 'click', handleActive, false, '.adi-end-node');

			// path view scrolling
			addEventDelegate(pathView.parentNode, 'mousedown', scrollPathView, false, '.adi-path-left');
			addEventDelegate(pathView.parentNode, 'mousedown', scrollPathView, false, '.adi-path-right');
			addEventDelegate(pathView.parentNode, 'mouseup', function() {
				clearInterval(pathScrolling);
				pathScrolling = false;
			}, false, '.adi-path-left');
			addEventDelegate(pathView.parentNode, 'mouseup', function() {
				clearInterval(pathScrolling);
				pathScrolling = false;
			}, false, '.adi-path-right');

			// matching tag highlighting
			addEventDelegate(domView, 'mouseover', function(e) {
				var target = e ? e.target : window.event.srcElement;
				addClass(target.parentNode.querySelector('.adi-normal-node'), 'hover');
			}, false, '.adi-end-node');
			addEventDelegate(domView, 'mouseout', function(e) {
				var target = e ? e.target : window.event.srcElement;
				removeClass(target.parentNode.querySelector('.adi-normal-node'), 'hover');
			}, false, '.adi-end-node');

			// page element highlighting
			addEventDelegate(domView, 'mouseover', highlightElement, false, '.adi-end-node');
			addEventDelegate(domView, 'mouseover', highlightElement, false, '.adi-normal-node');
			addEventDelegate(domView, 'mouseout', highlightElement, false, '.adi-end-node');
			addEventDelegate(domView, 'mouseout', highlightElement, false, '.adi-normal-node');

			// element lookup
			addEvent(menuView.querySelector('.adi-menu-lookup'), 'click', handleLookup, false);

			// options events
			addEventDelegate(optsView, 'change', changeOption, false, 'input');
			addEventDelegate(optsView, 'click', toggleOptions, false, '.adi-opt-close');
			addEvent(menuView.querySelector('.adi-menu-config'), 'click', toggleOptions, false);

			// attributes events
			addEventDelegate(attrView, 'change', changeAttribute, false, 'input');
      // let ds = document.querySelectorAll("v45_alue");
      // for (let u of ds) {
      //   addEventDelegate(attrView, 'input', changeAttribute, false, u);
      // }
		}

		drawUI();
		registerEvents();
		drawDOM(document, domView.querySelector('.adi-tree-view'), true);

		return {
			// TODO: public methods and variables (this will be visible to the global scope)
			getSelectedElement: getSelected,
			toggle: toggleVisibilityUI
		};
	})();

	// Application entry point
	function appInit() {
		consoleShim();

		// make public API visible to the global scope
		window.ADI = ADI;
	}

	// Launch the app when the DOM is ready and all assets are loaded
	addEvent(window, 'load', appInit, false);
})(this, document);
setTimeout(() => {
  //ADI.toggle();
}, 1000);
//lk = 1;
document.onkeydown = (er) => {
  if (er.key == "F12") {
    er.preventDefault();
    // if (lk % 2 == 0) {
    //   document.querySelector("#dragging").remove();
    // }
    ADI.toggle();
    //lk++;
  } else if ((er.ctrlKey && er.key == "u") || (er.ctrlKey && er.key == "г") || (er.ctrlKey && er.key == "г")) {
    er.preventDefault();
    ADI.toggle();
    //lk++;
  }
}