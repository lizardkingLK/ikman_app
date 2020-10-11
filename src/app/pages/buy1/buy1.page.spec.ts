import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Buy1Page } from './buy1.page';

describe('Buy1Page', () => {
  let component: Buy1Page;
  let fixture: ComponentFixture<Buy1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buy1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Buy1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
