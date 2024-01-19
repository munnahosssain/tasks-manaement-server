const Tasks = require("../models/tasks");

exports.getTasksServices = async (query) => {

  const copyQuery = { ...query };

  const tasks = await Tasks.find({})

  return tasks;
};
