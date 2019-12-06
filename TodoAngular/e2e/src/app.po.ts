import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('todo-root .content span')).getText() as Promise<string>;
  }

  fillNewTodo(value) {
    element(by.css('todo-form input[type="text"]')).sendKeys(value);
  }

  submitForm() {
    element(by.css('todo-form form')).submit();
  }

  getLastTodoInput() {
    return element(by.css('todo-item:last-child input[type="text"]')).getAttribute('value');
  }
}
