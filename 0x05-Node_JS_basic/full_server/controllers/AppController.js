/**
 * Contains the miscellaneous route handlers.
 * @author DYung26 <https://github.com/DYung26>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
