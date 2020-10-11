import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Sell2Page } from './sell2.page';

describe('Sell2Page', () => {
  let component: Sell2Page;
  let fixture: ComponentFixture<Sell2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sell2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Sell2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
