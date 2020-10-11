import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Sell1Page } from './sell1.page';

describe('Sell1Page', () => {
  let component: Sell1Page;
  let fixture: ComponentFixture<Sell1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sell1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Sell1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
