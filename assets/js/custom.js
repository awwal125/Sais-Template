
/*=============================================================
    Authour URI: www.binarytheme.com
    License: Commons Attribution 3.0

    http://creativecommons.org/licenses/by/3.0/

    100% To use For Personal And Commercial Use.
    IN EXCHANGE JUST GIVE US CREDITS AND TELL YOUR FRIENDS ABOUT US

    ========================================================  */


(function ($) {
    "use strict";
    var mainApp = {

        metisMenu: function () {

            /*====================================
            METIS MENU
            ======================================*/

            $('#main-menu').metisMenu();

        },


        loadMenu: function () {

            /*====================================
            LOAD APPROPRIATE MENU BAR
         ======================================*/

            $(window).bind("load resize", function () {
                if ($(this).width() < 768) {
                    $('div.sidebar-collapse').addClass('collapse')
                } else {
                    $('div.sidebar-collapse').removeClass('collapse')
                }
            });
        },
        slide_show: function () {

            /*====================================
           SLIDESHOW SCRIPTS
        ======================================*/

            $('#carousel-example').carousel({
                interval: 3000 // THIS TIME IS IN MILLI SECONDS
            })
        },
        reviews_fun: function () {
            /*====================================
         REWIEW SLIDE SCRIPTS
      ======================================*/
            $('#reviews').carousel({
                interval: 2000 //TIME IN MILLI SECONDS
            })
        },
        wizard_fun: function () {
            /*====================================
            //horizontal wizrd code section
             ======================================*/
            $(function () {
                $("#wizard").steps({
                    headerTag: "h2",
                    bodyTag: "section",
                    transitionEffect: "slideLeft"
                });
            });
            /*====================================
            //vertical wizrd  code section
            ======================================*/
            $(function () {
                $("#wizardV").steps({
                    headerTag: "h2",
                    bodyTag: "section",
                    transitionEffect: "slideLeft",
                    stepsOrientation: "vertical"
                });
            });
        },


    };
    $(document).ready(function () {
        mainApp.metisMenu();
        mainApp.loadMenu();
        mainApp.slide_show();
        mainApp.reviews_fun();
        mainApp.wizard_fun();

    });
}(jQuery));

/*====================================
   ADDTIONS FUNCTIONS
======================================*/
function checkEnrollmentDetials(){
    var e = document.getElementById("term_selection");
    var strUser = e.options[e.selectedIndex].text;
    if (strUser.localeCompare("Semester 1 2016-2017") == 0){
        document.getElementById("page-inner-details").innerHTML = "Freshmen: August 2, 2016<br />Sophomore : August 3, 2016" +
                                                        "<br />Junior : August 4, 2016<br />Senior : August 5, 2016";
    }
    else {
        document.getElementById("page-inner-details").innerHTML = "There are no enrollment dates available for this term.";
    }

}


function checkClassSchedule(){
    var e = document.getElementById("term_selection");
    var strUser = e.options[e.selectedIndex].text;
    if (strUser.localeCompare("Semester 2 2015-2016") == 0){
        // INITIALIZE TABLE
        var x = document.createElement("TABLE");
        x.setAttribute("id", "t01");
        document.body.appendChild(x);

        // ADD TITLE ROW
        var y = document.createElement("TR");
        document.getElementById("t01").appendChild(y);

        // ADD TABLE ATTRIBUTES
        var z = document.createElement("TH");
        var t = document.createTextNode("Class Name");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TH");
        t = document.createTextNode("Section");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TH");
        t = document.createTextNode("Component");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TH");
        t = document.createTextNode("Schedule");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TH");
        t = document.createTextNode("Room");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TH");
        t = document.createTextNode("Instructor");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TH");
        t = document.createTextNode("Units");
        z.appendChild(t);
        y.appendChild(z);

        // ADD DATA ROW
        y = document.createElement("TR");
        document.getElementById("t01").appendChild(y);

        // ADD TABLE DATA
        z = document.createElement("TD");
        t = document.createTextNode("CMSC 126");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("A");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("Lecture");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("TuFr 2:00PM - 3:00PM");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("Classroom");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("SANDRA MAE FAMADOR");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("3.0");
        z.appendChild(t);
        y.appendChild(z);

        // ADD DATA ROW
        y = document.createElement("TR");
        document.getElementById("t01").appendChild(y);

        // ADD TABLE DATA
        z = document.createElement("TD");
        t = document.createTextNode("CMSC 132");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("A");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("Lecture");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("TuFr 8:00AM - 9:00AM");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("Classroom");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("JAMILA RUTH HOJAS");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("3.0");
        z.appendChild(t);
        y.appendChild(z);


        document.getElementById("t01").appendChild(y);


        a = document.getElementById("page-inner-details")
        a.replaceChild(x, a.childNodes[0]);
        document.getElementById("page-inner-details").style.backgroundColor = "white";
    }
    else {
        document.getElementById("page-inner-details").style.backgroundColor = "#d9534f";
        document.getElementById("page-inner-details").innerHTML = "There are no class schedule available for this term.";
    }

}

function checkWeeklySchedule(){
    var e = document.getElementById("term_selection");
    var strUser = e.options[e.selectedIndex].text;
    if (strUser.localeCompare("Semester 2 2015-2016") == 0){
        // INITIALIZE TABLE
        var x = document.createElement("TABLE");
        x.setAttribute("id", "t02");
        document.body.appendChild(x);

        // ADD TITLE ROW
        var y = document.createElement("TR");
        document.getElementById("t02").appendChild(y);

        // ADD TABLE ATTRIBUTES
        var z = document.createElement("TH");
        var t = document.createTextNode("Time");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TH");
        t = document.createTextNode("Monday");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TH");
        t = document.createTextNode("Tuesday");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TH");
        t = document.createTextNode("Wenesday");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TH");
        t = document.createTextNode("Thursday");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TH");
        t = document.createTextNode("Friday");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TH");
        t = document.createTextNode("Saturday");
        z.appendChild(t);
        y.appendChild(z);

        // ADD DATA ROW
        y = document.createElement("TR");
        document.getElementById("t02").appendChild(y);

        // ADD TABLE DATA
        z = document.createElement("TD");
        t = document.createTextNode("8:00AM - 9:00AM");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("CMSC 132");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("CMSC 132");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);

        // ADD DATA ROW
        y = document.createElement("TR");
        document.getElementById("t02").appendChild(y);

        // ADD TABLE DATA
        z = document.createElement("TD");
        t = document.createTextNode("9:00AM - 10:00AM");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);

    // ADD DATA ROW
        y = document.createElement("TR");
        document.getElementById("t02").appendChild(y);

        // ADD TABLE DATA
        z = document.createElement("TD");
        t = document.createTextNode("10:00AM - 11:00AM");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);

        // ADD DATA ROW
        y = document.createElement("TR");
        document.getElementById("t02").appendChild(y);

        // ADD TABLE DATA
        z = document.createElement("TD");
        t = document.createTextNode("11:00AM - 12:00NN");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);

        // ADD DATA ROW
        y = document.createElement("TR");
        document.getElementById("t02").appendChild(y);

        // ADD TABLE DATA
        z = document.createElement("TD");
        t = document.createTextNode("12:00NN - 1:00PM");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);


        // ADD DATA ROW
        y = document.createElement("TR");
        document.getElementById("t02").appendChild(y);

        // ADD TABLE DATA
        z = document.createElement("TD");
        t = document.createTextNode("1:00PM - 2:00PM");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        document.getElementById("t02").appendChild(y);

    // ADD DATA ROW
        y = document.createElement("TR");
        document.getElementById("t02").appendChild(y);

        // ADD TABLE DATA
        z = document.createElement("TD");
        t = document.createTextNode("2:00PM - 3:00PM");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("CMSC 126");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("CMSC 126");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);

        // ADD DATA ROW
        y = document.createElement("TR");
        document.getElementById("t02").appendChild(y);

        // ADD TABLE DATA
        z = document.createElement("TD");
        t = document.createTextNode("3:00PM - 4:00PM");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);

        // ADD DATA ROW
        y = document.createElement("TR");
        document.getElementById("t02").appendChild(y);

        // ADD TABLE DATA
        z = document.createElement("TD");
        t = document.createTextNode("4:00PM - 5:00PM");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);

        document.getElementById("t02").appendChild(y);

        a = document.getElementById("page-inner-details");
        a.replaceChild(x, a.childNodes[0]);
        document.getElementById("page-inner-details").style.backgroundColor = "white";
    }
    else {
        document.getElementById("page-inner-details").style.backgroundColor = "#d9534f";
        document.getElementById("page-inner-details").innerHTML = "There are no weekly schedule available for this term.";
    }

}

function dropClasses(){
    var e = document.getElementById("term_selection");
    var strUser = e.options[e.selectedIndex].text;
    if (strUser.localeCompare("Semester 2 2015-2016") == 0){
        // INITIALIZE TABLE
        var x = document.createElement("TABLE");
        x.setAttribute("id", "t01");
        document.body.appendChild(x);

        // ADD TITLE ROW
        var y = document.createElement("TR");
        document.getElementById("t01").appendChild(y);

        // ADD TABLE ATTRIBUTES
        var z = document.createElement("TH");
        var t = document.createTextNode("Class Name");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TH");
        t = document.createTextNode("Section");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TH");
        t = document.createTextNode("Component");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TH");
        t = document.createTextNode("Schedule");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TH");
        t = document.createTextNode("Room");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TH");
        t = document.createTextNode("Instructor");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TH");
        t = document.createTextNode("Units");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TH");
        t = document.createTextNode("Status");
        z.appendChild(t);
        y.appendChild(z);
         z = document.createElement("TH");
        t = document.createTextNode("Drop");
        z.appendChild(t);
        y.appendChild(z);

        // ADD DATA ROW
        y = document.createElement("TR");
        document.getElementById("t01").appendChild(y);

        // ADD TABLE DATA
        z = document.createElement("TD");
        t = document.createTextNode("CMSC 126");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("A");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("Lecture");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("TuFr 2:00PM - 3:00PM");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("Classroom");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("SANDRA MAE FAMADOR");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("3.0");
        z.appendChild(t);
        y.appendChild(z);
        t = document.createElement("I");
        t.setAttribute("class", "fa fa-check");
        z = document.createElement("TD");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createElement("INPUT");
        t.setAttribute("type", "checkbox");
        z.appendChild(t);
        y.appendChild(z);

        // ADD DATA ROW
        y = document.createElement("TR");
        document.getElementById("t01").appendChild(y);

        // ADD TABLE DATA
        z = document.createElement("TD");
        t = document.createTextNode("CMSC 132");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("A");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("Lecture");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("TuFr 8:00AM - 9:00AM");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("Classroom");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("JAMILA RUTH HOJAS");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("3.0");
        z.appendChild(t);
        y.appendChild(z);
        t = document.createElement("I");
        t.setAttribute("class", "fa fa-check");
        z = document.createElement("TD");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createElement("INPUT");
        t.setAttribute("type", "checkbox");
        z.appendChild(t);
        y.appendChild(z);


        document.getElementById("t01").appendChild(y);

        var button = document.createElement("BUTTON");
        button.setAttribute("type","submit");
        button.setAttribute("class","btn btn-danger");
        button.setAttribute("id","btn");
        t = document.createTextNode("Drop Selected Classes");
        button.appendChild(t);
        document.body.appendChild(button);


        a = document.getElementById("page-inner-details")
        a.replaceChild(x, a.childNodes[0]);
        a.appendChild(button);
        document.getElementById("page-inner-details").style.backgroundColor = "white";
    }
    else {
        document.getElementById("page-inner-details").style.backgroundColor = "#d9534f";
        document.getElementById("page-inner-details").innerHTML = "Dropping of classes is not available for this term.";
    }

}

function checkGrades(){
    var e = document.getElementById("term_selection");
    var strUser = e.options[e.selectedIndex].text;
    if (strUser.localeCompare("Semester 2 2015-2016") == 0){
        document.getElementById("hide").style.display = "block" ;
        // INITIALIZE TABLE
        var x = document.createElement("TABLE");
        x.setAttribute("id", "t01");
        document.body.appendChild(x);

        // ADD TITLE ROW
        var y = document.createElement("TR");
        document.getElementById("t01").appendChild(y);

        // ADD TABLE ATTRIBUTES
        var z = document.createElement("TH");
        var t = document.createTextNode("Class Name");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TH");
        t = document.createTextNode("Units");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TH");
        t = document.createTextNode("Grading");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TH");
        t = document.createTextNode("Grade");
        z.appendChild(t);
        y.appendChild(z);


        // ADD DATA ROW
        y = document.createElement("TR");
        document.getElementById("t01").appendChild(y);

        // ADD TABLE DATA
        z = document.createElement("TD");
        t = document.createTextNode("CMSC 126");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("3.0");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("Numeric Grade");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);


        // ADD DATA ROW
        y = document.createElement("TR");
        document.getElementById("t01").appendChild(y);

        // ADD TABLE DATA
        z = document.createElement("TD");
        t = document.createTextNode("CMSC 132");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("3.0");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode("Numeric Grade");
        z.appendChild(t);
        y.appendChild(z);
        z = document.createElement("TD");
        t = document.createTextNode(" ");
        z.appendChild(t);
        y.appendChild(z);

        document.getElementById("t01").appendChild(y);


        a = document.getElementById("page-inner-details")
        a.replaceChild(x, a.childNodes[0]);
        document.getElementById("page-inner-details").style.backgroundColor = "white";

    }
    else {
        document.getElementById("page-inner-details").style.backgroundColor = "#d9534f";
        document.getElementById("page-inner-details").innerHTML = "Grades are not available for this term.";
        document.getElementById("hide").style.display = "none" ;
    }

}
