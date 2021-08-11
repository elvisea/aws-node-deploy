import { Request, Response } from 'express';

import CreateCourseService from './CreateCourseService';

export function createCourse(
  request: Request,
  response: Response,
): Response<void> {
  CreateCourseService.execute({
    name: 'NodeJs',
    educator: 'Elvis',
    duration: 20,
  });

  return response.send();
}
