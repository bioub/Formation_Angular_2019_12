import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ItemComponent } from './item/item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { TodoService } from './todo.service';
import { of } from 'rxjs';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FormComponent,
        ListComponent,
        ItemComponent,
      ],
      providers: [
        {
          provide: TodoService,
          useValue: {
            getAll() {
              of([{id: 123, title: 'ABC', completed: false}])
            }
          }
        }
      ],
      imports: [
     //   HttpClientModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  // it(`should have as title 'TodoAngular'`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('TodoAngular');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('.content span').textContent).toContain('TodoAngular app is running!');
  // });
});
