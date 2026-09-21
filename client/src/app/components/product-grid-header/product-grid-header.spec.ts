import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductGridHeader } from './product-grid-header';

describe('ProductGridHeader', () => {
  let component: ProductGridHeader;
  let fixture: ComponentFixture<ProductGridHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductGridHeader],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductGridHeader);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
