/* ============================================================
   CATALOG: the ONLY file you edit when adding chapters/assignments.

   Naming convention (files are found automatically):
     chapter      ->  lectures/<id>.html
     assignment N ->  assignments/<id>/assignment-N.html

   To add a chapter: copy one block below, change the fields.
   To add an assignment: add one more title to "assignments".
   Optional: tags: ["A", "B"] adds small tag labels to the chapter card.
   To announce a chapter early: set soon:true (shows "Coming soon").
   ============================================================ */
const CATALOG = {
  course: "Java",
  lectures: [
    {
      id: "lecture-01",
      tags: ["Methods", "Parameters"],
      title: "Java Methods",
      blurb: "What a method is, how to define one, and how parameters let you feed information in.",
      assignments: []
    },
    {
      id: "lecture-02",
      tags: ["Methods", "return"],
      title: "Java Methods with Returns",
      blurb: "Giving a method a return type, using the return keyword, and doing something useful with the value that comes back.",
      assignments: []
    },
    {
      id: "lecture-03",
      tags: ["Objects", "Constructors"],
      title: "Instance Variables and Constructors",
      blurb: "Storing an object's own data, and using a constructor to set it up the moment the object is created.",
      assignments: []
    },
    {
      id: "lecture-04",
      tags: ["Methods", "Constructors", "Overloading"],
      title: "Method & Constructor Overloading",
      blurb: "Giving one name several forms: how Java tells overloaded methods and constructors apart by their parameters.",
      assignments: []
    },
    {
      id: "lecture-05",
      tags: ["Access modifiers", "static", "Variables"],
      title: "Parameter Passing, Access Modifiers, static and Variables",
      blurb: "How data enters methods, who can access what, whether a member belongs to an object or the class, and where variables live.",
      assignments: []
    },
    {
      id: "lecture-06",
      tags: ["Exceptions", "try/catch", "throw/throws"],
      title: "Errors and Exceptions",
      blurb: "What goes wrong, when Java notices, and how try/catch/finally, throw and throws let you handle it gracefully.",
      assignments: [
        "Spot, Sort and Predict",
        "The Safe Calculator",
        "Always Close the Register",
        "The Mark Validator",
        "The Report-Card Processor"
      ]
    },
    {
      id: "lecture-07",
      tags: ["LocalDate", "DateTimeFormatter", "Period / Duration"],
      title: "Working with Dates and Times",
      blurb: "Creating dates and times with java.time, writing them in any style, and measuring the gap between them.",
      assignments: [
        "Parsing Date",
        "Formatting Datetime",
        "Print Dates",
        "Add Years",
        "List of Dates",
        "Name of the Weekday",
        "Count of Mondays",
        "UNIX Timestamp to DateTime",
        "Exception",
        "Age Calculator",
        "Valid Date Checker",
        "Shift Length",
        "Which Date Comes First"
      ]
    }
    /* Next chapter: copy this block, remove the comment marks, rename.
    ,{
      id: "lecture-08",
      tags: [],
      title: "Next chapter (rename me)",
      blurb: "Short description goes here.",
      soon: true,
      assignments: []
    }
    */
  ]
};
