"use strict";

module.exports = function (Todolist) {
  Todolist.postNewTask2 = function (body) {};

  Todolist.postNewTask = function (id, title, isDone) {
    Todolist.create({ id: id, title: title, isDone: isDone });
  };

  Todolist.remoteMethod("postNewTask", {
    description: "add to toDo DB new task",
    accepts: [
      {
        arg: "id",
        type: "number",
        require: true,
      },
      {
        arg: "title",
        type: "string",
        require: true,
      },
      {
        arg: "isDone",
        type: "boolean",
        require: true,
      },
    ],
    http: {
      path: "/postNewTask",
      verb: "post",
    },
  });

  Todolist.postNewTask2 = function (id, title, isDone) {
    Todolist.create({ id: id, title: title, isDone: isDone });
  };
};
