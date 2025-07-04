import { createRequire as VPV_createRequire } from "node:module";
import { fileURLToPath as VPV_fileURLToPath } from "node:url";
import { dirname as VPV_dirname } from "node:path";
const require = VPV_createRequire(import.meta.url);
const __filename = VPV_fileURLToPath(import.meta.url);
const __dirname = VPV_dirname(__filename);

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x2) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x2, {
  get: (a, b2) => (typeof require !== "undefined" ? require : a)[b2]
}) : x2)(function(x2) {
  if (typeof require !== "undefined") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x2 + '" is not supported');
});
var __esm = (fn3, res) => function __init() {
  return fn3 && (res = (0, fn3[__getOwnPropNames(fn3)[0]])(fn3 = 0)), res;
};
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all2) => {
  for (var name2 in all2)
    __defProp(target, name2, { get: all2[name2], enumerable: true });
};
var __copyProps = (to2, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to2, key) && key !== except)
        __defProp(to2, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to2;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/domelementtype/lib/esm/index.js
function isTag(elem) {
  return elem.type === ElementType.Tag || elem.type === ElementType.Script || elem.type === ElementType.Style;
}
var ElementType, Root, Text, Directive, Comment, Script, Style, Tag, CDATA, Doctype;
var init_esm = __esm({
  "node_modules/domelementtype/lib/esm/index.js"() {
    (function(ElementType2) {
      ElementType2["Root"] = "root";
      ElementType2["Text"] = "text";
      ElementType2["Directive"] = "directive";
      ElementType2["Comment"] = "comment";
      ElementType2["Script"] = "script";
      ElementType2["Style"] = "style";
      ElementType2["Tag"] = "tag";
      ElementType2["CDATA"] = "cdata";
      ElementType2["Doctype"] = "doctype";
    })(ElementType || (ElementType = {}));
    Root = ElementType.Root;
    Text = ElementType.Text;
    Directive = ElementType.Directive;
    Comment = ElementType.Comment;
    Script = ElementType.Script;
    Style = ElementType.Style;
    Tag = ElementType.Tag;
    CDATA = ElementType.CDATA;
    Doctype = ElementType.Doctype;
  }
});

// node_modules/domhandler/lib/esm/node.js
function isTag2(node) {
  return isTag(node);
}
function isCDATA(node) {
  return node.type === ElementType.CDATA;
}
function isText(node) {
  return node.type === ElementType.Text;
}
function isComment(node) {
  return node.type === ElementType.Comment;
}
function isDirective(node) {
  return node.type === ElementType.Directive;
}
function isDocument(node) {
  return node.type === ElementType.Root;
}
function cloneNode(node, recursive = false) {
  let result;
  if (isText(node)) {
    result = new Text2(node.data);
  } else if (isComment(node)) {
    result = new Comment2(node.data);
  } else if (isTag2(node)) {
    const children = recursive ? cloneChildren(node.children) : [];
    const clone = new Element(node.name, { ...node.attribs }, children);
    children.forEach((child) => child.parent = clone);
    if (node.namespace != null) {
      clone.namespace = node.namespace;
    }
    if (node["x-attribsNamespace"]) {
      clone["x-attribsNamespace"] = { ...node["x-attribsNamespace"] };
    }
    if (node["x-attribsPrefix"]) {
      clone["x-attribsPrefix"] = { ...node["x-attribsPrefix"] };
    }
    result = clone;
  } else if (isCDATA(node)) {
    const children = recursive ? cloneChildren(node.children) : [];
    const clone = new CDATA2(children);
    children.forEach((child) => child.parent = clone);
    result = clone;
  } else if (isDocument(node)) {
    const children = recursive ? cloneChildren(node.children) : [];
    const clone = new Document(children);
    children.forEach((child) => child.parent = clone);
    if (node["x-mode"]) {
      clone["x-mode"] = node["x-mode"];
    }
    result = clone;
  } else if (isDirective(node)) {
    const instruction = new ProcessingInstruction(node.name, node.data);
    if (node["x-name"] != null) {
      instruction["x-name"] = node["x-name"];
      instruction["x-publicId"] = node["x-publicId"];
      instruction["x-systemId"] = node["x-systemId"];
    }
    result = instruction;
  } else {
    throw new Error(`Not implemented yet: ${node.type}`);
  }
  result.startIndex = node.startIndex;
  result.endIndex = node.endIndex;
  if (node.sourceCodeLocation != null) {
    result.sourceCodeLocation = node.sourceCodeLocation;
  }
  return result;
}
function cloneChildren(childs) {
  const children = childs.map((child) => cloneNode(child, true));
  for (let i = 1; i < children.length; i++) {
    children[i].prev = children[i - 1];
    children[i - 1].next = children[i];
  }
  return children;
}
var Node, DataNode, Text2, Comment2, ProcessingInstruction, NodeWithChildren, CDATA2, Document, Element;
var init_node = __esm({
  "node_modules/domhandler/lib/esm/node.js"() {
    init_esm();
    Node = class {
      constructor() {
        this.parent = null;
        this.prev = null;
        this.next = null;
        this.startIndex = null;
        this.endIndex = null;
      }
      // Read-write aliases for properties
      /**
       * Same as {@link parent}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get parentNode() {
        return this.parent;
      }
      set parentNode(parent) {
        this.parent = parent;
      }
      /**
       * Same as {@link prev}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get previousSibling() {
        return this.prev;
      }
      set previousSibling(prev) {
        this.prev = prev;
      }
      /**
       * Same as {@link next}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get nextSibling() {
        return this.next;
      }
      set nextSibling(next) {
        this.next = next;
      }
      /**
       * Clone this node, and optionally its children.
       *
       * @param recursive Clone child nodes as well.
       * @returns A clone of the node.
       */
      cloneNode(recursive = false) {
        return cloneNode(this, recursive);
      }
    };
    DataNode = class extends Node {
      /**
       * @param data The content of the data node
       */
      constructor(data) {
        super();
        this.data = data;
      }
      /**
       * Same as {@link data}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get nodeValue() {
        return this.data;
      }
      set nodeValue(data) {
        this.data = data;
      }
    };
    Text2 = class extends DataNode {
      constructor() {
        super(...arguments);
        this.type = ElementType.Text;
      }
      get nodeType() {
        return 3;
      }
    };
    Comment2 = class extends DataNode {
      constructor() {
        super(...arguments);
        this.type = ElementType.Comment;
      }
      get nodeType() {
        return 8;
      }
    };
    ProcessingInstruction = class extends DataNode {
      constructor(name2, data) {
        super(data);
        this.name = name2;
        this.type = ElementType.Directive;
      }
      get nodeType() {
        return 1;
      }
    };
    NodeWithChildren = class extends Node {
      /**
       * @param children Children of the node. Only certain node types can have children.
       */
      constructor(children) {
        super();
        this.children = children;
      }
      // Aliases
      /** First child of the node. */
      get firstChild() {
        var _a3;
        return (_a3 = this.children[0]) !== null && _a3 !== void 0 ? _a3 : null;
      }
      /** Last child of the node. */
      get lastChild() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
      }
      /**
       * Same as {@link children}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get childNodes() {
        return this.children;
      }
      set childNodes(children) {
        this.children = children;
      }
    };
    CDATA2 = class extends NodeWithChildren {
      constructor() {
        super(...arguments);
        this.type = ElementType.CDATA;
      }
      get nodeType() {
        return 4;
      }
    };
    Document = class extends NodeWithChildren {
      constructor() {
        super(...arguments);
        this.type = ElementType.Root;
      }
      get nodeType() {
        return 9;
      }
    };
    Element = class extends NodeWithChildren {
      /**
       * @param name Name of the tag, eg. `div`, `span`.
       * @param attribs Object mapping attribute names to attribute values.
       * @param children Children of the node.
       */
      constructor(name2, attribs, children = [], type = name2 === "script" ? ElementType.Script : name2 === "style" ? ElementType.Style : ElementType.Tag) {
        super(children);
        this.name = name2;
        this.attribs = attribs;
        this.type = type;
      }
      get nodeType() {
        return 1;
      }
      // DOM Level 1 aliases
      /**
       * Same as {@link name}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get tagName() {
        return this.name;
      }
      set tagName(name2) {
        this.name = name2;
      }
      get attributes() {
        return Object.keys(this.attribs).map((name2) => {
          var _a3, _b;
          return {
            name: name2,
            value: this.attribs[name2],
            namespace: (_a3 = this["x-attribsNamespace"]) === null || _a3 === void 0 ? void 0 : _a3[name2],
            prefix: (_b = this["x-attribsPrefix"]) === null || _b === void 0 ? void 0 : _b[name2]
          };
        });
      }
    };
  }
});

// node_modules/domhandler/lib/esm/index.js
var defaultOpts, DomHandler;
var init_esm2 = __esm({
  "node_modules/domhandler/lib/esm/index.js"() {
    init_esm();
    init_node();
    init_node();
    defaultOpts = {
      withStartIndices: false,
      withEndIndices: false,
      xmlMode: false
    };
    DomHandler = class {
      /**
       * @param callback Called once parsing has completed.
       * @param options Settings for the handler.
       * @param elementCB Callback whenever a tag is closed.
       */
      constructor(callback, options, elementCB) {
        this.dom = [];
        this.root = new Document(this.dom);
        this.done = false;
        this.tagStack = [this.root];
        this.lastNode = null;
        this.parser = null;
        if (typeof options === "function") {
          elementCB = options;
          options = defaultOpts;
        }
        if (typeof callback === "object") {
          options = callback;
          callback = void 0;
        }
        this.callback = callback !== null && callback !== void 0 ? callback : null;
        this.options = options !== null && options !== void 0 ? options : defaultOpts;
        this.elementCB = elementCB !== null && elementCB !== void 0 ? elementCB : null;
      }
      onparserinit(parser) {
        this.parser = parser;
      }
      // Resets the handler back to starting state
      onreset() {
        this.dom = [];
        this.root = new Document(this.dom);
        this.done = false;
        this.tagStack = [this.root];
        this.lastNode = null;
        this.parser = null;
      }
      // Signals the handler that parsing is done
      onend() {
        if (this.done)
          return;
        this.done = true;
        this.parser = null;
        this.handleCallback(null);
      }
      onerror(error) {
        this.handleCallback(error);
      }
      onclosetag() {
        this.lastNode = null;
        const elem = this.tagStack.pop();
        if (this.options.withEndIndices) {
          elem.endIndex = this.parser.endIndex;
        }
        if (this.elementCB)
          this.elementCB(elem);
      }
      onopentag(name2, attribs) {
        const type = this.options.xmlMode ? ElementType.Tag : void 0;
        const element = new Element(name2, attribs, void 0, type);
        this.addNode(element);
        this.tagStack.push(element);
      }
      ontext(data) {
        const { lastNode } = this;
        if (lastNode && lastNode.type === ElementType.Text) {
          lastNode.data += data;
          if (this.options.withEndIndices) {
            lastNode.endIndex = this.parser.endIndex;
          }
        } else {
          const node = new Text2(data);
          this.addNode(node);
          this.lastNode = node;
        }
      }
      oncomment(data) {
        if (this.lastNode && this.lastNode.type === ElementType.Comment) {
          this.lastNode.data += data;
          return;
        }
        const node = new Comment2(data);
        this.addNode(node);
        this.lastNode = node;
      }
      oncommentend() {
        this.lastNode = null;
      }
      oncdatastart() {
        const text = new Text2("");
        const node = new CDATA2([text]);
        this.addNode(node);
        text.parent = node;
        this.lastNode = text;
      }
      oncdataend() {
        this.lastNode = null;
      }
      onprocessinginstruction(name2, data) {
        const node = new ProcessingInstruction(name2, data);
        this.addNode(node);
      }
      handleCallback(error) {
        if (typeof this.callback === "function") {
          this.callback(error, this.dom);
        } else if (error) {
          throw error;
        }
      }
      addNode(node) {
        const parent = this.tagStack[this.tagStack.length - 1];
        const previousSibling = parent.children[parent.children.length - 1];
        if (this.options.withStartIndices) {
          node.startIndex = this.parser.startIndex;
        }
        if (this.options.withEndIndices) {
          node.endIndex = this.parser.endIndex;
        }
        parent.children.push(node);
        if (previousSibling) {
          node.prev = previousSibling;
          previousSibling.next = node;
        }
        node.parent = parent;
        this.lastNode = null;
      }
    };
  }
});

// node_modules/leac/lib/leac.mjs
function n(n2) {
  const o2 = [...n2.matchAll(e)].map((e2) => e2.index || 0);
  o2.unshift(-1);
  const s2 = t(o2, 0, o2.length);
  return (e2) => r(s2, e2);
}
function t(e2, n2, r2) {
  if (r2 - n2 == 1) return { offset: e2[n2], index: n2 + 1 };
  const o2 = Math.ceil((n2 + r2) / 2), s2 = t(e2, n2, o2), l2 = t(e2, o2, r2);
  return { offset: s2.offset, low: s2, high: l2 };
}
function r(e2, n2) {
  return function(e3) {
    return Object.prototype.hasOwnProperty.call(e3, "index");
  }(e2) ? { line: e2.index, column: n2 - e2.offset } : r(e2.high.offset < n2 ? e2.high : e2.low, n2);
}
function o(e2, t8 = "", r2 = {}) {
  const o2 = "string" != typeof t8 ? t8 : r2, l2 = "string" == typeof t8 ? t8 : "", c2 = e2.map(s), f = !!o2.lineNumbers;
  return function(e3, t9 = 0) {
    const r3 = f ? n(e3) : () => ({ line: 0, column: 0 });
    let o3 = t9;
    const s2 = [];
    e: for (; o3 < e3.length; ) {
      let n2 = false;
      for (const t10 of c2) {
        t10.regex.lastIndex = o3;
        const c3 = t10.regex.exec(e3);
        if (c3 && c3[0].length > 0) {
          if (!t10.discard) {
            const e4 = r3(o3), n3 = "string" == typeof t10.replace ? c3[0].replace(new RegExp(t10.regex.source, t10.regex.flags), t10.replace) : c3[0];
            s2.push({ state: l2, name: t10.name, text: n3, offset: o3, len: c3[0].length, line: e4.line, column: e4.column });
          }
          if (o3 = t10.regex.lastIndex, n2 = true, t10.push) {
            const n3 = t10.push(e3, o3);
            s2.push(...n3.tokens), o3 = n3.offset;
          }
          if (t10.pop) break e;
          break;
        }
      }
      if (!n2) break;
    }
    return { tokens: s2, offset: o3, complete: e3.length <= o3 };
  };
}
function s(e2, n2) {
  return { ...e2, regex: l(e2, n2) };
}
function l(e2, n2) {
  if (0 === e2.name.length) throw new Error(`Rule #${n2} has empty name, which is not allowed.`);
  if (function(e3) {
    return Object.prototype.hasOwnProperty.call(e3, "regex");
  }(e2)) return function(e3) {
    if (e3.global) throw new Error(`Regular expression /${e3.source}/${e3.flags} contains the global flag, which is not allowed.`);
    return e3.sticky ? e3 : new RegExp(e3.source, e3.flags + "y");
  }(e2.regex);
  if (function(e3) {
    return Object.prototype.hasOwnProperty.call(e3, "str");
  }(e2)) {
    if (0 === e2.str.length) throw new Error(`Rule #${n2} ("${e2.name}") has empty "str" property, which is not allowed.`);
    return new RegExp(c(e2.str), "y");
  }
  return new RegExp(c(e2.name), "y");
}
function c(e2) {
  return e2.replace(/[-[\]{}()*+!<=:?./\\^$|#\s,]/g, "\\$&");
}
var e;
var init_leac = __esm({
  "node_modules/leac/lib/leac.mjs"() {
    e = /\n/g;
  }
});

// node_modules/peberminta/lib/core.mjs
function token(onToken, onEnd) {
  return (data, i) => {
    let position = i;
    let value = void 0;
    if (i < data.tokens.length) {
      value = onToken(data.tokens[i], data, i);
      if (value !== void 0) {
        position++;
      }
    } else {
      onEnd?.(data, i);
    }
    return value === void 0 ? { matched: false } : {
      matched: true,
      position,
      value
    };
  };
}
function mapInner(r2, f) {
  return r2.matched ? {
    matched: true,
    position: r2.position,
    value: f(r2.value, r2.position)
  } : r2;
}
function mapOuter(r2, f) {
  return r2.matched ? f(r2) : r2;
}
function map(p, mapper) {
  return (data, i) => mapInner(p(data, i), (v2, j2) => mapper(v2, data, i, j2));
}
function option(p, def) {
  return (data, i) => {
    const r2 = p(data, i);
    return r2.matched ? r2 : {
      matched: true,
      position: i,
      value: def
    };
  };
}
function choice(...ps2) {
  return (data, i) => {
    for (const p of ps2) {
      const result = p(data, i);
      if (result.matched) {
        return result;
      }
    }
    return { matched: false };
  };
}
function otherwise(pa2, pb) {
  return (data, i) => {
    const r1 = pa2(data, i);
    return r1.matched ? r1 : pb(data, i);
  };
}
function takeWhile(p, test) {
  return (data, i) => {
    const values = [];
    let success = true;
    do {
      const r2 = p(data, i);
      if (r2.matched && test(r2.value, values.length + 1, data, i, r2.position)) {
        values.push(r2.value);
        i = r2.position;
      } else {
        success = false;
      }
    } while (success);
    return {
      matched: true,
      position: i,
      value: values
    };
  };
}
function many(p) {
  return takeWhile(p, () => true);
}
function many1(p) {
  return ab(p, many(p), (head, tail) => [head, ...tail]);
}
function ab(pa2, pb, join) {
  return (data, i) => mapOuter(pa2(data, i), (ma2) => mapInner(pb(data, ma2.position), (vb, j2) => join(ma2.value, vb, data, i, j2)));
}
function left(pa2, pb) {
  return ab(pa2, pb, (va2) => va2);
}
function right(pa2, pb) {
  return ab(pa2, pb, (va2, vb) => vb);
}
function abc(pa2, pb, pc, join) {
  return (data, i) => mapOuter(pa2(data, i), (ma2) => mapOuter(pb(data, ma2.position), (mb) => mapInner(pc(data, mb.position), (vc, j2) => join(ma2.value, mb.value, vc, data, i, j2))));
}
function middle(pa2, pb, pc) {
  return abc(pa2, pb, pc, (ra2, rb) => rb);
}
function all(...ps2) {
  return (data, i) => {
    const result = [];
    let position = i;
    for (const p of ps2) {
      const r1 = p(data, position);
      if (r1.matched) {
        result.push(r1.value);
        position = r1.position;
      } else {
        return { matched: false };
      }
    }
    return {
      matched: true,
      position,
      value: result
    };
  };
}
function flatten(...ps2) {
  return flatten1(all(...ps2));
}
function flatten1(p) {
  return map(p, (vs2) => vs2.flatMap((v2) => v2));
}
function chainReduce(acc, f) {
  return (data, i) => {
    let loop = true;
    let acc1 = acc;
    let pos = i;
    do {
      const r2 = f(acc1, data, pos)(data, pos);
      if (r2.matched) {
        acc1 = r2.value;
        pos = r2.position;
      } else {
        loop = false;
      }
    } while (loop);
    return {
      matched: true,
      position: pos,
      value: acc1
    };
  };
}
function reduceLeft(acc, p, reducer) {
  return chainReduce(acc, (acc2) => map(p, (v2, data, i, j2) => reducer(acc2, v2, data, i, j2)));
}
function leftAssoc2(pLeft, pOper, pRight) {
  return chain(pLeft, (v0) => reduceLeft(v0, ab(pOper, pRight, (f, y2) => [f, y2]), (acc, [f, y2]) => f(acc, y2)));
}
function chain(p, f) {
  return (data, i) => mapOuter(p(data, i), (m1) => f(m1.value, data, i, m1.position)(data, m1.position));
}
var init_core = __esm({
  "node_modules/peberminta/lib/core.mjs"() {
  }
});

// node_modules/parseley/lib/parseley.mjs
function sumSpec([a0, a1, a2], [b0, b1, b2]) {
  return [a0 + b0, a1 + b1, a2 + b2];
}
function sumAllSpec(ss2) {
  return ss2.reduce(sumSpec, [0, 0, 0]);
}
function unescape(escapedString) {
  const lexerResult = lexEscapedString(escapedString);
  const result = escapedString_({ tokens: lexerResult.tokens, options: void 0 }, 0);
  return result.value;
}
function literal(name2) {
  return token((t8) => t8.name === name2 ? true : void 0);
}
function optionallySpaced(parser) {
  return middle(optionalWhitespace_, parser, optionalWhitespace_);
}
function parse_(parser, str) {
  if (!(typeof str === "string" || str instanceof String)) {
    throw new Error("Expected a selector string. Actual input is not a string!");
  }
  const lexerResult = lexSelector(str);
  if (!lexerResult.complete) {
    throw new Error(`The input "${str}" was only partially tokenized, stopped at offset ${lexerResult.offset}!
` + prettyPrintPosition(str, lexerResult.offset));
  }
  const result = optionallySpaced(parser)({ tokens: lexerResult.tokens, options: void 0 }, 0);
  if (!result.matched) {
    throw new Error(`No match for "${str}" input!`);
  }
  if (result.position < lexerResult.tokens.length) {
    const token2 = lexerResult.tokens[result.position];
    throw new Error(`The input "${str}" was only partially parsed, stopped at offset ${token2.offset}!
` + prettyPrintPosition(str, token2.offset, token2.len));
  }
  return result.value;
}
function prettyPrintPosition(str, offset, len = 1) {
  return `${str.replace(/(\t)|(\r)|(\n)/g, (m2, t8, r2) => t8 ? "\u2409" : r2 ? "\u240D" : "\u240A")}
${"".padEnd(offset)}${"^".repeat(len)}`;
}
function parse1(str) {
  return parse_(complexSelector_, str);
}
function serialize(selector) {
  if (!selector.type) {
    throw new Error("This is not an AST node.");
  }
  switch (selector.type) {
    case "universal":
      return _serNs(selector.namespace) + "*";
    case "tag":
      return _serNs(selector.namespace) + _serIdent(selector.name);
    case "class":
      return "." + _serIdent(selector.name);
    case "id":
      return "#" + _serIdent(selector.name);
    case "attrPresence":
      return `[${_serNs(selector.namespace)}${_serIdent(selector.name)}]`;
    case "attrValue":
      return `[${_serNs(selector.namespace)}${_serIdent(selector.name)}${selector.matcher}"${_serStr(selector.value)}"${selector.modifier ? selector.modifier : ""}]`;
    case "combinator":
      return serialize(selector.left) + selector.combinator;
    case "compound":
      return selector.list.reduce((acc, node) => {
        if (node.type === "combinator") {
          return serialize(node) + acc;
        } else {
          return acc + serialize(node);
        }
      }, "");
    case "list":
      return selector.list.map(serialize).join(",");
  }
}
function _serNs(ns2) {
  return ns2 || ns2 === "" ? _serIdent(ns2) + "|" : "";
}
function _codePoint(char) {
  return `\\${char.codePointAt(0).toString(16)} `;
}
function _serIdent(str) {
  return str.replace(
    /(^[0-9])|(^-[0-9])|(^-$)|([-0-9a-zA-Z_]|[^\x00-\x7F])|(\x00)|([\x01-\x1f]|\x7f)|([\s\S])/g,
    (m2, d1, d2, hy, safe, nl2, ctrl, other) => d1 ? _codePoint(d1) : d2 ? "-" + _codePoint(d2.slice(1)) : hy ? "\\-" : safe ? safe : nl2 ? "\uFFFD" : ctrl ? _codePoint(ctrl) : "\\" + other
  );
}
function _serStr(str) {
  return str.replace(
    /(")|(\\)|(\x00)|([\x01-\x1f]|\x7f)/g,
    (m2, dq, bs2, nl2, ctrl) => dq ? '\\"' : bs2 ? "\\\\" : nl2 ? "\uFFFD" : _codePoint(ctrl)
  );
}
function normalize(selector) {
  if (!selector.type) {
    throw new Error("This is not an AST node.");
  }
  switch (selector.type) {
    case "compound": {
      selector.list.forEach(normalize);
      selector.list.sort((a, b2) => _compareArrays(_getSelectorPriority(a), _getSelectorPriority(b2)));
      break;
    }
    case "combinator": {
      normalize(selector.left);
      break;
    }
    case "list": {
      selector.list.forEach(normalize);
      selector.list.sort((a, b2) => serialize(a) < serialize(b2) ? -1 : 1);
      break;
    }
  }
  return selector;
}
function _getSelectorPriority(selector) {
  switch (selector.type) {
    case "universal":
      return [1];
    case "tag":
      return [1];
    case "id":
      return [2];
    case "class":
      return [3, selector.name];
    case "attrPresence":
      return [4, serialize(selector)];
    case "attrValue":
      return [5, serialize(selector)];
    case "combinator":
      return [15, serialize(selector)];
  }
}
function compareSpecificity(a, b2) {
  return _compareArrays(a, b2);
}
function _compareArrays(a, b2) {
  if (!Array.isArray(a) || !Array.isArray(b2)) {
    throw new Error("Arguments must be arrays.");
  }
  const shorter = a.length < b2.length ? a.length : b2.length;
  for (let i = 0; i < shorter; i++) {
    if (a[i] === b2[i]) {
      continue;
    }
    return a[i] < b2[i] ? -1 : 1;
  }
  return a.length - b2.length;
}
var ws, nl, nonascii, unicode, escape, nmstart, nmchar, name, ident, string1, string2, lexSelector, lexEscapedString, unicodeEscapedSequence_, escapedSequence_, anyChar_, escapedString_, whitespace_, optionalWhitespace_, identifier_, hashId_, string_, namespace_, qualifiedName_, uniSelector_, tagSelector_, classSelector_, idSelector_, attrModifier_, attrValue_, attrMatcher_, attrPresenceSelector_, attrValueSelector_, attrSelector_, typeSelector_, subclassSelector_, compoundSelector_, combinator_, combinatorSeparator_, complexSelector_, listSelector_;
var init_parseley = __esm({
  "node_modules/parseley/lib/parseley.mjs"() {
    init_leac();
    init_core();
    ws = `(?:[ \\t\\r\\n\\f]*)`;
    nl = `(?:\\n|\\r\\n|\\r|\\f)`;
    nonascii = `[^\\x00-\\x7F]`;
    unicode = `(?:\\\\[0-9a-f]{1,6}(?:\\r\\n|[ \\n\\r\\t\\f])?)`;
    escape = `(?:\\\\[^\\n\\r\\f0-9a-f])`;
    nmstart = `(?:[_a-z]|${nonascii}|${unicode}|${escape})`;
    nmchar = `(?:[_a-z0-9-]|${nonascii}|${unicode}|${escape})`;
    name = `(?:${nmchar}+)`;
    ident = `(?:[-]?${nmstart}${nmchar}*)`;
    string1 = `'([^\\n\\r\\f\\\\']|\\\\${nl}|${nonascii}|${unicode}|${escape})*'`;
    string2 = `"([^\\n\\r\\f\\\\"]|\\\\${nl}|${nonascii}|${unicode}|${escape})*"`;
    lexSelector = o([
      { name: "ws", regex: new RegExp(ws) },
      { name: "hash", regex: new RegExp(`#${name}`, "i") },
      { name: "ident", regex: new RegExp(ident, "i") },
      { name: "str1", regex: new RegExp(string1, "i") },
      { name: "str2", regex: new RegExp(string2, "i") },
      { name: "*" },
      { name: "." },
      { name: "," },
      { name: "[" },
      { name: "]" },
      { name: "=" },
      { name: ">" },
      { name: "|" },
      { name: "+" },
      { name: "~" },
      { name: "^" },
      { name: "$" }
    ]);
    lexEscapedString = o([
      { name: "unicode", regex: new RegExp(unicode, "i") },
      { name: "escape", regex: new RegExp(escape, "i") },
      { name: "any", regex: new RegExp("[\\s\\S]", "i") }
    ]);
    unicodeEscapedSequence_ = token((t8) => t8.name === "unicode" ? String.fromCodePoint(parseInt(t8.text.slice(1), 16)) : void 0);
    escapedSequence_ = token((t8) => t8.name === "escape" ? t8.text.slice(1) : void 0);
    anyChar_ = token((t8) => t8.name === "any" ? t8.text : void 0);
    escapedString_ = map(many(choice(unicodeEscapedSequence_, escapedSequence_, anyChar_)), (cs2) => cs2.join(""));
    whitespace_ = token((t8) => t8.name === "ws" ? null : void 0);
    optionalWhitespace_ = option(whitespace_, null);
    identifier_ = token((t8) => t8.name === "ident" ? unescape(t8.text) : void 0);
    hashId_ = token((t8) => t8.name === "hash" ? unescape(t8.text.slice(1)) : void 0);
    string_ = token((t8) => t8.name.startsWith("str") ? unescape(t8.text.slice(1, -1)) : void 0);
    namespace_ = left(option(identifier_, ""), literal("|"));
    qualifiedName_ = otherwise(ab(namespace_, identifier_, (ns2, name2) => ({ name: name2, namespace: ns2 })), map(identifier_, (name2) => ({ name: name2, namespace: null })));
    uniSelector_ = otherwise(ab(namespace_, literal("*"), (ns2) => ({ type: "universal", namespace: ns2, specificity: [0, 0, 0] })), map(literal("*"), () => ({ type: "universal", namespace: null, specificity: [0, 0, 0] })));
    tagSelector_ = map(qualifiedName_, ({ name: name2, namespace }) => ({
      type: "tag",
      name: name2,
      namespace,
      specificity: [0, 0, 1]
    }));
    classSelector_ = ab(literal("."), identifier_, (fullstop, name2) => ({
      type: "class",
      name: name2,
      specificity: [0, 1, 0]
    }));
    idSelector_ = map(hashId_, (name2) => ({
      type: "id",
      name: name2,
      specificity: [1, 0, 0]
    }));
    attrModifier_ = token((t8) => {
      if (t8.name === "ident") {
        if (t8.text === "i" || t8.text === "I") {
          return "i";
        }
        if (t8.text === "s" || t8.text === "S") {
          return "s";
        }
      }
      return void 0;
    });
    attrValue_ = otherwise(ab(string_, option(right(optionalWhitespace_, attrModifier_), null), (v2, mod) => ({ value: v2, modifier: mod })), ab(identifier_, option(right(whitespace_, attrModifier_), null), (v2, mod) => ({ value: v2, modifier: mod })));
    attrMatcher_ = choice(map(literal("="), () => "="), ab(literal("~"), literal("="), () => "~="), ab(literal("|"), literal("="), () => "|="), ab(literal("^"), literal("="), () => "^="), ab(literal("$"), literal("="), () => "$="), ab(literal("*"), literal("="), () => "*="));
    attrPresenceSelector_ = abc(literal("["), optionallySpaced(qualifiedName_), literal("]"), (lbr, { name: name2, namespace }) => ({
      type: "attrPresence",
      name: name2,
      namespace,
      specificity: [0, 1, 0]
    }));
    attrValueSelector_ = middle(literal("["), abc(optionallySpaced(qualifiedName_), attrMatcher_, optionallySpaced(attrValue_), ({ name: name2, namespace }, matcher, { value, modifier }) => ({
      type: "attrValue",
      name: name2,
      namespace,
      matcher,
      value,
      modifier,
      specificity: [0, 1, 0]
    })), literal("]"));
    attrSelector_ = otherwise(attrPresenceSelector_, attrValueSelector_);
    typeSelector_ = otherwise(uniSelector_, tagSelector_);
    subclassSelector_ = choice(idSelector_, classSelector_, attrSelector_);
    compoundSelector_ = map(otherwise(flatten(typeSelector_, many(subclassSelector_)), many1(subclassSelector_)), (ss2) => {
      return {
        type: "compound",
        list: ss2,
        specificity: sumAllSpec(ss2.map((s2) => s2.specificity))
      };
    });
    combinator_ = choice(map(literal(">"), () => ">"), map(literal("+"), () => "+"), map(literal("~"), () => "~"), ab(literal("|"), literal("|"), () => "||"));
    combinatorSeparator_ = otherwise(optionallySpaced(combinator_), map(whitespace_, () => " "));
    complexSelector_ = leftAssoc2(compoundSelector_, map(combinatorSeparator_, (c2) => (left2, right2) => ({
      type: "compound",
      list: [...right2.list, { type: "combinator", combinator: c2, left: left2, specificity: left2.specificity }],
      specificity: sumSpec(left2.specificity, right2.specificity)
    })), compoundSelector_);
    listSelector_ = leftAssoc2(map(complexSelector_, (s2) => ({ type: "list", list: [s2] })), map(optionallySpaced(literal(",")), () => (acc, next) => ({ type: "list", list: [...acc.list, next] })), complexSelector_);
  }
});

// node_modules/selderee/lib/selderee.mjs
function toAstTerminalPairs(array) {
  const len = array.length;
  const results = new Array(len);
  for (let i = 0; i < len; i++) {
    const [selectorString, val] = array[i];
    const ast = preprocess(parse1(selectorString));
    results[i] = {
      ast,
      terminal: {
        type: "terminal",
        valueContainer: { index: i, value: val, specificity: ast.specificity }
      }
    };
  }
  return results;
}
function preprocess(ast) {
  reduceSelectorVariants(ast);
  normalize(ast);
  return ast;
}
function reduceSelectorVariants(ast) {
  const newList = [];
  ast.list.forEach((sel) => {
    switch (sel.type) {
      case "class":
        newList.push({
          matcher: "~=",
          modifier: null,
          name: "class",
          namespace: null,
          specificity: sel.specificity,
          type: "attrValue",
          value: sel.name
        });
        break;
      case "id":
        newList.push({
          matcher: "=",
          modifier: null,
          name: "id",
          namespace: null,
          specificity: sel.specificity,
          type: "attrValue",
          value: sel.name
        });
        break;
      case "combinator":
        reduceSelectorVariants(sel.left);
        newList.push(sel);
        break;
      case "universal":
        break;
      default:
        newList.push(sel);
        break;
    }
  });
  ast.list = newList;
}
function weave(items) {
  const branches = [];
  while (items.length) {
    const topKind = findTopKey(items, (sel) => true, getSelectorKind);
    const { matches, nonmatches, empty } = breakByKind(items, topKind);
    items = nonmatches;
    if (matches.length) {
      branches.push(branchOfKind(topKind, matches));
    }
    if (empty.length) {
      branches.push(...terminate(empty));
    }
  }
  return branches;
}
function terminate(items) {
  const results = [];
  for (const item of items) {
    const terminal = item.terminal;
    if (terminal.type === "terminal") {
      results.push(terminal);
    } else {
      const { matches, rest } = partition(terminal.cont, (node) => node.type === "terminal");
      matches.forEach((node) => results.push(node));
      if (rest.length) {
        terminal.cont = rest;
        results.push(terminal);
      }
    }
  }
  return results;
}
function breakByKind(items, selectedKind) {
  const matches = [];
  const nonmatches = [];
  const empty = [];
  for (const item of items) {
    const simpsels = item.ast.list;
    if (simpsels.length) {
      const isMatch = simpsels.some((node) => getSelectorKind(node) === selectedKind);
      (isMatch ? matches : nonmatches).push(item);
    } else {
      empty.push(item);
    }
  }
  return { matches, nonmatches, empty };
}
function getSelectorKind(sel) {
  switch (sel.type) {
    case "attrPresence":
      return `attrPresence ${sel.name}`;
    case "attrValue":
      return `attrValue ${sel.name}`;
    case "combinator":
      return `combinator ${sel.combinator}`;
    default:
      return sel.type;
  }
}
function branchOfKind(kind, items) {
  if (kind === "tag") {
    return tagNameBranch(items);
  }
  if (kind.startsWith("attrValue ")) {
    return attrValueBranch(kind.substring(10), items);
  }
  if (kind.startsWith("attrPresence ")) {
    return attrPresenceBranch(kind.substring(13), items);
  }
  if (kind === "combinator >") {
    return combinatorBranch(">", items);
  }
  if (kind === "combinator +") {
    return combinatorBranch("+", items);
  }
  throw new Error(`Unsupported selector kind: ${kind}`);
}
function tagNameBranch(items) {
  const groups = spliceAndGroup(items, (x2) => x2.type === "tag", (x2) => x2.name);
  const variants = Object.entries(groups).map(([name2, group]) => ({
    type: "variant",
    value: name2,
    cont: weave(group.items)
  }));
  return {
    type: "tagName",
    variants
  };
}
function attrPresenceBranch(name2, items) {
  for (const item of items) {
    spliceSimpleSelector(item, (x2) => x2.type === "attrPresence" && x2.name === name2);
  }
  return {
    type: "attrPresence",
    name: name2,
    cont: weave(items)
  };
}
function attrValueBranch(name2, items) {
  const groups = spliceAndGroup(items, (x2) => x2.type === "attrValue" && x2.name === name2, (x2) => `${x2.matcher} ${x2.modifier || ""} ${x2.value}`);
  const matchers = [];
  for (const group of Object.values(groups)) {
    const sel = group.oneSimpleSelector;
    const predicate = getAttrPredicate(sel);
    const continuation = weave(group.items);
    matchers.push({
      type: "matcher",
      matcher: sel.matcher,
      modifier: sel.modifier,
      value: sel.value,
      predicate,
      cont: continuation
    });
  }
  return {
    type: "attrValue",
    name: name2,
    matchers
  };
}
function getAttrPredicate(sel) {
  if (sel.modifier === "i") {
    const expected = sel.value.toLowerCase();
    switch (sel.matcher) {
      case "=":
        return (actual) => expected === actual.toLowerCase();
      case "~=":
        return (actual) => actual.toLowerCase().split(/[ \t]+/).includes(expected);
      case "^=":
        return (actual) => actual.toLowerCase().startsWith(expected);
      case "$=":
        return (actual) => actual.toLowerCase().endsWith(expected);
      case "*=":
        return (actual) => actual.toLowerCase().includes(expected);
      case "|=":
        return (actual) => {
          const lower = actual.toLowerCase();
          return expected === lower || lower.startsWith(expected) && lower[expected.length] === "-";
        };
    }
  } else {
    const expected = sel.value;
    switch (sel.matcher) {
      case "=":
        return (actual) => expected === actual;
      case "~=":
        return (actual) => actual.split(/[ \t]+/).includes(expected);
      case "^=":
        return (actual) => actual.startsWith(expected);
      case "$=":
        return (actual) => actual.endsWith(expected);
      case "*=":
        return (actual) => actual.includes(expected);
      case "|=":
        return (actual) => expected === actual || actual.startsWith(expected) && actual[expected.length] === "-";
    }
  }
}
function combinatorBranch(combinator, items) {
  const groups = spliceAndGroup(items, (x2) => x2.type === "combinator" && x2.combinator === combinator, (x2) => serialize(x2.left));
  const leftItems = [];
  for (const group of Object.values(groups)) {
    const rightCont = weave(group.items);
    const leftAst = group.oneSimpleSelector.left;
    leftItems.push({
      ast: leftAst,
      terminal: { type: "popElement", cont: rightCont }
    });
  }
  return {
    type: "pushElement",
    combinator,
    cont: weave(leftItems)
  };
}
function spliceAndGroup(items, predicate, keyCallback) {
  const groups = {};
  while (items.length) {
    const bestKey = findTopKey(items, predicate, keyCallback);
    const bestKeyPredicate = (sel) => predicate(sel) && keyCallback(sel) === bestKey;
    const hasBestKeyPredicate = (item) => item.ast.list.some(bestKeyPredicate);
    const { matches, rest } = partition1(items, hasBestKeyPredicate);
    let oneSimpleSelector = null;
    for (const item of matches) {
      const splicedNode = spliceSimpleSelector(item, bestKeyPredicate);
      if (!oneSimpleSelector) {
        oneSimpleSelector = splicedNode;
      }
    }
    if (oneSimpleSelector == null) {
      throw new Error("No simple selector is found.");
    }
    groups[bestKey] = { oneSimpleSelector, items: matches };
    items = rest;
  }
  return groups;
}
function spliceSimpleSelector(item, predicate) {
  const simpsels = item.ast.list;
  const matches = new Array(simpsels.length);
  let firstIndex = -1;
  for (let i = simpsels.length; i-- > 0; ) {
    if (predicate(simpsels[i])) {
      matches[i] = true;
      firstIndex = i;
    }
  }
  if (firstIndex == -1) {
    throw new Error(`Couldn't find the required simple selector.`);
  }
  const result = simpsels[firstIndex];
  item.ast.list = simpsels.filter((sel, i) => !matches[i]);
  return result;
}
function findTopKey(items, predicate, keyCallback) {
  const candidates = {};
  for (const item of items) {
    const candidates1 = {};
    for (const node of item.ast.list.filter(predicate)) {
      candidates1[keyCallback(node)] = true;
    }
    for (const key of Object.keys(candidates1)) {
      if (candidates[key]) {
        candidates[key]++;
      } else {
        candidates[key] = 1;
      }
    }
  }
  let topKind = "";
  let topCounter = 0;
  for (const entry of Object.entries(candidates)) {
    if (entry[1] > topCounter) {
      topKind = entry[0];
      topCounter = entry[1];
    }
  }
  return topKind;
}
function partition(src, predicate) {
  const matches = [];
  const rest = [];
  for (const x2 of src) {
    if (predicate(x2)) {
      matches.push(x2);
    } else {
      rest.push(x2);
    }
  }
  return { matches, rest };
}
function partition1(src, predicate) {
  const matches = [];
  const rest = [];
  for (const x2 of src) {
    if (predicate(x2)) {
      matches.push(x2);
    } else {
      rest.push(x2);
    }
  }
  return { matches, rest };
}
function comparatorPreferFirst(acc, next) {
  const diff = compareSpecificity(next.specificity, acc.specificity);
  return diff > 0 || diff === 0 && next.index < acc.index;
}
function comparatorPreferLast(acc, next) {
  const diff = compareSpecificity(next.specificity, acc.specificity);
  return diff > 0 || diff === 0 && next.index > acc.index;
}
var DecisionTree, Picker;
var init_selderee = __esm({
  "node_modules/selderee/lib/selderee.mjs"() {
    init_parseley();
    init_parseley();
    DecisionTree = class {
      constructor(input) {
        this.branches = weave(toAstTerminalPairs(input));
      }
      build(builder) {
        return builder(this.branches);
      }
    };
    Picker = class {
      constructor(f) {
        this.f = f;
      }
      pickAll(el) {
        return this.f(el);
      }
      pick1(el, preferFirst = false) {
        const results = this.f(el);
        const len = results.length;
        if (len === 0) {
          return null;
        }
        if (len === 1) {
          return results[0].value;
        }
        const comparator = preferFirst ? comparatorPreferFirst : comparatorPreferLast;
        let result = results[0];
        for (let i = 1; i < len; i++) {
          const next = results[i];
          if (comparator(result, next)) {
            result = next;
          }
        }
        return result.value;
      }
    };
  }
});

// node_modules/@selderee/plugin-htmlparser2/lib/hp2-builder.mjs
function hp2Builder(nodes) {
  return new Picker(handleArray(nodes));
}
function handleArray(nodes) {
  const matchers = nodes.map(handleNode);
  return (el, ...tail) => matchers.flatMap((m2) => m2(el, ...tail));
}
function handleNode(node) {
  switch (node.type) {
    case "terminal": {
      const result = [node.valueContainer];
      return (el, ...tail) => result;
    }
    case "tagName":
      return handleTagName(node);
    case "attrValue":
      return handleAttrValueName(node);
    case "attrPresence":
      return handleAttrPresenceName(node);
    case "pushElement":
      return handlePushElementNode(node);
    case "popElement":
      return handlePopElementNode(node);
  }
}
function handleTagName(node) {
  const variants = {};
  for (const variant of node.variants) {
    variants[variant.value] = handleArray(variant.cont);
  }
  return (el, ...tail) => {
    const continuation = variants[el.name];
    return continuation ? continuation(el, ...tail) : [];
  };
}
function handleAttrPresenceName(node) {
  const attrName = node.name;
  const continuation = handleArray(node.cont);
  return (el, ...tail) => Object.prototype.hasOwnProperty.call(el.attribs, attrName) ? continuation(el, ...tail) : [];
}
function handleAttrValueName(node) {
  const callbacks = [];
  for (const matcher of node.matchers) {
    const predicate = matcher.predicate;
    const continuation = handleArray(matcher.cont);
    callbacks.push((attr, el, ...tail) => predicate(attr) ? continuation(el, ...tail) : []);
  }
  const attrName = node.name;
  return (el, ...tail) => {
    const attr = el.attribs[attrName];
    return attr || attr === "" ? callbacks.flatMap((cb) => cb(attr, el, ...tail)) : [];
  };
}
function handlePushElementNode(node) {
  const continuation = handleArray(node.cont);
  const leftElementGetter = node.combinator === "+" ? getPrecedingElement : getParentElement;
  return (el, ...tail) => {
    const next = leftElementGetter(el);
    if (next === null) {
      return [];
    }
    return continuation(next, el, ...tail);
  };
}
function handlePopElementNode(node) {
  const continuation = handleArray(node.cont);
  return (el, next, ...tail) => continuation(next, ...tail);
}
var getPrecedingElement, getParentElement;
var init_hp2_builder = __esm({
  "node_modules/@selderee/plugin-htmlparser2/lib/hp2-builder.mjs"() {
    init_esm2();
    init_selderee();
    getPrecedingElement = (el) => {
      const prev = el.prev;
      if (prev === null) {
        return null;
      }
      return isTag2(prev) ? prev : getPrecedingElement(prev);
    };
    getParentElement = (el) => {
      const parent = el.parent;
      return parent && isTag2(parent) ? parent : null;
    };
  }
});

// node_modules/entities/lib/esm/generated/decode-data-html.js
var decode_data_html_default;
var init_decode_data_html = __esm({
  "node_modules/entities/lib/esm/generated/decode-data-html.js"() {
    decode_data_html_default = new Uint16Array(
      // prettier-ignore
      '\u1D41<\xD5\u0131\u028A\u049D\u057B\u05D0\u0675\u06DE\u07A2\u07D6\u080F\u0A4A\u0A91\u0DA1\u0E6D\u0F09\u0F26\u10CA\u1228\u12E1\u1415\u149D\u14C3\u14DF\u1525\0\0\0\0\0\0\u156B\u16CD\u198D\u1C12\u1DDD\u1F7E\u2060\u21B0\u228D\u23C0\u23FB\u2442\u2824\u2912\u2D08\u2E48\u2FCE\u3016\u32BA\u3639\u37AC\u38FE\u3A28\u3A71\u3AE0\u3B2E\u0800EMabcfglmnoprstu\\bfms\x7F\x84\x8B\x90\x95\x98\xA6\xB3\xB9\xC8\xCFlig\u803B\xC6\u40C6P\u803B&\u4026cute\u803B\xC1\u40C1reve;\u4102\u0100iyx}rc\u803B\xC2\u40C2;\u4410r;\uC000\u{1D504}rave\u803B\xC0\u40C0pha;\u4391acr;\u4100d;\u6A53\u0100gp\x9D\xA1on;\u4104f;\uC000\u{1D538}plyFunction;\u6061ing\u803B\xC5\u40C5\u0100cs\xBE\xC3r;\uC000\u{1D49C}ign;\u6254ilde\u803B\xC3\u40C3ml\u803B\xC4\u40C4\u0400aceforsu\xE5\xFB\xFE\u0117\u011C\u0122\u0127\u012A\u0100cr\xEA\xF2kslash;\u6216\u0176\xF6\xF8;\u6AE7ed;\u6306y;\u4411\u0180crt\u0105\u010B\u0114ause;\u6235noullis;\u612Ca;\u4392r;\uC000\u{1D505}pf;\uC000\u{1D539}eve;\u42D8c\xF2\u0113mpeq;\u624E\u0700HOacdefhilorsu\u014D\u0151\u0156\u0180\u019E\u01A2\u01B5\u01B7\u01BA\u01DC\u0215\u0273\u0278\u027Ecy;\u4427PY\u803B\xA9\u40A9\u0180cpy\u015D\u0162\u017Aute;\u4106\u0100;i\u0167\u0168\u62D2talDifferentialD;\u6145leys;\u612D\u0200aeio\u0189\u018E\u0194\u0198ron;\u410Cdil\u803B\xC7\u40C7rc;\u4108nint;\u6230ot;\u410A\u0100dn\u01A7\u01ADilla;\u40B8terDot;\u40B7\xF2\u017Fi;\u43A7rcle\u0200DMPT\u01C7\u01CB\u01D1\u01D6ot;\u6299inus;\u6296lus;\u6295imes;\u6297o\u0100cs\u01E2\u01F8kwiseContourIntegral;\u6232eCurly\u0100DQ\u0203\u020FoubleQuote;\u601Duote;\u6019\u0200lnpu\u021E\u0228\u0247\u0255on\u0100;e\u0225\u0226\u6237;\u6A74\u0180git\u022F\u0236\u023Aruent;\u6261nt;\u622FourIntegral;\u622E\u0100fr\u024C\u024E;\u6102oduct;\u6210nterClockwiseContourIntegral;\u6233oss;\u6A2Fcr;\uC000\u{1D49E}p\u0100;C\u0284\u0285\u62D3ap;\u624D\u0580DJSZacefios\u02A0\u02AC\u02B0\u02B4\u02B8\u02CB\u02D7\u02E1\u02E6\u0333\u048D\u0100;o\u0179\u02A5trahd;\u6911cy;\u4402cy;\u4405cy;\u440F\u0180grs\u02BF\u02C4\u02C7ger;\u6021r;\u61A1hv;\u6AE4\u0100ay\u02D0\u02D5ron;\u410E;\u4414l\u0100;t\u02DD\u02DE\u6207a;\u4394r;\uC000\u{1D507}\u0100af\u02EB\u0327\u0100cm\u02F0\u0322ritical\u0200ADGT\u0300\u0306\u0316\u031Ccute;\u40B4o\u0174\u030B\u030D;\u42D9bleAcute;\u42DDrave;\u4060ilde;\u42DCond;\u62C4ferentialD;\u6146\u0470\u033D\0\0\0\u0342\u0354\0\u0405f;\uC000\u{1D53B}\u0180;DE\u0348\u0349\u034D\u40A8ot;\u60DCqual;\u6250ble\u0300CDLRUV\u0363\u0372\u0382\u03CF\u03E2\u03F8ontourIntegra\xEC\u0239o\u0274\u0379\0\0\u037B\xBB\u0349nArrow;\u61D3\u0100eo\u0387\u03A4ft\u0180ART\u0390\u0396\u03A1rrow;\u61D0ightArrow;\u61D4e\xE5\u02CAng\u0100LR\u03AB\u03C4eft\u0100AR\u03B3\u03B9rrow;\u67F8ightArrow;\u67FAightArrow;\u67F9ight\u0100AT\u03D8\u03DErrow;\u61D2ee;\u62A8p\u0241\u03E9\0\0\u03EFrrow;\u61D1ownArrow;\u61D5erticalBar;\u6225n\u0300ABLRTa\u0412\u042A\u0430\u045E\u047F\u037Crrow\u0180;BU\u041D\u041E\u0422\u6193ar;\u6913pArrow;\u61F5reve;\u4311eft\u02D2\u043A\0\u0446\0\u0450ightVector;\u6950eeVector;\u695Eector\u0100;B\u0459\u045A\u61BDar;\u6956ight\u01D4\u0467\0\u0471eeVector;\u695Fector\u0100;B\u047A\u047B\u61C1ar;\u6957ee\u0100;A\u0486\u0487\u62A4rrow;\u61A7\u0100ct\u0492\u0497r;\uC000\u{1D49F}rok;\u4110\u0800NTacdfglmopqstux\u04BD\u04C0\u04C4\u04CB\u04DE\u04E2\u04E7\u04EE\u04F5\u0521\u052F\u0536\u0552\u055D\u0560\u0565G;\u414AH\u803B\xD0\u40D0cute\u803B\xC9\u40C9\u0180aiy\u04D2\u04D7\u04DCron;\u411Arc\u803B\xCA\u40CA;\u442Dot;\u4116r;\uC000\u{1D508}rave\u803B\xC8\u40C8ement;\u6208\u0100ap\u04FA\u04FEcr;\u4112ty\u0253\u0506\0\0\u0512mallSquare;\u65FBerySmallSquare;\u65AB\u0100gp\u0526\u052Aon;\u4118f;\uC000\u{1D53C}silon;\u4395u\u0100ai\u053C\u0549l\u0100;T\u0542\u0543\u6A75ilde;\u6242librium;\u61CC\u0100ci\u0557\u055Ar;\u6130m;\u6A73a;\u4397ml\u803B\xCB\u40CB\u0100ip\u056A\u056Fsts;\u6203onentialE;\u6147\u0280cfios\u0585\u0588\u058D\u05B2\u05CCy;\u4424r;\uC000\u{1D509}lled\u0253\u0597\0\0\u05A3mallSquare;\u65FCerySmallSquare;\u65AA\u0370\u05BA\0\u05BF\0\0\u05C4f;\uC000\u{1D53D}All;\u6200riertrf;\u6131c\xF2\u05CB\u0600JTabcdfgorst\u05E8\u05EC\u05EF\u05FA\u0600\u0612\u0616\u061B\u061D\u0623\u066C\u0672cy;\u4403\u803B>\u403Emma\u0100;d\u05F7\u05F8\u4393;\u43DCreve;\u411E\u0180eiy\u0607\u060C\u0610dil;\u4122rc;\u411C;\u4413ot;\u4120r;\uC000\u{1D50A};\u62D9pf;\uC000\u{1D53E}eater\u0300EFGLST\u0635\u0644\u064E\u0656\u065B\u0666qual\u0100;L\u063E\u063F\u6265ess;\u62DBullEqual;\u6267reater;\u6AA2ess;\u6277lantEqual;\u6A7Eilde;\u6273cr;\uC000\u{1D4A2};\u626B\u0400Aacfiosu\u0685\u068B\u0696\u069B\u069E\u06AA\u06BE\u06CARDcy;\u442A\u0100ct\u0690\u0694ek;\u42C7;\u405Eirc;\u4124r;\u610ClbertSpace;\u610B\u01F0\u06AF\0\u06B2f;\u610DizontalLine;\u6500\u0100ct\u06C3\u06C5\xF2\u06A9rok;\u4126mp\u0144\u06D0\u06D8ownHum\xF0\u012Fqual;\u624F\u0700EJOacdfgmnostu\u06FA\u06FE\u0703\u0707\u070E\u071A\u071E\u0721\u0728\u0744\u0778\u078B\u078F\u0795cy;\u4415lig;\u4132cy;\u4401cute\u803B\xCD\u40CD\u0100iy\u0713\u0718rc\u803B\xCE\u40CE;\u4418ot;\u4130r;\u6111rave\u803B\xCC\u40CC\u0180;ap\u0720\u072F\u073F\u0100cg\u0734\u0737r;\u412AinaryI;\u6148lie\xF3\u03DD\u01F4\u0749\0\u0762\u0100;e\u074D\u074E\u622C\u0100gr\u0753\u0758ral;\u622Bsection;\u62C2isible\u0100CT\u076C\u0772omma;\u6063imes;\u6062\u0180gpt\u077F\u0783\u0788on;\u412Ef;\uC000\u{1D540}a;\u4399cr;\u6110ilde;\u4128\u01EB\u079A\0\u079Ecy;\u4406l\u803B\xCF\u40CF\u0280cfosu\u07AC\u07B7\u07BC\u07C2\u07D0\u0100iy\u07B1\u07B5rc;\u4134;\u4419r;\uC000\u{1D50D}pf;\uC000\u{1D541}\u01E3\u07C7\0\u07CCr;\uC000\u{1D4A5}rcy;\u4408kcy;\u4404\u0380HJacfos\u07E4\u07E8\u07EC\u07F1\u07FD\u0802\u0808cy;\u4425cy;\u440Cppa;\u439A\u0100ey\u07F6\u07FBdil;\u4136;\u441Ar;\uC000\u{1D50E}pf;\uC000\u{1D542}cr;\uC000\u{1D4A6}\u0580JTaceflmost\u0825\u0829\u082C\u0850\u0863\u09B3\u09B8\u09C7\u09CD\u0A37\u0A47cy;\u4409\u803B<\u403C\u0280cmnpr\u0837\u083C\u0841\u0844\u084Dute;\u4139bda;\u439Bg;\u67EAlacetrf;\u6112r;\u619E\u0180aey\u0857\u085C\u0861ron;\u413Ddil;\u413B;\u441B\u0100fs\u0868\u0970t\u0500ACDFRTUVar\u087E\u08A9\u08B1\u08E0\u08E6\u08FC\u092F\u095B\u0390\u096A\u0100nr\u0883\u088FgleBracket;\u67E8row\u0180;BR\u0899\u089A\u089E\u6190ar;\u61E4ightArrow;\u61C6eiling;\u6308o\u01F5\u08B7\0\u08C3bleBracket;\u67E6n\u01D4\u08C8\0\u08D2eeVector;\u6961ector\u0100;B\u08DB\u08DC\u61C3ar;\u6959loor;\u630Aight\u0100AV\u08EF\u08F5rrow;\u6194ector;\u694E\u0100er\u0901\u0917e\u0180;AV\u0909\u090A\u0910\u62A3rrow;\u61A4ector;\u695Aiangle\u0180;BE\u0924\u0925\u0929\u62B2ar;\u69CFqual;\u62B4p\u0180DTV\u0937\u0942\u094CownVector;\u6951eeVector;\u6960ector\u0100;B\u0956\u0957\u61BFar;\u6958ector\u0100;B\u0965\u0966\u61BCar;\u6952ight\xE1\u039Cs\u0300EFGLST\u097E\u098B\u0995\u099D\u09A2\u09ADqualGreater;\u62DAullEqual;\u6266reater;\u6276ess;\u6AA1lantEqual;\u6A7Dilde;\u6272r;\uC000\u{1D50F}\u0100;e\u09BD\u09BE\u62D8ftarrow;\u61DAidot;\u413F\u0180npw\u09D4\u0A16\u0A1Bg\u0200LRlr\u09DE\u09F7\u0A02\u0A10eft\u0100AR\u09E6\u09ECrrow;\u67F5ightArrow;\u67F7ightArrow;\u67F6eft\u0100ar\u03B3\u0A0Aight\xE1\u03BFight\xE1\u03CAf;\uC000\u{1D543}er\u0100LR\u0A22\u0A2CeftArrow;\u6199ightArrow;\u6198\u0180cht\u0A3E\u0A40\u0A42\xF2\u084C;\u61B0rok;\u4141;\u626A\u0400acefiosu\u0A5A\u0A5D\u0A60\u0A77\u0A7C\u0A85\u0A8B\u0A8Ep;\u6905y;\u441C\u0100dl\u0A65\u0A6FiumSpace;\u605Flintrf;\u6133r;\uC000\u{1D510}nusPlus;\u6213pf;\uC000\u{1D544}c\xF2\u0A76;\u439C\u0480Jacefostu\u0AA3\u0AA7\u0AAD\u0AC0\u0B14\u0B19\u0D91\u0D97\u0D9Ecy;\u440Acute;\u4143\u0180aey\u0AB4\u0AB9\u0ABEron;\u4147dil;\u4145;\u441D\u0180gsw\u0AC7\u0AF0\u0B0Eative\u0180MTV\u0AD3\u0ADF\u0AE8ediumSpace;\u600Bhi\u0100cn\u0AE6\u0AD8\xEB\u0AD9eryThi\xEE\u0AD9ted\u0100GL\u0AF8\u0B06reaterGreate\xF2\u0673essLes\xF3\u0A48Line;\u400Ar;\uC000\u{1D511}\u0200Bnpt\u0B22\u0B28\u0B37\u0B3Areak;\u6060BreakingSpace;\u40A0f;\u6115\u0680;CDEGHLNPRSTV\u0B55\u0B56\u0B6A\u0B7C\u0BA1\u0BEB\u0C04\u0C5E\u0C84\u0CA6\u0CD8\u0D61\u0D85\u6AEC\u0100ou\u0B5B\u0B64ngruent;\u6262pCap;\u626DoubleVerticalBar;\u6226\u0180lqx\u0B83\u0B8A\u0B9Bement;\u6209ual\u0100;T\u0B92\u0B93\u6260ilde;\uC000\u2242\u0338ists;\u6204reater\u0380;EFGLST\u0BB6\u0BB7\u0BBD\u0BC9\u0BD3\u0BD8\u0BE5\u626Fqual;\u6271ullEqual;\uC000\u2267\u0338reater;\uC000\u226B\u0338ess;\u6279lantEqual;\uC000\u2A7E\u0338ilde;\u6275ump\u0144\u0BF2\u0BFDownHump;\uC000\u224E\u0338qual;\uC000\u224F\u0338e\u0100fs\u0C0A\u0C27tTriangle\u0180;BE\u0C1A\u0C1B\u0C21\u62EAar;\uC000\u29CF\u0338qual;\u62ECs\u0300;EGLST\u0C35\u0C36\u0C3C\u0C44\u0C4B\u0C58\u626Equal;\u6270reater;\u6278ess;\uC000\u226A\u0338lantEqual;\uC000\u2A7D\u0338ilde;\u6274ested\u0100GL\u0C68\u0C79reaterGreater;\uC000\u2AA2\u0338essLess;\uC000\u2AA1\u0338recedes\u0180;ES\u0C92\u0C93\u0C9B\u6280qual;\uC000\u2AAF\u0338lantEqual;\u62E0\u0100ei\u0CAB\u0CB9verseElement;\u620CghtTriangle\u0180;BE\u0CCB\u0CCC\u0CD2\u62EBar;\uC000\u29D0\u0338qual;\u62ED\u0100qu\u0CDD\u0D0CuareSu\u0100bp\u0CE8\u0CF9set\u0100;E\u0CF0\u0CF3\uC000\u228F\u0338qual;\u62E2erset\u0100;E\u0D03\u0D06\uC000\u2290\u0338qual;\u62E3\u0180bcp\u0D13\u0D24\u0D4Eset\u0100;E\u0D1B\u0D1E\uC000\u2282\u20D2qual;\u6288ceeds\u0200;EST\u0D32\u0D33\u0D3B\u0D46\u6281qual;\uC000\u2AB0\u0338lantEqual;\u62E1ilde;\uC000\u227F\u0338erset\u0100;E\u0D58\u0D5B\uC000\u2283\u20D2qual;\u6289ilde\u0200;EFT\u0D6E\u0D6F\u0D75\u0D7F\u6241qual;\u6244ullEqual;\u6247ilde;\u6249erticalBar;\u6224cr;\uC000\u{1D4A9}ilde\u803B\xD1\u40D1;\u439D\u0700Eacdfgmoprstuv\u0DBD\u0DC2\u0DC9\u0DD5\u0DDB\u0DE0\u0DE7\u0DFC\u0E02\u0E20\u0E22\u0E32\u0E3F\u0E44lig;\u4152cute\u803B\xD3\u40D3\u0100iy\u0DCE\u0DD3rc\u803B\xD4\u40D4;\u441Eblac;\u4150r;\uC000\u{1D512}rave\u803B\xD2\u40D2\u0180aei\u0DEE\u0DF2\u0DF6cr;\u414Cga;\u43A9cron;\u439Fpf;\uC000\u{1D546}enCurly\u0100DQ\u0E0E\u0E1AoubleQuote;\u601Cuote;\u6018;\u6A54\u0100cl\u0E27\u0E2Cr;\uC000\u{1D4AA}ash\u803B\xD8\u40D8i\u016C\u0E37\u0E3Cde\u803B\xD5\u40D5es;\u6A37ml\u803B\xD6\u40D6er\u0100BP\u0E4B\u0E60\u0100ar\u0E50\u0E53r;\u603Eac\u0100ek\u0E5A\u0E5C;\u63DEet;\u63B4arenthesis;\u63DC\u0480acfhilors\u0E7F\u0E87\u0E8A\u0E8F\u0E92\u0E94\u0E9D\u0EB0\u0EFCrtialD;\u6202y;\u441Fr;\uC000\u{1D513}i;\u43A6;\u43A0usMinus;\u40B1\u0100ip\u0EA2\u0EADncareplan\xE5\u069Df;\u6119\u0200;eio\u0EB9\u0EBA\u0EE0\u0EE4\u6ABBcedes\u0200;EST\u0EC8\u0EC9\u0ECF\u0EDA\u627Aqual;\u6AAFlantEqual;\u627Cilde;\u627Eme;\u6033\u0100dp\u0EE9\u0EEEuct;\u620Fortion\u0100;a\u0225\u0EF9l;\u621D\u0100ci\u0F01\u0F06r;\uC000\u{1D4AB};\u43A8\u0200Ufos\u0F11\u0F16\u0F1B\u0F1FOT\u803B"\u4022r;\uC000\u{1D514}pf;\u611Acr;\uC000\u{1D4AC}\u0600BEacefhiorsu\u0F3E\u0F43\u0F47\u0F60\u0F73\u0FA7\u0FAA\u0FAD\u1096\u10A9\u10B4\u10BEarr;\u6910G\u803B\xAE\u40AE\u0180cnr\u0F4E\u0F53\u0F56ute;\u4154g;\u67EBr\u0100;t\u0F5C\u0F5D\u61A0l;\u6916\u0180aey\u0F67\u0F6C\u0F71ron;\u4158dil;\u4156;\u4420\u0100;v\u0F78\u0F79\u611Cerse\u0100EU\u0F82\u0F99\u0100lq\u0F87\u0F8Eement;\u620Builibrium;\u61CBpEquilibrium;\u696Fr\xBB\u0F79o;\u43A1ght\u0400ACDFTUVa\u0FC1\u0FEB\u0FF3\u1022\u1028\u105B\u1087\u03D8\u0100nr\u0FC6\u0FD2gleBracket;\u67E9row\u0180;BL\u0FDC\u0FDD\u0FE1\u6192ar;\u61E5eftArrow;\u61C4eiling;\u6309o\u01F5\u0FF9\0\u1005bleBracket;\u67E7n\u01D4\u100A\0\u1014eeVector;\u695Dector\u0100;B\u101D\u101E\u61C2ar;\u6955loor;\u630B\u0100er\u102D\u1043e\u0180;AV\u1035\u1036\u103C\u62A2rrow;\u61A6ector;\u695Biangle\u0180;BE\u1050\u1051\u1055\u62B3ar;\u69D0qual;\u62B5p\u0180DTV\u1063\u106E\u1078ownVector;\u694FeeVector;\u695Cector\u0100;B\u1082\u1083\u61BEar;\u6954ector\u0100;B\u1091\u1092\u61C0ar;\u6953\u0100pu\u109B\u109Ef;\u611DndImplies;\u6970ightarrow;\u61DB\u0100ch\u10B9\u10BCr;\u611B;\u61B1leDelayed;\u69F4\u0680HOacfhimoqstu\u10E4\u10F1\u10F7\u10FD\u1119\u111E\u1151\u1156\u1161\u1167\u11B5\u11BB\u11BF\u0100Cc\u10E9\u10EEHcy;\u4429y;\u4428FTcy;\u442Ccute;\u415A\u0280;aeiy\u1108\u1109\u110E\u1113\u1117\u6ABCron;\u4160dil;\u415Erc;\u415C;\u4421r;\uC000\u{1D516}ort\u0200DLRU\u112A\u1134\u113E\u1149ownArrow\xBB\u041EeftArrow\xBB\u089AightArrow\xBB\u0FDDpArrow;\u6191gma;\u43A3allCircle;\u6218pf;\uC000\u{1D54A}\u0272\u116D\0\0\u1170t;\u621Aare\u0200;ISU\u117B\u117C\u1189\u11AF\u65A1ntersection;\u6293u\u0100bp\u118F\u119Eset\u0100;E\u1197\u1198\u628Fqual;\u6291erset\u0100;E\u11A8\u11A9\u6290qual;\u6292nion;\u6294cr;\uC000\u{1D4AE}ar;\u62C6\u0200bcmp\u11C8\u11DB\u1209\u120B\u0100;s\u11CD\u11CE\u62D0et\u0100;E\u11CD\u11D5qual;\u6286\u0100ch\u11E0\u1205eeds\u0200;EST\u11ED\u11EE\u11F4\u11FF\u627Bqual;\u6AB0lantEqual;\u627Dilde;\u627FTh\xE1\u0F8C;\u6211\u0180;es\u1212\u1213\u1223\u62D1rset\u0100;E\u121C\u121D\u6283qual;\u6287et\xBB\u1213\u0580HRSacfhiors\u123E\u1244\u1249\u1255\u125E\u1271\u1276\u129F\u12C2\u12C8\u12D1ORN\u803B\xDE\u40DEADE;\u6122\u0100Hc\u124E\u1252cy;\u440By;\u4426\u0100bu\u125A\u125C;\u4009;\u43A4\u0180aey\u1265\u126A\u126Fron;\u4164dil;\u4162;\u4422r;\uC000\u{1D517}\u0100ei\u127B\u1289\u01F2\u1280\0\u1287efore;\u6234a;\u4398\u0100cn\u128E\u1298kSpace;\uC000\u205F\u200ASpace;\u6009lde\u0200;EFT\u12AB\u12AC\u12B2\u12BC\u623Cqual;\u6243ullEqual;\u6245ilde;\u6248pf;\uC000\u{1D54B}ipleDot;\u60DB\u0100ct\u12D6\u12DBr;\uC000\u{1D4AF}rok;\u4166\u0AE1\u12F7\u130E\u131A\u1326\0\u132C\u1331\0\0\0\0\0\u1338\u133D\u1377\u1385\0\u13FF\u1404\u140A\u1410\u0100cr\u12FB\u1301ute\u803B\xDA\u40DAr\u0100;o\u1307\u1308\u619Fcir;\u6949r\u01E3\u1313\0\u1316y;\u440Eve;\u416C\u0100iy\u131E\u1323rc\u803B\xDB\u40DB;\u4423blac;\u4170r;\uC000\u{1D518}rave\u803B\xD9\u40D9acr;\u416A\u0100di\u1341\u1369er\u0100BP\u1348\u135D\u0100ar\u134D\u1350r;\u405Fac\u0100ek\u1357\u1359;\u63DFet;\u63B5arenthesis;\u63DDon\u0100;P\u1370\u1371\u62C3lus;\u628E\u0100gp\u137B\u137Fon;\u4172f;\uC000\u{1D54C}\u0400ADETadps\u1395\u13AE\u13B8\u13C4\u03E8\u13D2\u13D7\u13F3rrow\u0180;BD\u1150\u13A0\u13A4ar;\u6912ownArrow;\u61C5ownArrow;\u6195quilibrium;\u696Eee\u0100;A\u13CB\u13CC\u62A5rrow;\u61A5own\xE1\u03F3er\u0100LR\u13DE\u13E8eftArrow;\u6196ightArrow;\u6197i\u0100;l\u13F9\u13FA\u43D2on;\u43A5ing;\u416Ecr;\uC000\u{1D4B0}ilde;\u4168ml\u803B\xDC\u40DC\u0480Dbcdefosv\u1427\u142C\u1430\u1433\u143E\u1485\u148A\u1490\u1496ash;\u62ABar;\u6AEBy;\u4412ash\u0100;l\u143B\u143C\u62A9;\u6AE6\u0100er\u1443\u1445;\u62C1\u0180bty\u144C\u1450\u147Aar;\u6016\u0100;i\u144F\u1455cal\u0200BLST\u1461\u1465\u146A\u1474ar;\u6223ine;\u407Ceparator;\u6758ilde;\u6240ThinSpace;\u600Ar;\uC000\u{1D519}pf;\uC000\u{1D54D}cr;\uC000\u{1D4B1}dash;\u62AA\u0280cefos\u14A7\u14AC\u14B1\u14B6\u14BCirc;\u4174dge;\u62C0r;\uC000\u{1D51A}pf;\uC000\u{1D54E}cr;\uC000\u{1D4B2}\u0200fios\u14CB\u14D0\u14D2\u14D8r;\uC000\u{1D51B};\u439Epf;\uC000\u{1D54F}cr;\uC000\u{1D4B3}\u0480AIUacfosu\u14F1\u14F5\u14F9\u14FD\u1504\u150F\u1514\u151A\u1520cy;\u442Fcy;\u4407cy;\u442Ecute\u803B\xDD\u40DD\u0100iy\u1509\u150Drc;\u4176;\u442Br;\uC000\u{1D51C}pf;\uC000\u{1D550}cr;\uC000\u{1D4B4}ml;\u4178\u0400Hacdefos\u1535\u1539\u153F\u154B\u154F\u155D\u1560\u1564cy;\u4416cute;\u4179\u0100ay\u1544\u1549ron;\u417D;\u4417ot;\u417B\u01F2\u1554\0\u155BoWidt\xE8\u0AD9a;\u4396r;\u6128pf;\u6124cr;\uC000\u{1D4B5}\u0BE1\u1583\u158A\u1590\0\u15B0\u15B6\u15BF\0\0\0\0\u15C6\u15DB\u15EB\u165F\u166D\0\u1695\u169B\u16B2\u16B9\0\u16BEcute\u803B\xE1\u40E1reve;\u4103\u0300;Ediuy\u159C\u159D\u15A1\u15A3\u15A8\u15AD\u623E;\uC000\u223E\u0333;\u623Frc\u803B\xE2\u40E2te\u80BB\xB4\u0306;\u4430lig\u803B\xE6\u40E6\u0100;r\xB2\u15BA;\uC000\u{1D51E}rave\u803B\xE0\u40E0\u0100ep\u15CA\u15D6\u0100fp\u15CF\u15D4sym;\u6135\xE8\u15D3ha;\u43B1\u0100ap\u15DFc\u0100cl\u15E4\u15E7r;\u4101g;\u6A3F\u0264\u15F0\0\0\u160A\u0280;adsv\u15FA\u15FB\u15FF\u1601\u1607\u6227nd;\u6A55;\u6A5Clope;\u6A58;\u6A5A\u0380;elmrsz\u1618\u1619\u161B\u161E\u163F\u164F\u1659\u6220;\u69A4e\xBB\u1619sd\u0100;a\u1625\u1626\u6221\u0461\u1630\u1632\u1634\u1636\u1638\u163A\u163C\u163E;\u69A8;\u69A9;\u69AA;\u69AB;\u69AC;\u69AD;\u69AE;\u69AFt\u0100;v\u1645\u1646\u621Fb\u0100;d\u164C\u164D\u62BE;\u699D\u0100pt\u1654\u1657h;\u6222\xBB\xB9arr;\u637C\u0100gp\u1663\u1667on;\u4105f;\uC000\u{1D552}\u0380;Eaeiop\u12C1\u167B\u167D\u1682\u1684\u1687\u168A;\u6A70cir;\u6A6F;\u624Ad;\u624Bs;\u4027rox\u0100;e\u12C1\u1692\xF1\u1683ing\u803B\xE5\u40E5\u0180cty\u16A1\u16A6\u16A8r;\uC000\u{1D4B6};\u402Amp\u0100;e\u12C1\u16AF\xF1\u0288ilde\u803B\xE3\u40E3ml\u803B\xE4\u40E4\u0100ci\u16C2\u16C8onin\xF4\u0272nt;\u6A11\u0800Nabcdefiklnoprsu\u16ED\u16F1\u1730\u173C\u1743\u1748\u1778\u177D\u17E0\u17E6\u1839\u1850\u170D\u193D\u1948\u1970ot;\u6AED\u0100cr\u16F6\u171Ek\u0200ceps\u1700\u1705\u170D\u1713ong;\u624Cpsilon;\u43F6rime;\u6035im\u0100;e\u171A\u171B\u623Dq;\u62CD\u0176\u1722\u1726ee;\u62BDed\u0100;g\u172C\u172D\u6305e\xBB\u172Drk\u0100;t\u135C\u1737brk;\u63B6\u0100oy\u1701\u1741;\u4431quo;\u601E\u0280cmprt\u1753\u175B\u1761\u1764\u1768aus\u0100;e\u010A\u0109ptyv;\u69B0s\xE9\u170Cno\xF5\u0113\u0180ahw\u176F\u1771\u1773;\u43B2;\u6136een;\u626Cr;\uC000\u{1D51F}g\u0380costuvw\u178D\u179D\u17B3\u17C1\u17D5\u17DB\u17DE\u0180aiu\u1794\u1796\u179A\xF0\u0760rc;\u65EFp\xBB\u1371\u0180dpt\u17A4\u17A8\u17ADot;\u6A00lus;\u6A01imes;\u6A02\u0271\u17B9\0\0\u17BEcup;\u6A06ar;\u6605riangle\u0100du\u17CD\u17D2own;\u65BDp;\u65B3plus;\u6A04e\xE5\u1444\xE5\u14ADarow;\u690D\u0180ako\u17ED\u1826\u1835\u0100cn\u17F2\u1823k\u0180lst\u17FA\u05AB\u1802ozenge;\u69EBriangle\u0200;dlr\u1812\u1813\u1818\u181D\u65B4own;\u65BEeft;\u65C2ight;\u65B8k;\u6423\u01B1\u182B\0\u1833\u01B2\u182F\0\u1831;\u6592;\u65914;\u6593ck;\u6588\u0100eo\u183E\u184D\u0100;q\u1843\u1846\uC000=\u20E5uiv;\uC000\u2261\u20E5t;\u6310\u0200ptwx\u1859\u185E\u1867\u186Cf;\uC000\u{1D553}\u0100;t\u13CB\u1863om\xBB\u13CCtie;\u62C8\u0600DHUVbdhmptuv\u1885\u1896\u18AA\u18BB\u18D7\u18DB\u18EC\u18FF\u1905\u190A\u1910\u1921\u0200LRlr\u188E\u1890\u1892\u1894;\u6557;\u6554;\u6556;\u6553\u0280;DUdu\u18A1\u18A2\u18A4\u18A6\u18A8\u6550;\u6566;\u6569;\u6564;\u6567\u0200LRlr\u18B3\u18B5\u18B7\u18B9;\u655D;\u655A;\u655C;\u6559\u0380;HLRhlr\u18CA\u18CB\u18CD\u18CF\u18D1\u18D3\u18D5\u6551;\u656C;\u6563;\u6560;\u656B;\u6562;\u655Fox;\u69C9\u0200LRlr\u18E4\u18E6\u18E8\u18EA;\u6555;\u6552;\u6510;\u650C\u0280;DUdu\u06BD\u18F7\u18F9\u18FB\u18FD;\u6565;\u6568;\u652C;\u6534inus;\u629Flus;\u629Eimes;\u62A0\u0200LRlr\u1919\u191B\u191D\u191F;\u655B;\u6558;\u6518;\u6514\u0380;HLRhlr\u1930\u1931\u1933\u1935\u1937\u1939\u193B\u6502;\u656A;\u6561;\u655E;\u653C;\u6524;\u651C\u0100ev\u0123\u1942bar\u803B\xA6\u40A6\u0200ceio\u1951\u1956\u195A\u1960r;\uC000\u{1D4B7}mi;\u604Fm\u0100;e\u171A\u171Cl\u0180;bh\u1968\u1969\u196B\u405C;\u69C5sub;\u67C8\u016C\u1974\u197El\u0100;e\u1979\u197A\u6022t\xBB\u197Ap\u0180;Ee\u012F\u1985\u1987;\u6AAE\u0100;q\u06DC\u06DB\u0CE1\u19A7\0\u19E8\u1A11\u1A15\u1A32\0\u1A37\u1A50\0\0\u1AB4\0\0\u1AC1\0\0\u1B21\u1B2E\u1B4D\u1B52\0\u1BFD\0\u1C0C\u0180cpr\u19AD\u19B2\u19DDute;\u4107\u0300;abcds\u19BF\u19C0\u19C4\u19CA\u19D5\u19D9\u6229nd;\u6A44rcup;\u6A49\u0100au\u19CF\u19D2p;\u6A4Bp;\u6A47ot;\u6A40;\uC000\u2229\uFE00\u0100eo\u19E2\u19E5t;\u6041\xEE\u0693\u0200aeiu\u19F0\u19FB\u1A01\u1A05\u01F0\u19F5\0\u19F8s;\u6A4Don;\u410Ddil\u803B\xE7\u40E7rc;\u4109ps\u0100;s\u1A0C\u1A0D\u6A4Cm;\u6A50ot;\u410B\u0180dmn\u1A1B\u1A20\u1A26il\u80BB\xB8\u01ADptyv;\u69B2t\u8100\xA2;e\u1A2D\u1A2E\u40A2r\xE4\u01B2r;\uC000\u{1D520}\u0180cei\u1A3D\u1A40\u1A4Dy;\u4447ck\u0100;m\u1A47\u1A48\u6713ark\xBB\u1A48;\u43C7r\u0380;Ecefms\u1A5F\u1A60\u1A62\u1A6B\u1AA4\u1AAA\u1AAE\u65CB;\u69C3\u0180;el\u1A69\u1A6A\u1A6D\u42C6q;\u6257e\u0261\u1A74\0\0\u1A88rrow\u0100lr\u1A7C\u1A81eft;\u61BAight;\u61BB\u0280RSacd\u1A92\u1A94\u1A96\u1A9A\u1A9F\xBB\u0F47;\u64C8st;\u629Birc;\u629Aash;\u629Dnint;\u6A10id;\u6AEFcir;\u69C2ubs\u0100;u\u1ABB\u1ABC\u6663it\xBB\u1ABC\u02EC\u1AC7\u1AD4\u1AFA\0\u1B0Aon\u0100;e\u1ACD\u1ACE\u403A\u0100;q\xC7\xC6\u026D\u1AD9\0\0\u1AE2a\u0100;t\u1ADE\u1ADF\u402C;\u4040\u0180;fl\u1AE8\u1AE9\u1AEB\u6201\xEE\u1160e\u0100mx\u1AF1\u1AF6ent\xBB\u1AE9e\xF3\u024D\u01E7\u1AFE\0\u1B07\u0100;d\u12BB\u1B02ot;\u6A6Dn\xF4\u0246\u0180fry\u1B10\u1B14\u1B17;\uC000\u{1D554}o\xE4\u0254\u8100\xA9;s\u0155\u1B1Dr;\u6117\u0100ao\u1B25\u1B29rr;\u61B5ss;\u6717\u0100cu\u1B32\u1B37r;\uC000\u{1D4B8}\u0100bp\u1B3C\u1B44\u0100;e\u1B41\u1B42\u6ACF;\u6AD1\u0100;e\u1B49\u1B4A\u6AD0;\u6AD2dot;\u62EF\u0380delprvw\u1B60\u1B6C\u1B77\u1B82\u1BAC\u1BD4\u1BF9arr\u0100lr\u1B68\u1B6A;\u6938;\u6935\u0270\u1B72\0\0\u1B75r;\u62DEc;\u62DFarr\u0100;p\u1B7F\u1B80\u61B6;\u693D\u0300;bcdos\u1B8F\u1B90\u1B96\u1BA1\u1BA5\u1BA8\u622Arcap;\u6A48\u0100au\u1B9B\u1B9Ep;\u6A46p;\u6A4Aot;\u628Dr;\u6A45;\uC000\u222A\uFE00\u0200alrv\u1BB5\u1BBF\u1BDE\u1BE3rr\u0100;m\u1BBC\u1BBD\u61B7;\u693Cy\u0180evw\u1BC7\u1BD4\u1BD8q\u0270\u1BCE\0\0\u1BD2re\xE3\u1B73u\xE3\u1B75ee;\u62CEedge;\u62CFen\u803B\xA4\u40A4earrow\u0100lr\u1BEE\u1BF3eft\xBB\u1B80ight\xBB\u1BBDe\xE4\u1BDD\u0100ci\u1C01\u1C07onin\xF4\u01F7nt;\u6231lcty;\u632D\u0980AHabcdefhijlorstuwz\u1C38\u1C3B\u1C3F\u1C5D\u1C69\u1C75\u1C8A\u1C9E\u1CAC\u1CB7\u1CFB\u1CFF\u1D0D\u1D7B\u1D91\u1DAB\u1DBB\u1DC6\u1DCDr\xF2\u0381ar;\u6965\u0200glrs\u1C48\u1C4D\u1C52\u1C54ger;\u6020eth;\u6138\xF2\u1133h\u0100;v\u1C5A\u1C5B\u6010\xBB\u090A\u016B\u1C61\u1C67arow;\u690Fa\xE3\u0315\u0100ay\u1C6E\u1C73ron;\u410F;\u4434\u0180;ao\u0332\u1C7C\u1C84\u0100gr\u02BF\u1C81r;\u61CAtseq;\u6A77\u0180glm\u1C91\u1C94\u1C98\u803B\xB0\u40B0ta;\u43B4ptyv;\u69B1\u0100ir\u1CA3\u1CA8sht;\u697F;\uC000\u{1D521}ar\u0100lr\u1CB3\u1CB5\xBB\u08DC\xBB\u101E\u0280aegsv\u1CC2\u0378\u1CD6\u1CDC\u1CE0m\u0180;os\u0326\u1CCA\u1CD4nd\u0100;s\u0326\u1CD1uit;\u6666amma;\u43DDin;\u62F2\u0180;io\u1CE7\u1CE8\u1CF8\u40F7de\u8100\xF7;o\u1CE7\u1CF0ntimes;\u62C7n\xF8\u1CF7cy;\u4452c\u026F\u1D06\0\0\u1D0Arn;\u631Eop;\u630D\u0280lptuw\u1D18\u1D1D\u1D22\u1D49\u1D55lar;\u4024f;\uC000\u{1D555}\u0280;emps\u030B\u1D2D\u1D37\u1D3D\u1D42q\u0100;d\u0352\u1D33ot;\u6251inus;\u6238lus;\u6214quare;\u62A1blebarwedg\xE5\xFAn\u0180adh\u112E\u1D5D\u1D67ownarrow\xF3\u1C83arpoon\u0100lr\u1D72\u1D76ef\xF4\u1CB4igh\xF4\u1CB6\u0162\u1D7F\u1D85karo\xF7\u0F42\u026F\u1D8A\0\0\u1D8Ern;\u631Fop;\u630C\u0180cot\u1D98\u1DA3\u1DA6\u0100ry\u1D9D\u1DA1;\uC000\u{1D4B9};\u4455l;\u69F6rok;\u4111\u0100dr\u1DB0\u1DB4ot;\u62F1i\u0100;f\u1DBA\u1816\u65BF\u0100ah\u1DC0\u1DC3r\xF2\u0429a\xF2\u0FA6angle;\u69A6\u0100ci\u1DD2\u1DD5y;\u445Fgrarr;\u67FF\u0900Dacdefglmnopqrstux\u1E01\u1E09\u1E19\u1E38\u0578\u1E3C\u1E49\u1E61\u1E7E\u1EA5\u1EAF\u1EBD\u1EE1\u1F2A\u1F37\u1F44\u1F4E\u1F5A\u0100Do\u1E06\u1D34o\xF4\u1C89\u0100cs\u1E0E\u1E14ute\u803B\xE9\u40E9ter;\u6A6E\u0200aioy\u1E22\u1E27\u1E31\u1E36ron;\u411Br\u0100;c\u1E2D\u1E2E\u6256\u803B\xEA\u40EAlon;\u6255;\u444Dot;\u4117\u0100Dr\u1E41\u1E45ot;\u6252;\uC000\u{1D522}\u0180;rs\u1E50\u1E51\u1E57\u6A9Aave\u803B\xE8\u40E8\u0100;d\u1E5C\u1E5D\u6A96ot;\u6A98\u0200;ils\u1E6A\u1E6B\u1E72\u1E74\u6A99nters;\u63E7;\u6113\u0100;d\u1E79\u1E7A\u6A95ot;\u6A97\u0180aps\u1E85\u1E89\u1E97cr;\u4113ty\u0180;sv\u1E92\u1E93\u1E95\u6205et\xBB\u1E93p\u01001;\u1E9D\u1EA4\u0133\u1EA1\u1EA3;\u6004;\u6005\u6003\u0100gs\u1EAA\u1EAC;\u414Bp;\u6002\u0100gp\u1EB4\u1EB8on;\u4119f;\uC000\u{1D556}\u0180als\u1EC4\u1ECE\u1ED2r\u0100;s\u1ECA\u1ECB\u62D5l;\u69E3us;\u6A71i\u0180;lv\u1EDA\u1EDB\u1EDF\u43B5on\xBB\u1EDB;\u43F5\u0200csuv\u1EEA\u1EF3\u1F0B\u1F23\u0100io\u1EEF\u1E31rc\xBB\u1E2E\u0269\u1EF9\0\0\u1EFB\xED\u0548ant\u0100gl\u1F02\u1F06tr\xBB\u1E5Dess\xBB\u1E7A\u0180aei\u1F12\u1F16\u1F1Als;\u403Dst;\u625Fv\u0100;D\u0235\u1F20D;\u6A78parsl;\u69E5\u0100Da\u1F2F\u1F33ot;\u6253rr;\u6971\u0180cdi\u1F3E\u1F41\u1EF8r;\u612Fo\xF4\u0352\u0100ah\u1F49\u1F4B;\u43B7\u803B\xF0\u40F0\u0100mr\u1F53\u1F57l\u803B\xEB\u40EBo;\u60AC\u0180cip\u1F61\u1F64\u1F67l;\u4021s\xF4\u056E\u0100eo\u1F6C\u1F74ctatio\xEE\u0559nential\xE5\u0579\u09E1\u1F92\0\u1F9E\0\u1FA1\u1FA7\0\0\u1FC6\u1FCC\0\u1FD3\0\u1FE6\u1FEA\u2000\0\u2008\u205Allingdotse\xF1\u1E44y;\u4444male;\u6640\u0180ilr\u1FAD\u1FB3\u1FC1lig;\u8000\uFB03\u0269\u1FB9\0\0\u1FBDg;\u8000\uFB00ig;\u8000\uFB04;\uC000\u{1D523}lig;\u8000\uFB01lig;\uC000fj\u0180alt\u1FD9\u1FDC\u1FE1t;\u666Dig;\u8000\uFB02ns;\u65B1of;\u4192\u01F0\u1FEE\0\u1FF3f;\uC000\u{1D557}\u0100ak\u05BF\u1FF7\u0100;v\u1FFC\u1FFD\u62D4;\u6AD9artint;\u6A0D\u0100ao\u200C\u2055\u0100cs\u2011\u2052\u03B1\u201A\u2030\u2038\u2045\u2048\0\u2050\u03B2\u2022\u2025\u2027\u202A\u202C\0\u202E\u803B\xBD\u40BD;\u6153\u803B\xBC\u40BC;\u6155;\u6159;\u615B\u01B3\u2034\0\u2036;\u6154;\u6156\u02B4\u203E\u2041\0\0\u2043\u803B\xBE\u40BE;\u6157;\u615C5;\u6158\u01B6\u204C\0\u204E;\u615A;\u615D8;\u615El;\u6044wn;\u6322cr;\uC000\u{1D4BB}\u0880Eabcdefgijlnorstv\u2082\u2089\u209F\u20A5\u20B0\u20B4\u20F0\u20F5\u20FA\u20FF\u2103\u2112\u2138\u0317\u213E\u2152\u219E\u0100;l\u064D\u2087;\u6A8C\u0180cmp\u2090\u2095\u209Dute;\u41F5ma\u0100;d\u209C\u1CDA\u43B3;\u6A86reve;\u411F\u0100iy\u20AA\u20AErc;\u411D;\u4433ot;\u4121\u0200;lqs\u063E\u0642\u20BD\u20C9\u0180;qs\u063E\u064C\u20C4lan\xF4\u0665\u0200;cdl\u0665\u20D2\u20D5\u20E5c;\u6AA9ot\u0100;o\u20DC\u20DD\u6A80\u0100;l\u20E2\u20E3\u6A82;\u6A84\u0100;e\u20EA\u20ED\uC000\u22DB\uFE00s;\u6A94r;\uC000\u{1D524}\u0100;g\u0673\u061Bmel;\u6137cy;\u4453\u0200;Eaj\u065A\u210C\u210E\u2110;\u6A92;\u6AA5;\u6AA4\u0200Eaes\u211B\u211D\u2129\u2134;\u6269p\u0100;p\u2123\u2124\u6A8Arox\xBB\u2124\u0100;q\u212E\u212F\u6A88\u0100;q\u212E\u211Bim;\u62E7pf;\uC000\u{1D558}\u0100ci\u2143\u2146r;\u610Am\u0180;el\u066B\u214E\u2150;\u6A8E;\u6A90\u8300>;cdlqr\u05EE\u2160\u216A\u216E\u2173\u2179\u0100ci\u2165\u2167;\u6AA7r;\u6A7Aot;\u62D7Par;\u6995uest;\u6A7C\u0280adels\u2184\u216A\u2190\u0656\u219B\u01F0\u2189\0\u218Epro\xF8\u209Er;\u6978q\u0100lq\u063F\u2196les\xF3\u2088i\xED\u066B\u0100en\u21A3\u21ADrtneqq;\uC000\u2269\uFE00\xC5\u21AA\u0500Aabcefkosy\u21C4\u21C7\u21F1\u21F5\u21FA\u2218\u221D\u222F\u2268\u227Dr\xF2\u03A0\u0200ilmr\u21D0\u21D4\u21D7\u21DBrs\xF0\u1484f\xBB\u2024il\xF4\u06A9\u0100dr\u21E0\u21E4cy;\u444A\u0180;cw\u08F4\u21EB\u21EFir;\u6948;\u61ADar;\u610Firc;\u4125\u0180alr\u2201\u220E\u2213rts\u0100;u\u2209\u220A\u6665it\xBB\u220Alip;\u6026con;\u62B9r;\uC000\u{1D525}s\u0100ew\u2223\u2229arow;\u6925arow;\u6926\u0280amopr\u223A\u223E\u2243\u225E\u2263rr;\u61FFtht;\u623Bk\u0100lr\u2249\u2253eftarrow;\u61A9ightarrow;\u61AAf;\uC000\u{1D559}bar;\u6015\u0180clt\u226F\u2274\u2278r;\uC000\u{1D4BD}as\xE8\u21F4rok;\u4127\u0100bp\u2282\u2287ull;\u6043hen\xBB\u1C5B\u0AE1\u22A3\0\u22AA\0\u22B8\u22C5\u22CE\0\u22D5\u22F3\0\0\u22F8\u2322\u2367\u2362\u237F\0\u2386\u23AA\u23B4cute\u803B\xED\u40ED\u0180;iy\u0771\u22B0\u22B5rc\u803B\xEE\u40EE;\u4438\u0100cx\u22BC\u22BFy;\u4435cl\u803B\xA1\u40A1\u0100fr\u039F\u22C9;\uC000\u{1D526}rave\u803B\xEC\u40EC\u0200;ino\u073E\u22DD\u22E9\u22EE\u0100in\u22E2\u22E6nt;\u6A0Ct;\u622Dfin;\u69DCta;\u6129lig;\u4133\u0180aop\u22FE\u231A\u231D\u0180cgt\u2305\u2308\u2317r;\u412B\u0180elp\u071F\u230F\u2313in\xE5\u078Ear\xF4\u0720h;\u4131f;\u62B7ed;\u41B5\u0280;cfot\u04F4\u232C\u2331\u233D\u2341are;\u6105in\u0100;t\u2338\u2339\u621Eie;\u69DDdo\xF4\u2319\u0280;celp\u0757\u234C\u2350\u235B\u2361al;\u62BA\u0100gr\u2355\u2359er\xF3\u1563\xE3\u234Darhk;\u6A17rod;\u6A3C\u0200cgpt\u236F\u2372\u2376\u237By;\u4451on;\u412Ff;\uC000\u{1D55A}a;\u43B9uest\u803B\xBF\u40BF\u0100ci\u238A\u238Fr;\uC000\u{1D4BE}n\u0280;Edsv\u04F4\u239B\u239D\u23A1\u04F3;\u62F9ot;\u62F5\u0100;v\u23A6\u23A7\u62F4;\u62F3\u0100;i\u0777\u23AElde;\u4129\u01EB\u23B8\0\u23BCcy;\u4456l\u803B\xEF\u40EF\u0300cfmosu\u23CC\u23D7\u23DC\u23E1\u23E7\u23F5\u0100iy\u23D1\u23D5rc;\u4135;\u4439r;\uC000\u{1D527}ath;\u4237pf;\uC000\u{1D55B}\u01E3\u23EC\0\u23F1r;\uC000\u{1D4BF}rcy;\u4458kcy;\u4454\u0400acfghjos\u240B\u2416\u2422\u2427\u242D\u2431\u2435\u243Bppa\u0100;v\u2413\u2414\u43BA;\u43F0\u0100ey\u241B\u2420dil;\u4137;\u443Ar;\uC000\u{1D528}reen;\u4138cy;\u4445cy;\u445Cpf;\uC000\u{1D55C}cr;\uC000\u{1D4C0}\u0B80ABEHabcdefghjlmnoprstuv\u2470\u2481\u2486\u248D\u2491\u250E\u253D\u255A\u2580\u264E\u265E\u2665\u2679\u267D\u269A\u26B2\u26D8\u275D\u2768\u278B\u27C0\u2801\u2812\u0180art\u2477\u247A\u247Cr\xF2\u09C6\xF2\u0395ail;\u691Barr;\u690E\u0100;g\u0994\u248B;\u6A8Bar;\u6962\u0963\u24A5\0\u24AA\0\u24B1\0\0\0\0\0\u24B5\u24BA\0\u24C6\u24C8\u24CD\0\u24F9ute;\u413Amptyv;\u69B4ra\xEE\u084Cbda;\u43BBg\u0180;dl\u088E\u24C1\u24C3;\u6991\xE5\u088E;\u6A85uo\u803B\xAB\u40ABr\u0400;bfhlpst\u0899\u24DE\u24E6\u24E9\u24EB\u24EE\u24F1\u24F5\u0100;f\u089D\u24E3s;\u691Fs;\u691D\xEB\u2252p;\u61ABl;\u6939im;\u6973l;\u61A2\u0180;ae\u24FF\u2500\u2504\u6AABil;\u6919\u0100;s\u2509\u250A\u6AAD;\uC000\u2AAD\uFE00\u0180abr\u2515\u2519\u251Drr;\u690Crk;\u6772\u0100ak\u2522\u252Cc\u0100ek\u2528\u252A;\u407B;\u405B\u0100es\u2531\u2533;\u698Bl\u0100du\u2539\u253B;\u698F;\u698D\u0200aeuy\u2546\u254B\u2556\u2558ron;\u413E\u0100di\u2550\u2554il;\u413C\xEC\u08B0\xE2\u2529;\u443B\u0200cqrs\u2563\u2566\u256D\u257Da;\u6936uo\u0100;r\u0E19\u1746\u0100du\u2572\u2577har;\u6967shar;\u694Bh;\u61B2\u0280;fgqs\u258B\u258C\u0989\u25F3\u25FF\u6264t\u0280ahlrt\u2598\u25A4\u25B7\u25C2\u25E8rrow\u0100;t\u0899\u25A1a\xE9\u24F6arpoon\u0100du\u25AF\u25B4own\xBB\u045Ap\xBB\u0966eftarrows;\u61C7ight\u0180ahs\u25CD\u25D6\u25DErrow\u0100;s\u08F4\u08A7arpoon\xF3\u0F98quigarro\xF7\u21F0hreetimes;\u62CB\u0180;qs\u258B\u0993\u25FAlan\xF4\u09AC\u0280;cdgs\u09AC\u260A\u260D\u261D\u2628c;\u6AA8ot\u0100;o\u2614\u2615\u6A7F\u0100;r\u261A\u261B\u6A81;\u6A83\u0100;e\u2622\u2625\uC000\u22DA\uFE00s;\u6A93\u0280adegs\u2633\u2639\u263D\u2649\u264Bppro\xF8\u24C6ot;\u62D6q\u0100gq\u2643\u2645\xF4\u0989gt\xF2\u248C\xF4\u099Bi\xED\u09B2\u0180ilr\u2655\u08E1\u265Asht;\u697C;\uC000\u{1D529}\u0100;E\u099C\u2663;\u6A91\u0161\u2669\u2676r\u0100du\u25B2\u266E\u0100;l\u0965\u2673;\u696Alk;\u6584cy;\u4459\u0280;acht\u0A48\u2688\u268B\u2691\u2696r\xF2\u25C1orne\xF2\u1D08ard;\u696Bri;\u65FA\u0100io\u269F\u26A4dot;\u4140ust\u0100;a\u26AC\u26AD\u63B0che\xBB\u26AD\u0200Eaes\u26BB\u26BD\u26C9\u26D4;\u6268p\u0100;p\u26C3\u26C4\u6A89rox\xBB\u26C4\u0100;q\u26CE\u26CF\u6A87\u0100;q\u26CE\u26BBim;\u62E6\u0400abnoptwz\u26E9\u26F4\u26F7\u271A\u272F\u2741\u2747\u2750\u0100nr\u26EE\u26F1g;\u67ECr;\u61FDr\xEB\u08C1g\u0180lmr\u26FF\u270D\u2714eft\u0100ar\u09E6\u2707ight\xE1\u09F2apsto;\u67FCight\xE1\u09FDparrow\u0100lr\u2725\u2729ef\xF4\u24EDight;\u61AC\u0180afl\u2736\u2739\u273Dr;\u6985;\uC000\u{1D55D}us;\u6A2Dimes;\u6A34\u0161\u274B\u274Fst;\u6217\xE1\u134E\u0180;ef\u2757\u2758\u1800\u65CAnge\xBB\u2758ar\u0100;l\u2764\u2765\u4028t;\u6993\u0280achmt\u2773\u2776\u277C\u2785\u2787r\xF2\u08A8orne\xF2\u1D8Car\u0100;d\u0F98\u2783;\u696D;\u600Eri;\u62BF\u0300achiqt\u2798\u279D\u0A40\u27A2\u27AE\u27BBquo;\u6039r;\uC000\u{1D4C1}m\u0180;eg\u09B2\u27AA\u27AC;\u6A8D;\u6A8F\u0100bu\u252A\u27B3o\u0100;r\u0E1F\u27B9;\u601Arok;\u4142\u8400<;cdhilqr\u082B\u27D2\u2639\u27DC\u27E0\u27E5\u27EA\u27F0\u0100ci\u27D7\u27D9;\u6AA6r;\u6A79re\xE5\u25F2mes;\u62C9arr;\u6976uest;\u6A7B\u0100Pi\u27F5\u27F9ar;\u6996\u0180;ef\u2800\u092D\u181B\u65C3r\u0100du\u2807\u280Dshar;\u694Ahar;\u6966\u0100en\u2817\u2821rtneqq;\uC000\u2268\uFE00\xC5\u281E\u0700Dacdefhilnopsu\u2840\u2845\u2882\u288E\u2893\u28A0\u28A5\u28A8\u28DA\u28E2\u28E4\u0A83\u28F3\u2902Dot;\u623A\u0200clpr\u284E\u2852\u2863\u287Dr\u803B\xAF\u40AF\u0100et\u2857\u2859;\u6642\u0100;e\u285E\u285F\u6720se\xBB\u285F\u0100;s\u103B\u2868to\u0200;dlu\u103B\u2873\u2877\u287Bow\xEE\u048Cef\xF4\u090F\xF0\u13D1ker;\u65AE\u0100oy\u2887\u288Cmma;\u6A29;\u443Cash;\u6014asuredangle\xBB\u1626r;\uC000\u{1D52A}o;\u6127\u0180cdn\u28AF\u28B4\u28C9ro\u803B\xB5\u40B5\u0200;acd\u1464\u28BD\u28C0\u28C4s\xF4\u16A7ir;\u6AF0ot\u80BB\xB7\u01B5us\u0180;bd\u28D2\u1903\u28D3\u6212\u0100;u\u1D3C\u28D8;\u6A2A\u0163\u28DE\u28E1p;\u6ADB\xF2\u2212\xF0\u0A81\u0100dp\u28E9\u28EEels;\u62A7f;\uC000\u{1D55E}\u0100ct\u28F8\u28FDr;\uC000\u{1D4C2}pos\xBB\u159D\u0180;lm\u2909\u290A\u290D\u43BCtimap;\u62B8\u0C00GLRVabcdefghijlmoprstuvw\u2942\u2953\u297E\u2989\u2998\u29DA\u29E9\u2A15\u2A1A\u2A58\u2A5D\u2A83\u2A95\u2AA4\u2AA8\u2B04\u2B07\u2B44\u2B7F\u2BAE\u2C34\u2C67\u2C7C\u2CE9\u0100gt\u2947\u294B;\uC000\u22D9\u0338\u0100;v\u2950\u0BCF\uC000\u226B\u20D2\u0180elt\u295A\u2972\u2976ft\u0100ar\u2961\u2967rrow;\u61CDightarrow;\u61CE;\uC000\u22D8\u0338\u0100;v\u297B\u0C47\uC000\u226A\u20D2ightarrow;\u61CF\u0100Dd\u298E\u2993ash;\u62AFash;\u62AE\u0280bcnpt\u29A3\u29A7\u29AC\u29B1\u29CCla\xBB\u02DEute;\u4144g;\uC000\u2220\u20D2\u0280;Eiop\u0D84\u29BC\u29C0\u29C5\u29C8;\uC000\u2A70\u0338d;\uC000\u224B\u0338s;\u4149ro\xF8\u0D84ur\u0100;a\u29D3\u29D4\u666El\u0100;s\u29D3\u0B38\u01F3\u29DF\0\u29E3p\u80BB\xA0\u0B37mp\u0100;e\u0BF9\u0C00\u0280aeouy\u29F4\u29FE\u2A03\u2A10\u2A13\u01F0\u29F9\0\u29FB;\u6A43on;\u4148dil;\u4146ng\u0100;d\u0D7E\u2A0Aot;\uC000\u2A6D\u0338p;\u6A42;\u443Dash;\u6013\u0380;Aadqsx\u0B92\u2A29\u2A2D\u2A3B\u2A41\u2A45\u2A50rr;\u61D7r\u0100hr\u2A33\u2A36k;\u6924\u0100;o\u13F2\u13F0ot;\uC000\u2250\u0338ui\xF6\u0B63\u0100ei\u2A4A\u2A4Ear;\u6928\xED\u0B98ist\u0100;s\u0BA0\u0B9Fr;\uC000\u{1D52B}\u0200Eest\u0BC5\u2A66\u2A79\u2A7C\u0180;qs\u0BBC\u2A6D\u0BE1\u0180;qs\u0BBC\u0BC5\u2A74lan\xF4\u0BE2i\xED\u0BEA\u0100;r\u0BB6\u2A81\xBB\u0BB7\u0180Aap\u2A8A\u2A8D\u2A91r\xF2\u2971rr;\u61AEar;\u6AF2\u0180;sv\u0F8D\u2A9C\u0F8C\u0100;d\u2AA1\u2AA2\u62FC;\u62FAcy;\u445A\u0380AEadest\u2AB7\u2ABA\u2ABE\u2AC2\u2AC5\u2AF6\u2AF9r\xF2\u2966;\uC000\u2266\u0338rr;\u619Ar;\u6025\u0200;fqs\u0C3B\u2ACE\u2AE3\u2AEFt\u0100ar\u2AD4\u2AD9rro\xF7\u2AC1ightarro\xF7\u2A90\u0180;qs\u0C3B\u2ABA\u2AEAlan\xF4\u0C55\u0100;s\u0C55\u2AF4\xBB\u0C36i\xED\u0C5D\u0100;r\u0C35\u2AFEi\u0100;e\u0C1A\u0C25i\xE4\u0D90\u0100pt\u2B0C\u2B11f;\uC000\u{1D55F}\u8180\xAC;in\u2B19\u2B1A\u2B36\u40ACn\u0200;Edv\u0B89\u2B24\u2B28\u2B2E;\uC000\u22F9\u0338ot;\uC000\u22F5\u0338\u01E1\u0B89\u2B33\u2B35;\u62F7;\u62F6i\u0100;v\u0CB8\u2B3C\u01E1\u0CB8\u2B41\u2B43;\u62FE;\u62FD\u0180aor\u2B4B\u2B63\u2B69r\u0200;ast\u0B7B\u2B55\u2B5A\u2B5Flle\xEC\u0B7Bl;\uC000\u2AFD\u20E5;\uC000\u2202\u0338lint;\u6A14\u0180;ce\u0C92\u2B70\u2B73u\xE5\u0CA5\u0100;c\u0C98\u2B78\u0100;e\u0C92\u2B7D\xF1\u0C98\u0200Aait\u2B88\u2B8B\u2B9D\u2BA7r\xF2\u2988rr\u0180;cw\u2B94\u2B95\u2B99\u619B;\uC000\u2933\u0338;\uC000\u219D\u0338ghtarrow\xBB\u2B95ri\u0100;e\u0CCB\u0CD6\u0380chimpqu\u2BBD\u2BCD\u2BD9\u2B04\u0B78\u2BE4\u2BEF\u0200;cer\u0D32\u2BC6\u0D37\u2BC9u\xE5\u0D45;\uC000\u{1D4C3}ort\u026D\u2B05\0\0\u2BD6ar\xE1\u2B56m\u0100;e\u0D6E\u2BDF\u0100;q\u0D74\u0D73su\u0100bp\u2BEB\u2BED\xE5\u0CF8\xE5\u0D0B\u0180bcp\u2BF6\u2C11\u2C19\u0200;Ees\u2BFF\u2C00\u0D22\u2C04\u6284;\uC000\u2AC5\u0338et\u0100;e\u0D1B\u2C0Bq\u0100;q\u0D23\u2C00c\u0100;e\u0D32\u2C17\xF1\u0D38\u0200;Ees\u2C22\u2C23\u0D5F\u2C27\u6285;\uC000\u2AC6\u0338et\u0100;e\u0D58\u2C2Eq\u0100;q\u0D60\u2C23\u0200gilr\u2C3D\u2C3F\u2C45\u2C47\xEC\u0BD7lde\u803B\xF1\u40F1\xE7\u0C43iangle\u0100lr\u2C52\u2C5Ceft\u0100;e\u0C1A\u2C5A\xF1\u0C26ight\u0100;e\u0CCB\u2C65\xF1\u0CD7\u0100;m\u2C6C\u2C6D\u43BD\u0180;es\u2C74\u2C75\u2C79\u4023ro;\u6116p;\u6007\u0480DHadgilrs\u2C8F\u2C94\u2C99\u2C9E\u2CA3\u2CB0\u2CB6\u2CD3\u2CE3ash;\u62ADarr;\u6904p;\uC000\u224D\u20D2ash;\u62AC\u0100et\u2CA8\u2CAC;\uC000\u2265\u20D2;\uC000>\u20D2nfin;\u69DE\u0180Aet\u2CBD\u2CC1\u2CC5rr;\u6902;\uC000\u2264\u20D2\u0100;r\u2CCA\u2CCD\uC000<\u20D2ie;\uC000\u22B4\u20D2\u0100At\u2CD8\u2CDCrr;\u6903rie;\uC000\u22B5\u20D2im;\uC000\u223C\u20D2\u0180Aan\u2CF0\u2CF4\u2D02rr;\u61D6r\u0100hr\u2CFA\u2CFDk;\u6923\u0100;o\u13E7\u13E5ear;\u6927\u1253\u1A95\0\0\0\0\0\0\0\0\0\0\0\0\0\u2D2D\0\u2D38\u2D48\u2D60\u2D65\u2D72\u2D84\u1B07\0\0\u2D8D\u2DAB\0\u2DC8\u2DCE\0\u2DDC\u2E19\u2E2B\u2E3E\u2E43\u0100cs\u2D31\u1A97ute\u803B\xF3\u40F3\u0100iy\u2D3C\u2D45r\u0100;c\u1A9E\u2D42\u803B\xF4\u40F4;\u443E\u0280abios\u1AA0\u2D52\u2D57\u01C8\u2D5Alac;\u4151v;\u6A38old;\u69BClig;\u4153\u0100cr\u2D69\u2D6Dir;\u69BF;\uC000\u{1D52C}\u036F\u2D79\0\0\u2D7C\0\u2D82n;\u42DBave\u803B\xF2\u40F2;\u69C1\u0100bm\u2D88\u0DF4ar;\u69B5\u0200acit\u2D95\u2D98\u2DA5\u2DA8r\xF2\u1A80\u0100ir\u2D9D\u2DA0r;\u69BEoss;\u69BBn\xE5\u0E52;\u69C0\u0180aei\u2DB1\u2DB5\u2DB9cr;\u414Dga;\u43C9\u0180cdn\u2DC0\u2DC5\u01CDron;\u43BF;\u69B6pf;\uC000\u{1D560}\u0180ael\u2DD4\u2DD7\u01D2r;\u69B7rp;\u69B9\u0380;adiosv\u2DEA\u2DEB\u2DEE\u2E08\u2E0D\u2E10\u2E16\u6228r\xF2\u1A86\u0200;efm\u2DF7\u2DF8\u2E02\u2E05\u6A5Dr\u0100;o\u2DFE\u2DFF\u6134f\xBB\u2DFF\u803B\xAA\u40AA\u803B\xBA\u40BAgof;\u62B6r;\u6A56lope;\u6A57;\u6A5B\u0180clo\u2E1F\u2E21\u2E27\xF2\u2E01ash\u803B\xF8\u40F8l;\u6298i\u016C\u2E2F\u2E34de\u803B\xF5\u40F5es\u0100;a\u01DB\u2E3As;\u6A36ml\u803B\xF6\u40F6bar;\u633D\u0AE1\u2E5E\0\u2E7D\0\u2E80\u2E9D\0\u2EA2\u2EB9\0\0\u2ECB\u0E9C\0\u2F13\0\0\u2F2B\u2FBC\0\u2FC8r\u0200;ast\u0403\u2E67\u2E72\u0E85\u8100\xB6;l\u2E6D\u2E6E\u40B6le\xEC\u0403\u0269\u2E78\0\0\u2E7Bm;\u6AF3;\u6AFDy;\u443Fr\u0280cimpt\u2E8B\u2E8F\u2E93\u1865\u2E97nt;\u4025od;\u402Eil;\u6030enk;\u6031r;\uC000\u{1D52D}\u0180imo\u2EA8\u2EB0\u2EB4\u0100;v\u2EAD\u2EAE\u43C6;\u43D5ma\xF4\u0A76ne;\u660E\u0180;tv\u2EBF\u2EC0\u2EC8\u43C0chfork\xBB\u1FFD;\u43D6\u0100au\u2ECF\u2EDFn\u0100ck\u2ED5\u2EDDk\u0100;h\u21F4\u2EDB;\u610E\xF6\u21F4s\u0480;abcdemst\u2EF3\u2EF4\u1908\u2EF9\u2EFD\u2F04\u2F06\u2F0A\u2F0E\u402Bcir;\u6A23ir;\u6A22\u0100ou\u1D40\u2F02;\u6A25;\u6A72n\u80BB\xB1\u0E9Dim;\u6A26wo;\u6A27\u0180ipu\u2F19\u2F20\u2F25ntint;\u6A15f;\uC000\u{1D561}nd\u803B\xA3\u40A3\u0500;Eaceinosu\u0EC8\u2F3F\u2F41\u2F44\u2F47\u2F81\u2F89\u2F92\u2F7E\u2FB6;\u6AB3p;\u6AB7u\xE5\u0ED9\u0100;c\u0ECE\u2F4C\u0300;acens\u0EC8\u2F59\u2F5F\u2F66\u2F68\u2F7Eppro\xF8\u2F43urlye\xF1\u0ED9\xF1\u0ECE\u0180aes\u2F6F\u2F76\u2F7Approx;\u6AB9qq;\u6AB5im;\u62E8i\xED\u0EDFme\u0100;s\u2F88\u0EAE\u6032\u0180Eas\u2F78\u2F90\u2F7A\xF0\u2F75\u0180dfp\u0EEC\u2F99\u2FAF\u0180als\u2FA0\u2FA5\u2FAAlar;\u632Eine;\u6312urf;\u6313\u0100;t\u0EFB\u2FB4\xEF\u0EFBrel;\u62B0\u0100ci\u2FC0\u2FC5r;\uC000\u{1D4C5};\u43C8ncsp;\u6008\u0300fiopsu\u2FDA\u22E2\u2FDF\u2FE5\u2FEB\u2FF1r;\uC000\u{1D52E}pf;\uC000\u{1D562}rime;\u6057cr;\uC000\u{1D4C6}\u0180aeo\u2FF8\u3009\u3013t\u0100ei\u2FFE\u3005rnion\xF3\u06B0nt;\u6A16st\u0100;e\u3010\u3011\u403F\xF1\u1F19\xF4\u0F14\u0A80ABHabcdefhilmnoprstux\u3040\u3051\u3055\u3059\u30E0\u310E\u312B\u3147\u3162\u3172\u318E\u3206\u3215\u3224\u3229\u3258\u326E\u3272\u3290\u32B0\u32B7\u0180art\u3047\u304A\u304Cr\xF2\u10B3\xF2\u03DDail;\u691Car\xF2\u1C65ar;\u6964\u0380cdenqrt\u3068\u3075\u3078\u307F\u308F\u3094\u30CC\u0100eu\u306D\u3071;\uC000\u223D\u0331te;\u4155i\xE3\u116Emptyv;\u69B3g\u0200;del\u0FD1\u3089\u308B\u308D;\u6992;\u69A5\xE5\u0FD1uo\u803B\xBB\u40BBr\u0580;abcfhlpstw\u0FDC\u30AC\u30AF\u30B7\u30B9\u30BC\u30BE\u30C0\u30C3\u30C7\u30CAp;\u6975\u0100;f\u0FE0\u30B4s;\u6920;\u6933s;\u691E\xEB\u225D\xF0\u272El;\u6945im;\u6974l;\u61A3;\u619D\u0100ai\u30D1\u30D5il;\u691Ao\u0100;n\u30DB\u30DC\u6236al\xF3\u0F1E\u0180abr\u30E7\u30EA\u30EEr\xF2\u17E5rk;\u6773\u0100ak\u30F3\u30FDc\u0100ek\u30F9\u30FB;\u407D;\u405D\u0100es\u3102\u3104;\u698Cl\u0100du\u310A\u310C;\u698E;\u6990\u0200aeuy\u3117\u311C\u3127\u3129ron;\u4159\u0100di\u3121\u3125il;\u4157\xEC\u0FF2\xE2\u30FA;\u4440\u0200clqs\u3134\u3137\u313D\u3144a;\u6937dhar;\u6969uo\u0100;r\u020E\u020Dh;\u61B3\u0180acg\u314E\u315F\u0F44l\u0200;ips\u0F78\u3158\u315B\u109Cn\xE5\u10BBar\xF4\u0FA9t;\u65AD\u0180ilr\u3169\u1023\u316Esht;\u697D;\uC000\u{1D52F}\u0100ao\u3177\u3186r\u0100du\u317D\u317F\xBB\u047B\u0100;l\u1091\u3184;\u696C\u0100;v\u318B\u318C\u43C1;\u43F1\u0180gns\u3195\u31F9\u31FCht\u0300ahlrst\u31A4\u31B0\u31C2\u31D8\u31E4\u31EErrow\u0100;t\u0FDC\u31ADa\xE9\u30C8arpoon\u0100du\u31BB\u31BFow\xEE\u317Ep\xBB\u1092eft\u0100ah\u31CA\u31D0rrow\xF3\u0FEAarpoon\xF3\u0551ightarrows;\u61C9quigarro\xF7\u30CBhreetimes;\u62CCg;\u42DAingdotse\xF1\u1F32\u0180ahm\u320D\u3210\u3213r\xF2\u0FEAa\xF2\u0551;\u600Foust\u0100;a\u321E\u321F\u63B1che\xBB\u321Fmid;\u6AEE\u0200abpt\u3232\u323D\u3240\u3252\u0100nr\u3237\u323Ag;\u67EDr;\u61FEr\xEB\u1003\u0180afl\u3247\u324A\u324Er;\u6986;\uC000\u{1D563}us;\u6A2Eimes;\u6A35\u0100ap\u325D\u3267r\u0100;g\u3263\u3264\u4029t;\u6994olint;\u6A12ar\xF2\u31E3\u0200achq\u327B\u3280\u10BC\u3285quo;\u603Ar;\uC000\u{1D4C7}\u0100bu\u30FB\u328Ao\u0100;r\u0214\u0213\u0180hir\u3297\u329B\u32A0re\xE5\u31F8mes;\u62CAi\u0200;efl\u32AA\u1059\u1821\u32AB\u65B9tri;\u69CEluhar;\u6968;\u611E\u0D61\u32D5\u32DB\u32DF\u332C\u3338\u3371\0\u337A\u33A4\0\0\u33EC\u33F0\0\u3428\u3448\u345A\u34AD\u34B1\u34CA\u34F1\0\u3616\0\0\u3633cute;\u415Bqu\xEF\u27BA\u0500;Eaceinpsy\u11ED\u32F3\u32F5\u32FF\u3302\u330B\u330F\u331F\u3326\u3329;\u6AB4\u01F0\u32FA\0\u32FC;\u6AB8on;\u4161u\xE5\u11FE\u0100;d\u11F3\u3307il;\u415Frc;\u415D\u0180Eas\u3316\u3318\u331B;\u6AB6p;\u6ABAim;\u62E9olint;\u6A13i\xED\u1204;\u4441ot\u0180;be\u3334\u1D47\u3335\u62C5;\u6A66\u0380Aacmstx\u3346\u334A\u3357\u335B\u335E\u3363\u336Drr;\u61D8r\u0100hr\u3350\u3352\xEB\u2228\u0100;o\u0A36\u0A34t\u803B\xA7\u40A7i;\u403Bwar;\u6929m\u0100in\u3369\xF0nu\xF3\xF1t;\u6736r\u0100;o\u3376\u2055\uC000\u{1D530}\u0200acoy\u3382\u3386\u3391\u33A0rp;\u666F\u0100hy\u338B\u338Fcy;\u4449;\u4448rt\u026D\u3399\0\0\u339Ci\xE4\u1464ara\xEC\u2E6F\u803B\xAD\u40AD\u0100gm\u33A8\u33B4ma\u0180;fv\u33B1\u33B2\u33B2\u43C3;\u43C2\u0400;deglnpr\u12AB\u33C5\u33C9\u33CE\u33D6\u33DE\u33E1\u33E6ot;\u6A6A\u0100;q\u12B1\u12B0\u0100;E\u33D3\u33D4\u6A9E;\u6AA0\u0100;E\u33DB\u33DC\u6A9D;\u6A9Fe;\u6246lus;\u6A24arr;\u6972ar\xF2\u113D\u0200aeit\u33F8\u3408\u340F\u3417\u0100ls\u33FD\u3404lsetm\xE9\u336Ahp;\u6A33parsl;\u69E4\u0100dl\u1463\u3414e;\u6323\u0100;e\u341C\u341D\u6AAA\u0100;s\u3422\u3423\u6AAC;\uC000\u2AAC\uFE00\u0180flp\u342E\u3433\u3442tcy;\u444C\u0100;b\u3438\u3439\u402F\u0100;a\u343E\u343F\u69C4r;\u633Ff;\uC000\u{1D564}a\u0100dr\u344D\u0402es\u0100;u\u3454\u3455\u6660it\xBB\u3455\u0180csu\u3460\u3479\u349F\u0100au\u3465\u346Fp\u0100;s\u1188\u346B;\uC000\u2293\uFE00p\u0100;s\u11B4\u3475;\uC000\u2294\uFE00u\u0100bp\u347F\u348F\u0180;es\u1197\u119C\u3486et\u0100;e\u1197\u348D\xF1\u119D\u0180;es\u11A8\u11AD\u3496et\u0100;e\u11A8\u349D\xF1\u11AE\u0180;af\u117B\u34A6\u05B0r\u0165\u34AB\u05B1\xBB\u117Car\xF2\u1148\u0200cemt\u34B9\u34BE\u34C2\u34C5r;\uC000\u{1D4C8}tm\xEE\xF1i\xEC\u3415ar\xE6\u11BE\u0100ar\u34CE\u34D5r\u0100;f\u34D4\u17BF\u6606\u0100an\u34DA\u34EDight\u0100ep\u34E3\u34EApsilo\xEE\u1EE0h\xE9\u2EAFs\xBB\u2852\u0280bcmnp\u34FB\u355E\u1209\u358B\u358E\u0480;Edemnprs\u350E\u350F\u3511\u3515\u351E\u3523\u352C\u3531\u3536\u6282;\u6AC5ot;\u6ABD\u0100;d\u11DA\u351Aot;\u6AC3ult;\u6AC1\u0100Ee\u3528\u352A;\u6ACB;\u628Alus;\u6ABFarr;\u6979\u0180eiu\u353D\u3552\u3555t\u0180;en\u350E\u3545\u354Bq\u0100;q\u11DA\u350Feq\u0100;q\u352B\u3528m;\u6AC7\u0100bp\u355A\u355C;\u6AD5;\u6AD3c\u0300;acens\u11ED\u356C\u3572\u3579\u357B\u3326ppro\xF8\u32FAurlye\xF1\u11FE\xF1\u11F3\u0180aes\u3582\u3588\u331Bppro\xF8\u331Aq\xF1\u3317g;\u666A\u0680123;Edehlmnps\u35A9\u35AC\u35AF\u121C\u35B2\u35B4\u35C0\u35C9\u35D5\u35DA\u35DF\u35E8\u35ED\u803B\xB9\u40B9\u803B\xB2\u40B2\u803B\xB3\u40B3;\u6AC6\u0100os\u35B9\u35BCt;\u6ABEub;\u6AD8\u0100;d\u1222\u35C5ot;\u6AC4s\u0100ou\u35CF\u35D2l;\u67C9b;\u6AD7arr;\u697Bult;\u6AC2\u0100Ee\u35E4\u35E6;\u6ACC;\u628Blus;\u6AC0\u0180eiu\u35F4\u3609\u360Ct\u0180;en\u121C\u35FC\u3602q\u0100;q\u1222\u35B2eq\u0100;q\u35E7\u35E4m;\u6AC8\u0100bp\u3611\u3613;\u6AD4;\u6AD6\u0180Aan\u361C\u3620\u362Drr;\u61D9r\u0100hr\u3626\u3628\xEB\u222E\u0100;o\u0A2B\u0A29war;\u692Alig\u803B\xDF\u40DF\u0BE1\u3651\u365D\u3660\u12CE\u3673\u3679\0\u367E\u36C2\0\0\0\0\0\u36DB\u3703\0\u3709\u376C\0\0\0\u3787\u0272\u3656\0\0\u365Bget;\u6316;\u43C4r\xEB\u0E5F\u0180aey\u3666\u366B\u3670ron;\u4165dil;\u4163;\u4442lrec;\u6315r;\uC000\u{1D531}\u0200eiko\u3686\u369D\u36B5\u36BC\u01F2\u368B\0\u3691e\u01004f\u1284\u1281a\u0180;sv\u3698\u3699\u369B\u43B8ym;\u43D1\u0100cn\u36A2\u36B2k\u0100as\u36A8\u36AEppro\xF8\u12C1im\xBB\u12ACs\xF0\u129E\u0100as\u36BA\u36AE\xF0\u12C1rn\u803B\xFE\u40FE\u01EC\u031F\u36C6\u22E7es\u8180\xD7;bd\u36CF\u36D0\u36D8\u40D7\u0100;a\u190F\u36D5r;\u6A31;\u6A30\u0180eps\u36E1\u36E3\u3700\xE1\u2A4D\u0200;bcf\u0486\u36EC\u36F0\u36F4ot;\u6336ir;\u6AF1\u0100;o\u36F9\u36FC\uC000\u{1D565}rk;\u6ADA\xE1\u3362rime;\u6034\u0180aip\u370F\u3712\u3764d\xE5\u1248\u0380adempst\u3721\u374D\u3740\u3751\u3757\u375C\u375Fngle\u0280;dlqr\u3730\u3731\u3736\u3740\u3742\u65B5own\xBB\u1DBBeft\u0100;e\u2800\u373E\xF1\u092E;\u625Cight\u0100;e\u32AA\u374B\xF1\u105Aot;\u65ECinus;\u6A3Alus;\u6A39b;\u69CDime;\u6A3Bezium;\u63E2\u0180cht\u3772\u377D\u3781\u0100ry\u3777\u377B;\uC000\u{1D4C9};\u4446cy;\u445Brok;\u4167\u0100io\u378B\u378Ex\xF4\u1777head\u0100lr\u3797\u37A0eftarro\xF7\u084Fightarrow\xBB\u0F5D\u0900AHabcdfghlmoprstuw\u37D0\u37D3\u37D7\u37E4\u37F0\u37FC\u380E\u381C\u3823\u3834\u3851\u385D\u386B\u38A9\u38CC\u38D2\u38EA\u38F6r\xF2\u03EDar;\u6963\u0100cr\u37DC\u37E2ute\u803B\xFA\u40FA\xF2\u1150r\u01E3\u37EA\0\u37EDy;\u445Eve;\u416D\u0100iy\u37F5\u37FArc\u803B\xFB\u40FB;\u4443\u0180abh\u3803\u3806\u380Br\xF2\u13ADlac;\u4171a\xF2\u13C3\u0100ir\u3813\u3818sht;\u697E;\uC000\u{1D532}rave\u803B\xF9\u40F9\u0161\u3827\u3831r\u0100lr\u382C\u382E\xBB\u0957\xBB\u1083lk;\u6580\u0100ct\u3839\u384D\u026F\u383F\0\0\u384Arn\u0100;e\u3845\u3846\u631Cr\xBB\u3846op;\u630Fri;\u65F8\u0100al\u3856\u385Acr;\u416B\u80BB\xA8\u0349\u0100gp\u3862\u3866on;\u4173f;\uC000\u{1D566}\u0300adhlsu\u114B\u3878\u387D\u1372\u3891\u38A0own\xE1\u13B3arpoon\u0100lr\u3888\u388Cef\xF4\u382Digh\xF4\u382Fi\u0180;hl\u3899\u389A\u389C\u43C5\xBB\u13FAon\xBB\u389Aparrows;\u61C8\u0180cit\u38B0\u38C4\u38C8\u026F\u38B6\0\0\u38C1rn\u0100;e\u38BC\u38BD\u631Dr\xBB\u38BDop;\u630Eng;\u416Fri;\u65F9cr;\uC000\u{1D4CA}\u0180dir\u38D9\u38DD\u38E2ot;\u62F0lde;\u4169i\u0100;f\u3730\u38E8\xBB\u1813\u0100am\u38EF\u38F2r\xF2\u38A8l\u803B\xFC\u40FCangle;\u69A7\u0780ABDacdeflnoprsz\u391C\u391F\u3929\u392D\u39B5\u39B8\u39BD\u39DF\u39E4\u39E8\u39F3\u39F9\u39FD\u3A01\u3A20r\xF2\u03F7ar\u0100;v\u3926\u3927\u6AE8;\u6AE9as\xE8\u03E1\u0100nr\u3932\u3937grt;\u699C\u0380eknprst\u34E3\u3946\u394B\u3952\u395D\u3964\u3996app\xE1\u2415othin\xE7\u1E96\u0180hir\u34EB\u2EC8\u3959op\xF4\u2FB5\u0100;h\u13B7\u3962\xEF\u318D\u0100iu\u3969\u396Dgm\xE1\u33B3\u0100bp\u3972\u3984setneq\u0100;q\u397D\u3980\uC000\u228A\uFE00;\uC000\u2ACB\uFE00setneq\u0100;q\u398F\u3992\uC000\u228B\uFE00;\uC000\u2ACC\uFE00\u0100hr\u399B\u399Fet\xE1\u369Ciangle\u0100lr\u39AA\u39AFeft\xBB\u0925ight\xBB\u1051y;\u4432ash\xBB\u1036\u0180elr\u39C4\u39D2\u39D7\u0180;be\u2DEA\u39CB\u39CFar;\u62BBq;\u625Alip;\u62EE\u0100bt\u39DC\u1468a\xF2\u1469r;\uC000\u{1D533}tr\xE9\u39AEsu\u0100bp\u39EF\u39F1\xBB\u0D1C\xBB\u0D59pf;\uC000\u{1D567}ro\xF0\u0EFBtr\xE9\u39B4\u0100cu\u3A06\u3A0Br;\uC000\u{1D4CB}\u0100bp\u3A10\u3A18n\u0100Ee\u3980\u3A16\xBB\u397En\u0100Ee\u3992\u3A1E\xBB\u3990igzag;\u699A\u0380cefoprs\u3A36\u3A3B\u3A56\u3A5B\u3A54\u3A61\u3A6Airc;\u4175\u0100di\u3A40\u3A51\u0100bg\u3A45\u3A49ar;\u6A5Fe\u0100;q\u15FA\u3A4F;\u6259erp;\u6118r;\uC000\u{1D534}pf;\uC000\u{1D568}\u0100;e\u1479\u3A66at\xE8\u1479cr;\uC000\u{1D4CC}\u0AE3\u178E\u3A87\0\u3A8B\0\u3A90\u3A9B\0\0\u3A9D\u3AA8\u3AAB\u3AAF\0\0\u3AC3\u3ACE\0\u3AD8\u17DC\u17DFtr\xE9\u17D1r;\uC000\u{1D535}\u0100Aa\u3A94\u3A97r\xF2\u03C3r\xF2\u09F6;\u43BE\u0100Aa\u3AA1\u3AA4r\xF2\u03B8r\xF2\u09EBa\xF0\u2713is;\u62FB\u0180dpt\u17A4\u3AB5\u3ABE\u0100fl\u3ABA\u17A9;\uC000\u{1D569}im\xE5\u17B2\u0100Aa\u3AC7\u3ACAr\xF2\u03CEr\xF2\u0A01\u0100cq\u3AD2\u17B8r;\uC000\u{1D4CD}\u0100pt\u17D6\u3ADCr\xE9\u17D4\u0400acefiosu\u3AF0\u3AFD\u3B08\u3B0C\u3B11\u3B15\u3B1B\u3B21c\u0100uy\u3AF6\u3AFBte\u803B\xFD\u40FD;\u444F\u0100iy\u3B02\u3B06rc;\u4177;\u444Bn\u803B\xA5\u40A5r;\uC000\u{1D536}cy;\u4457pf;\uC000\u{1D56A}cr;\uC000\u{1D4CE}\u0100cm\u3B26\u3B29y;\u444El\u803B\xFF\u40FF\u0500acdefhiosw\u3B42\u3B48\u3B54\u3B58\u3B64\u3B69\u3B6D\u3B74\u3B7A\u3B80cute;\u417A\u0100ay\u3B4D\u3B52ron;\u417E;\u4437ot;\u417C\u0100et\u3B5D\u3B61tr\xE6\u155Fa;\u43B6r;\uC000\u{1D537}cy;\u4436grarr;\u61DDpf;\uC000\u{1D56B}cr;\uC000\u{1D4CF}\u0100jn\u3B85\u3B87;\u600Dj;\u600C'.split("").map((c2) => c2.charCodeAt(0))
    );
  }
});

// node_modules/entities/lib/esm/generated/decode-data-xml.js
var decode_data_xml_default;
var init_decode_data_xml = __esm({
  "node_modules/entities/lib/esm/generated/decode-data-xml.js"() {
    decode_data_xml_default = new Uint16Array(
      // prettier-ignore
      "\u0200aglq	\x1B\u026D\0\0p;\u4026os;\u4027t;\u403Et;\u403Cuot;\u4022".split("").map((c2) => c2.charCodeAt(0))
    );
  }
});

// node_modules/entities/lib/esm/decode_codepoint.js
function replaceCodePoint(codePoint) {
  var _a3;
  if (codePoint >= 55296 && codePoint <= 57343 || codePoint > 1114111) {
    return 65533;
  }
  return (_a3 = decodeMap.get(codePoint)) !== null && _a3 !== void 0 ? _a3 : codePoint;
}
var _a, decodeMap, fromCodePoint;
var init_decode_codepoint = __esm({
  "node_modules/entities/lib/esm/decode_codepoint.js"() {
    decodeMap = /* @__PURE__ */ new Map([
      [0, 65533],
      // C1 Unicode control character reference replacements
      [128, 8364],
      [130, 8218],
      [131, 402],
      [132, 8222],
      [133, 8230],
      [134, 8224],
      [135, 8225],
      [136, 710],
      [137, 8240],
      [138, 352],
      [139, 8249],
      [140, 338],
      [142, 381],
      [145, 8216],
      [146, 8217],
      [147, 8220],
      [148, 8221],
      [149, 8226],
      [150, 8211],
      [151, 8212],
      [152, 732],
      [153, 8482],
      [154, 353],
      [155, 8250],
      [156, 339],
      [158, 382],
      [159, 376]
    ]);
    fromCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition, node/no-unsupported-features/es-builtins
    (_a = String.fromCodePoint) !== null && _a !== void 0 ? _a : function(codePoint) {
      let output = "";
      if (codePoint > 65535) {
        codePoint -= 65536;
        output += String.fromCharCode(codePoint >>> 10 & 1023 | 55296);
        codePoint = 56320 | codePoint & 1023;
      }
      output += String.fromCharCode(codePoint);
      return output;
    };
  }
});

// node_modules/entities/lib/esm/decode.js
function isNumber(code) {
  return code >= CharCodes.ZERO && code <= CharCodes.NINE;
}
function isHexadecimalCharacter(code) {
  return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_F || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_F;
}
function isAsciiAlphaNumeric(code) {
  return code >= CharCodes.UPPER_A && code <= CharCodes.UPPER_Z || code >= CharCodes.LOWER_A && code <= CharCodes.LOWER_Z || isNumber(code);
}
function isEntityInAttributeInvalidEnd(code) {
  return code === CharCodes.EQUALS || isAsciiAlphaNumeric(code);
}
function getDecoder(decodeTree) {
  let ret = "";
  const decoder2 = new EntityDecoder(decodeTree, (str) => ret += fromCodePoint(str));
  return function decodeWithTrie(str, decodeMode) {
    let lastIndex = 0;
    let offset = 0;
    while ((offset = str.indexOf("&", offset)) >= 0) {
      ret += str.slice(lastIndex, offset);
      decoder2.startEntity(decodeMode);
      const len = decoder2.write(
        str,
        // Skip the "&"
        offset + 1
      );
      if (len < 0) {
        lastIndex = offset + decoder2.end();
        break;
      }
      lastIndex = offset + len;
      offset = len === 0 ? lastIndex + 1 : lastIndex;
    }
    const result = ret + str.slice(lastIndex);
    ret = "";
    return result;
  };
}
function determineBranch(decodeTree, current, nodeIdx, char) {
  const branchCount = (current & BinTrieFlags.BRANCH_LENGTH) >> 7;
  const jumpOffset = current & BinTrieFlags.JUMP_TABLE;
  if (branchCount === 0) {
    return jumpOffset !== 0 && char === jumpOffset ? nodeIdx : -1;
  }
  if (jumpOffset) {
    const value = char - jumpOffset;
    return value < 0 || value >= branchCount ? -1 : decodeTree[nodeIdx + value] - 1;
  }
  let lo2 = nodeIdx;
  let hi3 = lo2 + branchCount - 1;
  while (lo2 <= hi3) {
    const mid = lo2 + hi3 >>> 1;
    const midVal = decodeTree[mid];
    if (midVal < char) {
      lo2 = mid + 1;
    } else if (midVal > char) {
      hi3 = mid - 1;
    } else {
      return decodeTree[mid + branchCount];
    }
  }
  return -1;
}
var CharCodes, TO_LOWER_BIT, BinTrieFlags, EntityDecoderState, DecodingMode, EntityDecoder, htmlDecoder, xmlDecoder;
var init_decode = __esm({
  "node_modules/entities/lib/esm/decode.js"() {
    init_decode_data_html();
    init_decode_data_xml();
    init_decode_codepoint();
    init_decode_codepoint();
    (function(CharCodes3) {
      CharCodes3[CharCodes3["NUM"] = 35] = "NUM";
      CharCodes3[CharCodes3["SEMI"] = 59] = "SEMI";
      CharCodes3[CharCodes3["EQUALS"] = 61] = "EQUALS";
      CharCodes3[CharCodes3["ZERO"] = 48] = "ZERO";
      CharCodes3[CharCodes3["NINE"] = 57] = "NINE";
      CharCodes3[CharCodes3["LOWER_A"] = 97] = "LOWER_A";
      CharCodes3[CharCodes3["LOWER_F"] = 102] = "LOWER_F";
      CharCodes3[CharCodes3["LOWER_X"] = 120] = "LOWER_X";
      CharCodes3[CharCodes3["LOWER_Z"] = 122] = "LOWER_Z";
      CharCodes3[CharCodes3["UPPER_A"] = 65] = "UPPER_A";
      CharCodes3[CharCodes3["UPPER_F"] = 70] = "UPPER_F";
      CharCodes3[CharCodes3["UPPER_Z"] = 90] = "UPPER_Z";
    })(CharCodes || (CharCodes = {}));
    TO_LOWER_BIT = 32;
    (function(BinTrieFlags2) {
      BinTrieFlags2[BinTrieFlags2["VALUE_LENGTH"] = 49152] = "VALUE_LENGTH";
      BinTrieFlags2[BinTrieFlags2["BRANCH_LENGTH"] = 16256] = "BRANCH_LENGTH";
      BinTrieFlags2[BinTrieFlags2["JUMP_TABLE"] = 127] = "JUMP_TABLE";
    })(BinTrieFlags || (BinTrieFlags = {}));
    (function(EntityDecoderState2) {
      EntityDecoderState2[EntityDecoderState2["EntityStart"] = 0] = "EntityStart";
      EntityDecoderState2[EntityDecoderState2["NumericStart"] = 1] = "NumericStart";
      EntityDecoderState2[EntityDecoderState2["NumericDecimal"] = 2] = "NumericDecimal";
      EntityDecoderState2[EntityDecoderState2["NumericHex"] = 3] = "NumericHex";
      EntityDecoderState2[EntityDecoderState2["NamedEntity"] = 4] = "NamedEntity";
    })(EntityDecoderState || (EntityDecoderState = {}));
    (function(DecodingMode2) {
      DecodingMode2[DecodingMode2["Legacy"] = 0] = "Legacy";
      DecodingMode2[DecodingMode2["Strict"] = 1] = "Strict";
      DecodingMode2[DecodingMode2["Attribute"] = 2] = "Attribute";
    })(DecodingMode || (DecodingMode = {}));
    EntityDecoder = class {
      constructor(decodeTree, emitCodePoint, errors) {
        this.decodeTree = decodeTree;
        this.emitCodePoint = emitCodePoint;
        this.errors = errors;
        this.state = EntityDecoderState.EntityStart;
        this.consumed = 1;
        this.result = 0;
        this.treeIndex = 0;
        this.excess = 1;
        this.decodeMode = DecodingMode.Strict;
      }
      /** Resets the instance to make it reusable. */
      startEntity(decodeMode) {
        this.decodeMode = decodeMode;
        this.state = EntityDecoderState.EntityStart;
        this.result = 0;
        this.treeIndex = 0;
        this.excess = 1;
        this.consumed = 1;
      }
      /**
       * Write an entity to the decoder. This can be called multiple times with partial entities.
       * If the entity is incomplete, the decoder will return -1.
       *
       * Mirrors the implementation of `getDecoder`, but with the ability to stop decoding if the
       * entity is incomplete, and resume when the next string is written.
       *
       * @param string The string containing the entity (or a continuation of the entity).
       * @param offset The offset at which the entity begins. Should be 0 if this is not the first call.
       * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
       */
      write(str, offset) {
        switch (this.state) {
          case EntityDecoderState.EntityStart: {
            if (str.charCodeAt(offset) === CharCodes.NUM) {
              this.state = EntityDecoderState.NumericStart;
              this.consumed += 1;
              return this.stateNumericStart(str, offset + 1);
            }
            this.state = EntityDecoderState.NamedEntity;
            return this.stateNamedEntity(str, offset);
          }
          case EntityDecoderState.NumericStart: {
            return this.stateNumericStart(str, offset);
          }
          case EntityDecoderState.NumericDecimal: {
            return this.stateNumericDecimal(str, offset);
          }
          case EntityDecoderState.NumericHex: {
            return this.stateNumericHex(str, offset);
          }
          case EntityDecoderState.NamedEntity: {
            return this.stateNamedEntity(str, offset);
          }
        }
      }
      /**
       * Switches between the numeric decimal and hexadecimal states.
       *
       * Equivalent to the `Numeric character reference state` in the HTML spec.
       *
       * @param str The string containing the entity (or a continuation of the entity).
       * @param offset The current offset.
       * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
       */
      stateNumericStart(str, offset) {
        if (offset >= str.length) {
          return -1;
        }
        if ((str.charCodeAt(offset) | TO_LOWER_BIT) === CharCodes.LOWER_X) {
          this.state = EntityDecoderState.NumericHex;
          this.consumed += 1;
          return this.stateNumericHex(str, offset + 1);
        }
        this.state = EntityDecoderState.NumericDecimal;
        return this.stateNumericDecimal(str, offset);
      }
      addToNumericResult(str, start, end, base) {
        if (start !== end) {
          const digitCount = end - start;
          this.result = this.result * Math.pow(base, digitCount) + parseInt(str.substr(start, digitCount), base);
          this.consumed += digitCount;
        }
      }
      /**
       * Parses a hexadecimal numeric entity.
       *
       * Equivalent to the `Hexademical character reference state` in the HTML spec.
       *
       * @param str The string containing the entity (or a continuation of the entity).
       * @param offset The current offset.
       * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
       */
      stateNumericHex(str, offset) {
        const startIdx = offset;
        while (offset < str.length) {
          const char = str.charCodeAt(offset);
          if (isNumber(char) || isHexadecimalCharacter(char)) {
            offset += 1;
          } else {
            this.addToNumericResult(str, startIdx, offset, 16);
            return this.emitNumericEntity(char, 3);
          }
        }
        this.addToNumericResult(str, startIdx, offset, 16);
        return -1;
      }
      /**
       * Parses a decimal numeric entity.
       *
       * Equivalent to the `Decimal character reference state` in the HTML spec.
       *
       * @param str The string containing the entity (or a continuation of the entity).
       * @param offset The current offset.
       * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
       */
      stateNumericDecimal(str, offset) {
        const startIdx = offset;
        while (offset < str.length) {
          const char = str.charCodeAt(offset);
          if (isNumber(char)) {
            offset += 1;
          } else {
            this.addToNumericResult(str, startIdx, offset, 10);
            return this.emitNumericEntity(char, 2);
          }
        }
        this.addToNumericResult(str, startIdx, offset, 10);
        return -1;
      }
      /**
       * Validate and emit a numeric entity.
       *
       * Implements the logic from the `Hexademical character reference start
       * state` and `Numeric character reference end state` in the HTML spec.
       *
       * @param lastCp The last code point of the entity. Used to see if the
       *               entity was terminated with a semicolon.
       * @param expectedLength The minimum number of characters that should be
       *                       consumed. Used to validate that at least one digit
       *                       was consumed.
       * @returns The number of characters that were consumed.
       */
      emitNumericEntity(lastCp, expectedLength) {
        var _a3;
        if (this.consumed <= expectedLength) {
          (_a3 = this.errors) === null || _a3 === void 0 ? void 0 : _a3.absenceOfDigitsInNumericCharacterReference(this.consumed);
          return 0;
        }
        if (lastCp === CharCodes.SEMI) {
          this.consumed += 1;
        } else if (this.decodeMode === DecodingMode.Strict) {
          return 0;
        }
        this.emitCodePoint(replaceCodePoint(this.result), this.consumed);
        if (this.errors) {
          if (lastCp !== CharCodes.SEMI) {
            this.errors.missingSemicolonAfterCharacterReference();
          }
          this.errors.validateNumericCharacterReference(this.result);
        }
        return this.consumed;
      }
      /**
       * Parses a named entity.
       *
       * Equivalent to the `Named character reference state` in the HTML spec.
       *
       * @param str The string containing the entity (or a continuation of the entity).
       * @param offset The current offset.
       * @returns The number of characters that were consumed, or -1 if the entity is incomplete.
       */
      stateNamedEntity(str, offset) {
        const { decodeTree } = this;
        let current = decodeTree[this.treeIndex];
        let valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
        for (; offset < str.length; offset++, this.excess++) {
          const char = str.charCodeAt(offset);
          this.treeIndex = determineBranch(decodeTree, current, this.treeIndex + Math.max(1, valueLength), char);
          if (this.treeIndex < 0) {
            return this.result === 0 || // If we are parsing an attribute
            this.decodeMode === DecodingMode.Attribute && // We shouldn't have consumed any characters after the entity,
            (valueLength === 0 || // And there should be no invalid characters.
            isEntityInAttributeInvalidEnd(char)) ? 0 : this.emitNotTerminatedNamedEntity();
          }
          current = decodeTree[this.treeIndex];
          valueLength = (current & BinTrieFlags.VALUE_LENGTH) >> 14;
          if (valueLength !== 0) {
            if (char === CharCodes.SEMI) {
              return this.emitNamedEntityData(this.treeIndex, valueLength, this.consumed + this.excess);
            }
            if (this.decodeMode !== DecodingMode.Strict) {
              this.result = this.treeIndex;
              this.consumed += this.excess;
              this.excess = 0;
            }
          }
        }
        return -1;
      }
      /**
       * Emit a named entity that was not terminated with a semicolon.
       *
       * @returns The number of characters consumed.
       */
      emitNotTerminatedNamedEntity() {
        var _a3;
        const { result, decodeTree } = this;
        const valueLength = (decodeTree[result] & BinTrieFlags.VALUE_LENGTH) >> 14;
        this.emitNamedEntityData(result, valueLength, this.consumed);
        (_a3 = this.errors) === null || _a3 === void 0 ? void 0 : _a3.missingSemicolonAfterCharacterReference();
        return this.consumed;
      }
      /**
       * Emit a named entity.
       *
       * @param result The index of the entity in the decode tree.
       * @param valueLength The number of bytes in the entity.
       * @param consumed The number of characters consumed.
       *
       * @returns The number of characters consumed.
       */
      emitNamedEntityData(result, valueLength, consumed) {
        const { decodeTree } = this;
        this.emitCodePoint(valueLength === 1 ? decodeTree[result] & ~BinTrieFlags.VALUE_LENGTH : decodeTree[result + 1], consumed);
        if (valueLength === 3) {
          this.emitCodePoint(decodeTree[result + 2], consumed);
        }
        return consumed;
      }
      /**
       * Signal to the parser that the end of the input was reached.
       *
       * Remaining data will be emitted and relevant errors will be produced.
       *
       * @returns The number of characters consumed.
       */
      end() {
        var _a3;
        switch (this.state) {
          case EntityDecoderState.NamedEntity: {
            return this.result !== 0 && (this.decodeMode !== DecodingMode.Attribute || this.result === this.treeIndex) ? this.emitNotTerminatedNamedEntity() : 0;
          }
          // Otherwise, emit a numeric entity if we have one.
          case EntityDecoderState.NumericDecimal: {
            return this.emitNumericEntity(0, 2);
          }
          case EntityDecoderState.NumericHex: {
            return this.emitNumericEntity(0, 3);
          }
          case EntityDecoderState.NumericStart: {
            (_a3 = this.errors) === null || _a3 === void 0 ? void 0 : _a3.absenceOfDigitsInNumericCharacterReference(this.consumed);
            return 0;
          }
          case EntityDecoderState.EntityStart: {
            return 0;
          }
        }
      }
    };
    htmlDecoder = getDecoder(decode_data_html_default);
    xmlDecoder = getDecoder(decode_data_xml_default);
  }
});

// node_modules/htmlparser2/lib/esm/Tokenizer.js
function isWhitespace(c2) {
  return c2 === CharCodes2.Space || c2 === CharCodes2.NewLine || c2 === CharCodes2.Tab || c2 === CharCodes2.FormFeed || c2 === CharCodes2.CarriageReturn;
}
function isEndOfTagSection(c2) {
  return c2 === CharCodes2.Slash || c2 === CharCodes2.Gt || isWhitespace(c2);
}
function isNumber2(c2) {
  return c2 >= CharCodes2.Zero && c2 <= CharCodes2.Nine;
}
function isASCIIAlpha(c2) {
  return c2 >= CharCodes2.LowerA && c2 <= CharCodes2.LowerZ || c2 >= CharCodes2.UpperA && c2 <= CharCodes2.UpperZ;
}
function isHexDigit(c2) {
  return c2 >= CharCodes2.UpperA && c2 <= CharCodes2.UpperF || c2 >= CharCodes2.LowerA && c2 <= CharCodes2.LowerF;
}
var CharCodes2, State, QuoteType, Sequences, Tokenizer;
var init_Tokenizer = __esm({
  "node_modules/htmlparser2/lib/esm/Tokenizer.js"() {
    init_decode();
    (function(CharCodes3) {
      CharCodes3[CharCodes3["Tab"] = 9] = "Tab";
      CharCodes3[CharCodes3["NewLine"] = 10] = "NewLine";
      CharCodes3[CharCodes3["FormFeed"] = 12] = "FormFeed";
      CharCodes3[CharCodes3["CarriageReturn"] = 13] = "CarriageReturn";
      CharCodes3[CharCodes3["Space"] = 32] = "Space";
      CharCodes3[CharCodes3["ExclamationMark"] = 33] = "ExclamationMark";
      CharCodes3[CharCodes3["Number"] = 35] = "Number";
      CharCodes3[CharCodes3["Amp"] = 38] = "Amp";
      CharCodes3[CharCodes3["SingleQuote"] = 39] = "SingleQuote";
      CharCodes3[CharCodes3["DoubleQuote"] = 34] = "DoubleQuote";
      CharCodes3[CharCodes3["Dash"] = 45] = "Dash";
      CharCodes3[CharCodes3["Slash"] = 47] = "Slash";
      CharCodes3[CharCodes3["Zero"] = 48] = "Zero";
      CharCodes3[CharCodes3["Nine"] = 57] = "Nine";
      CharCodes3[CharCodes3["Semi"] = 59] = "Semi";
      CharCodes3[CharCodes3["Lt"] = 60] = "Lt";
      CharCodes3[CharCodes3["Eq"] = 61] = "Eq";
      CharCodes3[CharCodes3["Gt"] = 62] = "Gt";
      CharCodes3[CharCodes3["Questionmark"] = 63] = "Questionmark";
      CharCodes3[CharCodes3["UpperA"] = 65] = "UpperA";
      CharCodes3[CharCodes3["LowerA"] = 97] = "LowerA";
      CharCodes3[CharCodes3["UpperF"] = 70] = "UpperF";
      CharCodes3[CharCodes3["LowerF"] = 102] = "LowerF";
      CharCodes3[CharCodes3["UpperZ"] = 90] = "UpperZ";
      CharCodes3[CharCodes3["LowerZ"] = 122] = "LowerZ";
      CharCodes3[CharCodes3["LowerX"] = 120] = "LowerX";
      CharCodes3[CharCodes3["OpeningSquareBracket"] = 91] = "OpeningSquareBracket";
    })(CharCodes2 || (CharCodes2 = {}));
    (function(State2) {
      State2[State2["Text"] = 1] = "Text";
      State2[State2["BeforeTagName"] = 2] = "BeforeTagName";
      State2[State2["InTagName"] = 3] = "InTagName";
      State2[State2["InSelfClosingTag"] = 4] = "InSelfClosingTag";
      State2[State2["BeforeClosingTagName"] = 5] = "BeforeClosingTagName";
      State2[State2["InClosingTagName"] = 6] = "InClosingTagName";
      State2[State2["AfterClosingTagName"] = 7] = "AfterClosingTagName";
      State2[State2["BeforeAttributeName"] = 8] = "BeforeAttributeName";
      State2[State2["InAttributeName"] = 9] = "InAttributeName";
      State2[State2["AfterAttributeName"] = 10] = "AfterAttributeName";
      State2[State2["BeforeAttributeValue"] = 11] = "BeforeAttributeValue";
      State2[State2["InAttributeValueDq"] = 12] = "InAttributeValueDq";
      State2[State2["InAttributeValueSq"] = 13] = "InAttributeValueSq";
      State2[State2["InAttributeValueNq"] = 14] = "InAttributeValueNq";
      State2[State2["BeforeDeclaration"] = 15] = "BeforeDeclaration";
      State2[State2["InDeclaration"] = 16] = "InDeclaration";
      State2[State2["InProcessingInstruction"] = 17] = "InProcessingInstruction";
      State2[State2["BeforeComment"] = 18] = "BeforeComment";
      State2[State2["CDATASequence"] = 19] = "CDATASequence";
      State2[State2["InSpecialComment"] = 20] = "InSpecialComment";
      State2[State2["InCommentLike"] = 21] = "InCommentLike";
      State2[State2["BeforeSpecialS"] = 22] = "BeforeSpecialS";
      State2[State2["SpecialStartSequence"] = 23] = "SpecialStartSequence";
      State2[State2["InSpecialTag"] = 24] = "InSpecialTag";
      State2[State2["BeforeEntity"] = 25] = "BeforeEntity";
      State2[State2["BeforeNumericEntity"] = 26] = "BeforeNumericEntity";
      State2[State2["InNamedEntity"] = 27] = "InNamedEntity";
      State2[State2["InNumericEntity"] = 28] = "InNumericEntity";
      State2[State2["InHexEntity"] = 29] = "InHexEntity";
    })(State || (State = {}));
    (function(QuoteType2) {
      QuoteType2[QuoteType2["NoValue"] = 0] = "NoValue";
      QuoteType2[QuoteType2["Unquoted"] = 1] = "Unquoted";
      QuoteType2[QuoteType2["Single"] = 2] = "Single";
      QuoteType2[QuoteType2["Double"] = 3] = "Double";
    })(QuoteType || (QuoteType = {}));
    Sequences = {
      Cdata: new Uint8Array([67, 68, 65, 84, 65, 91]),
      CdataEnd: new Uint8Array([93, 93, 62]),
      CommentEnd: new Uint8Array([45, 45, 62]),
      ScriptEnd: new Uint8Array([60, 47, 115, 99, 114, 105, 112, 116]),
      StyleEnd: new Uint8Array([60, 47, 115, 116, 121, 108, 101]),
      TitleEnd: new Uint8Array([60, 47, 116, 105, 116, 108, 101])
      // `</title`
    };
    Tokenizer = class {
      constructor({ xmlMode = false, decodeEntities = true }, cbs) {
        this.cbs = cbs;
        this.state = State.Text;
        this.buffer = "";
        this.sectionStart = 0;
        this.index = 0;
        this.baseState = State.Text;
        this.isSpecial = false;
        this.running = true;
        this.offset = 0;
        this.currentSequence = void 0;
        this.sequenceIndex = 0;
        this.trieIndex = 0;
        this.trieCurrent = 0;
        this.entityResult = 0;
        this.entityExcess = 0;
        this.xmlMode = xmlMode;
        this.decodeEntities = decodeEntities;
        this.entityTrie = xmlMode ? decode_data_xml_default : decode_data_html_default;
      }
      reset() {
        this.state = State.Text;
        this.buffer = "";
        this.sectionStart = 0;
        this.index = 0;
        this.baseState = State.Text;
        this.currentSequence = void 0;
        this.running = true;
        this.offset = 0;
      }
      write(chunk) {
        this.offset += this.buffer.length;
        this.buffer = chunk;
        this.parse();
      }
      end() {
        if (this.running)
          this.finish();
      }
      pause() {
        this.running = false;
      }
      resume() {
        this.running = true;
        if (this.index < this.buffer.length + this.offset) {
          this.parse();
        }
      }
      /**
       * The current index within all of the written data.
       */
      getIndex() {
        return this.index;
      }
      /**
       * The start of the current section.
       */
      getSectionStart() {
        return this.sectionStart;
      }
      stateText(c2) {
        if (c2 === CharCodes2.Lt || !this.decodeEntities && this.fastForwardTo(CharCodes2.Lt)) {
          if (this.index > this.sectionStart) {
            this.cbs.ontext(this.sectionStart, this.index);
          }
          this.state = State.BeforeTagName;
          this.sectionStart = this.index;
        } else if (this.decodeEntities && c2 === CharCodes2.Amp) {
          this.state = State.BeforeEntity;
        }
      }
      stateSpecialStartSequence(c2) {
        const isEnd = this.sequenceIndex === this.currentSequence.length;
        const isMatch = isEnd ? (
          // If we are at the end of the sequence, make sure the tag name has ended
          isEndOfTagSection(c2)
        ) : (
          // Otherwise, do a case-insensitive comparison
          (c2 | 32) === this.currentSequence[this.sequenceIndex]
        );
        if (!isMatch) {
          this.isSpecial = false;
        } else if (!isEnd) {
          this.sequenceIndex++;
          return;
        }
        this.sequenceIndex = 0;
        this.state = State.InTagName;
        this.stateInTagName(c2);
      }
      /** Look for an end tag. For <title> tags, also decode entities. */
      stateInSpecialTag(c2) {
        if (this.sequenceIndex === this.currentSequence.length) {
          if (c2 === CharCodes2.Gt || isWhitespace(c2)) {
            const endOfText = this.index - this.currentSequence.length;
            if (this.sectionStart < endOfText) {
              const actualIndex = this.index;
              this.index = endOfText;
              this.cbs.ontext(this.sectionStart, endOfText);
              this.index = actualIndex;
            }
            this.isSpecial = false;
            this.sectionStart = endOfText + 2;
            this.stateInClosingTagName(c2);
            return;
          }
          this.sequenceIndex = 0;
        }
        if ((c2 | 32) === this.currentSequence[this.sequenceIndex]) {
          this.sequenceIndex += 1;
        } else if (this.sequenceIndex === 0) {
          if (this.currentSequence === Sequences.TitleEnd) {
            if (this.decodeEntities && c2 === CharCodes2.Amp) {
              this.state = State.BeforeEntity;
            }
          } else if (this.fastForwardTo(CharCodes2.Lt)) {
            this.sequenceIndex = 1;
          }
        } else {
          this.sequenceIndex = Number(c2 === CharCodes2.Lt);
        }
      }
      stateCDATASequence(c2) {
        if (c2 === Sequences.Cdata[this.sequenceIndex]) {
          if (++this.sequenceIndex === Sequences.Cdata.length) {
            this.state = State.InCommentLike;
            this.currentSequence = Sequences.CdataEnd;
            this.sequenceIndex = 0;
            this.sectionStart = this.index + 1;
          }
        } else {
          this.sequenceIndex = 0;
          this.state = State.InDeclaration;
          this.stateInDeclaration(c2);
        }
      }
      /**
       * When we wait for one specific character, we can speed things up
       * by skipping through the buffer until we find it.
       *
       * @returns Whether the character was found.
       */
      fastForwardTo(c2) {
        while (++this.index < this.buffer.length + this.offset) {
          if (this.buffer.charCodeAt(this.index - this.offset) === c2) {
            return true;
          }
        }
        this.index = this.buffer.length + this.offset - 1;
        return false;
      }
      /**
       * Comments and CDATA end with `-->` and `]]>`.
       *
       * Their common qualities are:
       * - Their end sequences have a distinct character they start with.
       * - That character is then repeated, so we have to check multiple repeats.
       * - All characters but the start character of the sequence can be skipped.
       */
      stateInCommentLike(c2) {
        if (c2 === this.currentSequence[this.sequenceIndex]) {
          if (++this.sequenceIndex === this.currentSequence.length) {
            if (this.currentSequence === Sequences.CdataEnd) {
              this.cbs.oncdata(this.sectionStart, this.index, 2);
            } else {
              this.cbs.oncomment(this.sectionStart, this.index, 2);
            }
            this.sequenceIndex = 0;
            this.sectionStart = this.index + 1;
            this.state = State.Text;
          }
        } else if (this.sequenceIndex === 0) {
          if (this.fastForwardTo(this.currentSequence[0])) {
            this.sequenceIndex = 1;
          }
        } else if (c2 !== this.currentSequence[this.sequenceIndex - 1]) {
          this.sequenceIndex = 0;
        }
      }
      /**
       * HTML only allows ASCII alpha characters (a-z and A-Z) at the beginning of a tag name.
       *
       * XML allows a lot more characters here (@see https://www.w3.org/TR/REC-xml/#NT-NameStartChar).
       * We allow anything that wouldn't end the tag.
       */
      isTagStartChar(c2) {
        return this.xmlMode ? !isEndOfTagSection(c2) : isASCIIAlpha(c2);
      }
      startSpecial(sequence, offset) {
        this.isSpecial = true;
        this.currentSequence = sequence;
        this.sequenceIndex = offset;
        this.state = State.SpecialStartSequence;
      }
      stateBeforeTagName(c2) {
        if (c2 === CharCodes2.ExclamationMark) {
          this.state = State.BeforeDeclaration;
          this.sectionStart = this.index + 1;
        } else if (c2 === CharCodes2.Questionmark) {
          this.state = State.InProcessingInstruction;
          this.sectionStart = this.index + 1;
        } else if (this.isTagStartChar(c2)) {
          const lower = c2 | 32;
          this.sectionStart = this.index;
          if (!this.xmlMode && lower === Sequences.TitleEnd[2]) {
            this.startSpecial(Sequences.TitleEnd, 3);
          } else {
            this.state = !this.xmlMode && lower === Sequences.ScriptEnd[2] ? State.BeforeSpecialS : State.InTagName;
          }
        } else if (c2 === CharCodes2.Slash) {
          this.state = State.BeforeClosingTagName;
        } else {
          this.state = State.Text;
          this.stateText(c2);
        }
      }
      stateInTagName(c2) {
        if (isEndOfTagSection(c2)) {
          this.cbs.onopentagname(this.sectionStart, this.index);
          this.sectionStart = -1;
          this.state = State.BeforeAttributeName;
          this.stateBeforeAttributeName(c2);
        }
      }
      stateBeforeClosingTagName(c2) {
        if (isWhitespace(c2)) {
        } else if (c2 === CharCodes2.Gt) {
          this.state = State.Text;
        } else {
          this.state = this.isTagStartChar(c2) ? State.InClosingTagName : State.InSpecialComment;
          this.sectionStart = this.index;
        }
      }
      stateInClosingTagName(c2) {
        if (c2 === CharCodes2.Gt || isWhitespace(c2)) {
          this.cbs.onclosetag(this.sectionStart, this.index);
          this.sectionStart = -1;
          this.state = State.AfterClosingTagName;
          this.stateAfterClosingTagName(c2);
        }
      }
      stateAfterClosingTagName(c2) {
        if (c2 === CharCodes2.Gt || this.fastForwardTo(CharCodes2.Gt)) {
          this.state = State.Text;
          this.baseState = State.Text;
          this.sectionStart = this.index + 1;
        }
      }
      stateBeforeAttributeName(c2) {
        if (c2 === CharCodes2.Gt) {
          this.cbs.onopentagend(this.index);
          if (this.isSpecial) {
            this.state = State.InSpecialTag;
            this.sequenceIndex = 0;
          } else {
            this.state = State.Text;
          }
          this.baseState = this.state;
          this.sectionStart = this.index + 1;
        } else if (c2 === CharCodes2.Slash) {
          this.state = State.InSelfClosingTag;
        } else if (!isWhitespace(c2)) {
          this.state = State.InAttributeName;
          this.sectionStart = this.index;
        }
      }
      stateInSelfClosingTag(c2) {
        if (c2 === CharCodes2.Gt) {
          this.cbs.onselfclosingtag(this.index);
          this.state = State.Text;
          this.baseState = State.Text;
          this.sectionStart = this.index + 1;
          this.isSpecial = false;
        } else if (!isWhitespace(c2)) {
          this.state = State.BeforeAttributeName;
          this.stateBeforeAttributeName(c2);
        }
      }
      stateInAttributeName(c2) {
        if (c2 === CharCodes2.Eq || isEndOfTagSection(c2)) {
          this.cbs.onattribname(this.sectionStart, this.index);
          this.sectionStart = -1;
          this.state = State.AfterAttributeName;
          this.stateAfterAttributeName(c2);
        }
      }
      stateAfterAttributeName(c2) {
        if (c2 === CharCodes2.Eq) {
          this.state = State.BeforeAttributeValue;
        } else if (c2 === CharCodes2.Slash || c2 === CharCodes2.Gt) {
          this.cbs.onattribend(QuoteType.NoValue, this.index);
          this.state = State.BeforeAttributeName;
          this.stateBeforeAttributeName(c2);
        } else if (!isWhitespace(c2)) {
          this.cbs.onattribend(QuoteType.NoValue, this.index);
          this.state = State.InAttributeName;
          this.sectionStart = this.index;
        }
      }
      stateBeforeAttributeValue(c2) {
        if (c2 === CharCodes2.DoubleQuote) {
          this.state = State.InAttributeValueDq;
          this.sectionStart = this.index + 1;
        } else if (c2 === CharCodes2.SingleQuote) {
          this.state = State.InAttributeValueSq;
          this.sectionStart = this.index + 1;
        } else if (!isWhitespace(c2)) {
          this.sectionStart = this.index;
          this.state = State.InAttributeValueNq;
          this.stateInAttributeValueNoQuotes(c2);
        }
      }
      handleInAttributeValue(c2, quote) {
        if (c2 === quote || !this.decodeEntities && this.fastForwardTo(quote)) {
          this.cbs.onattribdata(this.sectionStart, this.index);
          this.sectionStart = -1;
          this.cbs.onattribend(quote === CharCodes2.DoubleQuote ? QuoteType.Double : QuoteType.Single, this.index);
          this.state = State.BeforeAttributeName;
        } else if (this.decodeEntities && c2 === CharCodes2.Amp) {
          this.baseState = this.state;
          this.state = State.BeforeEntity;
        }
      }
      stateInAttributeValueDoubleQuotes(c2) {
        this.handleInAttributeValue(c2, CharCodes2.DoubleQuote);
      }
      stateInAttributeValueSingleQuotes(c2) {
        this.handleInAttributeValue(c2, CharCodes2.SingleQuote);
      }
      stateInAttributeValueNoQuotes(c2) {
        if (isWhitespace(c2) || c2 === CharCodes2.Gt) {
          this.cbs.onattribdata(this.sectionStart, this.index);
          this.sectionStart = -1;
          this.cbs.onattribend(QuoteType.Unquoted, this.index);
          this.state = State.BeforeAttributeName;
          this.stateBeforeAttributeName(c2);
        } else if (this.decodeEntities && c2 === CharCodes2.Amp) {
          this.baseState = this.state;
          this.state = State.BeforeEntity;
        }
      }
      stateBeforeDeclaration(c2) {
        if (c2 === CharCodes2.OpeningSquareBracket) {
          this.state = State.CDATASequence;
          this.sequenceIndex = 0;
        } else {
          this.state = c2 === CharCodes2.Dash ? State.BeforeComment : State.InDeclaration;
        }
      }
      stateInDeclaration(c2) {
        if (c2 === CharCodes2.Gt || this.fastForwardTo(CharCodes2.Gt)) {
          this.cbs.ondeclaration(this.sectionStart, this.index);
          this.state = State.Text;
          this.sectionStart = this.index + 1;
        }
      }
      stateInProcessingInstruction(c2) {
        if (c2 === CharCodes2.Gt || this.fastForwardTo(CharCodes2.Gt)) {
          this.cbs.onprocessinginstruction(this.sectionStart, this.index);
          this.state = State.Text;
          this.sectionStart = this.index + 1;
        }
      }
      stateBeforeComment(c2) {
        if (c2 === CharCodes2.Dash) {
          this.state = State.InCommentLike;
          this.currentSequence = Sequences.CommentEnd;
          this.sequenceIndex = 2;
          this.sectionStart = this.index + 1;
        } else {
          this.state = State.InDeclaration;
        }
      }
      stateInSpecialComment(c2) {
        if (c2 === CharCodes2.Gt || this.fastForwardTo(CharCodes2.Gt)) {
          this.cbs.oncomment(this.sectionStart, this.index, 0);
          this.state = State.Text;
          this.sectionStart = this.index + 1;
        }
      }
      stateBeforeSpecialS(c2) {
        const lower = c2 | 32;
        if (lower === Sequences.ScriptEnd[3]) {
          this.startSpecial(Sequences.ScriptEnd, 4);
        } else if (lower === Sequences.StyleEnd[3]) {
          this.startSpecial(Sequences.StyleEnd, 4);
        } else {
          this.state = State.InTagName;
          this.stateInTagName(c2);
        }
      }
      stateBeforeEntity(c2) {
        this.entityExcess = 1;
        this.entityResult = 0;
        if (c2 === CharCodes2.Number) {
          this.state = State.BeforeNumericEntity;
        } else if (c2 === CharCodes2.Amp) {
        } else {
          this.trieIndex = 0;
          this.trieCurrent = this.entityTrie[0];
          this.state = State.InNamedEntity;
          this.stateInNamedEntity(c2);
        }
      }
      stateInNamedEntity(c2) {
        this.entityExcess += 1;
        this.trieIndex = determineBranch(this.entityTrie, this.trieCurrent, this.trieIndex + 1, c2);
        if (this.trieIndex < 0) {
          this.emitNamedEntity();
          this.index--;
          return;
        }
        this.trieCurrent = this.entityTrie[this.trieIndex];
        const masked = this.trieCurrent & BinTrieFlags.VALUE_LENGTH;
        if (masked) {
          const valueLength = (masked >> 14) - 1;
          if (!this.allowLegacyEntity() && c2 !== CharCodes2.Semi) {
            this.trieIndex += valueLength;
          } else {
            const entityStart = this.index - this.entityExcess + 1;
            if (entityStart > this.sectionStart) {
              this.emitPartial(this.sectionStart, entityStart);
            }
            this.entityResult = this.trieIndex;
            this.trieIndex += valueLength;
            this.entityExcess = 0;
            this.sectionStart = this.index + 1;
            if (valueLength === 0) {
              this.emitNamedEntity();
            }
          }
        }
      }
      emitNamedEntity() {
        this.state = this.baseState;
        if (this.entityResult === 0) {
          return;
        }
        const valueLength = (this.entityTrie[this.entityResult] & BinTrieFlags.VALUE_LENGTH) >> 14;
        switch (valueLength) {
          case 1: {
            this.emitCodePoint(this.entityTrie[this.entityResult] & ~BinTrieFlags.VALUE_LENGTH);
            break;
          }
          case 2: {
            this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
            break;
          }
          case 3: {
            this.emitCodePoint(this.entityTrie[this.entityResult + 1]);
            this.emitCodePoint(this.entityTrie[this.entityResult + 2]);
          }
        }
      }
      stateBeforeNumericEntity(c2) {
        if ((c2 | 32) === CharCodes2.LowerX) {
          this.entityExcess++;
          this.state = State.InHexEntity;
        } else {
          this.state = State.InNumericEntity;
          this.stateInNumericEntity(c2);
        }
      }
      emitNumericEntity(strict) {
        const entityStart = this.index - this.entityExcess - 1;
        const numberStart = entityStart + 2 + Number(this.state === State.InHexEntity);
        if (numberStart !== this.index) {
          if (entityStart > this.sectionStart) {
            this.emitPartial(this.sectionStart, entityStart);
          }
          this.sectionStart = this.index + Number(strict);
          this.emitCodePoint(replaceCodePoint(this.entityResult));
        }
        this.state = this.baseState;
      }
      stateInNumericEntity(c2) {
        if (c2 === CharCodes2.Semi) {
          this.emitNumericEntity(true);
        } else if (isNumber2(c2)) {
          this.entityResult = this.entityResult * 10 + (c2 - CharCodes2.Zero);
          this.entityExcess++;
        } else {
          if (this.allowLegacyEntity()) {
            this.emitNumericEntity(false);
          } else {
            this.state = this.baseState;
          }
          this.index--;
        }
      }
      stateInHexEntity(c2) {
        if (c2 === CharCodes2.Semi) {
          this.emitNumericEntity(true);
        } else if (isNumber2(c2)) {
          this.entityResult = this.entityResult * 16 + (c2 - CharCodes2.Zero);
          this.entityExcess++;
        } else if (isHexDigit(c2)) {
          this.entityResult = this.entityResult * 16 + ((c2 | 32) - CharCodes2.LowerA + 10);
          this.entityExcess++;
        } else {
          if (this.allowLegacyEntity()) {
            this.emitNumericEntity(false);
          } else {
            this.state = this.baseState;
          }
          this.index--;
        }
      }
      allowLegacyEntity() {
        return !this.xmlMode && (this.baseState === State.Text || this.baseState === State.InSpecialTag);
      }
      /**
       * Remove data that has already been consumed from the buffer.
       */
      cleanup() {
        if (this.running && this.sectionStart !== this.index) {
          if (this.state === State.Text || this.state === State.InSpecialTag && this.sequenceIndex === 0) {
            this.cbs.ontext(this.sectionStart, this.index);
            this.sectionStart = this.index;
          } else if (this.state === State.InAttributeValueDq || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueNq) {
            this.cbs.onattribdata(this.sectionStart, this.index);
            this.sectionStart = this.index;
          }
        }
      }
      shouldContinue() {
        return this.index < this.buffer.length + this.offset && this.running;
      }
      /**
       * Iterates through the buffer, calling the function corresponding to the current state.
       *
       * States that are more likely to be hit are higher up, as a performance improvement.
       */
      parse() {
        while (this.shouldContinue()) {
          const c2 = this.buffer.charCodeAt(this.index - this.offset);
          switch (this.state) {
            case State.Text: {
              this.stateText(c2);
              break;
            }
            case State.SpecialStartSequence: {
              this.stateSpecialStartSequence(c2);
              break;
            }
            case State.InSpecialTag: {
              this.stateInSpecialTag(c2);
              break;
            }
            case State.CDATASequence: {
              this.stateCDATASequence(c2);
              break;
            }
            case State.InAttributeValueDq: {
              this.stateInAttributeValueDoubleQuotes(c2);
              break;
            }
            case State.InAttributeName: {
              this.stateInAttributeName(c2);
              break;
            }
            case State.InCommentLike: {
              this.stateInCommentLike(c2);
              break;
            }
            case State.InSpecialComment: {
              this.stateInSpecialComment(c2);
              break;
            }
            case State.BeforeAttributeName: {
              this.stateBeforeAttributeName(c2);
              break;
            }
            case State.InTagName: {
              this.stateInTagName(c2);
              break;
            }
            case State.InClosingTagName: {
              this.stateInClosingTagName(c2);
              break;
            }
            case State.BeforeTagName: {
              this.stateBeforeTagName(c2);
              break;
            }
            case State.AfterAttributeName: {
              this.stateAfterAttributeName(c2);
              break;
            }
            case State.InAttributeValueSq: {
              this.stateInAttributeValueSingleQuotes(c2);
              break;
            }
            case State.BeforeAttributeValue: {
              this.stateBeforeAttributeValue(c2);
              break;
            }
            case State.BeforeClosingTagName: {
              this.stateBeforeClosingTagName(c2);
              break;
            }
            case State.AfterClosingTagName: {
              this.stateAfterClosingTagName(c2);
              break;
            }
            case State.BeforeSpecialS: {
              this.stateBeforeSpecialS(c2);
              break;
            }
            case State.InAttributeValueNq: {
              this.stateInAttributeValueNoQuotes(c2);
              break;
            }
            case State.InSelfClosingTag: {
              this.stateInSelfClosingTag(c2);
              break;
            }
            case State.InDeclaration: {
              this.stateInDeclaration(c2);
              break;
            }
            case State.BeforeDeclaration: {
              this.stateBeforeDeclaration(c2);
              break;
            }
            case State.BeforeComment: {
              this.stateBeforeComment(c2);
              break;
            }
            case State.InProcessingInstruction: {
              this.stateInProcessingInstruction(c2);
              break;
            }
            case State.InNamedEntity: {
              this.stateInNamedEntity(c2);
              break;
            }
            case State.BeforeEntity: {
              this.stateBeforeEntity(c2);
              break;
            }
            case State.InHexEntity: {
              this.stateInHexEntity(c2);
              break;
            }
            case State.InNumericEntity: {
              this.stateInNumericEntity(c2);
              break;
            }
            default: {
              this.stateBeforeNumericEntity(c2);
            }
          }
          this.index++;
        }
        this.cleanup();
      }
      finish() {
        if (this.state === State.InNamedEntity) {
          this.emitNamedEntity();
        }
        if (this.sectionStart < this.index) {
          this.handleTrailingData();
        }
        this.cbs.onend();
      }
      /** Handle any trailing data. */
      handleTrailingData() {
        const endIndex = this.buffer.length + this.offset;
        if (this.state === State.InCommentLike) {
          if (this.currentSequence === Sequences.CdataEnd) {
            this.cbs.oncdata(this.sectionStart, endIndex, 0);
          } else {
            this.cbs.oncomment(this.sectionStart, endIndex, 0);
          }
        } else if (this.state === State.InNumericEntity && this.allowLegacyEntity()) {
          this.emitNumericEntity(false);
        } else if (this.state === State.InHexEntity && this.allowLegacyEntity()) {
          this.emitNumericEntity(false);
        } else if (this.state === State.InTagName || this.state === State.BeforeAttributeName || this.state === State.BeforeAttributeValue || this.state === State.AfterAttributeName || this.state === State.InAttributeName || this.state === State.InAttributeValueSq || this.state === State.InAttributeValueDq || this.state === State.InAttributeValueNq || this.state === State.InClosingTagName) {
        } else {
          this.cbs.ontext(this.sectionStart, endIndex);
        }
      }
      emitPartial(start, endIndex) {
        if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) {
          this.cbs.onattribdata(start, endIndex);
        } else {
          this.cbs.ontext(start, endIndex);
        }
      }
      emitCodePoint(cp) {
        if (this.baseState !== State.Text && this.baseState !== State.InSpecialTag) {
          this.cbs.onattribentity(cp);
        } else {
          this.cbs.ontextentity(cp);
        }
      }
    };
  }
});

// node_modules/htmlparser2/lib/esm/Parser.js
var formTags, pTag, tableSectionTags, ddtTags, rtpTags, openImpliesClose, voidElements, foreignContextElements, htmlIntegrationElements, reNameEnd, Parser;
var init_Parser = __esm({
  "node_modules/htmlparser2/lib/esm/Parser.js"() {
    init_Tokenizer();
    init_decode();
    formTags = /* @__PURE__ */ new Set([
      "input",
      "option",
      "optgroup",
      "select",
      "button",
      "datalist",
      "textarea"
    ]);
    pTag = /* @__PURE__ */ new Set(["p"]);
    tableSectionTags = /* @__PURE__ */ new Set(["thead", "tbody"]);
    ddtTags = /* @__PURE__ */ new Set(["dd", "dt"]);
    rtpTags = /* @__PURE__ */ new Set(["rt", "rp"]);
    openImpliesClose = /* @__PURE__ */ new Map([
      ["tr", /* @__PURE__ */ new Set(["tr", "th", "td"])],
      ["th", /* @__PURE__ */ new Set(["th"])],
      ["td", /* @__PURE__ */ new Set(["thead", "th", "td"])],
      ["body", /* @__PURE__ */ new Set(["head", "link", "script"])],
      ["li", /* @__PURE__ */ new Set(["li"])],
      ["p", pTag],
      ["h1", pTag],
      ["h2", pTag],
      ["h3", pTag],
      ["h4", pTag],
      ["h5", pTag],
      ["h6", pTag],
      ["select", formTags],
      ["input", formTags],
      ["output", formTags],
      ["button", formTags],
      ["datalist", formTags],
      ["textarea", formTags],
      ["option", /* @__PURE__ */ new Set(["option"])],
      ["optgroup", /* @__PURE__ */ new Set(["optgroup", "option"])],
      ["dd", ddtTags],
      ["dt", ddtTags],
      ["address", pTag],
      ["article", pTag],
      ["aside", pTag],
      ["blockquote", pTag],
      ["details", pTag],
      ["div", pTag],
      ["dl", pTag],
      ["fieldset", pTag],
      ["figcaption", pTag],
      ["figure", pTag],
      ["footer", pTag],
      ["form", pTag],
      ["header", pTag],
      ["hr", pTag],
      ["main", pTag],
      ["nav", pTag],
      ["ol", pTag],
      ["pre", pTag],
      ["section", pTag],
      ["table", pTag],
      ["ul", pTag],
      ["rt", rtpTags],
      ["rp", rtpTags],
      ["tbody", tableSectionTags],
      ["tfoot", tableSectionTags]
    ]);
    voidElements = /* @__PURE__ */ new Set([
      "area",
      "base",
      "basefont",
      "br",
      "col",
      "command",
      "embed",
      "frame",
      "hr",
      "img",
      "input",
      "isindex",
      "keygen",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr"
    ]);
    foreignContextElements = /* @__PURE__ */ new Set(["math", "svg"]);
    htmlIntegrationElements = /* @__PURE__ */ new Set([
      "mi",
      "mo",
      "mn",
      "ms",
      "mtext",
      "annotation-xml",
      "foreignobject",
      "desc",
      "title"
    ]);
    reNameEnd = /\s|\//;
    Parser = class {
      constructor(cbs, options = {}) {
        var _a3, _b, _c, _d, _e3;
        this.options = options;
        this.startIndex = 0;
        this.endIndex = 0;
        this.openTagStart = 0;
        this.tagname = "";
        this.attribname = "";
        this.attribvalue = "";
        this.attribs = null;
        this.stack = [];
        this.foreignContext = [];
        this.buffers = [];
        this.bufferOffset = 0;
        this.writeIndex = 0;
        this.ended = false;
        this.cbs = cbs !== null && cbs !== void 0 ? cbs : {};
        this.lowerCaseTagNames = (_a3 = options.lowerCaseTags) !== null && _a3 !== void 0 ? _a3 : !options.xmlMode;
        this.lowerCaseAttributeNames = (_b = options.lowerCaseAttributeNames) !== null && _b !== void 0 ? _b : !options.xmlMode;
        this.tokenizer = new ((_c = options.Tokenizer) !== null && _c !== void 0 ? _c : Tokenizer)(this.options, this);
        (_e3 = (_d = this.cbs).onparserinit) === null || _e3 === void 0 ? void 0 : _e3.call(_d, this);
      }
      // Tokenizer event handlers
      /** @internal */
      ontext(start, endIndex) {
        var _a3, _b;
        const data = this.getSlice(start, endIndex);
        this.endIndex = endIndex - 1;
        (_b = (_a3 = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a3, data);
        this.startIndex = endIndex;
      }
      /** @internal */
      ontextentity(cp) {
        var _a3, _b;
        const index = this.tokenizer.getSectionStart();
        this.endIndex = index - 1;
        (_b = (_a3 = this.cbs).ontext) === null || _b === void 0 ? void 0 : _b.call(_a3, fromCodePoint(cp));
        this.startIndex = index;
      }
      isVoidElement(name2) {
        return !this.options.xmlMode && voidElements.has(name2);
      }
      /** @internal */
      onopentagname(start, endIndex) {
        this.endIndex = endIndex;
        let name2 = this.getSlice(start, endIndex);
        if (this.lowerCaseTagNames) {
          name2 = name2.toLowerCase();
        }
        this.emitOpenTag(name2);
      }
      emitOpenTag(name2) {
        var _a3, _b, _c, _d;
        this.openTagStart = this.startIndex;
        this.tagname = name2;
        const impliesClose = !this.options.xmlMode && openImpliesClose.get(name2);
        if (impliesClose) {
          while (this.stack.length > 0 && impliesClose.has(this.stack[this.stack.length - 1])) {
            const element = this.stack.pop();
            (_b = (_a3 = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a3, element, true);
          }
        }
        if (!this.isVoidElement(name2)) {
          this.stack.push(name2);
          if (foreignContextElements.has(name2)) {
            this.foreignContext.push(true);
          } else if (htmlIntegrationElements.has(name2)) {
            this.foreignContext.push(false);
          }
        }
        (_d = (_c = this.cbs).onopentagname) === null || _d === void 0 ? void 0 : _d.call(_c, name2);
        if (this.cbs.onopentag)
          this.attribs = {};
      }
      endOpenTag(isImplied) {
        var _a3, _b;
        this.startIndex = this.openTagStart;
        if (this.attribs) {
          (_b = (_a3 = this.cbs).onopentag) === null || _b === void 0 ? void 0 : _b.call(_a3, this.tagname, this.attribs, isImplied);
          this.attribs = null;
        }
        if (this.cbs.onclosetag && this.isVoidElement(this.tagname)) {
          this.cbs.onclosetag(this.tagname, true);
        }
        this.tagname = "";
      }
      /** @internal */
      onopentagend(endIndex) {
        this.endIndex = endIndex;
        this.endOpenTag(false);
        this.startIndex = endIndex + 1;
      }
      /** @internal */
      onclosetag(start, endIndex) {
        var _a3, _b, _c, _d, _e3, _f;
        this.endIndex = endIndex;
        let name2 = this.getSlice(start, endIndex);
        if (this.lowerCaseTagNames) {
          name2 = name2.toLowerCase();
        }
        if (foreignContextElements.has(name2) || htmlIntegrationElements.has(name2)) {
          this.foreignContext.pop();
        }
        if (!this.isVoidElement(name2)) {
          const pos = this.stack.lastIndexOf(name2);
          if (pos !== -1) {
            if (this.cbs.onclosetag) {
              let count = this.stack.length - pos;
              while (count--) {
                this.cbs.onclosetag(this.stack.pop(), count !== 0);
              }
            } else
              this.stack.length = pos;
          } else if (!this.options.xmlMode && name2 === "p") {
            this.emitOpenTag("p");
            this.closeCurrentTag(true);
          }
        } else if (!this.options.xmlMode && name2 === "br") {
          (_b = (_a3 = this.cbs).onopentagname) === null || _b === void 0 ? void 0 : _b.call(_a3, "br");
          (_d = (_c = this.cbs).onopentag) === null || _d === void 0 ? void 0 : _d.call(_c, "br", {}, true);
          (_f = (_e3 = this.cbs).onclosetag) === null || _f === void 0 ? void 0 : _f.call(_e3, "br", false);
        }
        this.startIndex = endIndex + 1;
      }
      /** @internal */
      onselfclosingtag(endIndex) {
        this.endIndex = endIndex;
        if (this.options.xmlMode || this.options.recognizeSelfClosing || this.foreignContext[this.foreignContext.length - 1]) {
          this.closeCurrentTag(false);
          this.startIndex = endIndex + 1;
        } else {
          this.onopentagend(endIndex);
        }
      }
      closeCurrentTag(isOpenImplied) {
        var _a3, _b;
        const name2 = this.tagname;
        this.endOpenTag(isOpenImplied);
        if (this.stack[this.stack.length - 1] === name2) {
          (_b = (_a3 = this.cbs).onclosetag) === null || _b === void 0 ? void 0 : _b.call(_a3, name2, !isOpenImplied);
          this.stack.pop();
        }
      }
      /** @internal */
      onattribname(start, endIndex) {
        this.startIndex = start;
        const name2 = this.getSlice(start, endIndex);
        this.attribname = this.lowerCaseAttributeNames ? name2.toLowerCase() : name2;
      }
      /** @internal */
      onattribdata(start, endIndex) {
        this.attribvalue += this.getSlice(start, endIndex);
      }
      /** @internal */
      onattribentity(cp) {
        this.attribvalue += fromCodePoint(cp);
      }
      /** @internal */
      onattribend(quote, endIndex) {
        var _a3, _b;
        this.endIndex = endIndex;
        (_b = (_a3 = this.cbs).onattribute) === null || _b === void 0 ? void 0 : _b.call(_a3, this.attribname, this.attribvalue, quote === QuoteType.Double ? '"' : quote === QuoteType.Single ? "'" : quote === QuoteType.NoValue ? void 0 : null);
        if (this.attribs && !Object.prototype.hasOwnProperty.call(this.attribs, this.attribname)) {
          this.attribs[this.attribname] = this.attribvalue;
        }
        this.attribvalue = "";
      }
      getInstructionName(value) {
        const index = value.search(reNameEnd);
        let name2 = index < 0 ? value : value.substr(0, index);
        if (this.lowerCaseTagNames) {
          name2 = name2.toLowerCase();
        }
        return name2;
      }
      /** @internal */
      ondeclaration(start, endIndex) {
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex);
        if (this.cbs.onprocessinginstruction) {
          const name2 = this.getInstructionName(value);
          this.cbs.onprocessinginstruction(`!${name2}`, `!${value}`);
        }
        this.startIndex = endIndex + 1;
      }
      /** @internal */
      onprocessinginstruction(start, endIndex) {
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex);
        if (this.cbs.onprocessinginstruction) {
          const name2 = this.getInstructionName(value);
          this.cbs.onprocessinginstruction(`?${name2}`, `?${value}`);
        }
        this.startIndex = endIndex + 1;
      }
      /** @internal */
      oncomment(start, endIndex, offset) {
        var _a3, _b, _c, _d;
        this.endIndex = endIndex;
        (_b = (_a3 = this.cbs).oncomment) === null || _b === void 0 ? void 0 : _b.call(_a3, this.getSlice(start, endIndex - offset));
        (_d = (_c = this.cbs).oncommentend) === null || _d === void 0 ? void 0 : _d.call(_c);
        this.startIndex = endIndex + 1;
      }
      /** @internal */
      oncdata(start, endIndex, offset) {
        var _a3, _b, _c, _d, _e3, _f, _g, _h, _j, _k;
        this.endIndex = endIndex;
        const value = this.getSlice(start, endIndex - offset);
        if (this.options.xmlMode || this.options.recognizeCDATA) {
          (_b = (_a3 = this.cbs).oncdatastart) === null || _b === void 0 ? void 0 : _b.call(_a3);
          (_d = (_c = this.cbs).ontext) === null || _d === void 0 ? void 0 : _d.call(_c, value);
          (_f = (_e3 = this.cbs).oncdataend) === null || _f === void 0 ? void 0 : _f.call(_e3);
        } else {
          (_h = (_g = this.cbs).oncomment) === null || _h === void 0 ? void 0 : _h.call(_g, `[CDATA[${value}]]`);
          (_k = (_j = this.cbs).oncommentend) === null || _k === void 0 ? void 0 : _k.call(_j);
        }
        this.startIndex = endIndex + 1;
      }
      /** @internal */
      onend() {
        var _a3, _b;
        if (this.cbs.onclosetag) {
          this.endIndex = this.startIndex;
          for (let index = this.stack.length; index > 0; this.cbs.onclosetag(this.stack[--index], true))
            ;
        }
        (_b = (_a3 = this.cbs).onend) === null || _b === void 0 ? void 0 : _b.call(_a3);
      }
      /**
       * Resets the parser to a blank state, ready to parse a new HTML document
       */
      reset() {
        var _a3, _b, _c, _d;
        (_b = (_a3 = this.cbs).onreset) === null || _b === void 0 ? void 0 : _b.call(_a3);
        this.tokenizer.reset();
        this.tagname = "";
        this.attribname = "";
        this.attribs = null;
        this.stack.length = 0;
        this.startIndex = 0;
        this.endIndex = 0;
        (_d = (_c = this.cbs).onparserinit) === null || _d === void 0 ? void 0 : _d.call(_c, this);
        this.buffers.length = 0;
        this.bufferOffset = 0;
        this.writeIndex = 0;
        this.ended = false;
      }
      /**
       * Resets the parser, then parses a complete document and
       * pushes it to the handler.
       *
       * @param data Document to parse.
       */
      parseComplete(data) {
        this.reset();
        this.end(data);
      }
      getSlice(start, end) {
        while (start - this.bufferOffset >= this.buffers[0].length) {
          this.shiftBuffer();
        }
        let slice = this.buffers[0].slice(start - this.bufferOffset, end - this.bufferOffset);
        while (end - this.bufferOffset > this.buffers[0].length) {
          this.shiftBuffer();
          slice += this.buffers[0].slice(0, end - this.bufferOffset);
        }
        return slice;
      }
      shiftBuffer() {
        this.bufferOffset += this.buffers[0].length;
        this.writeIndex--;
        this.buffers.shift();
      }
      /**
       * Parses a chunk of data and calls the corresponding callbacks.
       *
       * @param chunk Chunk to parse.
       */
      write(chunk) {
        var _a3, _b;
        if (this.ended) {
          (_b = (_a3 = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a3, new Error(".write() after done!"));
          return;
        }
        this.buffers.push(chunk);
        if (this.tokenizer.running) {
          this.tokenizer.write(chunk);
          this.writeIndex++;
        }
      }
      /**
       * Parses the end of the buffer and clears the stack, calls onend.
       *
       * @param chunk Optional final chunk to parse.
       */
      end(chunk) {
        var _a3, _b;
        if (this.ended) {
          (_b = (_a3 = this.cbs).onerror) === null || _b === void 0 ? void 0 : _b.call(_a3, new Error(".end() after done!"));
          return;
        }
        if (chunk)
          this.write(chunk);
        this.ended = true;
        this.tokenizer.end();
      }
      /**
       * Pauses parsing. The parser won't emit events until `resume` is called.
       */
      pause() {
        this.tokenizer.pause();
      }
      /**
       * Resumes parsing after `pause` was called.
       */
      resume() {
        this.tokenizer.resume();
        while (this.tokenizer.running && this.writeIndex < this.buffers.length) {
          this.tokenizer.write(this.buffers[this.writeIndex++]);
        }
        if (this.ended)
          this.tokenizer.end();
      }
      /**
       * Alias of `write`, for backwards compatibility.
       *
       * @param chunk Chunk to parse.
       * @deprecated
       */
      parseChunk(chunk) {
        this.write(chunk);
      }
      /**
       * Alias of `end`, for backwards compatibility.
       *
       * @param chunk Optional final chunk to parse.
       * @deprecated
       */
      done(chunk) {
        this.end(chunk);
      }
    };
  }
});

// node_modules/entities/lib/esm/generated/encode-html.js
function restoreDiff(arr) {
  for (let i = 1; i < arr.length; i++) {
    arr[i][0] += arr[i - 1][0] + 1;
  }
  return arr;
}
var encode_html_default;
var init_encode_html = __esm({
  "node_modules/entities/lib/esm/generated/encode-html.js"() {
    encode_html_default = new Map(/* @__PURE__ */ restoreDiff([[9, "&Tab;"], [0, "&NewLine;"], [22, "&excl;"], [0, "&quot;"], [0, "&num;"], [0, "&dollar;"], [0, "&percnt;"], [0, "&amp;"], [0, "&apos;"], [0, "&lpar;"], [0, "&rpar;"], [0, "&ast;"], [0, "&plus;"], [0, "&comma;"], [1, "&period;"], [0, "&sol;"], [10, "&colon;"], [0, "&semi;"], [0, { v: "&lt;", n: 8402, o: "&nvlt;" }], [0, { v: "&equals;", n: 8421, o: "&bne;" }], [0, { v: "&gt;", n: 8402, o: "&nvgt;" }], [0, "&quest;"], [0, "&commat;"], [26, "&lbrack;"], [0, "&bsol;"], [0, "&rbrack;"], [0, "&Hat;"], [0, "&lowbar;"], [0, "&DiacriticalGrave;"], [5, { n: 106, o: "&fjlig;" }], [20, "&lbrace;"], [0, "&verbar;"], [0, "&rbrace;"], [34, "&nbsp;"], [0, "&iexcl;"], [0, "&cent;"], [0, "&pound;"], [0, "&curren;"], [0, "&yen;"], [0, "&brvbar;"], [0, "&sect;"], [0, "&die;"], [0, "&copy;"], [0, "&ordf;"], [0, "&laquo;"], [0, "&not;"], [0, "&shy;"], [0, "&circledR;"], [0, "&macr;"], [0, "&deg;"], [0, "&PlusMinus;"], [0, "&sup2;"], [0, "&sup3;"], [0, "&acute;"], [0, "&micro;"], [0, "&para;"], [0, "&centerdot;"], [0, "&cedil;"], [0, "&sup1;"], [0, "&ordm;"], [0, "&raquo;"], [0, "&frac14;"], [0, "&frac12;"], [0, "&frac34;"], [0, "&iquest;"], [0, "&Agrave;"], [0, "&Aacute;"], [0, "&Acirc;"], [0, "&Atilde;"], [0, "&Auml;"], [0, "&angst;"], [0, "&AElig;"], [0, "&Ccedil;"], [0, "&Egrave;"], [0, "&Eacute;"], [0, "&Ecirc;"], [0, "&Euml;"], [0, "&Igrave;"], [0, "&Iacute;"], [0, "&Icirc;"], [0, "&Iuml;"], [0, "&ETH;"], [0, "&Ntilde;"], [0, "&Ograve;"], [0, "&Oacute;"], [0, "&Ocirc;"], [0, "&Otilde;"], [0, "&Ouml;"], [0, "&times;"], [0, "&Oslash;"], [0, "&Ugrave;"], [0, "&Uacute;"], [0, "&Ucirc;"], [0, "&Uuml;"], [0, "&Yacute;"], [0, "&THORN;"], [0, "&szlig;"], [0, "&agrave;"], [0, "&aacute;"], [0, "&acirc;"], [0, "&atilde;"], [0, "&auml;"], [0, "&aring;"], [0, "&aelig;"], [0, "&ccedil;"], [0, "&egrave;"], [0, "&eacute;"], [0, "&ecirc;"], [0, "&euml;"], [0, "&igrave;"], [0, "&iacute;"], [0, "&icirc;"], [0, "&iuml;"], [0, "&eth;"], [0, "&ntilde;"], [0, "&ograve;"], [0, "&oacute;"], [0, "&ocirc;"], [0, "&otilde;"], [0, "&ouml;"], [0, "&div;"], [0, "&oslash;"], [0, "&ugrave;"], [0, "&uacute;"], [0, "&ucirc;"], [0, "&uuml;"], [0, "&yacute;"], [0, "&thorn;"], [0, "&yuml;"], [0, "&Amacr;"], [0, "&amacr;"], [0, "&Abreve;"], [0, "&abreve;"], [0, "&Aogon;"], [0, "&aogon;"], [0, "&Cacute;"], [0, "&cacute;"], [0, "&Ccirc;"], [0, "&ccirc;"], [0, "&Cdot;"], [0, "&cdot;"], [0, "&Ccaron;"], [0, "&ccaron;"], [0, "&Dcaron;"], [0, "&dcaron;"], [0, "&Dstrok;"], [0, "&dstrok;"], [0, "&Emacr;"], [0, "&emacr;"], [2, "&Edot;"], [0, "&edot;"], [0, "&Eogon;"], [0, "&eogon;"], [0, "&Ecaron;"], [0, "&ecaron;"], [0, "&Gcirc;"], [0, "&gcirc;"], [0, "&Gbreve;"], [0, "&gbreve;"], [0, "&Gdot;"], [0, "&gdot;"], [0, "&Gcedil;"], [1, "&Hcirc;"], [0, "&hcirc;"], [0, "&Hstrok;"], [0, "&hstrok;"], [0, "&Itilde;"], [0, "&itilde;"], [0, "&Imacr;"], [0, "&imacr;"], [2, "&Iogon;"], [0, "&iogon;"], [0, "&Idot;"], [0, "&imath;"], [0, "&IJlig;"], [0, "&ijlig;"], [0, "&Jcirc;"], [0, "&jcirc;"], [0, "&Kcedil;"], [0, "&kcedil;"], [0, "&kgreen;"], [0, "&Lacute;"], [0, "&lacute;"], [0, "&Lcedil;"], [0, "&lcedil;"], [0, "&Lcaron;"], [0, "&lcaron;"], [0, "&Lmidot;"], [0, "&lmidot;"], [0, "&Lstrok;"], [0, "&lstrok;"], [0, "&Nacute;"], [0, "&nacute;"], [0, "&Ncedil;"], [0, "&ncedil;"], [0, "&Ncaron;"], [0, "&ncaron;"], [0, "&napos;"], [0, "&ENG;"], [0, "&eng;"], [0, "&Omacr;"], [0, "&omacr;"], [2, "&Odblac;"], [0, "&odblac;"], [0, "&OElig;"], [0, "&oelig;"], [0, "&Racute;"], [0, "&racute;"], [0, "&Rcedil;"], [0, "&rcedil;"], [0, "&Rcaron;"], [0, "&rcaron;"], [0, "&Sacute;"], [0, "&sacute;"], [0, "&Scirc;"], [0, "&scirc;"], [0, "&Scedil;"], [0, "&scedil;"], [0, "&Scaron;"], [0, "&scaron;"], [0, "&Tcedil;"], [0, "&tcedil;"], [0, "&Tcaron;"], [0, "&tcaron;"], [0, "&Tstrok;"], [0, "&tstrok;"], [0, "&Utilde;"], [0, "&utilde;"], [0, "&Umacr;"], [0, "&umacr;"], [0, "&Ubreve;"], [0, "&ubreve;"], [0, "&Uring;"], [0, "&uring;"], [0, "&Udblac;"], [0, "&udblac;"], [0, "&Uogon;"], [0, "&uogon;"], [0, "&Wcirc;"], [0, "&wcirc;"], [0, "&Ycirc;"], [0, "&ycirc;"], [0, "&Yuml;"], [0, "&Zacute;"], [0, "&zacute;"], [0, "&Zdot;"], [0, "&zdot;"], [0, "&Zcaron;"], [0, "&zcaron;"], [19, "&fnof;"], [34, "&imped;"], [63, "&gacute;"], [65, "&jmath;"], [142, "&circ;"], [0, "&caron;"], [16, "&breve;"], [0, "&DiacriticalDot;"], [0, "&ring;"], [0, "&ogon;"], [0, "&DiacriticalTilde;"], [0, "&dblac;"], [51, "&DownBreve;"], [127, "&Alpha;"], [0, "&Beta;"], [0, "&Gamma;"], [0, "&Delta;"], [0, "&Epsilon;"], [0, "&Zeta;"], [0, "&Eta;"], [0, "&Theta;"], [0, "&Iota;"], [0, "&Kappa;"], [0, "&Lambda;"], [0, "&Mu;"], [0, "&Nu;"], [0, "&Xi;"], [0, "&Omicron;"], [0, "&Pi;"], [0, "&Rho;"], [1, "&Sigma;"], [0, "&Tau;"], [0, "&Upsilon;"], [0, "&Phi;"], [0, "&Chi;"], [0, "&Psi;"], [0, "&ohm;"], [7, "&alpha;"], [0, "&beta;"], [0, "&gamma;"], [0, "&delta;"], [0, "&epsi;"], [0, "&zeta;"], [0, "&eta;"], [0, "&theta;"], [0, "&iota;"], [0, "&kappa;"], [0, "&lambda;"], [0, "&mu;"], [0, "&nu;"], [0, "&xi;"], [0, "&omicron;"], [0, "&pi;"], [0, "&rho;"], [0, "&sigmaf;"], [0, "&sigma;"], [0, "&tau;"], [0, "&upsi;"], [0, "&phi;"], [0, "&chi;"], [0, "&psi;"], [0, "&omega;"], [7, "&thetasym;"], [0, "&Upsi;"], [2, "&phiv;"], [0, "&piv;"], [5, "&Gammad;"], [0, "&digamma;"], [18, "&kappav;"], [0, "&rhov;"], [3, "&epsiv;"], [0, "&backepsilon;"], [10, "&IOcy;"], [0, "&DJcy;"], [0, "&GJcy;"], [0, "&Jukcy;"], [0, "&DScy;"], [0, "&Iukcy;"], [0, "&YIcy;"], [0, "&Jsercy;"], [0, "&LJcy;"], [0, "&NJcy;"], [0, "&TSHcy;"], [0, "&KJcy;"], [1, "&Ubrcy;"], [0, "&DZcy;"], [0, "&Acy;"], [0, "&Bcy;"], [0, "&Vcy;"], [0, "&Gcy;"], [0, "&Dcy;"], [0, "&IEcy;"], [0, "&ZHcy;"], [0, "&Zcy;"], [0, "&Icy;"], [0, "&Jcy;"], [0, "&Kcy;"], [0, "&Lcy;"], [0, "&Mcy;"], [0, "&Ncy;"], [0, "&Ocy;"], [0, "&Pcy;"], [0, "&Rcy;"], [0, "&Scy;"], [0, "&Tcy;"], [0, "&Ucy;"], [0, "&Fcy;"], [0, "&KHcy;"], [0, "&TScy;"], [0, "&CHcy;"], [0, "&SHcy;"], [0, "&SHCHcy;"], [0, "&HARDcy;"], [0, "&Ycy;"], [0, "&SOFTcy;"], [0, "&Ecy;"], [0, "&YUcy;"], [0, "&YAcy;"], [0, "&acy;"], [0, "&bcy;"], [0, "&vcy;"], [0, "&gcy;"], [0, "&dcy;"], [0, "&iecy;"], [0, "&zhcy;"], [0, "&zcy;"], [0, "&icy;"], [0, "&jcy;"], [0, "&kcy;"], [0, "&lcy;"], [0, "&mcy;"], [0, "&ncy;"], [0, "&ocy;"], [0, "&pcy;"], [0, "&rcy;"], [0, "&scy;"], [0, "&tcy;"], [0, "&ucy;"], [0, "&fcy;"], [0, "&khcy;"], [0, "&tscy;"], [0, "&chcy;"], [0, "&shcy;"], [0, "&shchcy;"], [0, "&hardcy;"], [0, "&ycy;"], [0, "&softcy;"], [0, "&ecy;"], [0, "&yucy;"], [0, "&yacy;"], [1, "&iocy;"], [0, "&djcy;"], [0, "&gjcy;"], [0, "&jukcy;"], [0, "&dscy;"], [0, "&iukcy;"], [0, "&yicy;"], [0, "&jsercy;"], [0, "&ljcy;"], [0, "&njcy;"], [0, "&tshcy;"], [0, "&kjcy;"], [1, "&ubrcy;"], [0, "&dzcy;"], [7074, "&ensp;"], [0, "&emsp;"], [0, "&emsp13;"], [0, "&emsp14;"], [1, "&numsp;"], [0, "&puncsp;"], [0, "&ThinSpace;"], [0, "&hairsp;"], [0, "&NegativeMediumSpace;"], [0, "&zwnj;"], [0, "&zwj;"], [0, "&lrm;"], [0, "&rlm;"], [0, "&dash;"], [2, "&ndash;"], [0, "&mdash;"], [0, "&horbar;"], [0, "&Verbar;"], [1, "&lsquo;"], [0, "&CloseCurlyQuote;"], [0, "&lsquor;"], [1, "&ldquo;"], [0, "&CloseCurlyDoubleQuote;"], [0, "&bdquo;"], [1, "&dagger;"], [0, "&Dagger;"], [0, "&bull;"], [2, "&nldr;"], [0, "&hellip;"], [9, "&permil;"], [0, "&pertenk;"], [0, "&prime;"], [0, "&Prime;"], [0, "&tprime;"], [0, "&backprime;"], [3, "&lsaquo;"], [0, "&rsaquo;"], [3, "&oline;"], [2, "&caret;"], [1, "&hybull;"], [0, "&frasl;"], [10, "&bsemi;"], [7, "&qprime;"], [7, { v: "&MediumSpace;", n: 8202, o: "&ThickSpace;" }], [0, "&NoBreak;"], [0, "&af;"], [0, "&InvisibleTimes;"], [0, "&ic;"], [72, "&euro;"], [46, "&tdot;"], [0, "&DotDot;"], [37, "&complexes;"], [2, "&incare;"], [4, "&gscr;"], [0, "&hamilt;"], [0, "&Hfr;"], [0, "&Hopf;"], [0, "&planckh;"], [0, "&hbar;"], [0, "&imagline;"], [0, "&Ifr;"], [0, "&lagran;"], [0, "&ell;"], [1, "&naturals;"], [0, "&numero;"], [0, "&copysr;"], [0, "&weierp;"], [0, "&Popf;"], [0, "&Qopf;"], [0, "&realine;"], [0, "&real;"], [0, "&reals;"], [0, "&rx;"], [3, "&trade;"], [1, "&integers;"], [2, "&mho;"], [0, "&zeetrf;"], [0, "&iiota;"], [2, "&bernou;"], [0, "&Cayleys;"], [1, "&escr;"], [0, "&Escr;"], [0, "&Fouriertrf;"], [1, "&Mellintrf;"], [0, "&order;"], [0, "&alefsym;"], [0, "&beth;"], [0, "&gimel;"], [0, "&daleth;"], [12, "&CapitalDifferentialD;"], [0, "&dd;"], [0, "&ee;"], [0, "&ii;"], [10, "&frac13;"], [0, "&frac23;"], [0, "&frac15;"], [0, "&frac25;"], [0, "&frac35;"], [0, "&frac45;"], [0, "&frac16;"], [0, "&frac56;"], [0, "&frac18;"], [0, "&frac38;"], [0, "&frac58;"], [0, "&frac78;"], [49, "&larr;"], [0, "&ShortUpArrow;"], [0, "&rarr;"], [0, "&darr;"], [0, "&harr;"], [0, "&updownarrow;"], [0, "&nwarr;"], [0, "&nearr;"], [0, "&LowerRightArrow;"], [0, "&LowerLeftArrow;"], [0, "&nlarr;"], [0, "&nrarr;"], [1, { v: "&rarrw;", n: 824, o: "&nrarrw;" }], [0, "&Larr;"], [0, "&Uarr;"], [0, "&Rarr;"], [0, "&Darr;"], [0, "&larrtl;"], [0, "&rarrtl;"], [0, "&LeftTeeArrow;"], [0, "&mapstoup;"], [0, "&map;"], [0, "&DownTeeArrow;"], [1, "&hookleftarrow;"], [0, "&hookrightarrow;"], [0, "&larrlp;"], [0, "&looparrowright;"], [0, "&harrw;"], [0, "&nharr;"], [1, "&lsh;"], [0, "&rsh;"], [0, "&ldsh;"], [0, "&rdsh;"], [1, "&crarr;"], [0, "&cularr;"], [0, "&curarr;"], [2, "&circlearrowleft;"], [0, "&circlearrowright;"], [0, "&leftharpoonup;"], [0, "&DownLeftVector;"], [0, "&RightUpVector;"], [0, "&LeftUpVector;"], [0, "&rharu;"], [0, "&DownRightVector;"], [0, "&dharr;"], [0, "&dharl;"], [0, "&RightArrowLeftArrow;"], [0, "&udarr;"], [0, "&LeftArrowRightArrow;"], [0, "&leftleftarrows;"], [0, "&upuparrows;"], [0, "&rightrightarrows;"], [0, "&ddarr;"], [0, "&leftrightharpoons;"], [0, "&Equilibrium;"], [0, "&nlArr;"], [0, "&nhArr;"], [0, "&nrArr;"], [0, "&DoubleLeftArrow;"], [0, "&DoubleUpArrow;"], [0, "&DoubleRightArrow;"], [0, "&dArr;"], [0, "&DoubleLeftRightArrow;"], [0, "&DoubleUpDownArrow;"], [0, "&nwArr;"], [0, "&neArr;"], [0, "&seArr;"], [0, "&swArr;"], [0, "&lAarr;"], [0, "&rAarr;"], [1, "&zigrarr;"], [6, "&larrb;"], [0, "&rarrb;"], [15, "&DownArrowUpArrow;"], [7, "&loarr;"], [0, "&roarr;"], [0, "&hoarr;"], [0, "&forall;"], [0, "&comp;"], [0, { v: "&part;", n: 824, o: "&npart;" }], [0, "&exist;"], [0, "&nexist;"], [0, "&empty;"], [1, "&Del;"], [0, "&Element;"], [0, "&NotElement;"], [1, "&ni;"], [0, "&notni;"], [2, "&prod;"], [0, "&coprod;"], [0, "&sum;"], [0, "&minus;"], [0, "&MinusPlus;"], [0, "&dotplus;"], [1, "&Backslash;"], [0, "&lowast;"], [0, "&compfn;"], [1, "&radic;"], [2, "&prop;"], [0, "&infin;"], [0, "&angrt;"], [0, { v: "&ang;", n: 8402, o: "&nang;" }], [0, "&angmsd;"], [0, "&angsph;"], [0, "&mid;"], [0, "&nmid;"], [0, "&DoubleVerticalBar;"], [0, "&NotDoubleVerticalBar;"], [0, "&and;"], [0, "&or;"], [0, { v: "&cap;", n: 65024, o: "&caps;" }], [0, { v: "&cup;", n: 65024, o: "&cups;" }], [0, "&int;"], [0, "&Int;"], [0, "&iiint;"], [0, "&conint;"], [0, "&Conint;"], [0, "&Cconint;"], [0, "&cwint;"], [0, "&ClockwiseContourIntegral;"], [0, "&awconint;"], [0, "&there4;"], [0, "&becaus;"], [0, "&ratio;"], [0, "&Colon;"], [0, "&dotminus;"], [1, "&mDDot;"], [0, "&homtht;"], [0, { v: "&sim;", n: 8402, o: "&nvsim;" }], [0, { v: "&backsim;", n: 817, o: "&race;" }], [0, { v: "&ac;", n: 819, o: "&acE;" }], [0, "&acd;"], [0, "&VerticalTilde;"], [0, "&NotTilde;"], [0, { v: "&eqsim;", n: 824, o: "&nesim;" }], [0, "&sime;"], [0, "&NotTildeEqual;"], [0, "&cong;"], [0, "&simne;"], [0, "&ncong;"], [0, "&ap;"], [0, "&nap;"], [0, "&ape;"], [0, { v: "&apid;", n: 824, o: "&napid;" }], [0, "&backcong;"], [0, { v: "&asympeq;", n: 8402, o: "&nvap;" }], [0, { v: "&bump;", n: 824, o: "&nbump;" }], [0, { v: "&bumpe;", n: 824, o: "&nbumpe;" }], [0, { v: "&doteq;", n: 824, o: "&nedot;" }], [0, "&doteqdot;"], [0, "&efDot;"], [0, "&erDot;"], [0, "&Assign;"], [0, "&ecolon;"], [0, "&ecir;"], [0, "&circeq;"], [1, "&wedgeq;"], [0, "&veeeq;"], [1, "&triangleq;"], [2, "&equest;"], [0, "&ne;"], [0, { v: "&Congruent;", n: 8421, o: "&bnequiv;" }], [0, "&nequiv;"], [1, { v: "&le;", n: 8402, o: "&nvle;" }], [0, { v: "&ge;", n: 8402, o: "&nvge;" }], [0, { v: "&lE;", n: 824, o: "&nlE;" }], [0, { v: "&gE;", n: 824, o: "&ngE;" }], [0, { v: "&lnE;", n: 65024, o: "&lvertneqq;" }], [0, { v: "&gnE;", n: 65024, o: "&gvertneqq;" }], [0, { v: "&ll;", n: new Map(/* @__PURE__ */ restoreDiff([[824, "&nLtv;"], [7577, "&nLt;"]])) }], [0, { v: "&gg;", n: new Map(/* @__PURE__ */ restoreDiff([[824, "&nGtv;"], [7577, "&nGt;"]])) }], [0, "&between;"], [0, "&NotCupCap;"], [0, "&nless;"], [0, "&ngt;"], [0, "&nle;"], [0, "&nge;"], [0, "&lesssim;"], [0, "&GreaterTilde;"], [0, "&nlsim;"], [0, "&ngsim;"], [0, "&LessGreater;"], [0, "&gl;"], [0, "&NotLessGreater;"], [0, "&NotGreaterLess;"], [0, "&pr;"], [0, "&sc;"], [0, "&prcue;"], [0, "&sccue;"], [0, "&PrecedesTilde;"], [0, { v: "&scsim;", n: 824, o: "&NotSucceedsTilde;" }], [0, "&NotPrecedes;"], [0, "&NotSucceeds;"], [0, { v: "&sub;", n: 8402, o: "&NotSubset;" }], [0, { v: "&sup;", n: 8402, o: "&NotSuperset;" }], [0, "&nsub;"], [0, "&nsup;"], [0, "&sube;"], [0, "&supe;"], [0, "&NotSubsetEqual;"], [0, "&NotSupersetEqual;"], [0, { v: "&subne;", n: 65024, o: "&varsubsetneq;" }], [0, { v: "&supne;", n: 65024, o: "&varsupsetneq;" }], [1, "&cupdot;"], [0, "&UnionPlus;"], [0, { v: "&sqsub;", n: 824, o: "&NotSquareSubset;" }], [0, { v: "&sqsup;", n: 824, o: "&NotSquareSuperset;" }], [0, "&sqsube;"], [0, "&sqsupe;"], [0, { v: "&sqcap;", n: 65024, o: "&sqcaps;" }], [0, { v: "&sqcup;", n: 65024, o: "&sqcups;" }], [0, "&CirclePlus;"], [0, "&CircleMinus;"], [0, "&CircleTimes;"], [0, "&osol;"], [0, "&CircleDot;"], [0, "&circledcirc;"], [0, "&circledast;"], [1, "&circleddash;"], [0, "&boxplus;"], [0, "&boxminus;"], [0, "&boxtimes;"], [0, "&dotsquare;"], [0, "&RightTee;"], [0, "&dashv;"], [0, "&DownTee;"], [0, "&bot;"], [1, "&models;"], [0, "&DoubleRightTee;"], [0, "&Vdash;"], [0, "&Vvdash;"], [0, "&VDash;"], [0, "&nvdash;"], [0, "&nvDash;"], [0, "&nVdash;"], [0, "&nVDash;"], [0, "&prurel;"], [1, "&LeftTriangle;"], [0, "&RightTriangle;"], [0, { v: "&LeftTriangleEqual;", n: 8402, o: "&nvltrie;" }], [0, { v: "&RightTriangleEqual;", n: 8402, o: "&nvrtrie;" }], [0, "&origof;"], [0, "&imof;"], [0, "&multimap;"], [0, "&hercon;"], [0, "&intcal;"], [0, "&veebar;"], [1, "&barvee;"], [0, "&angrtvb;"], [0, "&lrtri;"], [0, "&bigwedge;"], [0, "&bigvee;"], [0, "&bigcap;"], [0, "&bigcup;"], [0, "&diam;"], [0, "&sdot;"], [0, "&sstarf;"], [0, "&divideontimes;"], [0, "&bowtie;"], [0, "&ltimes;"], [0, "&rtimes;"], [0, "&leftthreetimes;"], [0, "&rightthreetimes;"], [0, "&backsimeq;"], [0, "&curlyvee;"], [0, "&curlywedge;"], [0, "&Sub;"], [0, "&Sup;"], [0, "&Cap;"], [0, "&Cup;"], [0, "&fork;"], [0, "&epar;"], [0, "&lessdot;"], [0, "&gtdot;"], [0, { v: "&Ll;", n: 824, o: "&nLl;" }], [0, { v: "&Gg;", n: 824, o: "&nGg;" }], [0, { v: "&leg;", n: 65024, o: "&lesg;" }], [0, { v: "&gel;", n: 65024, o: "&gesl;" }], [2, "&cuepr;"], [0, "&cuesc;"], [0, "&NotPrecedesSlantEqual;"], [0, "&NotSucceedsSlantEqual;"], [0, "&NotSquareSubsetEqual;"], [0, "&NotSquareSupersetEqual;"], [2, "&lnsim;"], [0, "&gnsim;"], [0, "&precnsim;"], [0, "&scnsim;"], [0, "&nltri;"], [0, "&NotRightTriangle;"], [0, "&nltrie;"], [0, "&NotRightTriangleEqual;"], [0, "&vellip;"], [0, "&ctdot;"], [0, "&utdot;"], [0, "&dtdot;"], [0, "&disin;"], [0, "&isinsv;"], [0, "&isins;"], [0, { v: "&isindot;", n: 824, o: "&notindot;" }], [0, "&notinvc;"], [0, "&notinvb;"], [1, { v: "&isinE;", n: 824, o: "&notinE;" }], [0, "&nisd;"], [0, "&xnis;"], [0, "&nis;"], [0, "&notnivc;"], [0, "&notnivb;"], [6, "&barwed;"], [0, "&Barwed;"], [1, "&lceil;"], [0, "&rceil;"], [0, "&LeftFloor;"], [0, "&rfloor;"], [0, "&drcrop;"], [0, "&dlcrop;"], [0, "&urcrop;"], [0, "&ulcrop;"], [0, "&bnot;"], [1, "&profline;"], [0, "&profsurf;"], [1, "&telrec;"], [0, "&target;"], [5, "&ulcorn;"], [0, "&urcorn;"], [0, "&dlcorn;"], [0, "&drcorn;"], [2, "&frown;"], [0, "&smile;"], [9, "&cylcty;"], [0, "&profalar;"], [7, "&topbot;"], [6, "&ovbar;"], [1, "&solbar;"], [60, "&angzarr;"], [51, "&lmoustache;"], [0, "&rmoustache;"], [2, "&OverBracket;"], [0, "&bbrk;"], [0, "&bbrktbrk;"], [37, "&OverParenthesis;"], [0, "&UnderParenthesis;"], [0, "&OverBrace;"], [0, "&UnderBrace;"], [2, "&trpezium;"], [4, "&elinters;"], [59, "&blank;"], [164, "&circledS;"], [55, "&boxh;"], [1, "&boxv;"], [9, "&boxdr;"], [3, "&boxdl;"], [3, "&boxur;"], [3, "&boxul;"], [3, "&boxvr;"], [7, "&boxvl;"], [7, "&boxhd;"], [7, "&boxhu;"], [7, "&boxvh;"], [19, "&boxH;"], [0, "&boxV;"], [0, "&boxdR;"], [0, "&boxDr;"], [0, "&boxDR;"], [0, "&boxdL;"], [0, "&boxDl;"], [0, "&boxDL;"], [0, "&boxuR;"], [0, "&boxUr;"], [0, "&boxUR;"], [0, "&boxuL;"], [0, "&boxUl;"], [0, "&boxUL;"], [0, "&boxvR;"], [0, "&boxVr;"], [0, "&boxVR;"], [0, "&boxvL;"], [0, "&boxVl;"], [0, "&boxVL;"], [0, "&boxHd;"], [0, "&boxhD;"], [0, "&boxHD;"], [0, "&boxHu;"], [0, "&boxhU;"], [0, "&boxHU;"], [0, "&boxvH;"], [0, "&boxVh;"], [0, "&boxVH;"], [19, "&uhblk;"], [3, "&lhblk;"], [3, "&block;"], [8, "&blk14;"], [0, "&blk12;"], [0, "&blk34;"], [13, "&square;"], [8, "&blacksquare;"], [0, "&EmptyVerySmallSquare;"], [1, "&rect;"], [0, "&marker;"], [2, "&fltns;"], [1, "&bigtriangleup;"], [0, "&blacktriangle;"], [0, "&triangle;"], [2, "&blacktriangleright;"], [0, "&rtri;"], [3, "&bigtriangledown;"], [0, "&blacktriangledown;"], [0, "&dtri;"], [2, "&blacktriangleleft;"], [0, "&ltri;"], [6, "&loz;"], [0, "&cir;"], [32, "&tridot;"], [2, "&bigcirc;"], [8, "&ultri;"], [0, "&urtri;"], [0, "&lltri;"], [0, "&EmptySmallSquare;"], [0, "&FilledSmallSquare;"], [8, "&bigstar;"], [0, "&star;"], [7, "&phone;"], [49, "&female;"], [1, "&male;"], [29, "&spades;"], [2, "&clubs;"], [1, "&hearts;"], [0, "&diamondsuit;"], [3, "&sung;"], [2, "&flat;"], [0, "&natural;"], [0, "&sharp;"], [163, "&check;"], [3, "&cross;"], [8, "&malt;"], [21, "&sext;"], [33, "&VerticalSeparator;"], [25, "&lbbrk;"], [0, "&rbbrk;"], [84, "&bsolhsub;"], [0, "&suphsol;"], [28, "&LeftDoubleBracket;"], [0, "&RightDoubleBracket;"], [0, "&lang;"], [0, "&rang;"], [0, "&Lang;"], [0, "&Rang;"], [0, "&loang;"], [0, "&roang;"], [7, "&longleftarrow;"], [0, "&longrightarrow;"], [0, "&longleftrightarrow;"], [0, "&DoubleLongLeftArrow;"], [0, "&DoubleLongRightArrow;"], [0, "&DoubleLongLeftRightArrow;"], [1, "&longmapsto;"], [2, "&dzigrarr;"], [258, "&nvlArr;"], [0, "&nvrArr;"], [0, "&nvHarr;"], [0, "&Map;"], [6, "&lbarr;"], [0, "&bkarow;"], [0, "&lBarr;"], [0, "&dbkarow;"], [0, "&drbkarow;"], [0, "&DDotrahd;"], [0, "&UpArrowBar;"], [0, "&DownArrowBar;"], [2, "&Rarrtl;"], [2, "&latail;"], [0, "&ratail;"], [0, "&lAtail;"], [0, "&rAtail;"], [0, "&larrfs;"], [0, "&rarrfs;"], [0, "&larrbfs;"], [0, "&rarrbfs;"], [2, "&nwarhk;"], [0, "&nearhk;"], [0, "&hksearow;"], [0, "&hkswarow;"], [0, "&nwnear;"], [0, "&nesear;"], [0, "&seswar;"], [0, "&swnwar;"], [8, { v: "&rarrc;", n: 824, o: "&nrarrc;" }], [1, "&cudarrr;"], [0, "&ldca;"], [0, "&rdca;"], [0, "&cudarrl;"], [0, "&larrpl;"], [2, "&curarrm;"], [0, "&cularrp;"], [7, "&rarrpl;"], [2, "&harrcir;"], [0, "&Uarrocir;"], [0, "&lurdshar;"], [0, "&ldrushar;"], [2, "&LeftRightVector;"], [0, "&RightUpDownVector;"], [0, "&DownLeftRightVector;"], [0, "&LeftUpDownVector;"], [0, "&LeftVectorBar;"], [0, "&RightVectorBar;"], [0, "&RightUpVectorBar;"], [0, "&RightDownVectorBar;"], [0, "&DownLeftVectorBar;"], [0, "&DownRightVectorBar;"], [0, "&LeftUpVectorBar;"], [0, "&LeftDownVectorBar;"], [0, "&LeftTeeVector;"], [0, "&RightTeeVector;"], [0, "&RightUpTeeVector;"], [0, "&RightDownTeeVector;"], [0, "&DownLeftTeeVector;"], [0, "&DownRightTeeVector;"], [0, "&LeftUpTeeVector;"], [0, "&LeftDownTeeVector;"], [0, "&lHar;"], [0, "&uHar;"], [0, "&rHar;"], [0, "&dHar;"], [0, "&luruhar;"], [0, "&ldrdhar;"], [0, "&ruluhar;"], [0, "&rdldhar;"], [0, "&lharul;"], [0, "&llhard;"], [0, "&rharul;"], [0, "&lrhard;"], [0, "&udhar;"], [0, "&duhar;"], [0, "&RoundImplies;"], [0, "&erarr;"], [0, "&simrarr;"], [0, "&larrsim;"], [0, "&rarrsim;"], [0, "&rarrap;"], [0, "&ltlarr;"], [1, "&gtrarr;"], [0, "&subrarr;"], [1, "&suplarr;"], [0, "&lfisht;"], [0, "&rfisht;"], [0, "&ufisht;"], [0, "&dfisht;"], [5, "&lopar;"], [0, "&ropar;"], [4, "&lbrke;"], [0, "&rbrke;"], [0, "&lbrkslu;"], [0, "&rbrksld;"], [0, "&lbrksld;"], [0, "&rbrkslu;"], [0, "&langd;"], [0, "&rangd;"], [0, "&lparlt;"], [0, "&rpargt;"], [0, "&gtlPar;"], [0, "&ltrPar;"], [3, "&vzigzag;"], [1, "&vangrt;"], [0, "&angrtvbd;"], [6, "&ange;"], [0, "&range;"], [0, "&dwangle;"], [0, "&uwangle;"], [0, "&angmsdaa;"], [0, "&angmsdab;"], [0, "&angmsdac;"], [0, "&angmsdad;"], [0, "&angmsdae;"], [0, "&angmsdaf;"], [0, "&angmsdag;"], [0, "&angmsdah;"], [0, "&bemptyv;"], [0, "&demptyv;"], [0, "&cemptyv;"], [0, "&raemptyv;"], [0, "&laemptyv;"], [0, "&ohbar;"], [0, "&omid;"], [0, "&opar;"], [1, "&operp;"], [1, "&olcross;"], [0, "&odsold;"], [1, "&olcir;"], [0, "&ofcir;"], [0, "&olt;"], [0, "&ogt;"], [0, "&cirscir;"], [0, "&cirE;"], [0, "&solb;"], [0, "&bsolb;"], [3, "&boxbox;"], [3, "&trisb;"], [0, "&rtriltri;"], [0, { v: "&LeftTriangleBar;", n: 824, o: "&NotLeftTriangleBar;" }], [0, { v: "&RightTriangleBar;", n: 824, o: "&NotRightTriangleBar;" }], [11, "&iinfin;"], [0, "&infintie;"], [0, "&nvinfin;"], [4, "&eparsl;"], [0, "&smeparsl;"], [0, "&eqvparsl;"], [5, "&blacklozenge;"], [8, "&RuleDelayed;"], [1, "&dsol;"], [9, "&bigodot;"], [0, "&bigoplus;"], [0, "&bigotimes;"], [1, "&biguplus;"], [1, "&bigsqcup;"], [5, "&iiiint;"], [0, "&fpartint;"], [2, "&cirfnint;"], [0, "&awint;"], [0, "&rppolint;"], [0, "&scpolint;"], [0, "&npolint;"], [0, "&pointint;"], [0, "&quatint;"], [0, "&intlarhk;"], [10, "&pluscir;"], [0, "&plusacir;"], [0, "&simplus;"], [0, "&plusdu;"], [0, "&plussim;"], [0, "&plustwo;"], [1, "&mcomma;"], [0, "&minusdu;"], [2, "&loplus;"], [0, "&roplus;"], [0, "&Cross;"], [0, "&timesd;"], [0, "&timesbar;"], [1, "&smashp;"], [0, "&lotimes;"], [0, "&rotimes;"], [0, "&otimesas;"], [0, "&Otimes;"], [0, "&odiv;"], [0, "&triplus;"], [0, "&triminus;"], [0, "&tritime;"], [0, "&intprod;"], [2, "&amalg;"], [0, "&capdot;"], [1, "&ncup;"], [0, "&ncap;"], [0, "&capand;"], [0, "&cupor;"], [0, "&cupcap;"], [0, "&capcup;"], [0, "&cupbrcap;"], [0, "&capbrcup;"], [0, "&cupcup;"], [0, "&capcap;"], [0, "&ccups;"], [0, "&ccaps;"], [2, "&ccupssm;"], [2, "&And;"], [0, "&Or;"], [0, "&andand;"], [0, "&oror;"], [0, "&orslope;"], [0, "&andslope;"], [1, "&andv;"], [0, "&orv;"], [0, "&andd;"], [0, "&ord;"], [1, "&wedbar;"], [6, "&sdote;"], [3, "&simdot;"], [2, { v: "&congdot;", n: 824, o: "&ncongdot;" }], [0, "&easter;"], [0, "&apacir;"], [0, { v: "&apE;", n: 824, o: "&napE;" }], [0, "&eplus;"], [0, "&pluse;"], [0, "&Esim;"], [0, "&Colone;"], [0, "&Equal;"], [1, "&ddotseq;"], [0, "&equivDD;"], [0, "&ltcir;"], [0, "&gtcir;"], [0, "&ltquest;"], [0, "&gtquest;"], [0, { v: "&leqslant;", n: 824, o: "&nleqslant;" }], [0, { v: "&geqslant;", n: 824, o: "&ngeqslant;" }], [0, "&lesdot;"], [0, "&gesdot;"], [0, "&lesdoto;"], [0, "&gesdoto;"], [0, "&lesdotor;"], [0, "&gesdotol;"], [0, "&lap;"], [0, "&gap;"], [0, "&lne;"], [0, "&gne;"], [0, "&lnap;"], [0, "&gnap;"], [0, "&lEg;"], [0, "&gEl;"], [0, "&lsime;"], [0, "&gsime;"], [0, "&lsimg;"], [0, "&gsiml;"], [0, "&lgE;"], [0, "&glE;"], [0, "&lesges;"], [0, "&gesles;"], [0, "&els;"], [0, "&egs;"], [0, "&elsdot;"], [0, "&egsdot;"], [0, "&el;"], [0, "&eg;"], [2, "&siml;"], [0, "&simg;"], [0, "&simlE;"], [0, "&simgE;"], [0, { v: "&LessLess;", n: 824, o: "&NotNestedLessLess;" }], [0, { v: "&GreaterGreater;", n: 824, o: "&NotNestedGreaterGreater;" }], [1, "&glj;"], [0, "&gla;"], [0, "&ltcc;"], [0, "&gtcc;"], [0, "&lescc;"], [0, "&gescc;"], [0, "&smt;"], [0, "&lat;"], [0, { v: "&smte;", n: 65024, o: "&smtes;" }], [0, { v: "&late;", n: 65024, o: "&lates;" }], [0, "&bumpE;"], [0, { v: "&PrecedesEqual;", n: 824, o: "&NotPrecedesEqual;" }], [0, { v: "&sce;", n: 824, o: "&NotSucceedsEqual;" }], [2, "&prE;"], [0, "&scE;"], [0, "&precneqq;"], [0, "&scnE;"], [0, "&prap;"], [0, "&scap;"], [0, "&precnapprox;"], [0, "&scnap;"], [0, "&Pr;"], [0, "&Sc;"], [0, "&subdot;"], [0, "&supdot;"], [0, "&subplus;"], [0, "&supplus;"], [0, "&submult;"], [0, "&supmult;"], [0, "&subedot;"], [0, "&supedot;"], [0, { v: "&subE;", n: 824, o: "&nsubE;" }], [0, { v: "&supE;", n: 824, o: "&nsupE;" }], [0, "&subsim;"], [0, "&supsim;"], [2, { v: "&subnE;", n: 65024, o: "&varsubsetneqq;" }], [0, { v: "&supnE;", n: 65024, o: "&varsupsetneqq;" }], [2, "&csub;"], [0, "&csup;"], [0, "&csube;"], [0, "&csupe;"], [0, "&subsup;"], [0, "&supsub;"], [0, "&subsub;"], [0, "&supsup;"], [0, "&suphsub;"], [0, "&supdsub;"], [0, "&forkv;"], [0, "&topfork;"], [0, "&mlcp;"], [8, "&Dashv;"], [1, "&Vdashl;"], [0, "&Barv;"], [0, "&vBar;"], [0, "&vBarv;"], [1, "&Vbar;"], [0, "&Not;"], [0, "&bNot;"], [0, "&rnmid;"], [0, "&cirmid;"], [0, "&midcir;"], [0, "&topcir;"], [0, "&nhpar;"], [0, "&parsim;"], [9, { v: "&parsl;", n: 8421, o: "&nparsl;" }], [44343, { n: new Map(/* @__PURE__ */ restoreDiff([[56476, "&Ascr;"], [1, "&Cscr;"], [0, "&Dscr;"], [2, "&Gscr;"], [2, "&Jscr;"], [0, "&Kscr;"], [2, "&Nscr;"], [0, "&Oscr;"], [0, "&Pscr;"], [0, "&Qscr;"], [1, "&Sscr;"], [0, "&Tscr;"], [0, "&Uscr;"], [0, "&Vscr;"], [0, "&Wscr;"], [0, "&Xscr;"], [0, "&Yscr;"], [0, "&Zscr;"], [0, "&ascr;"], [0, "&bscr;"], [0, "&cscr;"], [0, "&dscr;"], [1, "&fscr;"], [1, "&hscr;"], [0, "&iscr;"], [0, "&jscr;"], [0, "&kscr;"], [0, "&lscr;"], [0, "&mscr;"], [0, "&nscr;"], [1, "&pscr;"], [0, "&qscr;"], [0, "&rscr;"], [0, "&sscr;"], [0, "&tscr;"], [0, "&uscr;"], [0, "&vscr;"], [0, "&wscr;"], [0, "&xscr;"], [0, "&yscr;"], [0, "&zscr;"], [52, "&Afr;"], [0, "&Bfr;"], [1, "&Dfr;"], [0, "&Efr;"], [0, "&Ffr;"], [0, "&Gfr;"], [2, "&Jfr;"], [0, "&Kfr;"], [0, "&Lfr;"], [0, "&Mfr;"], [0, "&Nfr;"], [0, "&Ofr;"], [0, "&Pfr;"], [0, "&Qfr;"], [1, "&Sfr;"], [0, "&Tfr;"], [0, "&Ufr;"], [0, "&Vfr;"], [0, "&Wfr;"], [0, "&Xfr;"], [0, "&Yfr;"], [1, "&afr;"], [0, "&bfr;"], [0, "&cfr;"], [0, "&dfr;"], [0, "&efr;"], [0, "&ffr;"], [0, "&gfr;"], [0, "&hfr;"], [0, "&ifr;"], [0, "&jfr;"], [0, "&kfr;"], [0, "&lfr;"], [0, "&mfr;"], [0, "&nfr;"], [0, "&ofr;"], [0, "&pfr;"], [0, "&qfr;"], [0, "&rfr;"], [0, "&sfr;"], [0, "&tfr;"], [0, "&ufr;"], [0, "&vfr;"], [0, "&wfr;"], [0, "&xfr;"], [0, "&yfr;"], [0, "&zfr;"], [0, "&Aopf;"], [0, "&Bopf;"], [1, "&Dopf;"], [0, "&Eopf;"], [0, "&Fopf;"], [0, "&Gopf;"], [1, "&Iopf;"], [0, "&Jopf;"], [0, "&Kopf;"], [0, "&Lopf;"], [0, "&Mopf;"], [1, "&Oopf;"], [3, "&Sopf;"], [0, "&Topf;"], [0, "&Uopf;"], [0, "&Vopf;"], [0, "&Wopf;"], [0, "&Xopf;"], [0, "&Yopf;"], [1, "&aopf;"], [0, "&bopf;"], [0, "&copf;"], [0, "&dopf;"], [0, "&eopf;"], [0, "&fopf;"], [0, "&gopf;"], [0, "&hopf;"], [0, "&iopf;"], [0, "&jopf;"], [0, "&kopf;"], [0, "&lopf;"], [0, "&mopf;"], [0, "&nopf;"], [0, "&oopf;"], [0, "&popf;"], [0, "&qopf;"], [0, "&ropf;"], [0, "&sopf;"], [0, "&topf;"], [0, "&uopf;"], [0, "&vopf;"], [0, "&wopf;"], [0, "&xopf;"], [0, "&yopf;"], [0, "&zopf;"]])) }], [8906, "&fflig;"], [0, "&filig;"], [0, "&fllig;"], [0, "&ffilig;"], [0, "&ffllig;"]]));
  }
});

// node_modules/entities/lib/esm/escape.js
function encodeXML(str) {
  let ret = "";
  let lastIdx = 0;
  let match;
  while ((match = xmlReplacer.exec(str)) !== null) {
    const i = match.index;
    const char = str.charCodeAt(i);
    const next = xmlCodeMap.get(char);
    if (next !== void 0) {
      ret += str.substring(lastIdx, i) + next;
      lastIdx = i + 1;
    } else {
      ret += `${str.substring(lastIdx, i)}&#x${getCodePoint(str, i).toString(16)};`;
      lastIdx = xmlReplacer.lastIndex += Number((char & 64512) === 55296);
    }
  }
  return ret + str.substr(lastIdx);
}
function getEscaper(regex, map2) {
  return function escape3(data) {
    let match;
    let lastIdx = 0;
    let result = "";
    while (match = regex.exec(data)) {
      if (lastIdx !== match.index) {
        result += data.substring(lastIdx, match.index);
      }
      result += map2.get(match[0].charCodeAt(0));
      lastIdx = match.index + 1;
    }
    return result + data.substring(lastIdx);
  };
}
var xmlReplacer, xmlCodeMap, getCodePoint, escapeUTF8, escapeAttribute, escapeText;
var init_escape = __esm({
  "node_modules/entities/lib/esm/escape.js"() {
    xmlReplacer = /["&'<>$\x80-\uFFFF]/g;
    xmlCodeMap = /* @__PURE__ */ new Map([
      [34, "&quot;"],
      [38, "&amp;"],
      [39, "&apos;"],
      [60, "&lt;"],
      [62, "&gt;"]
    ]);
    getCodePoint = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    String.prototype.codePointAt != null ? (str, index) => str.codePointAt(index) : (
      // http://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
      (c2, index) => (c2.charCodeAt(index) & 64512) === 55296 ? (c2.charCodeAt(index) - 55296) * 1024 + c2.charCodeAt(index + 1) - 56320 + 65536 : c2.charCodeAt(index)
    );
    escapeUTF8 = getEscaper(/[&<>'"]/g, xmlCodeMap);
    escapeAttribute = getEscaper(/["&\u00A0]/g, /* @__PURE__ */ new Map([
      [34, "&quot;"],
      [38, "&amp;"],
      [160, "&nbsp;"]
    ]));
    escapeText = getEscaper(/[&<>\u00A0]/g, /* @__PURE__ */ new Map([
      [38, "&amp;"],
      [60, "&lt;"],
      [62, "&gt;"],
      [160, "&nbsp;"]
    ]));
  }
});

// node_modules/entities/lib/esm/encode.js
var init_encode = __esm({
  "node_modules/entities/lib/esm/encode.js"() {
    init_encode_html();
    init_escape();
  }
});

// node_modules/entities/lib/esm/index.js
var EntityLevel, EncodingMode;
var init_esm3 = __esm({
  "node_modules/entities/lib/esm/index.js"() {
    init_decode();
    init_encode();
    init_escape();
    init_escape();
    init_encode();
    init_decode();
    (function(EntityLevel2) {
      EntityLevel2[EntityLevel2["XML"] = 0] = "XML";
      EntityLevel2[EntityLevel2["HTML"] = 1] = "HTML";
    })(EntityLevel || (EntityLevel = {}));
    (function(EncodingMode2) {
      EncodingMode2[EncodingMode2["UTF8"] = 0] = "UTF8";
      EncodingMode2[EncodingMode2["ASCII"] = 1] = "ASCII";
      EncodingMode2[EncodingMode2["Extensive"] = 2] = "Extensive";
      EncodingMode2[EncodingMode2["Attribute"] = 3] = "Attribute";
      EncodingMode2[EncodingMode2["Text"] = 4] = "Text";
    })(EncodingMode || (EncodingMode = {}));
  }
});

// node_modules/dom-serializer/lib/esm/foreignNames.js
var elementNames, attributeNames;
var init_foreignNames = __esm({
  "node_modules/dom-serializer/lib/esm/foreignNames.js"() {
    elementNames = new Map([
      "altGlyph",
      "altGlyphDef",
      "altGlyphItem",
      "animateColor",
      "animateMotion",
      "animateTransform",
      "clipPath",
      "feBlend",
      "feColorMatrix",
      "feComponentTransfer",
      "feComposite",
      "feConvolveMatrix",
      "feDiffuseLighting",
      "feDisplacementMap",
      "feDistantLight",
      "feDropShadow",
      "feFlood",
      "feFuncA",
      "feFuncB",
      "feFuncG",
      "feFuncR",
      "feGaussianBlur",
      "feImage",
      "feMerge",
      "feMergeNode",
      "feMorphology",
      "feOffset",
      "fePointLight",
      "feSpecularLighting",
      "feSpotLight",
      "feTile",
      "feTurbulence",
      "foreignObject",
      "glyphRef",
      "linearGradient",
      "radialGradient",
      "textPath"
    ].map((val) => [val.toLowerCase(), val]));
    attributeNames = new Map([
      "definitionURL",
      "attributeName",
      "attributeType",
      "baseFrequency",
      "baseProfile",
      "calcMode",
      "clipPathUnits",
      "diffuseConstant",
      "edgeMode",
      "filterUnits",
      "glyphRef",
      "gradientTransform",
      "gradientUnits",
      "kernelMatrix",
      "kernelUnitLength",
      "keyPoints",
      "keySplines",
      "keyTimes",
      "lengthAdjust",
      "limitingConeAngle",
      "markerHeight",
      "markerUnits",
      "markerWidth",
      "maskContentUnits",
      "maskUnits",
      "numOctaves",
      "pathLength",
      "patternContentUnits",
      "patternTransform",
      "patternUnits",
      "pointsAtX",
      "pointsAtY",
      "pointsAtZ",
      "preserveAlpha",
      "preserveAspectRatio",
      "primitiveUnits",
      "refX",
      "refY",
      "repeatCount",
      "repeatDur",
      "requiredExtensions",
      "requiredFeatures",
      "specularConstant",
      "specularExponent",
      "spreadMethod",
      "startOffset",
      "stdDeviation",
      "stitchTiles",
      "surfaceScale",
      "systemLanguage",
      "tableValues",
      "targetX",
      "targetY",
      "textLength",
      "viewBox",
      "viewTarget",
      "xChannelSelector",
      "yChannelSelector",
      "zoomAndPan"
    ].map((val) => [val.toLowerCase(), val]));
  }
});

// node_modules/dom-serializer/lib/esm/index.js
function replaceQuotes(value) {
  return value.replace(/"/g, "&quot;");
}
function formatAttributes(attributes, opts) {
  var _a3;
  if (!attributes)
    return;
  const encode = ((_a3 = opts.encodeEntities) !== null && _a3 !== void 0 ? _a3 : opts.decodeEntities) === false ? replaceQuotes : opts.xmlMode || opts.encodeEntities !== "utf8" ? encodeXML : escapeAttribute;
  return Object.keys(attributes).map((key) => {
    var _a4, _b;
    const value = (_a4 = attributes[key]) !== null && _a4 !== void 0 ? _a4 : "";
    if (opts.xmlMode === "foreign") {
      key = (_b = attributeNames.get(key)) !== null && _b !== void 0 ? _b : key;
    }
    if (!opts.emptyAttrs && !opts.xmlMode && value === "") {
      return key;
    }
    return `${key}="${encode(value)}"`;
  }).join(" ");
}
function render(node, options = {}) {
  const nodes = "length" in node ? node : [node];
  let output = "";
  for (let i = 0; i < nodes.length; i++) {
    output += renderNode(nodes[i], options);
  }
  return output;
}
function renderNode(node, options) {
  switch (node.type) {
    case Root:
      return render(node.children, options);
    // @ts-expect-error We don't use `Doctype` yet
    case Doctype:
    case Directive:
      return renderDirective(node);
    case Comment:
      return renderComment(node);
    case CDATA:
      return renderCdata(node);
    case Script:
    case Style:
    case Tag:
      return renderTag(node, options);
    case Text:
      return renderText(node, options);
  }
}
function renderTag(elem, opts) {
  var _a3;
  if (opts.xmlMode === "foreign") {
    elem.name = (_a3 = elementNames.get(elem.name)) !== null && _a3 !== void 0 ? _a3 : elem.name;
    if (elem.parent && foreignModeIntegrationPoints.has(elem.parent.name)) {
      opts = { ...opts, xmlMode: false };
    }
  }
  if (!opts.xmlMode && foreignElements.has(elem.name)) {
    opts = { ...opts, xmlMode: "foreign" };
  }
  let tag = `<${elem.name}`;
  const attribs = formatAttributes(elem.attribs, opts);
  if (attribs) {
    tag += ` ${attribs}`;
  }
  if (elem.children.length === 0 && (opts.xmlMode ? (
    // In XML mode or foreign mode, and user hasn't explicitly turned off self-closing tags
    opts.selfClosingTags !== false
  ) : (
    // User explicitly asked for self-closing tags, even in HTML mode
    opts.selfClosingTags && singleTag.has(elem.name)
  ))) {
    if (!opts.xmlMode)
      tag += " ";
    tag += "/>";
  } else {
    tag += ">";
    if (elem.children.length > 0) {
      tag += render(elem.children, opts);
    }
    if (opts.xmlMode || !singleTag.has(elem.name)) {
      tag += `</${elem.name}>`;
    }
  }
  return tag;
}
function renderDirective(elem) {
  return `<${elem.data}>`;
}
function renderText(elem, opts) {
  var _a3;
  let data = elem.data || "";
  if (((_a3 = opts.encodeEntities) !== null && _a3 !== void 0 ? _a3 : opts.decodeEntities) !== false && !(!opts.xmlMode && elem.parent && unencodedElements.has(elem.parent.name))) {
    data = opts.xmlMode || opts.encodeEntities !== "utf8" ? encodeXML(data) : escapeText(data);
  }
  return data;
}
function renderCdata(elem) {
  return `<![CDATA[${elem.children[0].data}]]>`;
}
function renderComment(elem) {
  return `<!--${elem.data}-->`;
}
var unencodedElements, singleTag, foreignModeIntegrationPoints, foreignElements;
var init_esm4 = __esm({
  "node_modules/dom-serializer/lib/esm/index.js"() {
    init_esm();
    init_esm3();
    init_foreignNames();
    unencodedElements = /* @__PURE__ */ new Set([
      "style",
      "script",
      "xmp",
      "iframe",
      "noembed",
      "noframes",
      "plaintext",
      "noscript"
    ]);
    singleTag = /* @__PURE__ */ new Set([
      "area",
      "base",
      "basefont",
      "br",
      "col",
      "command",
      "embed",
      "frame",
      "hr",
      "img",
      "input",
      "isindex",
      "keygen",
      "link",
      "meta",
      "param",
      "source",
      "track",
      "wbr"
    ]);
    foreignModeIntegrationPoints = /* @__PURE__ */ new Set([
      "mi",
      "mo",
      "mn",
      "ms",
      "mtext",
      "annotation-xml",
      "foreignObject",
      "desc",
      "title"
    ]);
    foreignElements = /* @__PURE__ */ new Set(["svg", "math"]);
  }
});

// node_modules/domutils/lib/esm/stringify.js
var init_stringify = __esm({
  "node_modules/domutils/lib/esm/stringify.js"() {
    init_esm2();
    init_esm4();
    init_esm();
  }
});

// node_modules/domutils/lib/esm/traversal.js
var init_traversal = __esm({
  "node_modules/domutils/lib/esm/traversal.js"() {
    init_esm2();
  }
});

// node_modules/domutils/lib/esm/manipulation.js
var init_manipulation = __esm({
  "node_modules/domutils/lib/esm/manipulation.js"() {
  }
});

// node_modules/domutils/lib/esm/querying.js
var init_querying = __esm({
  "node_modules/domutils/lib/esm/querying.js"() {
    init_esm2();
  }
});

// node_modules/domutils/lib/esm/legacy.js
var init_legacy = __esm({
  "node_modules/domutils/lib/esm/legacy.js"() {
    init_esm2();
    init_querying();
  }
});

// node_modules/domutils/lib/esm/helpers.js
var DocumentPosition;
var init_helpers = __esm({
  "node_modules/domutils/lib/esm/helpers.js"() {
    init_esm2();
    (function(DocumentPosition2) {
      DocumentPosition2[DocumentPosition2["DISCONNECTED"] = 1] = "DISCONNECTED";
      DocumentPosition2[DocumentPosition2["PRECEDING"] = 2] = "PRECEDING";
      DocumentPosition2[DocumentPosition2["FOLLOWING"] = 4] = "FOLLOWING";
      DocumentPosition2[DocumentPosition2["CONTAINS"] = 8] = "CONTAINS";
      DocumentPosition2[DocumentPosition2["CONTAINED_BY"] = 16] = "CONTAINED_BY";
    })(DocumentPosition || (DocumentPosition = {}));
  }
});

// node_modules/domutils/lib/esm/feeds.js
var init_feeds = __esm({
  "node_modules/domutils/lib/esm/feeds.js"() {
    init_stringify();
    init_legacy();
  }
});

// node_modules/domutils/lib/esm/index.js
var init_esm5 = __esm({
  "node_modules/domutils/lib/esm/index.js"() {
    init_stringify();
    init_traversal();
    init_manipulation();
    init_querying();
    init_legacy();
    init_helpers();
    init_feeds();
    init_esm2();
  }
});

// node_modules/htmlparser2/lib/esm/index.js
function parseDocument(data, options) {
  const handler2 = new DomHandler(void 0, options);
  new Parser(handler2, options).end(data);
  return handler2.root;
}
var init_esm6 = __esm({
  "node_modules/htmlparser2/lib/esm/index.js"() {
    init_Parser();
    init_Parser();
    init_esm2();
    init_esm2();
    init_Tokenizer();
    init_esm();
    init_esm5();
    init_esm5();
    init_esm5();
  }
});

// node_modules/deepmerge/dist/cjs.js
var require_cjs = __commonJS({
  "node_modules/deepmerge/dist/cjs.js"(exports, module) {
    "use strict";
    var isMergeableObject = function isMergeableObject2(value) {
      return isNonNullObject(value) && !isSpecial(value);
    };
    function isNonNullObject(value) {
      return !!value && typeof value === "object";
    }
    function isSpecial(value) {
      var stringValue = Object.prototype.toString.call(value);
      return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
    }
    var canUseSymbol = typeof Symbol === "function" && Symbol.for;
    var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 60103;
    function isReactElement(value) {
      return value.$$typeof === REACT_ELEMENT_TYPE;
    }
    function emptyTarget(val) {
      return Array.isArray(val) ? [] : {};
    }
    function cloneUnlessOtherwiseSpecified(value, options) {
      return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
    }
    function defaultArrayMerge(target, source, options) {
      return target.concat(source).map(function(element) {
        return cloneUnlessOtherwiseSpecified(element, options);
      });
    }
    function getMergeFunction(key, options) {
      if (!options.customMerge) {
        return deepmerge;
      }
      var customMerge = options.customMerge(key);
      return typeof customMerge === "function" ? customMerge : deepmerge;
    }
    function getEnumerableOwnPropertySymbols(target) {
      return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
        return Object.propertyIsEnumerable.call(target, symbol);
      }) : [];
    }
    function getKeys(target) {
      return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
    }
    function propertyIsOnObject(object, property) {
      try {
        return property in object;
      } catch (_3) {
        return false;
      }
    }
    function propertyIsUnsafe(target, key) {
      return propertyIsOnObject(target, key) && !(Object.hasOwnProperty.call(target, key) && Object.propertyIsEnumerable.call(target, key));
    }
    function mergeObject(target, source, options) {
      var destination = {};
      if (options.isMergeableObject(target)) {
        getKeys(target).forEach(function(key) {
          destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
      }
      getKeys(source).forEach(function(key) {
        if (propertyIsUnsafe(target, key)) {
          return;
        }
        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
          destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        } else {
          destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
        }
      });
      return destination;
    }
    function deepmerge(target, source, options) {
      options = options || {};
      options.arrayMerge = options.arrayMerge || defaultArrayMerge;
      options.isMergeableObject = options.isMergeableObject || isMergeableObject;
      options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
      var sourceIsArray = Array.isArray(source);
      var targetIsArray = Array.isArray(target);
      var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
      if (!sourceAndTargetTypesMatch) {
        return cloneUnlessOtherwiseSpecified(source, options);
      } else if (sourceIsArray) {
        return options.arrayMerge(target, source, options);
      } else {
        return mergeObject(target, source, options);
      }
    }
    deepmerge.all = function deepmergeAll(array, options) {
      if (!Array.isArray(array)) {
        throw new Error("first argument should be an array");
      }
      return array.reduce(function(prev, next) {
        return deepmerge(prev, next, options);
      }, {});
    };
    var deepmerge_1 = deepmerge;
    module.exports = deepmerge_1;
  }
});

// node_modules/html-to-text/lib/html-to-text.mjs
function limitedDepthRecursive(n2, f, g = () => void 0) {
  if (n2 === void 0) {
    const f1 = function(...args) {
      return f(f1, ...args);
    };
    return f1;
  }
  if (n2 >= 0) {
    return function(...args) {
      return f(limitedDepthRecursive(n2 - 1, f, g), ...args);
    };
  }
  return g;
}
function trimCharacter(str, char) {
  let start = 0;
  let end = str.length;
  while (start < end && str[start] === char) {
    ++start;
  }
  while (end > start && str[end - 1] === char) {
    --end;
  }
  return start > 0 || end < str.length ? str.substring(start, end) : str;
}
function trimCharacterEnd(str, char) {
  let end = str.length;
  while (end > 0 && str[end - 1] === char) {
    --end;
  }
  return end < str.length ? str.substring(0, end) : str;
}
function unicodeEscape(str) {
  return str.replace(/[\s\S]/g, (c2) => "\\u" + c2.charCodeAt().toString(16).padStart(4, "0"));
}
function mergeDuplicatesPreferLast(items, getKey) {
  const map2 = /* @__PURE__ */ new Map();
  for (let i = items.length; i-- > 0; ) {
    const item = items[i];
    const key = getKey(item);
    map2.set(
      key,
      map2.has(key) ? (0, import_deepmerge.default)(item, map2.get(key), { arrayMerge: overwriteMerge$1 }) : item
    );
  }
  return [...map2.values()].reverse();
}
function get(obj, path) {
  for (const key of path) {
    if (!obj) {
      return void 0;
    }
    obj = obj[key];
  }
  return obj;
}
function numberToLetterSequence(num, baseChar = "a", base = 26) {
  const digits = [];
  do {
    num -= 1;
    digits.push(num % base);
    num = num / base >> 0;
  } while (num > 0);
  const baseCode = baseChar.charCodeAt(0);
  return digits.reverse().map((n2) => String.fromCharCode(baseCode + n2)).join("");
}
function numberToRoman(num) {
  return [...num + ""].map((n2) => +n2).reverse().map((v2, i) => v2 % 5 < 4 ? (v2 < 5 ? "" : V[i]) + I[i].repeat(v2 % 5) : I[i] + (v2 < 5 ? V[i] : I[i + 1])).reverse().join("");
}
function charactersToCodes(str) {
  return [...str].map((c2) => "\\u" + c2.charCodeAt(0).toString(16).padStart(4, "0")).join("");
}
function getText(stackItem) {
  if (!(stackItem instanceof BlockStackItem || stackItem instanceof ListItemStackItem || stackItem instanceof TableCellStackItem)) {
    throw new Error("Only blocks, list items and table cells can be requested for text contents.");
  }
  return stackItem.inlineTextBuilder.isEmpty() ? stackItem.rawText : stackItem.rawText + stackItem.inlineTextBuilder.toString();
}
function addText(stackItem, text, leadingLineBreaks, trailingLineBreaks) {
  if (!(stackItem instanceof BlockStackItem || stackItem instanceof ListItemStackItem || stackItem instanceof TableCellStackItem)) {
    throw new Error("Only blocks, list items and table cells can contain text.");
  }
  const parentText = getText(stackItem);
  const lineBreaks = Math.max(stackItem.stashedLineBreaks, leadingLineBreaks);
  stackItem.inlineTextBuilder.clear();
  if (parentText) {
    stackItem.rawText = parentText + "\n".repeat(lineBreaks) + text;
  } else {
    stackItem.rawText = text;
    stackItem.leadingLineBreaks = lineBreaks;
  }
  stackItem.stashedLineBreaks = trailingLineBreaks;
}
function applyTransformer(str, transformer) {
  return transformer ? applyTransformer(transformer.transform(str), transformer.next) : str;
}
function compile$1(options = {}) {
  const selectorsWithoutFormat = options.selectors.filter((s2) => !s2.format);
  if (selectorsWithoutFormat.length) {
    throw new Error(
      "Following selectors have no specified format: " + selectorsWithoutFormat.map((s2) => `\`${s2.selector}\``).join(", ")
    );
  }
  const picker = new DecisionTree(
    options.selectors.map((s2) => [s2.selector, s2])
  ).build(hp2Builder);
  if (typeof options.encodeCharacters !== "function") {
    options.encodeCharacters = makeReplacerFromDict(options.encodeCharacters);
  }
  const baseSelectorsPicker = new DecisionTree(
    options.baseElements.selectors.map((s2, i) => [s2, i + 1])
  ).build(hp2Builder);
  function findBaseElements(dom) {
    return findBases(dom, options, baseSelectorsPicker);
  }
  const limitedWalk = limitedDepthRecursive(
    options.limits.maxDepth,
    recursiveWalk,
    function(dom, builder) {
      builder.addInline(options.limits.ellipsis || "");
    }
  );
  return function(html, metadata = void 0) {
    return process2(html, metadata, options, picker, findBaseElements, limitedWalk);
  };
}
function process2(html, metadata, options, picker, findBaseElements, walk) {
  const maxInputLength = options.limits.maxInputLength;
  if (maxInputLength && html && html.length > maxInputLength) {
    console.warn(
      `Input length ${html.length} is above allowed limit of ${maxInputLength}. Truncating without ellipsis.`
    );
    html = html.substring(0, maxInputLength);
  }
  const document = parseDocument(html, { decodeEntities: options.decodeEntities });
  const bases = findBaseElements(document.children);
  const builder = new BlockTextBuilder(options, picker, metadata);
  walk(bases, builder);
  return builder.toString();
}
function findBases(dom, options, baseSelectorsPicker) {
  const results = [];
  function recursiveWalk2(walk, dom2) {
    dom2 = dom2.slice(0, options.limits.maxChildNodes);
    for (const elem of dom2) {
      if (elem.type !== "tag") {
        continue;
      }
      const pickedSelectorIndex = baseSelectorsPicker.pick1(elem);
      if (pickedSelectorIndex > 0) {
        results.push({ selectorIndex: pickedSelectorIndex, element: elem });
      } else if (elem.children) {
        walk(elem.children);
      }
      if (results.length >= options.limits.maxBaseElements) {
        return;
      }
    }
  }
  const limitedWalk = limitedDepthRecursive(
    options.limits.maxDepth,
    recursiveWalk2
  );
  limitedWalk(dom);
  if (options.baseElements.orderBy !== "occurrence") {
    results.sort((a, b2) => a.selectorIndex - b2.selectorIndex);
  }
  return options.baseElements.returnDomByDefault && results.length === 0 ? dom : results.map((x2) => x2.element);
}
function recursiveWalk(walk, dom, builder) {
  if (!dom) {
    return;
  }
  const options = builder.options;
  const tooManyChildNodes = dom.length > options.limits.maxChildNodes;
  if (tooManyChildNodes) {
    dom = dom.slice(0, options.limits.maxChildNodes);
    dom.push({
      data: options.limits.ellipsis,
      type: "text"
    });
  }
  for (const elem of dom) {
    switch (elem.type) {
      case "text": {
        builder.addInline(elem.data);
        break;
      }
      case "tag": {
        const tagDefinition = builder.picker.pick1(elem);
        const format = options.formatters[tagDefinition.format];
        format(elem, walk, builder, tagDefinition.options || {});
        break;
      }
    }
  }
  return;
}
function makeReplacerFromDict(dict) {
  if (!dict || Object.keys(dict).length === 0) {
    return void 0;
  }
  const entries = Object.entries(dict).filter(([, v2]) => v2 !== false);
  const regex = new RegExp(
    entries.map(([c2]) => `(${unicodeEscape([...c2][0])})`).join("|"),
    "g"
  );
  const values = entries.map(([, v2]) => v2);
  const replacer = (m2, ...cgs) => values[cgs.findIndex((cg) => cg)];
  return (str) => str.replace(regex, replacer);
}
function formatSkip(elem, walk, builder, formatOptions) {
}
function formatInlineString(elem, walk, builder, formatOptions) {
  builder.addLiteral(formatOptions.string || "");
}
function formatBlockString(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  builder.addLiteral(formatOptions.string || "");
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function formatInline(elem, walk, builder, formatOptions) {
  walk(elem.children, builder);
}
function formatBlock$1(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  walk(elem.children, builder);
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function renderOpenTag(elem) {
  const attrs = elem.attribs && elem.attribs.length ? " " + Object.entries(elem.attribs).map(([k3, v2]) => v2 === "" ? k3 : `${k3}=${v2.replace(/"/g, "&quot;")}`).join(" ") : "";
  return `<${elem.name}${attrs}>`;
}
function renderCloseTag(elem) {
  return `</${elem.name}>`;
}
function formatInlineTag(elem, walk, builder, formatOptions) {
  builder.startNoWrap();
  builder.addLiteral(renderOpenTag(elem));
  builder.stopNoWrap();
  walk(elem.children, builder);
  builder.startNoWrap();
  builder.addLiteral(renderCloseTag(elem));
  builder.stopNoWrap();
}
function formatBlockTag(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  builder.startNoWrap();
  builder.addLiteral(renderOpenTag(elem));
  builder.stopNoWrap();
  walk(elem.children, builder);
  builder.startNoWrap();
  builder.addLiteral(renderCloseTag(elem));
  builder.stopNoWrap();
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function formatInlineHtml(elem, walk, builder, formatOptions) {
  builder.startNoWrap();
  builder.addLiteral(
    render(elem, { decodeEntities: builder.options.decodeEntities })
  );
  builder.stopNoWrap();
}
function formatBlockHtml(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  builder.startNoWrap();
  builder.addLiteral(
    render(elem, { decodeEntities: builder.options.decodeEntities })
  );
  builder.stopNoWrap();
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function formatInlineSurround(elem, walk, builder, formatOptions) {
  builder.addLiteral(formatOptions.prefix || "");
  walk(elem.children, builder);
  builder.addLiteral(formatOptions.suffix || "");
}
function getRow(matrix, j2) {
  if (!matrix[j2]) {
    matrix[j2] = [];
  }
  return matrix[j2];
}
function findFirstVacantIndex(row, x2 = 0) {
  while (row[x2]) {
    x2++;
  }
  return x2;
}
function transposeInPlace(matrix, maxSize) {
  for (let i = 0; i < maxSize; i++) {
    const rowI = getRow(matrix, i);
    for (let j2 = 0; j2 < i; j2++) {
      const rowJ = getRow(matrix, j2);
      if (rowI[j2] || rowJ[i]) {
        const temp = rowI[j2];
        rowI[j2] = rowJ[i];
        rowJ[i] = temp;
      }
    }
  }
}
function putCellIntoLayout(cell, layout, baseRow, baseCol) {
  for (let r2 = 0; r2 < cell.rowspan; r2++) {
    const layoutRow = getRow(layout, baseRow + r2);
    for (let c2 = 0; c2 < cell.colspan; c2++) {
      layoutRow[baseCol + c2] = cell;
    }
  }
}
function getOrInitOffset(offsets, index) {
  if (offsets[index] === void 0) {
    offsets[index] = index === 0 ? 0 : 1 + getOrInitOffset(offsets, index - 1);
  }
  return offsets[index];
}
function updateOffset(offsets, base, span, value) {
  offsets[base + span] = Math.max(
    getOrInitOffset(offsets, base + span),
    getOrInitOffset(offsets, base) + value
  );
}
function tableToString(tableRows, rowSpacing, colSpacing) {
  const layout = [];
  let colNumber = 0;
  const rowNumber = tableRows.length;
  const rowOffsets = [0];
  for (let j2 = 0; j2 < rowNumber; j2++) {
    const layoutRow = getRow(layout, j2);
    const cells = tableRows[j2];
    let x2 = 0;
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];
      x2 = findFirstVacantIndex(layoutRow, x2);
      putCellIntoLayout(cell, layout, j2, x2);
      x2 += cell.colspan;
      cell.lines = cell.text.split("\n");
      const cellHeight = cell.lines.length;
      updateOffset(rowOffsets, j2, cell.rowspan, cellHeight + rowSpacing);
    }
    colNumber = layoutRow.length > colNumber ? layoutRow.length : colNumber;
  }
  transposeInPlace(layout, rowNumber > colNumber ? rowNumber : colNumber);
  const outputLines = [];
  const colOffsets = [0];
  for (let x2 = 0; x2 < colNumber; x2++) {
    let y2 = 0;
    let cell;
    const rowsInThisColumn = Math.min(rowNumber, layout[x2].length);
    while (y2 < rowsInThisColumn) {
      cell = layout[x2][y2];
      if (cell) {
        if (!cell.rendered) {
          let cellWidth = 0;
          for (let j2 = 0; j2 < cell.lines.length; j2++) {
            const line = cell.lines[j2];
            const lineOffset = rowOffsets[y2] + j2;
            outputLines[lineOffset] = (outputLines[lineOffset] || "").padEnd(colOffsets[x2]) + line;
            cellWidth = line.length > cellWidth ? line.length : cellWidth;
          }
          updateOffset(colOffsets, x2, cell.colspan, cellWidth + colSpacing);
          cell.rendered = true;
        }
        y2 += cell.rowspan;
      } else {
        const lineOffset = rowOffsets[y2];
        outputLines[lineOffset] = outputLines[lineOffset] || "";
        y2++;
      }
    }
  }
  return outputLines.join("\n");
}
function formatLineBreak(elem, walk, builder, formatOptions) {
  builder.addLineBreak();
}
function formatWbr(elem, walk, builder, formatOptions) {
  builder.addWordBreakOpportunity();
}
function formatHorizontalLine(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  builder.addInline("-".repeat(formatOptions.length || builder.options.wordwrap || 40));
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function formatParagraph(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  walk(elem.children, builder);
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function formatPre(elem, walk, builder, formatOptions) {
  builder.openBlock({
    isPre: true,
    leadingLineBreaks: formatOptions.leadingLineBreaks || 2
  });
  walk(elem.children, builder);
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function formatHeading(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks || 2 });
  if (formatOptions.uppercase !== false) {
    builder.pushWordTransform((str) => str.toUpperCase());
    walk(elem.children, builder);
    builder.popWordTransform();
  } else {
    walk(elem.children, builder);
  }
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks || 2 });
}
function formatBlockquote(elem, walk, builder, formatOptions) {
  builder.openBlock({
    leadingLineBreaks: formatOptions.leadingLineBreaks || 2,
    reservedLineLength: 2
  });
  walk(elem.children, builder);
  builder.closeBlock({
    trailingLineBreaks: formatOptions.trailingLineBreaks || 2,
    blockTransform: (str) => (formatOptions.trimEmptyLines !== false ? trimCharacter(str, "\n") : str).split("\n").map((line) => "> " + line).join("\n")
  });
}
function withBrackets(str, brackets) {
  if (!brackets) {
    return str;
  }
  const lbr = typeof brackets[0] === "string" ? brackets[0] : "[";
  const rbr = typeof brackets[1] === "string" ? brackets[1] : "]";
  return lbr + str + rbr;
}
function pathRewrite(path, rewriter, baseUrl2, metadata, elem) {
  const modifiedPath = typeof rewriter === "function" ? rewriter(path, metadata, elem) : path;
  return modifiedPath[0] === "/" && baseUrl2 ? trimCharacterEnd(baseUrl2, "/") + modifiedPath : modifiedPath;
}
function formatImage(elem, walk, builder, formatOptions) {
  const attribs = elem.attribs || {};
  const alt = attribs.alt ? attribs.alt : "";
  const src = !attribs.src ? "" : pathRewrite(attribs.src, formatOptions.pathRewrite, formatOptions.baseUrl, builder.metadata, elem);
  const text = !src ? alt : !alt ? withBrackets(src, formatOptions.linkBrackets) : alt + " " + withBrackets(src, formatOptions.linkBrackets);
  builder.addInline(text, { noWordTransform: true });
}
function formatAnchor(elem, walk, builder, formatOptions) {
  function getHref() {
    if (formatOptions.ignoreHref) {
      return "";
    }
    if (!elem.attribs || !elem.attribs.href) {
      return "";
    }
    let href2 = elem.attribs.href.replace(/^mailto:/, "");
    if (formatOptions.noAnchorUrl && href2[0] === "#") {
      return "";
    }
    href2 = pathRewrite(href2, formatOptions.pathRewrite, formatOptions.baseUrl, builder.metadata, elem);
    return href2;
  }
  const href = getHref();
  if (!href) {
    walk(elem.children, builder);
  } else {
    let text = "";
    builder.pushWordTransform(
      (str) => {
        if (str) {
          text += str;
        }
        return str;
      }
    );
    walk(elem.children, builder);
    builder.popWordTransform();
    const hideSameLink = formatOptions.hideLinkHrefIfSameAsText && href === text;
    if (!hideSameLink) {
      builder.addInline(
        !text ? href : " " + withBrackets(href, formatOptions.linkBrackets),
        { noWordTransform: true }
      );
    }
  }
}
function formatList(elem, walk, builder, formatOptions, nextPrefixCallback) {
  const isNestedList = get(elem, ["parent", "name"]) === "li";
  let maxPrefixLength = 0;
  const listItems = (elem.children || []).filter((child) => child.type !== "text" || !/^\s*$/.test(child.data)).map(function(child) {
    if (child.name !== "li") {
      return { node: child, prefix: "" };
    }
    const prefix = isNestedList ? nextPrefixCallback().trimStart() : nextPrefixCallback();
    if (prefix.length > maxPrefixLength) {
      maxPrefixLength = prefix.length;
    }
    return { node: child, prefix };
  });
  if (!listItems.length) {
    return;
  }
  builder.openList({
    interRowLineBreaks: 1,
    leadingLineBreaks: isNestedList ? 1 : formatOptions.leadingLineBreaks || 2,
    maxPrefixLength,
    prefixAlign: "left"
  });
  for (const { node, prefix } of listItems) {
    builder.openListItem({ prefix });
    walk([node], builder);
    builder.closeListItem();
  }
  builder.closeList({ trailingLineBreaks: isNestedList ? 1 : formatOptions.trailingLineBreaks || 2 });
}
function formatUnorderedList(elem, walk, builder, formatOptions) {
  const prefix = formatOptions.itemPrefix || " * ";
  return formatList(elem, walk, builder, formatOptions, () => prefix);
}
function formatOrderedList(elem, walk, builder, formatOptions) {
  let nextIndex = Number(elem.attribs.start || "1");
  const indexFunction = getOrderedListIndexFunction(elem.attribs.type);
  const nextPrefixCallback = () => " " + indexFunction(nextIndex++) + ". ";
  return formatList(elem, walk, builder, formatOptions, nextPrefixCallback);
}
function getOrderedListIndexFunction(olType = "1") {
  switch (olType) {
    case "a":
      return (i) => numberToLetterSequence(i, "a");
    case "A":
      return (i) => numberToLetterSequence(i, "A");
    case "i":
      return (i) => numberToRoman(i).toLowerCase();
    case "I":
      return (i) => numberToRoman(i);
    case "1":
    default:
      return (i) => i.toString();
  }
}
function splitClassesAndIds(selectors) {
  const classes = [];
  const ids = [];
  for (const selector of selectors) {
    if (selector.startsWith(".")) {
      classes.push(selector.substring(1));
    } else if (selector.startsWith("#")) {
      ids.push(selector.substring(1));
    }
  }
  return { classes, ids };
}
function isDataTable(attr, tables) {
  if (tables === true) {
    return true;
  }
  if (!attr) {
    return false;
  }
  const { classes, ids } = splitClassesAndIds(tables);
  const attrClasses = (attr["class"] || "").split(" ");
  const attrIds = (attr["id"] || "").split(" ");
  return attrClasses.some((x2) => classes.includes(x2)) || attrIds.some((x2) => ids.includes(x2));
}
function formatTable(elem, walk, builder, formatOptions) {
  return isDataTable(elem.attribs, builder.options.tables) ? formatDataTable(elem, walk, builder, formatOptions) : formatBlock(elem, walk, builder, formatOptions);
}
function formatBlock(elem, walk, builder, formatOptions) {
  builder.openBlock({ leadingLineBreaks: formatOptions.leadingLineBreaks });
  walk(elem.children, builder);
  builder.closeBlock({ trailingLineBreaks: formatOptions.trailingLineBreaks });
}
function formatDataTable(elem, walk, builder, formatOptions) {
  builder.openTable();
  elem.children.forEach(walkTable);
  builder.closeTable({
    tableToString: (rows) => tableToString(rows, formatOptions.rowSpacing ?? 0, formatOptions.colSpacing ?? 3),
    leadingLineBreaks: formatOptions.leadingLineBreaks,
    trailingLineBreaks: formatOptions.trailingLineBreaks
  });
  function formatCell(cellNode) {
    const colspan = +get(cellNode, ["attribs", "colspan"]) || 1;
    const rowspan = +get(cellNode, ["attribs", "rowspan"]) || 1;
    builder.openTableCell({ maxColumnWidth: formatOptions.maxColumnWidth });
    walk(cellNode.children, builder);
    builder.closeTableCell({ colspan, rowspan });
  }
  function walkTable(elem2) {
    if (elem2.type !== "tag") {
      return;
    }
    const formatHeaderCell = formatOptions.uppercaseHeaderCells !== false ? (cellNode) => {
      builder.pushWordTransform((str) => str.toUpperCase());
      formatCell(cellNode);
      builder.popWordTransform();
    } : formatCell;
    switch (elem2.name) {
      case "thead":
      case "tbody":
      case "tfoot":
      case "center":
        elem2.children.forEach(walkTable);
        return;
      case "tr": {
        builder.openTableRow();
        for (const childOfTr of elem2.children) {
          if (childOfTr.type !== "tag") {
            continue;
          }
          switch (childOfTr.name) {
            case "th": {
              formatHeaderCell(childOfTr);
              break;
            }
            case "td": {
              formatCell(childOfTr);
              break;
            }
          }
        }
        builder.closeTableRow();
        break;
      }
    }
  }
}
function compile(options = {}) {
  options = (0, import_deepmerge.default)(
    DEFAULT_OPTIONS,
    options,
    {
      arrayMerge: overwriteMerge,
      customMerge: (key) => key === "selectors" ? selectorsMerge : void 0
    }
  );
  options.formatters = Object.assign({}, genericFormatters, textFormatters, options.formatters);
  options.selectors = mergeDuplicatesPreferLast(options.selectors, (s2) => s2.selector);
  handleDeprecatedOptions(options);
  return compile$1(options);
}
function convert(html, options = {}, metadata = void 0) {
  return compile(options)(html, metadata);
}
function handleDeprecatedOptions(options) {
  if (options.tags) {
    const tagDefinitions = Object.entries(options.tags).map(
      ([selector, definition]) => ({ ...definition, selector: selector || "*" })
    );
    options.selectors.push(...tagDefinitions);
    options.selectors = mergeDuplicatesPreferLast(options.selectors, (s2) => s2.selector);
  }
  function set(obj, path, value) {
    const valueKey = path.pop();
    for (const key of path) {
      let nested = obj[key];
      if (!nested) {
        nested = {};
        obj[key] = nested;
      }
      obj = nested;
    }
    obj[valueKey] = value;
  }
  if (options["baseElement"]) {
    const baseElement = options["baseElement"];
    set(
      options,
      ["baseElements", "selectors"],
      Array.isArray(baseElement) ? baseElement : [baseElement]
    );
  }
  if (options["returnDomByDefault"] !== void 0) {
    set(options, ["baseElements", "returnDomByDefault"], options["returnDomByDefault"]);
  }
  for (const definition of options.selectors) {
    if (definition.format === "anchor" && get(definition, ["options", "noLinkBrackets"])) {
      set(definition, ["options", "linkBrackets"], false);
    }
  }
}
var import_deepmerge, overwriteMerge$1, I, V, InlineTextBuilder, StackItem, BlockStackItem, ListStackItem, ListItemStackItem, TableStackItem, TableRowStackItem, TableCellStackItem, TransformerStackItem, WhitespaceProcessor, BlockTextBuilder, genericFormatters, textFormatters, DEFAULT_OPTIONS, concatMerge, overwriteMerge, selectorsMerge;
var init_html_to_text = __esm({
  "node_modules/html-to-text/lib/html-to-text.mjs"() {
    init_hp2_builder();
    init_esm6();
    init_selderee();
    import_deepmerge = __toESM(require_cjs(), 1);
    init_esm4();
    overwriteMerge$1 = (acc, src, options) => [...src];
    I = ["I", "X", "C", "M"];
    V = ["V", "L", "D"];
    InlineTextBuilder = class {
      /**
       * Creates an instance of InlineTextBuilder.
       *
       * If `maxLineLength` is not provided then it is either `options.wordwrap` or unlimited.
       *
       * @param { Options } options           HtmlToText options.
       * @param { number }  [ maxLineLength ] This builder will try to wrap text to fit this line length.
       */
      constructor(options, maxLineLength = void 0) {
        this.lines = [];
        this.nextLineWords = [];
        this.maxLineLength = maxLineLength || options.wordwrap || Number.MAX_VALUE;
        this.nextLineAvailableChars = this.maxLineLength;
        this.wrapCharacters = get(options, ["longWordSplit", "wrapCharacters"]) || [];
        this.forceWrapOnLimit = get(options, ["longWordSplit", "forceWrapOnLimit"]) || false;
        this.stashedSpace = false;
        this.wordBreakOpportunity = false;
      }
      /**
       * Add a new word.
       *
       * @param { string } word A word to add.
       * @param { boolean } [noWrap] Don't wrap text even if the line is too long.
       */
      pushWord(word, noWrap = false) {
        if (this.nextLineAvailableChars <= 0 && !noWrap) {
          this.startNewLine();
        }
        const isLineStart = this.nextLineWords.length === 0;
        const cost = word.length + (isLineStart ? 0 : 1);
        if (cost <= this.nextLineAvailableChars || noWrap) {
          this.nextLineWords.push(word);
          this.nextLineAvailableChars -= cost;
        } else {
          const [first, ...rest] = this.splitLongWord(word);
          if (!isLineStart) {
            this.startNewLine();
          }
          this.nextLineWords.push(first);
          this.nextLineAvailableChars -= first.length;
          for (const part of rest) {
            this.startNewLine();
            this.nextLineWords.push(part);
            this.nextLineAvailableChars -= part.length;
          }
        }
      }
      /**
       * Pop a word from the currently built line.
       * This doesn't affect completed lines.
       *
       * @returns { string }
       */
      popWord() {
        const lastWord = this.nextLineWords.pop();
        if (lastWord !== void 0) {
          const isLineStart = this.nextLineWords.length === 0;
          const cost = lastWord.length + (isLineStart ? 0 : 1);
          this.nextLineAvailableChars += cost;
        }
        return lastWord;
      }
      /**
       * Concat a word to the last word already in the builder.
       * Adds a new word in case there are no words yet in the last line.
       *
       * @param { string } word A word to be concatenated.
       * @param { boolean } [noWrap] Don't wrap text even if the line is too long.
       */
      concatWord(word, noWrap = false) {
        if (this.wordBreakOpportunity && word.length > this.nextLineAvailableChars) {
          this.pushWord(word, noWrap);
          this.wordBreakOpportunity = false;
        } else {
          const lastWord = this.popWord();
          this.pushWord(lastWord ? lastWord.concat(word) : word, noWrap);
        }
      }
      /**
       * Add current line (and more empty lines if provided argument > 1) to the list of complete lines and start a new one.
       *
       * @param { number } n Number of line breaks that will be added to the resulting string.
       */
      startNewLine(n2 = 1) {
        this.lines.push(this.nextLineWords);
        if (n2 > 1) {
          this.lines.push(...Array.from({ length: n2 - 1 }, () => []));
        }
        this.nextLineWords = [];
        this.nextLineAvailableChars = this.maxLineLength;
      }
      /**
       * No words in this builder.
       *
       * @returns { boolean }
       */
      isEmpty() {
        return this.lines.length === 0 && this.nextLineWords.length === 0;
      }
      clear() {
        this.lines.length = 0;
        this.nextLineWords.length = 0;
        this.nextLineAvailableChars = this.maxLineLength;
      }
      /**
       * Join all lines of words inside the InlineTextBuilder into a complete string.
       *
       * @returns { string }
       */
      toString() {
        return [...this.lines, this.nextLineWords].map((words) => words.join(" ")).join("\n");
      }
      /**
       * Split a long word up to fit within the word wrap limit.
       * Use either a character to split looking back from the word wrap limit,
       * or truncate to the word wrap limit.
       *
       * @param   { string }   word Input word.
       * @returns { string[] }      Parts of the word.
       */
      splitLongWord(word) {
        const parts = [];
        let idx = 0;
        while (word.length > this.maxLineLength) {
          const firstLine = word.substring(0, this.maxLineLength);
          const remainingChars = word.substring(this.maxLineLength);
          const splitIndex = firstLine.lastIndexOf(this.wrapCharacters[idx]);
          if (splitIndex > -1) {
            word = firstLine.substring(splitIndex + 1) + remainingChars;
            parts.push(firstLine.substring(0, splitIndex + 1));
          } else {
            idx++;
            if (idx < this.wrapCharacters.length) {
              word = firstLine + remainingChars;
            } else {
              if (this.forceWrapOnLimit) {
                parts.push(firstLine);
                word = remainingChars;
                if (word.length > this.maxLineLength) {
                  continue;
                }
              } else {
                word = firstLine + remainingChars;
              }
              break;
            }
          }
        }
        parts.push(word);
        return parts;
      }
    };
    StackItem = class {
      constructor(next = null) {
        this.next = next;
      }
      getRoot() {
        return this.next ? this.next : this;
      }
    };
    BlockStackItem = class extends StackItem {
      constructor(options, next = null, leadingLineBreaks = 1, maxLineLength = void 0) {
        super(next);
        this.leadingLineBreaks = leadingLineBreaks;
        this.inlineTextBuilder = new InlineTextBuilder(options, maxLineLength);
        this.rawText = "";
        this.stashedLineBreaks = 0;
        this.isPre = next && next.isPre;
        this.isNoWrap = next && next.isNoWrap;
      }
    };
    ListStackItem = class extends BlockStackItem {
      constructor(options, next = null, {
        interRowLineBreaks = 1,
        leadingLineBreaks = 2,
        maxLineLength = void 0,
        maxPrefixLength = 0,
        prefixAlign = "left"
      } = {}) {
        super(options, next, leadingLineBreaks, maxLineLength);
        this.maxPrefixLength = maxPrefixLength;
        this.prefixAlign = prefixAlign;
        this.interRowLineBreaks = interRowLineBreaks;
      }
    };
    ListItemStackItem = class extends BlockStackItem {
      constructor(options, next = null, {
        leadingLineBreaks = 1,
        maxLineLength = void 0,
        prefix = ""
      } = {}) {
        super(options, next, leadingLineBreaks, maxLineLength);
        this.prefix = prefix;
      }
    };
    TableStackItem = class extends StackItem {
      constructor(next = null) {
        super(next);
        this.rows = [];
        this.isPre = next && next.isPre;
        this.isNoWrap = next && next.isNoWrap;
      }
    };
    TableRowStackItem = class extends StackItem {
      constructor(next = null) {
        super(next);
        this.cells = [];
        this.isPre = next && next.isPre;
        this.isNoWrap = next && next.isNoWrap;
      }
    };
    TableCellStackItem = class extends StackItem {
      constructor(options, next = null, maxColumnWidth = void 0) {
        super(next);
        this.inlineTextBuilder = new InlineTextBuilder(options, maxColumnWidth);
        this.rawText = "";
        this.stashedLineBreaks = 0;
        this.isPre = next && next.isPre;
        this.isNoWrap = next && next.isNoWrap;
      }
    };
    TransformerStackItem = class extends StackItem {
      constructor(next = null, transform) {
        super(next);
        this.transform = transform;
      }
    };
    WhitespaceProcessor = class {
      /**
       * Creates an instance of WhitespaceProcessor.
       *
       * @param { Options } options    HtmlToText options.
       * @memberof WhitespaceProcessor
       */
      constructor(options) {
        this.whitespaceChars = options.preserveNewlines ? options.whitespaceCharacters.replace(/\n/g, "") : options.whitespaceCharacters;
        const whitespaceCodes = charactersToCodes(this.whitespaceChars);
        this.leadingWhitespaceRe = new RegExp(`^[${whitespaceCodes}]`);
        this.trailingWhitespaceRe = new RegExp(`[${whitespaceCodes}]$`);
        this.allWhitespaceOrEmptyRe = new RegExp(`^[${whitespaceCodes}]*$`);
        this.newlineOrNonWhitespaceRe = new RegExp(`(\\n|[^\\n${whitespaceCodes}])`, "g");
        this.newlineOrNonNewlineStringRe = new RegExp(`(\\n|[^\\n]+)`, "g");
        if (options.preserveNewlines) {
          const wordOrNewlineRe = new RegExp(`\\n|[^\\n${whitespaceCodes}]+`, "gm");
          this.shrinkWrapAdd = function(text, inlineTextBuilder, transform = (str) => str, noWrap = false) {
            if (!text) {
              return;
            }
            const previouslyStashedSpace = inlineTextBuilder.stashedSpace;
            let anyMatch = false;
            let m2 = wordOrNewlineRe.exec(text);
            if (m2) {
              anyMatch = true;
              if (m2[0] === "\n") {
                inlineTextBuilder.startNewLine();
              } else if (previouslyStashedSpace || this.testLeadingWhitespace(text)) {
                inlineTextBuilder.pushWord(transform(m2[0]), noWrap);
              } else {
                inlineTextBuilder.concatWord(transform(m2[0]), noWrap);
              }
              while ((m2 = wordOrNewlineRe.exec(text)) !== null) {
                if (m2[0] === "\n") {
                  inlineTextBuilder.startNewLine();
                } else {
                  inlineTextBuilder.pushWord(transform(m2[0]), noWrap);
                }
              }
            }
            inlineTextBuilder.stashedSpace = previouslyStashedSpace && !anyMatch || this.testTrailingWhitespace(text);
          };
        } else {
          const wordRe = new RegExp(`[^${whitespaceCodes}]+`, "g");
          this.shrinkWrapAdd = function(text, inlineTextBuilder, transform = (str) => str, noWrap = false) {
            if (!text) {
              return;
            }
            const previouslyStashedSpace = inlineTextBuilder.stashedSpace;
            let anyMatch = false;
            let m2 = wordRe.exec(text);
            if (m2) {
              anyMatch = true;
              if (previouslyStashedSpace || this.testLeadingWhitespace(text)) {
                inlineTextBuilder.pushWord(transform(m2[0]), noWrap);
              } else {
                inlineTextBuilder.concatWord(transform(m2[0]), noWrap);
              }
              while ((m2 = wordRe.exec(text)) !== null) {
                inlineTextBuilder.pushWord(transform(m2[0]), noWrap);
              }
            }
            inlineTextBuilder.stashedSpace = previouslyStashedSpace && !anyMatch || this.testTrailingWhitespace(text);
          };
        }
      }
      /**
       * Add text with only minimal processing.
       * Everything between newlines considered a single word.
       * No whitespace is trimmed.
       * Not affected by preserveNewlines option - `\n` always starts a new line.
       *
       * `noWrap` argument is `true` by default - this won't start a new line
       * even if there is not enough space left in the current line.
       *
       * @param { string }            text              Input text.
       * @param { InlineTextBuilder } inlineTextBuilder A builder to receive processed text.
       * @param { boolean }           [noWrap] Don't wrap text even if the line is too long.
       */
      addLiteral(text, inlineTextBuilder, noWrap = true) {
        if (!text) {
          return;
        }
        const previouslyStashedSpace = inlineTextBuilder.stashedSpace;
        let anyMatch = false;
        let m2 = this.newlineOrNonNewlineStringRe.exec(text);
        if (m2) {
          anyMatch = true;
          if (m2[0] === "\n") {
            inlineTextBuilder.startNewLine();
          } else if (previouslyStashedSpace) {
            inlineTextBuilder.pushWord(m2[0], noWrap);
          } else {
            inlineTextBuilder.concatWord(m2[0], noWrap);
          }
          while ((m2 = this.newlineOrNonNewlineStringRe.exec(text)) !== null) {
            if (m2[0] === "\n") {
              inlineTextBuilder.startNewLine();
            } else {
              inlineTextBuilder.pushWord(m2[0], noWrap);
            }
          }
        }
        inlineTextBuilder.stashedSpace = previouslyStashedSpace && !anyMatch;
      }
      /**
       * Test whether the given text starts with HTML whitespace character.
       *
       * @param   { string }  text  The string to test.
       * @returns { boolean }
       */
      testLeadingWhitespace(text) {
        return this.leadingWhitespaceRe.test(text);
      }
      /**
       * Test whether the given text ends with HTML whitespace character.
       *
       * @param   { string }  text  The string to test.
       * @returns { boolean }
       */
      testTrailingWhitespace(text) {
        return this.trailingWhitespaceRe.test(text);
      }
      /**
       * Test whether the given text contains any non-whitespace characters.
       *
       * @param   { string }  text  The string to test.
       * @returns { boolean }
       */
      testContainsWords(text) {
        return !this.allWhitespaceOrEmptyRe.test(text);
      }
      /**
       * Return the number of newlines if there are no words.
       *
       * If any word is found then return zero regardless of the actual number of newlines.
       *
       * @param   { string }  text  Input string.
       * @returns { number }
       */
      countNewlinesNoWords(text) {
        this.newlineOrNonWhitespaceRe.lastIndex = 0;
        let counter = 0;
        let match;
        while ((match = this.newlineOrNonWhitespaceRe.exec(text)) !== null) {
          if (match[0] === "\n") {
            counter++;
          } else {
            return 0;
          }
        }
        return counter;
      }
    };
    BlockTextBuilder = class {
      /**
       * Creates an instance of BlockTextBuilder.
       *
       * @param { Options } options HtmlToText options.
       * @param { import('selderee').Picker<DomNode, TagDefinition> } picker Selectors decision tree picker.
       * @param { any} [metadata] Optional metadata for HTML document, for use in formatters.
       */
      constructor(options, picker, metadata = void 0) {
        this.options = options;
        this.picker = picker;
        this.metadata = metadata;
        this.whitespaceProcessor = new WhitespaceProcessor(options);
        this._stackItem = new BlockStackItem(options);
        this._wordTransformer = void 0;
      }
      /**
       * Put a word-by-word transform function onto the transformations stack.
       *
       * Mainly used for uppercasing. Can be bypassed to add unformatted text such as URLs.
       *
       * Word transformations applied before wrapping.
       *
       * @param { (str: string) => string } wordTransform Word transformation function.
       */
      pushWordTransform(wordTransform) {
        this._wordTransformer = new TransformerStackItem(this._wordTransformer, wordTransform);
      }
      /**
       * Remove a function from the word transformations stack.
       *
       * @returns { (str: string) => string } A function that was removed.
       */
      popWordTransform() {
        if (!this._wordTransformer) {
          return void 0;
        }
        const transform = this._wordTransformer.transform;
        this._wordTransformer = this._wordTransformer.next;
        return transform;
      }
      /**
       * Ignore wordwrap option in followup inline additions and disable automatic wrapping.
       */
      startNoWrap() {
        this._stackItem.isNoWrap = true;
      }
      /**
       * Return automatic wrapping to behavior defined by options.
       */
      stopNoWrap() {
        this._stackItem.isNoWrap = false;
      }
      /** @returns { (str: string) => string } */
      _getCombinedWordTransformer() {
        const wt3 = this._wordTransformer ? (str) => applyTransformer(str, this._wordTransformer) : void 0;
        const ce3 = this.options.encodeCharacters;
        return wt3 ? ce3 ? (str) => ce3(wt3(str)) : wt3 : ce3;
      }
      _popStackItem() {
        const item = this._stackItem;
        this._stackItem = item.next;
        return item;
      }
      /**
       * Add a line break into currently built block.
       */
      addLineBreak() {
        if (!(this._stackItem instanceof BlockStackItem || this._stackItem instanceof ListItemStackItem || this._stackItem instanceof TableCellStackItem)) {
          return;
        }
        if (this._stackItem.isPre) {
          this._stackItem.rawText += "\n";
        } else {
          this._stackItem.inlineTextBuilder.startNewLine();
        }
      }
      /**
       * Allow to break line in case directly following text will not fit.
       */
      addWordBreakOpportunity() {
        if (this._stackItem instanceof BlockStackItem || this._stackItem instanceof ListItemStackItem || this._stackItem instanceof TableCellStackItem) {
          this._stackItem.inlineTextBuilder.wordBreakOpportunity = true;
        }
      }
      /**
       * Add a node inline into the currently built block.
       *
       * @param { string } str
       * Text content of a node to add.
       *
       * @param { object } [param1]
       * Object holding the parameters of the operation.
       *
       * @param { boolean } [param1.noWordTransform]
       * Ignore word transformers if there are any.
       * Don't encode characters as well.
       * (Use this for things like URL addresses).
       */
      addInline(str, { noWordTransform = false } = {}) {
        if (!(this._stackItem instanceof BlockStackItem || this._stackItem instanceof ListItemStackItem || this._stackItem instanceof TableCellStackItem)) {
          return;
        }
        if (this._stackItem.isPre) {
          this._stackItem.rawText += str;
          return;
        }
        if (str.length === 0 || // empty string
        this._stackItem.stashedLineBreaks && // stashed linebreaks make whitespace irrelevant
        !this.whitespaceProcessor.testContainsWords(str)) {
          return;
        }
        if (this.options.preserveNewlines) {
          const newlinesNumber = this.whitespaceProcessor.countNewlinesNoWords(str);
          if (newlinesNumber > 0) {
            this._stackItem.inlineTextBuilder.startNewLine(newlinesNumber);
            return;
          }
        }
        if (this._stackItem.stashedLineBreaks) {
          this._stackItem.inlineTextBuilder.startNewLine(this._stackItem.stashedLineBreaks);
        }
        this.whitespaceProcessor.shrinkWrapAdd(
          str,
          this._stackItem.inlineTextBuilder,
          noWordTransform ? void 0 : this._getCombinedWordTransformer(),
          this._stackItem.isNoWrap
        );
        this._stackItem.stashedLineBreaks = 0;
      }
      /**
       * Add a string inline into the currently built block.
       *
       * Use this for markup elements that don't have to adhere
       * to text layout rules.
       *
       * @param { string } str Text to add.
       */
      addLiteral(str) {
        if (!(this._stackItem instanceof BlockStackItem || this._stackItem instanceof ListItemStackItem || this._stackItem instanceof TableCellStackItem)) {
          return;
        }
        if (str.length === 0) {
          return;
        }
        if (this._stackItem.isPre) {
          this._stackItem.rawText += str;
          return;
        }
        if (this._stackItem.stashedLineBreaks) {
          this._stackItem.inlineTextBuilder.startNewLine(this._stackItem.stashedLineBreaks);
        }
        this.whitespaceProcessor.addLiteral(
          str,
          this._stackItem.inlineTextBuilder,
          this._stackItem.isNoWrap
        );
        this._stackItem.stashedLineBreaks = 0;
      }
      /**
       * Start building a new block.
       *
       * @param { object } [param0]
       * Object holding the parameters of the block.
       *
       * @param { number } [param0.leadingLineBreaks]
       * This block should have at least this number of line breaks to separate it from any preceding block.
       *
       * @param { number }  [param0.reservedLineLength]
       * Reserve this number of characters on each line for block markup.
       *
       * @param { boolean } [param0.isPre]
       * Should HTML whitespace be preserved inside this block.
       */
      openBlock({ leadingLineBreaks = 1, reservedLineLength = 0, isPre = false } = {}) {
        const maxLineLength = Math.max(20, this._stackItem.inlineTextBuilder.maxLineLength - reservedLineLength);
        this._stackItem = new BlockStackItem(
          this.options,
          this._stackItem,
          leadingLineBreaks,
          maxLineLength
        );
        if (isPre) {
          this._stackItem.isPre = true;
        }
      }
      /**
       * Finalize currently built block, add it's content to the parent block.
       *
       * @param { object } [param0]
       * Object holding the parameters of the block.
       *
       * @param { number } [param0.trailingLineBreaks]
       * This block should have at least this number of line breaks to separate it from any following block.
       *
       * @param { (str: string) => string } [param0.blockTransform]
       * A function to transform the block text before adding to the parent block.
       * This happens after word wrap and should be used in combination with reserved line length
       * in order to keep line lengths correct.
       * Used for whole block markup.
       */
      closeBlock({ trailingLineBreaks = 1, blockTransform = void 0 } = {}) {
        const block = this._popStackItem();
        const blockText = blockTransform ? blockTransform(getText(block)) : getText(block);
        addText(this._stackItem, blockText, block.leadingLineBreaks, Math.max(block.stashedLineBreaks, trailingLineBreaks));
      }
      /**
       * Start building a new list.
       *
       * @param { object } [param0]
       * Object holding the parameters of the list.
       *
       * @param { number } [param0.maxPrefixLength]
       * Length of the longest list item prefix.
       * If not supplied or too small then list items won't be aligned properly.
       *
       * @param { 'left' | 'right' } [param0.prefixAlign]
       * Specify how prefixes of different lengths have to be aligned
       * within a column.
       *
       * @param { number } [param0.interRowLineBreaks]
       * Minimum number of line breaks between list items.
       *
       * @param { number } [param0.leadingLineBreaks]
       * This list should have at least this number of line breaks to separate it from any preceding block.
       */
      openList({ maxPrefixLength = 0, prefixAlign = "left", interRowLineBreaks = 1, leadingLineBreaks = 2 } = {}) {
        this._stackItem = new ListStackItem(this.options, this._stackItem, {
          interRowLineBreaks,
          leadingLineBreaks,
          maxLineLength: this._stackItem.inlineTextBuilder.maxLineLength,
          maxPrefixLength,
          prefixAlign
        });
      }
      /**
       * Start building a new list item.
       *
       * @param {object} param0
       * Object holding the parameters of the list item.
       *
       * @param { string } [param0.prefix]
       * Prefix for this list item (item number, bullet point, etc).
       */
      openListItem({ prefix = "" } = {}) {
        if (!(this._stackItem instanceof ListStackItem)) {
          throw new Error("Can't add a list item to something that is not a list! Check the formatter.");
        }
        const list = this._stackItem;
        const prefixLength = Math.max(prefix.length, list.maxPrefixLength);
        const maxLineLength = Math.max(20, list.inlineTextBuilder.maxLineLength - prefixLength);
        this._stackItem = new ListItemStackItem(this.options, list, {
          prefix,
          maxLineLength,
          leadingLineBreaks: list.interRowLineBreaks
        });
      }
      /**
       * Finalize currently built list item, add it's content to the parent list.
       */
      closeListItem() {
        const listItem = this._popStackItem();
        const list = listItem.next;
        const prefixLength = Math.max(listItem.prefix.length, list.maxPrefixLength);
        const spacing = "\n" + " ".repeat(prefixLength);
        const prefix = list.prefixAlign === "right" ? listItem.prefix.padStart(prefixLength) : listItem.prefix.padEnd(prefixLength);
        const text = prefix + getText(listItem).replace(/\n/g, spacing);
        addText(
          list,
          text,
          listItem.leadingLineBreaks,
          Math.max(listItem.stashedLineBreaks, list.interRowLineBreaks)
        );
      }
      /**
       * Finalize currently built list, add it's content to the parent block.
       *
       * @param { object } param0
       * Object holding the parameters of the list.
       *
       * @param { number } [param0.trailingLineBreaks]
       * This list should have at least this number of line breaks to separate it from any following block.
       */
      closeList({ trailingLineBreaks = 2 } = {}) {
        const list = this._popStackItem();
        const text = getText(list);
        if (text) {
          addText(this._stackItem, text, list.leadingLineBreaks, trailingLineBreaks);
        }
      }
      /**
       * Start building a table.
       */
      openTable() {
        this._stackItem = new TableStackItem(this._stackItem);
      }
      /**
       * Start building a table row.
       */
      openTableRow() {
        if (!(this._stackItem instanceof TableStackItem)) {
          throw new Error("Can't add a table row to something that is not a table! Check the formatter.");
        }
        this._stackItem = new TableRowStackItem(this._stackItem);
      }
      /**
       * Start building a table cell.
       *
       * @param { object } [param0]
       * Object holding the parameters of the cell.
       *
       * @param { number } [param0.maxColumnWidth]
       * Wrap cell content to this width. Fall back to global wordwrap value if undefined.
       */
      openTableCell({ maxColumnWidth = void 0 } = {}) {
        if (!(this._stackItem instanceof TableRowStackItem)) {
          throw new Error("Can't add a table cell to something that is not a table row! Check the formatter.");
        }
        this._stackItem = new TableCellStackItem(this.options, this._stackItem, maxColumnWidth);
      }
      /**
       * Finalize currently built table cell and add it to parent table row's cells.
       *
       * @param { object } [param0]
       * Object holding the parameters of the cell.
       *
       * @param { number } [param0.colspan] How many columns this cell should occupy.
       * @param { number } [param0.rowspan] How many rows this cell should occupy.
       */
      closeTableCell({ colspan = 1, rowspan = 1 } = {}) {
        const cell = this._popStackItem();
        const text = trimCharacter(getText(cell), "\n");
        cell.next.cells.push({ colspan, rowspan, text });
      }
      /**
       * Finalize currently built table row and add it to parent table's rows.
       */
      closeTableRow() {
        const row = this._popStackItem();
        row.next.rows.push(row.cells);
      }
      /**
       * Finalize currently built table and add the rendered text to the parent block.
       *
       * @param { object } param0
       * Object holding the parameters of the table.
       *
       * @param { TablePrinter } param0.tableToString
       * A function to convert a table of stringified cells into a complete table.
       *
       * @param { number } [param0.leadingLineBreaks]
       * This table should have at least this number of line breaks to separate if from any preceding block.
       *
       * @param { number } [param0.trailingLineBreaks]
       * This table should have at least this number of line breaks to separate it from any following block.
       */
      closeTable({ tableToString: tableToString2, leadingLineBreaks = 2, trailingLineBreaks = 2 }) {
        const table = this._popStackItem();
        const output = tableToString2(table.rows);
        if (output) {
          addText(this._stackItem, output, leadingLineBreaks, trailingLineBreaks);
        }
      }
      /**
       * Return the rendered text content of this builder.
       *
       * @returns { string }
       */
      toString() {
        return getText(this._stackItem.getRoot());
      }
    };
    genericFormatters = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      block: formatBlock$1,
      blockHtml: formatBlockHtml,
      blockString: formatBlockString,
      blockTag: formatBlockTag,
      inline: formatInline,
      inlineHtml: formatInlineHtml,
      inlineString: formatInlineString,
      inlineSurround: formatInlineSurround,
      inlineTag: formatInlineTag,
      skip: formatSkip
    });
    textFormatters = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      anchor: formatAnchor,
      blockquote: formatBlockquote,
      dataTable: formatDataTable,
      heading: formatHeading,
      horizontalLine: formatHorizontalLine,
      image: formatImage,
      lineBreak: formatLineBreak,
      orderedList: formatOrderedList,
      paragraph: formatParagraph,
      pre: formatPre,
      table: formatTable,
      unorderedList: formatUnorderedList,
      wbr: formatWbr
    });
    DEFAULT_OPTIONS = {
      baseElements: {
        selectors: ["body"],
        orderBy: "selectors",
        // 'selectors' | 'occurrence'
        returnDomByDefault: true
      },
      decodeEntities: true,
      encodeCharacters: {},
      formatters: {},
      limits: {
        ellipsis: "...",
        maxBaseElements: void 0,
        maxChildNodes: void 0,
        maxDepth: void 0,
        maxInputLength: 1 << 24
        // 16_777_216
      },
      longWordSplit: {
        forceWrapOnLimit: false,
        wrapCharacters: []
      },
      preserveNewlines: false,
      selectors: [
        { selector: "*", format: "inline" },
        {
          selector: "a",
          format: "anchor",
          options: {
            baseUrl: null,
            hideLinkHrefIfSameAsText: false,
            ignoreHref: false,
            linkBrackets: ["[", "]"],
            noAnchorUrl: true
          }
        },
        { selector: "article", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
        { selector: "aside", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
        {
          selector: "blockquote",
          format: "blockquote",
          options: { leadingLineBreaks: 2, trailingLineBreaks: 2, trimEmptyLines: true }
        },
        { selector: "br", format: "lineBreak" },
        { selector: "div", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
        { selector: "footer", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
        { selector: "form", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
        { selector: "h1", format: "heading", options: { leadingLineBreaks: 3, trailingLineBreaks: 2, uppercase: true } },
        { selector: "h2", format: "heading", options: { leadingLineBreaks: 3, trailingLineBreaks: 2, uppercase: true } },
        { selector: "h3", format: "heading", options: { leadingLineBreaks: 3, trailingLineBreaks: 2, uppercase: true } },
        { selector: "h4", format: "heading", options: { leadingLineBreaks: 2, trailingLineBreaks: 2, uppercase: true } },
        { selector: "h5", format: "heading", options: { leadingLineBreaks: 2, trailingLineBreaks: 2, uppercase: true } },
        { selector: "h6", format: "heading", options: { leadingLineBreaks: 2, trailingLineBreaks: 2, uppercase: true } },
        { selector: "header", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
        {
          selector: "hr",
          format: "horizontalLine",
          options: { leadingLineBreaks: 2, length: void 0, trailingLineBreaks: 2 }
        },
        {
          selector: "img",
          format: "image",
          options: { baseUrl: null, linkBrackets: ["[", "]"] }
        },
        { selector: "main", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
        { selector: "nav", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
        {
          selector: "ol",
          format: "orderedList",
          options: { leadingLineBreaks: 2, trailingLineBreaks: 2 }
        },
        { selector: "p", format: "paragraph", options: { leadingLineBreaks: 2, trailingLineBreaks: 2 } },
        { selector: "pre", format: "pre", options: { leadingLineBreaks: 2, trailingLineBreaks: 2 } },
        { selector: "section", format: "block", options: { leadingLineBreaks: 1, trailingLineBreaks: 1 } },
        {
          selector: "table",
          format: "table",
          options: {
            colSpacing: 3,
            leadingLineBreaks: 2,
            maxColumnWidth: 60,
            rowSpacing: 0,
            trailingLineBreaks: 2,
            uppercaseHeaderCells: true
          }
        },
        {
          selector: "ul",
          format: "unorderedList",
          options: { itemPrefix: " * ", leadingLineBreaks: 2, trailingLineBreaks: 2 }
        },
        { selector: "wbr", format: "wbr" }
      ],
      tables: [],
      // deprecated
      whitespaceCharacters: " 	\r\n\f\u200B",
      wordwrap: 80
    };
    concatMerge = (acc, src, options) => [...acc, ...src];
    overwriteMerge = (acc, src, options) => [...src];
    selectorsMerge = (acc, src, options) => acc.some((s2) => typeof s2 === "object") ? concatMerge(acc, src) : overwriteMerge(acc, src);
  }
});

// node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "node_modules/react/cjs/react.production.min.js"(exports) {
    "use strict";
    var l2 = Symbol.for("react.element");
    var n2 = Symbol.for("react.portal");
    var p = Symbol.for("react.fragment");
    var q2 = Symbol.for("react.strict_mode");
    var r2 = Symbol.for("react.profiler");
    var t8 = Symbol.for("react.provider");
    var u = Symbol.for("react.context");
    var v2 = Symbol.for("react.forward_ref");
    var w3 = Symbol.for("react.suspense");
    var x2 = Symbol.for("react.memo");
    var y2 = Symbol.for("react.lazy");
    var z3 = Symbol.iterator;
    function A2(a) {
      if (null === a || "object" !== typeof a) return null;
      a = z3 && a[z3] || a["@@iterator"];
      return "function" === typeof a ? a : null;
    }
    var B3 = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var C = Object.assign;
    var D = {};
    function E2(a, b2, e2) {
      this.props = a;
      this.context = b2;
      this.refs = D;
      this.updater = e2 || B3;
    }
    E2.prototype.isReactComponent = {};
    E2.prototype.setState = function(a, b2) {
      if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a, b2, "setState");
    };
    E2.prototype.forceUpdate = function(a) {
      this.updater.enqueueForceUpdate(this, a, "forceUpdate");
    };
    function F() {
    }
    F.prototype = E2.prototype;
    function G3(a, b2, e2) {
      this.props = a;
      this.context = b2;
      this.refs = D;
      this.updater = e2 || B3;
    }
    var H3 = G3.prototype = new F();
    H3.constructor = G3;
    C(H3, E2.prototype);
    H3.isPureReactComponent = true;
    var I3 = Array.isArray;
    var J3 = Object.prototype.hasOwnProperty;
    var K3 = { current: null };
    var L3 = { key: true, ref: true, __self: true, __source: true };
    function M2(a, b2, e2) {
      var d, c2 = {}, k3 = null, h2 = null;
      if (null != b2) for (d in void 0 !== b2.ref && (h2 = b2.ref), void 0 !== b2.key && (k3 = "" + b2.key), b2) J3.call(b2, d) && !L3.hasOwnProperty(d) && (c2[d] = b2[d]);
      var g = arguments.length - 2;
      if (1 === g) c2.children = e2;
      else if (1 < g) {
        for (var f = Array(g), m2 = 0; m2 < g; m2++) f[m2] = arguments[m2 + 2];
        c2.children = f;
      }
      if (a && a.defaultProps) for (d in g = a.defaultProps, g) void 0 === c2[d] && (c2[d] = g[d]);
      return { $$typeof: l2, type: a, key: k3, ref: h2, props: c2, _owner: K3.current };
    }
    function N3(a, b2) {
      return { $$typeof: l2, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
    }
    function O3(a) {
      return "object" === typeof a && null !== a && a.$$typeof === l2;
    }
    function escape3(a) {
      var b2 = { "=": "=0", ":": "=2" };
      return "$" + a.replace(/[=:]/g, function(a2) {
        return b2[a2];
      });
    }
    var P3 = /\/+/g;
    function Q3(a, b2) {
      return "object" === typeof a && null !== a && null != a.key ? escape3("" + a.key) : b2.toString(36);
    }
    function R3(a, b2, e2, d, c2) {
      var k3 = typeof a;
      if ("undefined" === k3 || "boolean" === k3) a = null;
      var h2 = false;
      if (null === a) h2 = true;
      else switch (k3) {
        case "string":
        case "number":
          h2 = true;
          break;
        case "object":
          switch (a.$$typeof) {
            case l2:
            case n2:
              h2 = true;
          }
      }
      if (h2) return h2 = a, c2 = c2(h2), a = "" === d ? "." + Q3(h2, 0) : d, I3(c2) ? (e2 = "", null != a && (e2 = a.replace(P3, "$&/") + "/"), R3(c2, b2, e2, "", function(a2) {
        return a2;
      })) : null != c2 && (O3(c2) && (c2 = N3(c2, e2 + (!c2.key || h2 && h2.key === c2.key ? "" : ("" + c2.key).replace(P3, "$&/") + "/") + a)), b2.push(c2)), 1;
      h2 = 0;
      d = "" === d ? "." : d + ":";
      if (I3(a)) for (var g = 0; g < a.length; g++) {
        k3 = a[g];
        var f = d + Q3(k3, g);
        h2 += R3(k3, b2, e2, f, c2);
      }
      else if (f = A2(a), "function" === typeof f) for (a = f.call(a), g = 0; !(k3 = a.next()).done; ) k3 = k3.value, f = d + Q3(k3, g++), h2 += R3(k3, b2, e2, f, c2);
      else if ("object" === k3) throw b2 = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
      return h2;
    }
    function S3(a, b2, e2) {
      if (null == a) return a;
      var d = [], c2 = 0;
      R3(a, d, "", "", function(a2) {
        return b2.call(e2, a2, c2++);
      });
      return d;
    }
    function T3(a) {
      if (-1 === a._status) {
        var b2 = a._result;
        b2 = b2();
        b2.then(function(b3) {
          if (0 === a._status || -1 === a._status) a._status = 1, a._result = b3;
        }, function(b3) {
          if (0 === a._status || -1 === a._status) a._status = 2, a._result = b3;
        });
        -1 === a._status && (a._status = 0, a._result = b2);
      }
      if (1 === a._status) return a._result.default;
      throw a._result;
    }
    var U2 = { current: null };
    var V4 = { transition: null };
    var W3 = { ReactCurrentDispatcher: U2, ReactCurrentBatchConfig: V4, ReactCurrentOwner: K3 };
    function X2() {
      throw Error("act(...) is not supported in production builds of React.");
    }
    exports.Children = { map: S3, forEach: function(a, b2, e2) {
      S3(a, function() {
        b2.apply(this, arguments);
      }, e2);
    }, count: function(a) {
      var b2 = 0;
      S3(a, function() {
        b2++;
      });
      return b2;
    }, toArray: function(a) {
      return S3(a, function(a2) {
        return a2;
      }) || [];
    }, only: function(a) {
      if (!O3(a)) throw Error("React.Children.only expected to receive a single React element child.");
      return a;
    } };
    exports.Component = E2;
    exports.Fragment = p;
    exports.Profiler = r2;
    exports.PureComponent = G3;
    exports.StrictMode = q2;
    exports.Suspense = w3;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W3;
    exports.act = X2;
    exports.cloneElement = function(a, b2, e2) {
      if (null === a || void 0 === a) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
      var d = C({}, a.props), c2 = a.key, k3 = a.ref, h2 = a._owner;
      if (null != b2) {
        void 0 !== b2.ref && (k3 = b2.ref, h2 = K3.current);
        void 0 !== b2.key && (c2 = "" + b2.key);
        if (a.type && a.type.defaultProps) var g = a.type.defaultProps;
        for (f in b2) J3.call(b2, f) && !L3.hasOwnProperty(f) && (d[f] = void 0 === b2[f] && void 0 !== g ? g[f] : b2[f]);
      }
      var f = arguments.length - 2;
      if (1 === f) d.children = e2;
      else if (1 < f) {
        g = Array(f);
        for (var m2 = 0; m2 < f; m2++) g[m2] = arguments[m2 + 2];
        d.children = g;
      }
      return { $$typeof: l2, type: a.type, key: c2, ref: k3, props: d, _owner: h2 };
    };
    exports.createContext = function(a) {
      a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a.Provider = { $$typeof: t8, _context: a };
      return a.Consumer = a;
    };
    exports.createElement = M2;
    exports.createFactory = function(a) {
      var b2 = M2.bind(null, a);
      b2.type = a;
      return b2;
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(a) {
      return { $$typeof: v2, render: a };
    };
    exports.isValidElement = O3;
    exports.lazy = function(a) {
      return { $$typeof: y2, _payload: { _status: -1, _result: a }, _init: T3 };
    };
    exports.memo = function(a, b2) {
      return { $$typeof: x2, type: a, compare: void 0 === b2 ? null : b2 };
    };
    exports.startTransition = function(a) {
      var b2 = V4.transition;
      V4.transition = {};
      try {
        a();
      } finally {
        V4.transition = b2;
      }
    };
    exports.unstable_act = X2;
    exports.useCallback = function(a, b2) {
      return U2.current.useCallback(a, b2);
    };
    exports.useContext = function(a) {
      return U2.current.useContext(a);
    };
    exports.useDebugValue = function() {
    };
    exports.useDeferredValue = function(a) {
      return U2.current.useDeferredValue(a);
    };
    exports.useEffect = function(a, b2) {
      return U2.current.useEffect(a, b2);
    };
    exports.useId = function() {
      return U2.current.useId();
    };
    exports.useImperativeHandle = function(a, b2, e2) {
      return U2.current.useImperativeHandle(a, b2, e2);
    };
    exports.useInsertionEffect = function(a, b2) {
      return U2.current.useInsertionEffect(a, b2);
    };
    exports.useLayoutEffect = function(a, b2) {
      return U2.current.useLayoutEffect(a, b2);
    };
    exports.useMemo = function(a, b2) {
      return U2.current.useMemo(a, b2);
    };
    exports.useReducer = function(a, b2, e2) {
      return U2.current.useReducer(a, b2, e2);
    };
    exports.useRef = function(a) {
      return U2.current.useRef(a);
    };
    exports.useState = function(a) {
      return U2.current.useState(a);
    };
    exports.useSyncExternalStore = function(a, b2, e2) {
      return U2.current.useSyncExternalStore(a, b2, e2);
    };
    exports.useTransition = function() {
      return U2.current.useTransition();
    };
    exports.version = "18.3.1";
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_react_production_min();
    } else {
      module.exports = null;
    }
  }
});

// node_modules/prettier/plugins/html.mjs
function hi(t8) {
  if (typeof t8 == "string") return ye;
  if (Array.isArray(t8)) return Ge;
  if (!t8) return;
  let { type: e2 } = t8;
  if (At.has(e2)) return e2;
}
function mi(t8) {
  let e2 = t8 === null ? "null" : typeof t8;
  if (e2 !== "string" && e2 !== "object") return `Unexpected doc '${e2}', 
Expected it to be 'string' or 'object'.`;
  if (Le(t8)) throw new Error("doc is valid.");
  let r2 = Object.prototype.toString.call(t8);
  if (r2 !== "[object Object]") return `Unexpected doc '${r2}'.`;
  let n2 = fi([...At].map((s2) => `'${s2}'`));
  return `Unexpected doc.type '${t8.type}'.
Expected it to be ${n2}.`;
}
function hr(t8, e2) {
  if (typeof t8 == "string") return e2(t8);
  let r2 = /* @__PURE__ */ new Map();
  return n2(t8);
  function n2(i) {
    if (r2.has(i)) return r2.get(i);
    let a = s2(i);
    return r2.set(i, a), a;
  }
  function s2(i) {
    switch (Le(i)) {
      case Ge:
        return e2(i.map(n2));
      case xe:
        return e2({ ...i, parts: i.parts.map(n2) });
      case ce:
        return e2({ ...i, breakContents: n2(i.breakContents), flatContents: n2(i.flatContents) });
      case Te: {
        let { expandedStates: a, contents: o2 } = i;
        return a ? (a = a.map(n2), o2 = a[0]) : o2 = n2(o2), e2({ ...i, contents: o2, expandedStates: a });
      }
      case be:
      case we:
      case ke:
      case Xe:
      case Ke:
        return e2({ ...i, contents: n2(i.contents) });
      case ye:
      case Ye:
      case je:
      case Qe:
      case j:
      case Be:
        return e2(i);
      default:
        throw new pr(i);
    }
  }
}
function B(t8, e2 = cn) {
  return hr(t8, (r2) => typeof r2 == "string" ? H(e2, r2.split(`
`)) : r2);
}
function k(t8) {
  return ne(t8), { type: we, contents: t8 };
}
function hn(t8, e2) {
  return ne(e2), { type: be, contents: e2, n: t8 };
}
function E(t8, e2 = {}) {
  return ne(t8), mr(e2.expandedStates, true), { type: Te, id: e2.id, contents: t8, break: !!e2.shouldBreak, expandedStates: e2.expandedStates };
}
function fn(t8) {
  return hn(Number.NEGATIVE_INFINITY, t8);
}
function mn(t8) {
  return hn({ type: "root" }, t8);
}
function Dt(t8) {
  return pn(t8), { type: xe, parts: t8 };
}
function pe(t8, e2 = "", r2 = {}) {
  return ne(t8), e2 !== "" && ne(e2), { type: ce, breakContents: t8, flatContents: e2, groupId: r2.groupId };
}
function dn(t8, e2) {
  return ne(t8), { type: ke, contents: t8, groupId: e2.groupId, negate: e2.negate };
}
function H(t8, e2) {
  ne(t8), mr(e2);
  let r2 = [];
  for (let n2 = 0; n2 < e2.length; n2++) n2 !== 0 && r2.push(t8), r2.push(e2[n2]);
  return r2;
}
function Si(t8, e2) {
  let r2 = e2 === true || e2 === vt ? vt : gn, n2 = r2 === vt ? gn : vt, s2 = 0, i = 0;
  for (let a of t8) a === r2 ? s2++ : a === n2 && i++;
  return s2 > i ? n2 : r2;
}
function dr(t8) {
  if (typeof t8 != "string") throw new TypeError("Expected a string");
  return t8.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function Ai(t8) {
  return (t8 == null ? void 0 : t8.type) === "front-matter";
}
function En(t8, e2) {
  var r2;
  if (t8.type === "text" || t8.type === "comment" || Fe(t8) || t8.type === "yaml" || t8.type === "toml") return null;
  if (t8.type === "attribute" && delete e2.value, t8.type === "docType" && delete e2.value, t8.type === "angularControlFlowBlock" && ((r2 = t8.parameters) != null && r2.children)) for (let n2 of e2.parameters.children) vi.has(t8.name) ? delete n2.expression : n2.expression = n2.expression.trim();
  t8.type === "angularIcuExpression" && (e2.switchValue = t8.switchValue.trim()), t8.type === "angularLetDeclarationInitializer" && delete e2.value;
}
async function yi(t8, e2) {
  if (t8.language === "yaml") {
    let r2 = t8.value.trim(), n2 = r2 ? await e2(r2, { parser: "yaml" }) : "";
    return mn([t8.startDelimiter, t8.explicitLanguage, S, n2, n2 ? S : "", t8.endDelimiter]);
  }
}
function he(t8, e2 = true) {
  return [k([v, t8]), e2 ? v : ""];
}
function Q(t8, e2) {
  let r2 = t8.type === "NGRoot" ? t8.node.type === "NGMicrosyntax" && t8.node.body.length === 1 && t8.node.body[0].type === "NGMicrosyntaxExpression" ? t8.node.body[0].expression : t8.node : t8.type === "JsExpressionRoot" ? t8.node : t8;
  return r2 && (r2.type === "ObjectExpression" || r2.type === "ArrayExpression" || (e2.parser === "__vue_expression" || e2.parser === "__vue_ts_expression") && (r2.type === "TemplateLiteral" || r2.type === "StringLiteral"));
}
async function T(t8, e2, r2, n2) {
  r2 = { __isInHtmlAttribute: true, __embeddedInHtml: true, ...r2 };
  let s2 = true;
  n2 && (r2.__onHtmlBindingRoot = (a, o2) => {
    s2 = n2(a, o2);
  });
  let i = await e2(t8, r2, e2);
  return s2 ? E(i) : he(i);
}
function wi(t8, e2, r2, n2) {
  let { node: s2 } = r2, i = n2.originalText.slice(s2.sourceSpan.start.offset, s2.sourceSpan.end.offset);
  return /^\s*$/u.test(i) ? "" : T(i, t8, { parser: "__ng_directive", __isInHtmlAttribute: false }, Q);
}
function yn(t8, e2) {
  if (!e2) return;
  let r2 = bi(e2).toLowerCase();
  return t8.find(({ filenames: n2 }) => n2 == null ? void 0 : n2.some((s2) => s2.toLowerCase() === r2)) ?? t8.find(({ extensions: n2 }) => n2 == null ? void 0 : n2.some((s2) => r2.endsWith(s2)));
}
function Ti(t8, e2) {
  if (e2) return t8.find(({ name: r2 }) => r2.toLowerCase() === e2) ?? t8.find(({ aliases: r2 }) => r2 == null ? void 0 : r2.includes(e2)) ?? t8.find(({ extensions: r2 }) => r2 == null ? void 0 : r2.includes(`.${e2}`));
}
function xi(t8, e2) {
  let r2 = t8.plugins.flatMap((s2) => s2.languages ?? []), n2 = Ti(r2, e2.language) ?? yn(r2, e2.physicalFile) ?? yn(r2, e2.file) ?? (e2.physicalFile, void 0);
  return n2 == null ? void 0 : n2.parsers[0];
}
function ki(t8) {
  return t8.type === "element" && !t8.hasExplicitNamespace && !["html", "svg"].includes(t8.namespace);
}
function yt(t8, e2) {
  return !!(t8.type === "ieConditionalComment" && t8.lastChild && !t8.lastChild.isSelfClosing && !t8.lastChild.endSourceSpan || t8.type === "ieConditionalComment" && !t8.complete || me(t8) && t8.children.some((r2) => r2.type !== "text" && r2.type !== "interpolation") || Tt(t8, e2) && !W(t8) && t8.type !== "interpolation");
}
function de(t8) {
  return t8.type === "attribute" || !t8.parent || !t8.prev ? false : Li(t8.prev);
}
function Li(t8) {
  return t8.type === "comment" && t8.value.trim() === "prettier-ignore";
}
function $(t8) {
  return t8.type === "text" || t8.type === "comment";
}
function W(t8) {
  return t8.type === "element" && (t8.fullName === "script" || t8.fullName === "style" || t8.fullName === "svg:style" || t8.fullName === "svg:script" || fe(t8) && (t8.name === "script" || t8.name === "style"));
}
function Bn(t8) {
  return t8.children && !W(t8);
}
function Ln(t8) {
  return W(t8) || t8.type === "interpolation" || _r(t8);
}
function _r(t8) {
  return Vn(t8).startsWith("pre");
}
function Fn(t8, e2) {
  var s2, i;
  let r2 = n2();
  if (r2 && !t8.prev && ((i = (s2 = t8.parent) == null ? void 0 : s2.tagDefinition) != null && i.ignoreFirstLf)) return t8.type === "interpolation";
  return r2;
  function n2() {
    return Fe(t8) || t8.type === "angularControlFlowBlock" ? false : (t8.type === "text" || t8.type === "interpolation") && t8.prev && (t8.prev.type === "text" || t8.prev.type === "interpolation") ? true : !t8.parent || t8.parent.cssDisplay === "none" ? false : me(t8.parent) ? true : !(!t8.prev && (t8.parent.type === "root" || me(t8) && t8.parent || W(t8.parent) || et(t8.parent, e2) || !$i(t8.parent.cssDisplay)) || t8.prev && !qi(t8.prev.cssDisplay));
  }
}
function Nn(t8, e2) {
  return Fe(t8) || t8.type === "angularControlFlowBlock" ? false : (t8.type === "text" || t8.type === "interpolation") && t8.next && (t8.next.type === "text" || t8.next.type === "interpolation") ? true : !t8.parent || t8.parent.cssDisplay === "none" ? false : me(t8.parent) ? true : !(!t8.next && (t8.parent.type === "root" || me(t8) && t8.parent || W(t8.parent) || et(t8.parent, e2) || !Oi(t8.parent.cssDisplay)) || t8.next && !Mi(t8.next.cssDisplay));
}
function Pn(t8) {
  return Hi(t8.cssDisplay) && !W(t8);
}
function Je(t8) {
  return Fe(t8) || t8.next && t8.sourceSpan.end && t8.sourceSpan.end.line + 1 < t8.next.sourceSpan.start.line;
}
function In(t8) {
  return Er(t8) || t8.type === "element" && t8.children.length > 0 && (["body", "script", "style"].includes(t8.name) || t8.children.some((e2) => Ni(e2))) || t8.firstChild && t8.firstChild === t8.lastChild && t8.firstChild.type !== "text" && $n(t8.firstChild) && (!t8.lastChild.isTrailingSpaceSensitive || On(t8.lastChild));
}
function Er(t8) {
  return t8.type === "element" && t8.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(t8.name) || t8.cssDisplay.startsWith("table") && t8.cssDisplay !== "table-cell");
}
function wt(t8) {
  return Mn(t8) || t8.prev && Fi(t8.prev) || Rn(t8);
}
function Fi(t8) {
  return Mn(t8) || t8.type === "element" && t8.fullName === "br" || Rn(t8);
}
function Rn(t8) {
  return $n(t8) && On(t8);
}
function $n(t8) {
  return t8.hasLeadingSpaces && (t8.prev ? t8.prev.sourceSpan.end.line < t8.sourceSpan.start.line : t8.parent.type === "root" || t8.parent.startSourceSpan.end.line < t8.sourceSpan.start.line);
}
function On(t8) {
  return t8.hasTrailingSpaces && (t8.next ? t8.next.sourceSpan.start.line > t8.sourceSpan.end.line : t8.parent.type === "root" || t8.parent.endSourceSpan && t8.parent.endSourceSpan.start.line > t8.sourceSpan.end.line);
}
function Mn(t8) {
  switch (t8.type) {
    case "ieConditionalComment":
    case "comment":
    case "directive":
      return true;
    case "element":
      return ["script", "select"].includes(t8.name);
  }
  return false;
}
function bt(t8) {
  return t8.lastChild ? bt(t8.lastChild) : t8;
}
function Ni(t8) {
  var e2;
  return (e2 = t8.children) == null ? void 0 : e2.some((r2) => r2.type !== "text");
}
function qn(t8) {
  if (t8) switch (t8) {
    case "module":
    case "text/javascript":
    case "text/babel":
    case "application/javascript":
      return "babel";
    case "application/x-typescript":
      return "typescript";
    case "text/markdown":
      return "markdown";
    case "text/html":
      return "html";
    case "text/x-handlebars-template":
      return "glimmer";
    default:
      if (t8.endsWith("json") || t8.endsWith("importmap") || t8 === "speculationrules") return "json";
  }
}
function Pi(t8, e2) {
  let { name: r2, attrMap: n2 } = t8;
  if (r2 !== "script" || Object.prototype.hasOwnProperty.call(n2, "src")) return;
  let { type: s2, lang: i } = t8.attrMap;
  return !i && !s2 ? "babel" : Ne(e2, { language: i }) ?? qn(s2);
}
function Ii(t8, e2) {
  if (!Tt(t8, e2)) return;
  let { attrMap: r2 } = t8;
  if (Object.prototype.hasOwnProperty.call(r2, "src")) return;
  let { type: n2, lang: s2 } = r2;
  return Ne(e2, { language: s2 }) ?? qn(n2);
}
function Ri(t8, e2) {
  if (t8.name !== "style") return;
  let { lang: r2 } = t8.attrMap;
  return r2 ? Ne(e2, { language: r2 }) : "css";
}
function Ar(t8, e2) {
  return Pi(t8, e2) ?? Ri(t8, e2) ?? Ii(t8, e2);
}
function Ze(t8) {
  return t8 === "block" || t8 === "list-item" || t8.startsWith("table");
}
function $i(t8) {
  return !Ze(t8) && t8 !== "inline-block";
}
function Oi(t8) {
  return !Ze(t8) && t8 !== "inline-block";
}
function Mi(t8) {
  return !Ze(t8);
}
function qi(t8) {
  return !Ze(t8);
}
function Hi(t8) {
  return !Ze(t8) && t8 !== "inline-block";
}
function me(t8) {
  return Vn(t8).startsWith("pre");
}
function Vi(t8, e2) {
  let r2 = t8;
  for (; r2; ) {
    if (e2(r2)) return true;
    r2 = r2.parent;
  }
  return false;
}
function Hn(t8, e2) {
  var n2;
  if (ge(t8, e2)) return "block";
  if (((n2 = t8.prev) == null ? void 0 : n2.type) === "comment") {
    let s2 = t8.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/u);
    if (s2) return s2[1];
  }
  let r2 = false;
  if (t8.type === "element" && t8.namespace === "svg") if (Vi(t8, (s2) => s2.fullName === "svg:foreignObject")) r2 = true;
  else return t8.name === "svg" ? "inline-block" : "block";
  switch (e2.htmlWhitespaceSensitivity) {
    case "strict":
      return "inline";
    case "ignore":
      return "block";
    default:
      return t8.type === "element" && (!t8.namespace || r2 || fe(t8)) && bn[t8.name] || wn;
  }
}
function Vn(t8) {
  return t8.type === "element" && (!t8.namespace || fe(t8)) && xn[t8.name] || Tn;
}
function Ui(t8) {
  let e2 = Number.POSITIVE_INFINITY;
  for (let r2 of t8.split(`
`)) {
    if (r2.length === 0) continue;
    let n2 = O.getLeadingWhitespaceCount(r2);
    if (n2 === 0) return 0;
    r2.length !== n2 && n2 < e2 && (e2 = n2);
  }
  return e2 === Number.POSITIVE_INFINITY ? 0 : e2;
}
function Dr(t8, e2 = Ui(t8)) {
  return e2 === 0 ? t8 : t8.split(`
`).map((r2) => r2.slice(e2)).join(`
`);
}
function vr(t8) {
  return w(false, w(false, t8, "&apos;", "'"), "&quot;", '"');
}
function N(t8) {
  return vr(t8.value);
}
function et(t8, e2) {
  return ge(t8, e2) && !Wi.has(t8.fullName);
}
function ge(t8, e2) {
  return e2.parser === "vue" && t8.type === "element" && t8.parent.type === "root" && t8.fullName.toLowerCase() !== "html";
}
function Tt(t8, e2) {
  return ge(t8, e2) && (et(t8, e2) || t8.attrMap.lang && t8.attrMap.lang !== "html");
}
function Un(t8) {
  let e2 = t8.fullName;
  return e2.charAt(0) === "#" || e2 === "slot-scope" || e2 === "v-slot" || e2.startsWith("v-slot:");
}
function Wn(t8, e2) {
  let r2 = t8.parent;
  if (!ge(r2, e2)) return false;
  let n2 = r2.fullName, s2 = t8.fullName;
  return n2 === "script" && s2 === "setup" || n2 === "style" && s2 === "vars";
}
function xt(t8, e2 = t8.value) {
  return t8.parent.isWhitespaceSensitive ? t8.parent.isIndentationSensitive ? B(e2) : B(Dr(Sr(e2)), S) : H(_, O.split(e2));
}
function kt(t8, e2) {
  return ge(t8, e2) && t8.name === "script";
}
async function zn(t8, e2) {
  let r2 = [];
  for (let [n2, s2] of t8.split(yr).entries()) if (n2 % 2 === 0) r2.push(B(s2));
  else try {
    r2.push(E(["{{", k([_, await T(s2, e2, { parser: "__ng_interpolation", __isInHtmlInterpolation: true })]), _, "}}"]));
  } catch {
    r2.push("{{", B(s2), "}}");
  }
  return r2;
}
function wr({ parser: t8 }) {
  return (e2, r2, n2) => T(N(n2.node), e2, { parser: t8 }, Q);
}
function ji(t8, e2) {
  if (e2.parser !== "angular") return;
  let { node: r2 } = t8, n2 = r2.fullName;
  if (n2.startsWith("(") && n2.endsWith(")") || n2.startsWith("on-")) return zi;
  if (n2.startsWith("[") && n2.endsWith("]") || /^bind(?:on)?-/u.test(n2) || /^ng-(?:if|show|hide|class|style)$/u.test(n2)) return Gi;
  if (n2.startsWith("*")) return Yi;
  let s2 = N(r2);
  if (/^i18n(?:-.+)?$/u.test(n2)) return () => he(Dt(xt(r2, s2.trim())), !s2.includes("@@"));
  if (yr.test(s2)) return (i) => zn(s2, i);
}
function Ki(t8, e2) {
  let { node: r2 } = t8, n2 = N(r2);
  if (r2.fullName === "class" && !e2.parentParser && !n2.includes("{{")) return () => n2.trim().split(/\s+/u).join(" ");
}
function jn(t8) {
  return t8 === "	" || t8 === `
` || t8 === "\f" || t8 === "\r" || t8 === " ";
}
function ta(t8) {
  let e2 = t8.length, r2, n2, s2, i, a, o2 = 0, u;
  function p(C) {
    let A2, D = C.exec(t8.substring(o2));
    if (D) return [A2] = D, o2 += A2.length, A2;
  }
  let l2 = [];
  for (; ; ) {
    if (p(Xi), o2 >= e2) {
      if (l2.length === 0) throw new Error("Must contain one or more image candidate strings.");
      return l2;
    }
    u = o2, r2 = p(Ji), n2 = [], r2.slice(-1) === "," ? (r2 = r2.replace(Zi, ""), d()) : f();
  }
  function f() {
    for (p(Qi), s2 = "", i = "in descriptor"; ; ) {
      if (a = t8.charAt(o2), i === "in descriptor") if (jn(a)) s2 && (n2.push(s2), s2 = "", i = "after descriptor");
      else if (a === ",") {
        o2 += 1, s2 && n2.push(s2), d();
        return;
      } else if (a === "(") s2 += a, i = "in parens";
      else if (a === "") {
        s2 && n2.push(s2), d();
        return;
      } else s2 += a;
      else if (i === "in parens") if (a === ")") s2 += a, i = "in descriptor";
      else if (a === "") {
        n2.push(s2), d();
        return;
      } else s2 += a;
      else if (i === "after descriptor" && !jn(a)) if (a === "") {
        d();
        return;
      } else i = "in descriptor", o2 -= 1;
      o2 += 1;
    }
  }
  function d() {
    let C = false, A2, D, I3, F, c2 = {}, g, y2, q2, x2, U2;
    for (F = 0; F < n2.length; F++) g = n2[F], y2 = g[g.length - 1], q2 = g.substring(0, g.length - 1), x2 = parseInt(q2, 10), U2 = parseFloat(q2), Kn.test(q2) && y2 === "w" ? ((A2 || D) && (C = true), x2 === 0 ? C = true : A2 = x2) : ea.test(q2) && y2 === "x" ? ((A2 || D || I3) && (C = true), U2 < 0 ? C = true : D = U2) : Kn.test(q2) && y2 === "h" ? ((I3 || D) && (C = true), x2 === 0 ? C = true : I3 = x2) : C = true;
    if (!C) c2.source = { value: r2, startOffset: u }, A2 && (c2.width = { value: A2 }), D && (c2.density = { value: D }), I3 && (c2.height = { value: I3 }), l2.push(c2);
    else throw new Error(`Invalid srcset descriptor found in "${t8}" at "${g}".`);
  }
}
function ra(t8) {
  if (t8.node.fullName === "srcset" && (t8.parent.fullName === "img" || t8.parent.fullName === "source")) return () => sa(N(t8.node));
}
function sa(t8) {
  let e2 = Qn(t8), r2 = na.filter((l2) => e2.some((f) => Object.prototype.hasOwnProperty.call(f, l2)));
  if (r2.length > 1) throw new Error("Mixed descriptor in srcset is not supported");
  let [n2] = r2, s2 = Xn[n2], i = e2.map((l2) => l2.source.value), a = Math.max(...i.map((l2) => l2.length)), o2 = e2.map((l2) => l2[n2] ? String(l2[n2].value) : ""), u = o2.map((l2) => {
    let f = l2.indexOf(".");
    return f === -1 ? l2.length : f;
  }), p = Math.max(...u);
  return he(H([",", _], i.map((l2, f) => {
    let d = [l2], C = o2[f];
    if (C) {
      let A2 = a - l2.length + 1, D = p - u[f], I3 = " ".repeat(A2 + D);
      d.push(pe(I3, " "), C + s2);
    }
    return d;
  })));
}
function Zn(t8, e2) {
  let { node: r2 } = t8, n2 = N(t8.node).trim();
  if (r2.fullName === "style" && !e2.parentParser && !n2.includes("{{")) return async (s2) => he(await s2(n2, { parser: "css", __isHTMLStyleAttribute: true }));
}
function ia(t8, e2) {
  let { root: r2 } = t8;
  return br.has(r2) || br.set(r2, r2.children.some((n2) => kt(n2, e2) && ["ts", "typescript"].includes(n2.attrMap.lang))), br.get(r2);
}
function es(t8, e2, r2) {
  let { node: n2 } = r2, s2 = N(n2);
  return T(`type T<${s2}> = any`, t8, { parser: "babel-ts", __isEmbeddedTypescriptGenericParameters: true }, Q);
}
function ts(t8, e2, { parseWithTs: r2 }) {
  return T(`function _(${t8}) {}`, e2, { parser: r2 ? "babel-ts" : "babel", __isVueBindings: true });
}
async function rs(t8, e2, r2, n2) {
  let s2 = N(r2.node), { left: i, operator: a, right: o2 } = aa(s2), u = Pe(r2, n2);
  return [E(await T(`function _(${i}) {}`, t8, { parser: u ? "babel-ts" : "babel", __isVueForBindingLeft: true })), " ", a, " ", await T(o2, t8, { parser: u ? "__ts_expression" : "__js_expression" })];
}
function aa(t8) {
  let e2 = /(.*?)\s+(in|of)\s+(.*)/su, r2 = /,([^,\]}]*)(?:,([^,\]}]*))?$/u, n2 = /^\(|\)$/gu, s2 = t8.match(e2);
  if (!s2) return;
  let i = {};
  if (i.for = s2[3].trim(), !i.for) return;
  let a = w(false, s2[1].trim(), n2, ""), o2 = a.match(r2);
  o2 ? (i.alias = a.replace(r2, ""), i.iterator1 = o2[1].trim(), o2[2] && (i.iterator2 = o2[2].trim())) : i.alias = a;
  let u = [i.alias, i.iterator1, i.iterator2];
  if (!u.some((p, l2) => !p && (l2 === 0 || u.slice(l2 + 1).some(Boolean)))) return { left: u.filter(Boolean).join(","), operator: s2[2], right: i.for };
}
function oa(t8, e2) {
  if (e2.parser !== "vue") return;
  let { node: r2 } = t8, n2 = r2.fullName;
  if (n2 === "v-for") return rs;
  if (n2 === "generic" && kt(r2.parent, e2)) return es;
  let s2 = N(r2), i = Pe(t8, e2);
  if (Un(r2) || Wn(r2, e2)) return (a) => ts(s2, a, { parseWithTs: i });
  if (n2.startsWith("@") || n2.startsWith("v-on:")) return (a) => ua(s2, a, { parseWithTs: i });
  if (n2.startsWith(":") || n2.startsWith(".") || n2.startsWith("v-bind:")) return (a) => la(s2, a, { parseWithTs: i });
  if (n2.startsWith("v-")) return (a) => ns(s2, a, { parseWithTs: i });
}
async function ua(t8, e2, { parseWithTs: r2 }) {
  var n2;
  try {
    return await ns(t8, e2, { parseWithTs: r2 });
  } catch (s2) {
    if (((n2 = s2.cause) == null ? void 0 : n2.code) !== "BABEL_PARSER_SYNTAX_ERROR") throw s2;
  }
  return T(t8, e2, { parser: r2 ? "__vue_ts_event_binding" : "__vue_event_binding" }, Q);
}
function la(t8, e2, { parseWithTs: r2 }) {
  return T(t8, e2, { parser: r2 ? "__vue_ts_expression" : "__vue_expression" }, Q);
}
function ns(t8, e2, { parseWithTs: r2 }) {
  return T(t8, e2, { parser: r2 ? "__ts_expression" : "__js_expression" }, Q);
}
function ca(t8, e2) {
  let { node: r2 } = t8;
  if (r2.value) {
    if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/u.test(e2.originalText.slice(r2.valueSpan.start.offset, r2.valueSpan.end.offset)) || e2.parser === "lwc" && r2.value.startsWith("{") && r2.value.endsWith("}")) return [r2.rawName, "=", r2.value];
    for (let n2 of [Jn, Zn, Yn, ss, Gn]) {
      let s2 = n2(t8, e2);
      if (s2) return pa(s2);
    }
  }
}
function pa(t8) {
  return async (e2, r2, n2, s2) => {
    let i = await t8(e2, r2, n2, s2);
    if (i) return i = hr(i, (a) => typeof a == "string" ? w(false, a, '"', "&quot;") : a), [n2.node.rawName, '="', E(i), '"'];
  };
}
function ha(t8) {
  return Array.isArray(t8) && t8.length > 0;
}
function J(t8) {
  return t8.sourceSpan.start.offset;
}
function Z(t8) {
  return t8.sourceSpan.end.offset;
}
function tt(t8, e2) {
  return [t8.isSelfClosing ? "" : fa(t8, e2), Ce(t8, e2)];
}
function fa(t8, e2) {
  return t8.lastChild && Ee(t8.lastChild) ? "" : [ma(t8, e2), Bt(t8, e2)];
}
function Ce(t8, e2) {
  return (t8.next ? X(t8.next) : _e(t8.parent)) ? "" : [Se(t8, e2), z(t8, e2)];
}
function ma(t8, e2) {
  return _e(t8) ? Se(t8.lastChild, e2) : "";
}
function z(t8, e2) {
  return Ee(t8) ? Bt(t8.parent, e2) : rt(t8) ? Lt(t8.next, e2) : "";
}
function Bt(t8, e2) {
  if (Tr.ok(!t8.isSelfClosing), us(t8, e2)) return "";
  switch (t8.type) {
    case "ieConditionalComment":
      return "<!";
    case "element":
      if (t8.hasHtmComponentClosingTag) return "<//";
    default:
      return `</${t8.rawName}`;
  }
}
function Se(t8, e2) {
  if (us(t8, e2)) return "";
  switch (t8.type) {
    case "ieConditionalComment":
    case "ieConditionalEndComment":
      return "[endif]-->";
    case "ieConditionalStartComment":
      return "]><!-->";
    case "interpolation":
      return "}}";
    case "angularIcuExpression":
      return "}";
    case "element":
      if (t8.isSelfClosing) return "/>";
    default:
      return ">";
  }
}
function us(t8, e2) {
  return !t8.isSelfClosing && !t8.endSourceSpan && (de(t8) || yt(t8.parent, e2));
}
function X(t8) {
  return t8.prev && t8.prev.type !== "docType" && t8.type !== "angularControlFlowBlock" && !$(t8.prev) && t8.isLeadingSpaceSensitive && !t8.hasLeadingSpaces;
}
function _e(t8) {
  var e2;
  return ((e2 = t8.lastChild) == null ? void 0 : e2.isTrailingSpaceSensitive) && !t8.lastChild.hasTrailingSpaces && !$(bt(t8.lastChild)) && !me(t8);
}
function Ee(t8) {
  return !t8.next && !t8.hasTrailingSpaces && t8.isTrailingSpaceSensitive && $(bt(t8));
}
function rt(t8) {
  return t8.next && !$(t8.next) && $(t8) && t8.isTrailingSpaceSensitive && !t8.hasTrailingSpaces;
}
function da(t8) {
  let e2 = t8.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/su);
  return e2 ? e2[1] ? e2[1].split(/\s+/u) : true : false;
}
function nt(t8) {
  return !t8.prev && t8.isLeadingSpaceSensitive && !t8.hasLeadingSpaces;
}
function ga(t8, e2, r2) {
  var f;
  let { node: n2 } = t8;
  if (!Ie(n2.attrs)) return n2.isSelfClosing ? " " : "";
  let s2 = ((f = n2.prev) == null ? void 0 : f.type) === "comment" && da(n2.prev.value), i = typeof s2 == "boolean" ? () => s2 : Array.isArray(s2) ? (d) => s2.includes(d.rawName) : () => false, a = t8.map(({ node: d }) => i(d) ? B(e2.originalText.slice(J(d), Z(d))) : r2(), "attrs"), o2 = n2.type === "element" && n2.fullName === "script" && n2.attrs.length === 1 && n2.attrs[0].fullName === "src" && n2.children.length === 0, p = e2.singleAttributePerLine && n2.attrs.length > 1 && !ge(n2, e2) ? S : _, l2 = [k([o2 ? " " : _, H(p, a)])];
  return n2.firstChild && nt(n2.firstChild) || n2.isSelfClosing && _e(n2.parent) || o2 ? l2.push(n2.isSelfClosing ? " " : "") : l2.push(e2.bracketSameLine ? n2.isSelfClosing ? " " : "" : n2.isSelfClosing ? _ : v), l2;
}
function Ca(t8) {
  return t8.firstChild && nt(t8.firstChild) ? "" : Ft(t8);
}
function st(t8, e2, r2) {
  let { node: n2 } = t8;
  return [Ae(n2, e2), ga(t8, e2, r2), n2.isSelfClosing ? "" : Ca(n2)];
}
function Ae(t8, e2) {
  return t8.prev && rt(t8.prev) ? "" : [G(t8, e2), Lt(t8, e2)];
}
function G(t8, e2) {
  return nt(t8) ? Ft(t8.parent) : X(t8) ? Se(t8.prev, e2) : "";
}
function Lt(t8, e2) {
  switch (t8.type) {
    case "ieConditionalComment":
    case "ieConditionalStartComment":
      return `<!--[if ${t8.condition}`;
    case "ieConditionalEndComment":
      return "<!--<!";
    case "interpolation":
      return "{{";
    case "docType": {
      if (t8.value === "html") {
        let n2 = e2.filepath ?? "";
        if (/\.html?$/u.test(n2)) return os;
      }
      return e2.originalText.slice(J(t8), Z(t8)).slice(0, os.length);
    }
    case "angularIcuExpression":
      return "{";
    case "element":
      if (t8.condition) return `<!--[if ${t8.condition}]><!--><${t8.rawName}`;
    default:
      return `<${t8.rawName}`;
  }
}
function Ft(t8) {
  switch (Tr.ok(!t8.isSelfClosing), t8.type) {
    case "ieConditionalComment":
      return "]>";
    case "element":
      if (t8.condition) return "><!--<![endif]-->";
    default:
      return ">";
  }
}
function Sa(t8, e2) {
  if (!t8.endSourceSpan) return "";
  let r2 = t8.startSourceSpan.end.offset;
  t8.firstChild && nt(t8.firstChild) && (r2 -= Ft(t8).length);
  let n2 = t8.endSourceSpan.start.offset;
  return t8.lastChild && Ee(t8.lastChild) ? n2 += Bt(t8, e2).length : _e(t8) && (n2 -= Se(t8.lastChild, e2).length), e2.originalText.slice(r2, n2);
}
function Ea(t8, e2) {
  let { node: r2 } = t8;
  switch (r2.type) {
    case "element":
      if (W(r2) || r2.type === "interpolation") return;
      if (!r2.isSelfClosing && Tt(r2, e2)) {
        let n2 = Ar(r2, e2);
        return n2 ? async (s2, i) => {
          let a = Nt(r2, e2), o2 = /^\s*$/u.test(a), u = "";
          return o2 || (u = await s2(Sr(a), { parser: n2, __embeddedInHtml: true }), o2 = u === ""), [G(r2, e2), E(st(t8, e2, i)), o2 ? "" : S, u, o2 ? "" : S, tt(r2, e2), z(r2, e2)];
        } : void 0;
      }
      break;
    case "text":
      if (W(r2.parent)) {
        let n2 = Ar(r2.parent, e2);
        if (n2) return async (s2) => {
          let i = n2 === "markdown" ? Dr(r2.value.replace(/^[^\S\n]*\n/u, "")) : r2.value, a = { parser: n2, __embeddedInHtml: true };
          if (e2.parser === "html" && n2 === "babel") {
            let o2 = "script", { attrMap: u } = r2.parent;
            u && (u.type === "module" || u.type === "text/babel" && u["data-type"] === "module") && (o2 = "module"), a.__babelSourceType = o2;
          }
          return [se, G(r2, e2), await s2(i, a), z(r2, e2)];
        };
      } else if (r2.parent.type === "interpolation") return async (n2) => {
        let s2 = { __isInHtmlInterpolation: true, __embeddedInHtml: true };
        return e2.parser === "angular" ? s2.parser = "__ng_interpolation" : e2.parser === "vue" ? s2.parser = Pe(t8, e2) ? "__vue_ts_expression" : "__vue_expression" : s2.parser = "__js_expression", [k([_, await n2(r2.value, s2)]), r2.parent.next && X(r2.parent.next) ? " " : _];
      };
      break;
    case "attribute":
      return is(t8, e2);
    case "front-matter":
      return (n2) => Dn(r2, n2);
    case "angularControlFlowBlockParameters":
      return _a2.has(t8.parent.name) ? vn : void 0;
    case "angularLetDeclarationInitializer":
      return (n2) => T(r2.value, n2, { parser: "__ng_binding", __isInHtmlAttribute: false });
  }
}
function at(t8) {
  if (it !== null && typeof it.property) {
    let e2 = it;
    return it = at.prototype = null, e2;
  }
  return it = at.prototype = t8 ?? /* @__PURE__ */ Object.create(null), new at();
}
function xr(t8) {
  return at(t8);
}
function Da(t8, e2 = "type") {
  xr(t8);
  function r2(n2) {
    let s2 = n2[e2], i = t8[s2];
    if (!Array.isArray(i)) throw Object.assign(new Error(`Missing visitor keys for '${s2}'.`), { node: n2 });
    return i;
  }
  return r2;
}
function fs(t8) {
  return /^\s*<!--\s*@(?:format|prettier)\s*-->/u.test(t8);
}
function ms(t8) {
  return `<!-- @format -->

` + t8;
}
function gs(t8) {
  let e2 = Z(t8);
  return t8.type === "element" && !t8.endSourceSpan && Ie(t8.children) ? Math.max(e2, gs(K(false, t8.children, -1))) : e2;
}
function ot(t8, e2, r2) {
  let n2 = t8.node;
  if (de(n2)) {
    let s2 = gs(n2);
    return [G(n2, e2), B(O.trimEnd(e2.originalText.slice(J(n2) + (n2.prev && rt(n2.prev) ? Lt(n2).length : 0), s2 - (n2.next && X(n2.next) ? Se(n2, e2).length : 0)))), z(n2, e2)];
  }
  return r2();
}
function Pt(t8, e2) {
  return $(t8) && $(e2) ? t8.isTrailingSpaceSensitive ? t8.hasTrailingSpaces ? wt(e2) ? S : _ : "" : wt(e2) ? S : v : rt(t8) && (de(e2) || e2.firstChild || e2.isSelfClosing || e2.type === "element" && e2.attrs.length > 0) || t8.type === "element" && t8.isSelfClosing && X(e2) ? "" : !e2.isLeadingSpaceSensitive || wt(e2) || X(e2) && t8.lastChild && Ee(t8.lastChild) && t8.lastChild.lastChild && Ee(t8.lastChild.lastChild) ? S : e2.hasLeadingSpaces ? _ : v;
}
function Re(t8, e2, r2) {
  let { node: n2 } = t8;
  if (Er(n2)) return [se, ...t8.map((i) => {
    let a = i.node, o2 = a.prev ? Pt(a.prev, a) : "";
    return [o2 ? [o2, Je(a.prev) ? S : ""] : "", ot(i, e2, r2)];
  }, "children")];
  let s2 = n2.children.map(() => Symbol(""));
  return t8.map((i, a) => {
    let o2 = i.node;
    if ($(o2)) {
      if (o2.prev && $(o2.prev)) {
        let A2 = Pt(o2.prev, o2);
        if (A2) return Je(o2.prev) ? [S, S, ot(i, e2, r2)] : [A2, ot(i, e2, r2)];
      }
      return ot(i, e2, r2);
    }
    let u = [], p = [], l2 = [], f = [], d = o2.prev ? Pt(o2.prev, o2) : "", C = o2.next ? Pt(o2, o2.next) : "";
    return d && (Je(o2.prev) ? u.push(S, S) : d === S ? u.push(S) : $(o2.prev) ? p.push(d) : p.push(pe("", v, { groupId: s2[a - 1] }))), C && (Je(o2) ? $(o2.next) && f.push(S, S) : C === S ? $(o2.next) && f.push(S) : l2.push(C)), [...u, E([...p, E([ot(i, e2, r2), ...l2], { id: s2[a] })]), ...f];
  }, "children");
}
function Cs(t8, e2, r2) {
  let { node: n2 } = t8, s2 = [];
  wa(t8) && s2.push("} "), s2.push("@", n2.name), n2.parameters && s2.push(" (", E(r2("parameters")), ")"), s2.push(" {");
  let i = Ss(n2);
  return n2.children.length > 0 ? (n2.firstChild.hasLeadingSpaces = true, n2.lastChild.hasTrailingSpaces = true, s2.push(k([S, Re(t8, e2, r2)])), i && s2.push(S, "}")) : i && s2.push("}"), E(s2, { shouldBreak: true });
}
function Ss(t8) {
  var e2, r2;
  return !(((e2 = t8.next) == null ? void 0 : e2.type) === "angularControlFlowBlock" && ((r2 = ds.get(t8.name)) != null && r2.has(t8.next.name)));
}
function wa(t8) {
  let { previous: e2 } = t8;
  return (e2 == null ? void 0 : e2.type) === "angularControlFlowBlock" && !de(e2) && !Ss(e2);
}
function _s(t8, e2, r2) {
  return [k([v, H([";", _], t8.map(r2, "children"))]), v];
}
function Es(t8, e2, r2) {
  let { node: n2 } = t8;
  return [Ae(n2, e2), E([n2.switchValue.trim(), ", ", n2.clause, n2.cases.length > 0 ? [",", k([_, H(_, t8.map(r2, "cases"))])] : "", v]), Ce(n2, e2)];
}
function As(t8, e2, r2) {
  let { node: n2 } = t8;
  return [n2.value, " {", E([k([v, t8.map(({ node: s2, isLast: i }) => {
    let a = [r2()];
    return s2.type === "text" && (s2.hasLeadingSpaces && a.unshift(_), s2.hasTrailingSpaces && !i && a.push(_)), a;
  }, "expression")]), v]), "}"];
}
function Ds(t8, e2, r2) {
  let { node: n2 } = t8;
  if (yt(n2, e2)) return [G(n2, e2), E(st(t8, e2, r2)), B(Nt(n2, e2)), ...tt(n2, e2), z(n2, e2)];
  let s2 = n2.children.length === 1 && (n2.firstChild.type === "interpolation" || n2.firstChild.type === "angularIcuExpression") && n2.firstChild.isLeadingSpaceSensitive && !n2.firstChild.hasLeadingSpaces && n2.lastChild.isTrailingSpaceSensitive && !n2.lastChild.hasTrailingSpaces, i = Symbol("element-attr-group-id"), a = (l2) => E([E(st(t8, e2, r2), { id: i }), l2, tt(n2, e2)]), o2 = (l2) => s2 ? dn(l2, { groupId: i }) : (W(n2) || et(n2, e2)) && n2.parent.type === "root" && e2.parser === "vue" && !e2.vueIndentScriptAndStyle ? l2 : k(l2), u = () => s2 ? pe(v, "", { groupId: i }) : n2.firstChild.hasLeadingSpaces && n2.firstChild.isLeadingSpaceSensitive ? _ : n2.firstChild.type === "text" && n2.isWhitespaceSensitive && n2.isIndentationSensitive ? fn(v) : v, p = () => (n2.next ? X(n2.next) : _e(n2.parent)) ? n2.lastChild.hasTrailingSpaces && n2.lastChild.isTrailingSpaceSensitive ? " " : "" : s2 ? pe(v, "", { groupId: i }) : n2.lastChild.hasTrailingSpaces && n2.lastChild.isTrailingSpaceSensitive ? _ : (n2.lastChild.type === "comment" || n2.lastChild.type === "text" && n2.isWhitespaceSensitive && n2.isIndentationSensitive) && new RegExp(`\\n[\\t ]{${e2.tabWidth * (t8.ancestors.length - 1)}}$`, "u").test(n2.lastChild.value) ? "" : v;
  return n2.children.length === 0 ? a(n2.hasDanglingSpaces && n2.isDanglingSpaceSensitive ? _ : "") : a([In(n2) ? se : "", o2([u(), Re(t8, e2, r2)]), p()]);
}
function ut(t8) {
  return t8 >= 9 && t8 <= 32 || t8 == 160;
}
function It(t8) {
  return 48 <= t8 && t8 <= 57;
}
function lt(t8) {
  return t8 >= 97 && t8 <= 122 || t8 >= 65 && t8 <= 90;
}
function vs(t8) {
  return t8 >= 97 && t8 <= 102 || t8 >= 65 && t8 <= 70 || It(t8);
}
function Rt(t8) {
  return t8 === 10 || t8 === 13;
}
function kr(t8) {
  return 48 <= t8 && t8 <= 55;
}
function $t(t8) {
  return t8 === 39 || t8 === 34 || t8 === 96;
}
function ws2(t8) {
  return t8.replace(ba, (...e2) => e2[1].toUpperCase());
}
function xa(t8, e2) {
  for (let r2 of Ta) r2(t8, e2);
  return t8;
}
function ka(t8) {
  t8.walk((e2) => {
    if (e2.type === "element" && e2.tagDefinition.ignoreFirstLf && e2.children.length > 0 && e2.children[0].type === "text" && e2.children[0].value[0] === `
`) {
      let r2 = e2.children[0];
      r2.value.length === 1 ? e2.removeChild(r2) : r2.value = r2.value.slice(1);
    }
  });
}
function Ba(t8) {
  let e2 = (r2) => {
    var n2, s2;
    return r2.type === "element" && ((n2 = r2.prev) == null ? void 0 : n2.type) === "ieConditionalStartComment" && r2.prev.sourceSpan.end.offset === r2.startSourceSpan.start.offset && ((s2 = r2.firstChild) == null ? void 0 : s2.type) === "ieConditionalEndComment" && r2.firstChild.sourceSpan.start.offset === r2.startSourceSpan.end.offset;
  };
  t8.walk((r2) => {
    if (r2.children) for (let n2 = 0; n2 < r2.children.length; n2++) {
      let s2 = r2.children[n2];
      if (!e2(s2)) continue;
      let i = s2.prev, a = s2.firstChild;
      r2.removeChild(i), n2--;
      let o2 = new h(i.sourceSpan.start, a.sourceSpan.end), u = new h(o2.start, s2.sourceSpan.end);
      s2.condition = i.condition, s2.sourceSpan = u, s2.startSourceSpan = o2, s2.removeChild(a);
    }
  });
}
function La(t8, e2, r2) {
  t8.walk((n2) => {
    if (n2.children) for (let s2 = 0; s2 < n2.children.length; s2++) {
      let i = n2.children[s2];
      if (i.type !== "text" && !e2(i)) continue;
      i.type !== "text" && (i.type = "text", i.value = r2(i));
      let a = i.prev;
      !a || a.type !== "text" || (a.value += i.value, a.sourceSpan = new h(a.sourceSpan.start, i.sourceSpan.end), n2.removeChild(i), s2--);
    }
  });
}
function Fa(t8) {
  return La(t8, (e2) => e2.type === "cdata", (e2) => `<![CDATA[${e2.value}]]>`);
}
function Na(t8) {
  let e2 = (r2) => {
    var n2, s2;
    return r2.type === "element" && r2.attrs.length === 0 && r2.children.length === 1 && r2.firstChild.type === "text" && !O.hasWhitespaceCharacter(r2.children[0].value) && !r2.firstChild.hasLeadingSpaces && !r2.firstChild.hasTrailingSpaces && r2.isLeadingSpaceSensitive && !r2.hasLeadingSpaces && r2.isTrailingSpaceSensitive && !r2.hasTrailingSpaces && ((n2 = r2.prev) == null ? void 0 : n2.type) === "text" && ((s2 = r2.next) == null ? void 0 : s2.type) === "text";
  };
  t8.walk((r2) => {
    if (r2.children) for (let n2 = 0; n2 < r2.children.length; n2++) {
      let s2 = r2.children[n2];
      if (!e2(s2)) continue;
      let i = s2.prev, a = s2.next;
      i.value += `<${s2.rawName}>` + s2.firstChild.value + `</${s2.rawName}>` + a.value, i.sourceSpan = new h(i.sourceSpan.start, a.sourceSpan.end), i.isTrailingSpaceSensitive = a.isTrailingSpaceSensitive, i.hasTrailingSpaces = a.hasTrailingSpaces, r2.removeChild(s2), n2--, r2.removeChild(a);
    }
  });
}
function Pa(t8, e2) {
  if (e2.parser === "html") return;
  let r2 = /\{\{(.+?)\}\}/su;
  t8.walk((n2) => {
    if (Bn(n2)) for (let s2 of n2.children) {
      if (s2.type !== "text") continue;
      let i = s2.sourceSpan.start, a = null, o2 = s2.value.split(r2);
      for (let u = 0; u < o2.length; u++, i = a) {
        let p = o2[u];
        if (u % 2 === 0) {
          a = i.moveBy(p.length), p.length > 0 && n2.insertChildBefore(s2, { type: "text", value: p, sourceSpan: new h(i, a) });
          continue;
        }
        a = i.moveBy(p.length + 4), n2.insertChildBefore(s2, { type: "interpolation", sourceSpan: new h(i, a), children: p.length === 0 ? [] : [{ type: "text", value: p, sourceSpan: new h(i.moveBy(2), a.moveBy(-2)) }] });
      }
      n2.removeChild(s2);
    }
  });
}
function Ia(t8) {
  t8.walk((e2) => {
    let r2 = e2.$children;
    if (!r2) return;
    if (r2.length === 0 || r2.length === 1 && r2[0].type === "text" && O.trim(r2[0].value).length === 0) {
      e2.hasDanglingSpaces = r2.length > 0, e2.$children = [];
      return;
    }
    let n2 = Ln(e2), s2 = _r(e2);
    if (!n2) for (let i = 0; i < r2.length; i++) {
      let a = r2[i];
      if (a.type !== "text") continue;
      let { leadingWhitespace: o2, text: u, trailingWhitespace: p } = kn(a.value), l2 = a.prev, f = a.next;
      u ? (a.value = u, a.sourceSpan = new h(a.sourceSpan.start.moveBy(o2.length), a.sourceSpan.end.moveBy(-p.length)), o2 && (l2 && (l2.hasTrailingSpaces = true), a.hasLeadingSpaces = true), p && (a.hasTrailingSpaces = true, f && (f.hasLeadingSpaces = true))) : (e2.removeChild(a), i--, (o2 || p) && (l2 && (l2.hasTrailingSpaces = true), f && (f.hasLeadingSpaces = true)));
    }
    e2.isWhitespaceSensitive = n2, e2.isIndentationSensitive = s2;
  });
}
function Ra(t8) {
  t8.walk((e2) => {
    e2.isSelfClosing = !e2.children || e2.type === "element" && (e2.tagDefinition.isVoid || e2.endSourceSpan && e2.startSourceSpan.start === e2.endSourceSpan.start && e2.startSourceSpan.end === e2.endSourceSpan.end);
  });
}
function $a(t8, e2) {
  t8.walk((r2) => {
    r2.type === "element" && (r2.hasHtmComponentClosingTag = r2.endSourceSpan && /^<\s*\/\s*\/\s*>$/u.test(e2.originalText.slice(r2.endSourceSpan.start.offset, r2.endSourceSpan.end.offset)));
  });
}
function Oa(t8, e2) {
  t8.walk((r2) => {
    r2.cssDisplay = Hn(r2, e2);
  });
}
function Ma(t8, e2) {
  t8.walk((r2) => {
    let { children: n2 } = r2;
    if (n2) {
      if (n2.length === 0) {
        r2.isDanglingSpaceSensitive = Pn(r2);
        return;
      }
      for (let s2 of n2) s2.isLeadingSpaceSensitive = Fn(s2, e2), s2.isTrailingSpaceSensitive = Nn(s2, e2);
      for (let s2 = 0; s2 < n2.length; s2++) {
        let i = n2[s2];
        i.isLeadingSpaceSensitive = (s2 === 0 || i.prev.isTrailingSpaceSensitive) && i.isLeadingSpaceSensitive, i.isTrailingSpaceSensitive = (s2 === n2.length - 1 || i.next.isLeadingSpaceSensitive) && i.isTrailingSpaceSensitive;
      }
    }
  });
}
function qa(t8, e2, r2) {
  let { node: n2 } = t8;
  switch (n2.type) {
    case "front-matter":
      return B(n2.raw);
    case "root":
      return e2.__onHtmlRoot && e2.__onHtmlRoot(n2), [E(Re(t8, e2, r2)), S];
    case "element":
    case "ieConditionalComment":
      return Ds(t8, e2, r2);
    case "angularControlFlowBlock":
      return Cs(t8, e2, r2);
    case "angularControlFlowBlockParameters":
      return _s(t8, e2, r2);
    case "angularControlFlowBlockParameter":
      return O.trim(n2.expression);
    case "angularLetDeclaration":
      return E(["@let ", E([n2.id, " =", E(k([_, r2("init")]))]), ";"]);
    case "angularLetDeclarationInitializer":
      return n2.value;
    case "angularIcuExpression":
      return Es(t8, e2, r2);
    case "angularIcuCase":
      return As(t8, e2, r2);
    case "ieConditionalStartComment":
    case "ieConditionalEndComment":
      return [Ae(n2), Ce(n2)];
    case "interpolation":
      return [Ae(n2, e2), ...t8.map(r2, "children"), Ce(n2, e2)];
    case "text": {
      if (n2.parent.type === "interpolation") {
        let o2 = /\n[^\S\n]*$/u, u = o2.test(n2.value), p = u ? n2.value.replace(o2, "") : n2.value;
        return [B(p), u ? S : ""];
      }
      let s2 = G(n2, e2), i = xt(n2), a = z(n2, e2);
      return i[0] = [s2, i[0]], i.push([i.pop(), a]), Dt(i);
    }
    case "docType":
      return [E([Ae(n2, e2), " ", w(false, n2.value.replace(/^html\b/iu, "html"), /\s+/gu, " ")]), Ce(n2, e2)];
    case "comment":
      return [G(n2, e2), B(e2.originalText.slice(J(n2), Z(n2))), z(n2, e2)];
    case "attribute": {
      if (n2.value === null) return n2.rawName;
      let s2 = vr(n2.value), i = Cn(s2, '"');
      return [n2.rawName, "=", i, B(i === '"' ? w(false, s2, '"', "&quot;") : w(false, s2, "'", "&apos;")), i];
    }
    case "cdata":
    default:
      throw new _n(n2, "HTML");
  }
}
function ct(t8, e2 = true) {
  if (t8[0] != ":") return [null, t8];
  let r2 = t8.indexOf(":", 1);
  if (r2 === -1) {
    if (e2) throw new Error(`Unsupported format "${t8}" expecting ":namespace:name"`);
    return [null, t8];
  }
  return [t8.slice(1, r2), t8.slice(r2 + 1)];
}
function Nr(t8) {
  return ct(t8)[1] === "ng-container";
}
function Pr(t8) {
  return ct(t8)[1] === "ng-content";
}
function Me(t8) {
  return t8 === null ? null : ct(t8)[0];
}
function qe(t8, e2) {
  return t8 ? `:${t8}:${e2}` : e2;
}
function Ir() {
  return qt || (qt = {}, Mt(ee.HTML, ["iframe|srcdoc", "*|innerHTML", "*|outerHTML"]), Mt(ee.STYLE, ["*|style"]), Mt(ee.URL, ["*|formAction", "area|href", "area|ping", "audio|src", "a|href", "a|ping", "blockquote|cite", "body|background", "del|cite", "form|action", "img|src", "input|src", "ins|cite", "q|cite", "source|src", "track|src", "video|poster", "video|src"]), Mt(ee.RESOURCE_URL, ["applet|code", "applet|codebase", "base|href", "embed|src", "frame|src", "head|profile", "html|manifest", "iframe|src", "link|href", "media|src", "object|codebase", "object|data", "script|src"])), qt;
}
function Mt(t8, e2) {
  for (let r2 of e2) qt[r2.toLowerCase()] = t8;
}
function Ka(t8) {
  switch (t8) {
    case "width":
    case "height":
    case "minWidth":
    case "minHeight":
    case "maxWidth":
    case "maxHeight":
    case "left":
    case "top":
    case "bottom":
    case "right":
    case "fontSize":
    case "outlineWidth":
    case "outlineOffset":
    case "paddingTop":
    case "paddingLeft":
    case "paddingBottom":
    case "paddingRight":
    case "marginTop":
    case "marginLeft":
    case "marginBottom":
    case "marginRight":
    case "borderRadius":
    case "borderWidth":
    case "borderTopWidth":
    case "borderLeftWidth":
    case "borderRightWidth":
    case "borderBottomWidth":
    case "textIndent":
      return true;
    default:
      return false;
  }
}
function He(t8) {
  return pt || (Rs = new m({ canSelfClose: true }), pt = Object.assign(/* @__PURE__ */ Object.create(null), { base: new m({ isVoid: true }), meta: new m({ isVoid: true }), area: new m({ isVoid: true }), embed: new m({ isVoid: true }), link: new m({ isVoid: true }), img: new m({ isVoid: true }), input: new m({ isVoid: true }), param: new m({ isVoid: true }), hr: new m({ isVoid: true }), br: new m({ isVoid: true }), source: new m({ isVoid: true }), track: new m({ isVoid: true }), wbr: new m({ isVoid: true }), p: new m({ closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"], closedByParent: true }), thead: new m({ closedByChildren: ["tbody", "tfoot"] }), tbody: new m({ closedByChildren: ["tbody", "tfoot"], closedByParent: true }), tfoot: new m({ closedByChildren: ["tbody"], closedByParent: true }), tr: new m({ closedByChildren: ["tr"], closedByParent: true }), td: new m({ closedByChildren: ["td", "th"], closedByParent: true }), th: new m({ closedByChildren: ["td", "th"], closedByParent: true }), col: new m({ isVoid: true }), svg: new m({ implicitNamespacePrefix: "svg" }), foreignObject: new m({ implicitNamespacePrefix: "svg", preventNamespaceInheritance: true }), math: new m({ implicitNamespacePrefix: "math" }), li: new m({ closedByChildren: ["li"], closedByParent: true }), dt: new m({ closedByChildren: ["dt", "dd"] }), dd: new m({ closedByChildren: ["dt", "dd"], closedByParent: true }), rb: new m({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rt: new m({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), rtc: new m({ closedByChildren: ["rb", "rtc", "rp"], closedByParent: true }), rp: new m({ closedByChildren: ["rb", "rt", "rtc", "rp"], closedByParent: true }), optgroup: new m({ closedByChildren: ["optgroup"], closedByParent: true }), option: new m({ closedByChildren: ["option", "optgroup"], closedByParent: true }), pre: new m({ ignoreFirstLf: true }), listing: new m({ ignoreFirstLf: true }), style: new m({ contentType: P.RAW_TEXT }), script: new m({ contentType: P.RAW_TEXT }), title: new m({ contentType: { default: P.ESCAPABLE_RAW_TEXT, svg: P.PARSABLE_DATA } }), textarea: new m({ contentType: P.ESCAPABLE_RAW_TEXT, ignoreFirstLf: true }) }), new Vt().allKnownElementNames().forEach((e2) => {
    !pt[e2] && Me(e2) === null && (pt[e2] = new m({ canSelfClose: false }));
  })), pt[t8] ?? Rs;
}
function Qt(t8, e2, r2 = null) {
  let n2 = [], s2 = t8.visit ? (i) => t8.visit(i, r2) || i.visit(t8, r2) : (i) => i.visit(t8, r2);
  return e2.forEach((i) => {
    let a = s2(i);
    a && n2.push(a);
  }), n2;
}
function $s(t8, e2) {
  if (e2 != null && !(Array.isArray(e2) && e2.length == 2)) throw new Error(`Expected '${t8}' to be an array, [start, end].`);
  if (e2 != null) {
    let r2 = e2[0], n2 = e2[1];
    Ja.forEach((s2) => {
      if (s2.test(r2) || s2.test(n2)) throw new Error(`['${r2}', '${n2}'] contains unusable interpolation symbol.`);
    });
  }
}
function Qs(t8, e2, r2, n2 = {}) {
  let s2 = new Ur(new De(t8, e2), r2, n2);
  return s2.tokenize(), new Vr(wo(s2.tokens), s2.errors, s2.nonNormalizedIcuExpressions);
}
function Ue(t8) {
  return `Unexpected character "${t8 === 0 ? "EOF" : String.fromCharCode(t8)}"`;
}
function Vs(t8) {
  return `Unknown entity "${t8}" - use the "&#<decimal>;" or  "&#x<hex>;" syntax`;
}
function _o(t8, e2) {
  return `Unable to parse entity "${e2}" - ${t8} character reference entities must end with ";"`;
}
function b(t8) {
  return !ut(t8) || t8 === 0;
}
function Us(t8) {
  return ut(t8) || t8 === 62 || t8 === 60 || t8 === 47 || t8 === 39 || t8 === 34 || t8 === 61 || t8 === 0;
}
function Eo(t8) {
  return (t8 < 97 || 122 < t8) && (t8 < 65 || 90 < t8) && (t8 < 48 || t8 > 57);
}
function Ao(t8) {
  return t8 === 59 || t8 === 0 || !vs(t8);
}
function Do(t8) {
  return t8 === 59 || t8 === 0 || !lt(t8);
}
function vo(t8) {
  return t8 !== 125;
}
function yo(t8, e2) {
  return Ws(t8) === Ws(e2);
}
function Ws(t8) {
  return t8 >= 97 && t8 <= 122 ? t8 - 97 + 65 : t8;
}
function zs(t8) {
  return lt(t8) || It(t8) || t8 === 95;
}
function Gs(t8) {
  return t8 !== 59 && b(t8);
}
function wo(t8) {
  let e2 = [], r2;
  for (let n2 = 0; n2 < t8.length; n2++) {
    let s2 = t8[n2];
    r2 && r2.type === 5 && s2.type === 5 || r2 && r2.type === 16 && s2.type === 16 ? (r2.parts[0] += s2.parts[0], r2.sourceSpan.end = s2.sourceSpan.end) : (r2 = s2, e2.push(r2));
  }
  return e2;
}
function Xs(t8, e2) {
  return t8.length > 0 && t8[t8.length - 1] === e2;
}
function Js(t8, e2) {
  return Ve[e2] !== void 0 ? Ve[e2] || t8 : /^#x[a-f0-9]+$/i.test(e2) ? String.fromCodePoint(parseInt(e2.slice(2), 16)) : /^#\d+$/.test(e2) ? String.fromCodePoint(parseInt(e2.slice(1), 10)) : t8;
}
function Qr(t8, e2 = {}) {
  let { canSelfClose: r2 = false, allowHtmComponentClosingTags: n2 = false, isTagNameCaseSensitive: s2 = false, getTagContentType: i, tokenizeAngularBlocks: a = false, tokenizeAngularLetDeclaration: o2 = false } = e2;
  return bo().parse(t8, "angular-html-parser", { tokenizeExpansionForms: a, interpolationConfig: void 0, canSelfClose: r2, allowHtmComponentClosingTags: n2, tokenizeBlocks: a, tokenizeLet: o2 }, s2, i);
}
function To(t8, e2) {
  let r2 = new SyntaxError(t8 + " (" + e2.loc.start.line + ":" + e2.loc.start.column + ")");
  return Object.assign(r2, e2);
}
function xo(t8) {
  let e2 = t8.slice(0, _t);
  if (e2 !== "---" && e2 !== "+++") return;
  let r2 = t8.indexOf(`
`, _t);
  if (r2 === -1) return;
  let n2 = t8.slice(_t, r2).trim(), s2 = t8.indexOf(`
${e2}`, r2), i = n2;
  if (i || (i = e2 === "+++" ? "toml" : "yaml"), s2 === -1 && e2 === "---" && i === "yaml" && (s2 = t8.indexOf(`
...`, r2)), s2 === -1) return;
  let a = s2 + 1 + _t, o2 = t8.charAt(a + 1);
  if (!/\s?/u.test(o2)) return;
  let u = t8.slice(0, a);
  return { type: "front-matter", language: i, explicitLanguage: n2, value: t8.slice(r2 + 1, s2), startDelimiter: e2, endDelimiter: u.slice(-_t), raw: u };
}
function ko(t8) {
  let e2 = xo(t8);
  if (!e2) return { content: t8 };
  let { raw: r2 } = e2;
  return { frontMatter: e2, content: w(false, r2, /[^\n]/gu, " ") + t8.slice(r2.length) };
}
function Bo(t8, e2) {
  let r2 = t8.map(e2);
  return r2.some((n2, s2) => n2 !== t8[s2]) ? r2 : t8;
}
function ri(t8, e2) {
  if (t8.value) for (let { regex: r2, parse: n2 } of Lo) {
    let s2 = t8.value.match(r2);
    if (s2) return n2(t8, e2, s2);
  }
  return null;
}
function Fo(t8, e2, r2) {
  let [, n2, s2, i] = r2, a = 4 + n2.length, o2 = t8.sourceSpan.start.moveBy(a), u = o2.moveBy(i.length), [p, l2] = (() => {
    try {
      return [true, e2(i, o2).children];
    } catch {
      return [false, [{ type: "text", value: i, sourceSpan: new h(o2, u) }]];
    }
  })();
  return { type: "ieConditionalComment", complete: p, children: l2, condition: w(false, s2.trim(), /\s+/gu, " "), sourceSpan: t8.sourceSpan, startSourceSpan: new h(t8.sourceSpan.start, o2), endSourceSpan: new h(u, t8.sourceSpan.end) };
}
function No(t8, e2, r2) {
  let [, n2] = r2;
  return { type: "ieConditionalStartComment", condition: w(false, n2.trim(), /\s+/gu, " "), sourceSpan: t8.sourceSpan };
}
function Po(t8) {
  return { type: "ieConditionalEndComment", sourceSpan: t8.sourceSpan };
}
function Io(t8) {
  if (t8.type === "block") {
    if (t8.name = w(false, t8.name.toLowerCase(), /\s+/gu, " ").trim(), t8.type = "angularControlFlowBlock", !Ie(t8.parameters)) {
      delete t8.parameters;
      return;
    }
    for (let e2 of t8.parameters) e2.type = "angularControlFlowBlockParameter";
    t8.parameters = { type: "angularControlFlowBlockParameters", children: t8.parameters, sourceSpan: new h(t8.parameters[0].sourceSpan.start, K(false, t8.parameters, -1).sourceSpan.end) };
  }
}
function Ro(t8) {
  t8.type === "letDeclaration" && (t8.type = "angularLetDeclaration", t8.id = t8.name, t8.init = { type: "angularLetDeclarationInitializer", sourceSpan: new h(t8.valueSpan.start, t8.valueSpan.end), value: t8.value }, delete t8.name, delete t8.value);
}
function $o(t8) {
  (t8.type === "plural" || t8.type === "select") && (t8.clause = t8.type, t8.type = "angularIcuExpression"), t8.type === "expansionCase" && (t8.type = "angularIcuCase");
}
function ii(t8, e2, r2) {
  let { name: n2, canSelfClose: s2 = true, normalizeTagName: i = false, normalizeAttributeName: a = false, allowHtmComponentClosingTags: o2 = false, isTagNameCaseSensitive: u = false, shouldParseAsRawText: p } = e2, { rootNodes: l2, errors: f } = Qr(t8, { canSelfClose: s2, allowHtmComponentClosingTags: o2, isTagNameCaseSensitive: u, getTagContentType: p ? (...c2) => p(...c2) ? P.RAW_TEXT : void 0 : void 0, tokenizeAngularBlocks: n2 === "angular" ? true : void 0, tokenizeAngularLetDeclaration: n2 === "angular" ? true : void 0 });
  if (n2 === "vue") {
    if (l2.some((x2) => x2.type === "docType" && x2.value === "html" || x2.type === "element" && x2.name.toLowerCase() === "html")) return ii(t8, oi, r2);
    let g, y2 = () => g ?? (g = Qr(t8, { canSelfClose: s2, allowHtmComponentClosingTags: o2, isTagNameCaseSensitive: u })), q2 = (x2) => y2().rootNodes.find(({ startSourceSpan: U2 }) => U2 && U2.start.offset === x2.startSourceSpan.start.offset) ?? x2;
    for (let [x2, U2] of l2.entries()) {
      let { endSourceSpan: tn2, startSourceSpan: ui2 } = U2;
      if (tn2 === null) f = y2().errors, l2[x2] = q2(U2);
      else if (Oo(U2, r2)) {
        let rn2 = y2().errors.find((nn2) => nn2.span.start.offset > ui2.start.offset && nn2.span.start.offset < tn2.end.offset);
        rn2 && si(rn2), l2[x2] = q2(U2);
      }
    }
  }
  f.length > 0 && si(f[0]);
  let d = (c2) => {
    let g = c2.name.startsWith(":") ? c2.name.slice(1).split(":")[0] : null, y2 = c2.nameSpan.toString(), q2 = g !== null && y2.startsWith(`${g}:`), x2 = q2 ? y2.slice(g.length + 1) : y2;
    c2.name = x2, c2.namespace = g, c2.hasExplicitNamespace = q2;
  }, C = (c2) => {
    switch (c2.type) {
      case "element":
        d(c2);
        for (let g of c2.attrs) d(g), g.valueSpan ? (g.value = g.valueSpan.toString(), /["']/u.test(g.value[0]) && (g.value = g.value.slice(1, -1))) : g.value = null;
        break;
      case "comment":
        c2.value = c2.sourceSpan.toString().slice(4, -3);
        break;
      case "text":
        c2.value = c2.sourceSpan.toString();
        break;
    }
  }, A2 = (c2, g) => {
    let y2 = c2.toLowerCase();
    return g(y2) ? y2 : c2;
  }, D = (c2) => {
    if (c2.type === "element" && (i && (!c2.namespace || c2.namespace === c2.tagDefinition.implicitNamespacePrefix || fe(c2)) && (c2.name = A2(c2.name, (g) => ni.has(g))), a)) for (let g of c2.attrs) g.namespace || (g.name = A2(g.name, (y2) => or.has(c2.name) && (or.get("*").has(y2) || or.get(c2.name).has(y2))));
  }, I3 = (c2) => {
    c2.sourceSpan && c2.endSourceSpan && (c2.sourceSpan = new h(c2.sourceSpan.start, c2.endSourceSpan.end));
  }, F = (c2) => {
    if (c2.type === "element") {
      let g = He(u ? c2.name : c2.name.toLowerCase());
      !c2.namespace || c2.namespace === g.implicitNamespacePrefix || fe(c2) ? c2.tagDefinition = g : c2.tagDefinition = He("");
    }
  };
  return Qt(new class extends mt {
    visitExpansionCase(c2, g) {
      n2 === "angular" && this.visitChildren(g, (y2) => {
        y2(c2.expression);
      });
    }
    visit(c2) {
      C(c2), F(c2), D(c2), I3(c2);
    }
  }(), l2), l2;
}
function Oo(t8, e2) {
  var n2;
  if (t8.type !== "element" || t8.name !== "template") return false;
  let r2 = (n2 = t8.attrs.find((s2) => s2.name === "lang")) == null ? void 0 : n2.value;
  return !r2 || Ne(e2, { language: r2 }) === "html";
}
function si(t8) {
  let { msg: e2, span: { start: r2, end: n2 } } = t8;
  throw Zs(e2, { loc: { start: { line: r2.line + 1, column: r2.col + 1 }, end: { line: n2.line + 1, column: n2.col + 1 } }, cause: t8 });
}
function ai(t8, e2, r2 = {}, n2 = true) {
  let { frontMatter: s2, content: i } = n2 ? ei(t8) : { frontMatter: null, content: t8 }, a = new De(t8, r2.filepath), o2 = new ie(a, 0, 0, 0), u = o2.moveBy(t8.length), p = { type: "root", sourceSpan: new h(o2, u), children: ii(i, e2, r2) };
  if (s2) {
    let d = new ie(a, 0, 0, 0), C = d.moveBy(s2.raw.length);
    s2.sourceSpan = new h(d, C), p.children.unshift(s2);
  }
  let l2 = new ar(p), f = (d, C) => {
    let { offset: A2 } = C, D = w(false, t8.slice(0, A2), /[^\n\r]/gu, " "), F = ai(D + d, e2, r2, false);
    F.sourceSpan = new h(C, K(false, F.children, -1).sourceSpan.end);
    let c2 = F.children[0];
    return c2.length === A2 ? F.children.shift() : (c2.sourceSpan = new h(c2.sourceSpan.start.moveBy(A2), c2.sourceSpan.end), c2.value = c2.value.slice(A2)), F;
  };
  return l2.walk((d) => {
    if (d.type === "comment") {
      let C = ri(d, f);
      C && d.parent.replaceChild(d, C);
    }
    Io(d), Ro(d), $o(d);
  }), l2;
}
function ur(t8) {
  return { parse: (e2, r2) => ai(e2, t8, r2), hasPragma: fs, astFormat: "html", locStart: J, locEnd: Z };
}
var sn, an, li, on, lr, un, R, Et, ln, en, ci, w, ye, Ge, Ye, we, be, je, Te, xe, ce, ke, Ke, Qe, j, Xe, Be, At, pi, K, Le, fi, cr, pr, fr, ne, mr, pn, se, gi, Ci, _, v, S, cn, vt, gn, Cn, V2, gr, Sn, _i, Ei, O, Cr, _n, Fe, Di, vi, An, Dn, vn, bi, Ne, wn, bn, Tn, xn, fe, Bi, Sr, kn, Wi, yr, zi, Gi, Yi, Gn, Yn, Qi, Xi, Ji, Zi, Kn, ea, Qn, Xn, na, Jn, br, Pe, ss, is, as, Tr, Ie, os, Nt, _a2, ls, it, Aa, cs, va, ps, ya, hs, ds, ba, ie, De, h, Ot, Oe, Ta, bs, Ha, Ts, xs, Br, ks, Va, Bs, Zr, xp, Ls, Fs, Ns, Lr, Fr, ee, Ps, P, qt, Ht, Ua, Wa, za, Ga, Ya, Is, ja, Vt, m, Rs, pt, ae, Ut, Wt, zt, Gt, Yt, Y, jt, Kt, te, ht, ft, mt, Ve, Xa, Ja, Rr, $r, gt, Vr, So, tr, Ct, Ur, rr, Wr, St, L, Yr, nr, jr, sr, Kr, bo, Zs, _t, ei, ir, ti, le, Xr, Jr, ze, ar, Lo, or, ni, oi, Mo, qo, Ho, Vo, Uo, Gh;
var init_html = __esm({
  "node_modules/prettier/plugins/html.mjs"() {
    sn = Object.defineProperty;
    an = (t8) => {
      throw TypeError(t8);
    };
    li = (t8, e2, r2) => e2 in t8 ? sn(t8, e2, { enumerable: true, configurable: true, writable: true, value: r2 }) : t8[e2] = r2;
    on = (t8, e2) => {
      for (var r2 in e2) sn(t8, r2, { get: e2[r2], enumerable: true });
    };
    lr = (t8, e2, r2) => li(t8, typeof e2 != "symbol" ? e2 + "" : e2, r2);
    un = (t8, e2, r2) => e2.has(t8) || an("Cannot " + r2);
    R = (t8, e2, r2) => (un(t8, e2, "read from private field"), r2 ? r2.call(t8) : e2.get(t8));
    Et = (t8, e2, r2) => e2.has(t8) ? an("Cannot add the same private member more than once") : e2 instanceof WeakSet ? e2.add(t8) : e2.set(t8, r2);
    ln = (t8, e2, r2, n2) => (un(t8, e2, "write to private field"), n2 ? n2.call(t8, r2) : e2.set(t8, r2), r2);
    en = {};
    on(en, { languages: () => xs, options: () => Bs, parsers: () => Zr, printers: () => Uo });
    ci = (t8, e2, r2, n2) => {
      if (!(t8 && e2 == null)) return e2.replaceAll ? e2.replaceAll(r2, n2) : r2.global ? e2.replace(r2, n2) : e2.split(r2).join(n2);
    };
    w = ci;
    ye = "string";
    Ge = "array";
    Ye = "cursor";
    we = "indent";
    be = "align";
    je = "trim";
    Te = "group";
    xe = "fill";
    ce = "if-break";
    ke = "indent-if-break";
    Ke = "line-suffix";
    Qe = "line-suffix-boundary";
    j = "line";
    Xe = "label";
    Be = "break-parent";
    At = /* @__PURE__ */ new Set([Ye, we, be, je, Te, xe, ce, ke, Ke, Qe, j, Xe, Be]);
    pi = (t8, e2, r2) => {
      if (!(t8 && e2 == null)) return Array.isArray(e2) || typeof e2 == "string" ? e2[r2 < 0 ? e2.length + r2 : r2] : e2.at(r2);
    };
    K = pi;
    Le = hi;
    fi = (t8) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(t8);
    cr = class extends Error {
      name = "InvalidDocError";
      constructor(e2) {
        super(mi(e2)), this.doc = e2;
      }
    };
    pr = cr;
    fr = () => {
    };
    ne = fr;
    mr = fr;
    pn = fr;
    se = { type: Be };
    gi = { type: j, hard: true };
    Ci = { type: j, hard: true, literal: true };
    _ = { type: j };
    v = { type: j, soft: true };
    S = [gi, se];
    cn = [Ci, se];
    vt = "'";
    gn = '"';
    Cn = Si;
    gr = class {
      constructor(e2) {
        Et(this, V2);
        ln(this, V2, new Set(e2));
      }
      getLeadingWhitespaceCount(e2) {
        let r2 = R(this, V2), n2 = 0;
        for (let s2 = 0; s2 < e2.length && r2.has(e2.charAt(s2)); s2++) n2++;
        return n2;
      }
      getTrailingWhitespaceCount(e2) {
        let r2 = R(this, V2), n2 = 0;
        for (let s2 = e2.length - 1; s2 >= 0 && r2.has(e2.charAt(s2)); s2--) n2++;
        return n2;
      }
      getLeadingWhitespace(e2) {
        let r2 = this.getLeadingWhitespaceCount(e2);
        return e2.slice(0, r2);
      }
      getTrailingWhitespace(e2) {
        let r2 = this.getTrailingWhitespaceCount(e2);
        return e2.slice(e2.length - r2);
      }
      hasLeadingWhitespace(e2) {
        return R(this, V2).has(e2.charAt(0));
      }
      hasTrailingWhitespace(e2) {
        return R(this, V2).has(K(false, e2, -1));
      }
      trimStart(e2) {
        let r2 = this.getLeadingWhitespaceCount(e2);
        return e2.slice(r2);
      }
      trimEnd(e2) {
        let r2 = this.getTrailingWhitespaceCount(e2);
        return e2.slice(0, e2.length - r2);
      }
      trim(e2) {
        return this.trimEnd(this.trimStart(e2));
      }
      split(e2, r2 = false) {
        let n2 = `[${dr([...R(this, V2)].join(""))}]+`, s2 = new RegExp(r2 ? `(${n2})` : n2, "u");
        return e2.split(s2);
      }
      hasWhitespaceCharacter(e2) {
        let r2 = R(this, V2);
        return Array.prototype.some.call(e2, (n2) => r2.has(n2));
      }
      hasNonWhitespaceCharacter(e2) {
        let r2 = R(this, V2);
        return Array.prototype.some.call(e2, (n2) => !r2.has(n2));
      }
      isWhitespaceOnly(e2) {
        let r2 = R(this, V2);
        return Array.prototype.every.call(e2, (n2) => r2.has(n2));
      }
    };
    V2 = /* @__PURE__ */ new WeakMap();
    Sn = gr;
    _i = ["	", `
`, "\f", "\r", " "];
    Ei = new Sn(_i);
    O = Ei;
    Cr = class extends Error {
      name = "UnexpectedNodeError";
      constructor(e2, r2, n2 = "type") {
        super(`Unexpected ${r2} node ${n2}: ${JSON.stringify(e2[n2])}.`), this.node = e2;
      }
    };
    _n = Cr;
    Fe = Ai;
    Di = /* @__PURE__ */ new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan", "keySpan", "tagDefinition", "tokens", "valueTokens", "switchValueSourceSpan", "expSourceSpan", "valueSourceSpan"]);
    vi = /* @__PURE__ */ new Set(["if", "else if", "for", "switch", "case"]);
    En.ignoredProperties = Di;
    An = En;
    Dn = yi;
    vn = wi;
    bi = (t8) => String(t8).split(/[/\\]/u).pop();
    Ne = xi;
    wn = "inline";
    bn = { area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", style: "none", template: "inline", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", dialog: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", search: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", menu: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", input: "inline-block", button: "inline-block", fieldset: "block", details: "block", summary: "block", marquee: "inline-block", source: "block", track: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", select: "inline-block", option: "block", optgroup: "block" };
    Tn = "normal";
    xn = { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" };
    fe = ki;
    Bi = (t8) => w(false, t8, /^[\t\f\r ]*\n/gu, "");
    Sr = (t8) => Bi(O.trimEnd(t8));
    kn = (t8) => {
      let e2 = t8, r2 = O.getLeadingWhitespace(e2);
      r2 && (e2 = e2.slice(r2.length));
      let n2 = O.getTrailingWhitespace(e2);
      return n2 && (e2 = e2.slice(0, -n2.length)), { leadingWhitespace: r2, trailingWhitespace: n2, text: e2 };
    };
    Wi = /* @__PURE__ */ new Set(["template", "style", "script"]);
    yr = /\{\{(.+?)\}\}/su;
    zi = wr({ parser: "__ng_action" });
    Gi = wr({ parser: "__ng_binding" });
    Yi = wr({ parser: "__ng_directive" });
    Gn = ji;
    Yn = Ki;
    Qi = /^[ \t\n\r\u000c]+/;
    Xi = /^[, \t\n\r\u000c]+/;
    Ji = /^[^ \t\n\r\u000c]+/;
    Zi = /[,]+$/;
    Kn = /^\d+$/;
    ea = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;
    Qn = ta;
    Xn = { width: "w", height: "h", density: "x" };
    na = Object.keys(Xn);
    Jn = ra;
    br = /* @__PURE__ */ new WeakMap();
    Pe = ia;
    ss = oa;
    is = ca;
    as = new Proxy(() => {
    }, { get: () => as });
    Tr = as;
    Ie = ha;
    os = "<!doctype";
    Nt = Sa;
    _a2 = /* @__PURE__ */ new Set(["if", "else if", "for", "switch", "case"]);
    ls = Ea;
    it = null;
    Aa = 10;
    for (let t8 = 0; t8 <= Aa; t8++) at();
    cs = Da;
    va = { "front-matter": [], root: ["children"], element: ["attrs", "children"], ieConditionalComment: ["children"], ieConditionalStartComment: [], ieConditionalEndComment: [], interpolation: ["children"], text: ["children"], docType: [], comment: [], attribute: [], cdata: [], angularControlFlowBlock: ["children", "parameters"], angularControlFlowBlockParameters: ["children"], angularControlFlowBlockParameter: [], angularLetDeclaration: ["init"], angularLetDeclarationInitializer: [], angularIcuExpression: ["cases"], angularIcuCase: ["expression"] };
    ps = va;
    ya = cs(ps);
    hs = ya;
    ds = /* @__PURE__ */ new Map([["if", /* @__PURE__ */ new Set(["else if", "else"])], ["else if", /* @__PURE__ */ new Set(["else if", "else"])], ["for", /* @__PURE__ */ new Set(["empty"])], ["defer", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["placeholder", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["error", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])], ["loading", /* @__PURE__ */ new Set(["placeholder", "error", "loading"])]]);
    ba = /-+([a-z0-9])/g;
    ie = class t2 {
      constructor(e2, r2, n2, s2) {
        this.file = e2, this.offset = r2, this.line = n2, this.col = s2;
      }
      toString() {
        return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
      }
      moveBy(e2) {
        let r2 = this.file.content, n2 = r2.length, s2 = this.offset, i = this.line, a = this.col;
        for (; s2 > 0 && e2 < 0; ) if (s2--, e2++, r2.charCodeAt(s2) == 10) {
          i--;
          let u = r2.substring(0, s2 - 1).lastIndexOf(String.fromCharCode(10));
          a = u > 0 ? s2 - u : s2;
        } else a--;
        for (; s2 < n2 && e2 > 0; ) {
          let o2 = r2.charCodeAt(s2);
          s2++, e2--, o2 == 10 ? (i++, a = 0) : a++;
        }
        return new t2(this.file, s2, i, a);
      }
      getContext(e2, r2) {
        let n2 = this.file.content, s2 = this.offset;
        if (s2 != null) {
          s2 > n2.length - 1 && (s2 = n2.length - 1);
          let i = s2, a = 0, o2 = 0;
          for (; a < e2 && s2 > 0 && (s2--, a++, !(n2[s2] == `
` && ++o2 == r2)); ) ;
          for (a = 0, o2 = 0; a < e2 && i < n2.length - 1 && (i++, a++, !(n2[i] == `
` && ++o2 == r2)); ) ;
          return { before: n2.substring(s2, this.offset), after: n2.substring(this.offset, i + 1) };
        }
        return null;
      }
    };
    De = class {
      constructor(e2, r2) {
        this.content = e2, this.url = r2;
      }
    };
    h = class {
      constructor(e2, r2, n2 = e2, s2 = null) {
        this.start = e2, this.end = r2, this.fullStart = n2, this.details = s2;
      }
      toString() {
        return this.start.file.content.substring(this.start.offset, this.end.offset);
      }
    };
    (function(t8) {
      t8[t8.WARNING = 0] = "WARNING", t8[t8.ERROR = 1] = "ERROR";
    })(Ot || (Ot = {}));
    Oe = class {
      constructor(e2, r2, n2 = Ot.ERROR) {
        this.span = e2, this.msg = r2, this.level = n2;
      }
      contextualMessage() {
        let e2 = this.span.start.getContext(100, 3);
        return e2 ? `${this.msg} ("${e2.before}[${Ot[this.level]} ->]${e2.after}")` : this.msg;
      }
      toString() {
        let e2 = this.span.details ? `, ${this.span.details}` : "";
        return `${this.contextualMessage()}: ${this.span.start}${e2}`;
      }
    };
    Ta = [ka, Ba, Fa, Pa, Ia, Oa, Ra, $a, Ma, Na];
    bs = xa;
    Ha = { preprocess: bs, print: qa, insertPragma: ms, massageAstNode: An, embed: ls, getVisitorKeys: hs };
    Ts = Ha;
    xs = [{ linguistLanguageId: 146, name: "Angular", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".component.html"], parsers: ["angular"], vscodeLanguageIds: ["html"], filenames: [] }, { linguistLanguageId: 146, name: "HTML", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".html", ".hta", ".htm", ".html.hl", ".inc", ".xht", ".xhtml", ".mjml"], parsers: ["html"], vscodeLanguageIds: ["html"] }, { linguistLanguageId: 146, name: "Lightning Web Components", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [], parsers: ["lwc"], vscodeLanguageIds: ["html"], filenames: [] }, { linguistLanguageId: 391, name: "Vue", type: "markup", color: "#41b883", extensions: [".vue"], tmScope: "text.html.vue", aceMode: "html", parsers: ["vue"], vscodeLanguageIds: ["vue"] }];
    Br = { bracketSpacing: { category: "Common", type: "boolean", default: true, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, objectWrap: { category: "Common", type: "choice", default: "preserve", description: "How to wrap object literals.", choices: [{ value: "preserve", description: "Keep as multi-line, if there is a newline between the opening brace and first property." }, { value: "collapse", description: "Fit to a single line when possible." }] }, singleQuote: { category: "Common", type: "boolean", default: false, description: "Use single quotes instead of double quotes." }, proseWrap: { category: "Common", type: "choice", default: "preserve", description: "How to wrap prose.", choices: [{ value: "always", description: "Wrap prose if it exceeds the print width." }, { value: "never", description: "Do not wrap prose." }, { value: "preserve", description: "Wrap prose as-is." }] }, bracketSameLine: { category: "Common", type: "boolean", default: false, description: "Put > of opening tags on the last line instead of on a new line." }, singleAttributePerLine: { category: "Common", type: "boolean", default: false, description: "Enforce single attribute per line in HTML, Vue and JSX." } };
    ks = "HTML";
    Va = { bracketSameLine: Br.bracketSameLine, htmlWhitespaceSensitivity: { category: ks, type: "choice", default: "css", description: "How to handle whitespaces in HTML.", choices: [{ value: "css", description: "Respect the default value of CSS display property." }, { value: "strict", description: "Whitespaces are considered sensitive." }, { value: "ignore", description: "Whitespaces are considered insensitive." }] }, singleAttributePerLine: Br.singleAttributePerLine, vueIndentScriptAndStyle: { category: ks, type: "boolean", default: false, description: "Indent script and style tags in Vue files." } };
    Bs = Va;
    Zr = {};
    on(Zr, { angular: () => qo, html: () => Mo, lwc: () => Vo, vue: () => Ho });
    xp = new RegExp(`(\\:not\\()|(([\\.\\#]?)[-\\w]+)|(?:\\[([-.\\w*\\\\$]+)(?:=(["']?)([^\\]"']*)\\5)?\\])|(\\))|(\\s*,\\s*)`, "g");
    (function(t8) {
      t8[t8.Emulated = 0] = "Emulated", t8[t8.None = 2] = "None", t8[t8.ShadowDom = 3] = "ShadowDom";
    })(Ls || (Ls = {}));
    (function(t8) {
      t8[t8.OnPush = 0] = "OnPush", t8[t8.Default = 1] = "Default";
    })(Fs || (Fs = {}));
    (function(t8) {
      t8[t8.None = 0] = "None", t8[t8.SignalBased = 1] = "SignalBased", t8[t8.HasDecoratorInputTransform = 2] = "HasDecoratorInputTransform";
    })(Ns || (Ns = {}));
    Lr = { name: "custom-elements" };
    Fr = { name: "no-errors-schema" };
    (function(t8) {
      t8[t8.NONE = 0] = "NONE", t8[t8.HTML = 1] = "HTML", t8[t8.STYLE = 2] = "STYLE", t8[t8.SCRIPT = 3] = "SCRIPT", t8[t8.URL = 4] = "URL", t8[t8.RESOURCE_URL = 5] = "RESOURCE_URL";
    })(ee || (ee = {}));
    (function(t8) {
      t8[t8.Error = 0] = "Error", t8[t8.Warning = 1] = "Warning", t8[t8.Ignore = 2] = "Ignore";
    })(Ps || (Ps = {}));
    (function(t8) {
      t8[t8.RAW_TEXT = 0] = "RAW_TEXT", t8[t8.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", t8[t8.PARSABLE_DATA = 2] = "PARSABLE_DATA";
    })(P || (P = {}));
    Ht = class {
    };
    Ua = "boolean";
    Wa = "number";
    za = "string";
    Ga = "object";
    Ya = ["[Element]|textContent,%ariaAtomic,%ariaAutoComplete,%ariaBusy,%ariaChecked,%ariaColCount,%ariaColIndex,%ariaColSpan,%ariaCurrent,%ariaDescription,%ariaDisabled,%ariaExpanded,%ariaHasPopup,%ariaHidden,%ariaKeyShortcuts,%ariaLabel,%ariaLevel,%ariaLive,%ariaModal,%ariaMultiLine,%ariaMultiSelectable,%ariaOrientation,%ariaPlaceholder,%ariaPosInSet,%ariaPressed,%ariaReadOnly,%ariaRelevant,%ariaRequired,%ariaRoleDescription,%ariaRowCount,%ariaRowIndex,%ariaRowSpan,%ariaSelected,%ariaSetSize,%ariaSort,%ariaValueMax,%ariaValueMin,%ariaValueNow,%ariaValueText,%classList,className,elementTiming,id,innerHTML,*beforecopy,*beforecut,*beforepaste,*fullscreenchange,*fullscreenerror,*search,*webkitfullscreenchange,*webkitfullscreenerror,outerHTML,%part,#scrollLeft,#scrollTop,slot,*message,*mozfullscreenchange,*mozfullscreenerror,*mozpointerlockchange,*mozpointerlockerror,*webglcontextcreationerror,*webglcontextlost,*webglcontextrestored", "[HTMLElement]^[Element]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,!inert,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "abbr,address,article,aside,b,bdi,bdo,cite,content,code,dd,dfn,dt,em,figcaption,figure,footer,header,hgroup,i,kbd,main,mark,nav,noscript,rb,rp,rt,rtc,ruby,s,samp,section,small,strong,sub,sup,u,var,wbr^[HTMLElement]|accessKey,autocapitalize,!autofocus,contentEditable,dir,!draggable,enterKeyHint,!hidden,innerText,inputMode,lang,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,outerText,!spellcheck,%style,#tabIndex,title,!translate,virtualKeyboardPolicy", "media^[HTMLElement]|!autoplay,!controls,%controlsList,%crossOrigin,#currentTime,!defaultMuted,#defaultPlaybackRate,!disableRemotePlayback,!loop,!muted,*encrypted,*waitingforkey,#playbackRate,preload,!preservesPitch,src,%srcObject,#volume", ":svg:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contextmenu,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex", ":svg:graphics^:svg:|", ":svg:animation^:svg:|*begin,*end,*repeat", ":svg:geometry^:svg:|", ":svg:componentTransferFunction^:svg:|", ":svg:gradient^:svg:|", ":svg:textContent^:svg:graphics|", ":svg:textPositioning^:svg:textContent|", "a^[HTMLElement]|charset,coords,download,hash,host,hostname,href,hreflang,name,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,rev,search,shape,target,text,type,username", "area^[HTMLElement]|alt,coords,download,hash,host,hostname,href,!noHref,password,pathname,ping,port,protocol,referrerPolicy,rel,%relList,search,shape,target,username", "audio^media|", "br^[HTMLElement]|clear", "base^[HTMLElement]|href,target", "body^[HTMLElement]|aLink,background,bgColor,link,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,text,vLink", "button^[HTMLElement]|!disabled,formAction,formEnctype,formMethod,!formNoValidate,formTarget,name,type,value", "canvas^[HTMLElement]|#height,#width", "content^[HTMLElement]|select", "dl^[HTMLElement]|!compact", "data^[HTMLElement]|value", "datalist^[HTMLElement]|", "details^[HTMLElement]|!open", "dialog^[HTMLElement]|!open,returnValue", "dir^[HTMLElement]|!compact", "div^[HTMLElement]|align", "embed^[HTMLElement]|align,height,name,src,type,width", "fieldset^[HTMLElement]|!disabled,name", "font^[HTMLElement]|color,face,size", "form^[HTMLElement]|acceptCharset,action,autocomplete,encoding,enctype,method,name,!noValidate,target", "frame^[HTMLElement]|frameBorder,longDesc,marginHeight,marginWidth,name,!noResize,scrolling,src", "frameset^[HTMLElement]|cols,*afterprint,*beforeprint,*beforeunload,*blur,*error,*focus,*hashchange,*languagechange,*load,*message,*messageerror,*offline,*online,*pagehide,*pageshow,*popstate,*rejectionhandled,*resize,*scroll,*storage,*unhandledrejection,*unload,rows", "hr^[HTMLElement]|align,color,!noShade,size,width", "head^[HTMLElement]|", "h1,h2,h3,h4,h5,h6^[HTMLElement]|align", "html^[HTMLElement]|version", "iframe^[HTMLElement]|align,allow,!allowFullscreen,!allowPaymentRequest,csp,frameBorder,height,loading,longDesc,marginHeight,marginWidth,name,referrerPolicy,%sandbox,scrolling,src,srcdoc,width", "img^[HTMLElement]|align,alt,border,%crossOrigin,decoding,#height,#hspace,!isMap,loading,longDesc,lowsrc,name,referrerPolicy,sizes,src,srcset,useMap,#vspace,#width", "input^[HTMLElement]|accept,align,alt,autocomplete,!checked,!defaultChecked,defaultValue,dirName,!disabled,%files,formAction,formEnctype,formMethod,!formNoValidate,formTarget,#height,!incremental,!indeterminate,max,#maxLength,min,#minLength,!multiple,name,pattern,placeholder,!readOnly,!required,selectionDirection,#selectionEnd,#selectionStart,#size,src,step,type,useMap,value,%valueAsDate,#valueAsNumber,#width", "li^[HTMLElement]|type,#value", "label^[HTMLElement]|htmlFor", "legend^[HTMLElement]|align", "link^[HTMLElement]|as,charset,%crossOrigin,!disabled,href,hreflang,imageSizes,imageSrcset,integrity,media,referrerPolicy,rel,%relList,rev,%sizes,target,type", "map^[HTMLElement]|name", "marquee^[HTMLElement]|behavior,bgColor,direction,height,#hspace,#loop,#scrollAmount,#scrollDelay,!trueSpeed,#vspace,width", "menu^[HTMLElement]|!compact", "meta^[HTMLElement]|content,httpEquiv,media,name,scheme", "meter^[HTMLElement]|#high,#low,#max,#min,#optimum,#value", "ins,del^[HTMLElement]|cite,dateTime", "ol^[HTMLElement]|!compact,!reversed,#start,type", "object^[HTMLElement]|align,archive,border,code,codeBase,codeType,data,!declare,height,#hspace,name,standby,type,useMap,#vspace,width", "optgroup^[HTMLElement]|!disabled,label", "option^[HTMLElement]|!defaultSelected,!disabled,label,!selected,text,value", "output^[HTMLElement]|defaultValue,%htmlFor,name,value", "p^[HTMLElement]|align", "param^[HTMLElement]|name,type,value,valueType", "picture^[HTMLElement]|", "pre^[HTMLElement]|#width", "progress^[HTMLElement]|#max,#value", "q,blockquote,cite^[HTMLElement]|", "script^[HTMLElement]|!async,charset,%crossOrigin,!defer,event,htmlFor,integrity,!noModule,%referrerPolicy,src,text,type", "select^[HTMLElement]|autocomplete,!disabled,#length,!multiple,name,!required,#selectedIndex,#size,value", "slot^[HTMLElement]|name", "source^[HTMLElement]|#height,media,sizes,src,srcset,type,#width", "span^[HTMLElement]|", "style^[HTMLElement]|!disabled,media,type", "caption^[HTMLElement]|align", "th,td^[HTMLElement]|abbr,align,axis,bgColor,ch,chOff,#colSpan,headers,height,!noWrap,#rowSpan,scope,vAlign,width", "col,colgroup^[HTMLElement]|align,ch,chOff,#span,vAlign,width", "table^[HTMLElement]|align,bgColor,border,%caption,cellPadding,cellSpacing,frame,rules,summary,%tFoot,%tHead,width", "tr^[HTMLElement]|align,bgColor,ch,chOff,vAlign", "tfoot,thead,tbody^[HTMLElement]|align,ch,chOff,vAlign", "template^[HTMLElement]|", "textarea^[HTMLElement]|autocomplete,#cols,defaultValue,dirName,!disabled,#maxLength,#minLength,name,placeholder,!readOnly,!required,#rows,selectionDirection,#selectionEnd,#selectionStart,value,wrap", "time^[HTMLElement]|dateTime", "title^[HTMLElement]|text", "track^[HTMLElement]|!default,kind,label,src,srclang", "ul^[HTMLElement]|!compact,type", "unknown^[HTMLElement]|", "video^media|!disablePictureInPicture,#height,*enterpictureinpicture,*leavepictureinpicture,!playsInline,poster,#width", ":svg:a^:svg:graphics|", ":svg:animate^:svg:animation|", ":svg:animateMotion^:svg:animation|", ":svg:animateTransform^:svg:animation|", ":svg:circle^:svg:geometry|", ":svg:clipPath^:svg:graphics|", ":svg:defs^:svg:graphics|", ":svg:desc^:svg:|", ":svg:discard^:svg:|", ":svg:ellipse^:svg:geometry|", ":svg:feBlend^:svg:|", ":svg:feColorMatrix^:svg:|", ":svg:feComponentTransfer^:svg:|", ":svg:feComposite^:svg:|", ":svg:feConvolveMatrix^:svg:|", ":svg:feDiffuseLighting^:svg:|", ":svg:feDisplacementMap^:svg:|", ":svg:feDistantLight^:svg:|", ":svg:feDropShadow^:svg:|", ":svg:feFlood^:svg:|", ":svg:feFuncA^:svg:componentTransferFunction|", ":svg:feFuncB^:svg:componentTransferFunction|", ":svg:feFuncG^:svg:componentTransferFunction|", ":svg:feFuncR^:svg:componentTransferFunction|", ":svg:feGaussianBlur^:svg:|", ":svg:feImage^:svg:|", ":svg:feMerge^:svg:|", ":svg:feMergeNode^:svg:|", ":svg:feMorphology^:svg:|", ":svg:feOffset^:svg:|", ":svg:fePointLight^:svg:|", ":svg:feSpecularLighting^:svg:|", ":svg:feSpotLight^:svg:|", ":svg:feTile^:svg:|", ":svg:feTurbulence^:svg:|", ":svg:filter^:svg:|", ":svg:foreignObject^:svg:graphics|", ":svg:g^:svg:graphics|", ":svg:image^:svg:graphics|decoding", ":svg:line^:svg:geometry|", ":svg:linearGradient^:svg:gradient|", ":svg:mpath^:svg:|", ":svg:marker^:svg:|", ":svg:mask^:svg:|", ":svg:metadata^:svg:|", ":svg:path^:svg:geometry|", ":svg:pattern^:svg:|", ":svg:polygon^:svg:geometry|", ":svg:polyline^:svg:geometry|", ":svg:radialGradient^:svg:gradient|", ":svg:rect^:svg:geometry|", ":svg:svg^:svg:graphics|#currentScale,#zoomAndPan", ":svg:script^:svg:|type", ":svg:set^:svg:animation|", ":svg:stop^:svg:|", ":svg:style^:svg:|!disabled,media,title,type", ":svg:switch^:svg:graphics|", ":svg:symbol^:svg:|", ":svg:tspan^:svg:textPositioning|", ":svg:text^:svg:textPositioning|", ":svg:textPath^:svg:textContent|", ":svg:title^:svg:|", ":svg:use^:svg:graphics|", ":svg:view^:svg:|#zoomAndPan", "data^[HTMLElement]|value", "keygen^[HTMLElement]|!autofocus,challenge,!disabled,form,keytype,name", "menuitem^[HTMLElement]|type,label,icon,!disabled,!checked,radiogroup,!default", "summary^[HTMLElement]|", "time^[HTMLElement]|dateTime", ":svg:cursor^:svg:|", ":math:^[HTMLElement]|!autofocus,nonce,*abort,*animationend,*animationiteration,*animationstart,*auxclick,*beforeinput,*beforematch,*beforetoggle,*beforexrselect,*blur,*cancel,*canplay,*canplaythrough,*change,*click,*close,*contentvisibilityautostatechange,*contextlost,*contextmenu,*contextrestored,*copy,*cuechange,*cut,*dblclick,*drag,*dragend,*dragenter,*dragleave,*dragover,*dragstart,*drop,*durationchange,*emptied,*ended,*error,*focus,*formdata,*gotpointercapture,*input,*invalid,*keydown,*keypress,*keyup,*load,*loadeddata,*loadedmetadata,*loadstart,*lostpointercapture,*mousedown,*mouseenter,*mouseleave,*mousemove,*mouseout,*mouseover,*mouseup,*mousewheel,*paste,*pause,*play,*playing,*pointercancel,*pointerdown,*pointerenter,*pointerleave,*pointermove,*pointerout,*pointerover,*pointerrawupdate,*pointerup,*progress,*ratechange,*reset,*resize,*scroll,*scrollend,*securitypolicyviolation,*seeked,*seeking,*select,*selectionchange,*selectstart,*slotchange,*stalled,*submit,*suspend,*timeupdate,*toggle,*transitioncancel,*transitionend,*transitionrun,*transitionstart,*volumechange,*waiting,*webkitanimationend,*webkitanimationiteration,*webkitanimationstart,*webkittransitionend,*wheel,%style,#tabIndex", ":math:math^:math:|", ":math:maction^:math:|", ":math:menclose^:math:|", ":math:merror^:math:|", ":math:mfenced^:math:|", ":math:mfrac^:math:|", ":math:mi^:math:|", ":math:mmultiscripts^:math:|", ":math:mn^:math:|", ":math:mo^:math:|", ":math:mover^:math:|", ":math:mpadded^:math:|", ":math:mphantom^:math:|", ":math:mroot^:math:|", ":math:mrow^:math:|", ":math:ms^:math:|", ":math:mspace^:math:|", ":math:msqrt^:math:|", ":math:mstyle^:math:|", ":math:msub^:math:|", ":math:msubsup^:math:|", ":math:msup^:math:|", ":math:mtable^:math:|", ":math:mtd^:math:|", ":math:mtext^:math:|", ":math:mtr^:math:|", ":math:munder^:math:|", ":math:munderover^:math:|", ":math:semantics^:math:|"];
    Is = new Map(Object.entries({ class: "className", for: "htmlFor", formaction: "formAction", innerHtml: "innerHTML", readonly: "readOnly", tabindex: "tabIndex" }));
    ja = Array.from(Is).reduce((t8, [e2, r2]) => (t8.set(e2, r2), t8), /* @__PURE__ */ new Map());
    Vt = class extends Ht {
      constructor() {
        super(), this._schema = /* @__PURE__ */ new Map(), this._eventSchema = /* @__PURE__ */ new Map(), Ya.forEach((e2) => {
          let r2 = /* @__PURE__ */ new Map(), n2 = /* @__PURE__ */ new Set(), [s2, i] = e2.split("|"), a = i.split(","), [o2, u] = s2.split("^");
          o2.split(",").forEach((l2) => {
            this._schema.set(l2.toLowerCase(), r2), this._eventSchema.set(l2.toLowerCase(), n2);
          });
          let p = u && this._schema.get(u.toLowerCase());
          if (p) {
            for (let [l2, f] of p) r2.set(l2, f);
            for (let l2 of this._eventSchema.get(u.toLowerCase())) n2.add(l2);
          }
          a.forEach((l2) => {
            if (l2.length > 0) switch (l2[0]) {
              case "*":
                n2.add(l2.substring(1));
                break;
              case "!":
                r2.set(l2.substring(1), Ua);
                break;
              case "#":
                r2.set(l2.substring(1), Wa);
                break;
              case "%":
                r2.set(l2.substring(1), Ga);
                break;
              default:
                r2.set(l2, za);
            }
          });
        });
      }
      hasProperty(e2, r2, n2) {
        if (n2.some((i) => i.name === Fr.name)) return true;
        if (e2.indexOf("-") > -1) {
          if (Nr(e2) || Pr(e2)) return false;
          if (n2.some((i) => i.name === Lr.name)) return true;
        }
        return (this._schema.get(e2.toLowerCase()) || this._schema.get("unknown")).has(r2);
      }
      hasElement(e2, r2) {
        return r2.some((n2) => n2.name === Fr.name) || e2.indexOf("-") > -1 && (Nr(e2) || Pr(e2) || r2.some((n2) => n2.name === Lr.name)) ? true : this._schema.has(e2.toLowerCase());
      }
      securityContext(e2, r2, n2) {
        n2 && (r2 = this.getMappedPropName(r2)), e2 = e2.toLowerCase(), r2 = r2.toLowerCase();
        let s2 = Ir()[e2 + "|" + r2];
        return s2 || (s2 = Ir()["*|" + r2], s2 || ee.NONE);
      }
      getMappedPropName(e2) {
        return Is.get(e2) ?? e2;
      }
      getDefaultComponentElementName() {
        return "ng-component";
      }
      validateProperty(e2) {
        return e2.toLowerCase().startsWith("on") ? { error: true, msg: `Binding to event property '${e2}' is disallowed for security reasons, please use (${e2.slice(2)})=...
If '${e2}' is a directive input, make sure the directive is imported by the current module.` } : { error: false };
      }
      validateAttribute(e2) {
        return e2.toLowerCase().startsWith("on") ? { error: true, msg: `Binding to event attribute '${e2}' is disallowed for security reasons, please use (${e2.slice(2)})=...` } : { error: false };
      }
      allKnownElementNames() {
        return Array.from(this._schema.keys());
      }
      allKnownAttributesOfElement(e2) {
        let r2 = this._schema.get(e2.toLowerCase()) || this._schema.get("unknown");
        return Array.from(r2.keys()).map((n2) => ja.get(n2) ?? n2);
      }
      allKnownEventsOfElement(e2) {
        return Array.from(this._eventSchema.get(e2.toLowerCase()) ?? []);
      }
      normalizeAnimationStyleProperty(e2) {
        return ws2(e2);
      }
      normalizeAnimationStyleValue(e2, r2, n2) {
        let s2 = "", i = n2.toString().trim(), a = null;
        if (Ka(e2) && n2 !== 0 && n2 !== "0") if (typeof n2 == "number") s2 = "px";
        else {
          let o2 = n2.match(/^[+-]?[\d\.]+([a-z]*)$/);
          o2 && o2[1].length == 0 && (a = `Please provide a CSS unit value for ${r2}:${n2}`);
        }
        return { error: a, value: i + s2 };
      }
    };
    m = class {
      constructor({ closedByChildren: e2, implicitNamespacePrefix: r2, contentType: n2 = P.PARSABLE_DATA, closedByParent: s2 = false, isVoid: i = false, ignoreFirstLf: a = false, preventNamespaceInheritance: o2 = false, canSelfClose: u = false } = {}) {
        this.closedByChildren = {}, this.closedByParent = false, e2 && e2.length > 0 && e2.forEach((p) => this.closedByChildren[p] = true), this.isVoid = i, this.closedByParent = s2 || i, this.implicitNamespacePrefix = r2 || null, this.contentType = n2, this.ignoreFirstLf = a, this.preventNamespaceInheritance = o2, this.canSelfClose = u ?? i;
      }
      isClosedByChild(e2) {
        return this.isVoid || e2.toLowerCase() in this.closedByChildren;
      }
      getContentType(e2) {
        return typeof this.contentType == "object" ? (e2 === void 0 ? void 0 : this.contentType[e2]) ?? this.contentType.default : this.contentType;
      }
    };
    ae = class {
      constructor(e2, r2) {
        this.sourceSpan = e2, this.i18n = r2;
      }
    };
    Ut = class extends ae {
      constructor(e2, r2, n2, s2) {
        super(r2, s2), this.value = e2, this.tokens = n2, this.type = "text";
      }
      visit(e2, r2) {
        return e2.visitText(this, r2);
      }
    };
    Wt = class extends ae {
      constructor(e2, r2, n2, s2) {
        super(r2, s2), this.value = e2, this.tokens = n2, this.type = "cdata";
      }
      visit(e2, r2) {
        return e2.visitCdata(this, r2);
      }
    };
    zt = class extends ae {
      constructor(e2, r2, n2, s2, i, a) {
        super(s2, a), this.switchValue = e2, this.type = r2, this.cases = n2, this.switchValueSourceSpan = i;
      }
      visit(e2, r2) {
        return e2.visitExpansion(this, r2);
      }
    };
    Gt = class {
      constructor(e2, r2, n2, s2, i) {
        this.value = e2, this.expression = r2, this.sourceSpan = n2, this.valueSourceSpan = s2, this.expSourceSpan = i, this.type = "expansionCase";
      }
      visit(e2, r2) {
        return e2.visitExpansionCase(this, r2);
      }
    };
    Yt = class extends ae {
      constructor(e2, r2, n2, s2, i, a, o2) {
        super(n2, o2), this.name = e2, this.value = r2, this.keySpan = s2, this.valueSpan = i, this.valueTokens = a, this.type = "attribute";
      }
      visit(e2, r2) {
        return e2.visitAttribute(this, r2);
      }
      get nameSpan() {
        return this.keySpan;
      }
    };
    Y = class extends ae {
      constructor(e2, r2, n2, s2, i, a = null, o2 = null, u) {
        super(s2, u), this.name = e2, this.attrs = r2, this.children = n2, this.startSourceSpan = i, this.endSourceSpan = a, this.nameSpan = o2, this.type = "element";
      }
      visit(e2, r2) {
        return e2.visitElement(this, r2);
      }
    };
    jt = class {
      constructor(e2, r2) {
        this.value = e2, this.sourceSpan = r2, this.type = "comment";
      }
      visit(e2, r2) {
        return e2.visitComment(this, r2);
      }
    };
    Kt = class {
      constructor(e2, r2) {
        this.value = e2, this.sourceSpan = r2, this.type = "docType";
      }
      visit(e2, r2) {
        return e2.visitDocType(this, r2);
      }
    };
    te = class extends ae {
      constructor(e2, r2, n2, s2, i, a, o2 = null, u) {
        super(s2, u), this.name = e2, this.parameters = r2, this.children = n2, this.nameSpan = i, this.startSourceSpan = a, this.endSourceSpan = o2, this.type = "block";
      }
      visit(e2, r2) {
        return e2.visitBlock(this, r2);
      }
    };
    ht = class {
      constructor(e2, r2) {
        this.expression = e2, this.sourceSpan = r2, this.type = "blockParameter", this.startSourceSpan = null, this.endSourceSpan = null;
      }
      visit(e2, r2) {
        return e2.visitBlockParameter(this, r2);
      }
    };
    ft = class {
      constructor(e2, r2, n2, s2, i) {
        this.name = e2, this.value = r2, this.sourceSpan = n2, this.nameSpan = s2, this.valueSpan = i, this.type = "letDeclaration", this.startSourceSpan = null, this.endSourceSpan = null;
      }
      visit(e2, r2) {
        return e2.visitLetDeclaration(this, r2);
      }
    };
    mt = class {
      constructor() {
      }
      visitElement(e2, r2) {
        this.visitChildren(r2, (n2) => {
          n2(e2.attrs), n2(e2.children);
        });
      }
      visitAttribute(e2, r2) {
      }
      visitText(e2, r2) {
      }
      visitCdata(e2, r2) {
      }
      visitComment(e2, r2) {
      }
      visitDocType(e2, r2) {
      }
      visitExpansion(e2, r2) {
        return this.visitChildren(r2, (n2) => {
          n2(e2.cases);
        });
      }
      visitExpansionCase(e2, r2) {
      }
      visitBlock(e2, r2) {
        this.visitChildren(r2, (n2) => {
          n2(e2.parameters), n2(e2.children);
        });
      }
      visitBlockParameter(e2, r2) {
      }
      visitLetDeclaration(e2, r2) {
      }
      visitChildren(e2, r2) {
        let n2 = [], s2 = this;
        function i(a) {
          a && n2.push(Qt(s2, a, e2));
        }
        return r2(i), Array.prototype.concat.apply([], n2);
      }
    };
    Ve = { AElig: "\xC6", AMP: "&", amp: "&", Aacute: "\xC1", Abreve: "\u0102", Acirc: "\xC2", Acy: "\u0410", Afr: "\u{1D504}", Agrave: "\xC0", Alpha: "\u0391", Amacr: "\u0100", And: "\u2A53", Aogon: "\u0104", Aopf: "\u{1D538}", ApplyFunction: "\u2061", af: "\u2061", Aring: "\xC5", angst: "\xC5", Ascr: "\u{1D49C}", Assign: "\u2254", colone: "\u2254", coloneq: "\u2254", Atilde: "\xC3", Auml: "\xC4", Backslash: "\u2216", setminus: "\u2216", setmn: "\u2216", smallsetminus: "\u2216", ssetmn: "\u2216", Barv: "\u2AE7", Barwed: "\u2306", doublebarwedge: "\u2306", Bcy: "\u0411", Because: "\u2235", becaus: "\u2235", because: "\u2235", Bernoullis: "\u212C", Bscr: "\u212C", bernou: "\u212C", Beta: "\u0392", Bfr: "\u{1D505}", Bopf: "\u{1D539}", Breve: "\u02D8", breve: "\u02D8", Bumpeq: "\u224E", HumpDownHump: "\u224E", bump: "\u224E", CHcy: "\u0427", COPY: "\xA9", copy: "\xA9", Cacute: "\u0106", Cap: "\u22D2", CapitalDifferentialD: "\u2145", DD: "\u2145", Cayleys: "\u212D", Cfr: "\u212D", Ccaron: "\u010C", Ccedil: "\xC7", Ccirc: "\u0108", Cconint: "\u2230", Cdot: "\u010A", Cedilla: "\xB8", cedil: "\xB8", CenterDot: "\xB7", centerdot: "\xB7", middot: "\xB7", Chi: "\u03A7", CircleDot: "\u2299", odot: "\u2299", CircleMinus: "\u2296", ominus: "\u2296", CirclePlus: "\u2295", oplus: "\u2295", CircleTimes: "\u2297", otimes: "\u2297", ClockwiseContourIntegral: "\u2232", cwconint: "\u2232", CloseCurlyDoubleQuote: "\u201D", rdquo: "\u201D", rdquor: "\u201D", CloseCurlyQuote: "\u2019", rsquo: "\u2019", rsquor: "\u2019", Colon: "\u2237", Proportion: "\u2237", Colone: "\u2A74", Congruent: "\u2261", equiv: "\u2261", Conint: "\u222F", DoubleContourIntegral: "\u222F", ContourIntegral: "\u222E", conint: "\u222E", oint: "\u222E", Copf: "\u2102", complexes: "\u2102", Coproduct: "\u2210", coprod: "\u2210", CounterClockwiseContourIntegral: "\u2233", awconint: "\u2233", Cross: "\u2A2F", Cscr: "\u{1D49E}", Cup: "\u22D3", CupCap: "\u224D", asympeq: "\u224D", DDotrahd: "\u2911", DJcy: "\u0402", DScy: "\u0405", DZcy: "\u040F", Dagger: "\u2021", ddagger: "\u2021", Darr: "\u21A1", Dashv: "\u2AE4", DoubleLeftTee: "\u2AE4", Dcaron: "\u010E", Dcy: "\u0414", Del: "\u2207", nabla: "\u2207", Delta: "\u0394", Dfr: "\u{1D507}", DiacriticalAcute: "\xB4", acute: "\xB4", DiacriticalDot: "\u02D9", dot: "\u02D9", DiacriticalDoubleAcute: "\u02DD", dblac: "\u02DD", DiacriticalGrave: "`", grave: "`", DiacriticalTilde: "\u02DC", tilde: "\u02DC", Diamond: "\u22C4", diam: "\u22C4", diamond: "\u22C4", DifferentialD: "\u2146", dd: "\u2146", Dopf: "\u{1D53B}", Dot: "\xA8", DoubleDot: "\xA8", die: "\xA8", uml: "\xA8", DotDot: "\u20DC", DotEqual: "\u2250", doteq: "\u2250", esdot: "\u2250", DoubleDownArrow: "\u21D3", Downarrow: "\u21D3", dArr: "\u21D3", DoubleLeftArrow: "\u21D0", Leftarrow: "\u21D0", lArr: "\u21D0", DoubleLeftRightArrow: "\u21D4", Leftrightarrow: "\u21D4", hArr: "\u21D4", iff: "\u21D4", DoubleLongLeftArrow: "\u27F8", Longleftarrow: "\u27F8", xlArr: "\u27F8", DoubleLongLeftRightArrow: "\u27FA", Longleftrightarrow: "\u27FA", xhArr: "\u27FA", DoubleLongRightArrow: "\u27F9", Longrightarrow: "\u27F9", xrArr: "\u27F9", DoubleRightArrow: "\u21D2", Implies: "\u21D2", Rightarrow: "\u21D2", rArr: "\u21D2", DoubleRightTee: "\u22A8", vDash: "\u22A8", DoubleUpArrow: "\u21D1", Uparrow: "\u21D1", uArr: "\u21D1", DoubleUpDownArrow: "\u21D5", Updownarrow: "\u21D5", vArr: "\u21D5", DoubleVerticalBar: "\u2225", par: "\u2225", parallel: "\u2225", shortparallel: "\u2225", spar: "\u2225", DownArrow: "\u2193", ShortDownArrow: "\u2193", darr: "\u2193", downarrow: "\u2193", DownArrowBar: "\u2913", DownArrowUpArrow: "\u21F5", duarr: "\u21F5", DownBreve: "\u0311", DownLeftRightVector: "\u2950", DownLeftTeeVector: "\u295E", DownLeftVector: "\u21BD", leftharpoondown: "\u21BD", lhard: "\u21BD", DownLeftVectorBar: "\u2956", DownRightTeeVector: "\u295F", DownRightVector: "\u21C1", rhard: "\u21C1", rightharpoondown: "\u21C1", DownRightVectorBar: "\u2957", DownTee: "\u22A4", top: "\u22A4", DownTeeArrow: "\u21A7", mapstodown: "\u21A7", Dscr: "\u{1D49F}", Dstrok: "\u0110", ENG: "\u014A", ETH: "\xD0", Eacute: "\xC9", Ecaron: "\u011A", Ecirc: "\xCA", Ecy: "\u042D", Edot: "\u0116", Efr: "\u{1D508}", Egrave: "\xC8", Element: "\u2208", in: "\u2208", isin: "\u2208", isinv: "\u2208", Emacr: "\u0112", EmptySmallSquare: "\u25FB", EmptyVerySmallSquare: "\u25AB", Eogon: "\u0118", Eopf: "\u{1D53C}", Epsilon: "\u0395", Equal: "\u2A75", EqualTilde: "\u2242", eqsim: "\u2242", esim: "\u2242", Equilibrium: "\u21CC", rightleftharpoons: "\u21CC", rlhar: "\u21CC", Escr: "\u2130", expectation: "\u2130", Esim: "\u2A73", Eta: "\u0397", Euml: "\xCB", Exists: "\u2203", exist: "\u2203", ExponentialE: "\u2147", ee: "\u2147", exponentiale: "\u2147", Fcy: "\u0424", Ffr: "\u{1D509}", FilledSmallSquare: "\u25FC", FilledVerySmallSquare: "\u25AA", blacksquare: "\u25AA", squarf: "\u25AA", squf: "\u25AA", Fopf: "\u{1D53D}", ForAll: "\u2200", forall: "\u2200", Fouriertrf: "\u2131", Fscr: "\u2131", GJcy: "\u0403", GT: ">", gt: ">", Gamma: "\u0393", Gammad: "\u03DC", Gbreve: "\u011E", Gcedil: "\u0122", Gcirc: "\u011C", Gcy: "\u0413", Gdot: "\u0120", Gfr: "\u{1D50A}", Gg: "\u22D9", ggg: "\u22D9", Gopf: "\u{1D53E}", GreaterEqual: "\u2265", ge: "\u2265", geq: "\u2265", GreaterEqualLess: "\u22DB", gel: "\u22DB", gtreqless: "\u22DB", GreaterFullEqual: "\u2267", gE: "\u2267", geqq: "\u2267", GreaterGreater: "\u2AA2", GreaterLess: "\u2277", gl: "\u2277", gtrless: "\u2277", GreaterSlantEqual: "\u2A7E", geqslant: "\u2A7E", ges: "\u2A7E", GreaterTilde: "\u2273", gsim: "\u2273", gtrsim: "\u2273", Gscr: "\u{1D4A2}", Gt: "\u226B", NestedGreaterGreater: "\u226B", gg: "\u226B", HARDcy: "\u042A", Hacek: "\u02C7", caron: "\u02C7", Hat: "^", Hcirc: "\u0124", Hfr: "\u210C", Poincareplane: "\u210C", HilbertSpace: "\u210B", Hscr: "\u210B", hamilt: "\u210B", Hopf: "\u210D", quaternions: "\u210D", HorizontalLine: "\u2500", boxh: "\u2500", Hstrok: "\u0126", HumpEqual: "\u224F", bumpe: "\u224F", bumpeq: "\u224F", IEcy: "\u0415", IJlig: "\u0132", IOcy: "\u0401", Iacute: "\xCD", Icirc: "\xCE", Icy: "\u0418", Idot: "\u0130", Ifr: "\u2111", Im: "\u2111", image: "\u2111", imagpart: "\u2111", Igrave: "\xCC", Imacr: "\u012A", ImaginaryI: "\u2148", ii: "\u2148", Int: "\u222C", Integral: "\u222B", int: "\u222B", Intersection: "\u22C2", bigcap: "\u22C2", xcap: "\u22C2", InvisibleComma: "\u2063", ic: "\u2063", InvisibleTimes: "\u2062", it: "\u2062", Iogon: "\u012E", Iopf: "\u{1D540}", Iota: "\u0399", Iscr: "\u2110", imagline: "\u2110", Itilde: "\u0128", Iukcy: "\u0406", Iuml: "\xCF", Jcirc: "\u0134", Jcy: "\u0419", Jfr: "\u{1D50D}", Jopf: "\u{1D541}", Jscr: "\u{1D4A5}", Jsercy: "\u0408", Jukcy: "\u0404", KHcy: "\u0425", KJcy: "\u040C", Kappa: "\u039A", Kcedil: "\u0136", Kcy: "\u041A", Kfr: "\u{1D50E}", Kopf: "\u{1D542}", Kscr: "\u{1D4A6}", LJcy: "\u0409", LT: "<", lt: "<", Lacute: "\u0139", Lambda: "\u039B", Lang: "\u27EA", Laplacetrf: "\u2112", Lscr: "\u2112", lagran: "\u2112", Larr: "\u219E", twoheadleftarrow: "\u219E", Lcaron: "\u013D", Lcedil: "\u013B", Lcy: "\u041B", LeftAngleBracket: "\u27E8", lang: "\u27E8", langle: "\u27E8", LeftArrow: "\u2190", ShortLeftArrow: "\u2190", larr: "\u2190", leftarrow: "\u2190", slarr: "\u2190", LeftArrowBar: "\u21E4", larrb: "\u21E4", LeftArrowRightArrow: "\u21C6", leftrightarrows: "\u21C6", lrarr: "\u21C6", LeftCeiling: "\u2308", lceil: "\u2308", LeftDoubleBracket: "\u27E6", lobrk: "\u27E6", LeftDownTeeVector: "\u2961", LeftDownVector: "\u21C3", dharl: "\u21C3", downharpoonleft: "\u21C3", LeftDownVectorBar: "\u2959", LeftFloor: "\u230A", lfloor: "\u230A", LeftRightArrow: "\u2194", harr: "\u2194", leftrightarrow: "\u2194", LeftRightVector: "\u294E", LeftTee: "\u22A3", dashv: "\u22A3", LeftTeeArrow: "\u21A4", mapstoleft: "\u21A4", LeftTeeVector: "\u295A", LeftTriangle: "\u22B2", vartriangleleft: "\u22B2", vltri: "\u22B2", LeftTriangleBar: "\u29CF", LeftTriangleEqual: "\u22B4", ltrie: "\u22B4", trianglelefteq: "\u22B4", LeftUpDownVector: "\u2951", LeftUpTeeVector: "\u2960", LeftUpVector: "\u21BF", uharl: "\u21BF", upharpoonleft: "\u21BF", LeftUpVectorBar: "\u2958", LeftVector: "\u21BC", leftharpoonup: "\u21BC", lharu: "\u21BC", LeftVectorBar: "\u2952", LessEqualGreater: "\u22DA", leg: "\u22DA", lesseqgtr: "\u22DA", LessFullEqual: "\u2266", lE: "\u2266", leqq: "\u2266", LessGreater: "\u2276", lessgtr: "\u2276", lg: "\u2276", LessLess: "\u2AA1", LessSlantEqual: "\u2A7D", leqslant: "\u2A7D", les: "\u2A7D", LessTilde: "\u2272", lesssim: "\u2272", lsim: "\u2272", Lfr: "\u{1D50F}", Ll: "\u22D8", Lleftarrow: "\u21DA", lAarr: "\u21DA", Lmidot: "\u013F", LongLeftArrow: "\u27F5", longleftarrow: "\u27F5", xlarr: "\u27F5", LongLeftRightArrow: "\u27F7", longleftrightarrow: "\u27F7", xharr: "\u27F7", LongRightArrow: "\u27F6", longrightarrow: "\u27F6", xrarr: "\u27F6", Lopf: "\u{1D543}", LowerLeftArrow: "\u2199", swarr: "\u2199", swarrow: "\u2199", LowerRightArrow: "\u2198", searr: "\u2198", searrow: "\u2198", Lsh: "\u21B0", lsh: "\u21B0", Lstrok: "\u0141", Lt: "\u226A", NestedLessLess: "\u226A", ll: "\u226A", Map: "\u2905", Mcy: "\u041C", MediumSpace: "\u205F", Mellintrf: "\u2133", Mscr: "\u2133", phmmat: "\u2133", Mfr: "\u{1D510}", MinusPlus: "\u2213", mnplus: "\u2213", mp: "\u2213", Mopf: "\u{1D544}", Mu: "\u039C", NJcy: "\u040A", Nacute: "\u0143", Ncaron: "\u0147", Ncedil: "\u0145", Ncy: "\u041D", NegativeMediumSpace: "\u200B", NegativeThickSpace: "\u200B", NegativeThinSpace: "\u200B", NegativeVeryThinSpace: "\u200B", ZeroWidthSpace: "\u200B", NewLine: `
`, Nfr: "\u{1D511}", NoBreak: "\u2060", NonBreakingSpace: "\xA0", nbsp: "\xA0", Nopf: "\u2115", naturals: "\u2115", Not: "\u2AEC", NotCongruent: "\u2262", nequiv: "\u2262", NotCupCap: "\u226D", NotDoubleVerticalBar: "\u2226", npar: "\u2226", nparallel: "\u2226", nshortparallel: "\u2226", nspar: "\u2226", NotElement: "\u2209", notin: "\u2209", notinva: "\u2209", NotEqual: "\u2260", ne: "\u2260", NotEqualTilde: "\u2242\u0338", nesim: "\u2242\u0338", NotExists: "\u2204", nexist: "\u2204", nexists: "\u2204", NotGreater: "\u226F", ngt: "\u226F", ngtr: "\u226F", NotGreaterEqual: "\u2271", nge: "\u2271", ngeq: "\u2271", NotGreaterFullEqual: "\u2267\u0338", ngE: "\u2267\u0338", ngeqq: "\u2267\u0338", NotGreaterGreater: "\u226B\u0338", nGtv: "\u226B\u0338", NotGreaterLess: "\u2279", ntgl: "\u2279", NotGreaterSlantEqual: "\u2A7E\u0338", ngeqslant: "\u2A7E\u0338", nges: "\u2A7E\u0338", NotGreaterTilde: "\u2275", ngsim: "\u2275", NotHumpDownHump: "\u224E\u0338", nbump: "\u224E\u0338", NotHumpEqual: "\u224F\u0338", nbumpe: "\u224F\u0338", NotLeftTriangle: "\u22EA", nltri: "\u22EA", ntriangleleft: "\u22EA", NotLeftTriangleBar: "\u29CF\u0338", NotLeftTriangleEqual: "\u22EC", nltrie: "\u22EC", ntrianglelefteq: "\u22EC", NotLess: "\u226E", nless: "\u226E", nlt: "\u226E", NotLessEqual: "\u2270", nle: "\u2270", nleq: "\u2270", NotLessGreater: "\u2278", ntlg: "\u2278", NotLessLess: "\u226A\u0338", nLtv: "\u226A\u0338", NotLessSlantEqual: "\u2A7D\u0338", nleqslant: "\u2A7D\u0338", nles: "\u2A7D\u0338", NotLessTilde: "\u2274", nlsim: "\u2274", NotNestedGreaterGreater: "\u2AA2\u0338", NotNestedLessLess: "\u2AA1\u0338", NotPrecedes: "\u2280", npr: "\u2280", nprec: "\u2280", NotPrecedesEqual: "\u2AAF\u0338", npre: "\u2AAF\u0338", npreceq: "\u2AAF\u0338", NotPrecedesSlantEqual: "\u22E0", nprcue: "\u22E0", NotReverseElement: "\u220C", notni: "\u220C", notniva: "\u220C", NotRightTriangle: "\u22EB", nrtri: "\u22EB", ntriangleright: "\u22EB", NotRightTriangleBar: "\u29D0\u0338", NotRightTriangleEqual: "\u22ED", nrtrie: "\u22ED", ntrianglerighteq: "\u22ED", NotSquareSubset: "\u228F\u0338", NotSquareSubsetEqual: "\u22E2", nsqsube: "\u22E2", NotSquareSuperset: "\u2290\u0338", NotSquareSupersetEqual: "\u22E3", nsqsupe: "\u22E3", NotSubset: "\u2282\u20D2", nsubset: "\u2282\u20D2", vnsub: "\u2282\u20D2", NotSubsetEqual: "\u2288", nsube: "\u2288", nsubseteq: "\u2288", NotSucceeds: "\u2281", nsc: "\u2281", nsucc: "\u2281", NotSucceedsEqual: "\u2AB0\u0338", nsce: "\u2AB0\u0338", nsucceq: "\u2AB0\u0338", NotSucceedsSlantEqual: "\u22E1", nsccue: "\u22E1", NotSucceedsTilde: "\u227F\u0338", NotSuperset: "\u2283\u20D2", nsupset: "\u2283\u20D2", vnsup: "\u2283\u20D2", NotSupersetEqual: "\u2289", nsupe: "\u2289", nsupseteq: "\u2289", NotTilde: "\u2241", nsim: "\u2241", NotTildeEqual: "\u2244", nsime: "\u2244", nsimeq: "\u2244", NotTildeFullEqual: "\u2247", ncong: "\u2247", NotTildeTilde: "\u2249", nap: "\u2249", napprox: "\u2249", NotVerticalBar: "\u2224", nmid: "\u2224", nshortmid: "\u2224", nsmid: "\u2224", Nscr: "\u{1D4A9}", Ntilde: "\xD1", Nu: "\u039D", OElig: "\u0152", Oacute: "\xD3", Ocirc: "\xD4", Ocy: "\u041E", Odblac: "\u0150", Ofr: "\u{1D512}", Ograve: "\xD2", Omacr: "\u014C", Omega: "\u03A9", ohm: "\u03A9", Omicron: "\u039F", Oopf: "\u{1D546}", OpenCurlyDoubleQuote: "\u201C", ldquo: "\u201C", OpenCurlyQuote: "\u2018", lsquo: "\u2018", Or: "\u2A54", Oscr: "\u{1D4AA}", Oslash: "\xD8", Otilde: "\xD5", Otimes: "\u2A37", Ouml: "\xD6", OverBar: "\u203E", oline: "\u203E", OverBrace: "\u23DE", OverBracket: "\u23B4", tbrk: "\u23B4", OverParenthesis: "\u23DC", PartialD: "\u2202", part: "\u2202", Pcy: "\u041F", Pfr: "\u{1D513}", Phi: "\u03A6", Pi: "\u03A0", PlusMinus: "\xB1", plusmn: "\xB1", pm: "\xB1", Popf: "\u2119", primes: "\u2119", Pr: "\u2ABB", Precedes: "\u227A", pr: "\u227A", prec: "\u227A", PrecedesEqual: "\u2AAF", pre: "\u2AAF", preceq: "\u2AAF", PrecedesSlantEqual: "\u227C", prcue: "\u227C", preccurlyeq: "\u227C", PrecedesTilde: "\u227E", precsim: "\u227E", prsim: "\u227E", Prime: "\u2033", Product: "\u220F", prod: "\u220F", Proportional: "\u221D", prop: "\u221D", propto: "\u221D", varpropto: "\u221D", vprop: "\u221D", Pscr: "\u{1D4AB}", Psi: "\u03A8", QUOT: '"', quot: '"', Qfr: "\u{1D514}", Qopf: "\u211A", rationals: "\u211A", Qscr: "\u{1D4AC}", RBarr: "\u2910", drbkarow: "\u2910", REG: "\xAE", circledR: "\xAE", reg: "\xAE", Racute: "\u0154", Rang: "\u27EB", Rarr: "\u21A0", twoheadrightarrow: "\u21A0", Rarrtl: "\u2916", Rcaron: "\u0158", Rcedil: "\u0156", Rcy: "\u0420", Re: "\u211C", Rfr: "\u211C", real: "\u211C", realpart: "\u211C", ReverseElement: "\u220B", SuchThat: "\u220B", ni: "\u220B", niv: "\u220B", ReverseEquilibrium: "\u21CB", leftrightharpoons: "\u21CB", lrhar: "\u21CB", ReverseUpEquilibrium: "\u296F", duhar: "\u296F", Rho: "\u03A1", RightAngleBracket: "\u27E9", rang: "\u27E9", rangle: "\u27E9", RightArrow: "\u2192", ShortRightArrow: "\u2192", rarr: "\u2192", rightarrow: "\u2192", srarr: "\u2192", RightArrowBar: "\u21E5", rarrb: "\u21E5", RightArrowLeftArrow: "\u21C4", rightleftarrows: "\u21C4", rlarr: "\u21C4", RightCeiling: "\u2309", rceil: "\u2309", RightDoubleBracket: "\u27E7", robrk: "\u27E7", RightDownTeeVector: "\u295D", RightDownVector: "\u21C2", dharr: "\u21C2", downharpoonright: "\u21C2", RightDownVectorBar: "\u2955", RightFloor: "\u230B", rfloor: "\u230B", RightTee: "\u22A2", vdash: "\u22A2", RightTeeArrow: "\u21A6", map: "\u21A6", mapsto: "\u21A6", RightTeeVector: "\u295B", RightTriangle: "\u22B3", vartriangleright: "\u22B3", vrtri: "\u22B3", RightTriangleBar: "\u29D0", RightTriangleEqual: "\u22B5", rtrie: "\u22B5", trianglerighteq: "\u22B5", RightUpDownVector: "\u294F", RightUpTeeVector: "\u295C", RightUpVector: "\u21BE", uharr: "\u21BE", upharpoonright: "\u21BE", RightUpVectorBar: "\u2954", RightVector: "\u21C0", rharu: "\u21C0", rightharpoonup: "\u21C0", RightVectorBar: "\u2953", Ropf: "\u211D", reals: "\u211D", RoundImplies: "\u2970", Rrightarrow: "\u21DB", rAarr: "\u21DB", Rscr: "\u211B", realine: "\u211B", Rsh: "\u21B1", rsh: "\u21B1", RuleDelayed: "\u29F4", SHCHcy: "\u0429", SHcy: "\u0428", SOFTcy: "\u042C", Sacute: "\u015A", Sc: "\u2ABC", Scaron: "\u0160", Scedil: "\u015E", Scirc: "\u015C", Scy: "\u0421", Sfr: "\u{1D516}", ShortUpArrow: "\u2191", UpArrow: "\u2191", uarr: "\u2191", uparrow: "\u2191", Sigma: "\u03A3", SmallCircle: "\u2218", compfn: "\u2218", Sopf: "\u{1D54A}", Sqrt: "\u221A", radic: "\u221A", Square: "\u25A1", squ: "\u25A1", square: "\u25A1", SquareIntersection: "\u2293", sqcap: "\u2293", SquareSubset: "\u228F", sqsub: "\u228F", sqsubset: "\u228F", SquareSubsetEqual: "\u2291", sqsube: "\u2291", sqsubseteq: "\u2291", SquareSuperset: "\u2290", sqsup: "\u2290", sqsupset: "\u2290", SquareSupersetEqual: "\u2292", sqsupe: "\u2292", sqsupseteq: "\u2292", SquareUnion: "\u2294", sqcup: "\u2294", Sscr: "\u{1D4AE}", Star: "\u22C6", sstarf: "\u22C6", Sub: "\u22D0", Subset: "\u22D0", SubsetEqual: "\u2286", sube: "\u2286", subseteq: "\u2286", Succeeds: "\u227B", sc: "\u227B", succ: "\u227B", SucceedsEqual: "\u2AB0", sce: "\u2AB0", succeq: "\u2AB0", SucceedsSlantEqual: "\u227D", sccue: "\u227D", succcurlyeq: "\u227D", SucceedsTilde: "\u227F", scsim: "\u227F", succsim: "\u227F", Sum: "\u2211", sum: "\u2211", Sup: "\u22D1", Supset: "\u22D1", Superset: "\u2283", sup: "\u2283", supset: "\u2283", SupersetEqual: "\u2287", supe: "\u2287", supseteq: "\u2287", THORN: "\xDE", TRADE: "\u2122", trade: "\u2122", TSHcy: "\u040B", TScy: "\u0426", Tab: "	", Tau: "\u03A4", Tcaron: "\u0164", Tcedil: "\u0162", Tcy: "\u0422", Tfr: "\u{1D517}", Therefore: "\u2234", there4: "\u2234", therefore: "\u2234", Theta: "\u0398", ThickSpace: "\u205F\u200A", ThinSpace: "\u2009", thinsp: "\u2009", Tilde: "\u223C", sim: "\u223C", thicksim: "\u223C", thksim: "\u223C", TildeEqual: "\u2243", sime: "\u2243", simeq: "\u2243", TildeFullEqual: "\u2245", cong: "\u2245", TildeTilde: "\u2248", ap: "\u2248", approx: "\u2248", asymp: "\u2248", thickapprox: "\u2248", thkap: "\u2248", Topf: "\u{1D54B}", TripleDot: "\u20DB", tdot: "\u20DB", Tscr: "\u{1D4AF}", Tstrok: "\u0166", Uacute: "\xDA", Uarr: "\u219F", Uarrocir: "\u2949", Ubrcy: "\u040E", Ubreve: "\u016C", Ucirc: "\xDB", Ucy: "\u0423", Udblac: "\u0170", Ufr: "\u{1D518}", Ugrave: "\xD9", Umacr: "\u016A", UnderBar: "_", lowbar: "_", UnderBrace: "\u23DF", UnderBracket: "\u23B5", bbrk: "\u23B5", UnderParenthesis: "\u23DD", Union: "\u22C3", bigcup: "\u22C3", xcup: "\u22C3", UnionPlus: "\u228E", uplus: "\u228E", Uogon: "\u0172", Uopf: "\u{1D54C}", UpArrowBar: "\u2912", UpArrowDownArrow: "\u21C5", udarr: "\u21C5", UpDownArrow: "\u2195", updownarrow: "\u2195", varr: "\u2195", UpEquilibrium: "\u296E", udhar: "\u296E", UpTee: "\u22A5", bot: "\u22A5", bottom: "\u22A5", perp: "\u22A5", UpTeeArrow: "\u21A5", mapstoup: "\u21A5", UpperLeftArrow: "\u2196", nwarr: "\u2196", nwarrow: "\u2196", UpperRightArrow: "\u2197", nearr: "\u2197", nearrow: "\u2197", Upsi: "\u03D2", upsih: "\u03D2", Upsilon: "\u03A5", Uring: "\u016E", Uscr: "\u{1D4B0}", Utilde: "\u0168", Uuml: "\xDC", VDash: "\u22AB", Vbar: "\u2AEB", Vcy: "\u0412", Vdash: "\u22A9", Vdashl: "\u2AE6", Vee: "\u22C1", bigvee: "\u22C1", xvee: "\u22C1", Verbar: "\u2016", Vert: "\u2016", VerticalBar: "\u2223", mid: "\u2223", shortmid: "\u2223", smid: "\u2223", VerticalLine: "|", verbar: "|", vert: "|", VerticalSeparator: "\u2758", VerticalTilde: "\u2240", wr: "\u2240", wreath: "\u2240", VeryThinSpace: "\u200A", hairsp: "\u200A", Vfr: "\u{1D519}", Vopf: "\u{1D54D}", Vscr: "\u{1D4B1}", Vvdash: "\u22AA", Wcirc: "\u0174", Wedge: "\u22C0", bigwedge: "\u22C0", xwedge: "\u22C0", Wfr: "\u{1D51A}", Wopf: "\u{1D54E}", Wscr: "\u{1D4B2}", Xfr: "\u{1D51B}", Xi: "\u039E", Xopf: "\u{1D54F}", Xscr: "\u{1D4B3}", YAcy: "\u042F", YIcy: "\u0407", YUcy: "\u042E", Yacute: "\xDD", Ycirc: "\u0176", Ycy: "\u042B", Yfr: "\u{1D51C}", Yopf: "\u{1D550}", Yscr: "\u{1D4B4}", Yuml: "\u0178", ZHcy: "\u0416", Zacute: "\u0179", Zcaron: "\u017D", Zcy: "\u0417", Zdot: "\u017B", Zeta: "\u0396", Zfr: "\u2128", zeetrf: "\u2128", Zopf: "\u2124", integers: "\u2124", Zscr: "\u{1D4B5}", aacute: "\xE1", abreve: "\u0103", ac: "\u223E", mstpos: "\u223E", acE: "\u223E\u0333", acd: "\u223F", acirc: "\xE2", acy: "\u0430", aelig: "\xE6", afr: "\u{1D51E}", agrave: "\xE0", alefsym: "\u2135", aleph: "\u2135", alpha: "\u03B1", amacr: "\u0101", amalg: "\u2A3F", and: "\u2227", wedge: "\u2227", andand: "\u2A55", andd: "\u2A5C", andslope: "\u2A58", andv: "\u2A5A", ang: "\u2220", angle: "\u2220", ange: "\u29A4", angmsd: "\u2221", measuredangle: "\u2221", angmsdaa: "\u29A8", angmsdab: "\u29A9", angmsdac: "\u29AA", angmsdad: "\u29AB", angmsdae: "\u29AC", angmsdaf: "\u29AD", angmsdag: "\u29AE", angmsdah: "\u29AF", angrt: "\u221F", angrtvb: "\u22BE", angrtvbd: "\u299D", angsph: "\u2222", angzarr: "\u237C", aogon: "\u0105", aopf: "\u{1D552}", apE: "\u2A70", apacir: "\u2A6F", ape: "\u224A", approxeq: "\u224A", apid: "\u224B", apos: "'", aring: "\xE5", ascr: "\u{1D4B6}", ast: "*", midast: "*", atilde: "\xE3", auml: "\xE4", awint: "\u2A11", bNot: "\u2AED", backcong: "\u224C", bcong: "\u224C", backepsilon: "\u03F6", bepsi: "\u03F6", backprime: "\u2035", bprime: "\u2035", backsim: "\u223D", bsim: "\u223D", backsimeq: "\u22CD", bsime: "\u22CD", barvee: "\u22BD", barwed: "\u2305", barwedge: "\u2305", bbrktbrk: "\u23B6", bcy: "\u0431", bdquo: "\u201E", ldquor: "\u201E", bemptyv: "\u29B0", beta: "\u03B2", beth: "\u2136", between: "\u226C", twixt: "\u226C", bfr: "\u{1D51F}", bigcirc: "\u25EF", xcirc: "\u25EF", bigodot: "\u2A00", xodot: "\u2A00", bigoplus: "\u2A01", xoplus: "\u2A01", bigotimes: "\u2A02", xotime: "\u2A02", bigsqcup: "\u2A06", xsqcup: "\u2A06", bigstar: "\u2605", starf: "\u2605", bigtriangledown: "\u25BD", xdtri: "\u25BD", bigtriangleup: "\u25B3", xutri: "\u25B3", biguplus: "\u2A04", xuplus: "\u2A04", bkarow: "\u290D", rbarr: "\u290D", blacklozenge: "\u29EB", lozf: "\u29EB", blacktriangle: "\u25B4", utrif: "\u25B4", blacktriangledown: "\u25BE", dtrif: "\u25BE", blacktriangleleft: "\u25C2", ltrif: "\u25C2", blacktriangleright: "\u25B8", rtrif: "\u25B8", blank: "\u2423", blk12: "\u2592", blk14: "\u2591", blk34: "\u2593", block: "\u2588", bne: "=\u20E5", bnequiv: "\u2261\u20E5", bnot: "\u2310", bopf: "\u{1D553}", bowtie: "\u22C8", boxDL: "\u2557", boxDR: "\u2554", boxDl: "\u2556", boxDr: "\u2553", boxH: "\u2550", boxHD: "\u2566", boxHU: "\u2569", boxHd: "\u2564", boxHu: "\u2567", boxUL: "\u255D", boxUR: "\u255A", boxUl: "\u255C", boxUr: "\u2559", boxV: "\u2551", boxVH: "\u256C", boxVL: "\u2563", boxVR: "\u2560", boxVh: "\u256B", boxVl: "\u2562", boxVr: "\u255F", boxbox: "\u29C9", boxdL: "\u2555", boxdR: "\u2552", boxdl: "\u2510", boxdr: "\u250C", boxhD: "\u2565", boxhU: "\u2568", boxhd: "\u252C", boxhu: "\u2534", boxminus: "\u229F", minusb: "\u229F", boxplus: "\u229E", plusb: "\u229E", boxtimes: "\u22A0", timesb: "\u22A0", boxuL: "\u255B", boxuR: "\u2558", boxul: "\u2518", boxur: "\u2514", boxv: "\u2502", boxvH: "\u256A", boxvL: "\u2561", boxvR: "\u255E", boxvh: "\u253C", boxvl: "\u2524", boxvr: "\u251C", brvbar: "\xA6", bscr: "\u{1D4B7}", bsemi: "\u204F", bsol: "\\", bsolb: "\u29C5", bsolhsub: "\u27C8", bull: "\u2022", bullet: "\u2022", bumpE: "\u2AAE", cacute: "\u0107", cap: "\u2229", capand: "\u2A44", capbrcup: "\u2A49", capcap: "\u2A4B", capcup: "\u2A47", capdot: "\u2A40", caps: "\u2229\uFE00", caret: "\u2041", ccaps: "\u2A4D", ccaron: "\u010D", ccedil: "\xE7", ccirc: "\u0109", ccups: "\u2A4C", ccupssm: "\u2A50", cdot: "\u010B", cemptyv: "\u29B2", cent: "\xA2", cfr: "\u{1D520}", chcy: "\u0447", check: "\u2713", checkmark: "\u2713", chi: "\u03C7", cir: "\u25CB", cirE: "\u29C3", circ: "\u02C6", circeq: "\u2257", cire: "\u2257", circlearrowleft: "\u21BA", olarr: "\u21BA", circlearrowright: "\u21BB", orarr: "\u21BB", circledS: "\u24C8", oS: "\u24C8", circledast: "\u229B", oast: "\u229B", circledcirc: "\u229A", ocir: "\u229A", circleddash: "\u229D", odash: "\u229D", cirfnint: "\u2A10", cirmid: "\u2AEF", cirscir: "\u29C2", clubs: "\u2663", clubsuit: "\u2663", colon: ":", comma: ",", commat: "@", comp: "\u2201", complement: "\u2201", congdot: "\u2A6D", copf: "\u{1D554}", copysr: "\u2117", crarr: "\u21B5", cross: "\u2717", cscr: "\u{1D4B8}", csub: "\u2ACF", csube: "\u2AD1", csup: "\u2AD0", csupe: "\u2AD2", ctdot: "\u22EF", cudarrl: "\u2938", cudarrr: "\u2935", cuepr: "\u22DE", curlyeqprec: "\u22DE", cuesc: "\u22DF", curlyeqsucc: "\u22DF", cularr: "\u21B6", curvearrowleft: "\u21B6", cularrp: "\u293D", cup: "\u222A", cupbrcap: "\u2A48", cupcap: "\u2A46", cupcup: "\u2A4A", cupdot: "\u228D", cupor: "\u2A45", cups: "\u222A\uFE00", curarr: "\u21B7", curvearrowright: "\u21B7", curarrm: "\u293C", curlyvee: "\u22CE", cuvee: "\u22CE", curlywedge: "\u22CF", cuwed: "\u22CF", curren: "\xA4", cwint: "\u2231", cylcty: "\u232D", dHar: "\u2965", dagger: "\u2020", daleth: "\u2138", dash: "\u2010", hyphen: "\u2010", dbkarow: "\u290F", rBarr: "\u290F", dcaron: "\u010F", dcy: "\u0434", ddarr: "\u21CA", downdownarrows: "\u21CA", ddotseq: "\u2A77", eDDot: "\u2A77", deg: "\xB0", delta: "\u03B4", demptyv: "\u29B1", dfisht: "\u297F", dfr: "\u{1D521}", diamondsuit: "\u2666", diams: "\u2666", digamma: "\u03DD", gammad: "\u03DD", disin: "\u22F2", div: "\xF7", divide: "\xF7", divideontimes: "\u22C7", divonx: "\u22C7", djcy: "\u0452", dlcorn: "\u231E", llcorner: "\u231E", dlcrop: "\u230D", dollar: "$", dopf: "\u{1D555}", doteqdot: "\u2251", eDot: "\u2251", dotminus: "\u2238", minusd: "\u2238", dotplus: "\u2214", plusdo: "\u2214", dotsquare: "\u22A1", sdotb: "\u22A1", drcorn: "\u231F", lrcorner: "\u231F", drcrop: "\u230C", dscr: "\u{1D4B9}", dscy: "\u0455", dsol: "\u29F6", dstrok: "\u0111", dtdot: "\u22F1", dtri: "\u25BF", triangledown: "\u25BF", dwangle: "\u29A6", dzcy: "\u045F", dzigrarr: "\u27FF", eacute: "\xE9", easter: "\u2A6E", ecaron: "\u011B", ecir: "\u2256", eqcirc: "\u2256", ecirc: "\xEA", ecolon: "\u2255", eqcolon: "\u2255", ecy: "\u044D", edot: "\u0117", efDot: "\u2252", fallingdotseq: "\u2252", efr: "\u{1D522}", eg: "\u2A9A", egrave: "\xE8", egs: "\u2A96", eqslantgtr: "\u2A96", egsdot: "\u2A98", el: "\u2A99", elinters: "\u23E7", ell: "\u2113", els: "\u2A95", eqslantless: "\u2A95", elsdot: "\u2A97", emacr: "\u0113", empty: "\u2205", emptyset: "\u2205", emptyv: "\u2205", varnothing: "\u2205", emsp13: "\u2004", emsp14: "\u2005", emsp: "\u2003", eng: "\u014B", ensp: "\u2002", eogon: "\u0119", eopf: "\u{1D556}", epar: "\u22D5", eparsl: "\u29E3", eplus: "\u2A71", epsi: "\u03B5", epsilon: "\u03B5", epsiv: "\u03F5", straightepsilon: "\u03F5", varepsilon: "\u03F5", equals: "=", equest: "\u225F", questeq: "\u225F", equivDD: "\u2A78", eqvparsl: "\u29E5", erDot: "\u2253", risingdotseq: "\u2253", erarr: "\u2971", escr: "\u212F", eta: "\u03B7", eth: "\xF0", euml: "\xEB", euro: "\u20AC", excl: "!", fcy: "\u0444", female: "\u2640", ffilig: "\uFB03", fflig: "\uFB00", ffllig: "\uFB04", ffr: "\u{1D523}", filig: "\uFB01", fjlig: "fj", flat: "\u266D", fllig: "\uFB02", fltns: "\u25B1", fnof: "\u0192", fopf: "\u{1D557}", fork: "\u22D4", pitchfork: "\u22D4", forkv: "\u2AD9", fpartint: "\u2A0D", frac12: "\xBD", half: "\xBD", frac13: "\u2153", frac14: "\xBC", frac15: "\u2155", frac16: "\u2159", frac18: "\u215B", frac23: "\u2154", frac25: "\u2156", frac34: "\xBE", frac35: "\u2157", frac38: "\u215C", frac45: "\u2158", frac56: "\u215A", frac58: "\u215D", frac78: "\u215E", frasl: "\u2044", frown: "\u2322", sfrown: "\u2322", fscr: "\u{1D4BB}", gEl: "\u2A8C", gtreqqless: "\u2A8C", gacute: "\u01F5", gamma: "\u03B3", gap: "\u2A86", gtrapprox: "\u2A86", gbreve: "\u011F", gcirc: "\u011D", gcy: "\u0433", gdot: "\u0121", gescc: "\u2AA9", gesdot: "\u2A80", gesdoto: "\u2A82", gesdotol: "\u2A84", gesl: "\u22DB\uFE00", gesles: "\u2A94", gfr: "\u{1D524}", gimel: "\u2137", gjcy: "\u0453", glE: "\u2A92", gla: "\u2AA5", glj: "\u2AA4", gnE: "\u2269", gneqq: "\u2269", gnap: "\u2A8A", gnapprox: "\u2A8A", gne: "\u2A88", gneq: "\u2A88", gnsim: "\u22E7", gopf: "\u{1D558}", gscr: "\u210A", gsime: "\u2A8E", gsiml: "\u2A90", gtcc: "\u2AA7", gtcir: "\u2A7A", gtdot: "\u22D7", gtrdot: "\u22D7", gtlPar: "\u2995", gtquest: "\u2A7C", gtrarr: "\u2978", gvertneqq: "\u2269\uFE00", gvnE: "\u2269\uFE00", hardcy: "\u044A", harrcir: "\u2948", harrw: "\u21AD", leftrightsquigarrow: "\u21AD", hbar: "\u210F", hslash: "\u210F", planck: "\u210F", plankv: "\u210F", hcirc: "\u0125", hearts: "\u2665", heartsuit: "\u2665", hellip: "\u2026", mldr: "\u2026", hercon: "\u22B9", hfr: "\u{1D525}", hksearow: "\u2925", searhk: "\u2925", hkswarow: "\u2926", swarhk: "\u2926", hoarr: "\u21FF", homtht: "\u223B", hookleftarrow: "\u21A9", larrhk: "\u21A9", hookrightarrow: "\u21AA", rarrhk: "\u21AA", hopf: "\u{1D559}", horbar: "\u2015", hscr: "\u{1D4BD}", hstrok: "\u0127", hybull: "\u2043", iacute: "\xED", icirc: "\xEE", icy: "\u0438", iecy: "\u0435", iexcl: "\xA1", ifr: "\u{1D526}", igrave: "\xEC", iiiint: "\u2A0C", qint: "\u2A0C", iiint: "\u222D", tint: "\u222D", iinfin: "\u29DC", iiota: "\u2129", ijlig: "\u0133", imacr: "\u012B", imath: "\u0131", inodot: "\u0131", imof: "\u22B7", imped: "\u01B5", incare: "\u2105", infin: "\u221E", infintie: "\u29DD", intcal: "\u22BA", intercal: "\u22BA", intlarhk: "\u2A17", intprod: "\u2A3C", iprod: "\u2A3C", iocy: "\u0451", iogon: "\u012F", iopf: "\u{1D55A}", iota: "\u03B9", iquest: "\xBF", iscr: "\u{1D4BE}", isinE: "\u22F9", isindot: "\u22F5", isins: "\u22F4", isinsv: "\u22F3", itilde: "\u0129", iukcy: "\u0456", iuml: "\xEF", jcirc: "\u0135", jcy: "\u0439", jfr: "\u{1D527}", jmath: "\u0237", jopf: "\u{1D55B}", jscr: "\u{1D4BF}", jsercy: "\u0458", jukcy: "\u0454", kappa: "\u03BA", kappav: "\u03F0", varkappa: "\u03F0", kcedil: "\u0137", kcy: "\u043A", kfr: "\u{1D528}", kgreen: "\u0138", khcy: "\u0445", kjcy: "\u045C", kopf: "\u{1D55C}", kscr: "\u{1D4C0}", lAtail: "\u291B", lBarr: "\u290E", lEg: "\u2A8B", lesseqqgtr: "\u2A8B", lHar: "\u2962", lacute: "\u013A", laemptyv: "\u29B4", lambda: "\u03BB", langd: "\u2991", lap: "\u2A85", lessapprox: "\u2A85", laquo: "\xAB", larrbfs: "\u291F", larrfs: "\u291D", larrlp: "\u21AB", looparrowleft: "\u21AB", larrpl: "\u2939", larrsim: "\u2973", larrtl: "\u21A2", leftarrowtail: "\u21A2", lat: "\u2AAB", latail: "\u2919", late: "\u2AAD", lates: "\u2AAD\uFE00", lbarr: "\u290C", lbbrk: "\u2772", lbrace: "{", lcub: "{", lbrack: "[", lsqb: "[", lbrke: "\u298B", lbrksld: "\u298F", lbrkslu: "\u298D", lcaron: "\u013E", lcedil: "\u013C", lcy: "\u043B", ldca: "\u2936", ldrdhar: "\u2967", ldrushar: "\u294B", ldsh: "\u21B2", le: "\u2264", leq: "\u2264", leftleftarrows: "\u21C7", llarr: "\u21C7", leftthreetimes: "\u22CB", lthree: "\u22CB", lescc: "\u2AA8", lesdot: "\u2A7F", lesdoto: "\u2A81", lesdotor: "\u2A83", lesg: "\u22DA\uFE00", lesges: "\u2A93", lessdot: "\u22D6", ltdot: "\u22D6", lfisht: "\u297C", lfr: "\u{1D529}", lgE: "\u2A91", lharul: "\u296A", lhblk: "\u2584", ljcy: "\u0459", llhard: "\u296B", lltri: "\u25FA", lmidot: "\u0140", lmoust: "\u23B0", lmoustache: "\u23B0", lnE: "\u2268", lneqq: "\u2268", lnap: "\u2A89", lnapprox: "\u2A89", lne: "\u2A87", lneq: "\u2A87", lnsim: "\u22E6", loang: "\u27EC", loarr: "\u21FD", longmapsto: "\u27FC", xmap: "\u27FC", looparrowright: "\u21AC", rarrlp: "\u21AC", lopar: "\u2985", lopf: "\u{1D55D}", loplus: "\u2A2D", lotimes: "\u2A34", lowast: "\u2217", loz: "\u25CA", lozenge: "\u25CA", lpar: "(", lparlt: "\u2993", lrhard: "\u296D", lrm: "\u200E", lrtri: "\u22BF", lsaquo: "\u2039", lscr: "\u{1D4C1}", lsime: "\u2A8D", lsimg: "\u2A8F", lsquor: "\u201A", sbquo: "\u201A", lstrok: "\u0142", ltcc: "\u2AA6", ltcir: "\u2A79", ltimes: "\u22C9", ltlarr: "\u2976", ltquest: "\u2A7B", ltrPar: "\u2996", ltri: "\u25C3", triangleleft: "\u25C3", lurdshar: "\u294A", luruhar: "\u2966", lvertneqq: "\u2268\uFE00", lvnE: "\u2268\uFE00", mDDot: "\u223A", macr: "\xAF", strns: "\xAF", male: "\u2642", malt: "\u2720", maltese: "\u2720", marker: "\u25AE", mcomma: "\u2A29", mcy: "\u043C", mdash: "\u2014", mfr: "\u{1D52A}", mho: "\u2127", micro: "\xB5", midcir: "\u2AF0", minus: "\u2212", minusdu: "\u2A2A", mlcp: "\u2ADB", models: "\u22A7", mopf: "\u{1D55E}", mscr: "\u{1D4C2}", mu: "\u03BC", multimap: "\u22B8", mumap: "\u22B8", nGg: "\u22D9\u0338", nGt: "\u226B\u20D2", nLeftarrow: "\u21CD", nlArr: "\u21CD", nLeftrightarrow: "\u21CE", nhArr: "\u21CE", nLl: "\u22D8\u0338", nLt: "\u226A\u20D2", nRightarrow: "\u21CF", nrArr: "\u21CF", nVDash: "\u22AF", nVdash: "\u22AE", nacute: "\u0144", nang: "\u2220\u20D2", napE: "\u2A70\u0338", napid: "\u224B\u0338", napos: "\u0149", natur: "\u266E", natural: "\u266E", ncap: "\u2A43", ncaron: "\u0148", ncedil: "\u0146", ncongdot: "\u2A6D\u0338", ncup: "\u2A42", ncy: "\u043D", ndash: "\u2013", neArr: "\u21D7", nearhk: "\u2924", nedot: "\u2250\u0338", nesear: "\u2928", toea: "\u2928", nfr: "\u{1D52B}", nharr: "\u21AE", nleftrightarrow: "\u21AE", nhpar: "\u2AF2", nis: "\u22FC", nisd: "\u22FA", njcy: "\u045A", nlE: "\u2266\u0338", nleqq: "\u2266\u0338", nlarr: "\u219A", nleftarrow: "\u219A", nldr: "\u2025", nopf: "\u{1D55F}", not: "\xAC", notinE: "\u22F9\u0338", notindot: "\u22F5\u0338", notinvb: "\u22F7", notinvc: "\u22F6", notnivb: "\u22FE", notnivc: "\u22FD", nparsl: "\u2AFD\u20E5", npart: "\u2202\u0338", npolint: "\u2A14", nrarr: "\u219B", nrightarrow: "\u219B", nrarrc: "\u2933\u0338", nrarrw: "\u219D\u0338", nscr: "\u{1D4C3}", nsub: "\u2284", nsubE: "\u2AC5\u0338", nsubseteqq: "\u2AC5\u0338", nsup: "\u2285", nsupE: "\u2AC6\u0338", nsupseteqq: "\u2AC6\u0338", ntilde: "\xF1", nu: "\u03BD", num: "#", numero: "\u2116", numsp: "\u2007", nvDash: "\u22AD", nvHarr: "\u2904", nvap: "\u224D\u20D2", nvdash: "\u22AC", nvge: "\u2265\u20D2", nvgt: ">\u20D2", nvinfin: "\u29DE", nvlArr: "\u2902", nvle: "\u2264\u20D2", nvlt: "<\u20D2", nvltrie: "\u22B4\u20D2", nvrArr: "\u2903", nvrtrie: "\u22B5\u20D2", nvsim: "\u223C\u20D2", nwArr: "\u21D6", nwarhk: "\u2923", nwnear: "\u2927", oacute: "\xF3", ocirc: "\xF4", ocy: "\u043E", odblac: "\u0151", odiv: "\u2A38", odsold: "\u29BC", oelig: "\u0153", ofcir: "\u29BF", ofr: "\u{1D52C}", ogon: "\u02DB", ograve: "\xF2", ogt: "\u29C1", ohbar: "\u29B5", olcir: "\u29BE", olcross: "\u29BB", olt: "\u29C0", omacr: "\u014D", omega: "\u03C9", omicron: "\u03BF", omid: "\u29B6", oopf: "\u{1D560}", opar: "\u29B7", operp: "\u29B9", or: "\u2228", vee: "\u2228", ord: "\u2A5D", order: "\u2134", orderof: "\u2134", oscr: "\u2134", ordf: "\xAA", ordm: "\xBA", origof: "\u22B6", oror: "\u2A56", orslope: "\u2A57", orv: "\u2A5B", oslash: "\xF8", osol: "\u2298", otilde: "\xF5", otimesas: "\u2A36", ouml: "\xF6", ovbar: "\u233D", para: "\xB6", parsim: "\u2AF3", parsl: "\u2AFD", pcy: "\u043F", percnt: "%", period: ".", permil: "\u2030", pertenk: "\u2031", pfr: "\u{1D52D}", phi: "\u03C6", phiv: "\u03D5", straightphi: "\u03D5", varphi: "\u03D5", phone: "\u260E", pi: "\u03C0", piv: "\u03D6", varpi: "\u03D6", planckh: "\u210E", plus: "+", plusacir: "\u2A23", pluscir: "\u2A22", plusdu: "\u2A25", pluse: "\u2A72", plussim: "\u2A26", plustwo: "\u2A27", pointint: "\u2A15", popf: "\u{1D561}", pound: "\xA3", prE: "\u2AB3", prap: "\u2AB7", precapprox: "\u2AB7", precnapprox: "\u2AB9", prnap: "\u2AB9", precneqq: "\u2AB5", prnE: "\u2AB5", precnsim: "\u22E8", prnsim: "\u22E8", prime: "\u2032", profalar: "\u232E", profline: "\u2312", profsurf: "\u2313", prurel: "\u22B0", pscr: "\u{1D4C5}", psi: "\u03C8", puncsp: "\u2008", qfr: "\u{1D52E}", qopf: "\u{1D562}", qprime: "\u2057", qscr: "\u{1D4C6}", quatint: "\u2A16", quest: "?", rAtail: "\u291C", rHar: "\u2964", race: "\u223D\u0331", racute: "\u0155", raemptyv: "\u29B3", rangd: "\u2992", range: "\u29A5", raquo: "\xBB", rarrap: "\u2975", rarrbfs: "\u2920", rarrc: "\u2933", rarrfs: "\u291E", rarrpl: "\u2945", rarrsim: "\u2974", rarrtl: "\u21A3", rightarrowtail: "\u21A3", rarrw: "\u219D", rightsquigarrow: "\u219D", ratail: "\u291A", ratio: "\u2236", rbbrk: "\u2773", rbrace: "}", rcub: "}", rbrack: "]", rsqb: "]", rbrke: "\u298C", rbrksld: "\u298E", rbrkslu: "\u2990", rcaron: "\u0159", rcedil: "\u0157", rcy: "\u0440", rdca: "\u2937", rdldhar: "\u2969", rdsh: "\u21B3", rect: "\u25AD", rfisht: "\u297D", rfr: "\u{1D52F}", rharul: "\u296C", rho: "\u03C1", rhov: "\u03F1", varrho: "\u03F1", rightrightarrows: "\u21C9", rrarr: "\u21C9", rightthreetimes: "\u22CC", rthree: "\u22CC", ring: "\u02DA", rlm: "\u200F", rmoust: "\u23B1", rmoustache: "\u23B1", rnmid: "\u2AEE", roang: "\u27ED", roarr: "\u21FE", ropar: "\u2986", ropf: "\u{1D563}", roplus: "\u2A2E", rotimes: "\u2A35", rpar: ")", rpargt: "\u2994", rppolint: "\u2A12", rsaquo: "\u203A", rscr: "\u{1D4C7}", rtimes: "\u22CA", rtri: "\u25B9", triangleright: "\u25B9", rtriltri: "\u29CE", ruluhar: "\u2968", rx: "\u211E", sacute: "\u015B", scE: "\u2AB4", scap: "\u2AB8", succapprox: "\u2AB8", scaron: "\u0161", scedil: "\u015F", scirc: "\u015D", scnE: "\u2AB6", succneqq: "\u2AB6", scnap: "\u2ABA", succnapprox: "\u2ABA", scnsim: "\u22E9", succnsim: "\u22E9", scpolint: "\u2A13", scy: "\u0441", sdot: "\u22C5", sdote: "\u2A66", seArr: "\u21D8", sect: "\xA7", semi: ";", seswar: "\u2929", tosa: "\u2929", sext: "\u2736", sfr: "\u{1D530}", sharp: "\u266F", shchcy: "\u0449", shcy: "\u0448", shy: "\xAD", sigma: "\u03C3", sigmaf: "\u03C2", sigmav: "\u03C2", varsigma: "\u03C2", simdot: "\u2A6A", simg: "\u2A9E", simgE: "\u2AA0", siml: "\u2A9D", simlE: "\u2A9F", simne: "\u2246", simplus: "\u2A24", simrarr: "\u2972", smashp: "\u2A33", smeparsl: "\u29E4", smile: "\u2323", ssmile: "\u2323", smt: "\u2AAA", smte: "\u2AAC", smtes: "\u2AAC\uFE00", softcy: "\u044C", sol: "/", solb: "\u29C4", solbar: "\u233F", sopf: "\u{1D564}", spades: "\u2660", spadesuit: "\u2660", sqcaps: "\u2293\uFE00", sqcups: "\u2294\uFE00", sscr: "\u{1D4C8}", star: "\u2606", sub: "\u2282", subset: "\u2282", subE: "\u2AC5", subseteqq: "\u2AC5", subdot: "\u2ABD", subedot: "\u2AC3", submult: "\u2AC1", subnE: "\u2ACB", subsetneqq: "\u2ACB", subne: "\u228A", subsetneq: "\u228A", subplus: "\u2ABF", subrarr: "\u2979", subsim: "\u2AC7", subsub: "\u2AD5", subsup: "\u2AD3", sung: "\u266A", sup1: "\xB9", sup2: "\xB2", sup3: "\xB3", supE: "\u2AC6", supseteqq: "\u2AC6", supdot: "\u2ABE", supdsub: "\u2AD8", supedot: "\u2AC4", suphsol: "\u27C9", suphsub: "\u2AD7", suplarr: "\u297B", supmult: "\u2AC2", supnE: "\u2ACC", supsetneqq: "\u2ACC", supne: "\u228B", supsetneq: "\u228B", supplus: "\u2AC0", supsim: "\u2AC8", supsub: "\u2AD4", supsup: "\u2AD6", swArr: "\u21D9", swnwar: "\u292A", szlig: "\xDF", target: "\u2316", tau: "\u03C4", tcaron: "\u0165", tcedil: "\u0163", tcy: "\u0442", telrec: "\u2315", tfr: "\u{1D531}", theta: "\u03B8", thetasym: "\u03D1", thetav: "\u03D1", vartheta: "\u03D1", thorn: "\xFE", times: "\xD7", timesbar: "\u2A31", timesd: "\u2A30", topbot: "\u2336", topcir: "\u2AF1", topf: "\u{1D565}", topfork: "\u2ADA", tprime: "\u2034", triangle: "\u25B5", utri: "\u25B5", triangleq: "\u225C", trie: "\u225C", tridot: "\u25EC", triminus: "\u2A3A", triplus: "\u2A39", trisb: "\u29CD", tritime: "\u2A3B", trpezium: "\u23E2", tscr: "\u{1D4C9}", tscy: "\u0446", tshcy: "\u045B", tstrok: "\u0167", uHar: "\u2963", uacute: "\xFA", ubrcy: "\u045E", ubreve: "\u016D", ucirc: "\xFB", ucy: "\u0443", udblac: "\u0171", ufisht: "\u297E", ufr: "\u{1D532}", ugrave: "\xF9", uhblk: "\u2580", ulcorn: "\u231C", ulcorner: "\u231C", ulcrop: "\u230F", ultri: "\u25F8", umacr: "\u016B", uogon: "\u0173", uopf: "\u{1D566}", upsi: "\u03C5", upsilon: "\u03C5", upuparrows: "\u21C8", uuarr: "\u21C8", urcorn: "\u231D", urcorner: "\u231D", urcrop: "\u230E", uring: "\u016F", urtri: "\u25F9", uscr: "\u{1D4CA}", utdot: "\u22F0", utilde: "\u0169", uuml: "\xFC", uwangle: "\u29A7", vBar: "\u2AE8", vBarv: "\u2AE9", vangrt: "\u299C", varsubsetneq: "\u228A\uFE00", vsubne: "\u228A\uFE00", varsubsetneqq: "\u2ACB\uFE00", vsubnE: "\u2ACB\uFE00", varsupsetneq: "\u228B\uFE00", vsupne: "\u228B\uFE00", varsupsetneqq: "\u2ACC\uFE00", vsupnE: "\u2ACC\uFE00", vcy: "\u0432", veebar: "\u22BB", veeeq: "\u225A", vellip: "\u22EE", vfr: "\u{1D533}", vopf: "\u{1D567}", vscr: "\u{1D4CB}", vzigzag: "\u299A", wcirc: "\u0175", wedbar: "\u2A5F", wedgeq: "\u2259", weierp: "\u2118", wp: "\u2118", wfr: "\u{1D534}", wopf: "\u{1D568}", wscr: "\u{1D4CC}", xfr: "\u{1D535}", xi: "\u03BE", xnis: "\u22FB", xopf: "\u{1D569}", xscr: "\u{1D4CD}", yacute: "\xFD", yacy: "\u044F", ycirc: "\u0177", ycy: "\u044B", yen: "\xA5", yfr: "\u{1D536}", yicy: "\u0457", yopf: "\u{1D56A}", yscr: "\u{1D4CE}", yucy: "\u044E", yuml: "\xFF", zacute: "\u017A", zcaron: "\u017E", zcy: "\u0437", zdot: "\u017C", zeta: "\u03B6", zfr: "\u{1D537}", zhcy: "\u0436", zigrarr: "\u21DD", zopf: "\u{1D56B}", zscr: "\u{1D4CF}", zwj: "\u200D", zwnj: "\u200C" };
    Xa = "\uE500";
    Ve.ngsp = Xa;
    Ja = [/@/, /^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
    Rr = class t3 {
      static fromArray(e2) {
        return e2 ? ($s("interpolation", e2), new t3(e2[0], e2[1])) : $r;
      }
      constructor(e2, r2) {
        this.start = e2, this.end = r2;
      }
    };
    $r = new Rr("{{", "}}");
    gt = class extends Oe {
      constructor(e2, r2, n2) {
        super(n2, e2), this.tokenType = r2;
      }
    };
    Vr = class {
      constructor(e2, r2, n2) {
        this.tokens = e2, this.errors = r2, this.nonNormalizedIcuExpressions = n2;
      }
    };
    So = /\r\n?/g;
    (function(t8) {
      t8.HEX = "hexadecimal", t8.DEC = "decimal";
    })(tr || (tr = {}));
    Ct = class {
      constructor(e2) {
        this.error = e2;
      }
    };
    Ur = class {
      constructor(e2, r2, n2) {
        this._getTagContentType = r2, this._currentTokenStart = null, this._currentTokenType = null, this._expansionCaseStack = [], this._inInterpolation = false, this._fullNameStack = [], this.tokens = [], this.errors = [], this.nonNormalizedIcuExpressions = [], this._tokenizeIcu = n2.tokenizeExpansionForms || false, this._interpolationConfig = n2.interpolationConfig || $r, this._leadingTriviaCodePoints = n2.leadingTriviaChars && n2.leadingTriviaChars.map((i) => i.codePointAt(0) || 0), this._canSelfClose = n2.canSelfClose || false, this._allowHtmComponentClosingTags = n2.allowHtmComponentClosingTags || false;
        let s2 = n2.range || { endPos: e2.content.length, startPos: 0, startLine: 0, startCol: 0 };
        this._cursor = n2.escapedString ? new Wr(e2, s2) : new rr(e2, s2), this._preserveLineEndings = n2.preserveLineEndings || false, this._i18nNormalizeLineEndingsInICUs = n2.i18nNormalizeLineEndingsInICUs || false, this._tokenizeBlocks = n2.tokenizeBlocks ?? true, this._tokenizeLet = n2.tokenizeLet ?? true;
        try {
          this._cursor.init();
        } catch (i) {
          this.handleError(i);
        }
      }
      _processCarriageReturns(e2) {
        return this._preserveLineEndings ? e2 : e2.replace(So, `
`);
      }
      tokenize() {
        for (; this._cursor.peek() !== 0; ) {
          let e2 = this._cursor.clone();
          try {
            if (this._attemptCharCode(60)) if (this._attemptCharCode(33)) this._attemptStr("[CDATA[") ? this._consumeCdata(e2) : this._attemptStr("--") ? this._consumeComment(e2) : this._attemptStrCaseInsensitive("doctype") ? this._consumeDocType(e2) : this._consumeBogusComment(e2);
            else if (this._attemptCharCode(47)) this._consumeTagClose(e2);
            else {
              let r2 = this._cursor.clone();
              this._attemptCharCode(63) ? (this._cursor = r2, this._consumeBogusComment(e2)) : this._consumeTagOpen(e2);
            }
            else this._tokenizeLet && this._cursor.peek() === 64 && !this._inInterpolation && this._attemptStr("@let") ? this._consumeLetDeclaration(e2) : this._tokenizeBlocks && this._attemptCharCode(64) ? this._consumeBlockStart(e2) : this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansionCase() && !this._isInExpansionForm() && this._attemptCharCode(125) ? this._consumeBlockEnd(e2) : this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeWithInterpolation(5, 8, () => this._isTextEnd(), () => this._isTagStart());
          } catch (r2) {
            this.handleError(r2);
          }
        }
        this._beginToken(34), this._endToken([]);
      }
      _getBlockName() {
        let e2 = false, r2 = this._cursor.clone();
        return this._attemptCharCodeUntilFn((n2) => ut(n2) ? !e2 : zs(n2) ? (e2 = true, false) : true), this._cursor.getChars(r2).trim();
      }
      _consumeBlockStart(e2) {
        this._beginToken(25, e2);
        let r2 = this._endToken([this._getBlockName()]);
        if (this._cursor.peek() === 40) if (this._cursor.advance(), this._consumeBlockParameters(), this._attemptCharCodeUntilFn(b), this._attemptCharCode(41)) this._attemptCharCodeUntilFn(b);
        else {
          r2.type = 29;
          return;
        }
        this._attemptCharCode(123) ? (this._beginToken(26), this._endToken([])) : r2.type = 29;
      }
      _consumeBlockEnd(e2) {
        this._beginToken(27, e2), this._endToken([]);
      }
      _consumeBlockParameters() {
        for (this._attemptCharCodeUntilFn(Gs); this._cursor.peek() !== 41 && this._cursor.peek() !== 0; ) {
          this._beginToken(28);
          let e2 = this._cursor.clone(), r2 = null, n2 = 0;
          for (; this._cursor.peek() !== 59 && this._cursor.peek() !== 0 || r2 !== null; ) {
            let s2 = this._cursor.peek();
            if (s2 === 92) this._cursor.advance();
            else if (s2 === r2) r2 = null;
            else if (r2 === null && $t(s2)) r2 = s2;
            else if (s2 === 40 && r2 === null) n2++;
            else if (s2 === 41 && r2 === null) {
              if (n2 === 0) break;
              n2 > 0 && n2--;
            }
            this._cursor.advance();
          }
          this._endToken([this._cursor.getChars(e2)]), this._attemptCharCodeUntilFn(Gs);
        }
      }
      _consumeLetDeclaration(e2) {
        if (this._beginToken(30, e2), ut(this._cursor.peek())) this._attemptCharCodeUntilFn(b);
        else {
          let s2 = this._endToken([this._cursor.getChars(e2)]);
          s2.type = 33;
          return;
        }
        let r2 = this._endToken([this._getLetDeclarationName()]);
        if (this._attemptCharCodeUntilFn(b), !this._attemptCharCode(61)) {
          r2.type = 33;
          return;
        }
        this._attemptCharCodeUntilFn((s2) => b(s2) && !Rt(s2)), this._consumeLetDeclarationValue(), this._cursor.peek() === 59 ? (this._beginToken(32), this._endToken([]), this._cursor.advance()) : (r2.type = 33, r2.sourceSpan = this._cursor.getSpan(e2));
      }
      _getLetDeclarationName() {
        let e2 = this._cursor.clone(), r2 = false;
        return this._attemptCharCodeUntilFn((n2) => lt(n2) || n2 === 36 || n2 === 95 || r2 && It(n2) ? (r2 = true, false) : true), this._cursor.getChars(e2).trim();
      }
      _consumeLetDeclarationValue() {
        let e2 = this._cursor.clone();
        for (this._beginToken(31, e2); this._cursor.peek() !== 0; ) {
          let r2 = this._cursor.peek();
          if (r2 === 59) break;
          $t(r2) && (this._cursor.advance(), this._attemptCharCodeUntilFn((n2) => n2 === 92 ? (this._cursor.advance(), false) : n2 === r2)), this._cursor.advance();
        }
        this._endToken([this._cursor.getChars(e2)]);
      }
      _tokenizeExpansionForm() {
        if (this.isExpansionFormStart()) return this._consumeExpansionFormStart(), true;
        if (vo(this._cursor.peek()) && this._isInExpansionForm()) return this._consumeExpansionCaseStart(), true;
        if (this._cursor.peek() === 125) {
          if (this._isInExpansionCase()) return this._consumeExpansionCaseEnd(), true;
          if (this._isInExpansionForm()) return this._consumeExpansionFormEnd(), true;
        }
        return false;
      }
      _beginToken(e2, r2 = this._cursor.clone()) {
        this._currentTokenStart = r2, this._currentTokenType = e2;
      }
      _endToken(e2, r2) {
        if (this._currentTokenStart === null) throw new gt("Programming error - attempted to end a token when there was no start to the token", this._currentTokenType, this._cursor.getSpan(r2));
        if (this._currentTokenType === null) throw new gt("Programming error - attempted to end a token which has no token type", null, this._cursor.getSpan(this._currentTokenStart));
        let n2 = { type: this._currentTokenType, parts: e2, sourceSpan: (r2 ?? this._cursor).getSpan(this._currentTokenStart, this._leadingTriviaCodePoints) };
        return this.tokens.push(n2), this._currentTokenStart = null, this._currentTokenType = null, n2;
      }
      _createError(e2, r2) {
        this._isInExpansionForm() && (e2 += ` (Do you have an unescaped "{" in your template? Use "{{ '{' }}") to escape it.)`);
        let n2 = new gt(e2, this._currentTokenType, r2);
        return this._currentTokenStart = null, this._currentTokenType = null, new Ct(n2);
      }
      handleError(e2) {
        if (e2 instanceof St && (e2 = this._createError(e2.msg, this._cursor.getSpan(e2.cursor))), e2 instanceof Ct) this.errors.push(e2.error);
        else throw e2;
      }
      _attemptCharCode(e2) {
        return this._cursor.peek() === e2 ? (this._cursor.advance(), true) : false;
      }
      _attemptCharCodeCaseInsensitive(e2) {
        return yo(this._cursor.peek(), e2) ? (this._cursor.advance(), true) : false;
      }
      _requireCharCode(e2) {
        let r2 = this._cursor.clone();
        if (!this._attemptCharCode(e2)) throw this._createError(Ue(this._cursor.peek()), this._cursor.getSpan(r2));
      }
      _attemptStr(e2) {
        let r2 = e2.length;
        if (this._cursor.charsLeft() < r2) return false;
        let n2 = this._cursor.clone();
        for (let s2 = 0; s2 < r2; s2++) if (!this._attemptCharCode(e2.charCodeAt(s2))) return this._cursor = n2, false;
        return true;
      }
      _attemptStrCaseInsensitive(e2) {
        for (let r2 = 0; r2 < e2.length; r2++) if (!this._attemptCharCodeCaseInsensitive(e2.charCodeAt(r2))) return false;
        return true;
      }
      _requireStr(e2) {
        let r2 = this._cursor.clone();
        if (!this._attemptStr(e2)) throw this._createError(Ue(this._cursor.peek()), this._cursor.getSpan(r2));
      }
      _requireStrCaseInsensitive(e2) {
        let r2 = this._cursor.clone();
        if (!this._attemptStrCaseInsensitive(e2)) throw this._createError(Ue(this._cursor.peek()), this._cursor.getSpan(r2));
      }
      _attemptCharCodeUntilFn(e2) {
        for (; !e2(this._cursor.peek()); ) this._cursor.advance();
      }
      _requireCharCodeUntilFn(e2, r2) {
        let n2 = this._cursor.clone();
        if (this._attemptCharCodeUntilFn(e2), this._cursor.diff(n2) < r2) throw this._createError(Ue(this._cursor.peek()), this._cursor.getSpan(n2));
      }
      _attemptUntilChar(e2) {
        for (; this._cursor.peek() !== e2; ) this._cursor.advance();
      }
      _readChar() {
        let e2 = String.fromCodePoint(this._cursor.peek());
        return this._cursor.advance(), e2;
      }
      _consumeEntity(e2) {
        this._beginToken(9);
        let r2 = this._cursor.clone();
        if (this._cursor.advance(), this._attemptCharCode(35)) {
          let n2 = this._attemptCharCode(120) || this._attemptCharCode(88), s2 = this._cursor.clone();
          if (this._attemptCharCodeUntilFn(Ao), this._cursor.peek() != 59) {
            this._cursor.advance();
            let a = n2 ? tr.HEX : tr.DEC;
            throw this._createError(_o(a, this._cursor.getChars(r2)), this._cursor.getSpan());
          }
          let i = this._cursor.getChars(s2);
          this._cursor.advance();
          try {
            let a = parseInt(i, n2 ? 16 : 10);
            this._endToken([String.fromCharCode(a), this._cursor.getChars(r2)]);
          } catch {
            throw this._createError(Vs(this._cursor.getChars(r2)), this._cursor.getSpan());
          }
        } else {
          let n2 = this._cursor.clone();
          if (this._attemptCharCodeUntilFn(Do), this._cursor.peek() != 59) this._beginToken(e2, r2), this._cursor = n2, this._endToken(["&"]);
          else {
            let s2 = this._cursor.getChars(n2);
            this._cursor.advance();
            let i = Ve[s2];
            if (!i) throw this._createError(Vs(s2), this._cursor.getSpan(r2));
            this._endToken([i, `&${s2};`]);
          }
        }
      }
      _consumeRawText(e2, r2) {
        this._beginToken(e2 ? 6 : 7);
        let n2 = [];
        for (; ; ) {
          let s2 = this._cursor.clone(), i = r2();
          if (this._cursor = s2, i) break;
          e2 && this._cursor.peek() === 38 ? (this._endToken([this._processCarriageReturns(n2.join(""))]), n2.length = 0, this._consumeEntity(6), this._beginToken(6)) : n2.push(this._readChar());
        }
        this._endToken([this._processCarriageReturns(n2.join(""))]);
      }
      _consumeComment(e2) {
        this._beginToken(10, e2), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("-->")), this._beginToken(11), this._requireStr("-->"), this._endToken([]);
      }
      _consumeBogusComment(e2) {
        this._beginToken(10, e2), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === 62), this._beginToken(11), this._cursor.advance(), this._endToken([]);
      }
      _consumeCdata(e2) {
        this._beginToken(12, e2), this._endToken([]), this._consumeRawText(false, () => this._attemptStr("]]>")), this._beginToken(13), this._requireStr("]]>"), this._endToken([]);
      }
      _consumeDocType(e2) {
        this._beginToken(18, e2), this._endToken([]), this._consumeRawText(false, () => this._cursor.peek() === 62), this._beginToken(19), this._cursor.advance(), this._endToken([]);
      }
      _consumePrefixAndName() {
        let e2 = this._cursor.clone(), r2 = "";
        for (; this._cursor.peek() !== 58 && !Eo(this._cursor.peek()); ) this._cursor.advance();
        let n2;
        this._cursor.peek() === 58 ? (r2 = this._cursor.getChars(e2), this._cursor.advance(), n2 = this._cursor.clone()) : n2 = e2, this._requireCharCodeUntilFn(Us, r2 === "" ? 0 : 1);
        let s2 = this._cursor.getChars(n2);
        return [r2, s2];
      }
      _consumeTagOpen(e2) {
        let r2, n2, s2, i = [];
        try {
          if (!lt(this._cursor.peek())) throw this._createError(Ue(this._cursor.peek()), this._cursor.getSpan(e2));
          for (s2 = this._consumeTagOpenStart(e2), n2 = s2.parts[0], r2 = s2.parts[1], this._attemptCharCodeUntilFn(b); this._cursor.peek() !== 47 && this._cursor.peek() !== 62 && this._cursor.peek() !== 60 && this._cursor.peek() !== 0; ) {
            let [o2, u] = this._consumeAttributeName();
            if (this._attemptCharCodeUntilFn(b), this._attemptCharCode(61)) {
              this._attemptCharCodeUntilFn(b);
              let p = this._consumeAttributeValue();
              i.push({ prefix: o2, name: u, value: p });
            } else i.push({ prefix: o2, name: u });
            this._attemptCharCodeUntilFn(b);
          }
          this._consumeTagOpenEnd();
        } catch (o2) {
          if (o2 instanceof Ct) {
            s2 ? s2.type = 4 : (this._beginToken(5, e2), this._endToken(["<"]));
            return;
          }
          throw o2;
        }
        if (this._canSelfClose && this.tokens[this.tokens.length - 1].type === 2) return;
        let a = this._getTagContentType(r2, n2, this._fullNameStack.length > 0, i);
        this._handleFullNameStackForTagOpen(n2, r2), a === P.RAW_TEXT ? this._consumeRawTextWithTagClose(n2, r2, false) : a === P.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(n2, r2, true);
      }
      _consumeRawTextWithTagClose(e2, r2, n2) {
        this._consumeRawText(n2, () => !this._attemptCharCode(60) || !this._attemptCharCode(47) || (this._attemptCharCodeUntilFn(b), !this._attemptStrCaseInsensitive(e2 ? `${e2}:${r2}` : r2)) ? false : (this._attemptCharCodeUntilFn(b), this._attemptCharCode(62))), this._beginToken(3), this._requireCharCodeUntilFn((s2) => s2 === 62, 3), this._cursor.advance(), this._endToken([e2, r2]), this._handleFullNameStackForTagClose(e2, r2);
      }
      _consumeTagOpenStart(e2) {
        this._beginToken(0, e2);
        let r2 = this._consumePrefixAndName();
        return this._endToken(r2);
      }
      _consumeAttributeName() {
        let e2 = this._cursor.peek();
        if (e2 === 39 || e2 === 34) throw this._createError(Ue(e2), this._cursor.getSpan());
        this._beginToken(14);
        let r2 = this._consumePrefixAndName();
        return this._endToken(r2), r2;
      }
      _consumeAttributeValue() {
        let e2;
        if (this._cursor.peek() === 39 || this._cursor.peek() === 34) {
          let r2 = this._cursor.peek();
          this._consumeQuote(r2);
          let n2 = () => this._cursor.peek() === r2;
          e2 = this._consumeWithInterpolation(16, 17, n2, n2), this._consumeQuote(r2);
        } else {
          let r2 = () => Us(this._cursor.peek());
          e2 = this._consumeWithInterpolation(16, 17, r2, r2);
        }
        return e2;
      }
      _consumeQuote(e2) {
        this._beginToken(15), this._requireCharCode(e2), this._endToken([String.fromCodePoint(e2)]);
      }
      _consumeTagOpenEnd() {
        let e2 = this._attemptCharCode(47) ? 2 : 1;
        this._beginToken(e2), this._requireCharCode(62), this._endToken([]);
      }
      _consumeTagClose(e2) {
        if (this._beginToken(3, e2), this._attemptCharCodeUntilFn(b), this._allowHtmComponentClosingTags && this._attemptCharCode(47)) this._attemptCharCodeUntilFn(b), this._requireCharCode(62), this._endToken([]);
        else {
          let [r2, n2] = this._consumePrefixAndName();
          this._attemptCharCodeUntilFn(b), this._requireCharCode(62), this._endToken([r2, n2]), this._handleFullNameStackForTagClose(r2, n2);
        }
      }
      _consumeExpansionFormStart() {
        this._beginToken(20), this._requireCharCode(123), this._endToken([]), this._expansionCaseStack.push(20), this._beginToken(7);
        let e2 = this._readUntil(44), r2 = this._processCarriageReturns(e2);
        if (this._i18nNormalizeLineEndingsInICUs) this._endToken([r2]);
        else {
          let s2 = this._endToken([e2]);
          r2 !== e2 && this.nonNormalizedIcuExpressions.push(s2);
        }
        this._requireCharCode(44), this._attemptCharCodeUntilFn(b), this._beginToken(7);
        let n2 = this._readUntil(44);
        this._endToken([n2]), this._requireCharCode(44), this._attemptCharCodeUntilFn(b);
      }
      _consumeExpansionCaseStart() {
        this._beginToken(21);
        let e2 = this._readUntil(123).trim();
        this._endToken([e2]), this._attemptCharCodeUntilFn(b), this._beginToken(22), this._requireCharCode(123), this._endToken([]), this._attemptCharCodeUntilFn(b), this._expansionCaseStack.push(22);
      }
      _consumeExpansionCaseEnd() {
        this._beginToken(23), this._requireCharCode(125), this._endToken([]), this._attemptCharCodeUntilFn(b), this._expansionCaseStack.pop();
      }
      _consumeExpansionFormEnd() {
        this._beginToken(24), this._requireCharCode(125), this._endToken([]), this._expansionCaseStack.pop();
      }
      _consumeWithInterpolation(e2, r2, n2, s2) {
        this._beginToken(e2);
        let i = [];
        for (; !n2(); ) {
          let o2 = this._cursor.clone();
          this._interpolationConfig && this._attemptStr(this._interpolationConfig.start) ? (this._endToken([this._processCarriageReturns(i.join(""))], o2), i.length = 0, this._consumeInterpolation(r2, o2, s2), this._beginToken(e2)) : this._cursor.peek() === 38 ? (this._endToken([this._processCarriageReturns(i.join(""))]), i.length = 0, this._consumeEntity(e2), this._beginToken(e2)) : i.push(this._readChar());
        }
        this._inInterpolation = false;
        let a = this._processCarriageReturns(i.join(""));
        return this._endToken([a]), a;
      }
      _consumeInterpolation(e2, r2, n2) {
        let s2 = [];
        this._beginToken(e2, r2), s2.push(this._interpolationConfig.start);
        let i = this._cursor.clone(), a = null, o2 = false;
        for (; this._cursor.peek() !== 0 && (n2 === null || !n2()); ) {
          let u = this._cursor.clone();
          if (this._isTagStart()) {
            this._cursor = u, s2.push(this._getProcessedChars(i, u)), this._endToken(s2);
            return;
          }
          if (a === null) if (this._attemptStr(this._interpolationConfig.end)) {
            s2.push(this._getProcessedChars(i, u)), s2.push(this._interpolationConfig.end), this._endToken(s2);
            return;
          } else this._attemptStr("//") && (o2 = true);
          let p = this._cursor.peek();
          this._cursor.advance(), p === 92 ? this._cursor.advance() : p === a ? a = null : !o2 && a === null && $t(p) && (a = p);
        }
        s2.push(this._getProcessedChars(i, this._cursor)), this._endToken(s2);
      }
      _getProcessedChars(e2, r2) {
        return this._processCarriageReturns(r2.getChars(e2));
      }
      _isTextEnd() {
        return !!(this._isTagStart() || this._cursor.peek() === 0 || this._tokenizeIcu && !this._inInterpolation && (this.isExpansionFormStart() || this._cursor.peek() === 125 && this._isInExpansionCase()) || this._tokenizeBlocks && !this._inInterpolation && !this._isInExpansion() && (this._isBlockStart() || this._cursor.peek() === 64 || this._cursor.peek() === 125));
      }
      _isTagStart() {
        if (this._cursor.peek() === 60) {
          let e2 = this._cursor.clone();
          e2.advance();
          let r2 = e2.peek();
          if (97 <= r2 && r2 <= 122 || 65 <= r2 && r2 <= 90 || r2 === 47 || r2 === 33) return true;
        }
        return false;
      }
      _isBlockStart() {
        if (this._tokenizeBlocks && this._cursor.peek() === 64) {
          let e2 = this._cursor.clone();
          if (e2.advance(), zs(e2.peek())) return true;
        }
        return false;
      }
      _readUntil(e2) {
        let r2 = this._cursor.clone();
        return this._attemptUntilChar(e2), this._cursor.getChars(r2);
      }
      _isInExpansion() {
        return this._isInExpansionCase() || this._isInExpansionForm();
      }
      _isInExpansionCase() {
        return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === 22;
      }
      _isInExpansionForm() {
        return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === 20;
      }
      isExpansionFormStart() {
        if (this._cursor.peek() !== 123) return false;
        if (this._interpolationConfig) {
          let e2 = this._cursor.clone(), r2 = this._attemptStr(this._interpolationConfig.start);
          return this._cursor = e2, !r2;
        }
        return true;
      }
      _handleFullNameStackForTagOpen(e2, r2) {
        let n2 = qe(e2, r2);
        (this._fullNameStack.length === 0 || this._fullNameStack[this._fullNameStack.length - 1] === n2) && this._fullNameStack.push(n2);
      }
      _handleFullNameStackForTagClose(e2, r2) {
        let n2 = qe(e2, r2);
        this._fullNameStack.length !== 0 && this._fullNameStack[this._fullNameStack.length - 1] === n2 && this._fullNameStack.pop();
      }
    };
    rr = class t4 {
      constructor(e2, r2) {
        if (e2 instanceof t4) {
          this.file = e2.file, this.input = e2.input, this.end = e2.end;
          let n2 = e2.state;
          this.state = { peek: n2.peek, offset: n2.offset, line: n2.line, column: n2.column };
        } else {
          if (!r2) throw new Error("Programming error: the range argument must be provided with a file argument.");
          this.file = e2, this.input = e2.content, this.end = r2.endPos, this.state = { peek: -1, offset: r2.startPos, line: r2.startLine, column: r2.startCol };
        }
      }
      clone() {
        return new t4(this);
      }
      peek() {
        return this.state.peek;
      }
      charsLeft() {
        return this.end - this.state.offset;
      }
      diff(e2) {
        return this.state.offset - e2.state.offset;
      }
      advance() {
        this.advanceState(this.state);
      }
      init() {
        this.updatePeek(this.state);
      }
      getSpan(e2, r2) {
        e2 = e2 || this;
        let n2 = e2;
        if (r2) for (; this.diff(e2) > 0 && r2.indexOf(e2.peek()) !== -1; ) n2 === e2 && (e2 = e2.clone()), e2.advance();
        let s2 = this.locationFromCursor(e2), i = this.locationFromCursor(this), a = n2 !== e2 ? this.locationFromCursor(n2) : s2;
        return new h(s2, i, a);
      }
      getChars(e2) {
        return this.input.substring(e2.state.offset, this.state.offset);
      }
      charAt(e2) {
        return this.input.charCodeAt(e2);
      }
      advanceState(e2) {
        if (e2.offset >= this.end) throw this.state = e2, new St('Unexpected character "EOF"', this);
        let r2 = this.charAt(e2.offset);
        r2 === 10 ? (e2.line++, e2.column = 0) : Rt(r2) || e2.column++, e2.offset++, this.updatePeek(e2);
      }
      updatePeek(e2) {
        e2.peek = e2.offset >= this.end ? 0 : this.charAt(e2.offset);
      }
      locationFromCursor(e2) {
        return new ie(e2.file, e2.state.offset, e2.state.line, e2.state.column);
      }
    };
    Wr = class t5 extends rr {
      constructor(e2, r2) {
        e2 instanceof t5 ? (super(e2), this.internalState = { ...e2.internalState }) : (super(e2, r2), this.internalState = this.state);
      }
      advance() {
        this.state = this.internalState, super.advance(), this.processEscapeSequence();
      }
      init() {
        super.init(), this.processEscapeSequence();
      }
      clone() {
        return new t5(this);
      }
      getChars(e2) {
        let r2 = e2.clone(), n2 = "";
        for (; r2.internalState.offset < this.internalState.offset; ) n2 += String.fromCodePoint(r2.peek()), r2.advance();
        return n2;
      }
      processEscapeSequence() {
        let e2 = () => this.internalState.peek;
        if (e2() === 92) if (this.internalState = { ...this.state }, this.advanceState(this.internalState), e2() === 110) this.state.peek = 10;
        else if (e2() === 114) this.state.peek = 13;
        else if (e2() === 118) this.state.peek = 11;
        else if (e2() === 116) this.state.peek = 9;
        else if (e2() === 98) this.state.peek = 8;
        else if (e2() === 102) this.state.peek = 12;
        else if (e2() === 117) if (this.advanceState(this.internalState), e2() === 123) {
          this.advanceState(this.internalState);
          let r2 = this.clone(), n2 = 0;
          for (; e2() !== 125; ) this.advanceState(this.internalState), n2++;
          this.state.peek = this.decodeHexDigits(r2, n2);
        } else {
          let r2 = this.clone();
          this.advanceState(this.internalState), this.advanceState(this.internalState), this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(r2, 4);
        }
        else if (e2() === 120) {
          this.advanceState(this.internalState);
          let r2 = this.clone();
          this.advanceState(this.internalState), this.state.peek = this.decodeHexDigits(r2, 2);
        } else if (kr(e2())) {
          let r2 = "", n2 = 0, s2 = this.clone();
          for (; kr(e2()) && n2 < 3; ) s2 = this.clone(), r2 += String.fromCodePoint(e2()), this.advanceState(this.internalState), n2++;
          this.state.peek = parseInt(r2, 8), this.internalState = s2.internalState;
        } else Rt(this.internalState.peek) ? (this.advanceState(this.internalState), this.state = this.internalState) : this.state.peek = this.internalState.peek;
      }
      decodeHexDigits(e2, r2) {
        let n2 = this.input.slice(e2.internalState.offset, e2.internalState.offset + r2), s2 = parseInt(n2, 16);
        if (isNaN(s2)) throw e2.state = e2.internalState, new St("Invalid hexadecimal escape sequence", e2);
        return s2;
      }
    };
    St = class {
      constructor(e2, r2) {
        this.msg = e2, this.cursor = r2;
      }
    };
    L = class t6 extends Oe {
      static create(e2, r2, n2) {
        return new t6(e2, r2, n2);
      }
      constructor(e2, r2, n2) {
        super(r2, n2), this.elementName = e2;
      }
    };
    Yr = class {
      constructor(e2, r2) {
        this.rootNodes = e2, this.errors = r2;
      }
    };
    nr = class {
      constructor(e2) {
        this.getTagDefinition = e2;
      }
      parse(e2, r2, n2, s2 = false, i) {
        let a = (D) => (I3, ...F) => D(I3.toLowerCase(), ...F), o2 = s2 ? this.getTagDefinition : a(this.getTagDefinition), u = (D) => o2(D).getContentType(), p = s2 ? i : a(i), f = Qs(e2, r2, i ? (D, I3, F, c2) => {
          let g = p(D, I3, F, c2);
          return g !== void 0 ? g : u(D);
        } : u, n2), d = n2 && n2.canSelfClose || false, C = n2 && n2.allowHtmComponentClosingTags || false, A2 = new jr(f.tokens, o2, d, C, s2);
        return A2.build(), new Yr(A2.rootNodes, f.errors.concat(A2.errors));
      }
    };
    jr = class t7 {
      constructor(e2, r2, n2, s2, i) {
        this.tokens = e2, this.getTagDefinition = r2, this.canSelfClose = n2, this.allowHtmComponentClosingTags = s2, this.isTagNameCaseSensitive = i, this._index = -1, this._containerStack = [], this.rootNodes = [], this.errors = [], this._advance();
      }
      build() {
        for (; this._peek.type !== 34; ) this._peek.type === 0 || this._peek.type === 4 ? this._consumeStartTag(this._advance()) : this._peek.type === 3 ? (this._closeVoidElement(), this._consumeEndTag(this._advance())) : this._peek.type === 12 ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === 10 ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === 5 || this._peek.type === 7 || this._peek.type === 6 ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === 20 ? this._consumeExpansion(this._advance()) : this._peek.type === 25 ? (this._closeVoidElement(), this._consumeBlockOpen(this._advance())) : this._peek.type === 27 ? (this._closeVoidElement(), this._consumeBlockClose(this._advance())) : this._peek.type === 29 ? (this._closeVoidElement(), this._consumeIncompleteBlock(this._advance())) : this._peek.type === 30 ? (this._closeVoidElement(), this._consumeLet(this._advance())) : this._peek.type === 18 ? this._consumeDocType(this._advance()) : this._peek.type === 33 ? (this._closeVoidElement(), this._consumeIncompleteLet(this._advance())) : this._advance();
        for (let e2 of this._containerStack) e2 instanceof te && this.errors.push(L.create(e2.name, e2.sourceSpan, `Unclosed block "${e2.name}"`));
      }
      _advance() {
        let e2 = this._peek;
        return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], e2;
      }
      _advanceIf(e2) {
        return this._peek.type === e2 ? this._advance() : null;
      }
      _consumeCdata(e2) {
        let r2 = this._advance(), n2 = this._getText(r2), s2 = this._advanceIf(13);
        this._addToParent(new Wt(n2, new h(e2.sourceSpan.start, (s2 || r2).sourceSpan.end), [r2]));
      }
      _consumeComment(e2) {
        let r2 = this._advanceIf(7), n2 = this._advanceIf(11), s2 = r2 != null ? r2.parts[0].trim() : null, i = n2 == null ? e2.sourceSpan : new h(e2.sourceSpan.start, n2.sourceSpan.end, e2.sourceSpan.fullStart);
        this._addToParent(new jt(s2, i));
      }
      _consumeDocType(e2) {
        let r2 = this._advanceIf(7), n2 = this._advanceIf(19), s2 = r2 != null ? r2.parts[0].trim() : null, i = new h(e2.sourceSpan.start, (n2 || r2 || e2).sourceSpan.end);
        this._addToParent(new Kt(s2, i));
      }
      _consumeExpansion(e2) {
        let r2 = this._advance(), n2 = this._advance(), s2 = [];
        for (; this._peek.type === 21; ) {
          let a = this._parseExpansionCase();
          if (!a) return;
          s2.push(a);
        }
        if (this._peek.type !== 24) {
          this.errors.push(L.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."));
          return;
        }
        let i = new h(e2.sourceSpan.start, this._peek.sourceSpan.end, e2.sourceSpan.fullStart);
        this._addToParent(new zt(r2.parts[0], n2.parts[0], s2, i, r2.sourceSpan)), this._advance();
      }
      _parseExpansionCase() {
        let e2 = this._advance();
        if (this._peek.type !== 22) return this.errors.push(L.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
        let r2 = this._advance(), n2 = this._collectExpansionExpTokens(r2);
        if (!n2) return null;
        let s2 = this._advance();
        n2.push({ type: 34, parts: [], sourceSpan: s2.sourceSpan });
        let i = new t7(n2, this.getTagDefinition, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive);
        if (i.build(), i.errors.length > 0) return this.errors = this.errors.concat(i.errors), null;
        let a = new h(e2.sourceSpan.start, s2.sourceSpan.end, e2.sourceSpan.fullStart), o2 = new h(r2.sourceSpan.start, s2.sourceSpan.end, r2.sourceSpan.fullStart);
        return new Gt(e2.parts[0], i.rootNodes, a, e2.sourceSpan, o2);
      }
      _collectExpansionExpTokens(e2) {
        let r2 = [], n2 = [22];
        for (; ; ) {
          if ((this._peek.type === 20 || this._peek.type === 22) && n2.push(this._peek.type), this._peek.type === 23) if (Xs(n2, 22)) {
            if (n2.pop(), n2.length === 0) return r2;
          } else return this.errors.push(L.create(null, e2.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
          if (this._peek.type === 24) if (Xs(n2, 20)) n2.pop();
          else return this.errors.push(L.create(null, e2.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
          if (this._peek.type === 34) return this.errors.push(L.create(null, e2.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
          r2.push(this._advance());
        }
      }
      _getText(e2) {
        let r2 = e2.parts[0];
        if (r2.length > 0 && r2[0] == `
`) {
          let n2 = this._getClosestParentElement();
          n2 != null && n2.children.length == 0 && this.getTagDefinition(n2.name).ignoreFirstLf && (r2 = r2.substring(1));
        }
        return r2;
      }
      _consumeText(e2) {
        let r2 = [e2], n2 = e2.sourceSpan, s2 = e2.parts[0];
        if (s2.length > 0 && s2[0] === `
`) {
          let i = this._getContainer();
          i != null && i.children.length === 0 && this.getTagDefinition(i.name).ignoreFirstLf && (s2 = s2.substring(1), r2[0] = { type: e2.type, sourceSpan: e2.sourceSpan, parts: [s2] });
        }
        for (; this._peek.type === 8 || this._peek.type === 5 || this._peek.type === 9; ) e2 = this._advance(), r2.push(e2), e2.type === 8 ? s2 += e2.parts.join("").replace(/&([^;]+);/g, Js) : e2.type === 9 ? s2 += e2.parts[0] : s2 += e2.parts.join("");
        if (s2.length > 0) {
          let i = e2.sourceSpan;
          this._addToParent(new Ut(s2, new h(n2.start, i.end, n2.fullStart, n2.details), r2));
        }
      }
      _closeVoidElement() {
        let e2 = this._getContainer();
        e2 instanceof Y && this.getTagDefinition(e2.name).isVoid && this._containerStack.pop();
      }
      _consumeStartTag(e2) {
        let [r2, n2] = e2.parts, s2 = [];
        for (; this._peek.type === 14; ) s2.push(this._consumeAttr(this._advance()));
        let i = this._getElementFullName(r2, n2, this._getClosestParentElement()), a = false;
        if (this._peek.type === 2) {
          this._advance(), a = true;
          let C = this.getTagDefinition(i);
          this.canSelfClose || C.canSelfClose || Me(i) !== null || C.isVoid || this.errors.push(L.create(i, e2.sourceSpan, `Only void, custom and foreign elements can be self closed "${e2.parts[1]}"`));
        } else this._peek.type === 1 && (this._advance(), a = false);
        let o2 = this._peek.sourceSpan.fullStart, u = new h(e2.sourceSpan.start, o2, e2.sourceSpan.fullStart), p = new h(e2.sourceSpan.start, o2, e2.sourceSpan.fullStart), l2 = new h(e2.sourceSpan.start.moveBy(1), e2.sourceSpan.end), f = new Y(i, s2, [], u, p, void 0, l2), d = this._getContainer();
        this._pushContainer(f, d instanceof Y && this.getTagDefinition(d.name).isClosedByChild(f.name)), a ? this._popContainer(i, Y, u) : e2.type === 4 && (this._popContainer(i, Y, null), this.errors.push(L.create(i, u, `Opening tag "${i}" not terminated.`)));
      }
      _pushContainer(e2, r2) {
        r2 && this._containerStack.pop(), this._addToParent(e2), this._containerStack.push(e2);
      }
      _consumeEndTag(e2) {
        let r2 = this.allowHtmComponentClosingTags && e2.parts.length === 0 ? null : this._getElementFullName(e2.parts[0], e2.parts[1], this._getClosestParentElement());
        if (r2 && this.getTagDefinition(r2).isVoid) this.errors.push(L.create(r2, e2.sourceSpan, `Void elements do not have end tags "${e2.parts[1]}"`));
        else if (!this._popContainer(r2, Y, e2.sourceSpan)) {
          let n2 = `Unexpected closing tag "${r2}". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags`;
          this.errors.push(L.create(r2, e2.sourceSpan, n2));
        }
      }
      _popContainer(e2, r2, n2) {
        let s2 = false;
        for (let i = this._containerStack.length - 1; i >= 0; i--) {
          let a = this._containerStack[i];
          if (Me(a.name) ? a.name === e2 : (e2 == null || a.name.toLowerCase() === e2.toLowerCase()) && a instanceof r2) return a.endSourceSpan = n2, a.sourceSpan.end = n2 !== null ? n2.end : a.sourceSpan.end, this._containerStack.splice(i, this._containerStack.length - i), !s2;
          (a instanceof te || a instanceof Y && !this.getTagDefinition(a.name).closedByParent) && (s2 = true);
        }
        return false;
      }
      _consumeAttr(e2) {
        let r2 = qe(e2.parts[0], e2.parts[1]), n2 = e2.sourceSpan.end, s2;
        this._peek.type === 15 && (s2 = this._advance());
        let i = "", a = [], o2, u;
        if (this._peek.type === 16) for (o2 = this._peek.sourceSpan, u = this._peek.sourceSpan.end; this._peek.type === 16 || this._peek.type === 17 || this._peek.type === 9; ) {
          let f = this._advance();
          a.push(f), f.type === 17 ? i += f.parts.join("").replace(/&([^;]+);/g, Js) : f.type === 9 ? i += f.parts[0] : i += f.parts.join(""), u = n2 = f.sourceSpan.end;
        }
        this._peek.type === 15 && (u = n2 = this._advance().sourceSpan.end);
        let l2 = o2 && u && new h((s2 == null ? void 0 : s2.sourceSpan.start) ?? o2.start, u, (s2 == null ? void 0 : s2.sourceSpan.fullStart) ?? o2.fullStart);
        return new Yt(r2, i, new h(e2.sourceSpan.start, n2, e2.sourceSpan.fullStart), e2.sourceSpan, l2, a.length > 0 ? a : void 0, void 0);
      }
      _consumeBlockOpen(e2) {
        let r2 = [];
        for (; this._peek.type === 28; ) {
          let o2 = this._advance();
          r2.push(new ht(o2.parts[0], o2.sourceSpan));
        }
        this._peek.type === 26 && this._advance();
        let n2 = this._peek.sourceSpan.fullStart, s2 = new h(e2.sourceSpan.start, n2, e2.sourceSpan.fullStart), i = new h(e2.sourceSpan.start, n2, e2.sourceSpan.fullStart), a = new te(e2.parts[0], r2, [], s2, e2.sourceSpan, i);
        this._pushContainer(a, false);
      }
      _consumeBlockClose(e2) {
        this._popContainer(null, te, e2.sourceSpan) || this.errors.push(L.create(null, e2.sourceSpan, 'Unexpected closing block. The block may have been closed earlier. If you meant to write the } character, you should use the "&#125;" HTML entity instead.'));
      }
      _consumeIncompleteBlock(e2) {
        let r2 = [];
        for (; this._peek.type === 28; ) {
          let o2 = this._advance();
          r2.push(new ht(o2.parts[0], o2.sourceSpan));
        }
        let n2 = this._peek.sourceSpan.fullStart, s2 = new h(e2.sourceSpan.start, n2, e2.sourceSpan.fullStart), i = new h(e2.sourceSpan.start, n2, e2.sourceSpan.fullStart), a = new te(e2.parts[0], r2, [], s2, e2.sourceSpan, i);
        this._pushContainer(a, false), this._popContainer(null, te, null), this.errors.push(L.create(e2.parts[0], s2, `Incomplete block "${e2.parts[0]}". If you meant to write the @ character, you should use the "&#64;" HTML entity instead.`));
      }
      _consumeLet(e2) {
        let r2 = e2.parts[0], n2, s2;
        if (this._peek.type !== 31) {
          this.errors.push(L.create(e2.parts[0], e2.sourceSpan, `Invalid @let declaration "${r2}". Declaration must have a value.`));
          return;
        } else n2 = this._advance();
        if (this._peek.type !== 32) {
          this.errors.push(L.create(e2.parts[0], e2.sourceSpan, `Unterminated @let declaration "${r2}". Declaration must be terminated with a semicolon.`));
          return;
        } else s2 = this._advance();
        let i = s2.sourceSpan.fullStart, a = new h(e2.sourceSpan.start, i, e2.sourceSpan.fullStart), o2 = e2.sourceSpan.toString().lastIndexOf(r2), u = e2.sourceSpan.start.moveBy(o2), p = new h(u, e2.sourceSpan.end), l2 = new ft(r2, n2.parts[0], a, p, n2.sourceSpan);
        this._addToParent(l2);
      }
      _consumeIncompleteLet(e2) {
        let r2 = e2.parts[0] ?? "", n2 = r2 ? ` "${r2}"` : "";
        if (r2.length > 0) {
          let s2 = e2.sourceSpan.toString().lastIndexOf(r2), i = e2.sourceSpan.start.moveBy(s2), a = new h(i, e2.sourceSpan.end), o2 = new h(e2.sourceSpan.start, e2.sourceSpan.start.moveBy(0)), u = new ft(r2, "", e2.sourceSpan, a, o2);
          this._addToParent(u);
        }
        this.errors.push(L.create(e2.parts[0], e2.sourceSpan, `Incomplete @let declaration${n2}. @let declarations must be written as \`@let <name> = <value>;\``));
      }
      _getContainer() {
        return this._containerStack.length > 0 ? this._containerStack[this._containerStack.length - 1] : null;
      }
      _getClosestParentElement() {
        for (let e2 = this._containerStack.length - 1; e2 > -1; e2--) if (this._containerStack[e2] instanceof Y) return this._containerStack[e2];
        return null;
      }
      _addToParent(e2) {
        let r2 = this._getContainer();
        r2 === null ? this.rootNodes.push(e2) : r2.children.push(e2);
      }
      _getElementFullName(e2, r2, n2) {
        if (e2 === "" && (e2 = this.getTagDefinition(r2).implicitNamespacePrefix || "", e2 === "" && n2 != null)) {
          let s2 = ct(n2.name)[1];
          this.getTagDefinition(s2).preventNamespaceInheritance || (e2 = Me(n2.name));
        }
        return qe(e2, r2);
      }
    };
    sr = class extends nr {
      constructor() {
        super(He);
      }
      parse(e2, r2, n2, s2 = false, i) {
        return super.parse(e2, r2, n2, s2, i);
      }
    };
    Kr = null;
    bo = () => (Kr || (Kr = new sr()), Kr);
    Zs = To;
    _t = 3;
    ei = ko;
    ir = { attrs: true, children: true, cases: true, expression: true };
    ti = /* @__PURE__ */ new Set(["parent"]);
    ze = class ze2 {
      constructor(e2 = {}) {
        Et(this, le);
        lr(this, "type");
        lr(this, "parent");
        for (let r2 of /* @__PURE__ */ new Set([...ti, ...Object.keys(e2)])) this.setProperty(r2, e2[r2]);
      }
      setProperty(e2, r2) {
        if (this[e2] !== r2) {
          if (e2 in ir && (r2 = r2.map((n2) => this.createChild(n2))), !ti.has(e2)) {
            this[e2] = r2;
            return;
          }
          Object.defineProperty(this, e2, { value: r2, enumerable: false, configurable: true });
        }
      }
      map(e2) {
        let r2;
        for (let n2 in ir) {
          let s2 = this[n2];
          if (s2) {
            let i = Bo(s2, (a) => a.map(e2));
            r2 !== s2 && (r2 || (r2 = new ze2({ parent: this.parent })), r2.setProperty(n2, i));
          }
        }
        if (r2) for (let n2 in this) n2 in ir || (r2[n2] = this[n2]);
        return e2(r2 || this);
      }
      walk(e2) {
        for (let r2 in ir) {
          let n2 = this[r2];
          if (n2) for (let s2 = 0; s2 < n2.length; s2++) n2[s2].walk(e2);
        }
        e2(this);
      }
      createChild(e2) {
        let r2 = e2 instanceof ze2 ? e2.clone() : new ze2(e2);
        return r2.setProperty("parent", this), r2;
      }
      insertChildBefore(e2, r2) {
        let n2 = this.$children;
        n2.splice(n2.indexOf(e2), 0, this.createChild(r2));
      }
      removeChild(e2) {
        let r2 = this.$children;
        r2.splice(r2.indexOf(e2), 1);
      }
      replaceChild(e2, r2) {
        let n2 = this.$children;
        n2[n2.indexOf(e2)] = this.createChild(r2);
      }
      clone() {
        return new ze2(this);
      }
      get $children() {
        return this[R(this, le, Xr)];
      }
      set $children(e2) {
        this[R(this, le, Xr)] = e2;
      }
      get firstChild() {
        var e2;
        return (e2 = this.$children) == null ? void 0 : e2[0];
      }
      get lastChild() {
        return K(true, this.$children, -1);
      }
      get prev() {
        let e2 = R(this, le, Jr);
        return e2[e2.indexOf(this) - 1];
      }
      get next() {
        let e2 = R(this, le, Jr);
        return e2[e2.indexOf(this) + 1];
      }
      get rawName() {
        return this.hasExplicitNamespace ? this.fullName : this.name;
      }
      get fullName() {
        return this.namespace ? this.namespace + ":" + this.name : this.name;
      }
      get attrMap() {
        return Object.fromEntries(this.attrs.map((e2) => [e2.fullName, e2.value]));
      }
    };
    le = /* @__PURE__ */ new WeakSet(), Xr = function() {
      return this.type === "angularIcuCase" ? "expression" : this.type === "angularIcuExpression" ? "cases" : "children";
    }, Jr = function() {
      var e2;
      return ((e2 = this.parent) == null ? void 0 : e2.$children) ?? [];
    };
    ar = ze;
    Lo = [{ regex: /^(\[if([^\]]*)\]>)(.*?)<!\s*\[endif\]$/su, parse: Fo }, { regex: /^\[if([^\]]*)\]><!$/u, parse: No }, { regex: /^<!\s*\[endif\]$/u, parse: Po }];
    or = /* @__PURE__ */ new Map([["*", /* @__PURE__ */ new Set(["accesskey", "autocapitalize", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inert", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "popover", "slot", "spellcheck", "style", "tabindex", "title", "translate", "writingsuggestions"])], ["a", /* @__PURE__ */ new Set(["charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "target", "type"])], ["applet", /* @__PURE__ */ new Set(["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"])], ["area", /* @__PURE__ */ new Set(["alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "target", "type"])], ["audio", /* @__PURE__ */ new Set(["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"])], ["base", /* @__PURE__ */ new Set(["href", "target"])], ["basefont", /* @__PURE__ */ new Set(["color", "face", "size"])], ["blockquote", /* @__PURE__ */ new Set(["cite"])], ["body", /* @__PURE__ */ new Set(["alink", "background", "bgcolor", "link", "text", "vlink"])], ["br", /* @__PURE__ */ new Set(["clear"])], ["button", /* @__PURE__ */ new Set(["disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "popovertarget", "popovertargetaction", "type", "value"])], ["canvas", /* @__PURE__ */ new Set(["height", "width"])], ["caption", /* @__PURE__ */ new Set(["align"])], ["col", /* @__PURE__ */ new Set(["align", "char", "charoff", "span", "valign", "width"])], ["colgroup", /* @__PURE__ */ new Set(["align", "char", "charoff", "span", "valign", "width"])], ["data", /* @__PURE__ */ new Set(["value"])], ["del", /* @__PURE__ */ new Set(["cite", "datetime"])], ["details", /* @__PURE__ */ new Set(["name", "open"])], ["dialog", /* @__PURE__ */ new Set(["open"])], ["dir", /* @__PURE__ */ new Set(["compact"])], ["div", /* @__PURE__ */ new Set(["align"])], ["dl", /* @__PURE__ */ new Set(["compact"])], ["embed", /* @__PURE__ */ new Set(["height", "src", "type", "width"])], ["fieldset", /* @__PURE__ */ new Set(["disabled", "form", "name"])], ["font", /* @__PURE__ */ new Set(["color", "face", "size"])], ["form", /* @__PURE__ */ new Set(["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"])], ["frame", /* @__PURE__ */ new Set(["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"])], ["frameset", /* @__PURE__ */ new Set(["cols", "rows"])], ["h1", /* @__PURE__ */ new Set(["align"])], ["h2", /* @__PURE__ */ new Set(["align"])], ["h3", /* @__PURE__ */ new Set(["align"])], ["h4", /* @__PURE__ */ new Set(["align"])], ["h5", /* @__PURE__ */ new Set(["align"])], ["h6", /* @__PURE__ */ new Set(["align"])], ["head", /* @__PURE__ */ new Set(["profile"])], ["hr", /* @__PURE__ */ new Set(["align", "noshade", "size", "width"])], ["html", /* @__PURE__ */ new Set(["manifest", "version"])], ["iframe", /* @__PURE__ */ new Set(["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"])], ["img", /* @__PURE__ */ new Set(["align", "alt", "border", "crossorigin", "decoding", "fetchpriority", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"])], ["input", /* @__PURE__ */ new Set(["accept", "align", "alt", "autocomplete", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "popovertarget", "popovertargetaction", "readonly", "required", "size", "src", "step", "type", "usemap", "value", "width"])], ["ins", /* @__PURE__ */ new Set(["cite", "datetime"])], ["isindex", /* @__PURE__ */ new Set(["prompt"])], ["label", /* @__PURE__ */ new Set(["for", "form"])], ["legend", /* @__PURE__ */ new Set(["align"])], ["li", /* @__PURE__ */ new Set(["type", "value"])], ["link", /* @__PURE__ */ new Set(["as", "blocking", "charset", "color", "crossorigin", "disabled", "fetchpriority", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "referrerpolicy", "rel", "rev", "sizes", "target", "type"])], ["map", /* @__PURE__ */ new Set(["name"])], ["menu", /* @__PURE__ */ new Set(["compact"])], ["meta", /* @__PURE__ */ new Set(["charset", "content", "http-equiv", "media", "name", "scheme"])], ["meter", /* @__PURE__ */ new Set(["high", "low", "max", "min", "optimum", "value"])], ["object", /* @__PURE__ */ new Set(["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "type", "typemustmatch", "usemap", "vspace", "width"])], ["ol", /* @__PURE__ */ new Set(["compact", "reversed", "start", "type"])], ["optgroup", /* @__PURE__ */ new Set(["disabled", "label"])], ["option", /* @__PURE__ */ new Set(["disabled", "label", "selected", "value"])], ["output", /* @__PURE__ */ new Set(["for", "form", "name"])], ["p", /* @__PURE__ */ new Set(["align"])], ["param", /* @__PURE__ */ new Set(["name", "type", "value", "valuetype"])], ["pre", /* @__PURE__ */ new Set(["width"])], ["progress", /* @__PURE__ */ new Set(["max", "value"])], ["q", /* @__PURE__ */ new Set(["cite"])], ["script", /* @__PURE__ */ new Set(["async", "blocking", "charset", "crossorigin", "defer", "fetchpriority", "integrity", "language", "nomodule", "referrerpolicy", "src", "type"])], ["select", /* @__PURE__ */ new Set(["autocomplete", "disabled", "form", "multiple", "name", "required", "size"])], ["slot", /* @__PURE__ */ new Set(["name"])], ["source", /* @__PURE__ */ new Set(["height", "media", "sizes", "src", "srcset", "type", "width"])], ["style", /* @__PURE__ */ new Set(["blocking", "media", "type"])], ["table", /* @__PURE__ */ new Set(["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"])], ["tbody", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["td", /* @__PURE__ */ new Set(["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"])], ["template", /* @__PURE__ */ new Set(["shadowrootclonable", "shadowrootdelegatesfocus", "shadowrootmode"])], ["textarea", /* @__PURE__ */ new Set(["autocomplete", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "wrap"])], ["tfoot", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["th", /* @__PURE__ */ new Set(["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"])], ["thead", /* @__PURE__ */ new Set(["align", "char", "charoff", "valign"])], ["time", /* @__PURE__ */ new Set(["datetime"])], ["tr", /* @__PURE__ */ new Set(["align", "bgcolor", "char", "charoff", "valign"])], ["track", /* @__PURE__ */ new Set(["default", "kind", "label", "src", "srclang"])], ["ul", /* @__PURE__ */ new Set(["compact", "type"])], ["video", /* @__PURE__ */ new Set(["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"])]]);
    ni = /* @__PURE__ */ new Set(["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "search", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"]);
    oi = { name: "html", normalizeTagName: true, normalizeAttributeName: true, allowHtmComponentClosingTags: true };
    Mo = ur(oi);
    qo = ur({ name: "angular" });
    Ho = ur({ name: "vue", isTagNameCaseSensitive: true, shouldParseAsRawText(t8, e2, r2, n2) {
      return t8.toLowerCase() !== "html" && !r2 && (t8 !== "template" || n2.some(({ name: s2, value: i }) => s2 === "lang" && i !== "html" && i !== "" && i !== void 0));
    } });
    Vo = ur({ name: "lwc", canSelfClose: false });
    Uo = { html: Ts };
    Gh = en;
  }
});

// node_modules/prettier/standalone.mjs
function U() {
}
function mr2(e2, t8, r2, n2, u) {
  for (var i = [], o2; t8; ) i.push(t8), o2 = t8.previousComponent, delete t8.previousComponent, t8 = o2;
  i.reverse();
  for (var s2 = 0, a = i.length, D = 0, l2 = 0; s2 < a; s2++) {
    var p = i[s2];
    if (p.removed) p.value = e2.join(n2.slice(l2, l2 + p.count)), l2 += p.count;
    else {
      if (!p.added && u) {
        var f = r2.slice(D, D + p.count);
        f = f.map(function(d, c2) {
          var F = n2[l2 + c2];
          return F.length > d.length ? F : d;
        }), p.value = e2.join(f);
      } else p.value = e2.join(r2.slice(D, D + p.count));
      D += p.count, p.added || (l2 += p.count);
    }
  }
  return i;
}
function hr2(e2, t8) {
  var r2;
  for (r2 = 0; r2 < e2.length && r2 < t8.length; r2++) if (e2[r2] != t8[r2]) return e2.slice(0, r2);
  return e2.slice(0, r2);
}
function Er2(e2, t8) {
  var r2;
  if (!e2 || !t8 || e2[e2.length - 1] != t8[t8.length - 1]) return "";
  for (r2 = 0; r2 < e2.length && r2 < t8.length; r2++) if (e2[e2.length - (r2 + 1)] != t8[t8.length - (r2 + 1)]) return e2.slice(-r2);
  return e2.slice(-r2);
}
function Bt2(e2, t8, r2) {
  if (e2.slice(0, t8.length) != t8) throw Error("string ".concat(JSON.stringify(e2), " doesn't start with prefix ").concat(JSON.stringify(t8), "; this is a bug"));
  return r2 + e2.slice(t8.length);
}
function wt2(e2, t8, r2) {
  if (!t8) return e2 + r2;
  if (e2.slice(-t8.length) != t8) throw Error("string ".concat(JSON.stringify(e2), " doesn't end with suffix ").concat(JSON.stringify(t8), "; this is a bug"));
  return e2.slice(0, -t8.length) + r2;
}
function _e2(e2, t8) {
  return Bt2(e2, t8, "");
}
function Ve2(e2, t8) {
  return wt2(e2, t8, "");
}
function Cr2(e2, t8) {
  return t8.slice(0, Ou(e2, t8));
}
function Ou(e2, t8) {
  var r2 = 0;
  e2.length > t8.length && (r2 = e2.length - t8.length);
  var n2 = t8.length;
  e2.length < t8.length && (n2 = e2.length);
  var u = Array(n2), i = 0;
  u[0] = 0;
  for (var o2 = 1; o2 < n2; o2++) {
    for (t8[o2] == t8[i] ? u[o2] = u[i] : u[o2] = i; i > 0 && t8[o2] != t8[i]; ) i = u[i];
    t8[o2] == t8[i] && i++;
  }
  i = 0;
  for (var s2 = r2; s2 < e2.length; s2++) {
    for (; i > 0 && e2[s2] != t8[i]; ) i = u[i];
    e2[s2] == t8[i] && i++;
  }
  return i;
}
function gr2(e2, t8, r2, n2) {
  if (t8 && r2) {
    var u = t8.value.match(/^\s*/)[0], i = t8.value.match(/\s*$/)[0], o2 = r2.value.match(/^\s*/)[0], s2 = r2.value.match(/\s*$/)[0];
    if (e2) {
      var a = hr2(u, o2);
      e2.value = wt2(e2.value, o2, a), t8.value = _e2(t8.value, a), r2.value = _e2(r2.value, a);
    }
    if (n2) {
      var D = Er2(i, s2);
      n2.value = Bt2(n2.value, s2, D), t8.value = Ve2(t8.value, D), r2.value = Ve2(r2.value, D);
    }
  } else if (r2) e2 && (r2.value = r2.value.replace(/^\s*/, "")), n2 && (n2.value = n2.value.replace(/^\s*/, ""));
  else if (e2 && n2) {
    var l2 = n2.value.match(/^\s*/)[0], p = t8.value.match(/^\s*/)[0], f = t8.value.match(/\s*$/)[0], d = hr2(l2, p);
    t8.value = _e2(t8.value, d);
    var c2 = Er2(_e2(l2, d), f);
    t8.value = Ve2(t8.value, c2), n2.value = Bt2(n2.value, l2, c2), e2.value = wt2(e2.value, l2, l2.slice(0, l2.length - c2.length));
  } else if (n2) {
    var F = n2.value.match(/^\s*/)[0], m2 = t8.value.match(/\s*$/)[0], h2 = Cr2(m2, F);
    t8.value = Ve2(t8.value, h2);
  } else if (e2) {
    var C = e2.value.match(/\s*$/)[0], v2 = t8.value.match(/^\s*/)[0], E2 = Cr2(C, v2);
    t8.value = _e2(t8.value, E2);
  }
}
function _t2(e2) {
  "@babel/helpers - typeof";
  return _t2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t8) {
    return typeof t8;
  } : function(t8) {
    return t8 && typeof Symbol == "function" && t8.constructor === Symbol && t8 !== Symbol.prototype ? "symbol" : typeof t8;
  }, _t2(e2);
}
function xt2(e2, t8, r2, n2, u) {
  t8 = t8 || [], r2 = r2 || [], n2 && (e2 = n2(u, e2));
  var i;
  for (i = 0; i < t8.length; i += 1) if (t8[i] === e2) return r2[i];
  var o2;
  if (Object.prototype.toString.call(e2) === "[object Array]") {
    for (t8.push(e2), o2 = new Array(e2.length), r2.push(o2), i = 0; i < e2.length; i += 1) o2[i] = xt2(e2[i], t8, r2, n2, u);
    return t8.pop(), r2.pop(), o2;
  }
  if (e2 && e2.toJSON && (e2 = e2.toJSON()), _t2(e2) === "object" && e2 !== null) {
    t8.push(e2), o2 = {}, r2.push(o2);
    var s2 = [], a;
    for (a in e2) Object.prototype.hasOwnProperty.call(e2, a) && s2.push(a);
    for (s2.sort(), i = 0; i < s2.length; i += 1) a = s2[i], o2[a] = xt2(e2[a], t8, r2, n2, a);
    t8.pop(), r2.pop();
  } else o2 = e2;
  return o2;
}
function yr2(e2, t8, r2) {
  return ze3.diff(e2, t8, r2);
}
function Ar2(e2) {
  let t8 = e2.indexOf("\r");
  return t8 !== -1 ? e2.charAt(t8 + 1) === `
` ? "crlf" : "cr" : "lf";
}
function be2(e2) {
  switch (e2) {
    case "cr":
      return "\r";
    case "crlf":
      return `\r
`;
    default:
      return `
`;
  }
}
function Nt2(e2, t8) {
  let r2;
  switch (t8) {
    case `
`:
      r2 = /\n/gu;
      break;
    case "\r":
      r2 = /\r/gu;
      break;
    case `\r
`:
      r2 = /\r\n/gu;
      break;
    default:
      throw new Error(`Unexpected "eol" ${JSON.stringify(t8)}.`);
  }
  let n2 = e2.match(r2);
  return n2 ? n2.length : 0;
}
function vr2(e2) {
  return ne2(false, e2, /\r\n?/gu, `
`);
}
function Iu(e2) {
  if (typeof e2 == "string") return $2;
  if (Array.isArray(e2)) return H2;
  if (!e2) return;
  let { type: t8 } = e2;
  if (Ke2.has(t8)) return t8;
}
function Yu(e2) {
  let t8 = e2 === null ? "null" : typeof e2;
  if (t8 !== "string" && t8 !== "object") return `Unexpected doc '${t8}', 
Expected it to be 'string' or 'object'.`;
  if (M(e2)) throw new Error("doc is valid.");
  let r2 = Object.prototype.toString.call(e2);
  if (r2 !== "[object Object]") return `Unexpected doc '${r2}'.`;
  let n2 = Ru([...Ke2].map((u) => `'${u}'`));
  return `Unexpected doc.type '${e2.type}'.
Expected it to be ${n2}.`;
}
function ju(e2, t8, r2, n2) {
  let u = [e2];
  for (; u.length > 0; ) {
    let i = u.pop();
    if (i === Br2) {
      r2(u.pop());
      continue;
    }
    r2 && u.push(i, Br2);
    let o2 = M(i);
    if (!o2) throw new Q2(i);
    if ((t8 == null ? void 0 : t8(i)) !== false) switch (o2) {
      case H2:
      case N2: {
        let s2 = o2 === H2 ? i : i.parts;
        for (let a = s2.length, D = a - 1; D >= 0; --D) u.push(s2[D]);
        break;
      }
      case w2:
        u.push(i.flatContents, i.breakContents);
        break;
      case B2:
        if (n2 && i.expandedStates) for (let s2 = i.expandedStates.length, a = s2 - 1; a >= 0; --a) u.push(i.expandedStates[a]);
        else u.push(i.contents);
        break;
      case k2:
      case T2:
      case P2:
      case O2:
      case I2:
        u.push(i.contents);
        break;
      case $2:
      case z2:
      case L2:
      case R2:
      case y:
      case _2:
        break;
      default:
        throw new Q2(i);
    }
  }
}
function Oe2(e2, t8) {
  if (typeof e2 == "string") return t8(e2);
  let r2 = /* @__PURE__ */ new Map();
  return n2(e2);
  function n2(i) {
    if (r2.has(i)) return r2.get(i);
    let o2 = u(i);
    return r2.set(i, o2), o2;
  }
  function u(i) {
    switch (M(i)) {
      case H2:
        return t8(i.map(n2));
      case N2:
        return t8({ ...i, parts: i.parts.map(n2) });
      case w2:
        return t8({ ...i, breakContents: n2(i.breakContents), flatContents: n2(i.flatContents) });
      case B2: {
        let { expandedStates: o2, contents: s2 } = i;
        return o2 ? (o2 = o2.map(n2), s2 = o2[0]) : s2 = n2(s2), t8({ ...i, contents: s2, expandedStates: o2 });
      }
      case k2:
      case T2:
      case P2:
      case O2:
      case I2:
        return t8({ ...i, contents: n2(i.contents) });
      case $2:
      case z2:
      case L2:
      case R2:
      case y:
      case _2:
        return t8(i);
      default:
        throw new Q2(i);
    }
  }
}
function Je2(e2, t8, r2) {
  let n2 = r2, u = false;
  function i(o2) {
    if (u) return false;
    let s2 = t8(o2);
    s2 !== void 0 && (u = true, n2 = s2);
  }
  return Fe2(e2, i), n2;
}
function Hu(e2) {
  if (e2.type === B2 && e2.break || e2.type === y && e2.hard || e2.type === _2) return true;
}
function xr2(e2) {
  return Je2(e2, Hu, false);
}
function wr2(e2) {
  if (e2.length > 0) {
    let t8 = A(false, e2, -1);
    !t8.expandedStates && !t8.break && (t8.break = "propagated");
  }
  return null;
}
function br2(e2) {
  let t8 = /* @__PURE__ */ new Set(), r2 = [];
  function n2(i) {
    if (i.type === _2 && wr2(r2), i.type === B2) {
      if (r2.push(i), t8.has(i)) return false;
      t8.add(i);
    }
  }
  function u(i) {
    i.type === B2 && r2.pop().break && wr2(r2);
  }
  Fe2(e2, n2, u, true);
}
function Wu(e2) {
  return e2.type === y && !e2.hard ? e2.soft ? "" : " " : e2.type === w2 ? e2.flatContents : e2;
}
function Nr2(e2) {
  return Oe2(e2, Wu);
}
function _r2(e2) {
  for (e2 = [...e2]; e2.length >= 2 && A(false, e2, -2).type === y && A(false, e2, -1).type === _2; ) e2.length -= 2;
  if (e2.length > 0) {
    let t8 = Ne2(A(false, e2, -1));
    e2[e2.length - 1] = t8;
  }
  return e2;
}
function Ne2(e2) {
  switch (M(e2)) {
    case T2:
    case P2:
    case B2:
    case I2:
    case O2: {
      let t8 = Ne2(e2.contents);
      return { ...e2, contents: t8 };
    }
    case w2:
      return { ...e2, breakContents: Ne2(e2.breakContents), flatContents: Ne2(e2.flatContents) };
    case N2:
      return { ...e2, parts: _r2(e2.parts) };
    case H2:
      return _r2(e2);
    case $2:
      return e2.replace(/[\n\r]*$/u, "");
    case k2:
    case z2:
    case L2:
    case R2:
    case y:
    case _2:
      break;
    default:
      throw new Q2(e2);
  }
  return e2;
}
function qe2(e2) {
  return Ne2(Mu(e2));
}
function $u(e2) {
  switch (M(e2)) {
    case N2:
      if (e2.parts.every((t8) => t8 === "")) return "";
      break;
    case B2:
      if (!e2.contents && !e2.id && !e2.break && !e2.expandedStates) return "";
      if (e2.contents.type === B2 && e2.contents.id === e2.id && e2.contents.break === e2.break && e2.contents.expandedStates === e2.expandedStates) return e2.contents;
      break;
    case k2:
    case T2:
    case P2:
    case I2:
      if (!e2.contents) return "";
      break;
    case w2:
      if (!e2.flatContents && !e2.breakContents) return "";
      break;
    case H2: {
      let t8 = [];
      for (let r2 of e2) {
        if (!r2) continue;
        let [n2, ...u] = Array.isArray(r2) ? r2 : [r2];
        typeof n2 == "string" && typeof A(false, t8, -1) == "string" ? t8[t8.length - 1] += n2 : t8.push(n2), t8.push(...u);
      }
      return t8.length === 0 ? "" : t8.length === 1 ? t8[0] : t8;
    }
    case $2:
    case z2:
    case L2:
    case R2:
    case y:
    case O2:
    case _2:
      break;
    default:
      throw new Q2(e2);
  }
  return e2;
}
function Mu(e2) {
  return Oe2(e2, (t8) => $u(t8));
}
function Or(e2, t8 = Xe2) {
  return Oe2(e2, (r2) => typeof r2 == "string" ? Se2(t8, r2.split(`
`)) : r2);
}
function Vu(e2) {
  if (e2.type === y) return true;
}
function Sr2(e2) {
  return Je2(e2, Vu, false);
}
function me2(e2, t8) {
  return e2.type === O2 ? { ...e2, contents: t8(e2.contents) } : t8(e2);
}
function le2(e2) {
  return G2(e2), { type: T2, contents: e2 };
}
function De2(e2, t8) {
  return G2(t8), { type: k2, contents: t8, n: e2 };
}
function kt2(e2, t8 = {}) {
  return G2(e2), Tt2(t8.expandedStates, true), { type: B2, id: t8.id, contents: e2, break: !!t8.shouldBreak, expandedStates: t8.expandedStates };
}
function kr2(e2) {
  return De2(Number.NEGATIVE_INFINITY, e2);
}
function Lr2(e2) {
  return De2({ type: "root" }, e2);
}
function Pr2(e2) {
  return De2(-1, e2);
}
function Ir2(e2, t8) {
  return kt2(e2[0], { ...t8, expandedStates: e2 });
}
function Rr2(e2) {
  return Tr2(e2), { type: N2, parts: e2 };
}
function Yr2(e2, t8 = "", r2 = {}) {
  return G2(e2), t8 !== "" && G2(t8), { type: w2, breakContents: e2, flatContents: t8, groupId: r2.groupId };
}
function jr2(e2, t8) {
  return G2(e2), { type: P2, contents: e2, groupId: t8.groupId, negate: t8.negate };
}
function Te2(e2) {
  return G2(e2), { type: I2, contents: e2 };
}
function Se2(e2, t8) {
  G2(e2), Tt2(t8);
  let r2 = [];
  for (let n2 = 0; n2 < t8.length; n2++) n2 !== 0 && r2.push(e2), r2.push(t8[n2]);
  return r2;
}
function Ze2(e2, t8, r2) {
  G2(e2);
  let n2 = e2;
  if (t8 > 0) {
    for (let u = 0; u < Math.floor(t8 / r2); ++u) n2 = le2(n2);
    n2 = De2(t8 % r2, n2), n2 = De2(Number.NEGATIVE_INFINITY, n2);
  }
  return n2;
}
function Mr(e2, t8) {
  return G2(t8), e2 ? { type: O2, label: e2, contents: t8 } : t8;
}
function ee2(e2) {
  var t8;
  if (!e2) return "";
  if (Array.isArray(e2)) {
    let r2 = [];
    for (let n2 of e2) if (Array.isArray(n2)) r2.push(...ee2(n2));
    else {
      let u = ee2(n2);
      u !== "" && r2.push(u);
    }
    return r2;
  }
  return e2.type === w2 ? { ...e2, breakContents: ee2(e2.breakContents), flatContents: ee2(e2.flatContents) } : e2.type === B2 ? { ...e2, contents: ee2(e2.contents), expandedStates: (t8 = e2.expandedStates) == null ? void 0 : t8.map(ee2) } : e2.type === N2 ? { type: "fill", parts: e2.parts.map(ee2) } : e2.contents ? { ...e2, contents: ee2(e2.contents) } : e2;
}
function Vr2(e2) {
  let t8 = /* @__PURE__ */ Object.create(null), r2 = /* @__PURE__ */ new Set();
  return n2(ee2(e2));
  function n2(i, o2, s2) {
    var a, D;
    if (typeof i == "string") return JSON.stringify(i);
    if (Array.isArray(i)) {
      let l2 = i.map(n2).filter(Boolean);
      return l2.length === 1 ? l2[0] : `[${l2.join(", ")}]`;
    }
    if (i.type === y) {
      let l2 = ((a = s2 == null ? void 0 : s2[o2 + 1]) == null ? void 0 : a.type) === _2;
      return i.literal ? l2 ? "literalline" : "literallineWithoutBreakParent" : i.hard ? l2 ? "hardline" : "hardlineWithoutBreakParent" : i.soft ? "softline" : "line";
    }
    if (i.type === _2) return ((D = s2 == null ? void 0 : s2[o2 - 1]) == null ? void 0 : D.type) === y && s2[o2 - 1].hard ? void 0 : "breakParent";
    if (i.type === L2) return "trim";
    if (i.type === T2) return "indent(" + n2(i.contents) + ")";
    if (i.type === k2) return i.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + n2(i.contents) + ")" : i.n < 0 ? "dedent(" + n2(i.contents) + ")" : i.n.type === "root" ? "markAsRoot(" + n2(i.contents) + ")" : "align(" + JSON.stringify(i.n) + ", " + n2(i.contents) + ")";
    if (i.type === w2) return "ifBreak(" + n2(i.breakContents) + (i.flatContents ? ", " + n2(i.flatContents) : "") + (i.groupId ? (i.flatContents ? "" : ', ""') + `, { groupId: ${u(i.groupId)} }` : "") + ")";
    if (i.type === P2) {
      let l2 = [];
      i.negate && l2.push("negate: true"), i.groupId && l2.push(`groupId: ${u(i.groupId)}`);
      let p = l2.length > 0 ? `, { ${l2.join(", ")} }` : "";
      return `indentIfBreak(${n2(i.contents)}${p})`;
    }
    if (i.type === B2) {
      let l2 = [];
      i.break && i.break !== "propagated" && l2.push("shouldBreak: true"), i.id && l2.push(`id: ${u(i.id)}`);
      let p = l2.length > 0 ? `, { ${l2.join(", ")} }` : "";
      return i.expandedStates ? `conditionalGroup([${i.expandedStates.map((f) => n2(f)).join(",")}]${p})` : `group(${n2(i.contents)}${p})`;
    }
    if (i.type === N2) return `fill([${i.parts.map((l2) => n2(l2)).join(", ")}])`;
    if (i.type === I2) return "lineSuffix(" + n2(i.contents) + ")";
    if (i.type === R2) return "lineSuffixBoundary";
    if (i.type === O2) return `label(${JSON.stringify(i.label)}, ${n2(i.contents)})`;
    throw new Error("Unknown doc type " + i.type);
  }
  function u(i) {
    if (typeof i != "symbol") return JSON.stringify(String(i));
    if (i in t8) return t8[i];
    let o2 = i.description || "symbol";
    for (let s2 = 0; ; s2++) {
      let a = o2 + (s2 > 0 ? ` #${s2}` : "");
      if (!r2.has(a)) return r2.add(a), t8[i] = `Symbol.for(${JSON.stringify(a)})`;
    }
  }
}
function zr(e2) {
  return e2 === 12288 || e2 >= 65281 && e2 <= 65376 || e2 >= 65504 && e2 <= 65510;
}
function Gr(e2) {
  return e2 >= 4352 && e2 <= 4447 || e2 === 8986 || e2 === 8987 || e2 === 9001 || e2 === 9002 || e2 >= 9193 && e2 <= 9196 || e2 === 9200 || e2 === 9203 || e2 === 9725 || e2 === 9726 || e2 === 9748 || e2 === 9749 || e2 >= 9776 && e2 <= 9783 || e2 >= 9800 && e2 <= 9811 || e2 === 9855 || e2 >= 9866 && e2 <= 9871 || e2 === 9875 || e2 === 9889 || e2 === 9898 || e2 === 9899 || e2 === 9917 || e2 === 9918 || e2 === 9924 || e2 === 9925 || e2 === 9934 || e2 === 9940 || e2 === 9962 || e2 === 9970 || e2 === 9971 || e2 === 9973 || e2 === 9978 || e2 === 9981 || e2 === 9989 || e2 === 9994 || e2 === 9995 || e2 === 10024 || e2 === 10060 || e2 === 10062 || e2 >= 10067 && e2 <= 10069 || e2 === 10071 || e2 >= 10133 && e2 <= 10135 || e2 === 10160 || e2 === 10175 || e2 === 11035 || e2 === 11036 || e2 === 11088 || e2 === 11093 || e2 >= 11904 && e2 <= 11929 || e2 >= 11931 && e2 <= 12019 || e2 >= 12032 && e2 <= 12245 || e2 >= 12272 && e2 <= 12287 || e2 >= 12289 && e2 <= 12350 || e2 >= 12353 && e2 <= 12438 || e2 >= 12441 && e2 <= 12543 || e2 >= 12549 && e2 <= 12591 || e2 >= 12593 && e2 <= 12686 || e2 >= 12688 && e2 <= 12773 || e2 >= 12783 && e2 <= 12830 || e2 >= 12832 && e2 <= 12871 || e2 >= 12880 && e2 <= 42124 || e2 >= 42128 && e2 <= 42182 || e2 >= 43360 && e2 <= 43388 || e2 >= 44032 && e2 <= 55203 || e2 >= 63744 && e2 <= 64255 || e2 >= 65040 && e2 <= 65049 || e2 >= 65072 && e2 <= 65106 || e2 >= 65108 && e2 <= 65126 || e2 >= 65128 && e2 <= 65131 || e2 >= 94176 && e2 <= 94180 || e2 === 94192 || e2 === 94193 || e2 >= 94208 && e2 <= 100343 || e2 >= 100352 && e2 <= 101589 || e2 >= 101631 && e2 <= 101640 || e2 >= 110576 && e2 <= 110579 || e2 >= 110581 && e2 <= 110587 || e2 === 110589 || e2 === 110590 || e2 >= 110592 && e2 <= 110882 || e2 === 110898 || e2 >= 110928 && e2 <= 110930 || e2 === 110933 || e2 >= 110948 && e2 <= 110951 || e2 >= 110960 && e2 <= 111355 || e2 >= 119552 && e2 <= 119638 || e2 >= 119648 && e2 <= 119670 || e2 === 126980 || e2 === 127183 || e2 === 127374 || e2 >= 127377 && e2 <= 127386 || e2 >= 127488 && e2 <= 127490 || e2 >= 127504 && e2 <= 127547 || e2 >= 127552 && e2 <= 127560 || e2 === 127568 || e2 === 127569 || e2 >= 127584 && e2 <= 127589 || e2 >= 127744 && e2 <= 127776 || e2 >= 127789 && e2 <= 127797 || e2 >= 127799 && e2 <= 127868 || e2 >= 127870 && e2 <= 127891 || e2 >= 127904 && e2 <= 127946 || e2 >= 127951 && e2 <= 127955 || e2 >= 127968 && e2 <= 127984 || e2 === 127988 || e2 >= 127992 && e2 <= 128062 || e2 === 128064 || e2 >= 128066 && e2 <= 128252 || e2 >= 128255 && e2 <= 128317 || e2 >= 128331 && e2 <= 128334 || e2 >= 128336 && e2 <= 128359 || e2 === 128378 || e2 === 128405 || e2 === 128406 || e2 === 128420 || e2 >= 128507 && e2 <= 128591 || e2 >= 128640 && e2 <= 128709 || e2 === 128716 || e2 >= 128720 && e2 <= 128722 || e2 >= 128725 && e2 <= 128727 || e2 >= 128732 && e2 <= 128735 || e2 === 128747 || e2 === 128748 || e2 >= 128756 && e2 <= 128764 || e2 >= 128992 && e2 <= 129003 || e2 === 129008 || e2 >= 129292 && e2 <= 129338 || e2 >= 129340 && e2 <= 129349 || e2 >= 129351 && e2 <= 129535 || e2 >= 129648 && e2 <= 129660 || e2 >= 129664 && e2 <= 129673 || e2 >= 129679 && e2 <= 129734 || e2 >= 129742 && e2 <= 129756 || e2 >= 129759 && e2 <= 129769 || e2 >= 129776 && e2 <= 129784 || e2 >= 131072 && e2 <= 196605 || e2 >= 196608 && e2 <= 262141;
}
function zu(e2) {
  if (!e2) return 0;
  if (!Uu.test(e2)) return e2.length;
  e2 = e2.replace(Ur2(), "  ");
  let t8 = 0;
  for (let r2 of e2) {
    let n2 = r2.codePointAt(0);
    n2 <= 31 || n2 >= 127 && n2 <= 159 || n2 >= 768 && n2 <= 879 || (t8 += Kr2(n2) ? 1 : 2);
  }
  return t8;
}
function Jr2() {
  return { value: "", length: 0, queue: [] };
}
function Gu(e2, t8) {
  return It2(e2, { type: "indent" }, t8);
}
function Ku(e2, t8, r2) {
  return t8 === Number.NEGATIVE_INFINITY ? e2.root || Jr2() : t8 < 0 ? It2(e2, { type: "dedent" }, r2) : t8 ? t8.type === "root" ? { ...e2, root: e2 } : It2(e2, { type: typeof t8 == "string" ? "stringAlign" : "numberAlign", n: t8 }, r2) : e2;
}
function It2(e2, t8, r2) {
  let n2 = t8.type === "dedent" ? e2.queue.slice(0, -1) : [...e2.queue, t8], u = "", i = 0, o2 = 0, s2 = 0;
  for (let c2 of n2) switch (c2.type) {
    case "indent":
      l2(), r2.useTabs ? a(1) : D(r2.tabWidth);
      break;
    case "stringAlign":
      l2(), u += c2.n, i += c2.n.length;
      break;
    case "numberAlign":
      o2 += 1, s2 += c2.n;
      break;
    default:
      throw new Error(`Unexpected type '${c2.type}'`);
  }
  return f(), { ...e2, value: u, length: i, queue: n2 };
  function a(c2) {
    u += "	".repeat(c2), i += r2.tabWidth * c2;
  }
  function D(c2) {
    u += " ".repeat(c2), i += c2;
  }
  function l2() {
    r2.useTabs ? p() : f();
  }
  function p() {
    o2 > 0 && a(o2), d();
  }
  function f() {
    s2 > 0 && D(s2), d();
  }
  function d() {
    o2 = 0, s2 = 0;
  }
}
function Rt2(e2) {
  let t8 = 0, r2 = 0, n2 = e2.length;
  e: for (; n2--; ) {
    let u = e2[n2];
    if (u === Ee2) {
      r2++;
      continue;
    }
    for (let i = u.length - 1; i >= 0; i--) {
      let o2 = u[i];
      if (o2 === " " || o2 === "	") t8++;
      else {
        e2[n2] = u.slice(0, i + 1);
        break e;
      }
    }
  }
  if (t8 > 0 || r2 > 0) for (e2.length = n2 + 1; r2-- > 0; ) e2.push(Ee2);
  return t8;
}
function et2(e2, t8, r2, n2, u, i) {
  if (r2 === Number.POSITIVE_INFINITY) return true;
  let o2 = t8.length, s2 = [e2], a = [];
  for (; r2 >= 0; ) {
    if (s2.length === 0) {
      if (o2 === 0) return true;
      s2.push(t8[--o2]);
      continue;
    }
    let { mode: D, doc: l2 } = s2.pop(), p = M(l2);
    switch (p) {
      case $2:
        a.push(l2), r2 -= Le2(l2);
        break;
      case H2:
      case N2: {
        let f = p === H2 ? l2 : l2.parts, d = l2[Pt2] ?? 0;
        for (let c2 = f.length - 1; c2 >= d; c2--) s2.push({ mode: D, doc: f[c2] });
        break;
      }
      case T2:
      case k2:
      case P2:
      case O2:
        s2.push({ mode: D, doc: l2.contents });
        break;
      case L2:
        r2 += Rt2(a);
        break;
      case B2: {
        if (i && l2.break) return false;
        let f = l2.break ? Y2 : D, d = l2.expandedStates && f === Y2 ? A(false, l2.expandedStates, -1) : l2.contents;
        s2.push({ mode: f, doc: d });
        break;
      }
      case w2: {
        let d = (l2.groupId ? u[l2.groupId] || J2 : D) === Y2 ? l2.breakContents : l2.flatContents;
        d && s2.push({ mode: D, doc: d });
        break;
      }
      case y:
        if (D === Y2 || l2.hard) return true;
        l2.soft || (a.push(" "), r2--);
        break;
      case I2:
        n2 = true;
        break;
      case R2:
        if (n2) return false;
        break;
    }
  }
  return false;
}
function Ce2(e2, t8) {
  let r2 = {}, n2 = t8.printWidth, u = be2(t8.endOfLine), i = 0, o2 = [{ ind: Jr2(), mode: Y2, doc: e2 }], s2 = [], a = false, D = [], l2 = 0;
  for (br2(e2); o2.length > 0; ) {
    let { ind: f, mode: d, doc: c2 } = o2.pop();
    switch (M(c2)) {
      case $2: {
        let F = u !== `
` ? ne2(false, c2, `
`, u) : c2;
        s2.push(F), o2.length > 0 && (i += Le2(F));
        break;
      }
      case H2:
        for (let F = c2.length - 1; F >= 0; F--) o2.push({ ind: f, mode: d, doc: c2[F] });
        break;
      case z2:
        if (l2 >= 2) throw new Error("There are too many 'cursor' in doc.");
        s2.push(Ee2), l2++;
        break;
      case T2:
        o2.push({ ind: Gu(f, t8), mode: d, doc: c2.contents });
        break;
      case k2:
        o2.push({ ind: Ku(f, c2.n, t8), mode: d, doc: c2.contents });
        break;
      case L2:
        i -= Rt2(s2);
        break;
      case B2:
        switch (d) {
          case J2:
            if (!a) {
              o2.push({ ind: f, mode: c2.break ? Y2 : J2, doc: c2.contents });
              break;
            }
          case Y2: {
            a = false;
            let F = { ind: f, mode: J2, doc: c2.contents }, m2 = n2 - i, h2 = D.length > 0;
            if (!c2.break && et2(F, o2, m2, h2, r2)) o2.push(F);
            else if (c2.expandedStates) {
              let C = A(false, c2.expandedStates, -1);
              if (c2.break) {
                o2.push({ ind: f, mode: Y2, doc: C });
                break;
              } else for (let v2 = 1; v2 < c2.expandedStates.length + 1; v2++) if (v2 >= c2.expandedStates.length) {
                o2.push({ ind: f, mode: Y2, doc: C });
                break;
              } else {
                let E2 = c2.expandedStates[v2], g = { ind: f, mode: J2, doc: E2 };
                if (et2(g, o2, m2, h2, r2)) {
                  o2.push(g);
                  break;
                }
              }
            } else o2.push({ ind: f, mode: Y2, doc: c2.contents });
            break;
          }
        }
        c2.id && (r2[c2.id] = A(false, o2, -1).mode);
        break;
      case N2: {
        let F = n2 - i, m2 = c2[Pt2] ?? 0, { parts: h2 } = c2, C = h2.length - m2;
        if (C === 0) break;
        let v2 = h2[m2 + 0], E2 = h2[m2 + 1], g = { ind: f, mode: J2, doc: v2 }, j2 = { ind: f, mode: Y2, doc: v2 }, b2 = et2(g, [], F, D.length > 0, r2, true);
        if (C === 1) {
          b2 ? o2.push(g) : o2.push(j2);
          break;
        }
        let X2 = { ind: f, mode: J2, doc: E2 }, ae2 = { ind: f, mode: Y2, doc: E2 };
        if (C === 2) {
          b2 ? o2.push(X2, g) : o2.push(ae2, j2);
          break;
        }
        let $e = h2[m2 + 2], yt2 = { ind: f, mode: d, doc: { ...c2, [Pt2]: m2 + 2 } };
        et2({ ind: f, mode: J2, doc: [v2, E2, $e] }, [], F, D.length > 0, r2, true) ? o2.push(yt2, X2, g) : b2 ? o2.push(yt2, ae2, g) : o2.push(yt2, ae2, j2);
        break;
      }
      case w2:
      case P2: {
        let F = c2.groupId ? r2[c2.groupId] : d;
        if (F === Y2) {
          let m2 = c2.type === w2 ? c2.breakContents : c2.negate ? c2.contents : le2(c2.contents);
          m2 && o2.push({ ind: f, mode: d, doc: m2 });
        }
        if (F === J2) {
          let m2 = c2.type === w2 ? c2.flatContents : c2.negate ? le2(c2.contents) : c2.contents;
          m2 && o2.push({ ind: f, mode: d, doc: m2 });
        }
        break;
      }
      case I2:
        D.push({ ind: f, mode: d, doc: c2.contents });
        break;
      case R2:
        D.length > 0 && o2.push({ ind: f, mode: d, doc: ke2 });
        break;
      case y:
        switch (d) {
          case J2:
            if (c2.hard) a = true;
            else {
              c2.soft || (s2.push(" "), i += 1);
              break;
            }
          case Y2:
            if (D.length > 0) {
              o2.push({ ind: f, mode: d, doc: c2 }, ...D.reverse()), D.length = 0;
              break;
            }
            c2.literal ? f.root ? (s2.push(u, f.root.value), i = f.root.length) : (s2.push(u), i = 0) : (i -= Rt2(s2), s2.push(u + f.value), i = f.length);
            break;
        }
        break;
      case O2:
        o2.push({ ind: f, mode: d, doc: c2.contents });
        break;
      case _2:
        break;
      default:
        throw new Q2(c2);
    }
    o2.length === 0 && D.length > 0 && (o2.push(...D.reverse()), D.length = 0);
  }
  let p = s2.indexOf(Ee2);
  if (p !== -1) {
    let f = s2.indexOf(Ee2, p + 1);
    if (f === -1) return { formatted: s2.filter((m2) => m2 !== Ee2).join("") };
    let d = s2.slice(0, p).join(""), c2 = s2.slice(p + 1, f).join(""), F = s2.slice(f + 1).join("");
    return { formatted: d + c2 + F, cursorNodeStart: d.length, cursorNodeText: c2 };
  }
  return { formatted: s2.join("") };
}
function Ju(e2, t8, r2 = 0) {
  let n2 = 0;
  for (let u = r2; u < e2.length; ++u) e2[u] === "	" ? n2 = n2 + t8 - n2 % t8 : n2++;
  return n2;
}
function qu(e2) {
  return e2 !== null && typeof e2 == "object";
}
function* ye2(e2, t8) {
  let { getVisitorKeys: r2, filter: n2 = () => true } = t8, u = (i) => Qr2(i) && n2(i);
  for (let i of r2(e2)) {
    let o2 = e2[i];
    if (Array.isArray(o2)) for (let s2 of o2) u(s2) && (yield s2);
    else u(o2) && (yield o2);
  }
}
function* Zr2(e2, t8) {
  let r2 = [e2];
  for (let n2 = 0; n2 < r2.length; n2++) {
    let u = r2[n2];
    for (let i of ye2(u, t8)) yield i, r2.push(i);
  }
}
function en2(e2, t8) {
  return ye2(e2, t8).next().done;
}
function Ae2(e2) {
  return (t8, r2, n2) => {
    let u = !!(n2 != null && n2.backwards);
    if (r2 === false) return false;
    let { length: i } = t8, o2 = r2;
    for (; o2 >= 0 && o2 < i; ) {
      let s2 = t8.charAt(o2);
      if (e2 instanceof RegExp) {
        if (!e2.test(s2)) return o2;
      } else if (!e2.includes(s2)) return o2;
      u ? o2-- : o2++;
    }
    return o2 === -1 || o2 === i ? o2 : false;
  };
}
function Xu(e2, t8, r2) {
  let n2 = !!(r2 != null && r2.backwards);
  if (t8 === false) return false;
  let u = e2.charAt(t8);
  if (n2) {
    if (e2.charAt(t8 - 1) === "\r" && u === `
`) return t8 - 2;
    if (u === `
` || u === "\r" || u === "\u2028" || u === "\u2029") return t8 - 1;
  } else {
    if (u === "\r" && e2.charAt(t8 + 1) === `
`) return t8 + 2;
    if (u === `
` || u === "\r" || u === "\u2028" || u === "\u2029") return t8 + 1;
  }
  return t8;
}
function Qu(e2, t8, r2 = {}) {
  let n2 = S2(e2, r2.backwards ? t8 - 1 : t8, r2), u = W2(e2, n2, r2);
  return n2 !== u;
}
function Zu(e2) {
  return Array.isArray(e2) && e2.length > 0;
}
function ti2(e2) {
  return e2 ? (t8) => e2(t8, rn) : ei2;
}
function ri2(e2) {
  let t8 = e2.type || e2.kind || "(unknown type)", r2 = String(e2.name || e2.id && (typeof e2.id == "object" ? e2.id.name : e2.id) || e2.key && (typeof e2.key == "object" ? e2.key.name : e2.key) || e2.value && (typeof e2.value == "object" ? "" : String(e2.value)) || e2.operator || "");
  return r2.length > 20 && (r2 = r2.slice(0, 19) + "\u2026"), t8 + (r2 ? " " + r2 : "");
}
function Wt2(e2, t8) {
  (e2.comments ?? (e2.comments = [])).push(t8), t8.printed = false, t8.nodeDescription = ri2(e2);
}
function ue(e2, t8) {
  t8.leading = true, t8.trailing = false, Wt2(e2, t8);
}
function re(e2, t8, r2) {
  t8.leading = false, t8.trailing = false, r2 && (t8.marker = r2), Wt2(e2, t8);
}
function ie2(e2, t8) {
  t8.leading = false, t8.trailing = true, Wt2(e2, t8);
}
function ut2(e2, t8) {
  if ($t2.has(e2)) return $t2.get(e2);
  let { printer: { getCommentChildNodes: r2, canAttachComment: n2, getVisitorKeys: u }, locStart: i, locEnd: o2 } = t8;
  if (!n2) return [];
  let s2 = ((r2 == null ? void 0 : r2(e2, t8)) ?? [...ye2(e2, { getVisitorKeys: q(u) })]).flatMap((a) => n2(a) ? [a] : ut2(a, t8));
  return s2.sort((a, D) => i(a) - i(D) || o2(a) - o2(D)), $t2.set(e2, s2), s2;
}
function un2(e2, t8, r2, n2) {
  let { locStart: u, locEnd: i } = r2, o2 = u(t8), s2 = i(t8), a = ut2(e2, r2), D, l2, p = 0, f = a.length;
  for (; p < f; ) {
    let d = p + f >> 1, c2 = a[d], F = u(c2), m2 = i(c2);
    if (F <= o2 && s2 <= m2) return un2(c2, t8, r2, c2);
    if (m2 <= o2) {
      D = c2, p = d + 1;
      continue;
    }
    if (s2 <= F) {
      l2 = c2, f = d;
      continue;
    }
    throw new Error("Comment location overlaps with node location");
  }
  if ((n2 == null ? void 0 : n2.type) === "TemplateLiteral") {
    let { quasis: d } = n2, c2 = Vt2(d, t8, r2);
    D && Vt2(d, D, r2) !== c2 && (D = null), l2 && Vt2(d, l2, r2) !== c2 && (l2 = null);
  }
  return { enclosingNode: n2, precedingNode: D, followingNode: l2 };
}
function on2(e2, t8) {
  let { comments: r2 } = e2;
  if (delete e2.comments, !Ht2(r2) || !t8.printer.canAttachComment) return;
  let n2 = [], { locStart: u, locEnd: i, printer: { experimentalFeatures: { avoidAstMutation: o2 = false } = {}, handleComments: s2 = {} }, originalText: a } = t8, { ownLine: D = Mt2, endOfLine: l2 = Mt2, remaining: p = Mt2 } = s2, f = r2.map((d, c2) => ({ ...un2(e2, d, t8), comment: d, text: a, options: t8, ast: e2, isLastComment: r2.length - 1 === c2 }));
  for (let [d, c2] of f.entries()) {
    let { comment: F, precedingNode: m2, enclosingNode: h2, followingNode: C, text: v2, options: E2, ast: g, isLastComment: j2 } = c2;
    if (E2.parser === "json" || E2.parser === "json5" || E2.parser === "jsonc" || E2.parser === "__js_expression" || E2.parser === "__ts_expression" || E2.parser === "__vue_expression" || E2.parser === "__vue_ts_expression") {
      if (u(F) - u(g) <= 0) {
        ue(g, F);
        continue;
      }
      if (i(F) - i(g) >= 0) {
        ie2(g, F);
        continue;
      }
    }
    let b2;
    if (o2 ? b2 = [c2] : (F.enclosingNode = h2, F.precedingNode = m2, F.followingNode = C, b2 = [F, v2, E2, g, j2]), ni2(v2, E2, f, d)) F.placement = "ownLine", D(...b2) || (C ? ue(C, F) : m2 ? ie2(m2, F) : h2 ? re(h2, F) : re(g, F));
    else if (ui(v2, E2, f, d)) F.placement = "endOfLine", l2(...b2) || (m2 ? ie2(m2, F) : C ? ue(C, F) : h2 ? re(h2, F) : re(g, F));
    else if (F.placement = "remaining", !p(...b2)) if (m2 && C) {
      let X2 = n2.length;
      X2 > 0 && n2[X2 - 1].followingNode !== C && nn(n2, E2), n2.push(c2);
    } else m2 ? ie2(m2, F) : C ? ue(C, F) : h2 ? re(h2, F) : re(g, F);
  }
  if (nn(n2, t8), !o2) for (let d of r2) delete d.precedingNode, delete d.enclosingNode, delete d.followingNode;
}
function ni2(e2, t8, r2, n2) {
  let { comment: u, precedingNode: i } = r2[n2], { locStart: o2, locEnd: s2 } = t8, a = o2(u);
  if (i) for (let D = n2 - 1; D >= 0; D--) {
    let { comment: l2, precedingNode: p } = r2[D];
    if (p !== i || !sn2(e2.slice(s2(l2), a))) break;
    a = o2(l2);
  }
  return V3(e2, a, { backwards: true });
}
function ui(e2, t8, r2, n2) {
  let { comment: u, followingNode: i } = r2[n2], { locStart: o2, locEnd: s2 } = t8, a = s2(u);
  if (i) for (let D = n2 + 1; D < r2.length; D++) {
    let { comment: l2, followingNode: p } = r2[D];
    if (p !== i || !sn2(e2.slice(a, o2(l2)))) break;
    a = s2(l2);
  }
  return V3(e2, a);
}
function nn(e2, t8) {
  var s2, a;
  let r2 = e2.length;
  if (r2 === 0) return;
  let { precedingNode: n2, followingNode: u } = e2[0], i = t8.locStart(u), o2;
  for (o2 = r2; o2 > 0; --o2) {
    let { comment: D, precedingNode: l2, followingNode: p } = e2[o2 - 1];
    Pe2.strictEqual(l2, n2), Pe2.strictEqual(p, u);
    let f = t8.originalText.slice(t8.locEnd(D), i);
    if (((a = (s2 = t8.printer).isGap) == null ? void 0 : a.call(s2, f, t8)) ?? /^[\s(]*$/u.test(f)) i = t8.locStart(D);
    else break;
  }
  for (let [D, { comment: l2 }] of e2.entries()) D < o2 ? ie2(n2, l2) : ue(u, l2);
  for (let D of [n2, u]) D.comments && D.comments.length > 1 && D.comments.sort((l2, p) => t8.locStart(l2) - t8.locStart(p));
  e2.length = 0;
}
function Vt2(e2, t8, r2) {
  let n2 = r2.locStart(t8) - 1;
  for (let u = 1; u < e2.length; ++u) if (n2 < r2.locStart(e2[u])) return u - 1;
  return 0;
}
function ii2(e2, t8) {
  let r2 = t8 - 1;
  r2 = S2(e2, r2, { backwards: true }), r2 = W2(e2, r2, { backwards: true }), r2 = S2(e2, r2, { backwards: true });
  let n2 = W2(e2, r2, { backwards: true });
  return r2 !== n2;
}
function an2(e2, t8) {
  let r2 = e2.node;
  return r2.printed = true, t8.printer.printComment(e2, t8);
}
function oi2(e2, t8) {
  var l2;
  let r2 = e2.node, n2 = [an2(e2, t8)], { printer: u, originalText: i, locStart: o2, locEnd: s2 } = t8;
  if ((l2 = u.isBlockComment) == null ? void 0 : l2.call(u, r2)) {
    let p = V3(i, s2(r2)) ? V3(i, o2(r2), { backwards: true }) ? K2 : Qe2 : " ";
    n2.push(p);
  } else n2.push(K2);
  let D = W2(i, S2(i, s2(r2)));
  return D !== false && V3(i, D) && n2.push(K2), n2;
}
function si2(e2, t8, r2) {
  var D;
  let n2 = e2.node, u = an2(e2, t8), { printer: i, originalText: o2, locStart: s2 } = t8, a = (D = i.isBlockComment) == null ? void 0 : D.call(i, n2);
  if (r2 != null && r2.hasLineSuffix && !(r2 != null && r2.isBlock) || V3(o2, s2(n2), { backwards: true })) {
    let l2 = Ie2(o2, s2(n2));
    return { doc: Te2([K2, l2 ? K2 : "", u]), isBlock: a, hasLineSuffix: true };
  }
  return !a || r2 != null && r2.hasLineSuffix ? { doc: [Te2([" ", u]), he2], isBlock: a, hasLineSuffix: true } : { doc: [" ", u], isBlock: a, hasLineSuffix: false };
}
function ai2(e2, t8) {
  let r2 = e2.node;
  if (!r2) return {};
  let n2 = t8[Symbol.for("printedComments")];
  if ((r2.comments || []).filter((a) => !n2.has(a)).length === 0) return { leading: "", trailing: "" };
  let i = [], o2 = [], s2;
  return e2.each(() => {
    let a = e2.node;
    if (n2 != null && n2.has(a)) return;
    let { leading: D, trailing: l2 } = a;
    D ? i.push(oi2(e2, t8)) : l2 && (s2 = si2(e2, t8, s2), o2.push(s2.doc));
  }, "comments"), { leading: i, trailing: o2 };
}
function Dn2(e2, t8, r2) {
  let { leading: n2, trailing: u } = ai2(e2, r2);
  return !n2 && !u ? t8 : me2(t8, (i) => [n2, i, u]);
}
function ln2(e2) {
  let { [Symbol.for("comments")]: t8, [Symbol.for("printedComments")]: r2 } = e2;
  for (let n2 of t8) {
    if (!n2.printed && !r2.has(n2)) throw new Error('Comment "' + n2.value.trim() + '" was not printed. Please report this error!');
    delete n2.printed;
  }
}
function Di2(e2) {
  return () => {
  };
}
function it2({ plugins: e2 = [], showDeprecated: t8 = false } = {}) {
  let r2 = e2.flatMap((u) => u.languages ?? []), n2 = [];
  for (let u of ci2(Object.assign({}, ...e2.map(({ options: i }) => i), fn2))) !t8 && u.deprecated || (Array.isArray(u.choices) && (t8 || (u.choices = u.choices.filter((i) => !i.deprecated)), u.name === "parser" && (u.choices = [...u.choices, ...li2(u.choices, r2, e2)])), u.pluginDefaults = Object.fromEntries(e2.filter((i) => {
    var o2;
    return ((o2 = i.defaultOptions) == null ? void 0 : o2[u.name]) !== void 0;
  }).map((i) => [i.name, i.defaultOptions[u.name]])), n2.push(u));
  return { languages: r2, options: n2 };
}
function* li2(e2, t8, r2) {
  let n2 = new Set(e2.map((u) => u.value));
  for (let u of t8) if (u.parsers) {
    for (let i of u.parsers) if (!n2.has(i)) {
      n2.add(i);
      let o2 = r2.find((a) => a.parsers && Object.prototype.hasOwnProperty.call(a.parsers, i)), s2 = u.name;
      o2 != null && o2.name && (s2 += ` (plugin: ${o2.name})`), yield { value: i, description: s2 };
    }
  }
}
function ci2(e2) {
  let t8 = [];
  for (let [r2, n2] of Object.entries(e2)) {
    let u = { name: r2, ...n2 };
    Array.isArray(u.default) && (u.default = A(false, u.default, -1).value), t8.push(u);
  }
  return t8;
}
function dn2(e2, t8) {
  if (!t8) return;
  let r2 = fi2(t8).toLowerCase();
  return e2.find(({ filenames: n2 }) => n2 == null ? void 0 : n2.some((u) => u.toLowerCase() === r2)) ?? e2.find(({ extensions: n2 }) => n2 == null ? void 0 : n2.some((u) => r2.endsWith(u)));
}
function di(e2, t8) {
  if (t8) return e2.find(({ name: r2 }) => r2.toLowerCase() === t8) ?? e2.find(({ aliases: r2 }) => r2 == null ? void 0 : r2.includes(t8)) ?? e2.find(({ extensions: r2 }) => r2 == null ? void 0 : r2.includes(`.${t8}`));
}
function pi2(e2, t8) {
  let r2 = e2.plugins.flatMap((u) => u.languages ?? []), n2 = di(r2, t8.language) ?? dn2(r2, t8.physicalFile) ?? dn2(r2, t8.file) ?? (t8.physicalFile, void 0);
  return n2 == null ? void 0 : n2.parsers[0];
}
function Cn2(e2, t8, r2, n2) {
  return [`Invalid ${ce2.default.red(n2.key(e2))} value.`, `Expected ${ce2.default.blue(r2)},`, `but received ${t8 === st2 ? ce2.default.gray("nothing") : ce2.default.red(n2.value(t8))}.`].join(" ");
}
function yn2({ text: e2, list: t8 }, r2) {
  let n2 = [];
  return e2 && n2.push(`- ${ce2.default.blue(e2)}`), t8 && n2.push([`- ${ce2.default.blue(t8.title)}:`].concat(t8.values.map((u) => yn2(u, r2 - En2.length).replace(/^|\n/g, `$&${En2}`))).join(`
`)), An2(n2, r2);
}
function An2(e2, t8) {
  if (e2.length === 1) return e2[0];
  let [r2, n2] = e2, [u, i] = e2.map((o2) => o2.split(`
`, 1)[0].length);
  return u > t8 && u > i ? n2 : r2;
}
function Gt2(e2, t8) {
  if (e2 === t8) return 0;
  let r2 = e2;
  e2.length > t8.length && (e2 = t8, t8 = r2);
  let n2 = e2.length, u = t8.length;
  for (; n2 > 0 && e2.charCodeAt(~-n2) === t8.charCodeAt(~-u); ) n2--, u--;
  let i = 0;
  for (; i < n2 && e2.charCodeAt(i) === t8.charCodeAt(i); ) i++;
  if (n2 -= i, u -= i, n2 === 0) return u;
  let o2, s2, a, D, l2 = 0, p = 0;
  for (; l2 < n2; ) vn2[l2] = e2.charCodeAt(i + l2), zt2[l2] = ++l2;
  for (; p < u; ) for (o2 = t8.charCodeAt(i + p), a = p++, s2 = p, l2 = 0; l2 < n2; l2++) D = o2 === vn2[l2] ? a : a + 1, a = zt2[l2], s2 = zt2[l2] = a > s2 ? D > s2 ? s2 + 1 : D : D > a ? a + 1 : D;
  return s2;
}
function mi2(e2, t8) {
  let r2 = new e2(t8), n2 = Object.create(r2);
  for (let u of Fi2) u in t8 && (n2[u] = hi2(t8[u], r2, x.prototype[u].length));
  return n2;
}
function hi2(e2, t8, r2) {
  return typeof e2 == "function" ? (...n2) => e2(...n2.slice(0, r2 - 1), t8, ...n2.slice(r2 - 1)) : () => e2;
}
function Bn2({ from: e2, to: t8 }) {
  return { from: [e2], to: t8 };
}
function _n2(e2, t8) {
  let r2 = /* @__PURE__ */ Object.create(null);
  for (let n2 of e2) {
    let u = n2[t8];
    if (r2[u]) throw new Error(`Duplicate ${t8} ${JSON.stringify(u)}`);
    r2[u] = n2;
  }
  return r2;
}
function xn2(e2, t8) {
  let r2 = /* @__PURE__ */ new Map();
  for (let n2 of e2) {
    let u = n2[t8];
    if (r2.has(u)) throw new Error(`Duplicate ${t8} ${JSON.stringify(u)}`);
    r2.set(u, n2);
  }
  return r2;
}
function bn2() {
  let e2 = /* @__PURE__ */ Object.create(null);
  return (t8) => {
    let r2 = JSON.stringify(t8);
    return e2[r2] ? true : (e2[r2] = true, false);
  };
}
function Nn2(e2, t8) {
  let r2 = [], n2 = [];
  for (let u of e2) t8(u) ? r2.push(u) : n2.push(u);
  return [r2, n2];
}
function On2(e2) {
  return e2 === Math.floor(e2);
}
function Sn2(e2, t8) {
  if (e2 === t8) return 0;
  let r2 = typeof e2, n2 = typeof t8, u = ["undefined", "object", "boolean", "number", "string"];
  return r2 !== n2 ? u.indexOf(r2) - u.indexOf(n2) : r2 !== "string" ? Number(e2) - Number(t8) : e2.localeCompare(t8);
}
function Tn2(e2) {
  return (...t8) => {
    let r2 = e2(...t8);
    return typeof r2 == "string" ? new Error(r2) : r2;
  };
}
function Jt(e2) {
  return e2 === void 0 ? {} : e2;
}
function qt2(e2) {
  if (typeof e2 == "string") return { text: e2 };
  let { text: t8, list: r2 } = e2;
  return Ei2((t8 || r2) !== void 0, "Unexpected `expected` result, there should be at least one field."), r2 ? { text: t8, list: { title: r2.title, values: r2.values.map(qt2) } } : { text: t8 };
}
function Xt(e2, t8) {
  return e2 === true ? true : e2 === false ? { value: t8 } : e2;
}
function Qt2(e2, t8, r2 = false) {
  return e2 === false ? false : e2 === true ? r2 ? true : [{ value: t8 }] : "value" in e2 ? [e2] : e2.length === 0 ? false : e2;
}
function wn2(e2, t8) {
  return typeof e2 == "string" || "key" in e2 ? { from: t8, to: e2 } : "from" in e2 ? { from: e2.from, to: e2.to } : { from: t8, to: e2.to };
}
function dt(e2, t8) {
  return e2 === void 0 ? [] : Array.isArray(e2) ? e2.map((r2) => wn2(r2, t8)) : [wn2(e2, t8)];
}
function Zt(e2, t8) {
  let r2 = dt(typeof e2 == "object" && "redirect" in e2 ? e2.redirect : e2, t8);
  return r2.length === 0 ? { remain: t8, redirect: r2 } : typeof e2 == "object" && "remain" in e2 ? { remain: e2.remain, redirect: r2 } : { redirect: r2 };
}
function Ei2(e2, t8) {
  if (!e2) throw new Error(t8);
}
function gi2(e2, t8, { logger: r2 = false, isCLI: n2 = false, passThrough: u = false, FlagSchema: i, descriptor: o2 } = {}) {
  if (n2) {
    if (!i) throw new Error("'FlagSchema' option is required.");
    if (!o2) throw new Error("'descriptor' option is required.");
  } else o2 = oe;
  let s2 = u ? Array.isArray(u) ? (f, d) => u.includes(f) ? { [f]: d } : void 0 : (f, d) => ({ [f]: d }) : (f, d, c2) => {
    let { _: F, ...m2 } = c2.schemas;
    return at2(f, d, { ...c2, schemas: m2 });
  }, a = yi2(t8, { isCLI: n2, FlagSchema: i }), D = new ht2(a, { logger: r2, unknown: s2, descriptor: o2 }), l2 = r2 !== false;
  l2 && er && (D._hasDeprecationWarned = er);
  let p = D.normalize(e2);
  return l2 && (er = D._hasDeprecationWarned), p;
}
function yi2(e2, { isCLI: t8, FlagSchema: r2 }) {
  let n2 = [];
  t8 && n2.push(lt2.create({ name: "_" }));
  for (let u of e2) n2.push(Ai2(u, { isCLI: t8, optionInfos: e2, FlagSchema: r2 })), u.alias && t8 && n2.push(Dt2.create({ name: u.alias, sourceName: u.name }));
  return n2;
}
function Ai2(e2, { isCLI: t8, optionInfos: r2, FlagSchema: n2 }) {
  let { name: u } = e2, i = { name: u }, o2, s2 = {};
  switch (e2.type) {
    case "int":
      o2 = mt2, t8 && (i.preprocess = Number);
      break;
    case "string":
      o2 = je2;
      break;
    case "choice":
      o2 = pt2, i.choices = e2.choices.map((a) => a != null && a.redirect ? { ...a, redirect: { to: { key: e2.name, value: a.redirect } } } : a);
      break;
    case "boolean":
      o2 = ft2;
      break;
    case "flag":
      o2 = n2, i.flags = r2.flatMap((a) => [a.alias, a.description && a.name, a.oppositeDescription && `no-${a.name}`].filter(Boolean));
      break;
    case "path":
      o2 = je2;
      break;
    default:
      throw new Error(`Unexpected type ${e2.type}`);
  }
  if (e2.exception ? i.validate = (a, D, l2) => e2.exception(a) || D.validate(a, l2) : i.validate = (a, D, l2) => a === void 0 || D.validate(a, l2), e2.redirect && (s2.redirect = (a) => a ? { to: typeof e2.redirect == "string" ? e2.redirect : { key: e2.redirect.option, value: e2.redirect.value } } : void 0), e2.deprecated && (s2.deprecated = true), t8 && !e2.array) {
    let a = i.preprocess || ((D) => D);
    i.preprocess = (D, l2, p) => l2.preprocess(a(Array.isArray(D) ? A(false, D, -1) : D), p);
  }
  return e2.array ? ct2.create({ ...t8 ? { preprocess: (a) => Array.isArray(a) ? a : [a] } : {}, ...s2, valueSchema: o2.create(i) }) : o2.create({ ...i, ...s2 });
}
function rr2(e2, t8) {
  if (!t8) throw new Error("parserName is required.");
  let r2 = tr2(false, e2, (u) => u.parsers && Object.prototype.hasOwnProperty.call(u.parsers, t8));
  if (r2) return r2;
  let n2 = `Couldn't resolve parser "${t8}".`;
  throw n2 += " Plugins must be explicitly added to the standalone bundle.", new Re2(n2);
}
function Yn2(e2, t8) {
  if (!t8) throw new Error("astFormat is required.");
  let r2 = tr2(false, e2, (u) => u.printers && Object.prototype.hasOwnProperty.call(u.printers, t8));
  if (r2) return r2;
  let n2 = `Couldn't find plugin for AST format "${t8}".`;
  throw n2 += " Plugins must be explicitly added to the standalone bundle.", new Re2(n2);
}
function Et2({ plugins: e2, parser: t8 }) {
  let r2 = rr2(e2, t8);
  return nr2(r2, t8);
}
function nr2(e2, t8) {
  let r2 = e2.parsers[t8];
  return typeof r2 == "function" ? r2() : r2;
}
function jn2(e2, t8) {
  let r2 = e2.printers[t8];
  return typeof r2 == "function" ? r2() : r2;
}
async function Bi2(e2, t8 = {}) {
  var p;
  let r2 = { ...e2 };
  if (!r2.parser) if (r2.filepath) {
    if (r2.parser = pn2(r2, { physicalFile: r2.filepath }), !r2.parser) throw new Ye2(`No parser could be inferred for file "${r2.filepath}".`);
  } else throw new Ye2("No parser and no file path given, couldn't infer a parser.");
  let n2 = it2({ plugins: e2.plugins, showDeprecated: true }).options, u = { ...Hn2, ...Object.fromEntries(n2.filter((f) => f.default !== void 0).map((f) => [f.name, f.default])) }, i = rr2(r2.plugins, r2.parser), o2 = await nr2(i, r2.parser);
  r2.astFormat = o2.astFormat, r2.locEnd = o2.locEnd, r2.locStart = o2.locStart;
  let s2 = (p = i.printers) != null && p[o2.astFormat] ? i : Yn2(r2.plugins, o2.astFormat), a = await jn2(s2, o2.astFormat);
  r2.printer = a;
  let D = s2.defaultOptions ? Object.fromEntries(Object.entries(s2.defaultOptions).filter(([, f]) => f !== void 0)) : {}, l2 = { ...u, ...D };
  for (let [f, d] of Object.entries(l2)) (r2[f] === null || r2[f] === void 0) && (r2[f] = d);
  return r2.parser === "json" && (r2.trailingComma = "none"), Rn2(r2, n2, { passThrough: Object.keys(Hn2), ...t8 });
}
async function bi2(e2, t8) {
  let r2 = await Et2(t8), n2 = r2.preprocess ? r2.preprocess(e2, t8) : e2;
  t8.originalText = n2;
  let u;
  try {
    u = await r2.parse(n2, t8, t8);
  } catch (i) {
    Ni2(i, e2);
  }
  return { text: n2, ast: u };
}
function Ni2(e2, t8) {
  let { loc: r2 } = e2;
  if (r2) {
    let n2 = (0, Mn2.codeFrameColumns)(t8, r2, { highlightCode: true });
    throw e2.message += `
` + n2, e2.codeFrame = n2, e2;
  }
  throw e2;
}
async function Vn2(e2, t8, r2, n2, u) {
  let { embeddedLanguageFormatting: i, printer: { embed: o2, hasPrettierIgnore: s2 = () => false, getVisitorKeys: a } } = r2;
  if (!o2 || i !== "auto") return;
  if (o2.length > 2) throw new Error("printer.embed has too many parameters. The API changed in Prettier v3. Please update your plugin. See https://prettier.io/docs/plugins#optional-embed");
  let D = q(o2.getVisitorKeys ?? a), l2 = [];
  d();
  let p = e2.stack;
  for (let { print: c2, node: F, pathStack: m2 } of l2) try {
    e2.stack = m2;
    let h2 = await c2(f, t8, e2, r2);
    h2 && u.set(F, h2);
  } catch (h2) {
    if (globalThis.PRETTIER_DEBUG) throw h2;
  }
  e2.stack = p;
  function f(c2, F) {
    return Oi2(c2, F, r2, n2);
  }
  function d() {
    let { node: c2 } = e2;
    if (c2 === null || typeof c2 != "object" || s2(e2)) return;
    for (let m2 of D(c2)) Array.isArray(c2[m2]) ? e2.each(d, m2) : e2.call(d, m2);
    let F = o2(e2, r2);
    if (F) {
      if (typeof F == "function") {
        l2.push({ print: F, node: c2, pathStack: [...e2.stack] });
        return;
      }
      u.set(c2, F);
    }
  }
}
async function Oi2(e2, t8, r2, n2) {
  let u = await se2({ ...r2, ...t8, parentParser: r2.parser, originalText: e2 }, { passThrough: true }), { ast: i } = await fe2(e2, u), o2 = await n2(i, u);
  return qe2(o2);
}
function Si2(e2, t8) {
  let { originalText: r2, [Symbol.for("comments")]: n2, locStart: u, locEnd: i, [Symbol.for("printedComments")]: o2 } = t8, { node: s2 } = e2, a = u(s2), D = i(s2);
  for (let l2 of n2) u(l2) >= a && i(l2) <= D && o2.add(l2);
  return r2.slice(a, D);
}
async function He2(e2, t8) {
  ({ ast: e2 } = await ir2(e2, t8));
  let r2 = /* @__PURE__ */ new Map(), n2 = new qr(e2), u = cn2(t8), i = /* @__PURE__ */ new Map();
  await Vn2(n2, s2, t8, He2, i);
  let o2 = await zn2(n2, t8, s2, void 0, i);
  if (ln2(t8), t8.nodeAfterCursor && !t8.nodeBeforeCursor) return [Z2, o2];
  if (t8.nodeBeforeCursor && !t8.nodeAfterCursor) return [o2, Z2];
  return o2;
  function s2(D, l2) {
    return D === void 0 || D === n2 ? a(l2) : Array.isArray(D) ? n2.call(() => a(l2), ...D) : n2.call(() => a(l2), D);
  }
  function a(D) {
    u(n2);
    let l2 = n2.node;
    if (l2 == null) return "";
    let p = l2 && typeof l2 == "object" && D === void 0;
    if (p && r2.has(l2)) return r2.get(l2);
    let f = zn2(n2, t8, s2, D, i);
    return p && r2.set(l2, f), f;
  }
}
function zn2(e2, t8, r2, n2, u) {
  var a;
  let { node: i } = e2, { printer: o2 } = t8, s2;
  switch ((a = o2.hasPrettierIgnore) != null && a.call(o2, e2) ? s2 = Un2(e2, t8) : u.has(i) ? s2 = u.get(i) : s2 = o2.print(e2, t8, r2, n2), i) {
    case t8.cursorNode:
      s2 = me2(s2, (D) => [Z2, D, Z2]);
      break;
    case t8.nodeBeforeCursor:
      s2 = me2(s2, (D) => [D, Z2]);
      break;
    case t8.nodeAfterCursor:
      s2 = me2(s2, (D) => [Z2, D]);
      break;
  }
  return o2.printComment && (!o2.willPrintOwnComments || !o2.willPrintOwnComments(e2, t8)) && (s2 = Dn2(e2, s2, t8)), s2;
}
async function ir2(e2, t8) {
  let r2 = e2.comments ?? [];
  t8[Symbol.for("comments")] = r2, t8[Symbol.for("tokens")] = e2.tokens ?? [], t8[Symbol.for("printedComments")] = /* @__PURE__ */ new Set(), on2(e2, t8);
  let { printer: { preprocess: n2 } } = t8;
  return e2 = n2 ? await n2(e2, t8) : e2, { ast: e2, comments: r2 };
}
function Ti2(e2, t8) {
  let { cursorOffset: r2, locStart: n2, locEnd: u } = t8, i = q(t8.printer.getVisitorKeys), o2 = (d) => n2(d) <= r2 && u(d) >= r2, s2 = e2, a = [e2];
  for (let d of Zr2(e2, { getVisitorKeys: i, filter: o2 })) a.push(d), s2 = d;
  if (en2(s2, { getVisitorKeys: i })) return { cursorNode: s2 };
  let D, l2, p = -1, f = Number.POSITIVE_INFINITY;
  for (; a.length > 0 && (D === void 0 || l2 === void 0); ) {
    s2 = a.pop();
    let d = D !== void 0, c2 = l2 !== void 0;
    for (let F of ye2(s2, { getVisitorKeys: i })) {
      if (!d) {
        let m2 = u(F);
        m2 <= r2 && m2 > p && (D = F, p = m2);
      }
      if (!c2) {
        let m2 = n2(F);
        m2 >= r2 && m2 < f && (l2 = F, f = m2);
      }
    }
  }
  return { nodeBeforeCursor: D, nodeAfterCursor: l2 };
}
function ki2(e2, t8) {
  let { printer: { massageAstNode: r2, getVisitorKeys: n2 } } = t8;
  if (!r2) return e2;
  let u = q(n2), i = r2.ignoredProperties ?? /* @__PURE__ */ new Set();
  return o2(e2);
  function o2(s2, a) {
    if (!(s2 !== null && typeof s2 == "object")) return s2;
    if (Array.isArray(s2)) return s2.map((f) => o2(f, a)).filter(Boolean);
    let D = {}, l2 = new Set(u(s2));
    for (let f in s2) !Object.prototype.hasOwnProperty.call(s2, f) || i.has(f) || (l2.has(f) ? D[f] = o2(s2[f], s2) : D[f] = s2[f]);
    let p = r2(s2, D, a);
    if (p !== null) return p ?? D;
  }
}
function Ii2(e2, t8) {
  let r2 = [e2.node, ...e2.parentNodes], n2 = /* @__PURE__ */ new Set([t8.node, ...t8.parentNodes]);
  return r2.find((u) => Qn2.has(u.type) && n2.has(u));
}
function qn2(e2) {
  let t8 = Jn2(false, e2, (r2) => r2.type !== "Program" && r2.type !== "File");
  return t8 === -1 ? e2 : e2.slice(0, t8 + 1);
}
function Ri2(e2, t8, { locStart: r2, locEnd: n2 }) {
  let u = e2.node, i = t8.node;
  if (u === i) return { startNode: u, endNode: i };
  let o2 = r2(e2.node);
  for (let a of qn2(t8.parentNodes)) if (r2(a) >= o2) i = a;
  else break;
  let s2 = n2(t8.node);
  for (let a of qn2(e2.parentNodes)) {
    if (n2(a) <= s2) u = a;
    else break;
    if (u === i) break;
  }
  return { startNode: u, endNode: i };
}
function or2(e2, t8, r2, n2, u = [], i) {
  let { locStart: o2, locEnd: s2 } = r2, a = o2(e2), D = s2(e2);
  if (!(t8 > D || t8 < a || i === "rangeEnd" && t8 === a || i === "rangeStart" && t8 === D)) {
    for (let l2 of ut2(e2, r2)) {
      let p = or2(l2, t8, r2, n2, [e2, ...u], i);
      if (p) return p;
    }
    if (!n2 || n2(e2, u[0])) return { node: e2, parentNodes: u };
  }
}
function Yi2(e2, t8) {
  return t8 !== "DeclareExportDeclaration" && e2 !== "TypeParameterDeclaration" && (e2 === "Directive" || e2 === "TypeAlias" || e2 === "TSExportAssignment" || e2.startsWith("Declare") || e2.startsWith("TSDeclare") || e2.endsWith("Statement") || e2.endsWith("Declaration"));
}
function Xn2(e2, t8, r2) {
  if (!t8) return false;
  switch (e2.parser) {
    case "flow":
    case "babel":
    case "babel-flow":
    case "babel-ts":
    case "typescript":
    case "acorn":
    case "espree":
    case "meriyah":
    case "__babel_estree":
      return Yi2(t8.type, r2 == null ? void 0 : r2.type);
    case "json":
    case "json5":
    case "jsonc":
    case "json-stringify":
      return Qn2.has(t8.type);
    case "graphql":
      return ji2.has(t8.kind);
    case "vue":
      return t8.tag !== "root";
  }
  return false;
}
function Zn2(e2, t8, r2) {
  let { rangeStart: n2, rangeEnd: u, locStart: i, locEnd: o2 } = t8;
  Pe2.ok(u > n2);
  let s2 = e2.slice(n2, u).search(/\S/u), a = s2 === -1;
  if (!a) for (n2 += s2; u > n2 && !/\S/u.test(e2[u - 1]); --u) ;
  let D = or2(r2, n2, t8, (d, c2) => Xn2(t8, d, c2), [], "rangeStart"), l2 = a ? D : or2(r2, u, t8, (d) => Xn2(t8, d), [], "rangeEnd");
  if (!D || !l2) return { rangeStart: 0, rangeEnd: 0 };
  let p, f;
  if (Pi2(t8)) {
    let d = Ii2(D, l2);
    p = d, f = d;
  } else ({ startNode: p, endNode: f } = Ri2(D, l2, t8));
  return { rangeStart: Math.min(i(p), i(f)), rangeEnd: Math.max(o2(p), o2(f)) };
}
async function uu(e2, t8, r2 = 0) {
  if (!e2 || e2.trim().length === 0) return { formatted: "", cursorOffset: -1, comments: [] };
  let { ast: n2, text: u } = await fe2(e2, t8);
  t8.cursorOffset >= 0 && (t8 = { ...t8, ...Gn2(n2, t8) });
  let i = await He2(n2, t8, r2);
  r2 > 0 && (i = Ze2([K2, i], r2, t8.tabWidth));
  let o2 = Ce2(i, t8);
  if (r2 > 0) {
    let a = o2.formatted.trim();
    o2.cursorNodeStart !== void 0 && (o2.cursorNodeStart -= o2.formatted.indexOf(a), o2.cursorNodeStart < 0 && (o2.cursorNodeStart = 0, o2.cursorNodeText = o2.cursorNodeText.trimStart()), o2.cursorNodeStart + o2.cursorNodeText.length > a.length && (o2.cursorNodeText = o2.cursorNodeText.trimEnd())), o2.formatted = a + be2(t8.endOfLine);
  }
  let s2 = t8[Symbol.for("comments")];
  if (t8.cursorOffset >= 0) {
    let a, D, l2, p;
    if ((t8.cursorNode || t8.nodeBeforeCursor || t8.nodeAfterCursor) && o2.cursorNodeText) if (l2 = o2.cursorNodeStart, p = o2.cursorNodeText, t8.cursorNode) a = t8.locStart(t8.cursorNode), D = u.slice(a, t8.locEnd(t8.cursorNode));
    else {
      if (!t8.nodeBeforeCursor && !t8.nodeAfterCursor) throw new Error("Cursor location must contain at least one of cursorNode, nodeBeforeCursor, nodeAfterCursor");
      a = t8.nodeBeforeCursor ? t8.locEnd(t8.nodeBeforeCursor) : 0;
      let h2 = t8.nodeAfterCursor ? t8.locStart(t8.nodeAfterCursor) : u.length;
      D = u.slice(a, h2);
    }
    else a = 0, D = u, l2 = 0, p = o2.formatted;
    let f = t8.cursorOffset - a;
    if (D === p) return { formatted: o2.formatted, cursorOffset: l2 + f, comments: s2 };
    let d = D.split("");
    d.splice(f, 0, eu);
    let c2 = p.split(""), F = yr2(d, c2), m2 = l2;
    for (let h2 of F) if (h2.removed) {
      if (h2.value.includes(eu)) break;
    } else m2 += h2.count;
    return { formatted: o2.formatted, cursorOffset: m2, comments: s2 };
  }
  return { formatted: o2.formatted, cursorOffset: -1, comments: s2 };
}
async function Hi2(e2, t8) {
  let { ast: r2, text: n2 } = await fe2(e2, t8), { rangeStart: u, rangeEnd: i } = Zn2(n2, t8, r2), o2 = n2.slice(u, i), s2 = Math.min(u, n2.lastIndexOf(`
`, u) + 1), a = n2.slice(s2, u).match(/^\s*/u)[0], D = ge2(a, t8.tabWidth), l2 = await uu(o2, { ...t8, rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: t8.cursorOffset > u && t8.cursorOffset <= i ? t8.cursorOffset - u : -1, endOfLine: "lf" }, D), p = l2.formatted.trimEnd(), { cursorOffset: f } = t8;
  f > i ? f += p.length - o2.length : l2.cursorOffset >= 0 && (f = l2.cursorOffset + u);
  let d = n2.slice(0, u) + p + n2.slice(i);
  if (t8.endOfLine !== "lf") {
    let c2 = be2(t8.endOfLine);
    f >= 0 && c2 === `\r
` && (f += Nt2(d.slice(0, f), `
`)), d = ne2(false, d, `
`, c2);
  }
  return { formatted: d, cursorOffset: f, comments: l2.comments };
}
function sr2(e2, t8, r2) {
  return typeof t8 != "number" || Number.isNaN(t8) || t8 < 0 || t8 > e2.length ? r2 : t8;
}
function tu(e2, t8) {
  let { cursorOffset: r2, rangeStart: n2, rangeEnd: u } = t8;
  return r2 = sr2(e2, r2, -1), n2 = sr2(e2, n2, 0), u = sr2(e2, u, e2.length), { ...t8, cursorOffset: r2, rangeStart: n2, rangeEnd: u };
}
function iu(e2, t8) {
  let { cursorOffset: r2, rangeStart: n2, rangeEnd: u, endOfLine: i } = tu(e2, t8), o2 = e2.charAt(0) === nu;
  if (o2 && (e2 = e2.slice(1), r2--, n2--, u--), i === "auto" && (i = Ar2(e2)), e2.includes("\r")) {
    let s2 = (a) => Nt2(e2.slice(0, Math.max(a, 0)), `\r
`);
    r2 -= s2(r2), n2 -= s2(n2), u -= s2(u), e2 = vr2(e2);
  }
  return { hasBOM: o2, text: e2, options: tu(e2, { ...t8, cursorOffset: r2, rangeStart: n2, rangeEnd: u, endOfLine: i }) };
}
async function ru(e2, t8) {
  let r2 = await Et2(t8);
  return !r2.hasPragma || r2.hasPragma(e2);
}
async function ar2(e2, t8) {
  let { hasBOM: r2, text: n2, options: u } = iu(e2, await se2(t8));
  if (u.rangeStart >= u.rangeEnd && n2 !== "" || u.requirePragma && !await ru(n2, u)) return { formatted: e2, cursorOffset: t8.cursorOffset, comments: [] };
  let i;
  return u.rangeStart > 0 || u.rangeEnd < n2.length ? i = await Hi2(n2, u) : (!u.requirePragma && u.insertPragma && u.printer.insertPragma && !await ru(n2, u) && (n2 = u.printer.insertPragma(n2)), i = await uu(n2, u)), r2 && (i.formatted = nu + i.formatted, i.cursorOffset >= 0 && i.cursorOffset++), i;
}
async function ou(e2, t8, r2) {
  let { text: n2, options: u } = iu(e2, await se2(t8)), i = await fe2(n2, u);
  return r2 && (r2.preprocessForPrint && (i.ast = await ir2(i.ast, u)), r2.massage && (i.ast = Kn2(i.ast, u))), i;
}
async function su(e2, t8) {
  t8 = await se2(t8);
  let r2 = await He2(e2, t8);
  return Ce2(r2, t8);
}
async function au(e2, t8) {
  let r2 = Vr2(e2), { formatted: n2 } = await ar2(r2, { ...t8, parser: "__js_expression" });
  return n2;
}
async function Du(e2, t8) {
  t8 = await se2(t8);
  let { ast: r2 } = await fe2(e2, t8);
  return He2(r2, t8);
}
async function lu(e2, t8) {
  return Ce2(e2, await se2(t8));
}
function Ui2(e2, t8) {
  if (t8 === false) return false;
  if (e2.charAt(t8) === "/" && e2.charAt(t8 + 1) === "*") {
    for (let r2 = t8 + 2; r2 < e2.length; ++r2) if (e2.charAt(r2) === "*" && e2.charAt(r2 + 1) === "/") return r2 + 2;
  }
  return t8;
}
function zi2(e2, t8) {
  return t8 === false ? false : e2.charAt(t8) === "/" && e2.charAt(t8 + 1) === "/" ? nt2(e2, t8) : t8;
}
function Gi2(e2, t8) {
  let r2 = null, n2 = t8;
  for (; n2 !== r2; ) r2 = n2, n2 = S2(e2, n2), n2 = Be2(e2, n2), n2 = we2(e2, n2), n2 = W2(e2, n2);
  return n2;
}
function Ki2(e2, t8) {
  let r2 = null, n2 = t8;
  for (; n2 !== r2; ) r2 = n2, n2 = rt2(e2, n2), n2 = Be2(e2, n2), n2 = S2(e2, n2);
  return n2 = we2(e2, n2), n2 = W2(e2, n2), n2 !== false && V3(e2, n2);
}
function Ji2(e2, t8) {
  let r2 = e2.lastIndexOf(`
`);
  return r2 === -1 ? 0 : ge2(e2.slice(r2 + 1).match(/^[\t ]*/u)[0], t8);
}
function lr2(e2) {
  if (typeof e2 != "string") throw new TypeError("Expected a string");
  return e2.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
}
function qi2(e2, t8) {
  let r2 = e2.match(new RegExp(`(${lr2(t8)})+`, "gu"));
  return r2 === null ? 0 : r2.reduce((n2, u) => Math.max(n2, u.length / t8.length), 0);
}
function Xi2(e2, t8) {
  let r2 = We(e2, t8);
  return r2 === false ? "" : e2.charAt(r2);
}
function Qi2(e2, t8) {
  let r2 = t8 === true || t8 === gt2 ? gt2 : Fu, n2 = r2 === gt2 ? Fu : gt2, u = 0, i = 0;
  for (let o2 of e2) o2 === r2 ? u++ : o2 === n2 && i++;
  return u > i ? n2 : r2;
}
function Zi2(e2, t8, r2) {
  for (let n2 = t8; n2 < r2; ++n2) if (e2.charAt(n2) === `
`) return true;
  return false;
}
function eo(e2, t8, r2 = {}) {
  return S2(e2, r2.backwards ? t8 - 1 : t8, r2) !== t8;
}
function to(e2, t8, r2) {
  let n2 = t8 === '"' ? "'" : '"', i = ne2(false, e2, /\\(.)|(["'])/gsu, (o2, s2, a) => s2 === n2 ? s2 : a === t8 ? "\\" + a : a || (r2 && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/u.test(s2) ? s2 : "\\" + s2));
  return t8 + i + t8;
}
function ro(e2, t8, r2) {
  return We(e2, r2(t8));
}
function no(e2, t8) {
  return arguments.length === 2 || typeof t8 == "number" ? We(e2, t8) : ro(...arguments);
}
function uo(e2, t8, r2) {
  return Ie2(e2, r2(t8));
}
function io(e2, t8) {
  return arguments.length === 2 || typeof t8 == "number" ? Ie2(e2, t8) : uo(...arguments);
}
function oo(e2, t8, r2) {
  return Ct2(e2, r2(t8));
}
function so(e2, t8) {
  return arguments.length === 2 || typeof t8 == "number" ? Ct2(e2, t8) : oo(...arguments);
}
function de2(e2, t8 = 1) {
  return async (...r2) => {
    let n2 = r2[t8] ?? {}, u = n2.plugins ?? [];
    return r2[t8] = { ...n2, plugins: Array.isArray(u) ? u : Object.values(u) }, e2(...r2);
  };
}
async function yu(e2, t8) {
  let { formatted: r2 } = await gu(e2, { ...t8, cursorOffset: -1 });
  return r2;
}
async function ao(e2, t8) {
  return await yu(e2, t8) === e2;
}
var Au, At2, vu, Bu, wu, _u, dr2, pr2, vt2, xu, Me2, bu, Fr2, pe2, ot2, $n2, fr2, Nu, ne2, mo, Ue2, Su, Ge2, Tu, bt2, ku, Lu, xe2, ze3, $2, H2, z2, T2, k2, L2, B2, N2, w2, P2, I2, R2, y, O2, _2, Ke2, Pu, A, M, Ru, Ot2, Q2, Br2, Fe2, St2, G2, Tt2, Tr2, Hr, he2, Wr2, ke2, Lt2, Qe2, $r2, K2, Xe2, Z2, Ur2, Kr2, Uu, Le2, Y2, J2, Ee2, Pt2, ge2, te2, jt2, tt2, Yt2, qr, Xr2, Pe2, Qr2, tn, S2, rt2, nt2, W2, V3, Ht2, rn, ei2, q, $t2, Mt2, sn2, Ie2, cn2, Re2, Ye2, fn2, fi2, pn2, oe, Ut2, hn2, ce2, st2, ve, En2, gn2, Kt2, zt2, vn2, at2, Fi2, x, Dt2, lt2, ct2, ft2, pt2, Ft2, mt2, je2, kn2, Ln2, Pn2, In2, ht2, er, Rn2, vi2, tr2, Hn2, se2, Mn2, fe2, Un2, Gn2, Kn2, Li2, Jn2, Pi2, Qn2, ji2, nu, eu, Dr2, $i2, Mi2, Vi2, cu, cr2, Be2, we2, We, Ct2, fu, du, pu, gt2, Fu, mu, hu, Eu, Cu, gu, Do2, lo;
var init_standalone = __esm({
  "node_modules/prettier/standalone.mjs"() {
    Au = Object.create;
    At2 = Object.defineProperty;
    vu = Object.getOwnPropertyDescriptor;
    Bu = Object.getOwnPropertyNames;
    wu = Object.getPrototypeOf;
    _u = Object.prototype.hasOwnProperty;
    dr2 = (e2) => {
      throw TypeError(e2);
    };
    pr2 = (e2, t8) => () => (t8 || e2((t8 = { exports: {} }).exports, t8), t8.exports);
    vt2 = (e2, t8) => {
      for (var r2 in t8) At2(e2, r2, { get: t8[r2], enumerable: true });
    };
    xu = (e2, t8, r2, n2) => {
      if (t8 && typeof t8 == "object" || typeof t8 == "function") for (let u of Bu(t8)) !_u.call(e2, u) && u !== r2 && At2(e2, u, { get: () => t8[u], enumerable: !(n2 = vu(t8, u)) || n2.enumerable });
      return e2;
    };
    Me2 = (e2, t8, r2) => (r2 = e2 != null ? Au(wu(e2)) : {}, xu(t8 || !e2 || !e2.__esModule ? At2(r2, "default", { value: e2, enumerable: true }) : r2, e2));
    bu = (e2, t8, r2) => t8.has(e2) || dr2("Cannot " + r2);
    Fr2 = (e2, t8, r2) => t8.has(e2) ? dr2("Cannot add the same private member more than once") : t8 instanceof WeakSet ? t8.add(e2) : t8.set(e2, r2);
    pe2 = (e2, t8, r2) => (bu(e2, t8, "access private method"), r2);
    ot2 = pr2((Da2, mn2) => {
      "use strict";
      var Fn2 = new Proxy(String, { get: () => Fn2 });
      mn2.exports = Fn2;
    });
    $n2 = pr2((ur2) => {
      "use strict";
      Object.defineProperty(ur2, "__esModule", { value: true });
      function wi2() {
        return new Proxy({}, { get: () => (e2) => e2 });
      }
      var Wn2 = /\r\n|[\n\r\u2028\u2029]/;
      function _i2(e2, t8, r2) {
        let n2 = Object.assign({ column: 0, line: -1 }, e2.start), u = Object.assign({}, n2, e2.end), { linesAbove: i = 2, linesBelow: o2 = 3 } = r2 || {}, s2 = n2.line, a = n2.column, D = u.line, l2 = u.column, p = Math.max(s2 - (i + 1), 0), f = Math.min(t8.length, D + o2);
        s2 === -1 && (p = 0), D === -1 && (f = t8.length);
        let d = D - s2, c2 = {};
        if (d) for (let F = 0; F <= d; F++) {
          let m2 = F + s2;
          if (!a) c2[m2] = true;
          else if (F === 0) {
            let h2 = t8[m2 - 1].length;
            c2[m2] = [a, h2 - a + 1];
          } else if (F === d) c2[m2] = [0, l2];
          else {
            let h2 = t8[m2 - F].length;
            c2[m2] = [0, h2];
          }
        }
        else a === l2 ? a ? c2[s2] = [a, 0] : c2[s2] = true : c2[s2] = [a, l2 - a];
        return { start: p, end: f, markerLines: c2 };
      }
      function xi2(e2, t8, r2 = {}) {
        let u = wi2(false), i = e2.split(Wn2), { start: o2, end: s2, markerLines: a } = _i2(t8, i, r2), D = t8.start && typeof t8.start.column == "number", l2 = String(s2).length, f = e2.split(Wn2, s2).slice(o2, s2).map((d, c2) => {
          let F = o2 + 1 + c2, h2 = ` ${` ${F}`.slice(-l2)} |`, C = a[F], v2 = !a[F + 1];
          if (C) {
            let E2 = "";
            if (Array.isArray(C)) {
              let g = d.slice(0, Math.max(C[0] - 1, 0)).replace(/[^\t]/g, " "), j2 = C[1] || 1;
              E2 = [`
 `, u.gutter(h2.replace(/\d/g, " ")), " ", g, u.marker("^").repeat(j2)].join(""), v2 && r2.message && (E2 += " " + u.message(r2.message));
            }
            return [u.marker(">"), u.gutter(h2), d.length > 0 ? ` ${d}` : "", E2].join("");
          } else return ` ${u.gutter(h2)}${d.length > 0 ? ` ${d}` : ""}`;
        }).join(`
`);
        return r2.message && !D && (f = `${" ".repeat(l2 + 1)}${r2.message}
${f}`), f;
      }
      ur2.codeFrameColumns = xi2;
    });
    fr2 = {};
    vt2(fr2, { __debug: () => lo, check: () => ao, doc: () => Dr2, format: () => yu, formatWithCursor: () => gu, getSupportInfo: () => Do2, util: () => cr2, version: () => cu });
    Nu = (e2, t8, r2, n2) => {
      if (!(e2 && t8 == null)) return t8.replaceAll ? t8.replaceAll(r2, n2) : r2.global ? t8.replace(r2, n2) : t8.split(r2).join(n2);
    };
    ne2 = Nu;
    U.prototype = { diff: function(t8, r2) {
      var n2, u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = u.callback;
      typeof u == "function" && (i = u, u = {});
      var o2 = this;
      function s2(E2) {
        return E2 = o2.postProcess(E2, u), i ? (setTimeout(function() {
          i(E2);
        }, 0), true) : E2;
      }
      t8 = this.castInput(t8, u), r2 = this.castInput(r2, u), t8 = this.removeEmpty(this.tokenize(t8, u)), r2 = this.removeEmpty(this.tokenize(r2, u));
      var a = r2.length, D = t8.length, l2 = 1, p = a + D;
      u.maxEditLength != null && (p = Math.min(p, u.maxEditLength));
      var f = (n2 = u.timeout) !== null && n2 !== void 0 ? n2 : 1 / 0, d = Date.now() + f, c2 = [{ oldPos: -1, lastComponent: void 0 }], F = this.extractCommon(c2[0], r2, t8, 0, u);
      if (c2[0].oldPos + 1 >= D && F + 1 >= a) return s2(mr2(o2, c2[0].lastComponent, r2, t8, o2.useLongestToken));
      var m2 = -1 / 0, h2 = 1 / 0;
      function C() {
        for (var E2 = Math.max(m2, -l2); E2 <= Math.min(h2, l2); E2 += 2) {
          var g = void 0, j2 = c2[E2 - 1], b2 = c2[E2 + 1];
          j2 && (c2[E2 - 1] = void 0);
          var X2 = false;
          if (b2) {
            var ae2 = b2.oldPos - E2;
            X2 = b2 && 0 <= ae2 && ae2 < a;
          }
          var $e = j2 && j2.oldPos + 1 < D;
          if (!X2 && !$e) {
            c2[E2] = void 0;
            continue;
          }
          if (!$e || X2 && j2.oldPos < b2.oldPos ? g = o2.addToPath(b2, true, false, 0, u) : g = o2.addToPath(j2, false, true, 1, u), F = o2.extractCommon(g, r2, t8, E2, u), g.oldPos + 1 >= D && F + 1 >= a) return s2(mr2(o2, g.lastComponent, r2, t8, o2.useLongestToken));
          c2[E2] = g, g.oldPos + 1 >= D && (h2 = Math.min(h2, E2 - 1)), F + 1 >= a && (m2 = Math.max(m2, E2 + 1));
        }
        l2++;
      }
      if (i) (function E2() {
        setTimeout(function() {
          if (l2 > p || Date.now() > d) return i();
          C() || E2();
        }, 0);
      })();
      else for (; l2 <= p && Date.now() <= d; ) {
        var v2 = C();
        if (v2) return v2;
      }
    }, addToPath: function(t8, r2, n2, u, i) {
      var o2 = t8.lastComponent;
      return o2 && !i.oneChangePerToken && o2.added === r2 && o2.removed === n2 ? { oldPos: t8.oldPos + u, lastComponent: { count: o2.count + 1, added: r2, removed: n2, previousComponent: o2.previousComponent } } : { oldPos: t8.oldPos + u, lastComponent: { count: 1, added: r2, removed: n2, previousComponent: o2 } };
    }, extractCommon: function(t8, r2, n2, u, i) {
      for (var o2 = r2.length, s2 = n2.length, a = t8.oldPos, D = a - u, l2 = 0; D + 1 < o2 && a + 1 < s2 && this.equals(n2[a + 1], r2[D + 1], i); ) D++, a++, l2++, i.oneChangePerToken && (t8.lastComponent = { count: 1, previousComponent: t8.lastComponent, added: false, removed: false });
      return l2 && !i.oneChangePerToken && (t8.lastComponent = { count: l2, previousComponent: t8.lastComponent, added: false, removed: false }), t8.oldPos = a, D;
    }, equals: function(t8, r2, n2) {
      return n2.comparator ? n2.comparator(t8, r2) : t8 === r2 || n2.ignoreCase && t8.toLowerCase() === r2.toLowerCase();
    }, removeEmpty: function(t8) {
      for (var r2 = [], n2 = 0; n2 < t8.length; n2++) t8[n2] && r2.push(t8[n2]);
      return r2;
    }, castInput: function(t8) {
      return t8;
    }, tokenize: function(t8) {
      return Array.from(t8);
    }, join: function(t8) {
      return t8.join("");
    }, postProcess: function(t8) {
      return t8;
    } };
    mo = new U();
    Ue2 = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}";
    Su = new RegExp("[".concat(Ue2, "]+|\\s+|[^").concat(Ue2, "]"), "ug");
    Ge2 = new U();
    Ge2.equals = function(e2, t8, r2) {
      return r2.ignoreCase && (e2 = e2.toLowerCase(), t8 = t8.toLowerCase()), e2.trim() === t8.trim();
    };
    Ge2.tokenize = function(e2) {
      var t8 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r2;
      if (t8.intlSegmenter) {
        if (t8.intlSegmenter.resolvedOptions().granularity != "word") throw new Error('The segmenter passed must have a granularity of "word"');
        r2 = Array.from(t8.intlSegmenter.segment(e2), function(i) {
          return i.segment;
        });
      } else r2 = e2.match(Su) || [];
      var n2 = [], u = null;
      return r2.forEach(function(i) {
        /\s/.test(i) ? u == null ? n2.push(i) : n2.push(n2.pop() + i) : /\s/.test(u) ? n2[n2.length - 1] == u ? n2.push(n2.pop() + i) : n2.push(u + i) : n2.push(i), u = i;
      }), n2;
    };
    Ge2.join = function(e2) {
      return e2.map(function(t8, r2) {
        return r2 == 0 ? t8 : t8.replace(/^\s+/, "");
      }).join("");
    };
    Ge2.postProcess = function(e2, t8) {
      if (!e2 || t8.oneChangePerToken) return e2;
      var r2 = null, n2 = null, u = null;
      return e2.forEach(function(i) {
        i.added ? n2 = i : i.removed ? u = i : ((n2 || u) && gr2(r2, u, n2, i), r2 = i, n2 = null, u = null);
      }), (n2 || u) && gr2(r2, u, n2, null), e2;
    };
    Tu = new U();
    Tu.tokenize = function(e2) {
      var t8 = new RegExp("(\\r?\\n)|[".concat(Ue2, "]+|[^\\S\\n\\r]+|[^").concat(Ue2, "]"), "ug");
      return e2.match(t8) || [];
    };
    bt2 = new U();
    bt2.tokenize = function(e2, t8) {
      t8.stripTrailingCr && (e2 = e2.replace(/\r\n/g, `
`));
      var r2 = [], n2 = e2.split(/(\n|\r\n)/);
      n2[n2.length - 1] || n2.pop();
      for (var u = 0; u < n2.length; u++) {
        var i = n2[u];
        u % 2 && !t8.newlineIsToken ? r2[r2.length - 1] += i : r2.push(i);
      }
      return r2;
    };
    bt2.equals = function(e2, t8, r2) {
      return r2.ignoreWhitespace ? ((!r2.newlineIsToken || !e2.includes(`
`)) && (e2 = e2.trim()), (!r2.newlineIsToken || !t8.includes(`
`)) && (t8 = t8.trim())) : r2.ignoreNewlineAtEof && !r2.newlineIsToken && (e2.endsWith(`
`) && (e2 = e2.slice(0, -1)), t8.endsWith(`
`) && (t8 = t8.slice(0, -1))), U.prototype.equals.call(this, e2, t8, r2);
    };
    ku = new U();
    ku.tokenize = function(e2) {
      return e2.split(/(\S.+?[.!?])(?=\s+|$)/);
    };
    Lu = new U();
    Lu.tokenize = function(e2) {
      return e2.split(/([{}:;,]|\s+)/);
    };
    xe2 = new U();
    xe2.useLongestToken = true;
    xe2.tokenize = bt2.tokenize;
    xe2.castInput = function(e2, t8) {
      var r2 = t8.undefinedReplacement, n2 = t8.stringifyReplacer, u = n2 === void 0 ? function(i, o2) {
        return typeof o2 > "u" ? r2 : o2;
      } : n2;
      return typeof e2 == "string" ? e2 : JSON.stringify(xt2(e2, null, null, u), u, "  ");
    };
    xe2.equals = function(e2, t8, r2) {
      return U.prototype.equals.call(xe2, e2.replace(/,([\r\n])/g, "$1"), t8.replace(/,([\r\n])/g, "$1"), r2);
    };
    ze3 = new U();
    ze3.tokenize = function(e2) {
      return e2.slice();
    };
    ze3.join = ze3.removeEmpty = function(e2) {
      return e2;
    };
    $2 = "string";
    H2 = "array";
    z2 = "cursor";
    T2 = "indent";
    k2 = "align";
    L2 = "trim";
    B2 = "group";
    N2 = "fill";
    w2 = "if-break";
    P2 = "indent-if-break";
    I2 = "line-suffix";
    R2 = "line-suffix-boundary";
    y = "line";
    O2 = "label";
    _2 = "break-parent";
    Ke2 = /* @__PURE__ */ new Set([z2, T2, k2, L2, B2, N2, w2, P2, I2, R2, y, O2, _2]);
    Pu = (e2, t8, r2) => {
      if (!(e2 && t8 == null)) return Array.isArray(t8) || typeof t8 == "string" ? t8[r2 < 0 ? t8.length + r2 : r2] : t8.at(r2);
    };
    A = Pu;
    M = Iu;
    Ru = (e2) => new Intl.ListFormat("en-US", { type: "disjunction" }).format(e2);
    Ot2 = class extends Error {
      name = "InvalidDocError";
      constructor(t8) {
        super(Yu(t8)), this.doc = t8;
      }
    };
    Q2 = Ot2;
    Br2 = {};
    Fe2 = ju;
    St2 = () => {
    };
    G2 = St2;
    Tt2 = St2;
    Tr2 = St2;
    Hr = { type: R2 };
    he2 = { type: _2 };
    Wr2 = { type: L2 };
    ke2 = { type: y, hard: true };
    Lt2 = { type: y, hard: true, literal: true };
    Qe2 = { type: y };
    $r2 = { type: y, soft: true };
    K2 = [ke2, he2];
    Xe2 = [Lt2, he2];
    Z2 = { type: z2 };
    Ur2 = () => /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
    Kr2 = (e2) => !(zr(e2) || Gr(e2));
    Uu = /[^\x20-\x7F]/u;
    Le2 = zu;
    Y2 = Symbol("MODE_BREAK");
    J2 = Symbol("MODE_FLAT");
    Ee2 = Symbol("cursor");
    Pt2 = Symbol("DOC_FILL_PRINTED_LENGTH");
    ge2 = Ju;
    Yt2 = class {
      constructor(t8) {
        Fr2(this, te2);
        this.stack = [t8];
      }
      get key() {
        let { stack: t8, siblings: r2 } = this;
        return A(false, t8, r2 === null ? -2 : -4) ?? null;
      }
      get index() {
        return this.siblings === null ? null : A(false, this.stack, -2);
      }
      get node() {
        return A(false, this.stack, -1);
      }
      get parent() {
        return this.getNode(1);
      }
      get grandparent() {
        return this.getNode(2);
      }
      get isInArray() {
        return this.siblings !== null;
      }
      get siblings() {
        let { stack: t8 } = this, r2 = A(false, t8, -3);
        return Array.isArray(r2) ? r2 : null;
      }
      get next() {
        let { siblings: t8 } = this;
        return t8 === null ? null : t8[this.index + 1];
      }
      get previous() {
        let { siblings: t8 } = this;
        return t8 === null ? null : t8[this.index - 1];
      }
      get isFirst() {
        return this.index === 0;
      }
      get isLast() {
        let { siblings: t8, index: r2 } = this;
        return t8 !== null && r2 === t8.length - 1;
      }
      get isRoot() {
        return this.stack.length === 1;
      }
      get root() {
        return this.stack[0];
      }
      get ancestors() {
        return [...pe2(this, te2, tt2).call(this)];
      }
      getName() {
        let { stack: t8 } = this, { length: r2 } = t8;
        return r2 > 1 ? A(false, t8, -2) : null;
      }
      getValue() {
        return A(false, this.stack, -1);
      }
      getNode(t8 = 0) {
        let r2 = pe2(this, te2, jt2).call(this, t8);
        return r2 === -1 ? null : this.stack[r2];
      }
      getParentNode(t8 = 0) {
        return this.getNode(t8 + 1);
      }
      call(t8, ...r2) {
        let { stack: n2 } = this, { length: u } = n2, i = A(false, n2, -1);
        for (let o2 of r2) i = i[o2], n2.push(o2, i);
        try {
          return t8(this);
        } finally {
          n2.length = u;
        }
      }
      callParent(t8, r2 = 0) {
        let n2 = pe2(this, te2, jt2).call(this, r2 + 1), u = this.stack.splice(n2 + 1);
        try {
          return t8(this);
        } finally {
          this.stack.push(...u);
        }
      }
      each(t8, ...r2) {
        let { stack: n2 } = this, { length: u } = n2, i = A(false, n2, -1);
        for (let o2 of r2) i = i[o2], n2.push(o2, i);
        try {
          for (let o2 = 0; o2 < i.length; ++o2) n2.push(o2, i[o2]), t8(this, o2, i), n2.length -= 2;
        } finally {
          n2.length = u;
        }
      }
      map(t8, ...r2) {
        let n2 = [];
        return this.each((u, i, o2) => {
          n2[i] = t8(u, i, o2);
        }, ...r2), n2;
      }
      match(...t8) {
        let r2 = this.stack.length - 1, n2 = null, u = this.stack[r2--];
        for (let i of t8) {
          if (u === void 0) return false;
          let o2 = null;
          if (typeof n2 == "number" && (o2 = n2, n2 = this.stack[r2--], u = this.stack[r2--]), i && !i(u, n2, o2)) return false;
          n2 = this.stack[r2--], u = this.stack[r2--];
        }
        return true;
      }
      findAncestor(t8) {
        for (let r2 of pe2(this, te2, tt2).call(this)) if (t8(r2)) return r2;
      }
      hasAncestor(t8) {
        for (let r2 of pe2(this, te2, tt2).call(this)) if (t8(r2)) return true;
        return false;
      }
    };
    te2 = /* @__PURE__ */ new WeakSet(), jt2 = function(t8) {
      let { stack: r2 } = this;
      for (let n2 = r2.length - 1; n2 >= 0; n2 -= 2) if (!Array.isArray(r2[n2]) && --t8 < 0) return n2;
      return -1;
    }, tt2 = function* () {
      let { stack: t8 } = this;
      for (let r2 = t8.length - 3; r2 >= 0; r2 -= 2) {
        let n2 = t8[r2];
        Array.isArray(n2) || (yield n2);
      }
    };
    qr = Yt2;
    Xr2 = new Proxy(() => {
    }, { get: () => Xr2 });
    Pe2 = Xr2;
    Qr2 = qu;
    tn = Ae2(/\s/u);
    S2 = Ae2(" 	");
    rt2 = Ae2(",; 	");
    nt2 = Ae2(/[^\n\r]/u);
    W2 = Xu;
    V3 = Qu;
    Ht2 = Zu;
    rn = /* @__PURE__ */ new Set(["tokens", "comments", "parent", "enclosingNode", "precedingNode", "followingNode"]);
    ei2 = (e2) => Object.keys(e2).filter((t8) => !rn.has(t8));
    q = ti2;
    $t2 = /* @__PURE__ */ new WeakMap();
    Mt2 = () => false;
    sn2 = (e2) => !/[\S\n\u2028\u2029]/u.test(e2);
    Ie2 = ii2;
    cn2 = Di2;
    Re2 = class extends Error {
      name = "ConfigError";
    };
    Ye2 = class extends Error {
      name = "UndefinedParserError";
    };
    fn2 = { cursorOffset: { category: "Special", type: "int", default: -1, range: { start: -1, end: 1 / 0, step: 1 }, description: "Print (to stderr) where a cursor at the given position would move to after formatting.", cliCategory: "Editor" }, endOfLine: { category: "Global", type: "choice", default: "lf", description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: `Maintain existing
(mixed values within one file are normalised by looking at what's used after the first line)` }] }, filepath: { category: "Special", type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: "Other", cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { category: "Special", type: "boolean", default: false, description: "Insert @format pragma into file's first docblock comment.", cliCategory: "Other" }, parser: { category: "Global", type: "choice", default: void 0, description: "Which parser to use.", exception: (e2) => typeof e2 == "string" || typeof e2 == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", description: "JavaScript" }, { value: "babel-flow", description: "Flow" }, { value: "babel-ts", description: "TypeScript" }, { value: "typescript", description: "TypeScript" }, { value: "acorn", description: "JavaScript" }, { value: "espree", description: "JavaScript" }, { value: "meriyah", description: "JavaScript" }, { value: "css", description: "CSS" }, { value: "less", description: "Less" }, { value: "scss", description: "SCSS" }, { value: "json", description: "JSON" }, { value: "json5", description: "JSON5" }, { value: "jsonc", description: "JSON with Comments" }, { value: "json-stringify", description: "JSON.stringify" }, { value: "graphql", description: "GraphQL" }, { value: "markdown", description: "Markdown" }, { value: "mdx", description: "MDX" }, { value: "vue", description: "Vue" }, { value: "yaml", description: "YAML" }, { value: "glimmer", description: "Ember / Handlebars" }, { value: "html", description: "HTML" }, { value: "angular", description: "Angular" }, { value: "lwc", description: "Lightning Web Components" }] }, plugins: { type: "path", array: true, default: [{ value: [] }], category: "Global", description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (e2) => typeof e2 == "string" || typeof e2 == "object", cliName: "plugin", cliCategory: "Config" }, printWidth: { category: "Global", type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: 1 / 0, step: 1 } }, rangeEnd: { category: "Special", type: "int", default: 1 / 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code ending at a given character offset (exclusive).
The range will extend forwards to the end of the selected statement.`, cliCategory: "Editor" }, rangeStart: { category: "Special", type: "int", default: 0, range: { start: 0, end: 1 / 0, step: 1 }, description: `Format code starting at a given character offset.
The range will extend backwards to the start of the first line containing the selected statement.`, cliCategory: "Editor" }, requirePragma: { category: "Special", type: "boolean", default: false, description: `Require either '@prettier' or '@format' to be present in the file's first docblock comment
in order for it to be formatted.`, cliCategory: "Other" }, tabWidth: { type: "int", category: "Global", default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: 1 / 0, step: 1 } }, useTabs: { category: "Global", type: "boolean", default: false, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { category: "Global", type: "choice", default: "auto", description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
    fi2 = (e2) => String(e2).split(/[/\\]/u).pop();
    pn2 = pi2;
    oe = { key: (e2) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e2) ? e2 : JSON.stringify(e2), value(e2) {
      if (e2 === null || typeof e2 != "object") return JSON.stringify(e2);
      if (Array.isArray(e2)) return `[${e2.map((r2) => oe.value(r2)).join(", ")}]`;
      let t8 = Object.keys(e2);
      return t8.length === 0 ? "{}" : `{ ${t8.map((r2) => `${oe.key(r2)}: ${oe.value(e2[r2])}`).join(", ")} }`;
    }, pair: ({ key: e2, value: t8 }) => oe.value({ [e2]: t8 }) };
    Ut2 = Me2(ot2(), 1);
    hn2 = (e2, t8, { descriptor: r2 }) => {
      let n2 = [`${Ut2.default.yellow(typeof e2 == "string" ? r2.key(e2) : r2.pair(e2))} is deprecated`];
      return t8 && n2.push(`we now treat it as ${Ut2.default.blue(typeof t8 == "string" ? r2.key(t8) : r2.pair(t8))}`), n2.join("; ") + ".";
    };
    ce2 = Me2(ot2(), 1);
    st2 = Symbol.for("vnopts.VALUE_NOT_EXIST");
    ve = Symbol.for("vnopts.VALUE_UNCHANGED");
    En2 = " ".repeat(2);
    gn2 = (e2, t8, r2) => {
      let { text: n2, list: u } = r2.normalizeExpectedResult(r2.schemas[e2].expected(r2)), i = [];
      return n2 && i.push(Cn2(e2, t8, n2, r2.descriptor)), u && i.push([Cn2(e2, t8, u.title, r2.descriptor)].concat(u.values.map((o2) => yn2(o2, r2.loggerPrintWidth))).join(`
`)), An2(i, r2.loggerPrintWidth);
    };
    Kt2 = Me2(ot2(), 1);
    zt2 = [];
    vn2 = [];
    at2 = (e2, t8, { descriptor: r2, logger: n2, schemas: u }) => {
      let i = [`Ignored unknown option ${Kt2.default.yellow(r2.pair({ key: e2, value: t8 }))}.`], o2 = Object.keys(u).sort().find((s2) => Gt2(e2, s2) < 3);
      o2 && i.push(`Did you mean ${Kt2.default.blue(r2.key(o2))}?`), n2.warn(i.join(" "));
    };
    Fi2 = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
    x = class {
      static create(t8) {
        return mi2(this, t8);
      }
      constructor(t8) {
        this.name = t8.name;
      }
      default(t8) {
      }
      expected(t8) {
        return "nothing";
      }
      validate(t8, r2) {
        return false;
      }
      deprecated(t8, r2) {
        return false;
      }
      forward(t8, r2) {
      }
      redirect(t8, r2) {
      }
      overlap(t8, r2, n2) {
        return t8;
      }
      preprocess(t8, r2) {
        return t8;
      }
      postprocess(t8, r2) {
        return ve;
      }
    };
    Dt2 = class extends x {
      constructor(t8) {
        super(t8), this._sourceName = t8.sourceName;
      }
      expected(t8) {
        return t8.schemas[this._sourceName].expected(t8);
      }
      validate(t8, r2) {
        return r2.schemas[this._sourceName].validate(t8, r2);
      }
      redirect(t8, r2) {
        return this._sourceName;
      }
    };
    lt2 = class extends x {
      expected() {
        return "anything";
      }
      validate() {
        return true;
      }
    };
    ct2 = class extends x {
      constructor({ valueSchema: t8, name: r2 = t8.name, ...n2 }) {
        super({ ...n2, name: r2 }), this._valueSchema = t8;
      }
      expected(t8) {
        let { text: r2, list: n2 } = t8.normalizeExpectedResult(this._valueSchema.expected(t8));
        return { text: r2 && `an array of ${r2}`, list: n2 && { title: "an array of the following values", values: [{ list: n2 }] } };
      }
      validate(t8, r2) {
        if (!Array.isArray(t8)) return false;
        let n2 = [];
        for (let u of t8) {
          let i = r2.normalizeValidateResult(this._valueSchema.validate(u, r2), u);
          i !== true && n2.push(i.value);
        }
        return n2.length === 0 ? true : { value: n2 };
      }
      deprecated(t8, r2) {
        let n2 = [];
        for (let u of t8) {
          let i = r2.normalizeDeprecatedResult(this._valueSchema.deprecated(u, r2), u);
          i !== false && n2.push(...i.map(({ value: o2 }) => ({ value: [o2] })));
        }
        return n2;
      }
      forward(t8, r2) {
        let n2 = [];
        for (let u of t8) {
          let i = r2.normalizeForwardResult(this._valueSchema.forward(u, r2), u);
          n2.push(...i.map(Bn2));
        }
        return n2;
      }
      redirect(t8, r2) {
        let n2 = [], u = [];
        for (let i of t8) {
          let o2 = r2.normalizeRedirectResult(this._valueSchema.redirect(i, r2), i);
          "remain" in o2 && n2.push(o2.remain), u.push(...o2.redirect.map(Bn2));
        }
        return n2.length === 0 ? { redirect: u } : { redirect: u, remain: n2 };
      }
      overlap(t8, r2) {
        return t8.concat(r2);
      }
    };
    ft2 = class extends x {
      expected() {
        return "true or false";
      }
      validate(t8) {
        return typeof t8 == "boolean";
      }
    };
    pt2 = class extends x {
      constructor(t8) {
        super(t8), this._choices = xn2(t8.choices.map((r2) => r2 && typeof r2 == "object" ? r2 : { value: r2 }), "value");
      }
      expected({ descriptor: t8 }) {
        let r2 = Array.from(this._choices.keys()).map((o2) => this._choices.get(o2)).filter(({ hidden: o2 }) => !o2).map((o2) => o2.value).sort(Sn2).map(t8.value), n2 = r2.slice(0, -2), u = r2.slice(-2);
        return { text: n2.concat(u.join(" or ")).join(", "), list: { title: "one of the following values", values: r2 } };
      }
      validate(t8) {
        return this._choices.has(t8);
      }
      deprecated(t8) {
        let r2 = this._choices.get(t8);
        return r2 && r2.deprecated ? { value: t8 } : false;
      }
      forward(t8) {
        let r2 = this._choices.get(t8);
        return r2 ? r2.forward : void 0;
      }
      redirect(t8) {
        let r2 = this._choices.get(t8);
        return r2 ? r2.redirect : void 0;
      }
    };
    Ft2 = class extends x {
      expected() {
        return "a number";
      }
      validate(t8, r2) {
        return typeof t8 == "number";
      }
    };
    mt2 = class extends Ft2 {
      expected() {
        return "an integer";
      }
      validate(t8, r2) {
        return r2.normalizeValidateResult(super.validate(t8, r2), t8) === true && On2(t8);
      }
    };
    je2 = class extends x {
      expected() {
        return "a string";
      }
      validate(t8) {
        return typeof t8 == "string";
      }
    };
    kn2 = oe;
    Ln2 = at2;
    Pn2 = gn2;
    In2 = hn2;
    ht2 = class {
      constructor(t8, r2) {
        let { logger: n2 = console, loggerPrintWidth: u = 80, descriptor: i = kn2, unknown: o2 = Ln2, invalid: s2 = Pn2, deprecated: a = In2, missing: D = () => false, required: l2 = () => false, preprocess: p = (d) => d, postprocess: f = () => ve } = r2 || {};
        this._utils = { descriptor: i, logger: n2 || { warn: () => {
        } }, loggerPrintWidth: u, schemas: _n2(t8, "name"), normalizeDefaultResult: Jt, normalizeExpectedResult: qt2, normalizeDeprecatedResult: Qt2, normalizeForwardResult: dt, normalizeRedirectResult: Zt, normalizeValidateResult: Xt }, this._unknownHandler = o2, this._invalidHandler = Tn2(s2), this._deprecatedHandler = a, this._identifyMissing = (d, c2) => !(d in c2) || D(d, c2), this._identifyRequired = l2, this._preprocess = p, this._postprocess = f, this.cleanHistory();
      }
      cleanHistory() {
        this._hasDeprecationWarned = bn2();
      }
      normalize(t8) {
        let r2 = {}, u = [this._preprocess(t8, this._utils)], i = () => {
          for (; u.length !== 0; ) {
            let o2 = u.shift(), s2 = this._applyNormalization(o2, r2);
            u.push(...s2);
          }
        };
        i();
        for (let o2 of Object.keys(this._utils.schemas)) {
          let s2 = this._utils.schemas[o2];
          if (!(o2 in r2)) {
            let a = Jt(s2.default(this._utils));
            "value" in a && u.push({ [o2]: a.value });
          }
        }
        i();
        for (let o2 of Object.keys(this._utils.schemas)) {
          if (!(o2 in r2)) continue;
          let s2 = this._utils.schemas[o2], a = r2[o2], D = s2.postprocess(a, this._utils);
          D !== ve && (this._applyValidation(D, o2, s2), r2[o2] = D);
        }
        return this._applyPostprocess(r2), this._applyRequiredCheck(r2), r2;
      }
      _applyNormalization(t8, r2) {
        let n2 = [], { knownKeys: u, unknownKeys: i } = this._partitionOptionKeys(t8);
        for (let o2 of u) {
          let s2 = this._utils.schemas[o2], a = s2.preprocess(t8[o2], this._utils);
          this._applyValidation(a, o2, s2);
          let D = ({ from: d, to: c2 }) => {
            n2.push(typeof c2 == "string" ? { [c2]: d } : { [c2.key]: c2.value });
          }, l2 = ({ value: d, redirectTo: c2 }) => {
            let F = Qt2(s2.deprecated(d, this._utils), a, true);
            if (F !== false) if (F === true) this._hasDeprecationWarned(o2) || this._utils.logger.warn(this._deprecatedHandler(o2, c2, this._utils));
            else for (let { value: m2 } of F) {
              let h2 = { key: o2, value: m2 };
              if (!this._hasDeprecationWarned(h2)) {
                let C = typeof c2 == "string" ? { key: c2, value: m2 } : c2;
                this._utils.logger.warn(this._deprecatedHandler(h2, C, this._utils));
              }
            }
          };
          dt(s2.forward(a, this._utils), a).forEach(D);
          let f = Zt(s2.redirect(a, this._utils), a);
          if (f.redirect.forEach(D), "remain" in f) {
            let d = f.remain;
            r2[o2] = o2 in r2 ? s2.overlap(r2[o2], d, this._utils) : d, l2({ value: d });
          }
          for (let { from: d, to: c2 } of f.redirect) l2({ value: d, redirectTo: c2 });
        }
        for (let o2 of i) {
          let s2 = t8[o2];
          this._applyUnknownHandler(o2, s2, r2, (a, D) => {
            n2.push({ [a]: D });
          });
        }
        return n2;
      }
      _applyRequiredCheck(t8) {
        for (let r2 of Object.keys(this._utils.schemas)) if (this._identifyMissing(r2, t8) && this._identifyRequired(r2)) throw this._invalidHandler(r2, st2, this._utils);
      }
      _partitionOptionKeys(t8) {
        let [r2, n2] = Nn2(Object.keys(t8).filter((u) => !this._identifyMissing(u, t8)), (u) => u in this._utils.schemas);
        return { knownKeys: r2, unknownKeys: n2 };
      }
      _applyValidation(t8, r2, n2) {
        let u = Xt(n2.validate(t8, this._utils), t8);
        if (u !== true) throw this._invalidHandler(r2, u.value, this._utils);
      }
      _applyUnknownHandler(t8, r2, n2, u) {
        let i = this._unknownHandler(t8, r2, this._utils);
        if (i) for (let o2 of Object.keys(i)) {
          if (this._identifyMissing(o2, i)) continue;
          let s2 = i[o2];
          o2 in this._utils.schemas ? u(o2, s2) : n2[o2] = s2;
        }
      }
      _applyPostprocess(t8) {
        let r2 = this._postprocess(t8, this._utils);
        if (r2 !== ve) {
          if (r2.delete) for (let n2 of r2.delete) delete t8[n2];
          if (r2.override) {
            let { knownKeys: n2, unknownKeys: u } = this._partitionOptionKeys(r2.override);
            for (let i of n2) {
              let o2 = r2.override[i];
              this._applyValidation(o2, i, this._utils.schemas[i]), t8[i] = o2;
            }
            for (let i of u) {
              let o2 = r2.override[i];
              this._applyUnknownHandler(i, o2, t8, (s2, a) => {
                let D = this._utils.schemas[s2];
                this._applyValidation(a, s2, D), t8[s2] = a;
              });
            }
          }
        }
      }
    };
    Rn2 = gi2;
    vi2 = (e2, t8, r2) => {
      if (!(e2 && t8 == null)) {
        if (t8.findLast) return t8.findLast(r2);
        for (let n2 = t8.length - 1; n2 >= 0; n2--) {
          let u = t8[n2];
          if (r2(u, n2, t8)) return u;
        }
      }
    };
    tr2 = vi2;
    Hn2 = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null };
    se2 = Bi2;
    Mn2 = Me2($n2(), 1);
    fe2 = bi2;
    Un2 = Si2;
    Gn2 = Ti2;
    Kn2 = ki2;
    Li2 = (e2, t8, r2) => {
      if (!(e2 && t8 == null)) {
        if (t8.findLastIndex) return t8.findLastIndex(r2);
        for (let n2 = t8.length - 1; n2 >= 0; n2--) {
          let u = t8[n2];
          if (r2(u, n2, t8)) return n2;
        }
        return -1;
      }
    };
    Jn2 = Li2;
    Pi2 = ({ parser: e2 }) => e2 === "json" || e2 === "json5" || e2 === "jsonc" || e2 === "json-stringify";
    Qn2 = /* @__PURE__ */ new Set(["JsonRoot", "ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]);
    ji2 = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
    nu = "\uFEFF";
    eu = Symbol("cursor");
    Dr2 = {};
    vt2(Dr2, { builders: () => $i2, printer: () => Mi2, utils: () => Vi2 });
    $i2 = { join: Se2, line: Qe2, softline: $r2, hardline: K2, literalline: Xe2, group: kt2, conditionalGroup: Ir2, fill: Rr2, lineSuffix: Te2, lineSuffixBoundary: Hr, cursor: Z2, breakParent: he2, ifBreak: Yr2, trim: Wr2, indent: le2, indentIfBreak: jr2, align: De2, addAlignmentToDoc: Ze2, markAsRoot: Lr2, dedentToRoot: kr2, dedent: Pr2, hardlineWithoutBreakParent: ke2, literallineWithoutBreakParent: Lt2, label: Mr, concat: (e2) => e2 };
    Mi2 = { printDocToString: Ce2 };
    Vi2 = { willBreak: xr2, traverseDoc: Fe2, findInDoc: Je2, mapDoc: Oe2, removeLines: Nr2, stripTrailingHardline: qe2, replaceEndOfLine: Or, canBreak: Sr2 };
    cu = "3.5.3";
    cr2 = {};
    vt2(cr2, { addDanglingComment: () => re, addLeadingComment: () => ue, addTrailingComment: () => ie2, getAlignmentSize: () => ge2, getIndentSize: () => fu, getMaxContinuousCount: () => du, getNextNonSpaceNonCommentCharacter: () => pu, getNextNonSpaceNonCommentCharacterIndex: () => no, getPreferredQuote: () => mu, getStringWidth: () => Le2, hasNewline: () => V3, hasNewlineInRange: () => hu, hasSpaces: () => Eu, isNextLineEmpty: () => so, isNextLineEmptyAfterIndex: () => Ct2, isPreviousLineEmpty: () => io, makeString: () => Cu, skip: () => Ae2, skipEverythingButNewLine: () => nt2, skipInlineComment: () => Be2, skipNewline: () => W2, skipSpaces: () => S2, skipToLineEnd: () => rt2, skipTrailingComment: () => we2, skipWhitespace: () => tn });
    Be2 = Ui2;
    we2 = zi2;
    We = Gi2;
    Ct2 = Ki2;
    fu = Ji2;
    du = qi2;
    pu = Xi2;
    gt2 = "'";
    Fu = '"';
    mu = Qi2;
    hu = Zi2;
    Eu = eo;
    Cu = to;
    gu = de2(ar2);
    Do2 = de2(it2, 0);
    lo = { parse: de2(ou), formatAST: de2(su), formatDoc: de2(au), printToDoc: de2(Du), printDocToString: de2(lu) };
  }
});

// node_modules/react/cjs/react-jsx-runtime.production.min.js
var require_react_jsx_runtime_production_min = __commonJS({
  "node_modules/react/cjs/react-jsx-runtime.production.min.js"(exports) {
    "use strict";
    var f = require_react();
    var k3 = Symbol.for("react.element");
    var l2 = Symbol.for("react.fragment");
    var m2 = Object.prototype.hasOwnProperty;
    var n2 = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner;
    var p = { key: true, ref: true, __self: true, __source: true };
    function q2(c2, a, g) {
      var b2, d = {}, e2 = null, h2 = null;
      void 0 !== g && (e2 = "" + g);
      void 0 !== a.key && (e2 = "" + a.key);
      void 0 !== a.ref && (h2 = a.ref);
      for (b2 in a) m2.call(a, b2) && !p.hasOwnProperty(b2) && (d[b2] = a[b2]);
      if (c2 && c2.defaultProps) for (b2 in a = c2.defaultProps, a) void 0 === d[b2] && (d[b2] = a[b2]);
      return { $$typeof: k3, type: c2, key: e2, ref: h2, props: d, _owner: n2.current };
    }
    exports.Fragment = l2;
    exports.jsx = q2;
    exports.jsxs = q2;
  }
});

// node_modules/react/jsx-runtime.js
var require_jsx_runtime = __commonJS({
  "node_modules/react/jsx-runtime.js"(exports, module) {
    "use strict";
    if (true) {
      module.exports = require_react_jsx_runtime_production_min();
    } else {
      module.exports = null;
    }
  }
});

// node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js
var require_react_dom_server_legacy_node_production_min = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server-legacy.node.production.min.js"(exports) {
    "use strict";
    var ea2 = require_react();
    var fa2 = __require("stream");
    var n2 = Object.prototype.hasOwnProperty;
    var ha2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var ia2 = {};
    var ja2 = {};
    function ka2(a) {
      if (n2.call(ja2, a)) return true;
      if (n2.call(ia2, a)) return false;
      if (ha2.test(a)) return ja2[a] = true;
      ia2[a] = true;
      return false;
    }
    function q2(a, b2, c2, d, f, e2, g) {
      this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
      this.attributeName = d;
      this.attributeNamespace = f;
      this.mustUseProperty = c2;
      this.propertyName = a;
      this.type = b2;
      this.sanitizeURL = e2;
      this.removeEmptyString = g;
    }
    var r2 = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      r2[a] = new q2(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b2 = a[0];
      r2[b2] = new q2(b2, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      r2[a] = new q2(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      r2[a] = new q2(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      r2[a] = new q2(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      r2[a] = new q2(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      r2[a] = new q2(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      r2[a] = new q2(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      r2[a] = new q2(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var la2 = /[\-:]([a-z])/g;
    function ma2(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b2 = a.replace(
        la2,
        ma2
      );
      r2[b2] = new q2(b2, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b2 = a.replace(la2, ma2);
      r2[b2] = new q2(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b2 = a.replace(la2, ma2);
      r2[b2] = new q2(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      r2[a] = new q2(a, 1, false, a.toLowerCase(), null, false, false);
    });
    r2.xlinkHref = new q2("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      r2[a] = new q2(a, 1, false, a.toLowerCase(), null, true, true);
    });
    var t8 = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var na2 = ["Webkit", "ms", "Moz", "O"];
    Object.keys(t8).forEach(function(a) {
      na2.forEach(function(b2) {
        b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
        t8[b2] = t8[a];
      });
    });
    var oa2 = /["'&<>]/;
    function u(a) {
      if ("boolean" === typeof a || "number" === typeof a) return "" + a;
      a = "" + a;
      var b2 = oa2.exec(a);
      if (b2) {
        var c2 = "", d, f = 0;
        for (d = b2.index; d < a.length; d++) {
          switch (a.charCodeAt(d)) {
            case 34:
              b2 = "&quot;";
              break;
            case 38:
              b2 = "&amp;";
              break;
            case 39:
              b2 = "&#x27;";
              break;
            case 60:
              b2 = "&lt;";
              break;
            case 62:
              b2 = "&gt;";
              break;
            default:
              continue;
          }
          f !== d && (c2 += a.substring(f, d));
          f = d + 1;
          c2 += b2;
        }
        a = f !== d ? c2 + a.substring(f, d) : c2;
      }
      return a;
    }
    var pa2 = /([A-Z])/g;
    var qa2 = /^ms-/;
    var ra2 = Array.isArray;
    function v2(a, b2) {
      return { insertionMode: a, selectedValue: b2 };
    }
    function sa2(a, b2, c2) {
      switch (b2) {
        case "select":
          return v2(1, null != c2.value ? c2.value : c2.defaultValue);
        case "svg":
          return v2(2, null);
        case "math":
          return v2(3, null);
        case "foreignObject":
          return v2(1, null);
        case "table":
          return v2(4, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return v2(5, null);
        case "colgroup":
          return v2(7, null);
        case "tr":
          return v2(6, null);
      }
      return 4 <= a.insertionMode || 0 === a.insertionMode ? v2(1, null) : a;
    }
    var ta2 = /* @__PURE__ */ new Map();
    function ua2(a, b2, c2) {
      if ("object" !== typeof c2) throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      b2 = true;
      for (var d in c2) if (n2.call(c2, d)) {
        var f = c2[d];
        if (null != f && "boolean" !== typeof f && "" !== f) {
          if (0 === d.indexOf("--")) {
            var e2 = u(d);
            f = u(("" + f).trim());
          } else {
            e2 = d;
            var g = ta2.get(e2);
            void 0 !== g ? e2 = g : (g = u(e2.replace(pa2, "-$1").toLowerCase().replace(qa2, "-ms-")), ta2.set(e2, g), e2 = g);
            f = "number" === typeof f ? 0 === f || n2.call(
              t8,
              d
            ) ? "" + f : f + "px" : u(("" + f).trim());
          }
          b2 ? (b2 = false, a.push(' style="', e2, ":", f)) : a.push(";", e2, ":", f);
        }
      }
      b2 || a.push('"');
    }
    function w3(a, b2, c2, d) {
      switch (c2) {
        case "style":
          ua2(a, b2, d);
          return;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (!(2 < c2.length) || "o" !== c2[0] && "O" !== c2[0] || "n" !== c2[1] && "N" !== c2[1]) {
        if (b2 = r2.hasOwnProperty(c2) ? r2[c2] : null, null !== b2) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!b2.acceptsBooleans) return;
          }
          c2 = b2.attributeName;
          switch (b2.type) {
            case 3:
              d && a.push(" ", c2, '=""');
              break;
            case 4:
              true === d ? a.push(" ", c2, '=""') : false !== d && a.push(" ", c2, '="', u(d), '"');
              break;
            case 5:
              isNaN(d) || a.push(" ", c2, '="', u(d), '"');
              break;
            case 6:
              !isNaN(d) && 1 <= d && a.push(" ", c2, '="', u(d), '"');
              break;
            default:
              b2.sanitizeURL && (d = "" + d), a.push(" ", c2, '="', u(d), '"');
          }
        } else if (ka2(c2)) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (b2 = c2.toLowerCase().slice(0, 5), "data-" !== b2 && "aria-" !== b2) return;
          }
          a.push(" ", c2, '="', u(d), '"');
        }
      }
    }
    function x2(a, b2, c2) {
      if (null != b2) {
        if (null != c2) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if ("object" !== typeof b2 || !("__html" in b2)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        b2 = b2.__html;
        null !== b2 && void 0 !== b2 && a.push("" + b2);
      }
    }
    function va2(a) {
      var b2 = "";
      ea2.Children.forEach(a, function(a2) {
        null != a2 && (b2 += a2);
      });
      return b2;
    }
    function wa2(a, b2, c2, d) {
      a.push(z3(c2));
      var f = c2 = null, e2;
      for (e2 in b2) if (n2.call(b2, e2)) {
        var g = b2[e2];
        if (null != g) switch (e2) {
          case "children":
            c2 = g;
            break;
          case "dangerouslySetInnerHTML":
            f = g;
            break;
          default:
            w3(a, d, e2, g);
        }
      }
      a.push(">");
      x2(a, f, c2);
      return "string" === typeof c2 ? (a.push(u(c2)), null) : c2;
    }
    var xa2 = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var ya2 = /* @__PURE__ */ new Map();
    function z3(a) {
      var b2 = ya2.get(a);
      if (void 0 === b2) {
        if (!xa2.test(a)) throw Error("Invalid tag: " + a);
        b2 = "<" + a;
        ya2.set(a, b2);
      }
      return b2;
    }
    function za2(a, b2, c2, d, f) {
      switch (b2) {
        case "select":
          a.push(z3("select"));
          var e2 = null, g = null;
          for (l2 in c2) if (n2.call(c2, l2)) {
            var h2 = c2[l2];
            if (null != h2) switch (l2) {
              case "children":
                e2 = h2;
                break;
              case "dangerouslySetInnerHTML":
                g = h2;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                w3(a, d, l2, h2);
            }
          }
          a.push(">");
          x2(a, g, e2);
          return e2;
        case "option":
          g = f.selectedValue;
          a.push(z3("option"));
          var k3 = h2 = null, m2 = null;
          var l2 = null;
          for (e2 in c2) if (n2.call(c2, e2)) {
            var p = c2[e2];
            if (null != p) switch (e2) {
              case "children":
                h2 = p;
                break;
              case "selected":
                m2 = p;
                break;
              case "dangerouslySetInnerHTML":
                l2 = p;
                break;
              case "value":
                k3 = p;
              default:
                w3(a, d, e2, p);
            }
          }
          if (null != g) if (c2 = null !== k3 ? "" + k3 : va2(h2), ra2(g)) for (d = 0; d < g.length; d++) {
            if ("" + g[d] === c2) {
              a.push(' selected=""');
              break;
            }
          }
          else "" + g === c2 && a.push(' selected=""');
          else m2 && a.push(' selected=""');
          a.push(">");
          x2(a, l2, h2);
          return h2;
        case "textarea":
          a.push(z3("textarea"));
          l2 = g = e2 = null;
          for (h2 in c2) if (n2.call(c2, h2) && (k3 = c2[h2], null != k3)) switch (h2) {
            case "children":
              l2 = k3;
              break;
            case "value":
              e2 = k3;
              break;
            case "defaultValue":
              g = k3;
              break;
            case "dangerouslySetInnerHTML":
              throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              w3(a, d, h2, k3);
          }
          null === e2 && null !== g && (e2 = g);
          a.push(">");
          if (null != l2) {
            if (null != e2) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (ra2(l2) && 1 < l2.length) throw Error("<textarea> can only have at most one child.");
            e2 = "" + l2;
          }
          "string" === typeof e2 && "\n" === e2[0] && a.push("\n");
          null !== e2 && a.push(u("" + e2));
          return null;
        case "input":
          a.push(z3("input"));
          k3 = l2 = h2 = e2 = null;
          for (g in c2) if (n2.call(c2, g) && (m2 = c2[g], null != m2)) switch (g) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              k3 = m2;
              break;
            case "defaultValue":
              h2 = m2;
              break;
            case "checked":
              l2 = m2;
              break;
            case "value":
              e2 = m2;
              break;
            default:
              w3(a, d, g, m2);
          }
          null !== l2 ? w3(a, d, "checked", l2) : null !== k3 && w3(a, d, "checked", k3);
          null !== e2 ? w3(a, d, "value", e2) : null !== h2 && w3(a, d, "value", h2);
          a.push("/>");
          return null;
        case "menuitem":
          a.push(z3("menuitem"));
          for (var B3 in c2) if (n2.call(c2, B3) && (e2 = c2[B3], null != e2)) switch (B3) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              w3(
                a,
                d,
                B3,
                e2
              );
          }
          a.push(">");
          return null;
        case "title":
          a.push(z3("title"));
          e2 = null;
          for (p in c2) if (n2.call(c2, p) && (g = c2[p], null != g)) switch (p) {
            case "children":
              e2 = g;
              break;
            case "dangerouslySetInnerHTML":
              throw Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              w3(a, d, p, g);
          }
          a.push(">");
          return e2;
        case "listing":
        case "pre":
          a.push(z3(b2));
          g = e2 = null;
          for (k3 in c2) if (n2.call(c2, k3) && (h2 = c2[k3], null != h2)) switch (k3) {
            case "children":
              e2 = h2;
              break;
            case "dangerouslySetInnerHTML":
              g = h2;
              break;
            default:
              w3(a, d, k3, h2);
          }
          a.push(">");
          if (null != g) {
            if (null != e2) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            if ("object" !== typeof g || !("__html" in g)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
            c2 = g.__html;
            null !== c2 && void 0 !== c2 && ("string" === typeof c2 && 0 < c2.length && "\n" === c2[0] ? a.push("\n", c2) : a.push("" + c2));
          }
          "string" === typeof e2 && "\n" === e2[0] && a.push("\n");
          return e2;
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          a.push(z3(b2));
          for (var C in c2) if (n2.call(c2, C) && (e2 = c2[C], null != e2)) switch (C) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(b2 + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              w3(a, d, C, e2);
          }
          a.push("/>");
          return null;
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return wa2(a, c2, b2, d);
        case "html":
          return 0 === f.insertionMode && a.push("<!DOCTYPE html>"), wa2(a, c2, b2, d);
        default:
          if (-1 === b2.indexOf("-") && "string" !== typeof c2.is) return wa2(a, c2, b2, d);
          a.push(z3(b2));
          g = e2 = null;
          for (m2 in c2) if (n2.call(c2, m2) && (h2 = c2[m2], null != h2)) switch (m2) {
            case "children":
              e2 = h2;
              break;
            case "dangerouslySetInnerHTML":
              g = h2;
              break;
            case "style":
              ua2(a, d, h2);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ka2(m2) && "function" !== typeof h2 && "symbol" !== typeof h2 && a.push(" ", m2, '="', u(h2), '"');
          }
          a.push(">");
          x2(a, g, e2);
          return e2;
      }
    }
    function Aa2(a, b2, c2) {
      a.push('<!--$?--><template id="');
      if (null === c2) throw Error("An ID must have been assigned before we can complete the boundary.");
      a.push(c2);
      return a.push('"></template>');
    }
    function Ba2(a, b2, c2, d) {
      switch (c2.insertionMode) {
        case 0:
        case 1:
          return a.push('<div hidden id="'), a.push(b2.segmentPrefix), b2 = d.toString(16), a.push(b2), a.push('">');
        case 2:
          return a.push('<svg aria-hidden="true" style="display:none" id="'), a.push(b2.segmentPrefix), b2 = d.toString(16), a.push(b2), a.push('">');
        case 3:
          return a.push('<math aria-hidden="true" style="display:none" id="'), a.push(b2.segmentPrefix), b2 = d.toString(16), a.push(b2), a.push('">');
        case 4:
          return a.push('<table hidden id="'), a.push(b2.segmentPrefix), b2 = d.toString(16), a.push(b2), a.push('">');
        case 5:
          return a.push('<table hidden><tbody id="'), a.push(b2.segmentPrefix), b2 = d.toString(16), a.push(b2), a.push('">');
        case 6:
          return a.push('<table hidden><tr id="'), a.push(b2.segmentPrefix), b2 = d.toString(16), a.push(b2), a.push('">');
        case 7:
          return a.push('<table hidden><colgroup id="'), a.push(b2.segmentPrefix), b2 = d.toString(16), a.push(b2), a.push('">');
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function Ca2(a, b2) {
      switch (b2.insertionMode) {
        case 0:
        case 1:
          return a.push("</div>");
        case 2:
          return a.push("</svg>");
        case 3:
          return a.push("</math>");
        case 4:
          return a.push("</table>");
        case 5:
          return a.push("</tbody></table>");
        case 6:
          return a.push("</tr></table>");
        case 7:
          return a.push("</colgroup></table>");
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Da2 = /[<\u2028\u2029]/g;
    function Ea2(a) {
      return JSON.stringify(a).replace(Da2, function(a2) {
        switch (a2) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    function Fa2(a, b2) {
      b2 = void 0 === b2 ? "" : b2;
      return { bootstrapChunks: [], startInlineScript: "<script>", placeholderPrefix: b2 + "P:", segmentPrefix: b2 + "S:", boundaryPrefix: b2 + "B:", idPrefix: b2, nextSuspenseID: 0, sentCompleteSegmentFunction: false, sentCompleteBoundaryFunction: false, sentClientRenderFunction: false, generateStaticMarkup: a };
    }
    function Ga2() {
      return { insertionMode: 1, selectedValue: null };
    }
    function Ha2(a, b2, c2, d) {
      if (c2.generateStaticMarkup) return a.push(u(b2)), false;
      "" === b2 ? a = d : (d && a.push("<!-- -->"), a.push(u(b2)), a = true);
      return a;
    }
    var A2 = Object.assign;
    var Ia2 = Symbol.for("react.element");
    var Ja2 = Symbol.for("react.portal");
    var Ka2 = Symbol.for("react.fragment");
    var La2 = Symbol.for("react.strict_mode");
    var Ma2 = Symbol.for("react.profiler");
    var Na2 = Symbol.for("react.provider");
    var Oa2 = Symbol.for("react.context");
    var Pa2 = Symbol.for("react.forward_ref");
    var Qa = Symbol.for("react.suspense");
    var Ra2 = Symbol.for("react.suspense_list");
    var Sa2 = Symbol.for("react.memo");
    var Ta2 = Symbol.for("react.lazy");
    var Ua2 = Symbol.for("react.scope");
    var Va2 = Symbol.for("react.debug_trace_mode");
    var Wa2 = Symbol.for("react.legacy_hidden");
    var Xa2 = Symbol.for("react.default_value");
    var Ya2 = Symbol.iterator;
    function Za(a) {
      if (null == a) return null;
      if ("function" === typeof a) return a.displayName || a.name || null;
      if ("string" === typeof a) return a;
      switch (a) {
        case Ka2:
          return "Fragment";
        case Ja2:
          return "Portal";
        case Ma2:
          return "Profiler";
        case La2:
          return "StrictMode";
        case Qa:
          return "Suspense";
        case Ra2:
          return "SuspenseList";
      }
      if ("object" === typeof a) switch (a.$$typeof) {
        case Oa2:
          return (a.displayName || "Context") + ".Consumer";
        case Na2:
          return (a._context.displayName || "Context") + ".Provider";
        case Pa2:
          var b2 = a.render;
          a = a.displayName;
          a || (a = b2.displayName || b2.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          return a;
        case Sa2:
          return b2 = a.displayName || null, null !== b2 ? b2 : Za(a.type) || "Memo";
        case Ta2:
          b2 = a._payload;
          a = a._init;
          try {
            return Za(a(b2));
          } catch (c2) {
          }
      }
      return null;
    }
    var $a2 = {};
    function ab2(a, b2) {
      a = a.contextTypes;
      if (!a) return $a2;
      var c2 = {}, d;
      for (d in a) c2[d] = b2[d];
      return c2;
    }
    var D = null;
    function E2(a, b2) {
      if (a !== b2) {
        a.context._currentValue2 = a.parentValue;
        a = a.parent;
        var c2 = b2.parent;
        if (null === a) {
          if (null !== c2) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (null === c2) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
          E2(a, c2);
        }
        b2.context._currentValue2 = b2.value;
      }
    }
    function bb(a) {
      a.context._currentValue2 = a.parentValue;
      a = a.parent;
      null !== a && bb(a);
    }
    function cb(a) {
      var b2 = a.parent;
      null !== b2 && cb(b2);
      a.context._currentValue2 = a.value;
    }
    function db(a, b2) {
      a.context._currentValue2 = a.parentValue;
      a = a.parent;
      if (null === a) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      a.depth === b2.depth ? E2(a, b2) : db(a, b2);
    }
    function eb(a, b2) {
      var c2 = b2.parent;
      if (null === c2) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      a.depth === c2.depth ? E2(a, c2) : eb(a, c2);
      b2.context._currentValue2 = b2.value;
    }
    function F(a) {
      var b2 = D;
      b2 !== a && (null === b2 ? cb(a) : null === a ? bb(b2) : b2.depth === a.depth ? E2(b2, a) : b2.depth > a.depth ? db(b2, a) : eb(b2, a), D = a);
    }
    var fb = { isMounted: function() {
      return false;
    }, enqueueSetState: function(a, b2) {
      a = a._reactInternals;
      null !== a.queue && a.queue.push(b2);
    }, enqueueReplaceState: function(a, b2) {
      a = a._reactInternals;
      a.replace = true;
      a.queue = [b2];
    }, enqueueForceUpdate: function() {
    } };
    function gb(a, b2, c2, d) {
      var f = void 0 !== a.state ? a.state : null;
      a.updater = fb;
      a.props = c2;
      a.state = f;
      var e2 = { queue: [], replace: false };
      a._reactInternals = e2;
      var g = b2.contextType;
      a.context = "object" === typeof g && null !== g ? g._currentValue2 : d;
      g = b2.getDerivedStateFromProps;
      "function" === typeof g && (g = g(c2, f), f = null === g || void 0 === g ? f : A2({}, f, g), a.state = f);
      if ("function" !== typeof b2.getDerivedStateFromProps && "function" !== typeof a.getSnapshotBeforeUpdate && ("function" === typeof a.UNSAFE_componentWillMount || "function" === typeof a.componentWillMount)) if (b2 = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), b2 !== a.state && fb.enqueueReplaceState(a, a.state, null), null !== e2.queue && 0 < e2.queue.length) if (b2 = e2.queue, g = e2.replace, e2.queue = null, e2.replace = false, g && 1 === b2.length) a.state = b2[0];
      else {
        e2 = g ? b2[0] : a.state;
        f = true;
        for (g = g ? 1 : 0; g < b2.length; g++) {
          var h2 = b2[g];
          h2 = "function" === typeof h2 ? h2.call(a, e2, c2, d) : h2;
          null != h2 && (f ? (f = false, e2 = A2({}, e2, h2)) : A2(e2, h2));
        }
        a.state = e2;
      }
      else e2.queue = null;
    }
    var hb = { id: 1, overflow: "" };
    function ib(a, b2, c2) {
      var d = a.id;
      a = a.overflow;
      var f = 32 - G3(d) - 1;
      d &= ~(1 << f);
      c2 += 1;
      var e2 = 32 - G3(b2) + f;
      if (30 < e2) {
        var g = f - f % 5;
        e2 = (d & (1 << g) - 1).toString(32);
        d >>= g;
        f -= g;
        return { id: 1 << 32 - G3(b2) + f | c2 << f | d, overflow: e2 + a };
      }
      return { id: 1 << e2 | c2 << f | d, overflow: a };
    }
    var G3 = Math.clz32 ? Math.clz32 : jb;
    var kb = Math.log;
    var lb = Math.LN2;
    function jb(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (kb(a) / lb | 0) | 0;
    }
    function mb(a, b2) {
      return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
    }
    var nb = "function" === typeof Object.is ? Object.is : mb;
    var H3 = null;
    var ob = null;
    var I3 = null;
    var J3 = null;
    var K3 = false;
    var L3 = false;
    var M2 = 0;
    var N3 = null;
    var O3 = 0;
    function P3() {
      if (null === H3) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
      return H3;
    }
    function rb() {
      if (0 < O3) throw Error("Rendered more hooks than during the previous render");
      return { memoizedState: null, queue: null, next: null };
    }
    function sb() {
      null === J3 ? null === I3 ? (K3 = false, I3 = J3 = rb()) : (K3 = true, J3 = I3) : null === J3.next ? (K3 = false, J3 = J3.next = rb()) : (K3 = true, J3 = J3.next);
      return J3;
    }
    function tb() {
      ob = H3 = null;
      L3 = false;
      I3 = null;
      O3 = 0;
      J3 = N3 = null;
    }
    function ub(a, b2) {
      return "function" === typeof b2 ? b2(a) : b2;
    }
    function vb(a, b2, c2) {
      H3 = P3();
      J3 = sb();
      if (K3) {
        var d = J3.queue;
        b2 = d.dispatch;
        if (null !== N3 && (c2 = N3.get(d), void 0 !== c2)) {
          N3.delete(d);
          d = J3.memoizedState;
          do
            d = a(d, c2.action), c2 = c2.next;
          while (null !== c2);
          J3.memoizedState = d;
          return [d, b2];
        }
        return [J3.memoizedState, b2];
      }
      a = a === ub ? "function" === typeof b2 ? b2() : b2 : void 0 !== c2 ? c2(b2) : b2;
      J3.memoizedState = a;
      a = J3.queue = { last: null, dispatch: null };
      a = a.dispatch = wb.bind(null, H3, a);
      return [J3.memoizedState, a];
    }
    function xb(a, b2) {
      H3 = P3();
      J3 = sb();
      b2 = void 0 === b2 ? null : b2;
      if (null !== J3) {
        var c2 = J3.memoizedState;
        if (null !== c2 && null !== b2) {
          var d = c2[1];
          a: if (null === d) d = false;
          else {
            for (var f = 0; f < d.length && f < b2.length; f++) if (!nb(b2[f], d[f])) {
              d = false;
              break a;
            }
            d = true;
          }
          if (d) return c2[0];
        }
      }
      a = a();
      J3.memoizedState = [a, b2];
      return a;
    }
    function wb(a, b2, c2) {
      if (25 <= O3) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (a === H3) if (L3 = true, a = { action: c2, next: null }, null === N3 && (N3 = /* @__PURE__ */ new Map()), c2 = N3.get(b2), void 0 === c2) N3.set(b2, a);
      else {
        for (b2 = c2; null !== b2.next; ) b2 = b2.next;
        b2.next = a;
      }
    }
    function yb() {
      throw Error("startTransition cannot be called during server rendering.");
    }
    function Q3() {
    }
    var zb = { readContext: function(a) {
      return a._currentValue2;
    }, useContext: function(a) {
      P3();
      return a._currentValue2;
    }, useMemo: xb, useReducer: vb, useRef: function(a) {
      H3 = P3();
      J3 = sb();
      var b2 = J3.memoizedState;
      return null === b2 ? (a = { current: a }, J3.memoizedState = a) : b2;
    }, useState: function(a) {
      return vb(ub, a);
    }, useInsertionEffect: Q3, useLayoutEffect: function() {
    }, useCallback: function(a, b2) {
      return xb(function() {
        return a;
      }, b2);
    }, useImperativeHandle: Q3, useEffect: Q3, useDebugValue: Q3, useDeferredValue: function(a) {
      P3();
      return a;
    }, useTransition: function() {
      P3();
      return [false, yb];
    }, useId: function() {
      var a = ob.treeContext;
      var b2 = a.overflow;
      a = a.id;
      a = (a & ~(1 << 32 - G3(a) - 1)).toString(32) + b2;
      var c2 = R3;
      if (null === c2) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      b2 = M2++;
      a = ":" + c2.idPrefix + "R" + a;
      0 < b2 && (a += "H" + b2.toString(32));
      return a + ":";
    }, useMutableSource: function(a, b2) {
      P3();
      return b2(a._source);
    }, useSyncExternalStore: function(a, b2, c2) {
      if (void 0 === c2) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return c2();
    } };
    var R3 = null;
    var Ab = ea2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
    function Bb(a) {
      console.error(a);
      return null;
    }
    function S3() {
    }
    function Cb(a, b2, c2, d, f, e2, g, h2, k3) {
      var m2 = [], l2 = /* @__PURE__ */ new Set();
      b2 = { destination: null, responseState: b2, progressiveChunkSize: void 0 === d ? 12800 : d, status: 0, fatalError: null, nextSegmentId: 0, allPendingTasks: 0, pendingRootTasks: 0, completedRootSegment: null, abortableTasks: l2, pingedTasks: m2, clientRenderedBoundaries: [], completedBoundaries: [], partialBoundaries: [], onError: void 0 === f ? Bb : f, onAllReady: void 0 === e2 ? S3 : e2, onShellReady: void 0 === g ? S3 : g, onShellError: void 0 === h2 ? S3 : h2, onFatalError: void 0 === k3 ? S3 : k3 };
      c2 = T3(b2, 0, null, c2, false, false);
      c2.parentFlushed = true;
      a = Db(b2, a, null, c2, l2, $a2, null, hb);
      m2.push(a);
      return b2;
    }
    function Db(a, b2, c2, d, f, e2, g, h2) {
      a.allPendingTasks++;
      null === c2 ? a.pendingRootTasks++ : c2.pendingTasks++;
      var k3 = { node: b2, ping: function() {
        var b3 = a.pingedTasks;
        b3.push(k3);
        1 === b3.length && Eb(a);
      }, blockedBoundary: c2, blockedSegment: d, abortSet: f, legacyContext: e2, context: g, treeContext: h2 };
      f.add(k3);
      return k3;
    }
    function T3(a, b2, c2, d, f, e2) {
      return { status: 0, id: -1, index: b2, parentFlushed: false, chunks: [], children: [], formatContext: d, boundary: c2, lastPushedText: f, textEmbedded: e2 };
    }
    function U2(a, b2) {
      a = a.onError(b2);
      if (null != a && "string" !== typeof a) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
      return a;
    }
    function V4(a, b2) {
      var c2 = a.onShellError;
      c2(b2);
      c2 = a.onFatalError;
      c2(b2);
      null !== a.destination ? (a.status = 2, a.destination.destroy(b2)) : (a.status = 1, a.fatalError = b2);
    }
    function Fb(a, b2, c2, d, f) {
      H3 = {};
      ob = b2;
      M2 = 0;
      for (a = c2(d, f); L3; ) L3 = false, M2 = 0, O3 += 1, J3 = null, a = c2(d, f);
      tb();
      return a;
    }
    function Gb(a, b2, c2, d) {
      var f = c2.render(), e2 = d.childContextTypes;
      if (null !== e2 && void 0 !== e2) {
        var g = b2.legacyContext;
        if ("function" !== typeof c2.getChildContext) d = g;
        else {
          c2 = c2.getChildContext();
          for (var h2 in c2) if (!(h2 in e2)) throw Error((Za(d) || "Unknown") + '.getChildContext(): key "' + h2 + '" is not defined in childContextTypes.');
          d = A2({}, g, c2);
        }
        b2.legacyContext = d;
        W3(a, b2, f);
        b2.legacyContext = g;
      } else W3(a, b2, f);
    }
    function Hb(a, b2) {
      if (a && a.defaultProps) {
        b2 = A2({}, b2);
        a = a.defaultProps;
        for (var c2 in a) void 0 === b2[c2] && (b2[c2] = a[c2]);
        return b2;
      }
      return b2;
    }
    function Ib(a, b2, c2, d, f) {
      if ("function" === typeof c2) if (c2.prototype && c2.prototype.isReactComponent) {
        f = ab2(c2, b2.legacyContext);
        var e2 = c2.contextType;
        e2 = new c2(d, "object" === typeof e2 && null !== e2 ? e2._currentValue2 : f);
        gb(e2, c2, d, f);
        Gb(a, b2, e2, c2);
      } else {
        e2 = ab2(c2, b2.legacyContext);
        f = Fb(a, b2, c2, d, e2);
        var g = 0 !== M2;
        if ("object" === typeof f && null !== f && "function" === typeof f.render && void 0 === f.$$typeof) gb(f, c2, d, e2), Gb(a, b2, f, c2);
        else if (g) {
          d = b2.treeContext;
          b2.treeContext = ib(d, 1, 0);
          try {
            W3(a, b2, f);
          } finally {
            b2.treeContext = d;
          }
        } else W3(a, b2, f);
      }
      else if ("string" === typeof c2) {
        f = b2.blockedSegment;
        e2 = za2(f.chunks, c2, d, a.responseState, f.formatContext);
        f.lastPushedText = false;
        g = f.formatContext;
        f.formatContext = sa2(g, c2, d);
        Jb(a, b2, e2);
        f.formatContext = g;
        switch (c2) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break;
          default:
            f.chunks.push("</", c2, ">");
        }
        f.lastPushedText = false;
      } else {
        switch (c2) {
          case Wa2:
          case Va2:
          case La2:
          case Ma2:
          case Ka2:
            W3(a, b2, d.children);
            return;
          case Ra2:
            W3(a, b2, d.children);
            return;
          case Ua2:
            throw Error("ReactDOMServer does not yet support scope components.");
          case Qa:
            a: {
              c2 = b2.blockedBoundary;
              f = b2.blockedSegment;
              e2 = d.fallback;
              d = d.children;
              g = /* @__PURE__ */ new Set();
              var h2 = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: g, errorDigest: null }, k3 = T3(a, f.chunks.length, h2, f.formatContext, false, false);
              f.children.push(k3);
              f.lastPushedText = false;
              var m2 = T3(a, 0, null, f.formatContext, false, false);
              m2.parentFlushed = true;
              b2.blockedBoundary = h2;
              b2.blockedSegment = m2;
              try {
                if (Jb(a, b2, d), a.responseState.generateStaticMarkup || m2.lastPushedText && m2.textEmbedded && m2.chunks.push("<!-- -->"), m2.status = 1, X2(h2, m2), 0 === h2.pendingTasks) break a;
              } catch (l2) {
                m2.status = 4, h2.forceClientRender = true, h2.errorDigest = U2(a, l2);
              } finally {
                b2.blockedBoundary = c2, b2.blockedSegment = f;
              }
              b2 = Db(a, e2, c2, k3, g, b2.legacyContext, b2.context, b2.treeContext);
              a.pingedTasks.push(b2);
            }
            return;
        }
        if ("object" === typeof c2 && null !== c2) switch (c2.$$typeof) {
          case Pa2:
            d = Fb(a, b2, c2.render, d, f);
            if (0 !== M2) {
              c2 = b2.treeContext;
              b2.treeContext = ib(c2, 1, 0);
              try {
                W3(a, b2, d);
              } finally {
                b2.treeContext = c2;
              }
            } else W3(a, b2, d);
            return;
          case Sa2:
            c2 = c2.type;
            d = Hb(c2, d);
            Ib(a, b2, c2, d, f);
            return;
          case Na2:
            f = d.children;
            c2 = c2._context;
            d = d.value;
            e2 = c2._currentValue2;
            c2._currentValue2 = d;
            g = D;
            D = d = { parent: g, depth: null === g ? 0 : g.depth + 1, context: c2, parentValue: e2, value: d };
            b2.context = d;
            W3(a, b2, f);
            a = D;
            if (null === a) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
            d = a.parentValue;
            a.context._currentValue2 = d === Xa2 ? a.context._defaultValue : d;
            a = D = a.parent;
            b2.context = a;
            return;
          case Oa2:
            d = d.children;
            d = d(c2._currentValue2);
            W3(a, b2, d);
            return;
          case Ta2:
            f = c2._init;
            c2 = f(c2._payload);
            d = Hb(c2, d);
            Ib(a, b2, c2, d, void 0);
            return;
        }
        throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((null == c2 ? c2 : typeof c2) + "."));
      }
    }
    function W3(a, b2, c2) {
      b2.node = c2;
      if ("object" === typeof c2 && null !== c2) {
        switch (c2.$$typeof) {
          case Ia2:
            Ib(a, b2, c2.type, c2.props, c2.ref);
            return;
          case Ja2:
            throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case Ta2:
            var d = c2._init;
            c2 = d(c2._payload);
            W3(a, b2, c2);
            return;
        }
        if (ra2(c2)) {
          Kb(a, b2, c2);
          return;
        }
        null === c2 || "object" !== typeof c2 ? d = null : (d = Ya2 && c2[Ya2] || c2["@@iterator"], d = "function" === typeof d ? d : null);
        if (d && (d = d.call(c2))) {
          c2 = d.next();
          if (!c2.done) {
            var f = [];
            do
              f.push(c2.value), c2 = d.next();
            while (!c2.done);
            Kb(a, b2, f);
          }
          return;
        }
        a = Object.prototype.toString.call(c2);
        throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === a ? "object with keys {" + Object.keys(c2).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
      }
      "string" === typeof c2 ? (d = b2.blockedSegment, d.lastPushedText = Ha2(b2.blockedSegment.chunks, c2, a.responseState, d.lastPushedText)) : "number" === typeof c2 && (d = b2.blockedSegment, d.lastPushedText = Ha2(
        b2.blockedSegment.chunks,
        "" + c2,
        a.responseState,
        d.lastPushedText
      ));
    }
    function Kb(a, b2, c2) {
      for (var d = c2.length, f = 0; f < d; f++) {
        var e2 = b2.treeContext;
        b2.treeContext = ib(e2, d, f);
        try {
          Jb(a, b2, c2[f]);
        } finally {
          b2.treeContext = e2;
        }
      }
    }
    function Jb(a, b2, c2) {
      var d = b2.blockedSegment.formatContext, f = b2.legacyContext, e2 = b2.context;
      try {
        return W3(a, b2, c2);
      } catch (k3) {
        if (tb(), "object" === typeof k3 && null !== k3 && "function" === typeof k3.then) {
          c2 = k3;
          var g = b2.blockedSegment, h2 = T3(a, g.chunks.length, null, g.formatContext, g.lastPushedText, true);
          g.children.push(h2);
          g.lastPushedText = false;
          a = Db(a, b2.node, b2.blockedBoundary, h2, b2.abortSet, b2.legacyContext, b2.context, b2.treeContext).ping;
          c2.then(a, a);
          b2.blockedSegment.formatContext = d;
          b2.legacyContext = f;
          b2.context = e2;
          F(e2);
        } else throw b2.blockedSegment.formatContext = d, b2.legacyContext = f, b2.context = e2, F(e2), k3;
      }
    }
    function Lb(a) {
      var b2 = a.blockedBoundary;
      a = a.blockedSegment;
      a.status = 3;
      Mb(this, b2, a);
    }
    function Nb(a, b2, c2) {
      var d = a.blockedBoundary;
      a.blockedSegment.status = 3;
      null === d ? (b2.allPendingTasks--, 2 !== b2.status && (b2.status = 2, null !== b2.destination && b2.destination.push(null))) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = true, d.errorDigest = b2.onError(void 0 === c2 ? Error("The render was aborted by the server without a reason.") : c2), d.parentFlushed && b2.clientRenderedBoundaries.push(d)), d.fallbackAbortableTasks.forEach(function(a2) {
        return Nb(a2, b2, c2);
      }), d.fallbackAbortableTasks.clear(), b2.allPendingTasks--, 0 === b2.allPendingTasks && (a = b2.onAllReady, a()));
    }
    function X2(a, b2) {
      if (0 === b2.chunks.length && 1 === b2.children.length && null === b2.children[0].boundary) {
        var c2 = b2.children[0];
        c2.id = b2.id;
        c2.parentFlushed = true;
        1 === c2.status && X2(a, c2);
      } else a.completedSegments.push(b2);
    }
    function Mb(a, b2, c2) {
      if (null === b2) {
        if (c2.parentFlushed) {
          if (null !== a.completedRootSegment) throw Error("There can only be one root segment. This is a bug in React.");
          a.completedRootSegment = c2;
        }
        a.pendingRootTasks--;
        0 === a.pendingRootTasks && (a.onShellError = S3, b2 = a.onShellReady, b2());
      } else b2.pendingTasks--, b2.forceClientRender || (0 === b2.pendingTasks ? (c2.parentFlushed && 1 === c2.status && X2(b2, c2), b2.parentFlushed && a.completedBoundaries.push(b2), b2.fallbackAbortableTasks.forEach(Lb, a), b2.fallbackAbortableTasks.clear()) : c2.parentFlushed && 1 === c2.status && (X2(b2, c2), 1 === b2.completedSegments.length && b2.parentFlushed && a.partialBoundaries.push(b2)));
      a.allPendingTasks--;
      0 === a.allPendingTasks && (a = a.onAllReady, a());
    }
    function Eb(a) {
      if (2 !== a.status) {
        var b2 = D, c2 = Ab.current;
        Ab.current = zb;
        var d = R3;
        R3 = a.responseState;
        try {
          var f = a.pingedTasks, e2;
          for (e2 = 0; e2 < f.length; e2++) {
            var g = f[e2];
            var h2 = a, k3 = g.blockedSegment;
            if (0 === k3.status) {
              F(g.context);
              try {
                W3(h2, g, g.node), h2.responseState.generateStaticMarkup || k3.lastPushedText && k3.textEmbedded && k3.chunks.push("<!-- -->"), g.abortSet.delete(g), k3.status = 1, Mb(h2, g.blockedBoundary, k3);
              } catch (y2) {
                if (tb(), "object" === typeof y2 && null !== y2 && "function" === typeof y2.then) {
                  var m2 = g.ping;
                  y2.then(m2, m2);
                } else {
                  g.abortSet.delete(g);
                  k3.status = 4;
                  var l2 = g.blockedBoundary, p = y2, B3 = U2(h2, p);
                  null === l2 ? V4(h2, p) : (l2.pendingTasks--, l2.forceClientRender || (l2.forceClientRender = true, l2.errorDigest = B3, l2.parentFlushed && h2.clientRenderedBoundaries.push(l2)));
                  h2.allPendingTasks--;
                  if (0 === h2.allPendingTasks) {
                    var C = h2.onAllReady;
                    C();
                  }
                }
              } finally {
              }
            }
          }
          f.splice(0, e2);
          null !== a.destination && Ob(a, a.destination);
        } catch (y2) {
          U2(a, y2), V4(a, y2);
        } finally {
          R3 = d, Ab.current = c2, c2 === zb && F(b2);
        }
      }
    }
    function Y3(a, b2, c2) {
      c2.parentFlushed = true;
      switch (c2.status) {
        case 0:
          var d = c2.id = a.nextSegmentId++;
          c2.lastPushedText = false;
          c2.textEmbedded = false;
          a = a.responseState;
          b2.push('<template id="');
          b2.push(a.placeholderPrefix);
          a = d.toString(16);
          b2.push(a);
          return b2.push('"></template>');
        case 1:
          c2.status = 2;
          var f = true;
          d = c2.chunks;
          var e2 = 0;
          c2 = c2.children;
          for (var g = 0; g < c2.length; g++) {
            for (f = c2[g]; e2 < f.index; e2++) b2.push(d[e2]);
            f = Z3(a, b2, f);
          }
          for (; e2 < d.length - 1; e2++) b2.push(d[e2]);
          e2 < d.length && (f = b2.push(d[e2]));
          return f;
        default:
          throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function Z3(a, b2, c2) {
      var d = c2.boundary;
      if (null === d) return Y3(a, b2, c2);
      d.parentFlushed = true;
      if (d.forceClientRender) return a.responseState.generateStaticMarkup || (d = d.errorDigest, b2.push("<!--$!-->"), b2.push("<template"), d && (b2.push(' data-dgst="'), d = u(d), b2.push(d), b2.push('"')), b2.push("></template>")), Y3(a, b2, c2), a = a.responseState.generateStaticMarkup ? true : b2.push("<!--/$-->"), a;
      if (0 < d.pendingTasks) {
        d.rootSegmentID = a.nextSegmentId++;
        0 < d.completedSegments.length && a.partialBoundaries.push(d);
        var f = a.responseState;
        var e2 = f.nextSuspenseID++;
        f = f.boundaryPrefix + e2.toString(16);
        d = d.id = f;
        Aa2(b2, a.responseState, d);
        Y3(a, b2, c2);
        return b2.push("<!--/$-->");
      }
      if (d.byteSize > a.progressiveChunkSize) return d.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(d), Aa2(b2, a.responseState, d.id), Y3(a, b2, c2), b2.push("<!--/$-->");
      a.responseState.generateStaticMarkup || b2.push("<!--$-->");
      c2 = d.completedSegments;
      if (1 !== c2.length) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
      Z3(a, b2, c2[0]);
      a = a.responseState.generateStaticMarkup ? true : b2.push("<!--/$-->");
      return a;
    }
    function Pb(a, b2, c2) {
      Ba2(b2, a.responseState, c2.formatContext, c2.id);
      Z3(a, b2, c2);
      return Ca2(b2, c2.formatContext);
    }
    function Qb(a, b2, c2) {
      for (var d = c2.completedSegments, f = 0; f < d.length; f++) Rb(a, b2, c2, d[f]);
      d.length = 0;
      a = a.responseState;
      d = c2.id;
      c2 = c2.rootSegmentID;
      b2.push(a.startInlineScript);
      a.sentCompleteBoundaryFunction ? b2.push('$RC("') : (a.sentCompleteBoundaryFunction = true, b2.push('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("'));
      if (null === d) throw Error("An ID must have been assigned before we can complete the boundary.");
      c2 = c2.toString(16);
      b2.push(d);
      b2.push('","');
      b2.push(a.segmentPrefix);
      b2.push(c2);
      return b2.push('")</script>');
    }
    function Rb(a, b2, c2, d) {
      if (2 === d.status) return true;
      var f = d.id;
      if (-1 === f) {
        if (-1 === (d.id = c2.rootSegmentID)) throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return Pb(a, b2, d);
      }
      Pb(a, b2, d);
      a = a.responseState;
      b2.push(a.startInlineScript);
      a.sentCompleteSegmentFunction ? b2.push('$RS("') : (a.sentCompleteSegmentFunction = true, b2.push('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("'));
      b2.push(a.segmentPrefix);
      f = f.toString(16);
      b2.push(f);
      b2.push('","');
      b2.push(a.placeholderPrefix);
      b2.push(f);
      return b2.push('")</script>');
    }
    function Ob(a, b2) {
      try {
        var c2 = a.completedRootSegment;
        if (null !== c2 && 0 === a.pendingRootTasks) {
          Z3(a, b2, c2);
          a.completedRootSegment = null;
          var d = a.responseState.bootstrapChunks;
          for (c2 = 0; c2 < d.length - 1; c2++) b2.push(d[c2]);
          c2 < d.length && b2.push(d[c2]);
        }
        var f = a.clientRenderedBoundaries, e2;
        for (e2 = 0; e2 < f.length; e2++) {
          var g = f[e2];
          d = b2;
          var h2 = a.responseState, k3 = g.id, m2 = g.errorDigest, l2 = g.errorMessage, p = g.errorComponentStack;
          d.push(h2.startInlineScript);
          h2.sentClientRenderFunction ? d.push('$RX("') : (h2.sentClientRenderFunction = true, d.push('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("'));
          if (null === k3) throw Error("An ID must have been assigned before we can complete the boundary.");
          d.push(k3);
          d.push('"');
          if (m2 || l2 || p) {
            d.push(",");
            var B3 = Ea2(m2 || "");
            d.push(B3);
          }
          if (l2 || p) {
            d.push(",");
            var C = Ea2(l2 || "");
            d.push(C);
          }
          if (p) {
            d.push(",");
            var y2 = Ea2(p);
            d.push(y2);
          }
          if (!d.push(")</script>")) {
            a.destination = null;
            e2++;
            f.splice(0, e2);
            return;
          }
        }
        f.splice(0, e2);
        var aa2 = a.completedBoundaries;
        for (e2 = 0; e2 < aa2.length; e2++) if (!Qb(a, b2, aa2[e2])) {
          a.destination = null;
          e2++;
          aa2.splice(0, e2);
          return;
        }
        aa2.splice(0, e2);
        var ba2 = a.partialBoundaries;
        for (e2 = 0; e2 < ba2.length; e2++) {
          var pb = ba2[e2];
          a: {
            f = a;
            g = b2;
            var ca2 = pb.completedSegments;
            for (h2 = 0; h2 < ca2.length; h2++) if (!Rb(f, g, pb, ca2[h2])) {
              h2++;
              ca2.splice(0, h2);
              var qb = false;
              break a;
            }
            ca2.splice(0, h2);
            qb = true;
          }
          if (!qb) {
            a.destination = null;
            e2++;
            ba2.splice(0, e2);
            return;
          }
        }
        ba2.splice(0, e2);
        var da2 = a.completedBoundaries;
        for (e2 = 0; e2 < da2.length; e2++) if (!Qb(a, b2, da2[e2])) {
          a.destination = null;
          e2++;
          da2.splice(0, e2);
          return;
        }
        da2.splice(0, e2);
      } finally {
        0 === a.allPendingTasks && 0 === a.pingedTasks.length && 0 === a.clientRenderedBoundaries.length && 0 === a.completedBoundaries.length && b2.push(null);
      }
    }
    function Sb(a, b2) {
      if (1 === a.status) a.status = 2, b2.destroy(a.fatalError);
      else if (2 !== a.status && null === a.destination) {
        a.destination = b2;
        try {
          Ob(a, b2);
        } catch (c2) {
          U2(a, c2), V4(a, c2);
        }
      }
    }
    function Tb(a, b2) {
      try {
        var c2 = a.abortableTasks;
        c2.forEach(function(c3) {
          return Nb(c3, a, b2);
        });
        c2.clear();
        null !== a.destination && Ob(a, a.destination);
      } catch (d) {
        U2(a, d), V4(a, d);
      }
    }
    function Ub() {
    }
    function Vb(a, b2, c2, d) {
      var f = false, e2 = null, g = "", h2 = false;
      a = Cb(a, Fa2(c2, b2 ? b2.identifierPrefix : void 0), Ga2(), Infinity, Ub, void 0, function() {
        h2 = true;
      }, void 0, void 0);
      Eb(a);
      Tb(a, d);
      Sb(a, { push: function(a2) {
        null !== a2 && (g += a2);
        return true;
      }, destroy: function(a2) {
        f = true;
        e2 = a2;
      } });
      if (f) throw e2;
      if (!h2) throw Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
      return g;
    }
    function Wb(a, b2) {
      a.prototype = Object.create(b2.prototype);
      a.prototype.constructor = a;
      a.__proto__ = b2;
    }
    var Xb = function(a) {
      function b2() {
        var b3 = a.call(this, {}) || this;
        b3.request = null;
        b3.startedFlowing = false;
        return b3;
      }
      Wb(b2, a);
      var c2 = b2.prototype;
      c2._destroy = function(a2, b3) {
        Tb(this.request);
        b3(a2);
      };
      c2._read = function() {
        this.startedFlowing && Sb(this.request, this);
      };
      return b2;
    }(fa2.Readable);
    function Yb() {
    }
    function Zb(a, b2) {
      var c2 = new Xb(), d = Cb(a, Fa2(false, b2 ? b2.identifierPrefix : void 0), Ga2(), Infinity, Yb, function() {
        c2.startedFlowing = true;
        Sb(d, c2);
      }, void 0, void 0);
      c2.request = d;
      Eb(d);
      return c2;
    }
    exports.renderToNodeStream = function(a, b2) {
      return Zb(a, b2);
    };
    exports.renderToStaticMarkup = function(a, b2) {
      return Vb(a, b2, true, 'The server used "renderToStaticMarkup" which does not support Suspense. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server');
    };
    exports.renderToStaticNodeStream = function(a, b2) {
      return Zb(a, b2);
    };
    exports.renderToString = function(a, b2) {
      return Vb(a, b2, false, 'The server used "renderToString" which does not support Suspense. If you intended for this Suspense boundary to render the fallback content on the server consider throwing an Error somewhere within the Suspense boundary. If you intended to have the server wait for the suspended component please switch to "renderToPipeableStream" which supports Suspense on the server');
    };
    exports.version = "18.3.1";
  }
});

// node_modules/react-dom/cjs/react-dom-server.node.production.min.js
var require_react_dom_server_node_production_min = __commonJS({
  "node_modules/react-dom/cjs/react-dom-server.node.production.min.js"(exports) {
    "use strict";
    var aa2 = __require("util");
    var ba2 = require_react();
    var k3 = null;
    var l2 = 0;
    var q2 = true;
    function r2(a, b2) {
      if ("string" === typeof b2) {
        if (0 !== b2.length) if (2048 < 3 * b2.length) 0 < l2 && (t8(a, k3.subarray(0, l2)), k3 = new Uint8Array(2048), l2 = 0), t8(a, u.encode(b2));
        else {
          var c2 = k3;
          0 < l2 && (c2 = k3.subarray(l2));
          c2 = u.encodeInto(b2, c2);
          var d = c2.read;
          l2 += c2.written;
          d < b2.length && (t8(a, k3), k3 = new Uint8Array(2048), l2 = u.encodeInto(b2.slice(d), k3).written);
          2048 === l2 && (t8(a, k3), k3 = new Uint8Array(2048), l2 = 0);
        }
      } else 0 !== b2.byteLength && (2048 < b2.byteLength ? (0 < l2 && (t8(a, k3.subarray(0, l2)), k3 = new Uint8Array(2048), l2 = 0), t8(a, b2)) : (c2 = k3.length - l2, c2 < b2.byteLength && (0 === c2 ? t8(
        a,
        k3
      ) : (k3.set(b2.subarray(0, c2), l2), l2 += c2, t8(a, k3), b2 = b2.subarray(c2)), k3 = new Uint8Array(2048), l2 = 0), k3.set(b2, l2), l2 += b2.byteLength, 2048 === l2 && (t8(a, k3), k3 = new Uint8Array(2048), l2 = 0)));
    }
    function t8(a, b2) {
      a = a.write(b2);
      q2 = q2 && a;
    }
    function w3(a, b2) {
      r2(a, b2);
      return q2;
    }
    function ca2(a) {
      k3 && 0 < l2 && a.write(k3.subarray(0, l2));
      k3 = null;
      l2 = 0;
      q2 = true;
    }
    var u = new aa2.TextEncoder();
    function x2(a) {
      return u.encode(a);
    }
    var y2 = Object.prototype.hasOwnProperty;
    var da2 = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/;
    var ea2 = {};
    var fa2 = {};
    function ha2(a) {
      if (y2.call(fa2, a)) return true;
      if (y2.call(ea2, a)) return false;
      if (da2.test(a)) return fa2[a] = true;
      ea2[a] = true;
      return false;
    }
    function z3(a, b2, c2, d, f, e2, g) {
      this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
      this.attributeName = d;
      this.attributeNamespace = f;
      this.mustUseProperty = c2;
      this.propertyName = a;
      this.type = b2;
      this.sanitizeURL = e2;
      this.removeEmptyString = g;
    }
    var A2 = {};
    "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
      A2[a] = new z3(a, 0, false, a, null, false, false);
    });
    [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
      var b2 = a[0];
      A2[b2] = new z3(b2, 1, false, a[1], null, false, false);
    });
    ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
      A2[a] = new z3(a, 2, false, a.toLowerCase(), null, false, false);
    });
    ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
      A2[a] = new z3(a, 2, false, a, null, false, false);
    });
    "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
      A2[a] = new z3(a, 3, false, a.toLowerCase(), null, false, false);
    });
    ["checked", "multiple", "muted", "selected"].forEach(function(a) {
      A2[a] = new z3(a, 3, true, a, null, false, false);
    });
    ["capture", "download"].forEach(function(a) {
      A2[a] = new z3(a, 4, false, a, null, false, false);
    });
    ["cols", "rows", "size", "span"].forEach(function(a) {
      A2[a] = new z3(a, 6, false, a, null, false, false);
    });
    ["rowSpan", "start"].forEach(function(a) {
      A2[a] = new z3(a, 5, false, a.toLowerCase(), null, false, false);
    });
    var ia2 = /[\-:]([a-z])/g;
    function ja2(a) {
      return a[1].toUpperCase();
    }
    "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
      var b2 = a.replace(
        ia2,
        ja2
      );
      A2[b2] = new z3(b2, 1, false, a, null, false, false);
    });
    "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
      var b2 = a.replace(ia2, ja2);
      A2[b2] = new z3(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
    });
    ["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
      var b2 = a.replace(ia2, ja2);
      A2[b2] = new z3(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
    });
    ["tabIndex", "crossOrigin"].forEach(function(a) {
      A2[a] = new z3(a, 1, false, a.toLowerCase(), null, false, false);
    });
    A2.xlinkHref = new z3("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
    ["src", "href", "action", "formAction"].forEach(function(a) {
      A2[a] = new z3(a, 1, false, a.toLowerCase(), null, true, true);
    });
    var B3 = {
      animationIterationCount: true,
      aspectRatio: true,
      borderImageOutset: true,
      borderImageSlice: true,
      borderImageWidth: true,
      boxFlex: true,
      boxFlexGroup: true,
      boxOrdinalGroup: true,
      columnCount: true,
      columns: true,
      flex: true,
      flexGrow: true,
      flexPositive: true,
      flexShrink: true,
      flexNegative: true,
      flexOrder: true,
      gridArea: true,
      gridRow: true,
      gridRowEnd: true,
      gridRowSpan: true,
      gridRowStart: true,
      gridColumn: true,
      gridColumnEnd: true,
      gridColumnSpan: true,
      gridColumnStart: true,
      fontWeight: true,
      lineClamp: true,
      lineHeight: true,
      opacity: true,
      order: true,
      orphans: true,
      tabSize: true,
      widows: true,
      zIndex: true,
      zoom: true,
      fillOpacity: true,
      floodOpacity: true,
      stopOpacity: true,
      strokeDasharray: true,
      strokeDashoffset: true,
      strokeMiterlimit: true,
      strokeOpacity: true,
      strokeWidth: true
    };
    var ka2 = ["Webkit", "ms", "Moz", "O"];
    Object.keys(B3).forEach(function(a) {
      ka2.forEach(function(b2) {
        b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
        B3[b2] = B3[a];
      });
    });
    var la2 = /["'&<>]/;
    function F(a) {
      if ("boolean" === typeof a || "number" === typeof a) return "" + a;
      a = "" + a;
      var b2 = la2.exec(a);
      if (b2) {
        var c2 = "", d, f = 0;
        for (d = b2.index; d < a.length; d++) {
          switch (a.charCodeAt(d)) {
            case 34:
              b2 = "&quot;";
              break;
            case 38:
              b2 = "&amp;";
              break;
            case 39:
              b2 = "&#x27;";
              break;
            case 60:
              b2 = "&lt;";
              break;
            case 62:
              b2 = "&gt;";
              break;
            default:
              continue;
          }
          f !== d && (c2 += a.substring(f, d));
          f = d + 1;
          c2 += b2;
        }
        a = f !== d ? c2 + a.substring(f, d) : c2;
      }
      return a;
    }
    var ma2 = /([A-Z])/g;
    var pa2 = /^ms-/;
    var qa2 = Array.isArray;
    var ra2 = x2("<script>");
    var sa2 = x2("</script>");
    var ta2 = x2('<script src="');
    var ua2 = x2('<script type="module" src="');
    var va2 = x2('" async=""></script>');
    var wa2 = /(<\/|<)(s)(cript)/gi;
    function xa2(a, b2, c2, d) {
      return "" + b2 + ("s" === c2 ? "\\u0073" : "\\u0053") + d;
    }
    function G3(a, b2) {
      return { insertionMode: a, selectedValue: b2 };
    }
    function ya2(a, b2, c2) {
      switch (b2) {
        case "select":
          return G3(1, null != c2.value ? c2.value : c2.defaultValue);
        case "svg":
          return G3(2, null);
        case "math":
          return G3(3, null);
        case "foreignObject":
          return G3(1, null);
        case "table":
          return G3(4, null);
        case "thead":
        case "tbody":
        case "tfoot":
          return G3(5, null);
        case "colgroup":
          return G3(7, null);
        case "tr":
          return G3(6, null);
      }
      return 4 <= a.insertionMode || 0 === a.insertionMode ? G3(1, null) : a;
    }
    var za2 = x2("<!-- -->");
    function Aa2(a, b2, c2, d) {
      if ("" === b2) return d;
      d && a.push(za2);
      a.push(F(b2));
      return true;
    }
    var Ba2 = /* @__PURE__ */ new Map();
    var Ca2 = x2(' style="');
    var Da2 = x2(":");
    var Ea2 = x2(";");
    function Fa2(a, b2, c2) {
      if ("object" !== typeof c2) throw Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      b2 = true;
      for (var d in c2) if (y2.call(c2, d)) {
        var f = c2[d];
        if (null != f && "boolean" !== typeof f && "" !== f) {
          if (0 === d.indexOf("--")) {
            var e2 = F(d);
            f = F(("" + f).trim());
          } else {
            e2 = d;
            var g = Ba2.get(e2);
            void 0 !== g ? e2 = g : (g = x2(F(e2.replace(ma2, "-$1").toLowerCase().replace(pa2, "-ms-"))), Ba2.set(e2, g), e2 = g);
            f = "number" === typeof f ? 0 === f || y2.call(
              B3,
              d
            ) ? "" + f : f + "px" : F(("" + f).trim());
          }
          b2 ? (b2 = false, a.push(Ca2, e2, Da2, f)) : a.push(Ea2, e2, Da2, f);
        }
      }
      b2 || a.push(H3);
    }
    var I3 = x2(" ");
    var J3 = x2('="');
    var H3 = x2('"');
    var Ga2 = x2('=""');
    function K3(a, b2, c2, d) {
      switch (c2) {
        case "style":
          Fa2(a, b2, d);
          return;
        case "defaultValue":
        case "defaultChecked":
        case "innerHTML":
        case "suppressContentEditableWarning":
        case "suppressHydrationWarning":
          return;
      }
      if (!(2 < c2.length) || "o" !== c2[0] && "O" !== c2[0] || "n" !== c2[1] && "N" !== c2[1]) {
        if (b2 = A2.hasOwnProperty(c2) ? A2[c2] : null, null !== b2) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (!b2.acceptsBooleans) return;
          }
          c2 = b2.attributeName;
          switch (b2.type) {
            case 3:
              d && a.push(I3, c2, Ga2);
              break;
            case 4:
              true === d ? a.push(I3, c2, Ga2) : false !== d && a.push(I3, c2, J3, F(d), H3);
              break;
            case 5:
              isNaN(d) || a.push(I3, c2, J3, F(d), H3);
              break;
            case 6:
              !isNaN(d) && 1 <= d && a.push(I3, c2, J3, F(d), H3);
              break;
            default:
              b2.sanitizeURL && (d = "" + d), a.push(I3, c2, J3, F(d), H3);
          }
        } else if (ha2(c2)) {
          switch (typeof d) {
            case "function":
            case "symbol":
              return;
            case "boolean":
              if (b2 = c2.toLowerCase().slice(0, 5), "data-" !== b2 && "aria-" !== b2) return;
          }
          a.push(I3, c2, J3, F(d), H3);
        }
      }
    }
    var L3 = x2(">");
    var Ha2 = x2("/>");
    function M2(a, b2, c2) {
      if (null != b2) {
        if (null != c2) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
        if ("object" !== typeof b2 || !("__html" in b2)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        b2 = b2.__html;
        null !== b2 && void 0 !== b2 && a.push("" + b2);
      }
    }
    function Ia2(a) {
      var b2 = "";
      ba2.Children.forEach(a, function(a2) {
        null != a2 && (b2 += a2);
      });
      return b2;
    }
    var Ja2 = x2(' selected=""');
    function Ka2(a, b2, c2, d) {
      a.push(N3(c2));
      var f = c2 = null, e2;
      for (e2 in b2) if (y2.call(b2, e2)) {
        var g = b2[e2];
        if (null != g) switch (e2) {
          case "children":
            c2 = g;
            break;
          case "dangerouslySetInnerHTML":
            f = g;
            break;
          default:
            K3(a, d, e2, g);
        }
      }
      a.push(L3);
      M2(a, f, c2);
      return "string" === typeof c2 ? (a.push(F(c2)), null) : c2;
    }
    var La2 = x2("\n");
    var Ma2 = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/;
    var Na2 = /* @__PURE__ */ new Map();
    function N3(a) {
      var b2 = Na2.get(a);
      if (void 0 === b2) {
        if (!Ma2.test(a)) throw Error("Invalid tag: " + a);
        b2 = x2("<" + a);
        Na2.set(a, b2);
      }
      return b2;
    }
    var Oa2 = x2("<!DOCTYPE html>");
    function Pa2(a, b2, c2, d, f) {
      switch (b2) {
        case "select":
          a.push(N3("select"));
          var e2 = null, g = null;
          for (p in c2) if (y2.call(c2, p)) {
            var h2 = c2[p];
            if (null != h2) switch (p) {
              case "children":
                e2 = h2;
                break;
              case "dangerouslySetInnerHTML":
                g = h2;
                break;
              case "defaultValue":
              case "value":
                break;
              default:
                K3(a, d, p, h2);
            }
          }
          a.push(L3);
          M2(a, g, e2);
          return e2;
        case "option":
          g = f.selectedValue;
          a.push(N3("option"));
          var m2 = h2 = null, n2 = null;
          var p = null;
          for (e2 in c2) if (y2.call(c2, e2)) {
            var v2 = c2[e2];
            if (null != v2) switch (e2) {
              case "children":
                h2 = v2;
                break;
              case "selected":
                n2 = v2;
                break;
              case "dangerouslySetInnerHTML":
                p = v2;
                break;
              case "value":
                m2 = v2;
              default:
                K3(a, d, e2, v2);
            }
          }
          if (null != g) if (c2 = null !== m2 ? "" + m2 : Ia2(h2), qa2(g)) for (d = 0; d < g.length; d++) {
            if ("" + g[d] === c2) {
              a.push(Ja2);
              break;
            }
          }
          else "" + g === c2 && a.push(Ja2);
          else n2 && a.push(Ja2);
          a.push(L3);
          M2(a, p, h2);
          return h2;
        case "textarea":
          a.push(N3("textarea"));
          p = g = e2 = null;
          for (h2 in c2) if (y2.call(c2, h2) && (m2 = c2[h2], null != m2)) switch (h2) {
            case "children":
              p = m2;
              break;
            case "value":
              e2 = m2;
              break;
            case "defaultValue":
              g = m2;
              break;
            case "dangerouslySetInnerHTML":
              throw Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
            default:
              K3(a, d, h2, m2);
          }
          null === e2 && null !== g && (e2 = g);
          a.push(L3);
          if (null != p) {
            if (null != e2) throw Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (qa2(p) && 1 < p.length) throw Error("<textarea> can only have at most one child.");
            e2 = "" + p;
          }
          "string" === typeof e2 && "\n" === e2[0] && a.push(La2);
          null !== e2 && a.push(F("" + e2));
          return null;
        case "input":
          a.push(N3("input"));
          m2 = p = h2 = e2 = null;
          for (g in c2) if (y2.call(c2, g) && (n2 = c2[g], null != n2)) switch (g) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error("input is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            case "defaultChecked":
              m2 = n2;
              break;
            case "defaultValue":
              h2 = n2;
              break;
            case "checked":
              p = n2;
              break;
            case "value":
              e2 = n2;
              break;
            default:
              K3(a, d, g, n2);
          }
          null !== p ? K3(a, d, "checked", p) : null !== m2 && K3(a, d, "checked", m2);
          null !== e2 ? K3(a, d, "value", e2) : null !== h2 && K3(a, d, "value", h2);
          a.push(Ha2);
          return null;
        case "menuitem":
          a.push(N3("menuitem"));
          for (var C in c2) if (y2.call(c2, C) && (e2 = c2[C], null != e2)) switch (C) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error("menuitems cannot have `children` nor `dangerouslySetInnerHTML`.");
            default:
              K3(a, d, C, e2);
          }
          a.push(L3);
          return null;
        case "title":
          a.push(N3("title"));
          e2 = null;
          for (v2 in c2) if (y2.call(c2, v2) && (g = c2[v2], null != g)) switch (v2) {
            case "children":
              e2 = g;
              break;
            case "dangerouslySetInnerHTML":
              throw Error("`dangerouslySetInnerHTML` does not make sense on <title>.");
            default:
              K3(a, d, v2, g);
          }
          a.push(L3);
          return e2;
        case "listing":
        case "pre":
          a.push(N3(b2));
          g = e2 = null;
          for (m2 in c2) if (y2.call(c2, m2) && (h2 = c2[m2], null != h2)) switch (m2) {
            case "children":
              e2 = h2;
              break;
            case "dangerouslySetInnerHTML":
              g = h2;
              break;
            default:
              K3(a, d, m2, h2);
          }
          a.push(L3);
          if (null != g) {
            if (null != e2) throw Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
            if ("object" !== typeof g || !("__html" in g)) throw Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
            c2 = g.__html;
            null !== c2 && void 0 !== c2 && ("string" === typeof c2 && 0 < c2.length && "\n" === c2[0] ? a.push(La2, c2) : a.push("" + c2));
          }
          "string" === typeof e2 && "\n" === e2[0] && a.push(La2);
          return e2;
        case "area":
        case "base":
        case "br":
        case "col":
        case "embed":
        case "hr":
        case "img":
        case "keygen":
        case "link":
        case "meta":
        case "param":
        case "source":
        case "track":
        case "wbr":
          a.push(N3(b2));
          for (var D in c2) if (y2.call(c2, D) && (e2 = c2[D], null != e2)) switch (D) {
            case "children":
            case "dangerouslySetInnerHTML":
              throw Error(b2 + " is a self-closing tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
            default:
              K3(a, d, D, e2);
          }
          a.push(Ha2);
          return null;
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return Ka2(a, c2, b2, d);
        case "html":
          return 0 === f.insertionMode && a.push(Oa2), Ka2(
            a,
            c2,
            b2,
            d
          );
        default:
          if (-1 === b2.indexOf("-") && "string" !== typeof c2.is) return Ka2(a, c2, b2, d);
          a.push(N3(b2));
          g = e2 = null;
          for (n2 in c2) if (y2.call(c2, n2) && (h2 = c2[n2], null != h2)) switch (n2) {
            case "children":
              e2 = h2;
              break;
            case "dangerouslySetInnerHTML":
              g = h2;
              break;
            case "style":
              Fa2(a, d, h2);
              break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
              break;
            default:
              ha2(n2) && "function" !== typeof h2 && "symbol" !== typeof h2 && a.push(I3, n2, J3, F(h2), H3);
          }
          a.push(L3);
          M2(a, g, e2);
          return e2;
      }
    }
    var Qa = x2("</");
    var Ra2 = x2(">");
    var Sa2 = x2('<template id="');
    var Ta2 = x2('"></template>');
    var Ua2 = x2("<!--$-->");
    var Va2 = x2('<!--$?--><template id="');
    var Wa2 = x2('"></template>');
    var Xa2 = x2("<!--$!-->");
    var Ya2 = x2("<!--/$-->");
    var Za = x2("<template");
    var $a2 = x2('"');
    var ab2 = x2(' data-dgst="');
    x2(' data-msg="');
    x2(' data-stck="');
    var bb = x2("></template>");
    function cb(a, b2, c2) {
      r2(a, Va2);
      if (null === c2) throw Error("An ID must have been assigned before we can complete the boundary.");
      r2(a, c2);
      return w3(a, Wa2);
    }
    var db = x2('<div hidden id="');
    var eb = x2('">');
    var fb = x2("</div>");
    var gb = x2('<svg aria-hidden="true" style="display:none" id="');
    var hb = x2('">');
    var ib = x2("</svg>");
    var jb = x2('<math aria-hidden="true" style="display:none" id="');
    var kb = x2('">');
    var lb = x2("</math>");
    var mb = x2('<table hidden id="');
    var nb = x2('">');
    var ob = x2("</table>");
    var pb = x2('<table hidden><tbody id="');
    var qb = x2('">');
    var rb = x2("</tbody></table>");
    var sb = x2('<table hidden><tr id="');
    var tb = x2('">');
    var ub = x2("</tr></table>");
    var vb = x2('<table hidden><colgroup id="');
    var wb = x2('">');
    var xb = x2("</colgroup></table>");
    function yb(a, b2, c2, d) {
      switch (c2.insertionMode) {
        case 0:
        case 1:
          return r2(a, db), r2(a, b2.segmentPrefix), r2(a, d.toString(16)), w3(a, eb);
        case 2:
          return r2(a, gb), r2(a, b2.segmentPrefix), r2(a, d.toString(16)), w3(a, hb);
        case 3:
          return r2(a, jb), r2(a, b2.segmentPrefix), r2(a, d.toString(16)), w3(a, kb);
        case 4:
          return r2(a, mb), r2(a, b2.segmentPrefix), r2(a, d.toString(16)), w3(a, nb);
        case 5:
          return r2(a, pb), r2(a, b2.segmentPrefix), r2(a, d.toString(16)), w3(a, qb);
        case 6:
          return r2(a, sb), r2(a, b2.segmentPrefix), r2(a, d.toString(16)), w3(a, tb);
        case 7:
          return r2(a, vb), r2(
            a,
            b2.segmentPrefix
          ), r2(a, d.toString(16)), w3(a, wb);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    function zb(a, b2) {
      switch (b2.insertionMode) {
        case 0:
        case 1:
          return w3(a, fb);
        case 2:
          return w3(a, ib);
        case 3:
          return w3(a, lb);
        case 4:
          return w3(a, ob);
        case 5:
          return w3(a, rb);
        case 6:
          return w3(a, ub);
        case 7:
          return w3(a, xb);
        default:
          throw Error("Unknown insertion mode. This is a bug in React.");
      }
    }
    var Ab = x2('function $RS(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};$RS("');
    var Bb = x2('$RS("');
    var Cb = x2('","');
    var Db = x2('")</script>');
    var Fb = x2('function $RC(a,b){a=document.getElementById(a);b=document.getElementById(b);b.parentNode.removeChild(b);if(a){a=a.previousSibling;var f=a.parentNode,c=a.nextSibling,e=0;do{if(c&&8===c.nodeType){var d=c.data;if("/$"===d)if(0===e)break;else e--;else"$"!==d&&"$?"!==d&&"$!"!==d||e++}d=c.nextSibling;f.removeChild(c);c=d}while(c);for(;b.firstChild;)f.insertBefore(b.firstChild,c);a.data="$";a._reactRetry&&a._reactRetry()}};$RC("');
    var Gb = x2('$RC("');
    var Hb = x2('","');
    var Ib = x2('")</script>');
    var Jb = x2('function $RX(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};$RX("');
    var Kb = x2('$RX("');
    var Lb = x2('"');
    var Mb = x2(")</script>");
    var Nb = x2(",");
    var Ob = /[<\u2028\u2029]/g;
    function Pb(a) {
      return JSON.stringify(a).replace(Ob, function(a2) {
        switch (a2) {
          case "<":
            return "\\u003c";
          case "\u2028":
            return "\\u2028";
          case "\u2029":
            return "\\u2029";
          default:
            throw Error("escapeJSStringsForInstructionScripts encountered a match it does not know how to replace. this means the match regex and the replacement characters are no longer in sync. This is a bug in React");
        }
      });
    }
    var O3 = Object.assign;
    var Qb = Symbol.for("react.element");
    var Rb = Symbol.for("react.portal");
    var Sb = Symbol.for("react.fragment");
    var Tb = Symbol.for("react.strict_mode");
    var Ub = Symbol.for("react.profiler");
    var Vb = Symbol.for("react.provider");
    var Wb = Symbol.for("react.context");
    var Xb = Symbol.for("react.forward_ref");
    var Yb = Symbol.for("react.suspense");
    var Zb = Symbol.for("react.suspense_list");
    var $b = Symbol.for("react.memo");
    var ac = Symbol.for("react.lazy");
    var bc = Symbol.for("react.scope");
    var cc = Symbol.for("react.debug_trace_mode");
    var dc = Symbol.for("react.legacy_hidden");
    var ec = Symbol.for("react.default_value");
    var fc = Symbol.iterator;
    function gc(a) {
      if (null == a) return null;
      if ("function" === typeof a) return a.displayName || a.name || null;
      if ("string" === typeof a) return a;
      switch (a) {
        case Sb:
          return "Fragment";
        case Rb:
          return "Portal";
        case Ub:
          return "Profiler";
        case Tb:
          return "StrictMode";
        case Yb:
          return "Suspense";
        case Zb:
          return "SuspenseList";
      }
      if ("object" === typeof a) switch (a.$$typeof) {
        case Wb:
          return (a.displayName || "Context") + ".Consumer";
        case Vb:
          return (a._context.displayName || "Context") + ".Provider";
        case Xb:
          var b2 = a.render;
          a = a.displayName;
          a || (a = b2.displayName || b2.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
          return a;
        case $b:
          return b2 = a.displayName || null, null !== b2 ? b2 : gc(a.type) || "Memo";
        case ac:
          b2 = a._payload;
          a = a._init;
          try {
            return gc(a(b2));
          } catch (c2) {
          }
      }
      return null;
    }
    var hc = {};
    function ic(a, b2) {
      a = a.contextTypes;
      if (!a) return hc;
      var c2 = {}, d;
      for (d in a) c2[d] = b2[d];
      return c2;
    }
    var P3 = null;
    function Q3(a, b2) {
      if (a !== b2) {
        a.context._currentValue = a.parentValue;
        a = a.parent;
        var c2 = b2.parent;
        if (null === a) {
          if (null !== c2) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
        } else {
          if (null === c2) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
          Q3(a, c2);
        }
        b2.context._currentValue = b2.value;
      }
    }
    function jc(a) {
      a.context._currentValue = a.parentValue;
      a = a.parent;
      null !== a && jc(a);
    }
    function kc(a) {
      var b2 = a.parent;
      null !== b2 && kc(b2);
      a.context._currentValue = a.value;
    }
    function lc(a, b2) {
      a.context._currentValue = a.parentValue;
      a = a.parent;
      if (null === a) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      a.depth === b2.depth ? Q3(a, b2) : lc(a, b2);
    }
    function mc(a, b2) {
      var c2 = b2.parent;
      if (null === c2) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
      a.depth === c2.depth ? Q3(a, c2) : mc(a, c2);
      b2.context._currentValue = b2.value;
    }
    function nc(a) {
      var b2 = P3;
      b2 !== a && (null === b2 ? kc(a) : null === a ? jc(b2) : b2.depth === a.depth ? Q3(b2, a) : b2.depth > a.depth ? lc(b2, a) : mc(b2, a), P3 = a);
    }
    var oc = { isMounted: function() {
      return false;
    }, enqueueSetState: function(a, b2) {
      a = a._reactInternals;
      null !== a.queue && a.queue.push(b2);
    }, enqueueReplaceState: function(a, b2) {
      a = a._reactInternals;
      a.replace = true;
      a.queue = [b2];
    }, enqueueForceUpdate: function() {
    } };
    function pc(a, b2, c2, d) {
      var f = void 0 !== a.state ? a.state : null;
      a.updater = oc;
      a.props = c2;
      a.state = f;
      var e2 = { queue: [], replace: false };
      a._reactInternals = e2;
      var g = b2.contextType;
      a.context = "object" === typeof g && null !== g ? g._currentValue : d;
      g = b2.getDerivedStateFromProps;
      "function" === typeof g && (g = g(c2, f), f = null === g || void 0 === g ? f : O3({}, f, g), a.state = f);
      if ("function" !== typeof b2.getDerivedStateFromProps && "function" !== typeof a.getSnapshotBeforeUpdate && ("function" === typeof a.UNSAFE_componentWillMount || "function" === typeof a.componentWillMount)) if (b2 = a.state, "function" === typeof a.componentWillMount && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && a.UNSAFE_componentWillMount(), b2 !== a.state && oc.enqueueReplaceState(a, a.state, null), null !== e2.queue && 0 < e2.queue.length) if (b2 = e2.queue, g = e2.replace, e2.queue = null, e2.replace = false, g && 1 === b2.length) a.state = b2[0];
      else {
        e2 = g ? b2[0] : a.state;
        f = true;
        for (g = g ? 1 : 0; g < b2.length; g++) {
          var h2 = b2[g];
          h2 = "function" === typeof h2 ? h2.call(a, e2, c2, d) : h2;
          null != h2 && (f ? (f = false, e2 = O3({}, e2, h2)) : O3(e2, h2));
        }
        a.state = e2;
      }
      else e2.queue = null;
    }
    var qc = { id: 1, overflow: "" };
    function rc(a, b2, c2) {
      var d = a.id;
      a = a.overflow;
      var f = 32 - sc(d) - 1;
      d &= ~(1 << f);
      c2 += 1;
      var e2 = 32 - sc(b2) + f;
      if (30 < e2) {
        var g = f - f % 5;
        e2 = (d & (1 << g) - 1).toString(32);
        d >>= g;
        f -= g;
        return { id: 1 << 32 - sc(b2) + f | c2 << f | d, overflow: e2 + a };
      }
      return { id: 1 << e2 | c2 << f | d, overflow: a };
    }
    var sc = Math.clz32 ? Math.clz32 : tc;
    var uc = Math.log;
    var vc = Math.LN2;
    function tc(a) {
      a >>>= 0;
      return 0 === a ? 32 : 31 - (uc(a) / vc | 0) | 0;
    }
    function wc(a, b2) {
      return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
    }
    var xc = "function" === typeof Object.is ? Object.is : wc;
    var R3 = null;
    var yc = null;
    var zc = null;
    var S3 = null;
    var T3 = false;
    var Ac = false;
    var U2 = 0;
    var V4 = null;
    var Bc = 0;
    function W3() {
      if (null === R3) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
      return R3;
    }
    function Cc() {
      if (0 < Bc) throw Error("Rendered more hooks than during the previous render");
      return { memoizedState: null, queue: null, next: null };
    }
    function Dc() {
      null === S3 ? null === zc ? (T3 = false, zc = S3 = Cc()) : (T3 = true, S3 = zc) : null === S3.next ? (T3 = false, S3 = S3.next = Cc()) : (T3 = true, S3 = S3.next);
      return S3;
    }
    function Ec() {
      yc = R3 = null;
      Ac = false;
      zc = null;
      Bc = 0;
      S3 = V4 = null;
    }
    function Fc(a, b2) {
      return "function" === typeof b2 ? b2(a) : b2;
    }
    function Gc(a, b2, c2) {
      R3 = W3();
      S3 = Dc();
      if (T3) {
        var d = S3.queue;
        b2 = d.dispatch;
        if (null !== V4 && (c2 = V4.get(d), void 0 !== c2)) {
          V4.delete(d);
          d = S3.memoizedState;
          do
            d = a(d, c2.action), c2 = c2.next;
          while (null !== c2);
          S3.memoizedState = d;
          return [d, b2];
        }
        return [S3.memoizedState, b2];
      }
      a = a === Fc ? "function" === typeof b2 ? b2() : b2 : void 0 !== c2 ? c2(b2) : b2;
      S3.memoizedState = a;
      a = S3.queue = { last: null, dispatch: null };
      a = a.dispatch = Hc.bind(null, R3, a);
      return [S3.memoizedState, a];
    }
    function Ic(a, b2) {
      R3 = W3();
      S3 = Dc();
      b2 = void 0 === b2 ? null : b2;
      if (null !== S3) {
        var c2 = S3.memoizedState;
        if (null !== c2 && null !== b2) {
          var d = c2[1];
          a: if (null === d) d = false;
          else {
            for (var f = 0; f < d.length && f < b2.length; f++) if (!xc(b2[f], d[f])) {
              d = false;
              break a;
            }
            d = true;
          }
          if (d) return c2[0];
        }
      }
      a = a();
      S3.memoizedState = [a, b2];
      return a;
    }
    function Hc(a, b2, c2) {
      if (25 <= Bc) throw Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
      if (a === R3) if (Ac = true, a = { action: c2, next: null }, null === V4 && (V4 = /* @__PURE__ */ new Map()), c2 = V4.get(b2), void 0 === c2) V4.set(b2, a);
      else {
        for (b2 = c2; null !== b2.next; ) b2 = b2.next;
        b2.next = a;
      }
    }
    function Jc() {
      throw Error("startTransition cannot be called during server rendering.");
    }
    function Kc() {
    }
    var Mc = { readContext: function(a) {
      return a._currentValue;
    }, useContext: function(a) {
      W3();
      return a._currentValue;
    }, useMemo: Ic, useReducer: Gc, useRef: function(a) {
      R3 = W3();
      S3 = Dc();
      var b2 = S3.memoizedState;
      return null === b2 ? (a = { current: a }, S3.memoizedState = a) : b2;
    }, useState: function(a) {
      return Gc(Fc, a);
    }, useInsertionEffect: Kc, useLayoutEffect: function() {
    }, useCallback: function(a, b2) {
      return Ic(function() {
        return a;
      }, b2);
    }, useImperativeHandle: Kc, useEffect: Kc, useDebugValue: Kc, useDeferredValue: function(a) {
      W3();
      return a;
    }, useTransition: function() {
      W3();
      return [false, Jc];
    }, useId: function() {
      var a = yc.treeContext;
      var b2 = a.overflow;
      a = a.id;
      a = (a & ~(1 << 32 - sc(a) - 1)).toString(32) + b2;
      var c2 = Lc;
      if (null === c2) throw Error("Invalid hook call. Hooks can only be called inside of the body of a function component.");
      b2 = U2++;
      a = ":" + c2.idPrefix + "R" + a;
      0 < b2 && (a += "H" + b2.toString(32));
      return a + ":";
    }, useMutableSource: function(a, b2) {
      W3();
      return b2(a._source);
    }, useSyncExternalStore: function(a, b2, c2) {
      if (void 0 === c2) throw Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
      return c2();
    } };
    var Lc = null;
    var Nc = ba2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher;
    function Oc(a) {
      console.error(a);
      return null;
    }
    function X2() {
    }
    function Pc(a, b2) {
      var c2 = a.pingedTasks;
      c2.push(b2);
      1 === c2.length && setImmediate(function() {
        return Qc(a);
      });
    }
    function Rc(a, b2, c2, d, f, e2, g, h2) {
      a.allPendingTasks++;
      null === c2 ? a.pendingRootTasks++ : c2.pendingTasks++;
      var m2 = { node: b2, ping: function() {
        return Pc(a, m2);
      }, blockedBoundary: c2, blockedSegment: d, abortSet: f, legacyContext: e2, context: g, treeContext: h2 };
      f.add(m2);
      return m2;
    }
    function Sc(a, b2, c2, d, f, e2) {
      return { status: 0, id: -1, index: b2, parentFlushed: false, chunks: [], children: [], formatContext: d, boundary: c2, lastPushedText: f, textEmbedded: e2 };
    }
    function Y3(a, b2) {
      a = a.onError(b2);
      if (null != a && "string" !== typeof a) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof a + '" instead');
      return a;
    }
    function Tc(a, b2) {
      var c2 = a.onShellError;
      c2(b2);
      c2 = a.onFatalError;
      c2(b2);
      null !== a.destination ? (a.status = 2, a.destination.destroy(b2)) : (a.status = 1, a.fatalError = b2);
    }
    function Uc(a, b2, c2, d, f) {
      R3 = {};
      yc = b2;
      U2 = 0;
      for (a = c2(d, f); Ac; ) Ac = false, U2 = 0, Bc += 1, S3 = null, a = c2(d, f);
      Ec();
      return a;
    }
    function Vc(a, b2, c2, d) {
      var f = c2.render(), e2 = d.childContextTypes;
      if (null !== e2 && void 0 !== e2) {
        var g = b2.legacyContext;
        if ("function" !== typeof c2.getChildContext) d = g;
        else {
          c2 = c2.getChildContext();
          for (var h2 in c2) if (!(h2 in e2)) throw Error((gc(d) || "Unknown") + '.getChildContext(): key "' + h2 + '" is not defined in childContextTypes.');
          d = O3({}, g, c2);
        }
        b2.legacyContext = d;
        Z3(a, b2, f);
        b2.legacyContext = g;
      } else Z3(a, b2, f);
    }
    function Wc(a, b2) {
      if (a && a.defaultProps) {
        b2 = O3({}, b2);
        a = a.defaultProps;
        for (var c2 in a) void 0 === b2[c2] && (b2[c2] = a[c2]);
        return b2;
      }
      return b2;
    }
    function Xc(a, b2, c2, d, f) {
      if ("function" === typeof c2) if (c2.prototype && c2.prototype.isReactComponent) {
        f = ic(c2, b2.legacyContext);
        var e2 = c2.contextType;
        e2 = new c2(d, "object" === typeof e2 && null !== e2 ? e2._currentValue : f);
        pc(e2, c2, d, f);
        Vc(a, b2, e2, c2);
      } else {
        e2 = ic(c2, b2.legacyContext);
        f = Uc(a, b2, c2, d, e2);
        var g = 0 !== U2;
        if ("object" === typeof f && null !== f && "function" === typeof f.render && void 0 === f.$$typeof) pc(f, c2, d, e2), Vc(a, b2, f, c2);
        else if (g) {
          d = b2.treeContext;
          b2.treeContext = rc(d, 1, 0);
          try {
            Z3(a, b2, f);
          } finally {
            b2.treeContext = d;
          }
        } else Z3(a, b2, f);
      }
      else if ("string" === typeof c2) {
        f = b2.blockedSegment;
        e2 = Pa2(f.chunks, c2, d, a.responseState, f.formatContext);
        f.lastPushedText = false;
        g = f.formatContext;
        f.formatContext = ya2(g, c2, d);
        Yc(a, b2, e2);
        f.formatContext = g;
        switch (c2) {
          case "area":
          case "base":
          case "br":
          case "col":
          case "embed":
          case "hr":
          case "img":
          case "input":
          case "keygen":
          case "link":
          case "meta":
          case "param":
          case "source":
          case "track":
          case "wbr":
            break;
          default:
            f.chunks.push(Qa, c2, Ra2);
        }
        f.lastPushedText = false;
      } else {
        switch (c2) {
          case dc:
          case cc:
          case Tb:
          case Ub:
          case Sb:
            Z3(a, b2, d.children);
            return;
          case Zb:
            Z3(
              a,
              b2,
              d.children
            );
            return;
          case bc:
            throw Error("ReactDOMServer does not yet support scope components.");
          case Yb:
            a: {
              c2 = b2.blockedBoundary;
              f = b2.blockedSegment;
              e2 = d.fallback;
              d = d.children;
              g = /* @__PURE__ */ new Set();
              var h2 = { id: null, rootSegmentID: -1, parentFlushed: false, pendingTasks: 0, forceClientRender: false, completedSegments: [], byteSize: 0, fallbackAbortableTasks: g, errorDigest: null }, m2 = Sc(a, f.chunks.length, h2, f.formatContext, false, false);
              f.children.push(m2);
              f.lastPushedText = false;
              var n2 = Sc(a, 0, null, f.formatContext, false, false);
              n2.parentFlushed = true;
              b2.blockedBoundary = h2;
              b2.blockedSegment = n2;
              try {
                if (Yc(a, b2, d), n2.lastPushedText && n2.textEmbedded && n2.chunks.push(za2), n2.status = 1, Zc(h2, n2), 0 === h2.pendingTasks) break a;
              } catch (p) {
                n2.status = 4, h2.forceClientRender = true, h2.errorDigest = Y3(a, p);
              } finally {
                b2.blockedBoundary = c2, b2.blockedSegment = f;
              }
              b2 = Rc(a, e2, c2, m2, g, b2.legacyContext, b2.context, b2.treeContext);
              a.pingedTasks.push(b2);
            }
            return;
        }
        if ("object" === typeof c2 && null !== c2) switch (c2.$$typeof) {
          case Xb:
            d = Uc(a, b2, c2.render, d, f);
            if (0 !== U2) {
              c2 = b2.treeContext;
              b2.treeContext = rc(c2, 1, 0);
              try {
                Z3(a, b2, d);
              } finally {
                b2.treeContext = c2;
              }
            } else Z3(
              a,
              b2,
              d
            );
            return;
          case $b:
            c2 = c2.type;
            d = Wc(c2, d);
            Xc(a, b2, c2, d, f);
            return;
          case Vb:
            f = d.children;
            c2 = c2._context;
            d = d.value;
            e2 = c2._currentValue;
            c2._currentValue = d;
            g = P3;
            P3 = d = { parent: g, depth: null === g ? 0 : g.depth + 1, context: c2, parentValue: e2, value: d };
            b2.context = d;
            Z3(a, b2, f);
            a = P3;
            if (null === a) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
            d = a.parentValue;
            a.context._currentValue = d === ec ? a.context._defaultValue : d;
            a = P3 = a.parent;
            b2.context = a;
            return;
          case Wb:
            d = d.children;
            d = d(c2._currentValue);
            Z3(a, b2, d);
            return;
          case ac:
            f = c2._init;
            c2 = f(c2._payload);
            d = Wc(c2, d);
            Xc(a, b2, c2, d, void 0);
            return;
        }
        throw Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: " + ((null == c2 ? c2 : typeof c2) + "."));
      }
    }
    function Z3(a, b2, c2) {
      b2.node = c2;
      if ("object" === typeof c2 && null !== c2) {
        switch (c2.$$typeof) {
          case Qb:
            Xc(a, b2, c2.type, c2.props, c2.ref);
            return;
          case Rb:
            throw Error("Portals are not currently supported by the server renderer. Render them conditionally so that they only appear on the client render.");
          case ac:
            var d = c2._init;
            c2 = d(c2._payload);
            Z3(a, b2, c2);
            return;
        }
        if (qa2(c2)) {
          $c(a, b2, c2);
          return;
        }
        null === c2 || "object" !== typeof c2 ? d = null : (d = fc && c2[fc] || c2["@@iterator"], d = "function" === typeof d ? d : null);
        if (d && (d = d.call(c2))) {
          c2 = d.next();
          if (!c2.done) {
            var f = [];
            do
              f.push(c2.value), c2 = d.next();
            while (!c2.done);
            $c(a, b2, f);
          }
          return;
        }
        a = Object.prototype.toString.call(c2);
        throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === a ? "object with keys {" + Object.keys(c2).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
      }
      "string" === typeof c2 ? (d = b2.blockedSegment, d.lastPushedText = Aa2(b2.blockedSegment.chunks, c2, a.responseState, d.lastPushedText)) : "number" === typeof c2 && (d = b2.blockedSegment, d.lastPushedText = Aa2(
        b2.blockedSegment.chunks,
        "" + c2,
        a.responseState,
        d.lastPushedText
      ));
    }
    function $c(a, b2, c2) {
      for (var d = c2.length, f = 0; f < d; f++) {
        var e2 = b2.treeContext;
        b2.treeContext = rc(e2, d, f);
        try {
          Yc(a, b2, c2[f]);
        } finally {
          b2.treeContext = e2;
        }
      }
    }
    function Yc(a, b2, c2) {
      var d = b2.blockedSegment.formatContext, f = b2.legacyContext, e2 = b2.context;
      try {
        return Z3(a, b2, c2);
      } catch (m2) {
        if (Ec(), "object" === typeof m2 && null !== m2 && "function" === typeof m2.then) {
          c2 = m2;
          var g = b2.blockedSegment, h2 = Sc(a, g.chunks.length, null, g.formatContext, g.lastPushedText, true);
          g.children.push(h2);
          g.lastPushedText = false;
          a = Rc(a, b2.node, b2.blockedBoundary, h2, b2.abortSet, b2.legacyContext, b2.context, b2.treeContext).ping;
          c2.then(a, a);
          b2.blockedSegment.formatContext = d;
          b2.legacyContext = f;
          b2.context = e2;
          nc(e2);
        } else throw b2.blockedSegment.formatContext = d, b2.legacyContext = f, b2.context = e2, nc(e2), m2;
      }
    }
    function ad(a) {
      var b2 = a.blockedBoundary;
      a = a.blockedSegment;
      a.status = 3;
      bd(this, b2, a);
    }
    function cd(a, b2, c2) {
      var d = a.blockedBoundary;
      a.blockedSegment.status = 3;
      null === d ? (b2.allPendingTasks--, 2 !== b2.status && (b2.status = 2, null !== b2.destination && b2.destination.end())) : (d.pendingTasks--, d.forceClientRender || (d.forceClientRender = true, d.errorDigest = b2.onError(void 0 === c2 ? Error("The render was aborted by the server without a reason.") : c2), d.parentFlushed && b2.clientRenderedBoundaries.push(d)), d.fallbackAbortableTasks.forEach(function(a2) {
        return cd(a2, b2, c2);
      }), d.fallbackAbortableTasks.clear(), b2.allPendingTasks--, 0 === b2.allPendingTasks && (a = b2.onAllReady, a()));
    }
    function Zc(a, b2) {
      if (0 === b2.chunks.length && 1 === b2.children.length && null === b2.children[0].boundary) {
        var c2 = b2.children[0];
        c2.id = b2.id;
        c2.parentFlushed = true;
        1 === c2.status && Zc(a, c2);
      } else a.completedSegments.push(b2);
    }
    function bd(a, b2, c2) {
      if (null === b2) {
        if (c2.parentFlushed) {
          if (null !== a.completedRootSegment) throw Error("There can only be one root segment. This is a bug in React.");
          a.completedRootSegment = c2;
        }
        a.pendingRootTasks--;
        0 === a.pendingRootTasks && (a.onShellError = X2, b2 = a.onShellReady, b2());
      } else b2.pendingTasks--, b2.forceClientRender || (0 === b2.pendingTasks ? (c2.parentFlushed && 1 === c2.status && Zc(b2, c2), b2.parentFlushed && a.completedBoundaries.push(b2), b2.fallbackAbortableTasks.forEach(ad, a), b2.fallbackAbortableTasks.clear()) : c2.parentFlushed && 1 === c2.status && (Zc(b2, c2), 1 === b2.completedSegments.length && b2.parentFlushed && a.partialBoundaries.push(b2)));
      a.allPendingTasks--;
      0 === a.allPendingTasks && (a = a.onAllReady, a());
    }
    function Qc(a) {
      if (2 !== a.status) {
        var b2 = P3, c2 = Nc.current;
        Nc.current = Mc;
        var d = Lc;
        Lc = a.responseState;
        try {
          var f = a.pingedTasks, e2;
          for (e2 = 0; e2 < f.length; e2++) {
            var g = f[e2];
            var h2 = a, m2 = g.blockedSegment;
            if (0 === m2.status) {
              nc(g.context);
              try {
                Z3(h2, g, g.node), m2.lastPushedText && m2.textEmbedded && m2.chunks.push(za2), g.abortSet.delete(g), m2.status = 1, bd(h2, g.blockedBoundary, m2);
              } catch (E2) {
                if (Ec(), "object" === typeof E2 && null !== E2 && "function" === typeof E2.then) {
                  var n2 = g.ping;
                  E2.then(n2, n2);
                } else {
                  g.abortSet.delete(g);
                  m2.status = 4;
                  var p = g.blockedBoundary, v2 = E2, C = Y3(h2, v2);
                  null === p ? Tc(h2, v2) : (p.pendingTasks--, p.forceClientRender || (p.forceClientRender = true, p.errorDigest = C, p.parentFlushed && h2.clientRenderedBoundaries.push(p)));
                  h2.allPendingTasks--;
                  if (0 === h2.allPendingTasks) {
                    var D = h2.onAllReady;
                    D();
                  }
                }
              } finally {
              }
            }
          }
          f.splice(0, e2);
          null !== a.destination && dd(a, a.destination);
        } catch (E2) {
          Y3(a, E2), Tc(a, E2);
        } finally {
          Lc = d, Nc.current = c2, c2 === Mc && nc(b2);
        }
      }
    }
    function ed(a, b2, c2) {
      c2.parentFlushed = true;
      switch (c2.status) {
        case 0:
          var d = c2.id = a.nextSegmentId++;
          c2.lastPushedText = false;
          c2.textEmbedded = false;
          a = a.responseState;
          r2(b2, Sa2);
          r2(b2, a.placeholderPrefix);
          a = d.toString(16);
          r2(b2, a);
          return w3(b2, Ta2);
        case 1:
          c2.status = 2;
          var f = true;
          d = c2.chunks;
          var e2 = 0;
          c2 = c2.children;
          for (var g = 0; g < c2.length; g++) {
            for (f = c2[g]; e2 < f.index; e2++) r2(b2, d[e2]);
            f = fd(a, b2, f);
          }
          for (; e2 < d.length - 1; e2++) r2(b2, d[e2]);
          e2 < d.length && (f = w3(b2, d[e2]));
          return f;
        default:
          throw Error("Aborted, errored or already flushed boundaries should not be flushed again. This is a bug in React.");
      }
    }
    function fd(a, b2, c2) {
      var d = c2.boundary;
      if (null === d) return ed(a, b2, c2);
      d.parentFlushed = true;
      if (d.forceClientRender) d = d.errorDigest, w3(b2, Xa2), r2(b2, Za), d && (r2(b2, ab2), r2(b2, F(d)), r2(b2, $a2)), w3(b2, bb), ed(a, b2, c2);
      else if (0 < d.pendingTasks) {
        d.rootSegmentID = a.nextSegmentId++;
        0 < d.completedSegments.length && a.partialBoundaries.push(d);
        var f = a.responseState;
        var e2 = f.nextSuspenseID++;
        f = x2(f.boundaryPrefix + e2.toString(16));
        d = d.id = f;
        cb(b2, a.responseState, d);
        ed(a, b2, c2);
      } else if (d.byteSize > a.progressiveChunkSize) d.rootSegmentID = a.nextSegmentId++, a.completedBoundaries.push(d), cb(b2, a.responseState, d.id), ed(a, b2, c2);
      else {
        w3(b2, Ua2);
        c2 = d.completedSegments;
        if (1 !== c2.length) throw Error("A previously unvisited boundary must have exactly one root segment. This is a bug in React.");
        fd(a, b2, c2[0]);
      }
      return w3(b2, Ya2);
    }
    function gd(a, b2, c2) {
      yb(b2, a.responseState, c2.formatContext, c2.id);
      fd(a, b2, c2);
      return zb(b2, c2.formatContext);
    }
    function hd(a, b2, c2) {
      for (var d = c2.completedSegments, f = 0; f < d.length; f++) id(a, b2, c2, d[f]);
      d.length = 0;
      a = a.responseState;
      d = c2.id;
      c2 = c2.rootSegmentID;
      r2(b2, a.startInlineScript);
      a.sentCompleteBoundaryFunction ? r2(b2, Gb) : (a.sentCompleteBoundaryFunction = true, r2(b2, Fb));
      if (null === d) throw Error("An ID must have been assigned before we can complete the boundary.");
      c2 = c2.toString(16);
      r2(b2, d);
      r2(b2, Hb);
      r2(b2, a.segmentPrefix);
      r2(b2, c2);
      return w3(b2, Ib);
    }
    function id(a, b2, c2, d) {
      if (2 === d.status) return true;
      var f = d.id;
      if (-1 === f) {
        if (-1 === (d.id = c2.rootSegmentID)) throw Error("A root segment ID must have been assigned by now. This is a bug in React.");
        return gd(a, b2, d);
      }
      gd(a, b2, d);
      a = a.responseState;
      r2(b2, a.startInlineScript);
      a.sentCompleteSegmentFunction ? r2(b2, Bb) : (a.sentCompleteSegmentFunction = true, r2(b2, Ab));
      r2(b2, a.segmentPrefix);
      f = f.toString(16);
      r2(b2, f);
      r2(b2, Cb);
      r2(b2, a.placeholderPrefix);
      r2(b2, f);
      return w3(b2, Db);
    }
    function dd(a, b2) {
      k3 = new Uint8Array(2048);
      l2 = 0;
      q2 = true;
      try {
        var c2 = a.completedRootSegment;
        if (null !== c2 && 0 === a.pendingRootTasks) {
          fd(a, b2, c2);
          a.completedRootSegment = null;
          var d = a.responseState.bootstrapChunks;
          for (c2 = 0; c2 < d.length - 1; c2++) r2(b2, d[c2]);
          c2 < d.length && w3(b2, d[c2]);
        }
        var f = a.clientRenderedBoundaries, e2;
        for (e2 = 0; e2 < f.length; e2++) {
          var g = f[e2];
          d = b2;
          var h2 = a.responseState, m2 = g.id, n2 = g.errorDigest, p = g.errorMessage, v2 = g.errorComponentStack;
          r2(d, h2.startInlineScript);
          h2.sentClientRenderFunction ? r2(d, Kb) : (h2.sentClientRenderFunction = true, r2(d, Jb));
          if (null === m2) throw Error("An ID must have been assigned before we can complete the boundary.");
          r2(d, m2);
          r2(d, Lb);
          if (n2 || p || v2) r2(d, Nb), r2(d, Pb(n2 || ""));
          if (p || v2) r2(d, Nb), r2(d, Pb(p || ""));
          v2 && (r2(d, Nb), r2(d, Pb(v2)));
          if (!w3(d, Mb)) {
            a.destination = null;
            e2++;
            f.splice(0, e2);
            return;
          }
        }
        f.splice(0, e2);
        var C = a.completedBoundaries;
        for (e2 = 0; e2 < C.length; e2++) if (!hd(a, b2, C[e2])) {
          a.destination = null;
          e2++;
          C.splice(0, e2);
          return;
        }
        C.splice(0, e2);
        ca2(b2);
        k3 = new Uint8Array(2048);
        l2 = 0;
        q2 = true;
        var D = a.partialBoundaries;
        for (e2 = 0; e2 < D.length; e2++) {
          var E2 = D[e2];
          a: {
            f = a;
            g = b2;
            var na2 = E2.completedSegments;
            for (h2 = 0; h2 < na2.length; h2++) if (!id(f, g, E2, na2[h2])) {
              h2++;
              na2.splice(0, h2);
              var Eb = false;
              break a;
            }
            na2.splice(0, h2);
            Eb = true;
          }
          if (!Eb) {
            a.destination = null;
            e2++;
            D.splice(0, e2);
            return;
          }
        }
        D.splice(0, e2);
        var oa2 = a.completedBoundaries;
        for (e2 = 0; e2 < oa2.length; e2++) if (!hd(a, b2, oa2[e2])) {
          a.destination = null;
          e2++;
          oa2.splice(0, e2);
          return;
        }
        oa2.splice(0, e2);
      } finally {
        ca2(b2), "function" === typeof b2.flush && b2.flush(), 0 === a.allPendingTasks && 0 === a.pingedTasks.length && 0 === a.clientRenderedBoundaries.length && 0 === a.completedBoundaries.length && b2.end();
      }
    }
    function jd(a) {
      setImmediate(function() {
        return Qc(a);
      });
    }
    function kd(a, b2) {
      if (1 === a.status) a.status = 2, b2.destroy(a.fatalError);
      else if (2 !== a.status && null === a.destination) {
        a.destination = b2;
        try {
          dd(a, b2);
        } catch (c2) {
          Y3(a, c2), Tc(a, c2);
        }
      }
    }
    function ld(a, b2) {
      try {
        var c2 = a.abortableTasks;
        c2.forEach(function(c3) {
          return cd(c3, a, b2);
        });
        c2.clear();
        null !== a.destination && dd(a, a.destination);
      } catch (d) {
        Y3(a, d), Tc(a, d);
      }
    }
    function md(a, b2) {
      return function() {
        return kd(b2, a);
      };
    }
    function nd(a, b2) {
      return function() {
        return ld(a, b2);
      };
    }
    function od(a, b2) {
      var c2 = b2 ? b2.identifierPrefix : void 0, d = b2 ? b2.nonce : void 0, f = b2 ? b2.bootstrapScriptContent : void 0, e2 = b2 ? b2.bootstrapScripts : void 0;
      var g = b2 ? b2.bootstrapModules : void 0;
      c2 = void 0 === c2 ? "" : c2;
      d = void 0 === d ? ra2 : x2('<script nonce="' + F(d) + '">');
      var h2 = [];
      void 0 !== f && h2.push(d, ("" + f).replace(wa2, xa2), sa2);
      if (void 0 !== e2) for (f = 0; f < e2.length; f++) h2.push(ta2, F(e2[f]), va2);
      if (void 0 !== g) for (e2 = 0; e2 < g.length; e2++) h2.push(ua2, F(g[e2]), va2);
      g = {
        bootstrapChunks: h2,
        startInlineScript: d,
        placeholderPrefix: x2(c2 + "P:"),
        segmentPrefix: x2(c2 + "S:"),
        boundaryPrefix: c2 + "B:",
        idPrefix: c2,
        nextSuspenseID: 0,
        sentCompleteSegmentFunction: false,
        sentCompleteBoundaryFunction: false,
        sentClientRenderFunction: false
      };
      e2 = b2 ? b2.namespaceURI : void 0;
      e2 = G3("http://www.w3.org/2000/svg" === e2 ? 2 : "http://www.w3.org/1998/Math/MathML" === e2 ? 3 : 0, null);
      f = b2 ? b2.progressiveChunkSize : void 0;
      d = b2 ? b2.onError : void 0;
      h2 = b2 ? b2.onAllReady : void 0;
      var m2 = b2 ? b2.onShellReady : void 0, n2 = b2 ? b2.onShellError : void 0;
      b2 = [];
      c2 = /* @__PURE__ */ new Set();
      g = {
        destination: null,
        responseState: g,
        progressiveChunkSize: void 0 === f ? 12800 : f,
        status: 0,
        fatalError: null,
        nextSegmentId: 0,
        allPendingTasks: 0,
        pendingRootTasks: 0,
        completedRootSegment: null,
        abortableTasks: c2,
        pingedTasks: b2,
        clientRenderedBoundaries: [],
        completedBoundaries: [],
        partialBoundaries: [],
        onError: void 0 === d ? Oc : d,
        onAllReady: void 0 === h2 ? X2 : h2,
        onShellReady: void 0 === m2 ? X2 : m2,
        onShellError: void 0 === n2 ? X2 : n2,
        onFatalError: X2
      };
      e2 = Sc(g, 0, null, e2, false, false);
      e2.parentFlushed = true;
      a = Rc(g, a, null, e2, c2, hc, null, qc);
      b2.push(a);
      return g;
    }
    exports.renderToPipeableStream = function(a, b2) {
      var c2 = od(a, b2), d = false;
      jd(c2);
      return { pipe: function(a2) {
        if (d) throw Error("React currently only supports piping to one writable stream.");
        d = true;
        kd(c2, a2);
        a2.on("drain", md(a2, c2));
        a2.on("error", nd(c2, Error("The destination stream errored while writing data.")));
        a2.on("close", nd(c2, Error("The destination stream closed early.")));
        return a2;
      }, abort: function(a2) {
        ld(c2, a2);
      } };
    };
    exports.version = "18.3.1";
  }
});

// node_modules/react-dom/server.node.js
var require_server_node = __commonJS({
  "node_modules/react-dom/server.node.js"(exports) {
    "use strict";
    var l2;
    var s2;
    if (true) {
      l2 = require_react_dom_server_legacy_node_production_min();
      s2 = require_react_dom_server_node_production_min();
    } else {
      l2 = null;
      s2 = null;
    }
    exports.version = l2.version;
    exports.renderToString = l2.renderToString;
    exports.renderToStaticMarkup = l2.renderToStaticMarkup;
    exports.renderToNodeStream = l2.renderToNodeStream;
    exports.renderToStaticNodeStream = l2.renderToStaticNodeStream;
    exports.renderToPipeableStream = s2.renderToPipeableStream;
  }
});

// node_modules/@react-email/render/dist/node/index.mjs
var node_exports = {};
__export(node_exports, {
  plainTextSelectors: () => plainTextSelectors,
  render: () => render2,
  renderAsync: () => renderAsync
});
import { Writable } from "node:stream";
function recursivelyMapDoc(doc, callback) {
  if (Array.isArray(doc)) {
    return doc.map((innerDoc) => recursivelyMapDoc(innerDoc, callback));
  }
  if (typeof doc === "object") {
    if (doc.type === "group") {
      return __spreadProps(__spreadValues({}, doc), {
        contents: recursivelyMapDoc(doc.contents, callback),
        expandedStates: recursivelyMapDoc(
          doc.expandedStates,
          callback
        )
      });
    }
    if ("contents" in doc) {
      return __spreadProps(__spreadValues({}, doc), {
        contents: recursivelyMapDoc(doc.contents, callback)
      });
    }
    if ("parts" in doc) {
      return __spreadProps(__spreadValues({}, doc), {
        parts: recursivelyMapDoc(doc.parts, callback)
      });
    }
    if (doc.type === "if-break") {
      return __spreadProps(__spreadValues({}, doc), {
        breakContents: recursivelyMapDoc(doc.breakContents, callback),
        flatContents: recursivelyMapDoc(doc.flatContents, callback)
      });
    }
  }
  return callback(doc);
}
var import_react, import_jsx_runtime, __defProp2, __defProps, __getOwnPropDescs, __getOwnPropSymbols, __hasOwnProp2, __propIsEnum, __defNormalProp, __spreadValues, __spreadProps, __async, plainTextSelectors, modifiedHtml, defaults, pretty, decoder, readStream, render2, renderAsync;
var init_node2 = __esm({
  "node_modules/@react-email/render/dist/node/index.mjs"() {
    init_html_to_text();
    import_react = __toESM(require_react(), 1);
    init_html();
    init_standalone();
    import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
    __defProp2 = Object.defineProperty;
    __defProps = Object.defineProperties;
    __getOwnPropDescs = Object.getOwnPropertyDescriptors;
    __getOwnPropSymbols = Object.getOwnPropertySymbols;
    __hasOwnProp2 = Object.prototype.hasOwnProperty;
    __propIsEnum = Object.prototype.propertyIsEnumerable;
    __defNormalProp = (obj, key, value) => key in obj ? __defProp2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
    __spreadValues = (a, b2) => {
      for (var prop in b2 || (b2 = {}))
        if (__hasOwnProp2.call(b2, prop))
          __defNormalProp(a, prop, b2[prop]);
      if (__getOwnPropSymbols)
        for (var prop of __getOwnPropSymbols(b2)) {
          if (__propIsEnum.call(b2, prop))
            __defNormalProp(a, prop, b2[prop]);
        }
      return a;
    };
    __spreadProps = (a, b2) => __defProps(a, __getOwnPropDescs(b2));
    __async = (__this, __arguments, generator) => {
      return new Promise((resolve, reject) => {
        var fulfilled = (value) => {
          try {
            step(generator.next(value));
          } catch (e2) {
            reject(e2);
          }
        };
        var rejected = (value) => {
          try {
            step(generator.throw(value));
          } catch (e2) {
            reject(e2);
          }
        };
        var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
        step((generator = generator.apply(__this, __arguments)).next());
      });
    };
    plainTextSelectors = [
      { selector: "img", format: "skip" },
      { selector: "#__react-email-preview", format: "skip" },
      {
        selector: "a",
        options: { linkBrackets: false }
      }
    ];
    modifiedHtml = __spreadValues({}, Gh);
    if (modifiedHtml.printers) {
      const previousPrint = modifiedHtml.printers.html.print;
      modifiedHtml.printers.html.print = (path, options, print, args) => {
        const node = path.getNode();
        const rawPrintingResult = previousPrint(path, options, print, args);
        if (node.type === "ieConditionalComment") {
          const printingResult = recursivelyMapDoc(rawPrintingResult, (doc) => {
            if (typeof doc === "object" && doc.type === "line") {
              return doc.soft ? "" : " ";
            }
            return doc;
          });
          return printingResult;
        }
        return rawPrintingResult;
      };
    }
    defaults = {
      endOfLine: "lf",
      tabWidth: 2,
      plugins: [modifiedHtml],
      bracketSameLine: true,
      parser: "html"
    };
    pretty = (str, options = {}) => {
      return yu(str.replaceAll("\0", ""), __spreadValues(__spreadValues({}, defaults), options));
    };
    decoder = new TextDecoder("utf-8");
    readStream = (stream) => __async(void 0, null, function* () {
      let result = "";
      if ("pipeTo" in stream) {
        const writableStream = new WritableStream({
          write(chunk) {
            result += decoder.decode(chunk);
          }
        });
        yield stream.pipeTo(writableStream);
      } else {
        const writable = new Writable({
          write(chunk, _encoding, callback) {
            result += decoder.decode(chunk);
            callback();
          }
        });
        stream.pipe(writable);
        yield new Promise((resolve, reject) => {
          writable.on("error", reject);
          writable.on("close", () => {
            resolve();
          });
        });
      }
      return result;
    });
    render2 = (element, options) => __async(void 0, null, function* () {
      const suspendedElement = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.Suspense, { children: element });
      const reactDOMServer = yield Promise.resolve().then(() => __toESM(require_server_node(), 1));
      let html2;
      if (Object.hasOwn(reactDOMServer, "renderToReadableStream")) {
        html2 = yield readStream(
          yield reactDOMServer.renderToReadableStream(suspendedElement)
        );
      } else {
        yield new Promise((resolve, reject) => {
          const stream = reactDOMServer.renderToPipeableStream(suspendedElement, {
            onAllReady() {
              return __async(this, null, function* () {
                html2 = yield readStream(stream);
                resolve();
              });
            },
            onError(error) {
              reject(error);
            }
          });
        });
      }
      if (options == null ? void 0 : options.plainText) {
        return convert(html2, __spreadValues({
          selectors: plainTextSelectors
        }, options.htmlToTextOptions));
      }
      const doctype = '<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">';
      const document = `${doctype}${html2.replace(/<!DOCTYPE.*?>/, "")}`;
      if (options == null ? void 0 : options.pretty) {
        return pretty(document);
      }
      return document;
    });
    renderAsync = (element, options) => {
      return render2(element, options);
    };
  }
});

// node_modules/resend/dist/index.mjs
var __defProp3 = Object.defineProperty;
var __defProps2 = Object.defineProperties;
var __getOwnPropDescs2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols2 = Object.getOwnPropertySymbols;
var __hasOwnProp3 = Object.prototype.hasOwnProperty;
var __propIsEnum2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp2 = (obj, key, value) => key in obj ? __defProp3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues2 = (a, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp3.call(b2, prop))
      __defNormalProp2(a, prop, b2[prop]);
  if (__getOwnPropSymbols2)
    for (var prop of __getOwnPropSymbols2(b2)) {
      if (__propIsEnum2.call(b2, prop))
        __defNormalProp2(a, prop, b2[prop]);
    }
  return a;
};
var __spreadProps2 = (a, b2) => __defProps2(a, __getOwnPropDescs2(b2));
var __async2 = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e2) {
        reject(e2);
      }
    };
    var step = (x2) => x2.done ? resolve(x2.value) : Promise.resolve(x2.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var version = "4.4.1";
var ApiKeys = class {
  constructor(resend2) {
    this.resend = resend2;
  }
  create(_0) {
    return __async2(this, arguments, function* (payload, options = {}) {
      const data = yield this.resend.post(
        "/api-keys",
        payload,
        options
      );
      return data;
    });
  }
  list() {
    return __async2(this, null, function* () {
      const data = yield this.resend.get("/api-keys");
      return data;
    });
  }
  remove(id) {
    return __async2(this, null, function* () {
      const data = yield this.resend.delete(
        `/api-keys/${id}`
      );
      return data;
    });
  }
};
var Audiences = class {
  constructor(resend2) {
    this.resend = resend2;
  }
  create(_0) {
    return __async2(this, arguments, function* (payload, options = {}) {
      const data = yield this.resend.post(
        "/audiences",
        payload,
        options
      );
      return data;
    });
  }
  list() {
    return __async2(this, null, function* () {
      const data = yield this.resend.get("/audiences");
      return data;
    });
  }
  get(id) {
    return __async2(this, null, function* () {
      const data = yield this.resend.get(
        `/audiences/${id}`
      );
      return data;
    });
  }
  remove(id) {
    return __async2(this, null, function* () {
      const data = yield this.resend.delete(
        `/audiences/${id}`
      );
      return data;
    });
  }
};
function parseEmailToApiOptions(email) {
  return {
    attachments: email.attachments,
    bcc: email.bcc,
    cc: email.cc,
    from: email.from,
    headers: email.headers,
    html: email.html,
    reply_to: email.replyTo,
    scheduled_at: email.scheduledAt,
    subject: email.subject,
    tags: email.tags,
    text: email.text,
    to: email.to
  };
}
var Batch = class {
  constructor(resend2) {
    this.resend = resend2;
  }
  send(_0) {
    return __async2(this, arguments, function* (payload, options = {}) {
      return this.create(payload, options);
    });
  }
  create(_0) {
    return __async2(this, arguments, function* (payload, options = {}) {
      const emails = [];
      for (const email of payload) {
        if (email.react) {
          if (!this.renderAsync) {
            try {
              const { renderAsync: renderAsync2 } = yield Promise.resolve().then(() => (init_node2(), node_exports));
              this.renderAsync = renderAsync2;
            } catch (error) {
              throw new Error(
                "Failed to render React component. Make sure to install `@react-email/render`"
              );
            }
          }
          email.html = yield this.renderAsync(email.react);
          email.react = void 0;
        }
        emails.push(parseEmailToApiOptions(email));
      }
      const data = yield this.resend.post(
        "/emails/batch",
        emails,
        options
      );
      return data;
    });
  }
};
var Broadcasts = class {
  constructor(resend2) {
    this.resend = resend2;
  }
  create(_0) {
    return __async2(this, arguments, function* (payload, options = {}) {
      if (payload.react) {
        if (!this.renderAsync) {
          try {
            const { renderAsync: renderAsync2 } = yield Promise.resolve().then(() => (init_node2(), node_exports));
            this.renderAsync = renderAsync2;
          } catch (error) {
            throw new Error(
              "Failed to render React component. Make sure to install `@react-email/render`"
            );
          }
        }
        payload.html = yield this.renderAsync(
          payload.react
        );
      }
      const data = yield this.resend.post(
        "/broadcasts",
        {
          name: payload.name,
          audience_id: payload.audienceId,
          preview_text: payload.previewText,
          from: payload.from,
          html: payload.html,
          reply_to: payload.replyTo,
          subject: payload.subject,
          text: payload.text
        },
        options
      );
      return data;
    });
  }
  send(id, payload) {
    return __async2(this, null, function* () {
      const data = yield this.resend.post(
        `/broadcasts/${id}/send`,
        { scheduled_at: payload == null ? void 0 : payload.scheduledAt }
      );
      return data;
    });
  }
  list() {
    return __async2(this, null, function* () {
      const data = yield this.resend.get("/broadcasts");
      return data;
    });
  }
  get(id) {
    return __async2(this, null, function* () {
      const data = yield this.resend.get(
        `/broadcasts/${id}`
      );
      return data;
    });
  }
  remove(id) {
    return __async2(this, null, function* () {
      const data = yield this.resend.delete(
        `/broadcasts/${id}`
      );
      return data;
    });
  }
  update(id, payload) {
    return __async2(this, null, function* () {
      const data = yield this.resend.patch(
        `/broadcasts/${id}`,
        {
          name: payload.name,
          audience_id: payload.audienceId,
          from: payload.from,
          html: payload.html,
          text: payload.text,
          subject: payload.subject,
          reply_to: payload.replyTo,
          preview_text: payload.previewText
        }
      );
      return data;
    });
  }
};
var Contacts = class {
  constructor(resend2) {
    this.resend = resend2;
  }
  create(_0) {
    return __async2(this, arguments, function* (payload, options = {}) {
      const data = yield this.resend.post(
        `/audiences/${payload.audienceId}/contacts`,
        {
          unsubscribed: payload.unsubscribed,
          email: payload.email,
          first_name: payload.firstName,
          last_name: payload.lastName
        },
        options
      );
      return data;
    });
  }
  list(options) {
    return __async2(this, null, function* () {
      const data = yield this.resend.get(
        `/audiences/${options.audienceId}/contacts`
      );
      return data;
    });
  }
  get(options) {
    return __async2(this, null, function* () {
      if (!options.id && !options.email) {
        return {
          data: null,
          error: {
            message: "Missing `id` or `email` field.",
            name: "missing_required_field"
          }
        };
      }
      const data = yield this.resend.get(
        `/audiences/${options.audienceId}/contacts/${(options == null ? void 0 : options.email) ? options == null ? void 0 : options.email : options == null ? void 0 : options.id}`
      );
      return data;
    });
  }
  update(payload) {
    return __async2(this, null, function* () {
      if (!payload.id && !payload.email) {
        return {
          data: null,
          error: {
            message: "Missing `id` or `email` field.",
            name: "missing_required_field"
          }
        };
      }
      const data = yield this.resend.patch(
        `/audiences/${payload.audienceId}/contacts/${(payload == null ? void 0 : payload.email) ? payload == null ? void 0 : payload.email : payload == null ? void 0 : payload.id}`,
        {
          unsubscribed: payload.unsubscribed,
          first_name: payload.firstName,
          last_name: payload.lastName
        }
      );
      return data;
    });
  }
  remove(payload) {
    return __async2(this, null, function* () {
      if (!payload.id && !payload.email) {
        return {
          data: null,
          error: {
            message: "Missing `id` or `email` field.",
            name: "missing_required_field"
          }
        };
      }
      const data = yield this.resend.delete(
        `/audiences/${payload.audienceId}/contacts/${(payload == null ? void 0 : payload.email) ? payload == null ? void 0 : payload.email : payload == null ? void 0 : payload.id}`
      );
      return data;
    });
  }
};
function parseDomainToApiOptions(domain) {
  return {
    name: domain.name,
    region: domain.region,
    custom_return_path: domain.customReturnPath
  };
}
var Domains = class {
  constructor(resend2) {
    this.resend = resend2;
  }
  create(_0) {
    return __async2(this, arguments, function* (payload, options = {}) {
      const data = yield this.resend.post(
        "/domains",
        parseDomainToApiOptions(payload),
        options
      );
      return data;
    });
  }
  list() {
    return __async2(this, null, function* () {
      const data = yield this.resend.get("/domains");
      return data;
    });
  }
  get(id) {
    return __async2(this, null, function* () {
      const data = yield this.resend.get(
        `/domains/${id}`
      );
      return data;
    });
  }
  update(payload) {
    return __async2(this, null, function* () {
      const data = yield this.resend.patch(
        `/domains/${payload.id}`,
        {
          click_tracking: payload.clickTracking,
          open_tracking: payload.openTracking,
          tls: payload.tls
        }
      );
      return data;
    });
  }
  remove(id) {
    return __async2(this, null, function* () {
      const data = yield this.resend.delete(
        `/domains/${id}`
      );
      return data;
    });
  }
  verify(id) {
    return __async2(this, null, function* () {
      const data = yield this.resend.post(
        `/domains/${id}/verify`
      );
      return data;
    });
  }
};
var Emails = class {
  constructor(resend2) {
    this.resend = resend2;
  }
  send(_0) {
    return __async2(this, arguments, function* (payload, options = {}) {
      return this.create(payload, options);
    });
  }
  create(_0) {
    return __async2(this, arguments, function* (payload, options = {}) {
      if (payload.react) {
        if (!this.renderAsync) {
          try {
            const { renderAsync: renderAsync2 } = yield Promise.resolve().then(() => (init_node2(), node_exports));
            this.renderAsync = renderAsync2;
          } catch (error) {
            throw new Error(
              "Failed to render React component. Make sure to install `@react-email/render`"
            );
          }
        }
        payload.html = yield this.renderAsync(
          payload.react
        );
      }
      const data = yield this.resend.post(
        "/emails",
        parseEmailToApiOptions(payload),
        options
      );
      return data;
    });
  }
  get(id) {
    return __async2(this, null, function* () {
      const data = yield this.resend.get(
        `/emails/${id}`
      );
      return data;
    });
  }
  update(payload) {
    return __async2(this, null, function* () {
      const data = yield this.resend.patch(
        `/emails/${payload.id}`,
        {
          scheduled_at: payload.scheduledAt
        }
      );
      return data;
    });
  }
  cancel(id) {
    return __async2(this, null, function* () {
      const data = yield this.resend.post(
        `/emails/${id}/cancel`
      );
      return data;
    });
  }
};
var defaultBaseUrl = "https://api.resend.com";
var defaultUserAgent = `resend-node:${version}`;
var baseUrl = typeof process !== "undefined" && process.env ? process.env.RESEND_BASE_URL || defaultBaseUrl : defaultBaseUrl;
var userAgent = typeof process !== "undefined" && process.env ? process.env.RESEND_USER_AGENT || defaultUserAgent : defaultUserAgent;
var Resend = class {
  constructor(key) {
    this.key = key;
    this.apiKeys = new ApiKeys(this);
    this.audiences = new Audiences(this);
    this.batch = new Batch(this);
    this.broadcasts = new Broadcasts(this);
    this.contacts = new Contacts(this);
    this.domains = new Domains(this);
    this.emails = new Emails(this);
    if (!key) {
      if (typeof process !== "undefined" && process.env) {
        this.key = process.env.RESEND_API_KEY;
      }
      if (!this.key) {
        throw new Error(
          'Missing API key. Pass it to the constructor `new Resend("re_123")`'
        );
      }
    }
    this.headers = new Headers({
      Authorization: `Bearer ${this.key}`,
      "User-Agent": userAgent,
      "Content-Type": "application/json"
    });
  }
  fetchRequest(_0) {
    return __async2(this, arguments, function* (path, options = {}) {
      try {
        const response = yield fetch(`${baseUrl}${path}`, options);
        if (!response.ok) {
          try {
            const rawError = yield response.text();
            return { data: null, error: JSON.parse(rawError) };
          } catch (err) {
            if (err instanceof SyntaxError) {
              return {
                data: null,
                error: {
                  name: "application_error",
                  message: "Internal server error. We are unable to process your request right now, please try again later."
                }
              };
            }
            const error = {
              message: response.statusText,
              name: "application_error"
            };
            if (err instanceof Error) {
              return { data: null, error: __spreadProps2(__spreadValues2({}, error), { message: err.message }) };
            }
            return { data: null, error };
          }
        }
        const data = yield response.json();
        return { data, error: null };
      } catch (error) {
        return {
          data: null,
          error: {
            name: "application_error",
            message: "Unable to fetch data. The request could not be resolved."
          }
        };
      }
    });
  }
  post(_0, _1) {
    return __async2(this, arguments, function* (path, entity, options = {}) {
      const headers = new Headers(this.headers);
      if (options.idempotencyKey) {
        headers.set("Idempotency-Key", options.idempotencyKey);
      }
      const requestOptions = __spreadValues2({
        method: "POST",
        headers,
        body: JSON.stringify(entity)
      }, options);
      return this.fetchRequest(path, requestOptions);
    });
  }
  get(_0) {
    return __async2(this, arguments, function* (path, options = {}) {
      const requestOptions = __spreadValues2({
        method: "GET",
        headers: this.headers
      }, options);
      return this.fetchRequest(path, requestOptions);
    });
  }
  put(_0, _1) {
    return __async2(this, arguments, function* (path, entity, options = {}) {
      const requestOptions = __spreadValues2({
        method: "PUT",
        headers: this.headers,
        body: JSON.stringify(entity)
      }, options);
      return this.fetchRequest(path, requestOptions);
    });
  }
  patch(_0, _1) {
    return __async2(this, arguments, function* (path, entity, options = {}) {
      const requestOptions = __spreadValues2({
        method: "PATCH",
        headers: this.headers,
        body: JSON.stringify(entity)
      }, options);
      return this.fetchRequest(path, requestOptions);
    });
  }
  delete(path, query) {
    return __async2(this, null, function* () {
      const requestOptions = {
        method: "DELETE",
        headers: this.headers,
        body: JSON.stringify(query)
      };
      return this.fetchRequest(path, requestOptions);
    });
  }
};

// api/send-email.ts
var resend = new Resend(process.env.RESEND_API_KEY);
async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }
  try {
    const { name: name2, email, subject, message } = req.body;
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <contact@dmautz.com>",
      to: "dmautz@gmail.com",
      subject: `New Contact Form Submission: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name2}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });
    if (error) {
      return res.status(400).json({ error });
    }
    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ error: "Failed to send email" });
  }
}
export {
  handler as default
};
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react-jsx-runtime.production.min.js:
  (**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-server-legacy.node.production.min.js:
  (**
   * @license React
   * react-dom-server-legacy.node.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-server.node.production.min.js:
  (**
   * @license React
   * react-dom-server.node.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
