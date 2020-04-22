//传两参数   第一个是设计稿尺寸   第二个参数则是设置制作稿的最大宽度，超过720，则以720为最大限制。
 ! function (e, t) {
            function n() {
                var n = l.getBoundingClientRect().width;
                t = t || 540, n > t && (n = t);
                var i = 100 * n / e;
                r.innerHTML = "html{font-size:" + i + "px;}"
            }
            var i, d = document,
                o = window,
                l = d.documentElement,
                r = document.createElement("style");
            if (l.firstElementChild) l.firstElementChild.appendChild(r);
            else {
                var a = d.createElement("div");
                a.appendChild(r), d.write(a.innerHTML), a = null
            }
            n(), o.addEventListener("resize", function () {
                clearTimeout(i), i = setTimeout(n, 300)
            }, !1), o.addEventListener("pageshow", function (e) {
                e.persisted && (clearTimeout(i), i = setTimeout(n, 300))
            }, !1), "complete" === d.readyState ? d.body.style.fontSize = "16px" : d.addEventListener(
                "DOMContentLoaded",
                function (e) {
                    d.body.style.fontSize = "16px"
                }, !1)
        }(720, 720);