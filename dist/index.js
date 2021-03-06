'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function createObserver(initialValue) {
    var key = 0;
    var value = initialValue;
    var subscribers = {};
    return [
        function getValue() {
            return value;
        },
        function setValue(newValue) {
            value = newValue;
            for (var k in subscribers) {
                subscribers[k](value);
            }
        },
        function subscribeValue(callback) {
            subscribers[key] = callback;
            return key++;
        },
        function unsubscribeValue(listenerKey) {
            delete subscribers[listenerKey];
        },
    ];
}

function createElement(tagName, builder) {
    var html = document.createElement(tagName);
    builder && builder(html);
    return html;
}
function removeChildren(parent) {
    while (parent.lastChild) {
        parent.removeChild(parent.lastChild);
    }
}

function createAnchor(builder) {
    return createElement("a", builder);
}
function createAbbr(builder) {
    return createElement("abbr", builder);
}
function createAddress(builder) {
    return createElement("address", builder);
}
function createApplet(builder) {
    return createElement("applet", builder);
}
function createArea(builder) {
    return createElement("area", builder);
}
function createArticle(builder) {
    return createElement("article", builder);
}
function createAside(builder) {
    return createElement("aside", builder);
}
function createAudio(builder) {
    return createElement("audio", builder);
}
function createBold(builder) {
    return createElement("b", builder);
}
function createBase(builder) {
    return createElement("base", builder);
}
function createBdi(builder) {
    return createElement("bdi", builder);
}
function createBdo(builder) {
    return createElement("bdo", builder);
}
function createBlockQuote(builder) {
    return createElement("blockquote", builder);
}
function createBody(builder) {
    return createElement("body", builder);
}
function createBr(builder) {
    return createElement("br", builder);
}
function createButton(builder) {
    return createElement("button", builder);
}
function createCanvas(builder) {
    return createElement("canvas", builder);
}
function createCaption(builder) {
    return createElement("caption", builder);
}
function createCite(builder) {
    return createElement("cite", builder);
}
function createCode(builder) {
    return createElement("code", builder);
}
function createCol(builder) {
    return createElement("col", builder);
}
function createColGroup(builder) {
    return createElement("colgroup", builder);
}
function createData(builder) {
    return createElement("data", builder);
}
function createDataList(builder) {
    return createElement("datalist", builder);
}
function createDd(builder) {
    return createElement("dd", builder);
}
function createDel(builder) {
    return createElement("del", builder);
}
function createDetails(builder) {
    return createElement("details", builder);
}
function createDfn(builder) {
    return createElement("dfn", builder);
}
function createDialog(builder) {
    return createElement("dialog", builder);
}
function createDir(builder) {
    return createElement("dir", builder);
}
function createDiv(builder) {
    return createElement("div", builder);
}
function createDl(builder) {
    return createElement("dl", builder);
}
function createDt(builder) {
    return createElement("dt", builder);
}
function createHeader(builder) {
    return createElement("header", builder);
}
function createLink(builder) {
    return createElement("link", builder);
}
function createMain(builder) {
    return createElement("main", builder);
}
function createSection(builder) {
    return createElement("section", builder);
}
function createSpan(builder) {
    return createElement("span", builder);
}

exports.createAbbr = createAbbr;
exports.createAddress = createAddress;
exports.createAnchor = createAnchor;
exports.createApplet = createApplet;
exports.createArea = createArea;
exports.createArticle = createArticle;
exports.createAside = createAside;
exports.createAudio = createAudio;
exports.createBase = createBase;
exports.createBdi = createBdi;
exports.createBdo = createBdo;
exports.createBlockQuote = createBlockQuote;
exports.createBody = createBody;
exports.createBold = createBold;
exports.createBr = createBr;
exports.createButton = createButton;
exports.createCanvas = createCanvas;
exports.createCaption = createCaption;
exports.createCite = createCite;
exports.createCode = createCode;
exports.createCol = createCol;
exports.createColGroup = createColGroup;
exports.createData = createData;
exports.createDataList = createDataList;
exports.createDd = createDd;
exports.createDel = createDel;
exports.createDetails = createDetails;
exports.createDfn = createDfn;
exports.createDialog = createDialog;
exports.createDir = createDir;
exports.createDiv = createDiv;
exports.createDl = createDl;
exports.createDt = createDt;
exports.createElement = createElement;
exports.createHeader = createHeader;
exports.createLink = createLink;
exports.createMain = createMain;
exports.createObserver = createObserver;
exports.createSection = createSection;
exports.createSpan = createSpan;
exports.removeChildren = removeChildren;
