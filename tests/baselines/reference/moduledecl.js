var a;
(function (a) {
})(a || (a = {}));

var b;
(function (b) {
    (function (a) {
    })(b.a || (b.a = {}));
    var a = b.a;

})(b || (b = {}));

var c;
(function (c) {
    (function (a) {
        (function (b) {
            var ma = a;
            ; ;
        })(a.b || (a.b = {}));
        var b = a.b;

    })(c.a || (c.a = {}));
    var a = c.a;

})(c || (c = {}));

var d = a;
; ;
var e = b.a;
; ;
var m0;
(function (m0) {
    function f1() {
    }
            function f2(ns) {
    }
    var c1 = (function () {
        function c1() { }
        c1.s1 = undefined;
        c1.s2 = undefined;
        return c1;
    })();    
    var m2 = a;
    ; ;
    var m3 = b;
    ; ;
    var m4 = b.a;
    ; ;
    var m5 = c;
    ; ;
    var m6 = c.a;
    ; ;
    var m7 = c.a.b;
    ; ;
    var m8 = c.a.b.ma;
    ; ;
})(m0 || (m0 = {}));

var m1;
(function (m1) {
    function f1() {
    }
    m1.f1 = f1;
            function f2(ns) {
    }
    m1.f2 = f2;
    var c1 = (function () {
        function c1(n, n2, n3, n4) {
            this.n = n;
            this.n2 = n2;
            this.n3 = n3;
            this.n4 = n4;
            this.f = c.a.b.ma;
        }
        c1.s1 = undefined;
        c1.s2 = undefined;
        c1.prototype.d = function () {
            return "Hello";
        };
        return c1;
    })();
    m1.c1 = c1;    
    var m2 = a;
    ; ;
    var m3 = b;
    ; ;
    var m4 = b.a;
    ; ;
    var m5 = c;
    ; ;
    var m6 = c.a;
    ; ;
    var m7 = c.a.b;
    ; ;
    var m8 = c.a.b.ma;
    ; ;
})(m1 || (m1 = {}));
