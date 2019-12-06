import { TestBed, async } from '@angular/core/testing';

import { TodoService } from './todo.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('TodoService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    httpTestingController = TestBed.get(HttpTestingController);
  })

  afterEach(() => {
    httpTestingController.verify();
  })

  it('should be created', () => {
    const service: TodoService = TestBed.get(TodoService);
    expect(service).toBeTruthy();
  });

  it('should return values on getAll', async(() => {
    const service: TodoService = TestBed.get(TodoService);

    service.getAll().subscribe((values) => {
      expect(values).toEqual([{id: 123, title: 'ABC', completed: false}]);
    });

    httpTestingController.expectOne('https://jsonplaceholder.typicode.com/todos')
      .flush([{id: 123, title: 'ABC', completed: false}]);
  }));
});
