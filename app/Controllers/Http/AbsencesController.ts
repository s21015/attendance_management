import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AbsencesController {
  public async index(ctx: HttpContextContract) {
    const data = {
      title: '~~~~',
      message: '!!!!!'
    }
    return ctx.view.render('absences/index', data)
  }
}
