/**
 * Encapsulates a controller.
 */
export class HomeController {

  /**
   * Renders the home page.
   *
   * @param {object} req - Express request object.
   * @param {object} res - Express response object.
   * @param {Function} next - Express next middleware function.
   */
  async index (req, res, next) {
    try {
      res.render('home/index')
    } catch (error) {
      next(error)
    }
  }


  async subscribeNewsletter (req, res, next) {
    try {
      req.session.flash = { type: 'success', text: 'Successfully signed up to the newspaper' }
      res.redirect('/')
    } catch (error) {
      next(error)
    }
  }

  async sendMail (req, res, next) {
    try {
      console.log(req.body)
      req.session.flash = { type: 'success', text: 'Successfully sent mail' }
      res.redirect('/')
    } catch (error) {

    }
  }
}
