import { Request, Response } from 'express';
import { parseISO } from 'date-fns';
import { container } from 'tsyringe';

import CreateAppointmentService from '@modules/appointments/services/CreateAppointmentService';

class AppointmentController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { provider_id, date } = request.body;

    // parseISO string in -> date
    const parsedDate = parseISO(date);

    const createAppointment = container.resolve(CreateAppointmentService);

    const appointment = await createAppointment.execute({
      date: parsedDate,
      provider_id,
    });

    return response.json(appointment);
  }
}

export default AppointmentController;