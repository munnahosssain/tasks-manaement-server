const { getTasksServices } = require("../services/tasks.services");

exports.getTasks = async (req, res, next) => {
  try {
    const tasks = await getTasksServices(req.body);
    console.log("06", tasks);

    res.status(200).json({
      status: "Success",
      data: tasks,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Tasks Not Found!",
      error: error.message,
    });
  }
};
