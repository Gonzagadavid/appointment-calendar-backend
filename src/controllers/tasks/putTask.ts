import { ACCEPTED } from '../../constants/status';
import { TASK_MODIFY } from '../../constants/strings';
import { updateTask } from '../../services/tasks';
import { Handler } from '../../types';

const putTask: Handler = async (req, res, next) => {
  try {
    const { user, body, params: { id } } = req;

    await updateTask(id, { ...user, ...body });

    res.status(ACCEPTED).json({ message: TASK_MODIFY });
  } catch (err) {
    next(err);
  }
};

export default putTask;
