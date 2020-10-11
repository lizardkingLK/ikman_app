import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Buy2Page } from './buy2.page';

describe('Buy2Page', () => {
  let component: Buy2Page;
  let fixture: ComponentFixture<Buy2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buy2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Buy2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
