// ! function(t) {
//     var e = {};

//     function r(i) {
//         if (e[i]) return e[i].exports;
//         var n = e[i] = {
//             i: i,
//             l: !1,
//             exports: {}
//         };
//         return t[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports
//     }
//     r.m = t, r.c = e, r.d = function(t, e, i) {
//         r.o(t, e) || Object.defineProperty(t, e, {
//             enumerable: !0,
//             get: i
//         })
//     }, r.r = function(t) {
//         "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
//             value: "Module"
//         }), Object.defineProperty(t, "__esModule", {
//             value: !0
//         })
//     }, r.t = function(t, e) {
//         if (1 & e && (t = r(t)), 8 & e) return t;
//         if (4 & e && "object" == typeof t && t && t.__esModule) return t;
//         var i = Object.create(null);
//         if (r.r(i), Object.defineProperty(i, "default", {
//                 enumerable: !0,
//                 value: t
//             }), 2 & e && "string" != typeof t)
//             for (var n in t) r.d(i, n, function(e) {
//                 return t[e]
//             }.bind(null, n));
//         return i
//     }, r.n = function(t) {
//         var e = t && t.__esModule ? function() {
//             return t.default
//         } : function() {
//             return t
//         };
//         return r.d(e, "a", e), e
//     }, r.o = function(t, e) {
//         return Object.prototype.hasOwnProperty.call(t, e)
//     }, r.p = "", r(r.s = 3)
// }([, , , function(t, e, r) {


//     // main
//     class o extends HTMLElement {
//         constructor() {
//             super(), this.currentSectionIndex = 0, this.steps = this.querySelectorAll("[data-step]"), this.stepImages = this.querySelectorAll("[data-step-image]"), this.stepSideImages = this.querySelectorAll("[data-step-side-image]"), this.clickableElements = this.querySelectorAll("[data-step-link]")
//         }
//         connectedCallback() {
//             this.addClickEvents(), this.setupScrollInteraction()
//         }
//         addClickEvents() {
//             this.clickableElements.forEach(t => {
//                 t.addEventListener("click", t => {
//                     if (!t.target) return;
//                     t.preventDefault();
//                     const e = this.parents(t.target, ".the-process__step");
//                     if (e) {
//                         e[0].getAttribute("data-is-toggled") ? e[0].removeAttribute("data-is-toggled", "true") : e[0].setAttribute("data-is-toggled", "true")
//                     }
//                 })
//             })
//         }



//         setupScrollInteraction() {
//             this.steps.forEach(t => t.removeAttribute("data-is-active")), this.stepImages[0].setAttribute("data-is-active", "true"), this.steps[0].setAttribute("data-is-active", "true");
//             let t = this;
//             const e = new IntersectionObserver((function(e, r) {
//                 e.forEach((e, r) => {
//                     e.target.removeAttribute("data-is-active");
//                     const i = [...e.target.parentNode.children].indexOf(e.target),
//                         n = t.steps[i];
//                     e.isIntersecting && n && (t.currentSectionIndex = i, t.steps.forEach(t => t.removeAttribute("data-is-active")), t.stepImages.forEach(t => t.removeAttribute("data-is-active")), t.stepImages[i].setAttribute("data-is-active", "true"), t.steps[i].setAttribute("data-is-active", "true"))
//                 })
//             }), {
//                 threshold: .5
//             });
//             this.steps.forEach(t => {
//                 e.observe(t)
//             })
//         }
//         parents(t, e) {
//             const r = [];
//             for (;
//                 (t = t.parentNode) && t !== document;) e && !t.matches(e) || r.push(t);
//             return r
//         }
//     }

//     async function Lo(t) {
//         const e = await fetch(t + "?ajax=1"),
//             r = await e.text();

//     }({
//         init() {
//             customElements.define("process-section", o), (() => {
//                 ji.registerPlugin();

//             })
            
//         }
//     }).init();
// }]);


// 2 working some time 


// !function(t) {
//     var e = {};

//     function r(i) {
//         if (e[i]) return e[i].exports;
//         var n = e[i] = {
//             i: i,
//             l: !1,
//             exports: {}
//         };
//         return t[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports
//     }
//     r.m = t, r.c = e, r.d = function(t, e, i) {
//         r.o(t, e) || Object.defineProperty(t, e, {
//             enumerable: !0,
//             get: i
//         })
//     }, r.r = function(t) {
//         "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
//             value: "Module"
//         }), Object.defineProperty(t, "__esModule", {
//             value: !0
//         })
//     }, r.t = function(t, e) {
//         if (1 & e && (t = r(t)), 8 & e) return t;
//         if (4 & e && "object" == typeof t && t && t.__esModule) return t;
//         var i = Object.create(null);
//         if (r.r(i), Object.defineProperty(i, "default", {
//                 enumerable: !0,
//                 value: t
//             }), 2 & e && "string" != typeof t)
//             for (var n in t) r.d(i, n, function(e) {
//                 return t[e]
//             }.bind(null, n));
//         return i
//     }, r.n = function(t) {
//         var e = t && t.__esModule ? function() {
//             return t.default
//         } : function() {
//             return t
//         };
//         return r.d(e, "a", e), e
//     }, r.o = function(t, e) {
//         return Object.prototype.hasOwnProperty.call(t, e)
//     }, r.p = "", r(r.s = 3)
// }([, , , function(t, e, r) {

//     // main
//     class o extends HTMLElement {
//         constructor() {
//             super(), this.currentSectionIndex = 0, this.steps = this.querySelectorAll("[data-step]"), this.stepImages = this.querySelectorAll("[data-step-image]"), this.stepSideImages = this.querySelectorAll("[data-step-side-image]"), this.clickableElements = this.querySelectorAll("[data-step-link]")
//         }
//         connectedCallback() {
//             this.addClickEvents(), this.setupScrollInteraction()
//         }
//         addClickEvents() {
//             this.clickableElements.forEach(t => {
//                 t.addEventListener("click", t => {
//                     if (!t.target) return;
//                     t.preventDefault();
//                     const e = this.parents(t.target, ".the-process__step");
//                     if (e) {
//                         e[0].getAttribute("data-is-toggled") ? e[0].removeAttribute("data-is-toggled", "true") : e[0].setAttribute("data-is-toggled", "true")
//                     }
//                 })
//             })
//         }
//         setupScrollInteraction() {
//             this.steps.forEach(t => t.removeAttribute("data-is-active"));
//             this.stepImages[0].setAttribute("data-is-active", "true");
//             this.steps[0].setAttribute("data-is-active", "true");

//             let t = this;
            
//             function checkCenter() {
//                 const viewportCenter = window.innerHeight / 2;

//                 t.steps.forEach((step, i) => {
//                     const boundingRect = step.getBoundingClientRect();
//                     const elementCenter = boundingRect.top + boundingRect.height / 2;

//                     if (Math.abs(viewportCenter - elementCenter) < 10) { // Adjust the 10px threshold as needed
//                         t.currentSectionIndex = i;
//                         t.steps.forEach(t => t.removeAttribute("data-is-active"));
//                         t.stepImages.forEach(t => t.removeAttribute("data-is-active"));
//                         t.stepImages[i].setAttribute("data-is-active", "true");
//                         t.steps[i].setAttribute("data-is-active", "true");
//                     }
//                 });
//             }

//             window.addEventListener('scroll', checkCenter);
//             window.addEventListener('resize', checkCenter);
//             checkCenter(); // Initial check in case page is loaded with a step already centered
//         }
//         parents(t, e) {
//             const r = [];
//             for (;
//                 (t = t.parentNode) && t !== document;) e && !t.matches(e) || r.push(t);
//             return r
//         }
//     }

//     async function Lo(t) {
//         const e = await fetch(t + "?ajax=1"),
//             r = await e.text();

//     }({
//         init() {
//             customElements.define("process-section", o), (() => {
//                 ji.registerPlugin();

//             })
            
//         }
//     }).init();
// }]);


// ======================
// better for pervi
// =========================


// !function(t) {
//     var e = {};

//     function r(i) {
//         if (e[i]) return e[i].exports;
//         var n = e[i] = {
//             i: i,
//             l: !1,
//             exports: {}
//         };
//         return t[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports
//     }
//     r.m = t, r.c = e, r.d = function(t, e, i) {
//         r.o(t, e) || Object.defineProperty(t, e, {
//             enumerable: !0,
//             get: i
//         })
//     }, r.r = function(t) {
//         "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
//             value: "Module"
//         }), Object.defineProperty(t, "__esModule", {
//             value: !0
//         })
//     }, r.t = function(t, e) {
//         if (1 & e && (t = r(t)), 8 & e) return t;
//         if (4 & e && "object" == typeof t && t && t.__esModule) return t;
//         var i = Object.create(null);
//         if (r.r(i), Object.defineProperty(i, "default", {
//                 enumerable: !0,
//                 value: t
//             }), 2 & e && "string" != typeof t)
//             for (var n in t) r.d(i, n, function(e) {
//                 return t[e]
//             }.bind(null, n));
//         return i
//     }, r.n = function(t) {
//         var e = t && t.__esModule ? function() {
//             return t.default
//         } : function() {
//             return t
//         };
//         return r.d(e, "a", e), e
//     }, r.o = function(t, e) {
//         return Object.prototype.hasOwnProperty.call(t, e)
//     }, r.p = "", r(r.s = 3)
// }([, , , function(t, e, r) {

//     // main
//     class o extends HTMLElement {
//         constructor() {
//             super(), this.currentSectionIndex = 0, this.steps = this.querySelectorAll("[data-step]"), this.stepImages = this.querySelectorAll("[data-step-image]"), this.stepSideImages = this.querySelectorAll("[data-step-side-image]"), this.clickableElements = this.querySelectorAll("[data-step-link]")
//         }
//         connectedCallback() {
//             this.addClickEvents(), this.setupScrollInteraction()
//         }
//         addClickEvents() {
//             this.clickableElements.forEach(t => {
//                 t.addEventListener("click", t => {
//                     if (!t.target) return;
//                     t.preventDefault();
//                     const e = this.parents(t.target, ".the-process__step");
//                     if (e) {
//                         e[0].getAttribute("data-is-toggled") ? e[0].removeAttribute("data-is-toggled", "true") : e[0].setAttribute("data-is-toggled", "true")
//                     }
//                 })
//             })
//         }
//         setupScrollInteraction() {
//             this.steps.forEach(t => t.removeAttribute("data-is-active"));
//             this.stepImages[0].setAttribute("data-is-active", "true");
//             this.steps[0].setAttribute("data-is-active", "true");

//             let t = this;
            
//             function checkCenter() {
//                 const viewportHeight = window.innerHeight;

//                 t.steps.forEach((step, i) => {
//                     const boundingRect = step.getBoundingClientRect();
//                     const elementTop = boundingRect.top;
//                     const elementBottom = boundingRect.bottom;
//                     const elementHeight = boundingRect.height;
//                     const elementCenter = elementTop + elementHeight / 2;
//                     const viewportCenter = viewportHeight / 2;

//                     // Check if the element is centered within the viewport or near the top/bottom edges
//                     const isCentered = elementCenter >= viewportCenter - 10 && elementCenter <= viewportCenter + 10;
//                     const isFirstElementVisible = i === 0 && elementTop >= 0;
//                     const isLastElementVisible = i === t.steps.length - 1 && elementBottom <= viewportHeight;

//                     if (isCentered || isFirstElementVisible || isLastElementVisible) {
//                         t.currentSectionIndex = i;
//                         t.steps.forEach(t => t.removeAttribute("data-is-active"));
//                         t.stepImages.forEach(t => t.removeAttribute("data-is-active"));
//                         t.stepImages[i].setAttribute("data-is-active", "true");
//                         t.steps[i].setAttribute("data-is-active", "true");
//                     }
//                 });
//             }

//             window.addEventListener('scroll', checkCenter);
//             window.addEventListener('resize', checkCenter);
//             checkCenter(); // Initial check in case page is loaded with a step already centered
//         }
//         parents(t, e) {
//             const r = [];
//             for (;
//                 (t = t.parentNode) && t !== document;) e && !t.matches(e) || r.push(t);
//             return r
//         }
//     }

//     async function Lo(t) {
//         const e = await fetch(t + "?ajax=1"),
//             r = await e.text();

//     }({
//         init() {
//             customElements.define("process-section", o), (() => {
//                 ji.registerPlugin();

//             })
            
//         }
//     }).init();
// }]);

!function(t) {
    var e = {};

    function r(i) {
        if (e[i]) return e[i].exports;
        var n = e[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }
    r.m = t, r.c = e, r.d = function(t, e, i) {
        r.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, r.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, r.t = function(t, e) {
        if (1 & e && (t = r(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (r.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var n in t) r.d(i, n, function(e) {
                return t[e]
            }.bind(null, n));
        return i
    }, r.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return r.d(e, "a", e), e
    }, r.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, r.p = "", r(r.s = 3)
}([, , , function(t, e, r) {

    // main
    class o extends HTMLElement {
        constructor() {
            super(), this.currentSectionIndex = 0, this.steps = this.querySelectorAll("[data-step]"), this.stepImages = this.querySelectorAll("[data-step-image]"), this.stepSideImages = this.querySelectorAll("[data-step-side-image]"), this.clickableElements = this.querySelectorAll("[data-step-link]")
        }
        connectedCallback() {
            this.addClickEvents(), this.setupScrollInteraction()
        }
        addClickEvents() {
            this.clickableElements.forEach(t => {
                t.addEventListener("click", t => {
                    if (!t.target) return;
                    t.preventDefault();
                    const e = this.parents(t.target, ".the-process__step");
                    if (e) {
                        e[0].getAttribute("data-is-toggled") ? e[0].removeAttribute("data-is-toggled", "true") : e[0].setAttribute("data-is-toggled", "true")
                    }
                })
            })
        }
        setupScrollInteraction() {
            this.steps.forEach(t => t.removeAttribute("data-is-active"));
            this.stepImages[0].setAttribute("data-is-active", "true");
            this.steps[0].setAttribute("data-is-active", "true");

            let t = this;

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    const index = [...entry.target.parentNode.children].indexOf(entry.target);
                    if (entry.isIntersecting) {
                        t.currentSectionIndex = index;
                        t.steps.forEach(t => t.removeAttribute("data-is-active"));
                        t.stepImages.forEach(t => t.removeAttribute("data-is-active"));
                        t.steps[index].setAttribute("data-is-active", "true");
                        t.stepImages[index].setAttribute("data-is-active", "true");
                    }
                });
            }, {
                threshold: [0.5], // Element must be at least 50% visible to be considered active
                rootMargin: '0px 0px -40% 0px' // Adjusts the viewport to trigger earlier
            });

            this.steps.forEach(step => observer.observe(step));
        }
        parents(t, e) {
            const r = [];
            for (;
                (t = t.parentNode) && t !== document;) e && !t.matches(e) || r.push(t);
            return r
        }
    }

    async function Lo(t) {
        const e = await fetch(t + "?ajax=1"),
            r = await e.text();

    }({
        init() {
            customElements.define("process-section", o), (() => {
                ji.registerPlugin();

            })
            
        }
    }).init();
}]);







