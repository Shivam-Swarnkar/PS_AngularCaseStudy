import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ECommerceComponent } from './e-commerce.component';
import { ECommerceService } from './e-commerce.service';

describe('ECommerceComponent', () => {
  let service: ECommerceService;
  let component: ECommerceComponent;
  let fixture: ComponentFixture<ECommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ECommerceComponent],
      providers: [ECommerceService],
    }).compileComponents();
    service = TestBed.inject(ECommerceService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ECommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
