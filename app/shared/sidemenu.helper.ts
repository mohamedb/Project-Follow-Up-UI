/// <reference path="../../typings/main.d.ts" />

export class SideMenuHelper {
    $body = $("body");
    $openLeftBtn = $(".open-left");
    $menuItem = $("#sidebar-menu a");
    resizefunc: any = [];
    constructor() {
        /*
        $(".nicescroll").niceScroll({ cursorcolor: '#98a6ad', cursorwidth: '6px', cursorborderradius: '5px' });
        $('[data-toggle="tooltip"]').tooltip();

        $('[data-plugin="circliful"]').each(function(idx, obj) {
            $(this).circliful();
        });

        FastClick.attach(document.body);
        this.resizefunc.push("initscrolls");
        this.resizefunc.push("changeptype");

        $('.animate-number').each(function() {
            $(this).animateNumbers($(this).attr("data-value"), true, parseInt($(this).attr("data-duration")));
        });

        //RUN RESIZE ITEMS
        $(window).resize(this.debounce(this.resizeitems, 100));
        $("body").trigger("resize");

        // right side-bar toggle
        $('.right-bar-toggle').on('click', function(e) {

            $('#wrapper').toggleClass('right-bar-enabled');
        });


        //end other

        var $this = this;
        var ua = navigator.userAgent,
            event = (ua.match(/iP/i)) ? "touchstart" : "click";



        //bind on click
        this.$openLeftBtn.on(event, function(e) {
            e.stopPropagation();
            $this.openLeftBar();
        });

        // LEFT SIDE MAIN NAVIGATION
        $this.$menuItem.on(event, $this.menuItemClick);

        // NAVIGATION HIGHLIGHT & OPEN PARENT
        $("#sidebar-menu ul li.has_sub a.active").parents("li:last").children("a:first").addClass("active").trigger("click");
        console.log("\n**************\nSideMenu.Helper OK:\n*************\n");
        */
    }
    openLeftBar() {
        $("#wrapper").toggleClass("enlarged");
        $("#wrapper").addClass("forced");

        if ($("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left")) {
            $("body").removeClass("fixed-left").addClass("fixed-left-void");
        } else if (!$("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left-void")) {
            $("body").removeClass("fixed-left-void").addClass("fixed-left");
        }

        if ($("#wrapper").hasClass("enlarged")) {
            $(".left ul").removeAttr("style");
        } else {
            $(".subdrop").siblings("ul:first").show();
        }

        this.toggle_slimscroll(".slimscrollleft");
        $("body").trigger("resize");
    }

    menuItemClick(e) {
        if (!$("#wrapper").hasClass("enlarged")) {
            if ($(this).parent().hasClass("has_sub")) {

            }
            if (!$(this).hasClass("subdrop")) {
                // hide any open menus and remove all other classes
                $("ul", $(this).parents("ul:first")).slideUp(350);
                $("a", $(this).parents("ul:first")).removeClass("subdrop");
                $("#sidebar-menu .pull-right i").removeClass("zmdi-chevron-down").addClass("zmdi-chevron-right");

                // open our new menu and add the open class
                $(this).next("ul").slideDown(350);
                $(this).addClass("subdrop");
                $(".drop-arrow i", $(this).parents(".has_sub:first")).removeClass("zmdi-chevron-right").addClass("zmdi-chevron-down");
                $(".drop-arrow i", $(this).siblings("ul")).removeClass("zmdi-chevron-down").addClass("zmdi-chevron-right");
            } else if ($(this).hasClass("subdrop")) {
                $(this).removeClass("subdrop");
                $(this).next("ul").slideUp(350);
                $(".drop-arrow i", $(this).parent()).removeClass("zmdi-chevron-down").addClass("zmdi-chevron-right");
            }
        }
    }

    toggle_slimscroll(item) {
        if ($("#wrapper").hasClass("enlarged")) {
            $(item).css("overflow", "inherit").parent().css("overflow", "inherit");
            $(item).siblings(".slimScrollBar").css("visibility", "hidden");
        } else {
            $(item).css("overflow", "hidden").parent().css("overflow", "hidden");
            $(item).siblings(".slimScrollBar").css("visibility", "visible");
        }
    }
    debounce(func, wait, immediate = null) {
        var timeout, result;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) result = func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) result = func.apply(context, args);
            return result;
        };
    }
    resizeitems() {
        if ($.isArray(this.resizefunc)) {
            for (let i = 0; i < this.resizefunc.length; i++) {
              //  window[this.resizefunc[i]]();

            }
        }
    }
}
