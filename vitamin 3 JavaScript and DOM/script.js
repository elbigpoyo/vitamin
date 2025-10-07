/**
 * Question 1
 */
const question1 = () => {
  const sidebarButton = document.getElementById("sidebar-button");
  const sidebar = document.getElementById("sidebar");

  //let sidebarIsOpen = false;

  // Listen for a "click" event on the sidebar's button.
  //
  // Browsers emit lots of different kinds of events, for
  // a full list see the following link:
  //   https://www.javatpoint.com/javascript-events
  //
  // addEventListener will then call the function we provide
  // whenever the button is clicked.
  sidebarButton.addEventListener("click", () => {

    sidebar.classList.toggle('opened');

    if (sidebar.classList.contains('opened')) {
      // Close the sidebar
      /** YOUR CODE HERE */
      //sidebar.classList.remove("opened");
      //sidebarIsOpen = false;
      sidebarButton.textContent = "‹"
    } else {
      // Open the sidebar
      /** YOUR CODE HERE */
      //sidebar.classList.add("opened");
      //sidebarIsOpen = true;
      sidebarButton.textContent = "›"
    }
    
  });
};

/**
 * Question 2
 */
const question2 = () => {
  const taskName = document.getElementById("task-name");
  const addTodoButton = document.getElementById("add-todo");
  const todoListUl = document.getElementById("todo-list");

  /** YOUR CODE HERE */
  addTodoButton.addEventListener("click", () => {
    const task = taskName.value.trim()
    
    if (task) {
      const li = document.createElement("li");
      li.textContent = task;
      todoListUl.append(li);
      taskName.value = "";      
    }
  })
};

/**
 * Question 3
 */
const question3 = () => {
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const message = document.getElementById("message");

  // using this function is reccomended but not necessary
  const updateMessage = () => {
    /** YOUR CODE HERE */
    message.textContent = `Hello ${firstNameInput.value} ${lastNameInput.value}!`;

  };

  /** YOUR CODE HERE */
  firstNameInput.addEventListener("input", updateMessage);
  lastNameInput.addEventListener("input", updateMessage);
};

/**
 * We need to wait for the HTML file to fully load before running
 * our JavaScript, otherwise it won't be able to operate on the HTML
 * since it hasn't loaded.
 */
document.addEventListener("DOMContentLoaded", (event) => {
  // We wrap each question in a try-catch so that way even if
  // your code for one question errors, the other ones
  // will work.
  try {
    question1();
  } catch (e) {
    console.error(e);
  }

  try {
    question2();
  } catch (e) {
    console.error(e);
  }

  try {
    question3();
  } catch (e) {
    console.error(e);
  }
});
